"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";
import { certificateTags, certificates } from "@/data/certificates";
import { cn } from "@/lib/utils";

export function CertificatesGallery() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredCertificates = useMemo(() => {
    if (activeTag === "All") return certificates;
    return certificates.filter((item) => item.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-400">
          Certificates
        </p>

        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Certifications, learning milestones, and achievements
        </h2>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          A growing collection of certifications and achievements that reflect
          my learning journey, technical development, and professional growth.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {certificateTags.map((tag) => {
          const isActive = activeTag === tag;

          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition",
                isActive
                  ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400"
                  : "border-border text-muted-foreground hover:border-cyan-400/20 hover:text-foreground"
              )}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredCertificates.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-[28px] border border-border bg-background/70 p-5 backdrop-blur-xl transition hover:border-cyan-400/25"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.10),_transparent_50%)]" />
            <div className="absolute -right-8 top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-5 overflow-hidden rounded-[22px] border border-border bg-background/60">
                <div className="flex h-[220px] items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_60%)]">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.14)]">
                      <Award className="h-7 w-7" />
                    </div>

                    <p className="px-6 text-sm text-muted-foreground">
                      Certificate preview area
                    </p>
                    <p className="mt-2 px-6 text-xs text-muted-foreground">
                      TODO: Add image in /public/certificates/
                    </p>
                  </div>
                </div>

                {/* TODO: Later replace preview area with next/image */}
                {/* Example:
                <Image
                  src={item.image ?? "/certificates/default.jpg"}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="h-[220px] w-full object-cover"
                />
                */}
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.issuer}
                  </p>
                </div>

                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-cyan-400" />
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-400">
                  {item.year}
                </span>

                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}