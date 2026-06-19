import { AFFILIATE_URL } from "@/lib/constants";

export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/90 p-3 backdrop-blur md:hidden">
      <a
        href={AFFILIATE_URL}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="flex w-full items-center justify-center gap-2 rounded-full gradient-bg py-3.5 font-semibold text-white glow-primary"
      >
        🚀 View AI Deals
      </a>
    </div>
  );
}
