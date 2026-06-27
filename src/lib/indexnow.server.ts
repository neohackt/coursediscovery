const INDEXNOW_API_URL = "https://api.indexnow.org/IndexNow";
const HOST = "coursediscovery.net";
const KEY = "094be34b63884bc4a147c6313b7a719a";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

interface IndexNowResponse {
  success: boolean;
  status?: number;
  error?: string;
}

export async function submitToIndexNow(
  urls: string[],
): Promise<IndexNowResponse> {
  if (!urls.length) {
    return { success: false, error: "No URLs provided" };
  }

  const validUrls = urls.filter((url) => url.startsWith(`https://${HOST}`));
  if (!validUrls.length) {
    return { success: false, error: "No valid URLs for this host" };
  }

  try {
    const response = await fetch(INDEXNOW_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList: validUrls,
      }),
    });

    if (response.ok) {
      return { success: true, status: response.status };
    }

    const text = await response.text();
    return { success: false, status: response.status, error: text };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export function getAllRouteUrls(): string[] {
  const base = `https://${HOST}`;
  return [
    `${base}/`,
    `${base}/courses`,
    `${base}/udemy-deals`,
    `${base}/blog`,
    `${base}/blog/best-udemy-ai-courses`,
    `${base}/about`,
    `${base}/privacy`,
    `${base}/terms`,
    `${base}/affiliate-disclosure`,
    `${base}/advertiser-disclosure`,
    `${base}/disclaimer`,
    `${base}/contact`,
    `${base}/cookie`,
  ];
}
