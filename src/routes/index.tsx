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
      { title: "Course Discovery | Learn AI Skills Online" },
      {
        name: "description",
        content:
          "Discover curated AI learning resources covering ChatGPT, Prompt Engineering, AI Automation, Generative AI and more.",
      },
      {
        name: "keywords",
        content:
          "AI Courses, ChatGPT Courses, Prompt Engineering, AI Automation, Learn AI, Generative AI",
      },
      {
        property: "og:title",
        content: "Course Discovery | Learn AI Skills Online",
      },
      {
        property: "og:description",
        content:
          "Curated AI learning resources for beginners, marketers, developers and freelancers.",
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
