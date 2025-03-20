import Image from "next/image";
import { motion } from "framer-motion";
import { 
  SiJavascript, SiReact, SiNextdotjs, SiTypescript, 
  SiNodedotjs, SiTailwindcss, SiMongodb, SiVercel
} from "react-icons/si";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    url: string;
  };
}

// Mapping des technologies avec leurs icônes
const techIcons: { [key: string]: any } = {
  "JavaScript": SiJavascript,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "Node.js": SiNodedotjs,
  "Tailwind CSS": SiTailwindcss,
  "MongoDB": SiMongodb,
  "Vercel": SiVercel,
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-[600px] relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
        opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10" />
      
      <Image
        src={project.image}
        alt={`Preview of ${project.title}`}
        fill
        className="object-cover object-center transition-transform duration-700 
          group-hover:scale-105 brightness-75"
      />

      <div className="absolute top-0 right-0 p-4 z-20 flex gap-2 flex-wrap max-w-[300px] justify-end">
        {project.technologies.map((tech, index) => {
          const Icon = techIcons[tech] || null;
          return (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-2 text-sm bg-[#4A148C] hover:bg-[#7B1FA2] 
                text-white font-medium rounded-full border border-[#9C27B0]
                transition-colors duration-200 flex items-center gap-2 shadow-lg"
            >
              {Icon && <Icon className="w-4 h-4" />}
              {tech}
            </motion.span>
          )}
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h3 className="text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-white/70 max-w-lg">
            {project.description}
          </p>
          <div className="pt-4">
            <motion.span
              whileHover={{ x: 10 }}
              className="text-white/90 font-medium flex items-center gap-2"
            >
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.span>
          </div>
        </motion.div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
