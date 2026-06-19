import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AFFILIATE_URL } from "./constants-BXTGtuSJ.mjs";
import { S as Sparkles, i as Sun, j as Moon } from "../_libs/lucide-react.mjs";
function ThemeToggle() {
  const [dark, setDark] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggle,
      "aria-label": "Toggle theme",
      className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur transition hover:border-primary hover:text-primary",
      children: dark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
    }
  );
}
const links = [
  { href: "/#paths", label: "Learning Paths", type: "hash" },
  { to: "/courses", label: "Courses", type: "route" },
  { to: "/udemy-deals", label: "Udemy Deals", type: "route" },
  { to: "/blog", label: "Blog", type: "route" },
  { href: "/#benefits", label: "Resources", type: "hash" },
  { href: "/#faq", label: "FAQ", type: "hash" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "border-b border-border/60 bg-background/70 backdrop-blur-xl" : "bg-transparent"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/",
            className: "flex items-center gap-2 font-display text-lg font-bold",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-xl gradient-bg text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) }),
              "Course Discovery"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden items-center gap-8 md:flex", children: links.map(
          (l) => l.type === "route" ? /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              className: "text-sm text-muted-foreground transition hover:text-foreground",
              activeProps: { className: "text-sm text-foreground" },
              children: l.label
            }
          ) }, l.to) : /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: "text-sm text-muted-foreground transition hover:text-foreground",
              children: l.label
            }
          ) }, l.href)
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: AFFILIATE_URL,
              target: "_blank",
              rel: "nofollow sponsored noopener",
              className: "hidden rounded-full gradient-bg px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 md:inline-flex",
              children: "View Deals"
            }
          )
        ] })
      ] })
    }
  );
}
function Footer() {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const footerLinks = {
    Discover: [
      { to: "/", label: "Home" },
      { to: "/courses", label: "All Courses" },
      { to: "/udemy-deals", label: "Udemy Deals" },
      { to: "/blog", label: "Blog" },
      { to: "/#paths", label: "Learning Paths" }
    ],
    Company: [
      { to: "/about", label: "About Us" },
      { to: "/contact", label: "Contact" }
    ],
    Legal: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/cookie", label: "Cookie Policy" },
      { to: "/terms", label: "Terms & Conditions" },
      { to: "/affiliate-disclosure", label: "Affiliate Disclosure" },
      { to: "/advertiser-disclosure", label: "Advertiser Disclosure" },
      { to: "/disclaimer", label: "Disclaimer" }
    ]
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/60 bg-card/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-8 md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-display text-lg font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-xl gradient-bg text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) }),
          "Course Discovery"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "An independent curated portal for the best AI learning resources on the web." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "nav",
        {
          className: "flex flex-wrap gap-x-12 gap-y-6 w-full md:w-auto",
          "aria-label": "Footer navigation",
          children: Object.entries(footerLinks).map(([category, links2]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-[140px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground text-sm tracking-wider uppercase", children: category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2", children: links2.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: link.to,
                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                children: link.label
              }
            ) }, link.to)) })
          ] }, category))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 border-t border-border/60 pt-6 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Affiliate Disclosure:" }),
        " ",
        "This website may earn commissions from qualifying purchases through affiliate links, at no extra cost to you."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2", children: [
        "© ",
        currentYear,
        " Course Discovery. All rights reserved."
      ] })
    ] })
  ] }) });
}
function SectionHeader({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl font-bold md:text-5xl", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: subtitle })
  ] });
}
function Section({
  id,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id, className: `py-24 ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children }) });
}
export {
  Footer as F,
  Navbar as N,
  Section as S,
  SectionHeader as a
};
