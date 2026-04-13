import Link from "next/link";
import { contactInfo } from "@/data/contact";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <p className="text-xl font-semibold tracking-[0.22em] text-foreground">
            MKN
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            MK Nimesh Ranasinghe
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
            Software Engineer delivering practical, robust solutions from idea
            to execution.
          </p>
        </div>

        <div className="md:text-right">
          <div className="flex flex-wrap gap-4 md:justify-end">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition hover:text-cyan-400"
            >
              LinkedIn
            </a>

            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              className="text-sm text-muted-foreground transition hover:text-cyan-400"
            >
              Email
            </a>

            <Link
              href="/contact"
              className="text-sm text-muted-foreground transition hover:text-cyan-400"
            >
              Contact
            </Link>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            © {year} MKN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}