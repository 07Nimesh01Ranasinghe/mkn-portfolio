"use client";

import { AboutSection } from "@/components/home/about-section";
import { TimelinePreview } from "@/components/home/timeline-preview";
import { CertificatesPreview } from "@/components/home/certificates-preview";
import { ContactSection } from "@/components/home/contact-section";
import { FloatingGlows } from "@/components/common/floating-glows";
import { HomeScrollStage } from "@/components/home/home-scroll-stage";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingGlows />

      <HomeScrollStage />

      <div className="relative z-40">
        <AboutSection />
        <TimelinePreview />
        <CertificatesPreview />
        <ContactSection />
      </div>
    </main>
  );
}