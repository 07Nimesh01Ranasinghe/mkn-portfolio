"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiFileText,
  FiArrowUpRight,
  FiMessageSquare,
} from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { contactInfo } from "@/data/contact";

export function ContactContent() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-400">
          Get In Touch
        </p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Contact and professional links
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Reach out for project discussions, engineering opportunities,
          collaboration, or professional connections.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-[30px] border border-border bg-background/70 p-7 backdrop-blur-xl"
        >
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
            <FiMessageSquare className="h-6 w-6" />
          </div>

          <h2 className="text-2xl font-semibold tracking-tight">
            Let&apos;s start a conversation
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            This page is designed to make it easy for visitors to understand how
            to contact you and where to find your professional presence online.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center justify-between rounded-2xl border border-border px-5 py-4 transition hover:border-cyan-400/25 hover:bg-cyan-400/5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  <FiMail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-cyan-400">
                    Email
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {contactInfo.email}
                  </p>
                </div>
              </div>
              <FiArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </a>

            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-border px-5 py-4 transition hover:border-cyan-400/25 hover:bg-cyan-400/5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  <FaLinkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-cyan-400">
                    LinkedIn
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Professional network profile
                  </p>
                </div>
              </div>
              <FiArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </a>

            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-border px-5 py-4 transition hover:border-cyan-400/25 hover:bg-cyan-400/5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  <FaGithub className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-cyan-400">
                    GitHub
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Repositories and code work
                  </p>
                </div>
              </div>
              <FiArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </a>

            <a
              href={contactInfo.cvUrl}
              className="flex items-center justify-between rounded-2xl border border-border px-5 py-4 transition hover:border-cyan-400/25 hover:bg-cyan-400/5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  <FiFileText className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-cyan-400">
                    CV / Resume
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Download professional profile
                  </p>
                </div>
              </div>
              <FiArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="relative overflow-hidden rounded-[30px] border border-cyan-400/20 bg-background/70 p-7 shadow-[0_0_80px_rgba(0,217,255,0.07)] backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_55%)]" />
          <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -left-8 bottom-8 h-24 w-24 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-400">
              Setup Notes
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Where to add your real details
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
              <p>Update your email, LinkedIn, GitHub, and CV link inside:</p>

              <div className="rounded-2xl border border-border bg-background/60 px-4 py-3">
                <code>src/data/contact.ts</code>
              </div>

              <p>Add your CV PDF into:</p>

              <div className="rounded-2xl border border-border bg-background/60 px-4 py-3">
                <code>public/cv/</code>
              </div>

              <p>Later, we can also add a real contact form with email sending.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}