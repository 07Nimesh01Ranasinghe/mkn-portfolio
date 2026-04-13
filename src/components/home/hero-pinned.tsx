"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ParallaxSection } from "@/components/common/parallax-section";
import { Reveal } from "@/components/common/reveal";
import { HeroBadge } from "./hero-badge";

gsap.registerPlugin(ScrollTrigger);

export function HeroPinned() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !contentRef.current) return;

      const heroTween = gsap.to(contentRef.current, {
        scale: 0.96,
        opacity: 0.82,
        filter: "blur(6px)",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=140%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      return () => {
        heroTween.scrollTrigger?.kill();
        heroTween.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative z-10 h-screen overflow-hidden">
      <div
        ref={contentRef}
        className="relative h-full origin-center will-change-transform"
      >
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.10),_transparent_38%)]" />
        <div className="absolute left-[8%] top-[12%] h-52 w-52 rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute right-[10%] bottom-[12%] h-60 w-60 rounded-full bg-emerald-400/10 blur-[130px]" />

        <div className="mx-auto flex h-full max-w-7xl items-center px-6 py-20">
          <div className="relative z-10 grid w-full gap-12 md:grid-cols-2">
            <ParallaxSection
              intensity={80}
              className="flex flex-col justify-center"
            >
              <Reveal>
                <p className="mb-3 text-sm uppercase tracking-[0.32em] text-cyan-500">
                  MK Nimesh Ranasinghe
                </p>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                  MKN
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                  Software Engineer delivering practical, robust solutions from
                  idea to execution.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                  Focused on software engineering, customer engagement, business
                  problem solving, IT support, and creating reliable technical
                  outcomes that make a real difference.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/journey"
                    className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-500 transition hover:bg-cyan-400/20"
                  >
                    Explore Journey
                  </a>

                  <a
                    href="/projects"
                    className="rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:border-cyan-400/30 hover:bg-white/5"
                  >
                    View Projects
                  </a>
                </div>
              </Reveal>
            </ParallaxSection>

            <ParallaxSection
              intensity={140}
              className="flex items-center justify-center"
            >
              <Reveal delay={0.2}>
                <div className="relative flex h-[440px] w-[320px] items-center justify-center rounded-[32px] border border-cyan-400/20 bg-background/60 shadow-[0_0_80px_rgba(0,217,255,0.12)] backdrop-blur-2xl">
                  <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_55%)]" />
                  <div className="absolute h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
                  <div className="absolute bottom-14 h-28 w-28 rounded-full bg-emerald-400/12 blur-3xl" />
                  <HeroBadge />
                </div>
              </Reveal>
            </ParallaxSection>
          </div>
        </div>
      </div>
    </section>
  );
}