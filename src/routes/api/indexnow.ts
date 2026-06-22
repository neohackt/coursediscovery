import { defineEventHandler, readBody } from "h3";
import { submitToIndexNow, getAllRouteUrls } from "@/lib/indexnow.server";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method === "GET") {
    const urls = getAllRouteUrls();
    const result = await submitToIndexNow(urls);
    return {
      message: "Submitted all route URLs",
      urls,
      result,
    };
  }

  if (method === "POST") {
    const body = await readBody(event);
    const { urls } = body as { urls?: string[] };

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return {
        error: "Provide urls array in request body",
        example: { urls: ["https://coursediscovery.net/"] },
      };
    }

    const result = await submitToIndexNow(urls);
    return { urls, result };
  }

  return { error: "Method not allowed. Use GET or POST." };
});
