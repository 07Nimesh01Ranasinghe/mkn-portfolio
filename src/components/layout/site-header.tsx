"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { navigationLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

const ThemeToggle = dynamic(
  () =>
    import("@/components/layout/theme-toggle").then((mod) => mod.ThemeToggle),
  {
    ssr: false,
    loading: () => (
      <div className="inline-flex h-11 w-11 rounded-full border border-border/60 bg-background/70 backdrop-blur-md" />
    ),
  }
);

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderedPath = useMemo(() => pathname, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/65 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="group relative flex flex-col">
            <span className="text-xl font-semibold tracking-[0.25em] text-foreground transition group-hover:text-cyan-400">
              MKN
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              MK Nimesh Ranasinghe
            </span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navigationLinks.map((item) => {
              const isActive = renderedPath === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition",
                    isActive
                      ? "text-cyan-300"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive ? (
                    <motion.span
                      layoutId="desktop-active-pill"
                      className="absolute inset-0 rounded-full border border-cyan-400/25 bg-cyan-400/10 shadow-[0_0_18px_rgba(34,211,238,0.12)]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400/20"
              >
                Let&apos;s Connect
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/70 backdrop-blur-md transition hover:border-cyan-400/30 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait" initial={false}>
        {mobileOpen ? (
          <motion.div
            key={`mobile-menu-${renderedPath}`}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-0 top-20 z-40 border-b border-border/40 bg-background/92 px-6 py-5 backdrop-blur-2xl md:hidden"
          >
            <div className="mx-auto max-w-7xl">
              <nav className="flex flex-col gap-2">
                {navigationLinks.map((item, index) => {
                  const isActive = renderedPath === item.href;

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm transition",
                          isActive
                            ? "border-cyan-400/25 bg-cyan-400/10 text-cyan-300"
                            : "border-border bg-background/40 text-muted-foreground hover:border-cyan-400/20 hover:text-foreground"
                        )}
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-4">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400/20"
                >
                  Let&apos;s Connect
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}