import { PageHero } from "@/components/common/page-hero";
import { SectionReveal } from "@/components/common/section-reveal";
import { CertificatesGallery } from "@/components/certificates/certificates-gallery";

export default function CertificatesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <PageHero
        eyebrow="Credentials"
        title="Learning milestones, certifications, and technical growth."
        description="A curated collection of certificates and achievements that reflect continuous development across engineering and professional areas."
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <SectionReveal>
          <CertificatesGallery />
        </SectionReveal>
      </div>
    </main>
  );
}