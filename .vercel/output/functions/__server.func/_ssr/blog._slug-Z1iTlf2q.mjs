import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Navbar, S as Section, F as Footer } from "./Section-BsGEHMCn.mjs";
import { R as Route } from "./router-4VIZ9_6n.mjs";
import "../_libs/seroval.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-CBn92ml7.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
function renderMarkdown(md) {
  let html = md.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold text-foreground mt-8 mb-3">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-foreground mt-10 mb-4">$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-foreground mt-12 mb-4">$1</h1>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>');
  html = html.replace(/^---$/gm, '<hr class="my-8 border-border" />');
  html = html.replace(/^- (.+)$/gm, '<li class="flex items-start gap-2"><span class="text-primary flex-shrink-0">•</span><span>$1</span></li>');
  html = html.replace(/(<li[^>]*>.*<\/li>\n?)+/g, (match) => `<ul class="space-y-2 my-4 pl-2">${match}</ul>`);
  html = html.replace(/^\d+\. (.+)$/gm, '<li class="flex items-start gap-2"><span class="text-primary flex-shrink-0 font-semibold">$1</span></li>');
  html = html.replace(/^```[\s\S]*?```/gm, (match) => {
    const code = match.replace(/^```\w*\n?/, "").replace(/\n?```$/, "");
    return `<pre class="bg-muted rounded-lg p-4 my-4 overflow-x-auto text-sm"><code>${code}</code></pre>`;
  });
  html = html.replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm">$1</code>');
  html = html.replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">$1</blockquote>');
  html = html.replace(/^(?!<[hluo]|<li|<hr|<pre|<blockquote|<a |<strong|<em)(.+)$/gm, (match) => {
    if (match.trim() === "") return "";
    return `<p class="my-4 leading-relaxed">${match}</p>`;
  });
  return html;
}
function BlogPostPage() {
  const loaderData = Route.useLoaderData();
  const {
    post,
    error
  } = loaderData;
  const renderedContent = reactExports.useMemo(() => post ? renderMarkdown(post.content) : "", [post]);
  if (error || !post) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "pt-32 pb-20 md:pt-40 md:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold", children: "Post Not Found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "The blog post you're looking for doesn't exist." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "mt-6 inline-flex items-center gap-2 text-primary hover:underline", children: "← Back to Blog" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "pt-32 pb-20 md:pt-40 md:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8", children: "← Back to Blog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "space-y-4 mb-10", children: [
        post.category && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary", children: post.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold leading-tight md:text-5xl", children: post.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm text-muted-foreground", children: [
          post.author && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.author }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          }) })
        ] }),
        post.excerpt && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: post.excerpt })
      ] }),
      post.image && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-10 overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.image, alt: post.title, className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-lg max-w-none text-muted-foreground", dangerouslySetInnerHTML: {
        __html: renderedContent
      } })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  BlogPostPage as component
};
