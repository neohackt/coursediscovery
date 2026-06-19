import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";
import { AFFILIATE_URL } from "@/lib/constants";

const links = [
  { href: "/#paths", label: "Learning Paths", type: "hash" as const },
  { to: "/courses", label: "Courses", type: "route" as const },
  { to: "/udemy-deals", label: "Udemy Deals", type: "route" as const },
  { to: "/blog", label: "Blog", type: "route" as const },
  { href: "/#benefits", label: "Resources", type: "hash" as const },
  { href: "/#faq", label: "FAQ", type: "hash" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-lg font-bold"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl gradient-bg text-white">
            <Sparkles className="h-4 w-4" />
          </span>
          Course Discovery
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) =>
            l.type === "route" ? (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition hover:text-foreground"
                  activeProps={{ className: "text-sm text-foreground" }}
                >
                  {l.label}
                </Link>
              </li>
            ) : (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ),
          )}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="hidden rounded-full gradient-bg px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 md:inline-flex"
          >
            View Deals
          </a>
        </div>
      </nav>
    </header>
  );
}
