export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Culiko",
    description: "Un blog fullstack permettant d'ajouter, modifier et supprimer des recettes.",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "JWT"],
    image: "/images/blog-cuisine.png",
    url: "https://culiko.vercel.app"
  },
  {
    title: "Stereo Demo",
    description: "Une page marketing moderne avec animations et design soigné.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/landing-casque.png",
    url: "https://stereo-demo.vercel.app"
  }
];
