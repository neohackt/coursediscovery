import { createServerFn } from "@tanstack/react-start";

const CLICK_COUNT_KEY = "cd_deal_clicks";

async function getRedis() {
  const url = process.env.coursediscovery_REDIS_URL ?? process.env.REDIS_URL;
  if (!url) return null;
  const { Redis } = await import("@upstash/redis");
  return new Redis({ url }) as {
    get: <T>(k: string) => Promise<T | null>;
    set: (k: string, v: unknown) => Promise<void>;
  };
}

export const getClickCounts = createServerFn({ method: "GET" }).handler(
  async () => {
    try {
      const redis = await getRedis();
      if (!redis) return {};
      const counts = await redis.get<Record<string, number>>(CLICK_COUNT_KEY);
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
      const redis = await getRedis();
      if (!redis) return { success: false, count: 0 };
      const counts =
        (await redis.get<Record<string, number>>(CLICK_COUNT_KEY)) ?? {};
      counts[dealId] = (counts[dealId] ?? 0) + 1;
      await redis.set(CLICK_COUNT_KEY, counts);
      return { success: true, count: counts[dealId] };
    } catch {
      return { success: false, count: 0 };
    }
  });
