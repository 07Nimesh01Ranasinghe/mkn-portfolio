"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiMail,
  FiFileText,
  FiArrowUpRight,
  FiMessageSquare,
} from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { contactInfo } from "@/data/contact";

const contactCards = [
  {
    title: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: FiMail,
  },
  {
    title: "LinkedIn",
    value: "Connect professionally",
    href: contactInfo.linkedin,
    icon: FaLinkedin,
  },
  {
    title: "GitHub",
    value: "View code and repositories",
    href: contactInfo.github,
    icon: FaGithub,
  },
  {
    title: "CV / Resume",
    value: "Download my profile",
    href: contactInfo.cvUrl,
    icon: FiFileText,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s connect and build something meaningful
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            I&apos;m open to professional connections, project discussions,
            technical collaboration, and opportunities where practical,
            solution-driven engineering creates real value.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400/20"
            >
              Send an Email
              <FiArrowUpRight className="h-4 w-4" />
            </a>

            <Link
              href="/contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:border-cyan-400/30 hover:bg-white/5"
            >
              Open Contact Page
            </Link>
          </div>

          <div className="mt-10 rounded-[28px] border border-border bg-background/70 p-6 backdrop-blur-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.14)]">
              <FiMessageSquare className="h-6 w-6" />
            </div>

            <h3 className="text-2xl font-semibold tracking-tight">
              Professional Contact Note
            </h3>

            <p className="mt-4 text-base leading-7 text-muted-foreground">
              This section is ready for your real contact details. Replace the
              placeholder values in <code>src/data/contact.ts</code> and add
              your CV PDF into <code>public/cv/</code>.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {contactCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-[24px] border border-border bg-background/70 p-5 backdrop-blur-xl transition hover:border-cyan-400/25"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.10),_transparent_50%)]" />

                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.12)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <FiArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-cyan-400" />
                  </div>

                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
                    {item.title}
                  </p>

                  <p className="mt-3 text-base leading-7 text-muted-foreground">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}