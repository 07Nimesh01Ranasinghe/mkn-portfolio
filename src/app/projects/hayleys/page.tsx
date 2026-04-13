import { PageShell } from "@/components/layout/page-shell";
import { ProjectGrid } from "@/components/projects/project-grid";
import { hayleysProjects } from "@/data/projects";

export default function HayleysProjectsPage() {
  return (
    <PageShell
      eyebrow="Hayleys Aventura"
      title="Professional Projects"
      description="Production-level systems, engineering work, and solution delivery."
    >
      <ProjectGrid projects={hayleysProjects} />
    </PageShell>
  );
}