import { createServerFn } from "@tanstack/react-start";

export const getClickCounts = createServerFn({ method: "GET" }).handler(
  async () => {
    return {};
  },
);

export const incrementClickCount = createServerFn({ method: "POST" })
  .validator((dealId: string) => dealId)
  .handler(async () => {
    return { success: false, count: 0 };
  });
