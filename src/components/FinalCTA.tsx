import { ArrowRight } from "lucide-react";
import { AFFILIATE_URL } from "@/lib/constants";
import { buildAffiliateUrl } from "@/lib/gclid";

export function FinalCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-5xl font-bold md:text-6xl">
          Ready To <span className="gradient-text">Learn AI?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Explore curated AI learning resources and discover practical skills
          that can help you stay ahead.
        </p>
        <a
          href={buildAffiliateUrl(AFFILIATE_URL)}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="mt-10 inline-flex items-center gap-2 rounded-full gradient-bg px-8 py-4 text-lg font-semibold text-white glow-primary transition hover:scale-[1.02]"
        >
          Explore AI Learning <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
