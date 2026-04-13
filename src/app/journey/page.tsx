import { PageHero } from "@/components/common/page-hero";
import { SectionReveal } from "@/components/common/section-reveal";
import { CareerTimeline } from "@/components/timeline/career-timeline";

export default function JourneyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <PageHero
        eyebrow="Career Timeline"
        title="From academic foundations to professional engineering."
        description="A focused view of my growth through education, industry exposure, and practical engineering work."
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <SectionReveal>
          <CareerTimeline />
        </SectionReveal>
      </div>
    </main>
  );
}