import { useCallback, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Tag, Copy, Check, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader } from "@/components/Section";
import { AFFILIATE_URL } from "@/lib/constants";

export const Route = createFileRoute("/udemy-deals")({
  head: () => ({
    meta: [
      {
        title:
          "Udemy Coupons & Promo Codes — Verified Deals | Course Discovery",
      },
      {
        name: "description",
        content:
          "Save on Udemy courses with hand-picked coupon codes and promo deals. Verified offers on AI, programming, business and design courses — updated regularly.",
      },
      {
        property: "og:title",
        content: "Udemy Coupons & Promo Codes — Verified Deals",
      },
      {
        property: "og:description",
        content:
          "Verified Udemy coupons and promo codes on top courses. Save up to 80% off.",
      },
    ],
  }),
  component: UdemyDealsPage,
});

type DealType = "code" | "deal";

interface Deal {
  id: string;
  type: DealType;
  badge: string;
  title: string;
  description?: string;
  code?: string;
  label?: string;
  expires?: string;
  usedToday?: number;
  urgent?: boolean;
}

const DEALS: Deal[] = [
  {
    id: "1",
    type: "deal",
    badge: "SPECIAL OFFER",
    title:
      "Google AI Essentials Course on Udemy + Free Google AI Pro for 3 Months",
    description:
      "Learn generative AI from Google on Udemy. Get a certificate of completion and enjoy 3 months of Google AI Pro at no additional cost.",
    label: "Hot Deal",
  },
  {
    id: "2",
    type: "deal",
    badge: "85% OFF",
    title: "Huge 85% Discount on Udemy Best-Sellers",
    description:
      "Grab the most popular courses in AI and Digital Marketing at a fraction of the cost. Upgrade your skill set today!",
  },
  {
    id: "3",
    type: "deal",
    badge: "80% OFF",
    title: "Professional Development Sale: 80% Off Udemy",
    description:
      "Gain competitive edges in the job market. Access wide-ranging professional training courses at a massive 80% discount.",
  },
  {
    id: "4",
    type: "deal",
    badge: "35% OFF",
    title: "Save 35% on Udemy AI & Tech Training",
    description:
      "Future-proof your career with the latest AI tools and techniques. Apply this discount to your next Udemy enrollment.",
  },
  {
    id: "5",
    type: "deal",
    badge: "85% OFF",
    title: "Save Up to 85% on Top AI Courses",
    description:
      "Master ChatGPT, Prompt Engineering, AI Automation, and more with massive limited-time discounts on best-selling AI courses.",
  },
  {
    id: "6",
    type: "deal",
    badge: "85% OFF",
    title: "Learn Coding & Development for Less",
    description:
      "Save up to 85% on programming courses covering Python, JavaScript, React, Next.js, and software development.",
  },
  {
    id: "7",
    type: "deal",
    badge: "BIG SAVINGS",
    title: "Become a Data Science Pro and Save Big",
    description:
      "Learn Data Analytics, Machine Learning, SQL, Python, and Data Visualization with limited-time course discounts.",
  },
  {
    id: "8",
    type: "deal",
    badge: "SAVE BIG",
    title: "Grow Your Marketing Skills for Less",
    description:
      "Save on SEO, Google Ads, Facebook Ads, Content Marketing, Email Marketing, and Social Media courses.",
  },
  {
    id: "9",
    type: "deal",
    badge: "85% OFF",
    title: "Photography Courses Up to 85% Off",
    description:
      "Improve your photography, editing, lighting, and camera skills with discounted online courses.",
  },
];

