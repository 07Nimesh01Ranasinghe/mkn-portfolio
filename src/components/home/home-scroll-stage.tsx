"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { HeroBadge } from "@/components/home/hero-badge";
import { MagneticButton } from "@/components/common/magnetic-button";
import { storySteps } from "@/data/storytelling";

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

export function HomeScrollStage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const heroLayerRef = useRef<HTMLDivElement | null>(null);
  const heroContentRef = useRef<HTMLDivElement | null>(null);

  const storyLayerRef = useRef<HTMLDivElement | null>(null);
  const storyShellRef = useRef<HTMLDivElement | null>(null);
  const storyMaskRef = useRef<HTMLDivElement | null>(null);
  const storyPanelRefs = useRef<HTMLDivElement[]>([]);
  const storyProgressRefs = useRef<HTMLDivElement[]>([]);

  const projectsLayerRef = useRef<HTMLDivElement | null>(null);
  const projectsShellRef = useRef<HTMLDivElement | null>(null);
  const projectsMaskRef = useRef<HTMLDivElement | null>(null);
  const projectsTrackRef = useRef<HTMLDivElement | null>(null);
  const projectCardRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const section = sectionRef.current;

      const heroLayer = heroLayerRef.current;
      const heroContent = heroContentRef.current;

      const storyLayer = storyLayerRef.current;
      const storyShell = storyShellRef.current;
      const storyMask = storyMaskRef.current;
      const storyPanels = storyPanelRefs.current;
      const storyProgress = storyProgressRefs.current;

      const projectsLayer = projectsLayerRef.current;
      const projectsShell = projectsShellRef.current;
      const projectsMask = projectsMaskRef.current;
      const projectsTrack = projectsTrackRef.current;
      const projectCards = projectCardRefs.current;

      if (
        !section ||
        !heroLayer ||
        !heroContent ||
        !storyLayer ||
        !storyShell ||
        !storyMask ||
        !projectsLayer ||
        !projectsShell ||
        !projectsMask ||
        !projectsTrack ||
        storyPanels.length === 0
      ) {
        return;
      }

      gsap.set(heroLayer, { zIndex: 10 });

      gsap.set(storyLayer, {
        zIndex: 20,
        yPercent: 100,
      });

      gsap.set(storyShell, {
        borderTopLeftRadius: 52,
        borderTopRightRadius: 52,
      });

      gsap.set(storyMask, {
        clipPath: "inset(0% 0% 100% 0% round 52px 52px 0px 0px)",
      });

      gsap.set(projectsLayer, {
        zIndex: 30,
        xPercent: -100,
      });

      gsap.set(projectsShell, {
        borderTopLeftRadius: 52,
        borderTopRightRadius: 52,
      });

      gsap.set(projectsMask, {
        clipPath: "inset(0% 100% 0% 0% round 52px 52px 0px 0px)",
      });

      gsap.set(storyPanels, {
        opacity: 0,
        y: 80,
        scale: 0.96,
      });

      gsap.set(storyProgress, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(projectCards, {
        opacity: 0,
        x: 120,
        scale: 0.96,
      });

      gsap.set(projectsTrack, { x: 0 });

      const maxTrackShift = Math.max(
        0,
        projectsTrack.scrollWidth - window.innerWidth + 120
      );

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${2800 + storySteps.length * 850 + 2600}`,
          pin: true,
          scrub: 1.1,
          anticipatePin: 1,
        },
      });

      // HERO -> STORY
      tl.to(
        heroContent,
        {
          scale: 0.95,
          opacity: 0.76,
          filter: "blur(8px)",
          duration: 0.75,
          ease: "none",
        },
        0
      )
        .to(
          storyLayer,
          {
            yPercent: 0,
            duration: 0.85,
            ease: "none",
          },
          0
        )
        .to(
          storyMask,
          {
            clipPath: "inset(0% 0% 0% 0% round 0px 0px 0px 0px)",
            duration: 0.85,
            ease: "none",
          },
          0
        )
        .to(
          storyShell,
          {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            duration: 0.85,
            ease: "none",
          },
          0
        );

      // STORY PANELS
      storySteps.forEach((_, index) => {
        const panel = storyPanels[index];
        const progress = storyProgress[index];

        if (!panel || !progress) return;

        tl.to(panel, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.42,
        })
          .to(
            progress,
            {
              scaleX: 1,
              duration: 0.3,
            },
            "<"
          )
          .to({}, { duration: 0.24 })
          .to(panel, {
            opacity: 0,
            y: -70,
            scale: 0.98,
            duration: 0.42,
          })
          .to(
            progress,
            {
              scaleX: 0.25,
              duration: 0.28,
            },
            "<"
          );
      });

      // STORY -> PROJECTS
      tl.to(
        storyShell,
        {
          scale: 0.975,
          opacity: 0.78,
          filter: "blur(7px)",
          duration: 0.55,
          ease: "none",
        },
        ">+=0.06"
      )
        .to(
          projectsLayer,
          {
            xPercent: 0,
            duration: 0.9,
            ease: "none",
          },
          "<"
        )
        .to(
          projectsMask,
          {
            clipPath: "inset(0% 0% 0% 0% round 0px 0px 0px 0px)",
            duration: 0.9,
            ease: "none",
          },
          "<"
        )
        .to(
          projectsShell,
          {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            duration: 0.9,
            ease: "none",
          },
          "<"
        );

      // PROJECT CARDS ENTER
      tl.to(
        projectCards,
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.08,
        },
        ">-=0.08"
      );

      // HOLD
      tl.to({}, { duration: 0.18 });

      // TRACK RIGHT -> LEFT
      tl.to(projectsTrack, {
        x: -maxTrackShift,
        duration: 1.45,
        ease: "none",
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* HERO LAYER */}
      <div
        ref={heroLayerRef}
        className="absolute inset-0 overflow-hidden bg-background"
      >
        <div
          ref={heroContentRef}
          className="relative h-full origin-center will-change-transform"
        >
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.10),_transparent_38%)]" />
          <div className="absolute left-[8%] top-[12%] h-52 w-52 rounded-full bg-cyan-400/10 blur-[120px]" />
          <div className="absolute right-[10%] bottom-[12%] h-60 w-60 rounded-full bg-emerald-400/10 blur-[130px]" />

          <div className="mx-auto flex h-full max-w-7xl items-center px-6 py-20">
            <div className="grid w-full gap-12 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <p className="mb-3 text-sm uppercase tracking-[0.32em] text-cyan-500">
                  MK Nimesh Ranasinghe
                </p>

                <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                  MKN
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                  Software Engineer delivering practical, robust solutions from
                  idea to execution.
                </p>

                <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                  Focused on software engineering, customer engagement, business
                  problem solving, IT support, and creating reliable technical
                  outcomes that make a real difference.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <MagneticButton href="/journey" variant="primary">
                    Explore Journey
                  </MagneticButton>

                  <MagneticButton href="/projects" variant="secondary">
                    View Projects
                  </MagneticButton>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative flex h-[440px] w-[320px] items-center justify-center rounded-[32px] border border-cyan-400/20 bg-background/60 shadow-[0_0_80px_rgba(0,217,255,0.12)] backdrop-blur-2xl">
                  <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_55%)]" />
                  <div className="absolute h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
                  <div className="absolute bottom-14 h-28 w-28 rounded-full bg-emerald-400/12 blur-3xl" />
                  <HeroBadge />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STORY LAYER */}
      <div
        ref={storyLayerRef}
        className="absolute inset-0 overflow-hidden will-change-transform"
      >
        <div
          ref={storyShellRef}
          className="relative h-full overflow-hidden border-t border-cyan-400/20 bg-background shadow-[0_-40px_120px_rgba(0,0,0,0.35)] will-change-transform"
        >
          <div
            ref={storyMaskRef}
            className="absolute inset-0 z-10 bg-background"
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.10),_transparent_35%)]" />
          <div className="absolute left-[8%] top-[14%] h-60 w-60 rounded-full bg-cyan-400/10 blur-[130px]" />
          <div className="absolute right-[10%] bottom-[16%] h-64 w-64 rounded-full bg-emerald-400/10 blur-[140px]" />

          <div className="relative z-20 mx-auto grid h-full max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative flex h-full items-center">
              <div className="relative h-[460px] w-full overflow-hidden rounded-[34px] border border-cyan-400/20 bg-background/70 p-8 shadow-[0_0_80px_rgba(0,217,255,0.08)] backdrop-blur-2xl sm:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_55%)]" />
                <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="absolute -left-8 bottom-8 h-28 w-28 rounded-full bg-emerald-400/10 blur-3xl" />

                {storySteps.map((step, index) => (
                  <div
                    key={step.id}
                    ref={(el) => {
                      if (el) storyPanelRefs.current[index] = el;
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
                          if (el) storyProgressRefs.current[index] = el;
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
      </div>

      {/* PROJECTS LAYER */}
      <div
        ref={projectsLayerRef}
        className="absolute inset-0 overflow-hidden will-change-transform"
      >
        <div
          ref={projectsShellRef}
          className="relative h-full overflow-hidden border-l border-cyan-400/20 bg-background shadow-[-40px_0_120px_rgba(0,0,0,0.35)] will-change-transform"
        >
          <div
            ref={projectsMaskRef}
            className="absolute inset-0 z-10 bg-background"
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.08),_transparent_40%)]" />
          <div className="absolute left-[12%] top-[16%] h-52 w-52 rounded-full bg-cyan-400/10 blur-[120px]" />
          <div className="absolute right-[8%] bottom-[14%] h-56 w-56 rounded-full bg-emerald-400/10 blur-[130px]" />

          <div
            ref={projectsTrackRef}
            className="relative z-20 flex h-full items-center gap-8 px-8 will-change-transform"
          >
            {projectPanels.map((panel, index) => (
              <div
                key={panel.title}
                ref={(el) => {
                  if (el) projectCardRefs.current[index] = el;
                }}
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
      </div>
    </section>
  );
}