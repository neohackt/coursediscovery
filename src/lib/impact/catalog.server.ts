// Server-only catalog service. Builds on the Impact client and returns
// normalized Course[] for callers (server functions, route loaders).
import { AFFILIATE_URL } from "../constants";
import { getCatalogId, impactRequest } from "./client.server";
import { transformItems } from "./transformer";
import type { Course, ImpactCatalogItem, ImpactCatalogResponse } from "./types";

function isEnglish(text: string): boolean {
  const nonAsciiCount = text
    .split("")
    .filter((c) => c.charCodeAt(0) > 127).length;
  const totalLength = text.length || 1;
  return nonAsciiCount / totalLength < 0.05;
}

function normalizeCategory(raw: string): string {
  const c = (raw || "").trim();
  if (!c) return "Other";
  const first = c.split(/[>|/]/)[0].trim();
  return first || "Other";
}

// --- In-memory cache (1 hour TTL) ---
let cachedItems: ImpactCatalogItem[] | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

async function fetchAllCatalogItems(): Promise<ImpactCatalogItem[]> {
  const now = Date.now();
  if (cachedItems && now - cacheTimestamp < CACHE_TTL) {
    return cachedItems;
  }

  const catalogId = getCatalogId();
  const path = `/Mediapartners/${process.env.IMPACT_ACCOUNT_SID}/Catalogs/${catalogId}/Items`;
  const pageSize = 100;

  // Fetch page 1 to get total count
  const firstPage = await impactRequest<ImpactCatalogResponse>(path, {
    query: { Page: 1, PageSize: pageSize },
  });
  const firstItems = firstPage.Items || [];
  if (!firstItems.length) {
    cachedItems = [];
    cacheTimestamp = now;
    return [];
  }

  const totalPages = Math.min(
    parseInt(firstPage["@numpages"] || "1", 10) || 1,
    20,
  );

  if (totalPages <= 1) {
    cachedItems = firstItems;
    cacheTimestamp = now;
    return firstItems;
  }

  // Fetch remaining pages in parallel
  const remainingPages = Array.from({ length: totalPages - 1 }, (_, i) => i + 2);
  const results = await Promise.all(
    remainingPages.map((page) =>
      impactRequest<ImpactCatalogResponse>(path, {
        query: { Page: page, PageSize: pageSize },
      }).then((d) => d.Items || []),
    ),
  );

  const allItems = [...firstItems, ...results.flat()];
  cachedItems = allItems;
  cacheTimestamp = now;
  return allItems;
}

export async function getCatalogProducts(
  opts: { page?: number; pageSize?: number } = {},
): Promise<Course[]> {
  const catalogId = getCatalogId();
  const path = `/Mediapartners/${process.env.IMPACT_ACCOUNT_SID}/Catalogs/${catalogId}/Items`;
  const data = await impactRequest<ImpactCatalogResponse>(path, {
    query: { Page: opts.page, PageSize: opts.pageSize },
  });
  return transformItems(data.Items, AFFILIATE_URL);
}

export async function getFeaturedCourses(limit = 6): Promise<Course[]> {
  const catalogId = getCatalogId();
  const path = `/Mediapartners/${process.env.IMPACT_ACCOUNT_SID}/Catalogs/${catalogId}/Items`;
  const data = await impactRequest<ImpactCatalogResponse>(path, {
    query: { Page: 1, PageSize: 50 },
  });
  const items = data.Items || [];
  const sorted = items.sort((a, b) => {
    const aEng = isEnglish(`${a.Name ?? ""} ${a.Description ?? ""}`) ? 0 : 1;
    const bEng = isEnglish(`${b.Name ?? ""} ${b.Description ?? ""}`) ? 0 : 1;
    return aEng - bEng;
  });
  return transformItems(sorted, AFFILIATE_URL).slice(0, limit);
}

export async function getAllEnglishAICourses(max = 200): Promise<Course[]> {
  const items = await fetchAllCatalogItems();
  const byCategory = new Map<string, ImpactCatalogItem[]>();
  for (const item of items) {
    const cat = normalizeCategory(item.Category ?? "");
    if (!byCategory.has(cat)) byCategory.set(cat, []);
    byCategory.get(cat)!.push(item);
  }
  const result: ImpactCatalogItem[] = [];
  for (const catItems of byCategory.values()) {
    const english = catItems.filter((item) =>
      isEnglish(`${item.Name ?? ""} ${item.Description ?? ""}`),
    );
    const nonEnglish = catItems.filter(
      (item) => !isEnglish(`${item.Name ?? ""} ${item.Description ?? ""}`),
    );
    result.push(...english, ...nonEnglish);
  }
  return transformItems(result, AFFILIATE_URL).slice(0, max);
}

export async function getCourseById(id: string): Promise<Course | null> {
  const all = await getCatalogProducts({ pageSize: 100 });
  return all.find((c) => c.id === id) ?? null;
}

export async function getCoursesByCategory(
  category: string,
  keywords: string[] = [],
): Promise<Course[]> {
  const all = await getCatalogProducts({ pageSize: 100 });
  const needle = category.toLowerCase();
  const exact = all.filter((c) => c.category.toLowerCase() === needle);
  if (exact.length) return exact;

  const terms = [needle, ...keywords.map((k) => k.toLowerCase())];
  return all.filter((c) => {
    const hay = `${c.title} ${c.description} ${c.category}`.toLowerCase();
    return terms.some((t) => hay.includes(t));
  });
}

export interface CategoryBucket {
  category: string;
  total: number;
  courses: Course[];
}

export async function getCoursesGroupedByCategory(
  perCategory = 30,
): Promise<CategoryBucket[]> {
  const items = await fetchAllCatalogItems();
  const byCategory = new Map<string, ImpactCatalogItem[]>();
  for (const item of items) {
    const cat = normalizeCategory(item.Category ?? "");
    if (!byCategory.has(cat)) byCategory.set(cat, []);
    byCategory.get(cat)!.push(item);
  }
  const buckets: CategoryBucket[] = [];
  for (const [category, catItems] of byCategory) {
    const english = catItems.filter((item) =>
      isEnglish(`${item.Name ?? ""} ${item.Description ?? ""}`),
    );
    const nonEnglish = catItems.filter(
      (item) => !isEnglish(`${item.Name ?? ""} ${item.Description ?? ""}`),
    );
    const sorted = [...english, ...nonEnglish];
    const courses = transformItems(sorted, AFFILIATE_URL).slice(0, perCategory);
    buckets.push({ category, total: catItems.length, courses });
  }
  buckets.sort((a, b) => b.total - a.total);
  return buckets;
}
