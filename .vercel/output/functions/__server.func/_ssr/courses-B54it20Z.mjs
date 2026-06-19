import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { C as CourseCardSkeleton, a as CourseCard, f as fetchCoursesGroupedByCategory } from "./CourseCard-MoU4Ir9d.mjs";
import { N as Navbar, S as Section, a as SectionHeader, F as Footer } from "./Section-BsGEHMCn.mjs";
import "../_libs/seroval.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "./router-4VIZ9_6n.mjs";
import "./server-CBn92ml7.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/lucide-react.mjs";
import "./constants-BXTGtuSJ.mjs";
const ALL = "All";
function CoursesPage() {
  const fetcher = useServerFn(fetchCoursesGroupedByCategory);
  const {
    data,
    isLoading
  } = useQuery({
    queryKey: ["impact", "courses-grouped"],
    queryFn: () => fetcher({
      data: {
        perCategory: 30
      }
    }),
    staleTime: 1e3 * 60 * 60 * 24
  });
  const [active, setActive] = reactExports.useState(ALL);
  const {
    categories,
    filtered,
    totalCourses
  } = reactExports.useMemo(() => {
    const buckets = data?.buckets ?? [];
    const cats = buckets.map((b) => ({
      name: b.category,
      count: b.total,
      shown: b.courses.length
    }));
    const totalCourses2 = buckets.reduce((sum, b) => sum + b.courses.length, 0);
    const filtered2 = active === ALL ? buckets.flatMap((b) => b.courses) : buckets.find((b) => b.category === active)?.courses ?? [];
    return {
      categories: cats,
      filtered: filtered2,
      totalCourses: totalCourses2
    };
  }, [data, active]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Browse", title: "Explore AI Courses by Category", subtitle: "Pick a category to discover hand-picked AI courses tailored to that topic." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryButton, { label: `All (${totalCourses})`, active: active === ALL, onClick: () => setActive(ALL) }),
        categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryButton, { label: `${c.name} (${c.shown}/${c.count})`, active: active === c.name, onClick: () => setActive(c.name) }, c.name))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: isLoading ? Array.from({
        length: 6
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CourseCardSkeleton, {}, i)) : filtered.length ? filtered.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CourseCard, { course: c, index: i }, c.id)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "col-span-full text-center text-muted-foreground", children: "No courses available in this category yet. Check back soon." }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function CategoryButton({
  label,
  active,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick, className: `rounded-full px-5 py-2 text-sm font-medium transition border ${active ? "gradient-bg text-white border-transparent" : "border-border bg-card/60 text-foreground hover:border-primary/60"}`, children: label });
}
export {
  CoursesPage as component
};
