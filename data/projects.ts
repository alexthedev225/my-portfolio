export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Luxorum",
    description:
      "Luxorum is a fully-built e-commerce application designed to showcase my ability to develop a project end-to-end. It features complete product management, dynamic shopping flows, and secure payment integration with Stripe, illustrating a realistic online shopping experience from concept to deployment.",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Stripe"],
    image: "/images/luxorum.png",
    url: "https://luxorum.vercel.app",
  },
  {
    title: "Luxilearn",
    description:
      "Luxilearn is an e-learning platform developed entirely by me to demonstrate full-stack capabilities. It includes course creation, user management, authentication, and responsive design, offering a smooth and intuitive learning experience while reflecting modern development practices.",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Prisma", "Auth"],
    image: "/images/luxilearn.png",
    url: "https://luxilearn.vercel.app",
  },
];
