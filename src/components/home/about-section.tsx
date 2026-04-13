"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Code2,
  BriefcaseBusiness,
  Wrench,
  Megaphone,
  ShieldCheck,
  Users,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const strengths = [
  {
    title: "Software Engineering",
    description:
      "I build practical software solutions with a strong focus on reliability, maintainability, and real business value.",
    icon: Code2,
  },
  {
    title: "Customer Engagement",
    description:
      "I work closely with users and business stakeholders to understand real needs and shape effective outcomes.",
    icon: Users,
  },
  {
    title: "IT Support & Problem Solving",
    description:
      "I approach issues with a solution mindset, helping teams and customers resolve technical challenges with confidence.",
    icon: Wrench,
  },
  {
    title: "Business & Marketing Awareness",
    description:
      "I understand that software is not only about code, but also about communication, positioning, and impact.",
    icon: Megaphone,
  },
  {
    title: "Robust Solution Delivery",
    description:
      "I focus on delivering dependable, production-minded solutions that are practical, scalable, and useful.",
    icon: ShieldCheck,
  },
  {
    title: "Professional Responsibility",
    description:
      "I value clarity, ownership, continuous learning, and the ability to contribute across technical and business contexts.",
    icon: BriefcaseBusiness,
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shellRef = useRef<HTMLDivElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const rightTopCardRef = useRef<HTMLDivElement | null>(null);
  const photoCardRef = useRef<HTMLDivElement | null>(null);
  const strengthRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const shell = shellRef.current;
      const leftCol = leftColRef.current;
      const rightTopCard = rightTopCardRef.current;
      const photoCard = photoCardRef.current;
      const strengthCards = strengthRefs.current;

      if (!section || !shell || !leftCol || !rightTopCard) return;

      gsap.set(shell, {
        opacity: 0,
        y: 120,
        scale: 0.97,
        filter: "blur(10px)",
      });

      gsap.set(leftCol.children, {
        opacity: 0,
        y: 34,
      });

      gsap.set(rightTopCard, {
        opacity: 0,
        y: 42,
        scale: 0.98,
      });

      gsap.set(strengthCards, {
        opacity: 0,
        y: 36,
        scale: 0.98,
      });

      const entryTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          end: "top 30%",
          scrub: 1.05,
        },
      });

      entryTl
        .to(shell, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.55,
          ease: "none",
        })
        .to(
          leftCol.children,
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.42,
            ease: "none",
          },
          "-=0.28"
        )
        .to(
          rightTopCard,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            ease: "none",
          },
          "-=0.32"
        )
        .to(
          strengthCards,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.06,
            duration: 0.38,
            ease: "none",
          },
          "-=0.2"
        );

      const exitTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "bottom 78%",
          end: "bottom 18%",
          scrub: 1.05,
        },
      });

      exitTl.to(shell, {
        opacity: 0.58,
        y: -70,
        scale: 0.985,
        filter: "blur(5px)",
        ease: "none",
      });

      if (photoCard) {
        gsap.to(photoCard, {
          y: -42,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      return () => {
        entryTl.scrollTrigger?.kill();
        entryTl.kill();
        exitTl.scrollTrigger?.kill();
        exitTl.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto max-w-7xl px-6 py-24"
    >
      <div
        ref={shellRef}
        className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start will-change-transform"
      >
        <div ref={leftColRef}>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-400">
            About MKN
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Engineering solutions with technical depth and practical business
            understanding
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            I am a Software Engineer who focuses on delivering practical and
            robust solutions that solve real-world problems. My work is not
            limited to development alone. I also engage with customers, support
            technical operations, understand business needs, and contribute to
            better outcomes through clear communication and solution-oriented
            thinking.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            I believe strong software comes from understanding both the
            technical side and the human side of a problem. That means building
            reliable systems, responding to user needs, improving workflows,
            and creating results that are useful in practice.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
              Software Engineer
            </span>
            <span className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
              Solution Builder
            </span>
            <span className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
              Customer-Focused
            </span>
            <span className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
              IT Support Mindset
            </span>
          </div>

          <div className="mt-10 rounded-[28px] border border-border bg-background/70 p-6 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-400">
              Personal Brand
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight">MKN</h3>

            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
              MK Nimesh Ranasinghe
            </p>

            <p className="mt-5 text-base leading-7 text-muted-foreground">
              Software Engineer delivering practical, robust solutions from idea
              to execution.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div
            ref={rightTopCardRef}
            className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-background/70 p-6 shadow-[0_0_80px_rgba(0,217,255,0.07)] backdrop-blur-2xl will-change-transform"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_55%)]" />
            <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -left-8 bottom-8 h-24 w-24 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="relative z-10 grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
              <div className="flex items-center justify-center">
                <div
                  ref={photoCardRef}
                  className="relative flex h-[240px] w-[200px] items-center justify-center overflow-hidden rounded-[28px] border border-cyan-400/20 bg-background/60 will-change-transform"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_55%)]" />
                  <div className="absolute h-24 w-24 rounded-full bg-cyan-400/15 blur-3xl" />

                  <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/30 bg-card text-2xl font-semibold tracking-[0.2em] text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.24)]">
                    MKN
                  </div>

                  {/* TODO: Replace this placeholder with your real photo later */}
                  {/* TODO: Add your image inside /public/profile.jpg and replace this block with next/image */}
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-cyan-400">
                  Professional Snapshot
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Building useful systems, solving problems, and supporting
                  outcomes
                </h3>

                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  My work combines engineering execution, technical support,
                  stakeholder communication, and practical solution building. I
                  aim to create software and technical outcomes that are stable,
                  useful, and aligned with real-world business needs.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  ref={(el) => {
                    if (el) strengthRefs.current[index] = el;
                  }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.22 }}
                  className="group relative overflow-hidden rounded-[24px] border border-border bg-background/70 p-5 backdrop-blur-xl transition hover:border-cyan-400/25"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.10),_transparent_50%)] opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.12)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h4 className="text-lg font-semibold tracking-tight">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}