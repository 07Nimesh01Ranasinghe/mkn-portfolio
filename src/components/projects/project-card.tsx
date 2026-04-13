"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/data/projects";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    whileHover={{
        y: -8,
        rotateX: 4,
        rotateY: -4,
    }}
    style={{ transformStyle: "preserve-3d" }}
    className="group relative overflow-hidden rounded-[28px] border border-border bg-background/70 p-6 backdrop-blur-xl transition hover:border-cyan-400/25"
    >
      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_50%)]" />

      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold tracking-tight">
            {project.title}
          </h3>

          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-400" />
        </div>

        <p className="text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
            Role
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{project.role}</p>
        </div>

        <div className="mt-4">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
            Impact
          </p>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            {project.impact.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
    
  );
}