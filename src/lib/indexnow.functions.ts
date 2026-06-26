import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { submitToIndexNow, getAllRouteUrls } from "./indexnow.server";

export const submitUrlsToIndexNow = createServerFn({ method: "POST" })
  .inputValidator((input: { urls?: string[] } | undefined) =>
    z.object({ urls: z.array(z.string()).optional() }).parse(input ?? {}),
  )
  .handler(async ({ data }) => {
    const urls =
      data.urls && data.urls.length > 0 ? data.urls : getAllRouteUrls();
    const result = await submitToIndexNow(urls);
    return { urls, result };
  });
