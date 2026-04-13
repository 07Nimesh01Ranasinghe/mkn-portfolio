export type CareerItem = {
  id: string;
  title: string;
  organization: string;
  period: string;
  summary: string;
  technologies: string[];
  achievements: string[];
  notableProjectsLabel?: string;
  notableProjectsHref?: string;
};

export const careerTimeline: CareerItem[] = [
  {
    id: "al-2019",
    title: "Advanced Level - Physical Science",
    organization: "Horana Taxila Central College",
    period: "2019",
    summary:
      "Completed Advanced Level studies in the Physical Science stream, building a strong academic base in mathematics and science.",
    technologies: ["Combined Maths", "Chemistry", "Physics"],
    achievements: [
      "Combined Maths - B",
      "Chemistry - B",
      "Physics - C",
    ],
  },
  {
    id: "kdu-2021-2025",
    title: "BSc (Hons) in Computer Engineering",
    organization: "General Sir John Kotelawala Defence University",
    period: "2021 - 2025",
    summary:
      "Built a strong engineering foundation through university studies, practical systems thinking, and project-based development.",
    technologies: [
      "Software Engineering",
      "Programming",
      "System Design",
      "Databases",
      "Networking",
    ],
    achievements: [
      "Completed degree journey in Computer Engineering",
      "Worked on academic and technical projects",
      "Built hands-on engineering knowledge",
    ],
    notableProjectsLabel: "View University Projects",
    notableProjectsHref: "/projects/university",
  },
  {
    id: "dockyard-2024-2025",
    title: "Software Engineer Trainee",
    organization: "Dockyard Total Solutions",
    period: "2024 - 2025",
    summary:
      "Worked in a trainee software engineering role, gaining real-world experience in practical development, business needs, and delivery.",
    technologies: [
      "Software Development",
      "Problem Solving",
      "Client-Focused Thinking",
    ],
    achievements: [
      "Contributed to real-world software work",
      "Strengthened implementation skills",
      "Expanded practical industry exposure",
    ],
    notableProjectsLabel: "View Dockyard Projects",
    notableProjectsHref: "/projects/dockyard",
  },
  {
    id: "hayleys-2025-present",
    title: "Software Engineer",
    organization: "Hayleys Aventura (Pvt) Ltd",
    period: "From 2025/04/21",
    summary:
      "Working as a Software Engineer delivering practical, robust solutions while supporting business operations, customer engagement, and technical problem solving.",
    technologies: [
      "Software Engineering",
      "Customer Engagement",
      "IT Support",
      "Solution Design",
      "Technical Communication",
    ],
    achievements: [
      "Delivering solution-oriented engineering work",
      "Supporting business and customer-facing needs",
      "Building reliable technical outcomes",
    ],
    notableProjectsLabel: "View Hayleys Projects",
    notableProjectsHref: "/projects/hayleys",
  },
];