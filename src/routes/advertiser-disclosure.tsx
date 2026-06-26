import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/advertiser-disclosure")({
  head: ({ match }) => ({
    meta: [
      { title: "Advertiser Disclosure | Course Discovery" },
      {
        name: "description",
        content:
          "CourseDiscovery advertiser disclosure — how advertising and sponsorship relationships work on our site.",
      },
      {
        property: "og:title",
        content: "Advertiser Disclosure | Course Discovery",
      },
      {
        property: "og:description",
        content:
          "CourseDiscovery advertiser disclosure — how advertising and sponsorship relationships work on our site.",
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
  }),
  component: AdvertiserDisclosurePage,
});

function AdvertiserDisclosurePage() {
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
                Advertiser Disclosure
              </h1>
              <p className="text-lg text-muted-foreground">
                <strong>Last Updated:</strong> June 2026
              </p>
            </header>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-left">
              <p>
                CourseDiscovery.net is supported in part through advertising,
                sponsorships, affiliate partnerships, and referral
                relationships.
              </p>
              <p>
                Compensation received from advertisers and partners may
                influence the placement, appearance, or presentation of certain
                products, services, courses, or offers featured on this website.
              </p>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Editorial Independence
                </h2>
                <p>
                  We strive to maintain editorial independence and provide
                  useful information to our audience.
                </p>
                <p>
                  Compensation does not determine our opinions or
                  recommendations.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Affiliate Compensation
                </h2>
                <p>
                  Some links featured on CourseDiscovery.net are affiliate
                  links.
                </p>
                <p>
                  When users click these links and complete qualifying actions,
                  we may receive compensation from our partners.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  No Guarantees
                </h2>
                <p>
                  We do not guarantee that any course, service, or product
                  featured on this website will meet your expectations or
                  produce specific outcomes.
                </p>
                <p>
                  Visitors should conduct their own research before making
                  purchasing decisions.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Transparency
                </h2>
                <p>
                  We believe in transparency regarding our relationships with
                  advertisers, sponsors, and affiliate partners.
                </p>
                <p>
                  Questions regarding our advertising practices may be submitted
                  through the contact page on CourseDiscovery.net.
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
