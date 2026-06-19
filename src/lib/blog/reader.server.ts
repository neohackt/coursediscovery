import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogPost, BlogPostFrontmatter } from "./types";

const BLOG_DIR = path.resolve(process.cwd(), "src/content/blog");

function ensureBlogDir(): void {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }
}

function readMdxFile(filePath: string): BlogPost {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as BlogPostFrontmatter;

  return {
    title: frontmatter.title ?? "Untitled",
    slug: frontmatter.slug ?? path.basename(filePath, ".mdx"),
    date: frontmatter.date ?? new Date().toISOString().slice(0, 10),
    excerpt: frontmatter.excerpt ?? "",
    image: frontmatter.image,
    author: frontmatter.author,
    category: frontmatter.category,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  ensureBlogDir();

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((file) => readMdxFile(path.join(BLOG_DIR, file)))
    .filter((post) => {
      const raw = fs.readFileSync(
        path.join(BLOG_DIR, `${post.slug}.mdx`),
        "utf-8",
      );
      const { data } = matter(raw);
      return !(data as BlogPostFrontmatter).draft;
    });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  ensureBlogDir();

  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return readMdxFile(filePath);
}
