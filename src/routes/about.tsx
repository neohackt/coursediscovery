import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CourseDiscovery | Course Discovery" },
      {
        name: "description",
        content:
          "CourseDiscovery is an independent learning resource platform helping learners discover high-quality online courses across AI, technology, business, marketing, productivity, and professional development.",
      },
      {
        property: "og:title",
        content: "About CourseDiscovery | Course Discovery",
      },
      {
        property: "og:description",
        content:
          "CourseDiscovery is an independent learning resource platform helping learners discover high-quality online courses across AI, technology, business, marketing, productivity, and professional development.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <header className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
                About Us
              </span>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                About CourseDiscovery
              </h1>
              <p className="text-lg text-muted-foreground">
                Welcome to CourseDiscovery.net
              </p>
            </header>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                CourseDiscovery is an independent learning resource platform
                dedicated to helping learners discover high-quality online
                courses, certifications, and educational resources across a wide
                range of subjects, including Artificial Intelligence,
                technology, business, marketing, productivity, and professional
                development.
              </p>

              <div className="space-y-3">
                <p>Our mission is simple:</p>
                <p className="font-semibold text-foreground text-xl">
                  Help people find the right learning opportunities faster.
                </p>
              </div>

              <p>
                With thousands of online courses available across different
                platforms, it can be difficult to determine which courses are
                worth your time and investment. CourseDiscovery researches,
                organizes, and highlights learning resources to help individuals
                make informed decisions about their education and skill
                development.
              </p>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  What We Do
                </h2>
                <p>At CourseDiscovery, we:</p>
                <ul className="space-y-2 text-left max-w-md mx-auto">
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Discover and review online learning resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>
                      Curate course recommendations based on topics and career
                      goals
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Share educational guides and learning pathways</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>
                      Highlight limited-time course promotions and deals
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>
                      Provide insights to help learners choose suitable courses
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Independent Recommendations
                </h2>
                <p>
                  Our goal is to provide useful and unbiased information. While
                  we may earn commissions through affiliate partnerships, our
                  recommendations are based on relevance, educational value, and
                  user benefit.
                </p>
                <p>
                  We strive to present information clearly so visitors can make
                  their own informed decisions.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Affiliate Disclosure
                </h2>
                <p>
                  CourseDiscovery participates in various affiliate marketing
                  programs. This means that we may earn a commission when
                  visitors click certain links and make purchases through our
                  partner websites.
                </p>
                <p>
                  These commissions help support the operation and maintenance
                  of this website at no additional cost to you.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Our Commitment
                </h2>
                <p>We are committed to:</p>
                <ul className="space-y-2 text-left max-w-md mx-auto">
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Transparency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Accuracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>User-focused recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>Continuous improvement</span>
                  </li>
                </ul>
                <p className="pt-2">
                  We believe education should be accessible, discoverable, and
                  aligned with individual learning goals.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  Contact Us
                </h2>
                <p>
                  If you have questions, suggestions, or partnership inquiries,
                  please contact us through our website&apos;s contact page.
                </p>
              </div>

              <div className="pt-8 border-t border-border space-y-2">
                <p className="text-foreground font-medium">
                  Thank you for visiting CourseDiscovery.
                </p>
                <p>
                  We hope we can help you discover your next learning
                  opportunity.
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
