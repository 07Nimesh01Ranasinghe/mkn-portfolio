export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  role: string;
  impact: string[];
  image?: string; // TODO: add later
};

export const universityProjects: ProjectItem[] = [
  {
    id: "uni-1",
    title: "Sample University Project",
    description:
      "A system developed during my academic period focusing on solving a real-world problem using engineering principles.",
    tech: ["React", "Node.js", "SQL"],
    role: "Designed and implemented the full solution including frontend and backend.",
    impact: [
      "Improved understanding of full-stack architecture",
      "Applied real-world problem solving",
    ],
  },
];

export const dockyardProjects: ProjectItem[] = [
  {
    id: "dock-1",
    title: "Dockyard System Work",
    description:
      "Contributed to real-world software development during my trainee period, focusing on practical business needs.",
    tech: [".NET", "SQL Server"],
    role: "Worked on implementation and support of internal systems.",
    impact: [
      "Gained industry experience",
      "Worked with real customer requirements",
    ],
  },
];

export const hayleysProjects: ProjectItem[] = [
  {
    id: "hay-1",
    title: "Weighing System Solution",
    description:
      "Developed and supported systems related to weighing and industrial operations.",
    tech: [".NET", "WPF", "SQL", "TCP/IP"],
    role:
      "Designed and implemented solutions while supporting operations and customers.",
    impact: [
      "Delivered production-level systems",
      "Improved operational efficiency",
    ],
  },
];