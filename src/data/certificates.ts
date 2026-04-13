export type CertificateItem = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  tags: string[];
  image?: string;
};

export const certificateTags = [
  "All",
  "Programming",
  "Cloud",
  "Networking",
  "University",
  "Professional",
  "AI",
  "Web",
];

export const certificates: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Sample Programming Certificate",
    issuer: "Certificate Provider",
    year: "2025",
    tags: ["Programming", "Professional"],
    image: "/certificates/certificate-1.jpg",
  },
  {
    id: "cert-2",
    title: "Sample Cloud Certificate",
    issuer: "Cloud Academy",
    year: "2024",
    tags: ["Cloud", "Professional"],
    image: "/certificates/certificate-2.jpg",
  },
  {
    id: "cert-3",
    title: "Sample University Achievement",
    issuer: "University",
    year: "2023",
    tags: ["University"],
    image: "/certificates/certificate-3.jpg",
  },
  {
    id: "cert-4",
    title: "Sample Web Certificate",
    issuer: "Online Platform",
    year: "2022",
    tags: ["Web", "Programming"],
    image: "/certificates/certificate-4.jpg",
  },
];