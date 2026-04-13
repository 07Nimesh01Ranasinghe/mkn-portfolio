import { PageHero } from "@/components/common/page-hero";
import { SectionReveal } from "@/components/common/section-reveal";

export default function BlogsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <PageHero
        eyebrow="Knowledge & Writing"
        title="Research, learning, and practical technical thinking."
        description="A dedicated space for technical writing, experiments, insights, and learnings that grow from real engineering work."
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <SectionReveal>
          <div className="rounded-[28px] border border-border bg-background/60 p-8 backdrop-blur-xl">
            <p className="text-lg leading-8 text-muted-foreground">
              Blog content structure is ready. You can add MDX or content-based
              blog cards next.
            </p>
          </div>
        </SectionReveal>
      </div>
    </main>
  );
}