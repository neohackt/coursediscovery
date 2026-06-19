import { c as createSsrRpc } from "./router-4VIZ9_6n.mjs";
import { c as createServerFn } from "./server-CBn92ml7.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { a as Check, A as ArrowRight } from "../_libs/lucide-react.mjs";
import { o as objectType, n as numberType, a as arrayType, s as stringType } from "../_libs/zod.mjs";
createServerFn({
  method: "GET"
}).handler(createSsrRpc("6fe04a38603cac8edd0e230e075b9f2bccf9b1db55b1563abee3182b76979e7f"));
const fetchFeaturedCourses = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  limit: numberType().int().min(1).max(24).optional()
}).parse(input ?? {})).handler(createSsrRpc("18a603b1364d74e7bfdeacb6c04f726f6d6757c2342b9aaf1c18416d8340f04c"));
createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  category: stringType().min(1).max(80),
  keywords: arrayType(stringType().min(1).max(40)).max(10).optional()
}).parse(input)).handler(createSsrRpc("973ad4ea538ab076ac0674ea208b3d05781bb8e5c4d6008b078d98fbdd13dd28"));
const fetchCoursesGroupedByCategory = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  perCategory: numberType().int().min(1).max(100).optional()
}).parse(input ?? {})).handler(createSsrRpc("8061c5dfc0c6bddc3757759be3d0974415958ac1659a8dd63c4656c959bf2f04"));
const benefits = [
  "Beginner Friendly",
  "Practical Projects",
  "Certificate Included"
];
function CourseCard({
  course,
  index = 0
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.08 },
      className: "group flex flex-col overflow-hidden rounded-3xl border border-border bg-background transition hover:-translate-y-1 hover:border-primary/60",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden gradient-bg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: course.image,
              alt: course.title,
              loading: "lazy",
              className: "absolute inset-0 h-full w-full object-cover transition group-hover:scale-105",
              onError: (e) => {
                e.currentTarget.style.display = "none";
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-4 z-10 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur", children: course.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold line-clamp-2", children: course.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground line-clamp-3", children: course.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2", children: benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-primary" }),
            " ",
            b
          ] }, b)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: course.affiliateUrl,
              target: "_blank",
              rel: "nofollow sponsored noopener",
              className: "mt-7 inline-flex items-center justify-center gap-2 rounded-full gradient-bg px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90",
              children: [
                "View Course ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "script",
          {
            type: "application/ld+json",
            dangerouslySetInnerHTML: {
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Course",
                name: course.title,
                description: course.description,
                image: course.image,
                provider: course.brand ? { "@type": "Organization", name: course.brand } : void 0,
                url: course.affiliateUrl
              })
            }
          }
        )
      ]
    }
  );
}
function CourseCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col overflow-hidden rounded-3xl border border-border bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] animate-pulse bg-muted" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-3 p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-3/4 animate-pulse rounded bg-muted" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-full animate-pulse rounded bg-muted" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-5/6 animate-pulse rounded bg-muted" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-10 w-full animate-pulse rounded-full bg-muted" })
    ] })
  ] });
}
export {
  CourseCardSkeleton as C,
  CourseCard as a,
  fetchFeaturedCourses as b,
  fetchCoursesGroupedByCategory as f
};
