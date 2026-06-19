import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Navbar, S as Section, a as SectionHeader, F as Footer } from "./Section-BsGEHMCn.mjs";
import { f as fetchAllPosts } from "./router-4VIZ9_6n.mjs";
import "../_libs/seroval.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./constants-BXTGtuSJ.mjs";
import "../_libs/lucide-react.mjs";
import "./server-CBn92ml7.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
function BlogPage() {
  const fetcher = useServerFn(fetchAllPosts);
  const {
    data,
    isLoading
  } = useQuery({
    queryKey: ["blog", "all-posts"],
    queryFn: () => fetcher(),
    staleTime: 1e3 * 60 * 60 * 24
  });
  const posts = data?.posts ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "pt-32 pb-20 md:pt-40 md:pb-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Blog", title: "Latest Articles", subtitle: "Insights on AI learning, course recommendations, and skill development." }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: Array.from({
        length: 6
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-pulse rounded-2xl border border-border bg-card/60 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48 bg-muted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-muted rounded w-1/4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 bg-muted rounded w-3/4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-muted rounded w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-muted rounded w-2/3" })
        ] })
      ] }, i)) }) : posts.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: posts.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
        slug: post.slug
      }, className: "group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/60", children: [
        post.image && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.image, alt: post.title, className: "h-full w-full object-cover transition duration-500 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          post.category && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary", children: post.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-lg font-semibold leading-snug group-hover:text-primary transition-colors", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 line-clamp-2 text-sm text-muted-foreground", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-3 text-xs text-muted-foreground", children: [
            post.author && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.author }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            }) })
          ] })
        ] })
      ] }, post.slug)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "No blog posts yet. Check back soon!" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  BlogPage as component
};
