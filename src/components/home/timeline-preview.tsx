import Link from "next/link";
import { careerTimeline } from "@/data/career";
import { ArrowUpRight } from "lucide-react";

export function TimelinePreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-400">
            Journey Snapshot
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            A timeline of growth, learning, and real-world impact
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            From school and university to trainee experience and professional
            engineering work, each stage shaped how I approach problem solving
            and solution delivery.
          </p>

          <div className="mt-8">
            <Link
              href="/journey"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400/20"
            >
              View Full Journey
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-white/5" />
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400/80 via-cyan-400/30 to-emerald-400/70 shadow-[0_0_20px_rgba(34,211,238,0.3)]" />

          <div className="space-y-8">
            {careerTimeline.map((item) => (
              <div key={item.id} className="relative pl-14">
                <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/10 shadow-[0_0_16px_rgba(34,211,238,0.18)]">
                  <div className="h-3 w-3 rounded-full bg-cyan-400" />
                </div>

                <div className="rounded-[24px] border border-border bg-background/70 p-5 backdrop-blur-xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-400">
                      {item.period}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.organization}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}