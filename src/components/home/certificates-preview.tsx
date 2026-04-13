import Link from "next/link";
import { certificates } from "@/data/certificates";
import { Award, ArrowUpRight } from "lucide-react";

export function CertificatesPreview() {
  const featuredCertificates = certificates.slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-400">
            Certificates Preview
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Learning achievements that support my growth
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Certifications and learning milestones that reflect continuous
            development across technical and professional areas.
          </p>
        </div>

        <div>
          <Link
            href="/certificates"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400/20"
          >
            View All Certificates
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {featuredCertificates.map((item) => (
          <div
            key={item.id}
            className="rounded-[24px] border border-border bg-background/70 p-5 backdrop-blur-xl"
          >
            <div className="mb-5 flex h-[180px] items-center justify-center rounded-[20px] border border-border bg-background/60">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  <Award className="h-6 w-6" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Certificate preview
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.issuer}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-400">
                {item.year}
              </span>

              {item.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}