import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { fetchCoursesGroupedByCategory } from "@/lib/impact/courses.functions";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader } from "@/components/Section";
import { CourseCard, CourseCardSkeleton } from "@/components/CourseCard";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "AI Courses by Category | Course Discovery" },
      {
        name: "description",
        content:
          "Browse curated AI courses by category — marketing, development, productivity, data, and more.",
      },
      {
        property: "og:title",
        content: "AI Courses by Category | Course Discovery",
      },
      {
        property: "og:description",
        content:
          "Browse curated AI courses by category to find your next learning path.",
      },
    ],
  }),
  component: CoursesPage,
});

const ALL = "All";

function CoursesPage() {
  const fetcher = useServerFn(fetchCoursesGroupedByCategory);
  const { data, isLoading } = useQuery({
    queryKey: ["impact", "courses-grouped"],
    queryFn: () => fetcher({ data: { perCategory: 30 } }),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const [active, setActive] = useState<string>(ALL);

  const { categories, filtered, totalCourses } = useMemo(() => {
    const buckets = data?.buckets ?? [];
    const cats = buckets.map((b) => ({
      name: b.category,
      count: b.total,
      shown: b.courses.length,
    }));
    const totalCourses = buckets.reduce((sum, b) => sum + b.courses.length, 0);
    const filtered =
      active === ALL
        ? buckets.flatMap((b) => b.courses)
        : (buckets.find((b) => b.category === active)?.courses ?? []);
    return { categories: cats, filtered, totalCourses };
  }, [data, active]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <Section>
          <SectionHeader
            eyebrow="Browse"
            title="Explore AI Courses by Category"
            subtitle="Pick a category to discover hand-picked AI courses tailored to that topic."
          />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <CategoryButton
              label={`All (${totalCourses})`}
              active={active === ALL}
              onClick={() => setActive(ALL)}
            />
            {categories.map((c) => (
              <CategoryButton
                key={c.name}
                label={`${c.name} (${c.shown}/${c.count})`}
                active={active === c.name}
                onClick={() => setActive(c.name)}
              />
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <CourseCardSkeleton key={i} />
              ))
            ) : filtered.length ? (
              filtered.map((c, i) => (
                <CourseCard key={c.id} course={c} index={i} />
              ))
            ) : (
              <p className="col-span-full text-center text-muted-foreground">
                No courses available in this category yet. Check back soon.
              </p>
            )}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

function CategoryButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm font-medium transition border ${
        active
          ? "gradient-bg text-white border-transparent"
          : "border-border bg-card/60 text-foreground hover:border-primary/60"
      }`}
    >
      {label}
    </button>
  );
}
