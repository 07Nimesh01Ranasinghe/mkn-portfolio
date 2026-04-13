import { PageHero } from "@/components/common/page-hero";
import { SectionReveal } from "@/components/common/section-reveal";
import { ProjectsOverview } from "@/components/home/projects-overview";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <PageHero
        eyebrow="Portfolio Work"
        title="Projects shaped by engineering, delivery, and real business needs."
        description="From university work to professional systems, this page highlights projects that reflect technical depth and practical impact."
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <SectionReveal>
          <ProjectsOverview />
        </SectionReveal>
      </div>
    </main>
  );
}