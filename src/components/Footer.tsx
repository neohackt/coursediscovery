import { Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Discover: [
      { to: "/", label: "Home" },
      { to: "/courses", label: "All Courses" },
      { to: "/udemy-deals", label: "Udemy Deals" },
      { to: "/blog", label: "Blog" },
      { to: "/#paths", label: "Learning Paths" },
    ],
    Company: [
      { to: "/about", label: "About Us" },
      { to: "/contact", label: "Contact" },
    ],
    Legal: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/cookie", label: "Cookie Policy" },
      { to: "/terms", label: "Terms & Conditions" },
      { to: "/affiliate-disclosure", label: "Affiliate Disclosure" },
      { to: "/advertiser-disclosure", label: "Advertiser Disclosure" },
      { to: "/disclaimer", label: "Disclaimer" },
    ],
  };

  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-xl gradient-bg text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              Course Discovery
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              An independent curated portal for the best AI learning resources
              on the web.
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-x-12 gap-y-6 w-full md:w-auto"
            aria-label="Footer navigation"
          >
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="min-w-[140px]">
                <h4 className="font-semibold text-foreground text-sm tracking-wider uppercase">
                  {category}
                </h4>
                <ul className="mt-3 space-y-2">
                  {links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-10 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <p>
            <strong className="text-foreground">Affiliate Disclosure:</strong>{" "}
            This website may earn commissions from qualifying purchases through
            affiliate links, at no extra cost to you.
          </p>
          <p className="mt-2">
            © {currentYear} Course Discovery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
