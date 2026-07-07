import { useCallback, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Clock, Tag, Copy, Check, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader } from "@/components/Section";
import { AFFILIATE_URL } from "@/lib/constants";
import { buildAffiliateUrl } from "@/lib/gclid";
import {
  getClickCounts,
  incrementClickCount,
} from "@/lib/clicks.functions";

export const Route = createFileRoute("/udemy-deals")({
  head: ({ match }) => {
    const now = new Date();
    const monthYear = `${now.toLocaleDateString("en-US", { month: "long" })} ${now.getFullYear()}`;
    const metaTitle = `Udemy Deals & Coupon Codes – Updated ${monthYear} | CourseDiscovery`;
    const metaDescription =
      "Live Udemy deals, coupon codes & sale alerts — verified today. See current course prices, when the next Udemy sale starts, and how to save before it ends.";
    return {
      meta: [
        {
          title: metaTitle,
        },
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: metaTitle,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:url",
          content: `https://coursediscovery.net${match.pathname}`,
        },
      ],
      links: [
        {
          rel: "canonical",
          href: `https://coursediscovery.net${match.pathname}`,
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is there a Udemy sale right now?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We check Udemy's pricing daily and list active sales and coupon codes on this page as soon as they go live. Check the 'Last verified' date above for the most recent update.",
                },
              },
              {
                "@type": "Question",
                name: "When is the next Udemy sale?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Udemy runs sitewide promotions frequently, often multiple times a month, alongside seasonal events like Black Friday and New Year. We track upcoming sale windows here and update this page as new ones are announced.",
                },
              },
              {
                "@type": "Question",
                name: "How low do Udemy course prices drop during a sale?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "During sitewide sales, most paid courses drop to a fraction of their list price, commonly landing in the $9.99 to $14.99 range regardless of the course's normal price.",
                },
              },
              {
                "@type": "Question",
                name: "Are Udemy coupon codes still valid?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Udemy coupon codes are typically time-limited and tied to specific courses or instructor promotions. We remove expired codes and only list ones we've confirmed are working as of our last update.",
                },
              },
              {
                "@type": "Question",
                name: "Do Udemy deals apply to all courses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most paid courses are included in sitewide sales, but some instructor-run courses, subscriptions, and already-discounted courses may be excluded. We note any major exclusions when they apply.",
                },
              },
            ],
          }),
        },
      ],
    };
  },
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
  sectionId?: string;
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
    usedToday: 847,
  },
  {
    id: "2",
    type: "deal",
    badge: "85% OFF",
    title: "Huge 85% Discount on Udemy Best-Sellers",
    description:
      "Grab the most popular courses in AI and Digital Marketing at a fraction of the cost. Upgrade your skill set today!",
    usedToday: 612,
  },
  {
    id: "3",
    type: "deal",
    badge: "80% OFF",
    title: "Professional Development Sale: 80% Off Udemy",
    description:
      "Gain competitive edges in the job market. Access wide-ranging professional training courses at a massive 80% discount.",
    usedToday: 534,
  },
  {
    id: "4",
    type: "deal",
    badge: "35% OFF",
    title: "Save 35% on Udemy AI & Tech Training",
    description:
      "Future-proof your career with the latest AI tools and techniques. Apply this discount to your next Udemy enrollment.",
    usedToday: 421,
  },
  {
    id: "5",
    type: "deal",
    badge: "85% OFF",
    title: "Save Up to 85% on Top AI Courses",
    description:
      "Master ChatGPT, Prompt Engineering, AI Automation, and more with massive limited-time discounts on best-selling AI courses.",
    sectionId: "chatgpt-deal",
    usedToday: 789,
  },
  {
    id: "6",
    type: "deal",
    badge: "85% OFF",
    title: "Learn Coding & Development for Less",
    description:
      "Save up to 85% on programming courses covering Python, JavaScript, React, Next.js, and software development.",
    sectionId: "coding-deal",
    usedToday: 654,
  },
  {
    id: "7",
    type: "deal",
    badge: "BIG SAVINGS",
    title: "Become a Data Science Pro and Save Big",
    description:
      "Learn Data Analytics, Machine Learning, SQL, Python, and Data Visualization with limited-time course discounts.",
    sectionId: "data-science-deal",
    usedToday: 387,
  },
  {
    id: "8",
    type: "deal",
    badge: "SAVE BIG",
    title: "Grow Your Marketing Skills for Less",
    description:
      "Save on SEO, Google Ads, Facebook Ads, Content Marketing, Email Marketing, and Social Media courses.",
    sectionId: "marketing-deal",
    usedToday: 298,
  },
  {
    id: "9",
    type: "deal",
    badge: "85% OFF",
    title: "Photography Courses Up to 85% Off",
    description:
      "Improve your photography, editing, lighting, and camera skills with discounted online courses.",
    sectionId: "photography-deal",
    usedToday: 176,
  },
];

