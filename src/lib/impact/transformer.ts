import type { Course, ImpactCatalogItem } from "./types";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop";

export function transformItem(
  item: ImpactCatalogItem,
  fallbackAffiliate: string,
): Course {
  const id = item.CatalogItemId ?? item.Id ?? cryptoRandom();
  return {
    id,
    title: (item.Name ?? "Untitled Course").trim(),
    description: (
      item.Description ?? "Learn in-demand AI skills with hands-on lessons."
    ).trim(),
    image: item.ImageUrl || item.AdditionalImageUrl || FALLBACK_IMAGE,
    affiliateUrl: item.TrackingLink || item.Url || fallbackAffiliate,
    category: (item.Category ?? "AI").trim(),
    brand: item.Manufacturer,
    price: item.CurrentPrice,
  };
}

export function transformItems(
  items: ImpactCatalogItem[] | undefined,
  fallbackAffiliate: string,
): Course[] {
  if (!items?.length) return [];
  return items.map((i) => transformItem(i, fallbackAffiliate));
}

function cryptoRandom() {
  return Math.random().toString(36).slice(2, 10);
}
