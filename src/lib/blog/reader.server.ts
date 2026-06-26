import matter from "gray-matter";
import type { BlogPost, BlogPostFrontmatter } from "./types";

const mdxFiles = import.meta.glob("/src/content/blog/*.mdx", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function parseMdx(raw: string, fallbackSlug: string): BlogPost {
  const { data, content } = matter(raw);
  const frontmatter = data as BlogPostFrontmatter;

  return {
    title: frontmatter.title ?? "Untitled",
    slug: frontmatter.slug ?? fallbackSlug,
    date: frontmatter.date ?? new Date().toISOString().slice(0, 10),
    excerpt: frontmatter.excerpt ?? "",
    image: frontmatter.image,
    author: frontmatter.author,
    category: frontmatter.category,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  const posts = Object.entries(mdxFiles)
    .map(([filePath, raw]) => {
      const fallbackSlug = filePath
        .replace("/src/content/blog/", "")
        .replace(".mdx", "");
      return parseMdx(raw, fallbackSlug);
    })
    .filter((post) => {
      const raw = mdxFiles[`/src/content/blog/${post.slug}.mdx`];
      if (!raw) return false;
      const { data } = matter(raw);
      return !(data as BlogPostFrontmatter).draft;
    });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const raw = mdxFiles[`/src/content/blog/${slug}.mdx`];
  if (!raw) return null;
  return parseMdx(raw, slug);
}
