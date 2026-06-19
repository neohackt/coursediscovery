import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/affiliate-disclosure")({
  head: () => ({
    meta: [
      { title: "Affiliate Disclosure | Course Discovery" },
      {
        name: "description",
        content:
          "CourseDiscovery affiliate disclosure — transparency about our affiliate relationships and earnings.",
      },
      {
        property: "og:title",
        content: "Affiliate Disclosure | Course Discovery",
      },
      {
        property: "og:description",
        content:
          "CourseDiscovery affiliate disclosure — transparency about our affiliate relationships and earnings.",
      },
    ],
  }),
  component: AffiliateDisclosurePage,
});

function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <header className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
                Legal
              </span>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Affiliate Disclosure
              </h1>
              <p className="text-lg text-muted-foreground">
                <strong>Last Updated:</strong> June 2026
              </p>
            </header>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-left">
              <p>
                CourseDiscovery.net participates in affiliate marketing
                programs. This means that some links on our website may be
                affiliate links.
              </p>

              <p>
                If you click on an affiliate link and make a purchase or
                complete a qualifying action, we may earn a commission at no
                additional cost to you.
              </p>

              <p>
                These commissions help support the operation, maintenance, and
                continued development of CourseDiscovery.net.
              </p>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Our Commitment
                </h2>
                <p>
                  We strive to provide honest, independent, and useful
                  information to our visitors.
                </p>
                <p>
                  Affiliate relationships do not influence our recommendations,
                  reviews, rankings, or opinions. We aim to recommend learning
                  resources and educational opportunities that we believe may be
                  valuable to our audience.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  No Additional Cost
                </h2>
                <p>
                  Using our affiliate links does not increase the price you pay
                  for any product, service, or course.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Third-Party Websites
                </h2>
                <p>
                  When you click on an affiliate link, you may be redirected to
                  a third-party website. Purchases, transactions, and
                  interactions are governed by the policies and terms of those
                  third-party websites.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Questions
                </h2>
                <p>
                  If you have any questions regarding this disclosure, please
                  contact us through the contact page on CourseDiscovery.net.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
