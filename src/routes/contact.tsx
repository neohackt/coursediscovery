import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: ({ match }) => ({
    meta: [
      { title: "Contact Us | Course Discovery" },
      {
        name: "description",
        content:
          "Get in touch with CourseDiscovery — questions, feedback, or partnership inquiries.",
      },
      { property: "og:title", content: "Contact Us | Course Discovery" },
      {
        property: "og:description",
        content:
          "Get in touch with CourseDiscovery — questions, feedback, or partnership inquiries.",
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <header className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
                Get in Touch
              </span>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Contact Us
              </h1>
            </header>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-left">
              <p className="text-center">
                Thank you for visiting CourseDiscovery.net.
              </p>
              <p className="text-center">
                We welcome feedback, questions, partnership inquiries, and
                suggestions.
              </p>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  General Inquiries
                </h2>
                <p>
                  For general questions regarding CourseDiscovery, course
                  recommendations, website feedback, or content suggestions,
                  please contact us using the information below.
                </p>
                <p className="text-left">
                  <strong>Email:</strong>
                </p>
                <p>
                  <a
                    href="mailto:info@whizadsbay.com"
                    className="text-primary hover:underline font-mono"
                  >
                    info@whizadsbay.com
                  </a>
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Business &amp; Partnership Inquiries
                </h2>
                <p>
                  For partnership opportunities, advertising inquiries,
                  sponsorships, or affiliate-related discussions:
                </p>
                <p className="text-left">
                  <strong>Email:</strong>
                </p>
                <p>
                  <a
                    href="mailto:info@whizadsbay.com"
                    className="text-primary hover:underline font-mono"
                  >
                    info@whizadsbay.com
                  </a>
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Response Time
                </h2>
                <p>
                  We aim to respond to most inquiries within 2–5 business days.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">Website</h2>
                <p>
                  <a
                    href="https://CourseDiscovery.net"
                    className="text-primary hover:underline"
                  >
                    CourseDiscovery.net
                  </a>
                </p>
              </div>

              <div className="pt-8 border-t border-border text-center space-y-2">
                <p className="text-foreground font-medium">
                  Thank you for helping us improve CourseDiscovery and support
                  learners worldwide.
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