function UdemyDealsPage() {
  const [filter, setFilter] = useState<"all" | "code" | "deal">("all");
  const [clickCounts, setClickCounts] = useState<Record<string, number>>({});

  const visible = useMemo(
    () => DEALS.filter((d) => filter === "all" || d.type === filter),
    [filter],
  );

  const incrementCount = useCallback((dealId: string) => {
    setClickCounts((prev) => ({
      ...prev,
      [dealId]: (prev[dealId] ?? 0) + 1,
    }));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <Section>
          <SectionHeader
            eyebrow="Udemy Deals"
            title="Udemy Coupons & Promo Codes"
            subtitle="Hand-picked, verified Udemy offers updated regularly. Save up to 80% on top-rated courses."
          />

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {(
              [
                { k: "all", label: `All (${DEALS.length})` },
                {
                  k: "code",
                  label: `Codes (${DEALS.filter((d) => d.type === "code").length})`,
                },
                {
                  k: "deal",
                  label: `Deals (${DEALS.filter((d) => d.type === "deal").length})`,
                },
              ] as const
            ).map((b) => (
              <button
                key={b.k}
                onClick={() => setFilter(b.k)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                  filter === b.k
                    ? "gradient-bg text-white border-transparent"
                    : "border-border bg-card/60 hover:border-primary/60"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>

          <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-4">
            {visible.map((deal) => (
              <DealCard
                key={deal.id}
                deal={deal}
                usedToday={deal.usedToday ?? 0 + (clickCounts[deal.id] ?? 0)}
                onDealClick={incrementCount}
              />
            ))}
          </div>

          <article className="mx-auto mt-20 max-w-3xl prose prose-neutral dark:prose-invert">
            <h2>About Udemy Coupons & Promo Codes</h2>
            <p>
              Udemy is one of the world's largest online learning marketplaces,
              offering over 200,000 courses across technology, business, design,
              marketing, and personal development. With new promotions launching
              every week, the right coupon code can cut the price of a course by
              as much as 80% — turning a $99 course into a $10 investment.
            </p>

            <h3>How to use a Udemy coupon</h3>
            <ol>
              <li>
                Pick a deal above and click <strong>See Code</strong> or{" "}
                <strong>Get Deal</strong>.
              </li>
              <li>
                You'll be redirected to Udemy with the discount applied
                automatically, or with a code to paste at checkout.
              </li>
              <li>
                Add the course to your cart and complete checkout to lock in the
                price — Udemy courses come with lifetime access.
              </li>
            </ol>

            <h3>Tips to save more on Udemy</h3>
            <ul>
              <li>
                <strong>Check our page first.</strong> We refresh deals
                regularly so you always see currently valid offers.
              </li>
              <li>
                <strong>Sign in before applying.</strong> Some promotions are
                only visible to logged-in accounts.
              </li>
              <li>
                <strong>Use the 30-day refund window.</strong> If a course isn't
                what you expected, Udemy offers a no-questions refund.
              </li>
              <li>
                <strong>Consider Udemy Personal Plan.</strong> For learners who
                take 3+ courses a year, the annual subscription often beats
                per-course pricing.
              </li>
            </ul>

            <h3>Best categories for deals</h3>
            <p>
              The deepest discounts usually appear in trending categories:
              Artificial Intelligence, Python and web development, data science,
              cybersecurity, and digital marketing. Whether you're upskilling
              for a new role or exploring a hobby, there's almost always a flash
              sale waiting.
            </p>

            <p className="text-sm text-muted-foreground">
              Disclosure: We may earn a commission when you buy through links on
              this page. This helps us keep curating the best learning deals at
              no extra cost to you.
            </p>
          </article>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

function DealCard({
  deal,
  usedToday,
  onDealClick,
}: {
  deal: Deal;
  usedToday: number;
  onDealClick: (dealId: string) => void;
}) {
  const [copied, setCopied] = useState(false);
  const isCode = deal.type === "code";

  const onClick = async () => {
    if (isCode && deal.code) {
      try {
        await navigator.clipboard.writeText(deal.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        /* ignore */
      }
    }
    onDealClick(deal.id);
    window.open(AFFILIATE_URL, "_blank", "noopener,nofollow,sponsored");
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/60">
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
        <div className="grid h-24 w-full shrink-0 place-items-center rounded-xl bg-foreground px-4 text-center text-xs font-bold uppercase tracking-wide text-background sm:w-32">
          {deal.badge}
        </div>

        <div className="flex-1">
          {(isCode || deal.label) && (
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <Tag className="h-3.5 w-3.5" />
              {isCode ? "Coupon Code" : deal.label}
            </div>
          )}
          <h3 className="mt-1 text-lg font-semibold leading-snug">
            {deal.title}
          </h3>
          {deal.description && (
            <p className="mt-1 text-sm text-muted-foreground">
              {deal.description}
            </p>
          )}
          {deal.urgent && (
            <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-destructive/10 px-2.5 py-1 text-xs font-medium text-destructive">
              <Clock className="h-3 w-3" /> Only 3 days left!
            </span>
          )}
        </div>

        <button
          onClick={onClick}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:w-auto"
        >
          {isCode ? (
            <>
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {copied ? "Copied!" : "See Code"}
            </>
          ) : (
            <>
              Get Deal <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      <div className="flex items-center justify-between border-t border-border bg-muted/30 px-5 py-2.5 text-xs text-muted-foreground">
        <span>{deal.expires ? `Expires ${deal.expires}` : "Active Deal"}</span>
        <span>{usedToday} used today</span>
      </div>
    </div>
  );
}