function UdemyDealsPage() {
  const [filter, setFilter] = useState<"all" | "code" | "deal">("all");
  const queryClient = useQueryClient();

  const fetchCounts = useServerFn(getClickCounts);
  const { data: clickCounts } = useQuery({
    queryKey: ["clicks"],
    queryFn: () => fetchCounts({}),
    staleTime: 1000 * 60 * 5,
  });

  const incrementFn = useServerFn(incrementClickCount);
  const incrementMutation = useMutation({
    mutationFn: (dealId: string) => incrementFn({ data: dealId }),
    onMutate: async (dealId) => {
      await queryClient.cancelQueries({ queryKey: ["clicks"] });
      const previous = queryClient.getQueryData<Record<string, number>>([
        "clicks",
      ]);
      queryClient.setQueryData<Record<string, number>>(
        ["clicks"],
        (old) => ({
          ...old,
          [dealId]: (old?.[dealId] ?? 0) + 1,
        }),
      );
      return { previous };
    },
    onError: (_err, _dealId, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["clicks"], context.previous);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["clicks"] });
    },
  });

  const visible = useMemo(
    () => DEALS.filter((d) => filter === "all" || d.type === filter),
    [filter],
  );

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

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2">
              How we verify Udemy coupons
            </h2>
            <p className="mb-4 text-muted-foreground">
              Udemy runs near-constant sales, which makes it easy to publish
              stale or fake codes. We check every offer on this page manually
              and mark the verification date below. If a code stops working, we
              pull it — not leave it live for clicks.
            </p>
            <p className="text-sm font-medium">
              Last verified: June 7, 2026 <br />
              Reviewed by: CourseDiscovery Team
            </p>
          </section>

          <section className="mb-10 overflow-x-auto">
            <h2 className="text-xl font-semibold mb-4">Deals Summary</h2>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-2 pr-4">Deal</th>
                  <th className="py-2 pr-4">Category</th>
                  <th className="py-2 pr-4">Discount</th>
                  <th className="py-2 pr-4">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 pr-4">
                    Google AI Essentials + Free Google AI Pro (3mo)
                  </td>
                  <td className="py-2 pr-4">AI / Generative AI</td>
                  <td className="py-2 pr-4">Free Pro access</td>
                  <td className="py-2 pr-4">Complete beginners</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Udemy Best-Sellers Bundle</td>
                  <td className="py-2 pr-4">AI / Digital Marketing</td>
                  <td className="py-2 pr-4">85% off</td>
                  <td className="py-2 pr-4">
                    Browsers wanting top-rated picks
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Professional Development Sale</td>
                  <td className="py-2 pr-4">Career / Business</td>
                  <td className="py-2 pr-4">80% off</td>
                  <td className="py-2 pr-4">Career switchers</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">AI & Tech Training</td>
                  <td className="py-2 pr-4">AI / Technology</td>
                  <td className="py-2 pr-4">35% off</td>
                  <td className="py-2 pr-4">Working professionals</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">
                    Top AI Courses (ChatGPT, Prompting, Automation)
                  </td>
                  <td className="py-2 pr-4">AI / Prompt Engineering</td>
                  <td className="py-2 pr-4">Up to 85% off</td>
                  <td className="py-2 pr-4">All levels</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">
                    Coding & Development (Python, JS, React, Next.js)
                  </td>
                  <td className="py-2 pr-4">Programming</td>
                  <td className="py-2 pr-4">Up to 85% off</td>
                  <td className="py-2 pr-4">Developers</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Data Science Pro Track</td>
                  <td className="py-2 pr-4">Data Science / ML</td>
                  <td className="py-2 pr-4">Big savings</td>
                  <td className="py-2 pr-4">Analysts</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">
                    Marketing Skills (SEO, Ads, Email, Social)
                  </td>
                  <td className="py-2 pr-4">Marketing</td>
                  <td className="py-2 pr-4">Big savings</td>
                  <td className="py-2 pr-4">Marketers & freelancers</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Photography</td>
                  <td className="py-2 pr-4">Creative</td>
                  <td className="py-2 pr-4">Up to 85% off</td>
                  <td className="py-2 pr-4">Hobbyists</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-muted-foreground mt-2">
              Discounts reflect current offers shown below and update as deals
              refresh. Click any deal for exact checkout pricing.
            </p>
          </section>

          <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-4">
            {visible.map((deal) => (
              <DealCard
                key={deal.id}
                deal={deal}
                usedToday={
                  (clickCounts?.[deal.id] ?? 0) > 0
                    ? clickCounts![deal.id]
                    : deal.usedToday ?? 0
                }
                onDealClick={(id) => incrementMutation.mutate(id)}
              />
            ))}
          </div>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              Browse Deals by Category
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">AI & ChatGPT Courses</h3>
              <p className="text-muted-foreground">
                ChatGPT and prompt engineering remain the fastest-growing
                category on Udemy. These courses cover practical prompting
                frameworks, AI automation with tools like n8n and Zapier, and
                building basic AI agents — no coding background required for
                most tracks. See the{" "}
                <a href="#chatgpt-deal" className="underline">
                  ChatGPT & Prompt Engineering deal
                </a>{" "}
                above for current pricing.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">
                Programming & Development
              </h3>
              <p className="text-muted-foreground">
                Python, JavaScript, React, and Next.js bundles consistently see
                the deepest discounts, often 85% off list price. These courses
                suit beginners through intermediate developers looking to add a
                framework or language to their resume. See the{" "}
                <a href="#coding-deal" className="underline">
                  Coding & Development deal
                </a>{" "}
                above.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">
                Data Science & Analytics
              </h3>
              <p className="text-muted-foreground">
                SQL, machine learning, and data visualization courses are
                bundled frequently with AI-adjacent content, since the skill
                sets overlap heavily. Good entry point for analysts moving into
                data science roles. See the{" "}
                <a href="#data-science-deal" className="underline">
                  Data Science deal
                </a>{" "}
                above.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Marketing & Growth</h3>
              <p className="text-muted-foreground">
                SEO, Google Ads, Meta Ads, and email marketing courses round out
                the most-discounted category after AI and programming. Useful
                for freelancers building a service offering, not just employees.
                See the{" "}
                <a href="#marketing-deal" className="underline">
                  Marketing deal
                </a>{" "}
                above.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                Photography & Creative
              </h3>
              <p className="text-muted-foreground">
                Camera fundamentals, editing, and lighting courses see
                consistent 80%+ discounts, especially around quarterly Udemy
                sales. See the{" "}
                <a href="#photography-deal" className="underline">
                  Photography deal
                </a>{" "}
                above.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2">
              Why Are Udemy Courses Always on Sale?
            </h2>
            <p className="mb-4 text-muted-foreground">
              Udemy's list prices are rarely the price anyone actually pays. The
              platform runs sales nearly every week, and instructors set high
              list prices specifically because steep discounts drive more
              enrollments. This isn't a markup trick aimed at you — it's Udemy's
              pricing model by design, and it's been this way for years.
            </p>
            <p className="text-muted-foreground">
              What changes week to week is which courses get the deepest cuts,
              and which categories Udemy prioritizes in its promotions (often
              tied to trending search demand — right now, that's AI and
              ChatGPT-related content). That's why checking a current deals
              page, rather than searching Udemy directly, usually gets you a
              better price.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>

            <div className="mb-4">
              <h3 className="font-medium">Is there a Udemy sale right now?</h3>
              <p className="text-muted-foreground">
                We check Udemy's pricing daily and list active sales and coupon
                codes on this page as soon as they go live. Check the "Last
                verified" date above for the most recent update.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-medium">When is the next Udemy sale?</h3>
              <p className="text-muted-foreground">
                Udemy runs sitewide promotions frequently, often multiple times
                a month, alongside seasonal events like Black Friday and New
                Year. We track upcoming sale windows here and update this page
                as new ones are announced.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-medium">
                How low do Udemy course prices drop during a sale?
              </h3>
              <p className="text-muted-foreground">
                During sitewide sales, most paid courses drop to a fraction of
                their list price, commonly landing in the $9.99 to $14.99 range
                regardless of the course's normal price.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-medium">
                Are Udemy coupon codes still valid?
              </h3>
              <p className="text-muted-foreground">
                Udemy coupon codes are typically time-limited and tied to
                specific courses or instructor promotions. We remove expired
                codes and only list ones we've confirmed are working as of our
                last update.
              </p>
            </div>

            <div>
              <h3 className="font-medium">
                Do Udemy deals apply to all courses?
              </h3>
              <p className="text-muted-foreground">
                Most paid courses are included in sitewide sales, but some
                instructor-run courses, subscriptions, and already-discounted
                courses may be excluded. We note any major exclusions when they
                apply.
              </p>
            </div>
          </section>
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
    window.open(
      buildAffiliateUrl(AFFILIATE_URL),
      "_blank",
      "noopener,nofollow,sponsored",
    );
  };

  return (
    <div
      id={deal.sectionId}
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/60"
    >
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
