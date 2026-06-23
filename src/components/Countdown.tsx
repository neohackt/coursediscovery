import { useEffect, useState } from "react";
import { ArrowRight, Timer } from "lucide-react";
import { AFFILIATE_URL } from "@/lib/constants";
import { buildAffiliateUrl } from "@/lib/gclid";

const KEY = "alh_countdown_end";
const DURATION = 24 * 60 * 60 * 1000;

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

function format(ms: number) {
  const t = Math.max(0, ms);
  const h = Math.floor(t / 3.6e6);
  const m = Math.floor((t % 3.6e6) / 6e4);
  const s = Math.floor((t % 6e4) / 1000);
  return [h, m, s].map((n) => String(n).padStart(2, "0"));
}

export function Countdown() {
  const [left, setLeft] = useState(DURATION);
  useEffect(() => {
    const end = getEnd();
    const tick = () => setLeft(end - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const [h, m, s] = format(left);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-10 text-center md:p-14">
          <div className="absolute inset-0 -z-10 opacity-30 gradient-bg animate-gradient" />
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <Timer className="h-3.5 w-3.5" /> Offers Refresh Regularly
          </span>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Don't miss today's AI deals
          </h2>
          <p className="mt-3 text-muted-foreground">
            Explore AI learning opportunities while offers are available.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            {[
              ["Hours", h],
              ["Minutes", m],
              ["Seconds", s],
            ].map(([label, val]) => (
              <div
                key={label}
                className="min-w-[88px] rounded-2xl border border-border bg-background/70 px-5 py-4 backdrop-blur"
              >
                <div className="font-display text-4xl font-bold gradient-text">
                  {val}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {label}
                </div>
              </div>
            ))}
          </div>
          <a
            href={buildAffiliateUrl(AFFILIATE_URL)}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="mt-10 inline-flex items-center gap-2 rounded-full gradient-bg px-7 py-3.5 font-semibold text-white glow-primary transition hover:scale-[1.02]"
          >
            View AI Deals <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
