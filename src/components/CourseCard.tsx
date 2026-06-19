import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import type { Course } from "@/lib/impact/types";

const benefits = [
  "Beginner Friendly",
  "Practical Projects",
  "Certificate Included",
];

export function CourseCard({
  course,
  index = 0,
}: {
  course: Course;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-background transition hover:-translate-y-1 hover:border-primary/60"
    >
      <div className="relative aspect-[16/10] overflow-hidden gradient-bg">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-105"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <span className="absolute left-4 top-4 z-10 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {course.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl font-semibold line-clamp-2">{course.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
          {course.description}
        </p>
        <ul className="mt-5 space-y-2">
          {benefits.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-primary" /> {b}
            </li>
          ))}
        </ul>
        <a
          href={course.affiliateUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-full gradient-bg px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          View Course <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: course.title,
            description: course.description,
            image: course.image,
            provider: course.brand
              ? { "@type": "Organization", name: course.brand }
              : undefined,
            url: course.affiliateUrl,
          }),
        }}
      />
    </motion.div>
  );
}

export function CourseCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-border bg-background">
      <div className="aspect-[16/10] animate-pulse bg-muted" />
      <div className="flex flex-1 flex-col gap-3 p-7">
        <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
        <div className="mt-4 h-10 w-full animate-pulse rounded-full bg-muted" />
      </div>
    </div>
  );
}
