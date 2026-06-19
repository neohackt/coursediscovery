import { c as createServerRpc } from "./createServerRpc-BF2527bV.mjs";
import { A as AFFILIATE_URL } from "./constants-BXTGtuSJ.mjs";
import process$1 from "node:process";
import { c as createServerFn } from "./server-CBn92ml7.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, n as numberType, a as arrayType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const BASE_URL = "https://api.impact.com";
function getCredentials() {
  const accountSid = process$1.env.IMPACT_ACCOUNT_SID;
  const authToken = process$1.env.IMPACT_AUTH_TOKEN;
  const catalogId = process$1.env.IMPACT_CATALOG_ID;
  const mediaPartnerId = process$1.env.IMPACT_MEDIA_PARTNER_ID;
  if (!accountSid || !authToken || !catalogId) {
    throw new Error("Impact API credentials are not configured");
  }
  return { accountSid, authToken, catalogId, mediaPartnerId };
}
async function impactRequest(path, opts = {}) {
  const { accountSid, authToken } = getCredentials();
  const url = new URL(`${BASE_URL}${path}`);
  if (opts.query) {
    for (const [k, v] of Object.entries(opts.query)) {
      if (v !== void 0 && v !== null && v !== "")
        url.searchParams.set(k, String(v));
    }
  }
  if (!url.searchParams.has("PageSize"))
    url.searchParams.set("PageSize", "100");
  const auth = `Basic ${btoa(`${accountSid}:${authToken}`)}`;
  const retries = opts.retries ?? 2;
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url.toString(), {
        headers: { Authorization: auth, Accept: "application/json" }
      });
      if (!res.ok) {
        const body = await res.text().catch(() => "");
        throw new Error(`Impact API ${res.status}: ${body.slice(0, 200)}`);
      }
      return await res.json();
    } catch (err) {
      lastError = err;
      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, 250 * (attempt + 1)));
      }
    }
  }
  throw lastError instanceof Error ? lastError : new Error("Impact API request failed");
}
function getCatalogId() {
  return getCredentials().catalogId;
}
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop";
function transformItem(item, fallbackAffiliate) {
  const id = item.CatalogItemId ?? item.Id ?? cryptoRandom();
  return {
    id,
    title: (item.Name ?? "Untitled Course").trim(),
    description: (item.Description ?? "Learn in-demand AI skills with hands-on lessons.").trim(),
    image: item.ImageUrl || item.AdditionalImageUrl || FALLBACK_IMAGE,
    affiliateUrl: item.TrackingLink || item.Url || fallbackAffiliate,
    category: (item.Category ?? "AI").trim(),
    brand: item.Manufacturer,
    price: item.CurrentPrice
  };
}
function transformItems(items, fallbackAffiliate) {
  if (!items?.length) return [];
  return items.map((i) => transformItem(i, fallbackAffiliate));
}
function cryptoRandom() {
  return Math.random().toString(36).slice(2, 10);
}
function isEnglish(text) {
  const nonAsciiCount = text.split("").filter((c) => c.charCodeAt(0) > 127).length;
  const totalLength = text.length || 1;
  return nonAsciiCount / totalLength < 0.05;
}
function normalizeCategory(raw) {
  const c = (raw || "").trim();
  if (!c) return "Other";
  const first = c.split(/[>|/]/)[0].trim();
  return first || "Other";
}
async function fetchAllCatalogItems() {
  const catalogId = getCatalogId();
  const path = `/Mediapartners/${process.env.IMPACT_ACCOUNT_SID}/Catalogs/${catalogId}/Items`;
  const pageSize = 100;
  const items = [];
  let page = 1;
  while (page <= 20) {
    const data = await impactRequest(path, {
      query: { Page: page, PageSize: pageSize }
    });
    if (!data.Items?.length) break;
    items.push(...data.Items);
    if (data.Items.length < pageSize) break;
    page++;
  }
  return items;
}
async function getCatalogProducts(opts = {}) {
  const catalogId = getCatalogId();
  const path = `/Mediapartners/${process.env.IMPACT_ACCOUNT_SID}/Catalogs/${catalogId}/Items`;
  const data = await impactRequest(path, {
    query: { Page: opts.page, PageSize: opts.pageSize }
  });
  return transformItems(data.Items, AFFILIATE_URL);
}
async function getFeaturedCourses(limit = 6) {
  const catalogId = getCatalogId();
  const path = `/Mediapartners/${process.env.IMPACT_ACCOUNT_SID}/Catalogs/${catalogId}/Items`;
  const data = await impactRequest(path, {
    query: { Page: 1, PageSize: 50 }
  });
  const items = data.Items || [];
  const sorted = items.sort((a, b) => {
    const aEng = isEnglish(`${a.Name ?? ""} ${a.Description ?? ""}`) ? 0 : 1;
    const bEng = isEnglish(`${b.Name ?? ""} ${b.Description ?? ""}`) ? 0 : 1;
    return aEng - bEng;
  });
  return transformItems(sorted, AFFILIATE_URL).slice(0, limit);
}
async function getAllEnglishAICourses(max = 200) {
  const items = await fetchAllCatalogItems();
  const byCategory = /* @__PURE__ */ new Map();
  for (const item of items) {
    const cat = normalizeCategory(item.Category ?? "");
    if (!byCategory.has(cat)) byCategory.set(cat, []);
    byCategory.get(cat).push(item);
  }
  const result = [];
  for (const catItems of byCategory.values()) {
    const english = catItems.filter(
      (item) => isEnglish(`${item.Name ?? ""} ${item.Description ?? ""}`)
    );
    const nonEnglish = catItems.filter(
      (item) => !isEnglish(`${item.Name ?? ""} ${item.Description ?? ""}`)
    );
    result.push(...english, ...nonEnglish);
  }
  return transformItems(result, AFFILIATE_URL).slice(0, max);
}
async function getCoursesByCategory(category, keywords = []) {
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
async function getCoursesGroupedByCategory(perCategory = 30) {
  const items = await fetchAllCatalogItems();
  const byCategory = /* @__PURE__ */ new Map();
  for (const item of items) {
    const cat = normalizeCategory(item.Category ?? "");
    if (!byCategory.has(cat)) byCategory.set(cat, []);
    byCategory.get(cat).push(item);
  }
  const buckets = [];
  for (const [category, catItems] of byCategory) {
    const english = catItems.filter(
      (item) => isEnglish(`${item.Name ?? ""} ${item.Description ?? ""}`)
    );
    const nonEnglish = catItems.filter(
      (item) => !isEnglish(`${item.Name ?? ""} ${item.Description ?? ""}`)
    );
    const sorted = [...english, ...nonEnglish];
    const courses = transformItems(sorted, AFFILIATE_URL).slice(0, perCategory);
    buckets.push({ category, total: catItems.length, courses });
  }
  buckets.sort((a, b) => b.total - a.total);
  return buckets;
}
const fetchAllCourses_createServerFn_handler = createServerRpc({
  id: "6fe04a38603cac8edd0e230e075b9f2bccf9b1db55b1563abee3182b76979e7f",
  name: "fetchAllCourses",
  filename: "src/lib/impact/courses.functions.ts"
}, (opts) => fetchAllCourses.__executeServer(opts));
const fetchAllCourses = createServerFn({
  method: "GET"
}).handler(fetchAllCourses_createServerFn_handler, async () => {
  try {
    const courses = await getAllEnglishAICourses(200);
    return {
      courses,
      error: null
    };
  } catch (err) {
    console.error("[Impact] fetchAllCourses failed", err);
    return {
      courses: [],
      error: "Catalog refresh in progress"
    };
  }
});
const fetchFeaturedCourses_createServerFn_handler = createServerRpc({
  id: "18a603b1364d74e7bfdeacb6c04f726f6d6757c2342b9aaf1c18416d8340f04c",
  name: "fetchFeaturedCourses",
  filename: "src/lib/impact/courses.functions.ts"
}, (opts) => fetchFeaturedCourses.__executeServer(opts));
const fetchFeaturedCourses = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  limit: numberType().int().min(1).max(24).optional()
}).parse(input ?? {})).handler(fetchFeaturedCourses_createServerFn_handler, async ({
  data
}) => {
  try {
    const courses = await getFeaturedCourses(data.limit ?? 6);
    return {
      courses,
      error: null
    };
  } catch (err) {
    console.error("[Impact] fetchFeaturedCourses failed", err);
    return {
      courses: [],
      error: "Catalog refresh in progress"
    };
  }
});
const fetchCoursesByCategory_createServerFn_handler = createServerRpc({
  id: "973ad4ea538ab076ac0674ea208b3d05781bb8e5c4d6008b078d98fbdd13dd28",
  name: "fetchCoursesByCategory",
  filename: "src/lib/impact/courses.functions.ts"
}, (opts) => fetchCoursesByCategory.__executeServer(opts));
const fetchCoursesByCategory = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  category: stringType().min(1).max(80),
  keywords: arrayType(stringType().min(1).max(40)).max(10).optional()
}).parse(input)).handler(fetchCoursesByCategory_createServerFn_handler, async ({
  data
}) => {
  try {
    const courses = await getCoursesByCategory(data.category, data.keywords ?? []);
    return {
      courses,
      error: null
    };
  } catch (err) {
    console.error("[Impact] fetchCoursesByCategory failed", err);
    return {
      courses: [],
      error: "Catalog refresh in progress"
    };
  }
});
const fetchCoursesGroupedByCategory_createServerFn_handler = createServerRpc({
  id: "8061c5dfc0c6bddc3757759be3d0974415958ac1659a8dd63c4656c959bf2f04",
  name: "fetchCoursesGroupedByCategory",
  filename: "src/lib/impact/courses.functions.ts"
}, (opts) => fetchCoursesGroupedByCategory.__executeServer(opts));
const fetchCoursesGroupedByCategory = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  perCategory: numberType().int().min(1).max(100).optional()
}).parse(input ?? {})).handler(fetchCoursesGroupedByCategory_createServerFn_handler, async ({
  data
}) => {
  try {
    const buckets = await getCoursesGroupedByCategory(data.perCategory ?? 30);
    return {
      buckets,
      error: null
    };
  } catch (err) {
    console.error("[Impact] fetchCoursesGroupedByCategory failed", err);
    return {
      buckets: [],
      error: "Catalog refresh in progress"
    };
  }
});
export {
  fetchAllCourses_createServerFn_handler,
  fetchCoursesByCategory_createServerFn_handler,
  fetchCoursesGroupedByCategory_createServerFn_handler,
  fetchFeaturedCourses_createServerFn_handler
};
