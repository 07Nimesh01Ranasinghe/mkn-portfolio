"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projectPanels = [
  {
    title: "University Projects",
    description:
      "Academic and practical engineering projects developed during my Computer Engineering degree.",
    href: "/projects/university",
    tag: "Engineering Growth",
  },
  {
    title: "Dockyard Total Solutions",
    description:
      "Industry exposure and solution work during my Software Engineer Trainee journey.",
    href: "/projects/dockyard",
    tag: "Industry Exposure",
  },
  {
    title: "Hayleys Aventura",
    description:
      "Professional engineering work focused on robust systems, support, and business-aligned outcomes.",
    href: "/projects/hayleys",
    tag: "Professional Impact",
  },
  {
    title: "Certificates & Learning",
    description:
      "A record of continuous learning, certifications, and technical development milestones.",
    href: "/certificates",
    tag: "Credibility",
  },
];

export function HorizontalProjects() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (!section || !track) return;

      const getScrollAmount = () =>
        Math.max(0, track.scrollWidth - window.innerWidth + 80);

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1.1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden border-y border-border/40"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.08),_transparent_40%)]" />

      <div className="flex h-full items-center">
        <div
          ref={trackRef}
          className="flex h-full items-center gap-8 px-8 will-change-transform"
        >
          {projectPanels.map((panel, index) => (
            <div
              key={panel.title}
              className="group relative flex h-[78vh] w-[82vw] max-w-[780px] flex-shrink-0 overflow-hidden rounded-[36px] border border-cyan-400/20 bg-background/70 p-8 shadow-[0_0_80px_rgba(0,217,255,0.06)] backdrop-blur-2xl md:w-[62vw]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_55%)]" />
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-[120px]" />
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-emerald-400/10 blur-[110px]" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-400">
                    {panel.tag}
                  </div>

                  <p className="mb-3 text-sm text-muted-foreground">
                    0{index + 1}
                  </p>

                  <h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                    {panel.title}
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                    {panel.description}
                  </p>
                </div>

                <div className="flex items-end justify-between gap-6">
                  <div className="h-40 w-full max-w-[260px] rounded-[28px] border border-border bg-background/50" />

                  <Link
                    href={panel.href}
                    className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400/20"
                  >
                    View Section
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}