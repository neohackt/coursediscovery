import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/cookie")({
  head: ({ match }) => ({
    meta: [
      { title: "Cookie Policy | Course Discovery" },
      {
        name: "description",
        content:
          "CourseDiscovery cookie policy — how we use cookies and similar technologies on our website.",
      },
      { property: "og:title", content: "Cookie Policy | Course Discovery" },
      {
        property: "og:description",
        content:
          "CourseDiscovery cookie policy — how we use cookies and similar technologies on our website.",
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
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
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
                Cookie Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                <strong>Last Updated:</strong> June 2026
              </p>
            </header>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-left">
              <p>
                This Cookie Policy explains how CourseDiscovery.net uses cookies
                and similar technologies when you visit our website.
              </p>
              <p>
                By continuing to use our website, you consent to the use of
                cookies as described in this policy.
              </p>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  What Are Cookies?
                </h2>
                <p>
                  Cookies are small text files that are stored on your device
                  when you visit a website.
                </p>
                <p>
                  Cookies help websites remember user preferences, improve
                  functionality, analyze traffic, and enhance the overall
                  browsing experience.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  How We Use Cookies
                </h2>
                <p>
                  CourseDiscovery.net uses cookies for various purposes,
                  including:
                </p>

                <div className="space-y-4 pl-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Essential Cookies
                    </h3>
                    <p>
                      These cookies are necessary for the operation of the
                      website and cannot be disabled in our systems.
                    </p>
                    <p>Examples include:</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>Security functions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>Navigation functionality</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>Session management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>Form submissions</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Analytics Cookies
                    </h3>
                    <p>
                      These cookies help us understand how visitors interact
                      with our website.
                    </p>
                    <p>We may use analytics tools such as:</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>Google Analytics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>Microsoft Clarity</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>Other analytics platforms</span>
                      </li>
                    </ul>
                    <p>These tools may collect information such as:</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>Pages visited</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>Time spent on pages</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>Device type</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>Browser information</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>Traffic sources</span>
                      </li>
                    </ul>
                    <p>
                      The information collected is generally aggregated and
                      anonymized.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Performance Cookies
                    </h3>
                    <p>
                      Performance cookies help us improve website functionality
                      and user experience.
                    </p>
                    <p>They may be used to:</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>Measure website performance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>Identify technical issues</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>Improve loading speed and usability</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Affiliate Tracking Cookies
                    </h3>
                    <p>
                      CourseDiscovery.net participates in affiliate marketing
                      programs.
                    </p>
                    <p>
                      Affiliate partners may place cookies on your device when
                      you click affiliate links.
                    </p>
                    <p>
                      These cookies help track referrals and ensure that
                      commissions are properly attributed when purchases or
                      qualifying actions occur.
                    </p>
                    <p>
                      Affiliate cookies do not typically increase the price you
                      pay for any products or services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Advertising Cookies
                    </h3>
                    <p>
                      If we display advertisements or use advertising platforms,
                      cookies may be used to:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>Deliver relevant advertisements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>Measure campaign performance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>Limit repetitive ad displays</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>Improve advertising effectiveness</span>
                      </li>
                    </ul>
                    <p>
                      Advertising partners may collect information according to
                      their own privacy policies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Third-Party Cookies
                </h2>
                <p>
                  Some cookies may be placed by third-party services integrated
                  into our website.
                </p>
                <p>Examples may include:</p>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Google Analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Google AdSense</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Microsoft Clarity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Affiliate networks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Social media platforms</span>
                  </li>
                </ul>
                <p>
                  These third parties may collect and process information
                  according to their own policies.
                </p>
                <p>
                  We encourage users to review the privacy and cookie policies
                  of those providers.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Managing Cookies
                </h2>
                <p>
                  Most web browsers allow you to control or disable cookies
                  through browser settings.
                </p>
                <p>You can typically:</p>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>View stored cookies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Delete cookies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Block specific cookies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Block all cookies</span>
                  </li>
                </ul>
                <p>
                  Please note that disabling cookies may affect website
                  functionality.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">Consent</h2>
                <p>
                  Where required by applicable law, we may request your consent
                  before placing certain cookies on your device.
                </p>
                <p>
                  You may withdraw consent at any time through your browser
                  settings or cookie preferences (where available).
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Updates to This Policy
                </h2>
                <p>
                  We may update this Cookie Policy periodically to reflect
                  changes in technology, legal requirements, or website
                  functionality.
                </p>
                <p>
                  Updated versions will be posted on this page with a revised
                  effective date.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Contact Us
                </h2>
                <p>
                  If you have questions regarding this Cookie Policy, please
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
