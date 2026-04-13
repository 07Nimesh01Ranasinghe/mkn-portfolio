import { ProjectItem } from "@/data/projects";
import { ProjectCard } from "./project-card";

export function ProjectGrid({ projects }: { projects: ProjectItem[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}