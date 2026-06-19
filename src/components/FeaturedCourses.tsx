import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { fetchFeaturedCourses } from "@/lib/impact/courses.functions";
import { Section, SectionHeader } from "./Section";
import { CourseCard, CourseCardSkeleton } from "./CourseCard";

export function FeaturedCourses() {
  const fetcher = useServerFn(fetchFeaturedCourses);
  const { data, isLoading } = useQuery({
    queryKey: ["impact", "featured", 6],
    queryFn: () => fetcher({ data: { limit: 6 } }),
    staleTime: 1000 * 60 * 60 * 24, // 24h ISR-equivalent
  });

  return (
    <Section id="courses" className="bg-card/30">
      <SectionHeader
        eyebrow="Featured"
        title="Hand-picked AI Courses"
        subtitle="Curated resources we'd recommend to a friend starting their AI journey today."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <CourseCardSkeleton key={i} />
          ))
        ) : data?.courses?.length ? (
          data.courses.map((c, i) => (
            <CourseCard key={c.id} course={c} index={i} />
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">
            New learning opportunities are being refreshed. Please check back
            shortly.
          </p>
        )}
      </div>
    </Section>
  );
}
