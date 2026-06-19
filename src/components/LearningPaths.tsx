import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { learningPaths } from "@/lib/data";
import { AFFILIATE_URL } from "@/lib/constants";
import { Section, SectionHeader } from "./Section";

export function LearningPaths() {
  return (
    <Section id="paths">
      <SectionHeader
        eyebrow="Learning Paths"
        title="Choose Your Learning Path"
        subtitle="Pick a track that matches your goal. Every path links to curated, hands-on resources."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {learningPaths.map(({ icon: Icon, title, description }, i) => (
          <motion.a
            key={title}
            href={AFFILIATE_URL}
            target="_blank"
            rel="nofollow sponsored noopener"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/60 hover:glow-primary"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 to-accent/0 transition group-hover:from-primary/10 group-hover:to-accent/10" />
            <span className="grid h-12 w-12 place-items-center rounded-2xl gradient-bg text-white">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
              Explore{" "}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
