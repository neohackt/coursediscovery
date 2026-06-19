import { motion } from "framer-motion";
import { benefits } from "@/lib/data";
import { Section, SectionHeader } from "./Section";

export function Benefits() {
  return (
    <Section id="benefits">
      <SectionHeader eyebrow="Why Learn AI" title="Skills that pay you back" />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-3xl border border-border bg-card p-7"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
