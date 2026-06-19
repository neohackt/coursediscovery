import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-CBn92ml7.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const appCss = "/assets/styles-7asJuUAm.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$d = createRootRouteWithContext()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Lovable App" },
        { name: "description", content: "Lovable Generated Project" },
        { name: "author", content: "Lovable" },
        { property: "og:title", content: "Lovable App" },
        { property: "og:description", content: "Lovable Generated Project" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "@Lovable" }
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss
        }
      ]
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent
  }
);
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$d.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$c = () => import("./udemy-deals-CNkFBvXf.mjs");
const Route$c = createFileRoute("/udemy-deals")({
  head: () => ({
    meta: [{
      title: "Udemy Coupons & Promo Codes — Verified Deals | Course Discovery"
    }, {
      name: "description",
      content: "Save on Udemy courses with hand-picked coupon codes and promo deals. Verified offers on AI, programming, business and design courses — updated regularly."
    }, {
      property: "og:title",
      content: "Udemy Coupons & Promo Codes — Verified Deals"
    }, {
      property: "og:description",
      content: "Verified Udemy coupons and promo codes on top courses. Save up to 80% off."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./terms-UuFoFKO_.mjs");
const Route$b = createFileRoute("/terms")({
  head: () => ({
    meta: [{
      title: "Terms and Conditions | Course Discovery"
    }, {
      name: "description",
      content: "CourseDiscovery terms and conditions of use — please read before using our website."
    }, {
      property: "og:title",
      content: "Terms and Conditions | Course Discovery"
    }, {
      property: "og:description",
      content: "CourseDiscovery terms and conditions of use — please read before using our website."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./privacy-CRdmGX-t.mjs");
const Route$a = createFileRoute("/privacy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy | Course Discovery"
    }, {
      name: "description",
      content: "CourseDiscovery privacy policy — how we collect, use, and protect your information."
    }, {
      property: "og:title",
      content: "Privacy Policy | Course Discovery"
    }, {
      property: "og:description",
      content: "CourseDiscovery privacy policy — how we collect, use, and protect your information."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./disclaimer-D2dDzmfM.mjs");
const Route$9 = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [{
      title: "Disclaimer | Course Discovery"
    }, {
      name: "description",
      content: "CourseDiscovery general disclaimer — educational content, no professional advice, third-party links."
    }, {
      property: "og:title",
      content: "Disclaimer | Course Discovery"
    }, {
      property: "og:description",
      content: "CourseDiscovery general disclaimer — educational content, no professional advice, third-party links."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./courses-B54it20Z.mjs");
const Route$8 = createFileRoute("/courses")({
  head: () => ({
    meta: [{
      title: "AI Courses by Category | Course Discovery"
    }, {
      name: "description",
      content: "Browse curated AI courses by category — marketing, development, productivity, data, and more."
    }, {
      property: "og:title",
      content: "AI Courses by Category | Course Discovery"
    }, {
      property: "og:description",
      content: "Browse curated AI courses by category to find your next learning path."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./cookie-PMEn5pDr.mjs");
const Route$7 = createFileRoute("/cookie")({
  head: () => ({
    meta: [{
      title: "Cookie Policy | Course Discovery"
    }, {
      name: "description",
      content: "CourseDiscovery cookie policy — how we use cookies and similar technologies on our website."
    }, {
      property: "og:title",
      content: "Cookie Policy | Course Discovery"
    }, {
      property: "og:description",
      content: "CourseDiscovery cookie policy — how we use cookies and similar technologies on our website."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./contact-B6ISigZR.mjs");
const Route$6 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Us | Course Discovery"
    }, {
      name: "description",
      content: "Get in touch with CourseDiscovery — questions, feedback, or partnership inquiries."
    }, {
      property: "og:title",
      content: "Contact Us | Course Discovery"
    }, {
      property: "og:description",
      content: "Get in touch with CourseDiscovery — questions, feedback, or partnership inquiries."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./blog-BvfTlpkz.mjs");
const Route$5 = createFileRoute("/blog")({
  head: () => ({
    meta: [{
      title: "Blog | Course Discovery"
    }, {
      name: "description",
      content: "Read the latest articles on AI learning, course recommendations, and skill development tips from CourseDiscovery."
    }, {
      property: "og:title",
      content: "Blog | Course Discovery"
    }, {
      property: "og:description",
      content: "Read the latest articles on AI learning, course recommendations, and skill development tips from CourseDiscovery."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./affiliate-disclosure-ClOWMz7X.mjs");
const Route$4 = createFileRoute("/affiliate-disclosure")({
  head: () => ({
    meta: [{
      title: "Affiliate Disclosure | Course Discovery"
    }, {
      name: "description",
      content: "CourseDiscovery affiliate disclosure — transparency about our affiliate relationships and earnings."
    }, {
      property: "og:title",
      content: "Affiliate Disclosure | Course Discovery"
    }, {
      property: "og:description",
      content: "CourseDiscovery affiliate disclosure — transparency about our affiliate relationships and earnings."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./advertiser-disclosure-DnImEswW.mjs");
const Route$3 = createFileRoute("/advertiser-disclosure")({
  head: () => ({
    meta: [{
      title: "Advertiser Disclosure | Course Discovery"
    }, {
      name: "description",
      content: "CourseDiscovery advertiser disclosure — how advertising and sponsorship relationships work on our site."
    }, {
      property: "og:title",
      content: "Advertiser Disclosure | Course Discovery"
    }, {
      property: "og:description",
      content: "CourseDiscovery advertiser disclosure — how advertising and sponsorship relationships work on our site."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about-C9-aCpRk.mjs");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About CourseDiscovery | Course Discovery"
    }, {
      name: "description",
      content: "CourseDiscovery is an independent learning resource platform helping learners discover high-quality online courses across AI, technology, business, marketing, productivity, and professional development."
    }, {
      property: "og:title",
      content: "About CourseDiscovery | Course Discovery"
    }, {
      property: "og:description",
      content: "CourseDiscovery is an independent learning resource platform helping learners discover high-quality online courses across AI, technology, business, marketing, productivity, and professional development."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-BdfjdRQA.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Course Discovery | Learn AI Skills Online"
    }, {
      name: "description",
      content: "Discover curated AI learning resources covering ChatGPT, Prompt Engineering, AI Automation, Generative AI and more."
    }, {
      name: "keywords",
      content: "AI Courses, ChatGPT Courses, Prompt Engineering, AI Automation, Learn AI, Generative AI"
    }, {
      property: "og:title",
      content: "Course Discovery | Learn AI Skills Online"
    }, {
      property: "og:description",
      content: "Curated AI learning resources for beginners, marketers, developers and freelancers."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "/"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }, {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const fetchAllPosts = createServerFn({
  method: "GET"
}).handler(createSsrRpc("4a40a4129642fc7792a1a069bfd74efbf13250e0bf9200d206c3a557e6620867"));
const fetchPostBySlug = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  slug: stringType().min(1).max(200)
}).parse(input)).handler(createSsrRpc("82d290afec4528618ab5960b7dcf266cae46963e01cf4fd78e5b87136a64dcf6"));
const $$splitComponentImporter = () => import("./blog._slug-Z1iTlf2q.mjs");
const Route = createFileRoute("/blog/$slug")({
  head: ({
    loaderData
  }) => {
    const data = loaderData;
    const post = data?.post;
    return {
      meta: [{
        title: post ? `${post.title} | Course Discovery` : "Blog | Course Discovery"
      }, {
        name: "description",
        content: post?.excerpt ?? "Read this article on CourseDiscovery."
      }, {
        property: "og:title",
        content: post?.title ?? "Blog Post"
      }, {
        property: "og:description",
        content: post?.excerpt ?? ""
      }]
    };
  },
  loader: async ({
    params
  }) => {
    const result = await fetchPostBySlug({
      data: {
        slug: params.slug
      }
    });
    return {
      post: result.post,
      error: result.error
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const UdemyDealsRoute = Route$c.update({
  id: "/udemy-deals",
  path: "/udemy-deals",
  getParentRoute: () => Route$d
});
const TermsRoute = Route$b.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$d
});
const PrivacyRoute = Route$a.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$d
});
const DisclaimerRoute = Route$9.update({
  id: "/disclaimer",
  path: "/disclaimer",
  getParentRoute: () => Route$d
});
const CoursesRoute = Route$8.update({
  id: "/courses",
  path: "/courses",
  getParentRoute: () => Route$d
});
const CookieRoute = Route$7.update({
  id: "/cookie",
  path: "/cookie",
  getParentRoute: () => Route$d
});
const ContactRoute = Route$6.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$d
});
const BlogRoute = Route$5.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$d
});
const AffiliateDisclosureRoute = Route$4.update({
  id: "/affiliate-disclosure",
  path: "/affiliate-disclosure",
  getParentRoute: () => Route$d
});
const AdvertiserDisclosureRoute = Route$3.update({
  id: "/advertiser-disclosure",
  path: "/advertiser-disclosure",
  getParentRoute: () => Route$d
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$d
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$d
});
const BlogSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => BlogRoute
});
const BlogRouteChildren = {
  BlogSlugRoute
};
const BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdvertiserDisclosureRoute,
  AffiliateDisclosureRoute,
  BlogRoute: BlogRouteWithChildren,
  ContactRoute,
  CookieRoute,
  CoursesRoute,
  DisclaimerRoute,
  PrivacyRoute,
  TermsRoute,
  UdemyDealsRoute
};
const routeTree = Route$d._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  createSsrRpc as c,
  fetchAllPosts as f,
  router as r
};
