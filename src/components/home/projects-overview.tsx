"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, BriefcaseBusiness, Building2, ArrowUpRight } from "lucide-react";

const projectCategories = [
  {
    title: "University Projects",
    description:
      "Academic and practical projects developed during my Computer Engineering degree, focusing on system design, programming, and engineering fundamentals.",
    href: "/projects/university",
    icon: GraduationCap,
    tags: ["Engineering", "Academic", "Systems", "Development"],
  },
  {
    title: "Dockyard Total Solutions",
    description:
      "Real-world experience as a Software Engineer Trainee, contributing to practical solutions and gaining hands-on exposure to business and technical environments.",
    href: "/projects/dockyard",
    icon: BriefcaseBusiness,
    tags: ["Industry", "Trainee", "Real-world", "Solutions"],
  },
  {
    title: "Hayleys Aventura",
    description:
      "Professional engineering work delivering robust solutions, supporting operations, and working closely with business needs and customer requirements.",
    href: "/projects/hayleys",
    icon: Building2,
    tags: ["Professional", "Solutions", "Support", "Business"],
  },
];

export function ProjectsOverview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-400">
          Projects
        </p>

        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Work that reflects my journey and real-world impact
        </h2>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          A collection of academic, trainee, and professional work that
          demonstrates my ability to build solutions, solve problems, and
          contribute across different environments.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectCategories.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[28px] border border-border bg-background/70 p-6 backdrop-blur-xl transition hover:border-cyan-400/25"
            >
              {/* glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_50%)]" />
              <div className="absolute -right-10 top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute -left-8 bottom-8 h-24 w-24 rounded-full bg-emerald-400/10 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-cyan-400" />
                </div>

                <h3 className="text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:gap-3"
                  >
                    View Projects
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}