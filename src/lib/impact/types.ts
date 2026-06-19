// Public-safe shared types for Impact catalog integration.
// No secrets, no server-only imports — safe to import from components.

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  affiliateUrl: string;
  category: string;
  brand?: string;
  price?: string;
}

export interface ImpactCatalogItem {
  Id?: string;
  CatalogItemId?: string;
  Name?: string;
  Description?: string;
  Manufacturer?: string;
  Category?: string;
  Labels?: string;
  ImageUrl?: string;
  AdditionalImageUrl?: string;
  TrackingLink?: string;
  Url?: string;
  CurrentPrice?: string;
  OriginalPrice?: string;
  Currency?: string;
}

export interface ImpactCatalogResponse {
  Items?: ImpactCatalogItem[];
  "@numpages"?: string;
  "@page"?: string;
  "@total"?: string;
  "@uri"?: string;
  "@nextpageuri"?: string;
}
