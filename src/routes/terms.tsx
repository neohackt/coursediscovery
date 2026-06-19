import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | Course Discovery" },
      {
        name: "description",
        content:
          "CourseDiscovery terms and conditions of use — please read before using our website.",
      },
      {
        property: "og:title",
        content: "Terms and Conditions | Course Discovery",
      },
      {
        property: "og:description",
        content:
          "CourseDiscovery terms and conditions of use — please read before using our website.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
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
                Terms and Conditions
              </h1>
              <p className="text-lg text-muted-foreground">
                <strong>Last Updated:</strong> June 2026
              </p>
            </header>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-left">
              <p>Welcome to CourseDiscovery.net.</p>
              <p>
                By accessing or using this website, you agree to comply with and
                be bound by these Terms and Conditions.
              </p>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Use of Website
                </h2>
                <p>
                  You agree to use this website only for lawful purposes and in
                  a manner that does not violate any applicable laws or
                  regulations.
                </p>
                <p>You must not:</p>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Use the website for fraudulent activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>
                      Attempt to gain unauthorized access to systems or data
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Interfere with website operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>
                      Distribute malicious software or harmful content
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Intellectual Property
                </h2>
                <p>
                  All content on CourseDiscovery.net, including text, graphics,
                  logos, designs, and website content, is protected by
                  applicable intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, or modify content without
                  prior written permission.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Educational Information
                </h2>
                <p>
                  The information provided on this website is for informational
                  and educational purposes only.
                </p>
                <p>
                  We do not guarantee any specific educational, professional, or
                  financial outcomes from using any courses, products, or
                  services mentioned on this website.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Affiliate Relationships
                </h2>
                <p>
                  CourseDiscovery.net may receive commissions through affiliate
                  partnerships.
                </p>
                <p>
                  Our affiliate relationships do not affect the price paid by
                  visitors.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Third-Party Websites
                </h2>
                <p>This website may contain links to third-party websites.</p>
                <p>
                  We are not responsible for the content, services, policies, or
                  practices of third-party websites.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Limitation of Liability
                </h2>
                <p>
                  CourseDiscovery.net and its owners shall not be liable for any
                  direct, indirect, incidental, consequential, or special
                  damages arising from the use of this website.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these Terms and Conditions at
                  any time.
                </p>
                <p>
                  Continued use of the website after changes constitutes
                  acceptance of the revised terms.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Governing Law
                </h2>
                <p>
                  These Terms shall be governed by applicable laws in the
                  jurisdiction in which the website operator resides, without
                  regard to conflict of law principles.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">Contact</h2>
                <p>
                  Questions regarding these Terms and Conditions may be
                  submitted through the contact page on CourseDiscovery.net.
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
