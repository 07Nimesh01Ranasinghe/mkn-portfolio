"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { storySteps } from "@/data/storytelling";

gsap.registerPlugin(ScrollTrigger);

export function GSAPStorytelling() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const shellRef = useRef<HTMLDivElement | null>(null);
  const panelRefs = useRef<HTMLDivElement[]>([]);
  const progressRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const shell = shellRef.current;
      const panels = panelRefs.current;
      const progressBars = progressRefs.current;

      if (!section || !shell || panels.length === 0) return;

      gsap.set(shell, {
        yPercent: 100,
        borderTopLeftRadius: 48,
        borderTopRightRadius: 48,
      });

      gsap.set(panels, {
        opacity: 0,
        y: 80,
        scale: 0.96,
      });

      gsap.set(progressBars, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${storySteps.length * 1100 + 900}`,
          scrub: 1.15,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1) Cover animation: shell rises and covers hero
      tl.to(shell, {
        yPercent: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        duration: 0.85,
        ease: "none",
      });

      // 2) Story panels animate after cover is complete
      storySteps.forEach((_, index) => {
        const panel = panels[index];
        const progress = progressBars[index];

        if (!panel || !progress) return;

        tl.to(panel, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
        })
          .to(
            progress,
            {
              scaleX: 1,
              duration: 0.35,
            },
            "<"
          )
          .to({}, { duration: 0.28 })
          .to(panel, {
            opacity: 0,
            y: -70,
            scale: 0.98,
            duration: 0.45,
          })
          .to(
            progress,
            {
              scaleX: 0.25,
              duration: 0.35,
            },
            "<"
          );
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative z-20 h-screen overflow-hidden"
    >
      <div
        ref={shellRef}
        className="relative h-full overflow-hidden border-t border-cyan-400/20 bg-background shadow-[0_-40px_120px_rgba(0,0,0,0.35)] will-change-transform"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.10),_transparent_35%)]" />
        <div className="absolute left-[8%] top-[14%] h-60 w-60 rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute right-[10%] bottom-[16%] h-64 w-64 rounded-full bg-emerald-400/10 blur-[140px]" />

        <div className="mx-auto grid h-full max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative flex h-full items-center">
            <div className="relative h-[460px] w-full overflow-hidden rounded-[34px] border border-cyan-400/20 bg-background/70 p-8 shadow-[0_0_80px_rgba(0,217,255,0.08)] backdrop-blur-2xl sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_55%)]" />
              <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute -left-8 bottom-8 h-28 w-28 rounded-full bg-emerald-400/10 blur-3xl" />

              {storySteps.map((step, index) => (
                <div
                  key={step.id}
                  ref={(el) => {
                    if (el) panelRefs.current[index] = el;
                  }}
                  className="absolute inset-0 flex flex-col justify-center p-8 sm:p-10"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
                    {step.eyebrow}
                  </p>

                  <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                    {step.title}
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                    {step.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {step.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex h-full items-center">
            <div className="w-full space-y-5">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
                Journey Progress
              </p>

              {storySteps.map((step, index) => (
                <div
                  key={step.id}
                  className="rounded-[24px] border border-border bg-background/55 p-5 backdrop-blur-xl"
                >
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-400">
                      {step.eyebrow}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="text-base font-medium leading-7 text-foreground/90">
                    {step.title}
                  </p>

                  <div className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-border/60">
                    <div
                      ref={(el) => {
                        if (el) progressRefs.current[index] = el;
                      }}
                      className="h-full w-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}