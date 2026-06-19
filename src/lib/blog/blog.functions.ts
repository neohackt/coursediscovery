import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getAllPosts, getPostBySlug } from "./reader.server";

export const fetchAllPosts = createServerFn({ method: "GET" }).handler(
  async () => {
    try {
      const posts = getAllPosts();
      return { posts, error: null as string | null };
    } catch (err) {
      console.error("[Blog] fetchAllPosts failed", err);
      return { posts: [], error: "Failed to load blog posts" };
    }
  },
);

export const fetchPostBySlug = createServerFn({ method: "GET" })
  .inputValidator((input: { slug: string }) =>
    z.object({ slug: z.string().min(1).max(200) }).parse(input),
  )
  .handler(async ({ data }) => {
    try {
      const post = getPostBySlug(data.slug);
      return { post, error: null as string | null };
    } catch (err) {
      console.error("[Blog] fetchPostBySlug failed", err);
      return { post: null, error: "Failed to load blog post" };
    }
  });
