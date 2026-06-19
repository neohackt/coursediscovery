// Server-only Impact API client. The .server.ts suffix prevents Vite from
// ever bundling this file into the browser. Credentials read at request time.
import process from "node:process";

const BASE_URL = "https://api.impact.com";

function getCredentials() {
  const accountSid = process.env.IMPACT_ACCOUNT_SID;
  const authToken = process.env.IMPACT_AUTH_TOKEN;
  const catalogId = process.env.IMPACT_CATALOG_ID;
  const mediaPartnerId = process.env.IMPACT_MEDIA_PARTNER_ID;
  if (!accountSid || !authToken || !catalogId) {
    throw new Error("Impact API credentials are not configured");
  }
  return { accountSid, authToken, catalogId, mediaPartnerId };
}

interface RequestOptions {
  query?: Record<string, string | number | undefined>;
  retries?: number;
}

export async function impactRequest<T>(
  path: string,
  opts: RequestOptions = {},
): Promise<T> {
  const { accountSid, authToken } = getCredentials();
  const url = new URL(`${BASE_URL}${path}`);
  if (opts.query) {
    for (const [k, v] of Object.entries(opts.query)) {
      if (v !== undefined && v !== null && v !== "")
        url.searchParams.set(k, String(v));
    }
  }
  // Impact returns XML by default; force JSON.
  if (!url.searchParams.has("PageSize"))
    url.searchParams.set("PageSize", "100");

  const auth = `Basic ${btoa(`${accountSid}:${authToken}`)}`;
  const retries = opts.retries ?? 2;

  let lastError: unknown;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url.toString(), {
        headers: { Authorization: auth, Accept: "application/json" },
      });
      if (!res.ok) {
        const body = await res.text().catch(() => "");
        throw new Error(`Impact API ${res.status}: ${body.slice(0, 200)}`);
      }
      return (await res.json()) as T;
    } catch (err) {
      lastError = err;
      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, 250 * (attempt + 1)));
      }
    }
  }
  throw lastError instanceof Error
    ? lastError
    : new Error("Impact API request failed");
}

export function getCatalogId(): string {
  return getCredentials().catalogId;
}
