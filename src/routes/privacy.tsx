import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Course Discovery" },
      {
        name: "description",
        content:
          "CourseDiscovery privacy policy — how we collect, use, and protect your information.",
      },
      { property: "og:title", content: "Privacy Policy | Course Discovery" },
      {
        property: "og:description",
        content:
          "CourseDiscovery privacy policy — how we collect, use, and protect your information.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                <strong>Last Updated:</strong> June 2026
              </p>
            </header>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-left">
              <p>
                Welcome to CourseDiscovery.net. Your privacy is important to us.
                This Privacy Policy explains how information may be collected,
                used, and protected when you visit our website.
              </p>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Information We Collect
                </h2>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    Information You Provide
                  </h3>
                  <p>
                    We may collect information that you voluntarily provide,
                    such as:
                  </p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Name</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Email address</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Contact information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Messages submitted through contact forms</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    Automatically Collected Information
                  </h3>
                  <p>
                    When you visit our website, certain information may be
                    collected automatically, including:
                  </p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>IP address</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Browser type</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Device information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Referring website</span>
                    </li>
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
                      <span>General usage analytics</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">Cookies</h2>
                <p>
                  CourseDiscovery may use cookies and similar technologies to
                  improve website functionality, analyze traffic, and enhance
                  user experience.
                </p>
                <p>Cookies may be used to:</p>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Remember preferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Measure website performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Analyze visitor behavior</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Support affiliate tracking</span>
                  </li>
                </ul>
                <p>
                  You can modify your browser settings to refuse cookies if you
                  prefer.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Affiliate Links
                </h2>
                <p>
                  CourseDiscovery participates in affiliate marketing programs.
                </p>
                <p>
                  Some links on this website are affiliate links. If you click
                  an affiliate link and make a purchase, we may receive a
                  commission at no additional cost to you.
                </p>
                <p>
                  Affiliate partners may use cookies or tracking technologies to
                  attribute commissions and measure performance.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Analytics
                </h2>
                <p>
                  We may use analytics services to better understand how
                  visitors interact with our website.
                </p>
                <p>These services may collect information such as:</p>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Traffic sources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>User interactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Device information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Geographic region</span>
                  </li>
                </ul>
                <p>
                  The collected information is generally used in aggregate form
                  to improve the website.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Third-Party Websites
                </h2>
                <p>Our website may contain links to third-party websites.</p>
                <p>
                  We are not responsible for the privacy practices, content, or
                  policies of external websites. We encourage users to review
                  the privacy policies of any third-party sites they visit.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Data Security
                </h2>
                <p>
                  We take reasonable measures to protect information from
                  unauthorized access, disclosure, or misuse. However, no method
                  of internet transmission or electronic storage can be
                  guaranteed to be completely secure.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Children&apos;s Privacy
                </h2>
                <p>
                  CourseDiscovery is not directed toward children under the age
                  of 13.
                </p>
                <p>
                  We do not knowingly collect personal information from children
                  under 13.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Your Rights
                </h2>
                <p>
                  Depending on your location, you may have certain rights
                  regarding your personal information, including:
                </p>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Access to personal data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Correction of inaccurate information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Deletion requests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Objection to processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Data portability rights</span>
                  </li>
                </ul>
                <p>
                  To exercise these rights, please contact us through our
                  website.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. Any
                  updates will be posted on this page with a revised effective
                  date.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">Contact</h2>
                <p>
                  If you have questions regarding this Privacy Policy, please
                  contact us through the contact information provided on
                  CourseDiscovery.net.
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
