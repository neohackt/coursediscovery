import { createServerFn } from "@tanstack/react-start";
import { kv } from "@vercel/kv";

const CLICK_COUNT_KEY = "cd_deal_clicks";

export const getClickCounts = createServerFn({ method: "GET" }).handler(
  async () => {
    try {
      const counts = await kv.get<Record<string, number>>(CLICK_COUNT_KEY);
      return counts ?? {};
    } catch {
      return {};
    }
  },
);

export const incrementClickCount = createServerFn({ method: "POST" })
  .validator((dealId: string) => dealId)
  .handler(async ({ data: dealId }) => {
    try {
      const counts =
        (await kv.get<Record<string, number>>(CLICK_COUNT_KEY)) ?? {};
      counts[dealId] = (counts[dealId] ?? 0) + 1;
      await kv.set(CLICK_COUNT_KEY, counts);
      return { success: true, count: counts[dealId] };
    } catch {
      return { success: false, count: 0 };
    }
  });
