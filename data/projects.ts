export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
}

export const projects: Project[] = [
  {
    "title": "Culiko",
    "description": "Culiko is more than just a cooking blog: it is a platform dedicated to food enthusiasts. Discover carefully selected and tested recipes, created with love and attention to detail. Join an active community of cooks and share unforgettable culinary moments. Our mission is to offer a unique experience by highlighting simple, delicious, and accessible recipes for everyone.",
    "technologies": ["Next.js", "Prisma", "MongoDB", "Tailwind CSS", "NextAuth", "JWT", "React Hook Form"],
    "image": "/images/blog-cuisine.png",
    "url": "https://culiko.vercel.app"
  },
  {
    "title": "Stereo Demo",
    "description": "Stereo Demo is a modern web application dedicated to showcasing high-fidelity audio products. Dive into an immersive experience with a smooth and dynamic interface, enhanced by elegant animations. This marketing page highlights revolutionary headphones that redefine music listening by capturing every sound detail with exceptional clarity.",
    "technologies": ["Next.js", "Tailwind CSS", "React", "Framer Motion", "Radix UI", "FontAwesome"],
    "image": "/images/landing-casque.png",
    "url": "https://stereodemo.vercel.app"
  }
];
