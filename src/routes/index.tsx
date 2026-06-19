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
