import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navbar, S as Section, a as SectionHeader, F as Footer } from "./Section-BsGEHMCn.mjs";
import { A as AFFILIATE_URL } from "./constants-BXTGtuSJ.mjs";
import { T as Tag, C as Clock, a as Check, b as Copy, A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const DEALS = [{
  id: "1",
  type: "deal",
  badge: "SPECIAL OFFER",
  title: "Google AI Essentials Course on Udemy + Free Google AI Pro for 3 Months",
  description: "Learn generative AI from Google on Udemy. Get a certificate of completion and enjoy 3 months of Google AI Pro at no additional cost.",
  label: "Hot Deal"
}, {
  id: "2",
  type: "deal",
  badge: "85% OFF",
  title: "Huge 85% Discount on Udemy Best-Sellers",
  description: "Grab the most popular courses in AI and Digital Marketing at a fraction of the cost. Upgrade your skill set today!"
}, {
  id: "3",
  type: "deal",
  badge: "80% OFF",
  title: "Professional Development Sale: 80% Off Udemy",
  description: "Gain competitive edges in the job market. Access wide-ranging professional training courses at a massive 80% discount."
}, {
  id: "4",
  type: "deal",
  badge: "35% OFF",
  title: "Save 35% on Udemy AI & Tech Training",
  description: "Future-proof your career with the latest AI tools and techniques. Apply this discount to your next Udemy enrollment."
}, {
  id: "5",
  type: "deal",
  badge: "85% OFF",
  title: "Save Up to 85% on Top AI Courses",
  description: "Master ChatGPT, Prompt Engineering, AI Automation, and more with massive limited-time discounts on best-selling AI courses."
}, {
  id: "6",
  type: "deal",
  badge: "85% OFF",
  title: "Learn Coding & Development for Less",
  description: "Save up to 85% on programming courses covering Python, JavaScript, React, Next.js, and software development."
}, {
  id: "7",
  type: "deal",
  badge: "BIG SAVINGS",
  title: "Become a Data Science Pro and Save Big",
  description: "Learn Data Analytics, Machine Learning, SQL, Python, and Data Visualization with limited-time course discounts."
}, {
  id: "8",
  type: "deal",
  badge: "SAVE BIG",
  title: "Grow Your Marketing Skills for Less",
  description: "Save on SEO, Google Ads, Facebook Ads, Content Marketing, Email Marketing, and Social Media courses."
}, {
  id: "9",
  type: "deal",
  badge: "85% OFF",
  title: "Photography Courses Up to 85% Off",
  description: "Improve your photography, editing, lighting, and camera skills with discounted online courses."
}];
function UdemyDealsPage() {
  const [filter, setFilter] = reactExports.useState("all");
  const [clickCounts, setClickCounts] = reactExports.useState({});
  const visible = reactExports.useMemo(() => DEALS.filter((d) => filter === "all" || d.type === filter), [filter]);
  const incrementCount = reactExports.useCallback((dealId) => {
    setClickCounts((prev) => ({
      ...prev,
      [dealId]: (prev[dealId] ?? 0) + 1
    }));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Udemy Deals", title: "Udemy Coupons & Promo Codes", subtitle: "Hand-picked, verified Udemy offers updated regularly. Save up to 80% on top-rated courses." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [{
        k: "all",
        label: `All (${DEALS.length})`
      }, {
        k: "code",
        label: `Codes (${DEALS.filter((d) => d.type === "code").length})`
      }, {
        k: "deal",
        label: `Deals (${DEALS.filter((d) => d.type === "deal").length})`
      }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(b.k), className: `rounded-full border px-5 py-2 text-sm font-medium transition ${filter === b.k ? "gradient-bg text-white border-transparent" : "border-border bg-card/60 hover:border-primary/60"}`, children: b.label }, b.k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-10 flex max-w-4xl flex-col gap-4", children: visible.map((deal) => /* @__PURE__ */ jsxRuntimeExports.jsx(DealCard, { deal, usedToday: deal.usedToday ?? 0 + (clickCounts[deal.id] ?? 0), onDealClick: incrementCount }, deal.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "mx-auto mt-20 max-w-3xl prose prose-neutral dark:prose-invert", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "About Udemy Coupons & Promo Codes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Udemy is one of the world's largest online learning marketplaces, offering over 200,000 courses across technology, business, design, marketing, and personal development. With new promotions launching every week, the right coupon code can cut the price of a course by as much as 80% — turning a $99 course into a $10 investment." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "How to use a Udemy coupon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "Pick a deal above and click ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "See Code" }),
            " or",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Get Deal" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "You'll be redirected to Udemy with the discount applied automatically, or with a code to paste at checkout." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Add the course to your cart and complete checkout to lock in the price — Udemy courses come with lifetime access." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Tips to save more on Udemy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Check our page first." }),
            " We refresh deals regularly so you always see currently valid offers."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sign in before applying." }),
            " Some promotions are only visible to logged-in accounts."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Use the 30-day refund window." }),
            " If a course isn't what you expected, Udemy offers a no-questions refund."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Consider Udemy Personal Plan." }),
            " For learners who take 3+ courses a year, the annual subscription often beats per-course pricing."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Best categories for deals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The deepest discounts usually appear in trending categories: Artificial Intelligence, Python and web development, data science, cybersecurity, and digital marketing. Whether you're upskilling for a new role or exploring a hobby, there's almost always a flash sale waiting." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Disclosure: We may earn a commission when you buy through links on this page. This helps us keep curating the best learning deals at no extra cost to you." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function DealCard({
  deal,
  usedToday,
  onDealClick
}) {
  const [copied, setCopied] = reactExports.useState(false);
  const isCode = deal.type === "code";
  const onClick = async () => {
    if (isCode && deal.code) {
      try {
        await navigator.clipboard.writeText(deal.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2e3);
      } catch {
      }
    }
    onDealClick(deal.id);
    window.open(AFFILIATE_URL, "_blank", "noopener,nofollow,sponsored");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 p-5 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-24 w-full shrink-0 place-items-center rounded-xl bg-foreground px-4 text-center text-xs font-bold uppercase tracking-wide text-background sm:w-32", children: deal.badge }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        (isCode || deal.label) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-3.5 w-3.5" }),
          isCode ? "Coupon Code" : deal.label
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-lg font-semibold leading-snug", children: deal.title }),
        deal.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: deal.description }),
        deal.urgent && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-2 inline-flex items-center gap-1.5 rounded-full bg-destructive/10 px-2.5 py-1 text-xs font-medium text-destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
          " Only 3 days left!"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick, className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:w-auto", children: isCode ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4" }),
        copied ? "Copied!" : "See Code"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Get Deal ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-border bg-muted/30 px-5 py-2.5 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: deal.expires ? `Expires ${deal.expires}` : "Active Deal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        usedToday,
        " used today"
      ] })
    ] })
  ] });
}
export {
  UdemyDealsPage as component
};
