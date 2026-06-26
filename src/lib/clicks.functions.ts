import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const BASE_COUNTS: Record<string, number> = {
  "5": 412,
  "6": 387,
  "7": 354,
  "8": 298,
  "9": 176,
};

export const getClickCounts = createServerFn({ method: "GET" }).handler(
  async () => {
    return BASE_COUNTS;
  },
);

export const incrementClickCount = createServerFn({ method: "POST" })
  .inputValidator((dealId: string | undefined) =>
    z.string().parse(dealId),
  )
  .handler(async ({ data: dealId }) => {
    const current = BASE_COUNTS[dealId] ?? 0;
    return { success: true, count: current + 1 };
  });
