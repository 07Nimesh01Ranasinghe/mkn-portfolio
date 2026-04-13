"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { storySteps } from "@/data/storytelling";
import { cn } from "@/lib/utils";

export function StickyStorytelling() {
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const activeIndex = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [0, 1, 2, 3]
  );

  return (
    <section
      ref={containerRef}
      className="relative mx-auto mt-8 max-w-7xl px-6"
      style={{ height: "110vh" }}
    >
      <div className="sticky top-24 grid min-h-[calc(100vh-6rem)] gap-8 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-background/70 p-8 shadow-[0_0_80px_rgba(0,217,255,0.07)] backdrop-blur-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_55%)]" />
          <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -left-8 bottom-8 h-24 w-24 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative z-10">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-400">
              Storytelling Journey
            </p>

            <StoryContent activeIndex={activeIndex} />
          </div>
        </div>

        <div className="space-y-4">
          {storySteps.map((step, index) => (
            <StepMarker
              key={step.id}
              index={index}
              title={step.title}
              eyebrow={step.eyebrow}
              activeIndex={activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryContent({
  activeIndex,
}: {
  activeIndex: MotionValue<number>;
}) {
  return (
    <div className="relative min-h-[340px] sm:min-h-[380px]">
      {storySteps.map((step, index) => (
        <StorySlide
          key={step.id}
          step={step}
          index={index}
          activeIndex={activeIndex}
        />
      ))}
    </div>
  );
}

function StorySlide({
  step,
  index,
  activeIndex,
}: {
  step: (typeof storySteps)[number];
  index: number;
  activeIndex: MotionValue<number>;
}) {
  const opacity = useTransform(activeIndex, (value) =>
    Math.abs(value - index) < 0.5 ? 1 : 0
  );

  const y = useTransform(activeIndex, (value) =>
    Math.abs(value - index) < 0.5 ? 0 : 24
  );

  return (
    <motion.div className="absolute inset-0" style={{ opacity, y }}>
      <p className="text-sm uppercase tracking-[0.22em] text-cyan-400">
        {step.eyebrow}
      </p>

      <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        {step.title}
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
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
    </motion.div>
  );
}

function StepMarker({
  index,
  eyebrow,
  title,
  activeIndex,
}: {
  index: number;
  eyebrow: string;
  title: string;
  activeIndex: MotionValue<number>;
}) {
  const opacity = useTransform(activeIndex, (value) =>
    Math.abs(value - index) < 0.5 ? 1 : 0.45
  );

  const scale = useTransform(activeIndex, (value) =>
    Math.abs(value - index) < 0.5 ? 1.02 : 1
  );

  return (
    <motion.div
      style={{ opacity, scale }}
      className={cn(
        "relative overflow-hidden rounded-[24px] border border-border bg-background/60 p-5 backdrop-blur-xl"
      )}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.75)]" />
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-400">
          {eyebrow}
        </p>
      </div>

      <p className="text-base font-medium leading-7 text-foreground/90">
        {title}
      </p>
    </motion.div>
  );
}