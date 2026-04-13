import { PageHero } from "@/components/common/page-hero";
import { SectionReveal } from "@/components/common/section-reveal";
import { ContactContent } from "@/components/contact/contact-content";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <PageHero
        eyebrow="Get In Touch"
        title="Let’s connect and build something meaningful."
        description="Reach out for engineering opportunities, project discussions, collaboration, or professional networking."
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <SectionReveal>
          <ContactContent />
        </SectionReveal>
      </div>
    </main>
  );
}