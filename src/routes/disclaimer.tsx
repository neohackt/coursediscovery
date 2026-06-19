import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | Course Discovery" },
      {
        name: "description",
        content:
          "CourseDiscovery general disclaimer — educational content, no professional advice, third-party links.",
      },
      { property: "og:title", content: "Disclaimer | Course Discovery" },
      {
        property: "og:description",
        content:
          "CourseDiscovery general disclaimer — educational content, no professional advice, third-party links.",
      },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
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
                Disclaimer
              </h1>
              <p className="text-lg text-muted-foreground">
                <strong>Last Updated:</strong> June 2026
              </p>
            </header>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-left">
              <p>
                The information provided on CourseDiscovery.net is for general
                informational and educational purposes only.
              </p>
              <p>
                While we strive to provide accurate and up-to-date information,
                we make no guarantees regarding the completeness, accuracy,
                reliability, or availability of any information presented on
                this website.
              </p>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Educational Content Disclaimer
                </h2>
                <p>
                  Course recommendations, reviews, guides, and educational
                  content reflect our opinions and research at the time of
                  publication.
                </p>
                <p>
                  Visitors should independently evaluate whether a course,
                  product, or service meets their individual needs.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  No Professional Advice
                </h2>
                <p>
                  Nothing on this website should be considered professional,
                  legal, financial, educational, tax, or career advice.
                </p>
                <p>
                  Users should consult qualified professionals before making
                  important decisions.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  External Links Disclaimer
                </h2>
                <p>CourseDiscovery.net may link to external websites.</p>
                <p>
                  We do not control and are not responsible for the content,
                  accuracy, availability, or practices of third-party websites.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Affiliate Disclaimer
                </h2>
                <p>This website may contain affiliate links.</p>
                <p>
                  If you purchase products or services through affiliate links,
                  we may receive compensation at no additional cost to you.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Limitation of Liability
                </h2>
                <p>Your use of this website is at your own risk.</p>
                <p>
                  CourseDiscovery.net shall not be liable for any losses,
                  damages, or consequences resulting from reliance on
                  information found on this website.
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
