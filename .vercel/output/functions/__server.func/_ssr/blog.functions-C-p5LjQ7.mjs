import { c as createServerRpc } from "./createServerRpc-BF2527bV.mjs";
import fs from "node:fs";
import path from "node:path";
import { m as matter } from "../_libs/gray-matter.mjs";
import { c as createServerFn } from "./server-CBn92ml7.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "fs";
import "../_libs/section-matter.mjs";
import "../_libs/kind-of.mjs";
import "../_libs/extend-shallow.mjs";
import "../_libs/is-extendable.mjs";
import "../_libs/js-yaml.mjs";
import "../_libs/strip-bom-string.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const BLOG_DIR = path.resolve(process.cwd(), "src/content/blog");
function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }
}
function readMdxFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data;
  return {
    title: frontmatter.title ?? "Untitled",
    slug: frontmatter.slug ?? path.basename(filePath, ".mdx"),
    date: frontmatter.date ?? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
    excerpt: frontmatter.excerpt ?? "",
    image: frontmatter.image,
    author: frontmatter.author,
    category: frontmatter.category,
    content
  };
}
function getAllPosts() {
  ensureBlogDir();
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((file) => readMdxFile(path.join(BLOG_DIR, file))).filter((post) => {
    const raw = fs.readFileSync(
      path.join(BLOG_DIR, `${post.slug}.mdx`),
      "utf-8"
    );
    const { data } = matter(raw);
    return !data.draft;
  });
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
function getPostBySlug(slug) {
  ensureBlogDir();
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return readMdxFile(filePath);
}
const fetchAllPosts_createServerFn_handler = createServerRpc({
  id: "4a40a4129642fc7792a1a069bfd74efbf13250e0bf9200d206c3a557e6620867",
  name: "fetchAllPosts",
  filename: "src/lib/blog/blog.functions.ts"
}, (opts) => fetchAllPosts.__executeServer(opts));
const fetchAllPosts = createServerFn({
  method: "GET"
}).handler(fetchAllPosts_createServerFn_handler, async () => {
  try {
    const posts = getAllPosts();
    return {
      posts,
      error: null
    };
  } catch (err) {
    console.error("[Blog] fetchAllPosts failed", err);
    return {
      posts: [],
      error: "Failed to load blog posts"
    };
  }
});
const fetchPostBySlug_createServerFn_handler = createServerRpc({
  id: "82d290afec4528618ab5960b7dcf266cae46963e01cf4fd78e5b87136a64dcf6",
  name: "fetchPostBySlug",
  filename: "src/lib/blog/blog.functions.ts"
}, (opts) => fetchPostBySlug.__executeServer(opts));
const fetchPostBySlug = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  slug: stringType().min(1).max(200)
}).parse(input)).handler(fetchPostBySlug_createServerFn_handler, async ({
  data
}) => {
  try {
    const post = getPostBySlug(data.slug);
    return {
      post,
      error: null
    };
  } catch (err) {
    console.error("[Blog] fetchPostBySlug failed", err);
    return {
      post: null,
      error: "Failed to load blog post"
    };
  }
});
export {
  fetchAllPosts_createServerFn_handler,
  fetchPostBySlug_createServerFn_handler
};
