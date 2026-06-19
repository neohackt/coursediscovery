import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { N as Navbar, F as Footer, S as Section, a as SectionHeader } from "./Section-BsGEHMCn.mjs";
import { A as AFFILIATE_URL } from "./constants-BXTGtuSJ.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { b as fetchFeaturedCourses, C as CourseCardSkeleton, a as CourseCard } from "./CourseCard-MoU4Ir9d.mjs";
import "../_libs/seroval.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { F as Flame, A as ArrowRight, c as Award, I as Infinity, E as Earth, G as GraduationCap, S as Sparkles, M as Megaphone, d as CodeXml, B as Briefcase, e as MessageSquareCode, W as Workflow, f as TrendingUp, g as Wallet, C as Clock, R as Rocket, h as Timer, P as Plus } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "./router-4VIZ9_6n.mjs";
import "./server-CBn92ml7.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const heroImg = "/assets/hero-banner-DpBQKE30.png";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "top",
      className: "relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-40 h-[400px] w-[500px] rounded-full bg-accent/20 blur-[120px]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3.5 w-3.5 text-accent" }),
                  " Limited-Time AI Learning Deals"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl", children: [
                  "Learn AI Skills.",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text animate-gradient", children: "Build Your Future." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground", children: "Discover curated AI learning resources covering ChatGPT, Prompt Engineering, AI Automation, AI Agents, Generative AI and productivity workflows that actually work." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: AFFILIATE_URL,
                      target: "_blank",
                      rel: "nofollow sponsored noopener",
                      className: "group inline-flex items-center gap-2 rounded-full gradient-bg px-7 py-3.5 font-semibold text-white glow-primary transition hover:scale-[1.02]",
                      children: [
                        "Explore AI Deals",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "#courses",
                      className: "text-sm font-medium text-muted-foreground hover:text-foreground",
                      children: "See featured courses →"
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.a,
            {
              href: AFFILIATE_URL,
              target: "_blank",
              rel: "nofollow sponsored noopener",
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.8, delay: 0.15 },
              className: "group relative block overflow-hidden rounded-3xl border border-border bg-card glow-primary",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: heroImg,
                    alt: "Course Discovery — explore curated AI courses",
                    width: 1280,
                    height: 1024,
                    className: "h-full w-full object-cover transition duration-700 group-hover:scale-105 animate-float"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur", children: [
                  "Tap to explore AI deals ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                ] }) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const learningPaths = [
  {
    icon: Sparkles,
    title: "AI For Beginners",
    description: "Start from zero. Understand how modern AI works and where to apply it."
  },
  {
    icon: Megaphone,
    title: "AI For Marketers",
    description: "Use AI to write copy, build campaigns, and analyze customer data faster."
  },
  {
    icon: CodeXml,
    title: "AI For Developers",
    description: "Build with LLM APIs, embeddings, RAG, and production-grade AI apps."
  },
  {
    icon: Briefcase,
    title: "AI For Freelancers",
    description: "Stack high-leverage AI skills you can sell to clients this month."
  },
  {
    icon: MessageSquareCode,
    title: "Prompt Engineering",
    description: "Master prompting patterns that get reliable output from any model."
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description: "Connect tools with n8n, Zapier and agents to automate real workflows."
  }
];
const trustItems = [
  { icon: Award, label: "Certificates Available" },
  { icon: Infinity, label: "Lifetime Access" },
  { icon: Earth, label: "Learn Anywhere" },
  { icon: GraduationCap, label: "Beginner Friendly" }
];
const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Add in-demand AI skills to your resume and stand out in any role."
  },
  {
    icon: Wallet,
    title: "Freelance Opportunities",
    description: "Land paid AI gigs — content, automation, chatbots, and more."
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate repetitive work and reclaim hours every single week."
  },
  {
    icon: Rocket,
    title: "Future-Proof Skills",
    description: "Stay ahead as AI reshapes industries from marketing to engineering."
  }
];
const stats = [
  { value: "100+", label: "Learning Resources" },
  { value: "50+", label: "Skill Tracks" },
  { value: "24/7", label: "Self-Paced Access" },
  { value: "Beginner", label: "Friendly" }
];
const faqs = [
  {
    q: "Are these courses beginner friendly?",
    a: "Yes. Most resources start from the basics and ramp up step by step — no prior AI experience required."
  },
  {
    q: "Do I need coding experience?",
    a: "No coding needed for most paths. Developer-focused tracks are clearly marked if you want to go deeper."
  },
  {
    q: "Can I learn at my own pace?",
    a: "Absolutely. All featured resources are self-paced with lifetime access, so you can revisit anytime."
  },
  {
    q: "Are certificates available?",
    a: "Yes — many of the recommended courses include a completion certificate you can share on LinkedIn."
  }
];
function TrustBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border/60 bg-card/40 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4", children: trustItems.map(({ icon: Icon, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: label })
  ] }, label)) }) });
}
function LearningPaths() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "paths", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Learning Paths",
        title: "Choose Your Learning Path",
        subtitle: "Pick a track that matches your goal. Every path links to curated, hands-on resources."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: learningPaths.map(({ icon: Icon, title, description }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.a,
      {
        href: AFFILIATE_URL,
        target: "_blank",
        rel: "nofollow sponsored noopener",
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.06 },
        className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/60 hover:glow-primary",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 to-accent/0 transition group-hover:from-primary/10 group-hover:to-accent/10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl gradient-bg text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-semibold", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary", children: [
            "Explore",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })
          ] })
        ]
      },
      title
    )) })
  ] });
}
function FeaturedCourses() {
  const fetcher = useServerFn(fetchFeaturedCourses);
  const { data, isLoading } = useQuery({
    queryKey: ["impact", "featured", 6],
    queryFn: () => fetcher({ data: { limit: 6 } }),
    staleTime: 1e3 * 60 * 60 * 24
    // 24h ISR-equivalent
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "courses", className: "bg-card/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Featured",
        title: "Hand-picked AI Courses",
        subtitle: "Curated resources we'd recommend to a friend starting their AI journey today."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: isLoading ? Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CourseCardSkeleton, {}, i)) : data?.courses?.length ? data.courses.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CourseCard, { course: c, index: i }, c.id)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "col-span-full text-center text-muted-foreground", children: "New learning opportunities are being refreshed. Please check back shortly." }) })
  ] });
}
function Benefits() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "benefits", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Why Learn AI", title: "Skills that pay you back" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: benefits.map(({ icon: Icon, title, description }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.08 },
        className: "rounded-3xl border border-border bg-card p-7",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-semibold", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: description })
        ]
      },
      title
    )) })
  ] });
}
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border/60 bg-card/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: i * 0.08 },
      className: "text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl font-bold gradient-text md:text-5xl", children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: s.label })
      ]
    },
    s.label
  )) }) });
}
const KEY = "alh_countdown_end";
const DURATION = 24 * 60 * 60 * 1e3;
function getEnd() {
  if (typeof window === "undefined") return Date.now() + DURATION;
  const stored = localStorage.getItem(KEY);
  const end = stored ? parseInt(stored, 10) : 0;
  if (!end || end < Date.now()) {
    const next = Date.now() + DURATION;
    localStorage.setItem(KEY, String(next));
    return next;
  }
  return end;
}
function format(ms) {
  const t = Math.max(0, ms);
  const h = Math.floor(t / 36e5);
  const m = Math.floor(t % 36e5 / 6e4);
  const s = Math.floor(t % 6e4 / 1e3);
  return [h, m, s].map((n) => String(n).padStart(2, "0"));
}
function Countdown() {
  const [left, setLeft] = reactExports.useState(DURATION);
  reactExports.useEffect(() => {
    const end = getEnd();
    const tick = () => setLeft(end - Date.now());
    tick();
    const id = setInterval(tick, 1e3);
    return () => clearInterval(id);
  }, []);
  const [h, m, s] = format(left);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] border border-border bg-card p-10 text-center md:p-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 opacity-30 gradient-bg animate-gradient" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "h-3.5 w-3.5" }),
      " Offers Refresh Regularly"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-4xl font-bold md:text-5xl", children: "Don't miss today's AI deals" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Explore AI learning opportunities while offers are available." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center gap-4", children: [
      ["Hours", h],
      ["Minutes", m],
      ["Seconds", s]
    ].map(([label, val]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-w-[88px] rounded-2xl border border-border bg-background/70 px-5 py-4 backdrop-blur",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl font-bold gradient-text", children: val }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground", children: label })
        ]
      },
      label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: AFFILIATE_URL,
        target: "_blank",
        rel: "nofollow sponsored noopener",
        className: "mt-10 inline-flex items-center gap-2 rounded-full gradient-bg px-7 py-3.5 font-semibold text-white glow-primary transition hover:scale-[1.02]",
        children: [
          "View AI Deals ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ]
      }
    )
  ] }) }) });
}
function FAQ() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "faq", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "FAQ", title: "Frequently asked questions" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-12 max-w-3xl space-y-3", children: faqs.map((f, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "overflow-hidden rounded-2xl border border-border bg-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setOpen(isOpen ? null : i),
                className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: f.q }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Plus,
                    {
                      className: `h-5 w-5 shrink-0 transition ${isOpen ? "rotate-45 text-primary" : ""}`
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.25 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-6 pb-6 text-sm text-muted-foreground", children: f.a })
              }
            ) })
          ]
        },
        f.q
      );
    }) })
  ] });
}
function FinalCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl font-bold md:text-6xl", children: [
      "Ready To ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Learn AI?" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground", children: "Explore curated AI learning resources and discover practical skills that can help you stay ahead." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: AFFILIATE_URL,
        target: "_blank",
        rel: "nofollow sponsored noopener",
        className: "mt-10 inline-flex items-center gap-2 rounded-full gradient-bg px-8 py-4 text-lg font-semibold text-white glow-primary transition hover:scale-[1.02]",
        children: [
          "Explore AI Learning ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5" })
        ]
      }
    )
  ] }) });
}
function StickyCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/90 p-3 backdrop-blur md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: AFFILIATE_URL,
      target: "_blank",
      rel: "nofollow sponsored noopener",
      className: "flex w-full items-center justify-center gap-2 rounded-full gradient-bg py-3.5 font-semibold text-white glow-primary",
      children: "🚀 View AI Deals"
    }
  ) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrustBar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LearningPaths, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedCourses, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Benefits, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Countdown, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyCTA, {})
  ] });
}
export {
  Index as component
};
