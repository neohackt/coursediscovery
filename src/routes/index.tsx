import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { LearningPaths } from "@/components/LearningPaths";
import { FeaturedCourses } from "@/components/FeaturedCourses";
import { Benefits } from "@/components/Benefits";
import { Stats } from "@/components/Stats";
import { Countdown } from "@/components/Countdown";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Udemy AI Course Discounts 2026 | Up to 85% Off" },
      {
        name: "description",
        content:
          "Verified Udemy AI course discounts updated daily. Save up to 85% on ChatGPT, AI Automation, Prompt Engineering courses. Browse deals now.",
      },
      {
        name: "keywords",
        content:
          "AI Courses, ChatGPT Courses, Prompt Engineering, AI Automation, Learn AI, Generative AI, Udemy Discounts",
      },
      {
        property: "og:title",
        content: "Udemy AI Course Discounts 2026 | Up to 85% Off",
      },
      {
        property: "og:description",
        content:
          "Verified Udemy AI course discounts updated daily. Save up to 85% on ChatGPT, AI Automation, Prompt Engineering courses. Browse deals now.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
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
              name: "Are these courses beginner friendly?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Most resources start from the basics and ramp up step by step — no prior AI experience required.",
              },
            },
            {
              "@type": "Question",
              name: "Do I need coding experience?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No coding needed for most paths. Developer-focused tracks are clearly marked if you want to go deeper.",
              },
            },
            {
              "@type": "Question",
              name: "Can I learn at my own pace?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. All featured resources are self-paced with lifetime access, so you can revisit anytime.",
              },
            },
            {
              "@type": "Question",
              name: "Are certificates available?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — many of the recommended courses include a completion certificate you can share on LinkedIn.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <LearningPaths />
        <FeaturedCourses />
        <Benefits />
        <Stats />
        <Countdown />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
