import { motion } from "framer-motion";
import { ArrowRight, Flame } from "lucide-react";
import { AFFILIATE_URL } from "@/lib/constants";
import { buildAffiliateUrl } from "@/lib/gclid";
import heroImg from "@/assets/hero-banner.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute right-0 top-40 h-[400px] w-[500px] rounded-full bg-accent/20 blur-[120px]" />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Flame className="h-3.5 w-3.5 text-accent" /> Limited-Time AI
            Learning Deals
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            Learn AI Skills.
            <br />
            <span className="gradient-text animate-gradient">
              Build Your Future.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Discover curated AI learning resources covering ChatGPT, Prompt
            Engineering, AI Automation, AI Agents, Generative AI and
            productivity workflows that actually work.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={buildAffiliateUrl(AFFILIATE_URL)}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="group inline-flex items-center gap-2 rounded-full gradient-bg px-7 py-3.5 font-semibold text-white glow-primary transition hover:scale-[1.02]"
            >
              Explore AI Deals
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#courses"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              See featured courses →
            </a>
          </div>
        </motion.div>

        <motion.a
          href={buildAffiliateUrl(AFFILIATE_URL)}
          target="_blank"
          rel="nofollow sponsored noopener"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="group relative block overflow-hidden rounded-3xl border border-border bg-card glow-primary"
        >
          <img
            src={heroImg}
            alt="Course Discovery — explore curated AI courses"
            width={1280}
            height={1024}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 animate-float"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
              Tap to explore AI deals <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
