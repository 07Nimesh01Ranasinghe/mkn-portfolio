"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import { careerTimeline } from "@/data/career";
import { cn } from "@/lib/utils";

function getTimelineIcon(id: string) {
  if (id.includes("al")) return BookOpen;
  if (id.includes("kdu")) return GraduationCap;
  return BriefcaseBusiness;
}

function getTimelineAccent(index: number) {
  const accents = [
    "from-cyan-400 via-sky-400 to-blue-500",
    "from-emerald-400 via-cyan-400 to-sky-500",
    "from-cyan-400 via-teal-400 to-emerald-400",
    "from-sky-400 via-cyan-400 to-emerald-400",
  ];

  return accents[index % accents.length];
}

export function CareerTimeline() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 20%", "end 85%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.35,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-400">
          Career Timeline
        </p>

        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          From academic foundations to professional engineering
        </h2>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          A journey shaped by learning, hands-on building, problem solving,
          customer-facing work, and practical software engineering experience.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/5 md:block" />

        <div className="absolute left-1/2 top-0 hidden h-full w-[6px] -translate-x-1/2 rounded-full bg-cyan-400/8 blur-md md:block" />

        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-1/2 top-0 hidden w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-300 via-cyan-400 to-emerald-400 shadow-[0_0_25px_rgba(34,211,238,0.45)] md:block"
        />

        <div className="space-y-14 md:space-y-24">
          {careerTimeline.map((item, index) => {
            const Icon = getTimelineIcon(item.id);
            const isLeft = index % 2 === 0;
            const accent = getTimelineAccent(index);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="grid items-center gap-8 md:grid-cols-[1fr_92px_1fr]">
                  <div
                    className={cn(
                      "md:block",
                      isLeft ? "md:order-1" : "md:order-3"
                    )}
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.28 }}
                      className={cn(
                        "group relative overflow-hidden rounded-[30px] border border-border bg-background/70 p-6 shadow-[0_12px_50px_rgba(0,0,0,0.16)] backdrop-blur-xl transition duration-300 hover:border-cyan-400/35",
                        "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_45%)] before:opacity-100 before:content-['']",
                        "after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-cyan-300/35 after:to-transparent after:content-['']"
                      )}
                    >
                      <div className="pointer-events-none absolute -right-10 top-8 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
                      <div className="pointer-events-none absolute -left-8 bottom-8 h-24 w-24 rounded-full bg-emerald-400/8 blur-3xl" />

                      <div className="relative z-10">
                        <div className="mb-5 flex flex-wrap items-center gap-3">
                          <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                            {item.period}
                          </span>

                          <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                            {item.organization}
                          </span>
                        </div>

                        <h3 className="text-2xl font-semibold tracking-tight">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-base leading-7 text-muted-foreground">
                          {item.summary}
                        </p>

                        <div className="mt-6">
                          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-foreground/80">
                            Technologies / Focus Areas
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-border bg-background/55 px-3 py-1 text-sm text-muted-foreground transition group-hover:border-cyan-400/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6">
                          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-foreground/80">
                            Key Achievements
                          </p>

                          <div className="space-y-2.5">
                            {item.achievements.map((achievement) => (
                              <div
                                key={achievement}
                                className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                              >
                                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.75)]" />
                                <span>{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {item.notableProjectsHref && item.notableProjectsLabel ? (
                          <div className="mt-7">
                            <Link
                              href={item.notableProjectsHref}
                              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400/20"
                            >
                              {item.notableProjectsLabel}
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          </div>
                        ) : null}
                      </div>
                    </motion.div>
                  </div>

                  <div className="relative hidden items-center justify-center md:flex md:order-2">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="relative z-10 flex h-[92px] w-[92px] items-center justify-center"
                    >
                      <div className="absolute h-24 w-24 rounded-full bg-cyan-400/12 blur-2xl" />
                      <div className="absolute h-20 w-20 rounded-full border border-cyan-300/12 bg-background/20 backdrop-blur-xl" />

                      <div
                        className={cn(
                          "relative flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br text-white shadow-[0_0_25px_rgba(34,211,238,0.24)]",
                          accent
                        )}
                      >
                        <Icon className="h-7 w-7" />
                      </div>
                    </motion.div>
                  </div>

                  <div
                    className={cn(
                      "hidden md:block",
                      isLeft ? "md:order-3" : "md:order-1"
                    )}
                  />
                </div>

                <div className="mb-4 flex items-center gap-4 md:hidden">
                  <div
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br text-white shadow-[0_0_20px_rgba(34,211,238,0.2)]",
                      accent
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/60 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}