// Client-callable server functions for the Impact catalog.
// These wrap the .server.ts catalog service so components can fetch via RPC.
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import {
  getAllEnglishAICourses,
  getCoursesByCategory,
  getCoursesGroupedByCategory,
  getFeaturedCourses,
} from "./catalog.server";

export const fetchAllCourses = createServerFn({ method: "GET" }).handler(
  async () => {
    try {
      const courses = await getAllEnglishAICourses(200);
      return { courses, error: null as string | null };
    } catch (err) {
      console.error("[Impact] fetchAllCourses failed", err);
      return { courses: [], error: "Catalog refresh in progress" };
    }
  },
);

export const fetchFeaturedCourses = createServerFn({ method: "GET" })
  .inputValidator((input: { limit?: number } | undefined) =>
    z
      .object({ limit: z.number().int().min(1).max(24).optional() })
      .parse(input ?? {}),
  )
  .handler(async ({ data }) => {
    try {
      const courses = await getFeaturedCourses(data.limit ?? 6);
      return { courses, error: null as string | null };
    } catch (err) {
      console.error("[Impact] fetchFeaturedCourses failed", err);
      return { courses: [], error: "Catalog refresh in progress" };
    }
  });

export const fetchCoursesByCategory = createServerFn({ method: "GET" })
  .inputValidator((input: { category: string; keywords?: string[] }) =>
    z
      .object({
        category: z.string().min(1).max(80),
        keywords: z.array(z.string().min(1).max(40)).max(10).optional(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    try {
      const courses = await getCoursesByCategory(
        data.category,
        data.keywords ?? [],
      );
      return { courses, error: null as string | null };
    } catch (err) {
      console.error("[Impact] fetchCoursesByCategory failed", err);
      return { courses: [], error: "Catalog refresh in progress" };
    }
  });

export const fetchCoursesGroupedByCategory = createServerFn({ method: "GET" })
  .inputValidator((input: { perCategory?: number } | undefined) =>
    z
      .object({ perCategory: z.number().int().min(1).max(100).optional() })
      .parse(input ?? {}),
  )
  .handler(async ({ data }) => {
    try {
      const buckets = await getCoursesGroupedByCategory(data.perCategory ?? 30);
      return { buckets, error: null as string | null };
    } catch (err) {
      console.error("[Impact] fetchCoursesGroupedByCategory failed", err);
      return { buckets: [], error: "Catalog refresh in progress" };
    }
  });
