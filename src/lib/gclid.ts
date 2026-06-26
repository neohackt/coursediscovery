const GCLID_KEY = "cd_gclid";
const KEYWORD_KEY = "cd_keyword";

function getFromStorage(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function captureFromUrl(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get("gclid");
    const keyword = params.get("keyword");
    if (gclid) localStorage.setItem(GCLID_KEY, gclid);
    if (keyword) localStorage.setItem(KEYWORD_KEY, keyword);
  } catch {
    /* ignore */
  }
}

export function buildAffiliateUrl(url: string): string {
  let gclid = getFromStorage(GCLID_KEY) || "";
  let keyword = getFromStorage(KEYWORD_KEY) || "";

  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    if (!gclid) gclid = params.get("gclid") || "";
    if (!keyword) keyword = params.get("keyword") || "";
  }

  return url
    .replace("{gclid}", gclid)
    .replace("{keyword}", keyword)
    .replace("{ailearninghub}", "");
}
