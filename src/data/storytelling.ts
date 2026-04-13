export type StoryStep = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
};

export const storySteps: StoryStep[] = [
  {
    id: "foundation",
    eyebrow: "Foundation",
    title: "Built on discipline, logic, and persistence.",
    description:
      "My journey started with a strong academic base in physical science, where mathematics, analytical thinking, and structured problem solving shaped the way I approach challenges.",
    highlights: [
      "A/L Physical Science",
      "Analytical thinking",
      "Strong problem-solving base",
    ],
  },
  {
    id: "engineering",
    eyebrow: "Engineering Growth",
    title: "Turned curiosity into engineering capability.",
    description:
      "During my Computer Engineering degree, I developed technical depth through software, systems, and project work. This stage built my confidence in designing and implementing real solutions.",
    highlights: [
      "BSc (Hons) in Computer Engineering",
      "Systems thinking",
      "Project-based learning",
    ],
  },
  {
    id: "industry",
    eyebrow: "Industry Exposure",
    title: "Learned how software meets business reality.",
    description:
      "As a Software Engineer Trainee, I gained exposure to practical business environments, real requirements, and professional execution. It strengthened my delivery mindset.",
    highlights: [
      "Real-world delivery",
      "Business context",
      "Hands-on software work",
    ],
  },
  {
    id: "professional",
    eyebrow: "Professional Impact",
    title: "Now focused on delivering robust, useful outcomes.",
    description:
      "As a Software Engineer, I work across solution building, customer engagement, IT support, and practical problem solving. I aim to create technical outcomes that make a real difference.",
    highlights: [
      "Solution-oriented engineering",
      "Customer engagement",
      "Reliable technical outcomes",
    ],
  },
];