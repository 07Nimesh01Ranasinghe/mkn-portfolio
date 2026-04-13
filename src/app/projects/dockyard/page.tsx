import { PageShell } from "@/components/layout/page-shell";
import { ProjectGrid } from "@/components/projects/project-grid";
import { dockyardProjects } from "@/data/projects";

export default function DockyardProjectsPage() {
  return (
    <PageShell
      eyebrow="Dockyard Total Solutions"
      title="Dockyard Projects"
      description="Work and contributions during my Software Engineer Trainee period."
    >
      <ProjectGrid projects={dockyardProjects} />
    </PageShell>
  );
}