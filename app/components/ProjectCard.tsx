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
      className="block w-full max-w-2xl rounded-lg overflow-hidden shadow-lg hover:shadow-xl bg-gray-900"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Image du projet */}
        <div className="relative h-60 sm:h-auto">
          <Image
            src={project.image}
            alt={`Preview of ${project.title}`}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Contenu du projet */}
        <div className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-gray-300 mt-2 text-sm">{project.description}</p>
          </div>

          {/* Technologies utilisées */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech, index) => {
              const Icon = techIcons[tech] || null;
              return (
                <motion.span
                  key={index}
                  className="flex items-center gap-2 px-3 py-1 text-xs bg-purple-700 text-white rounded-full"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {tech}
                </motion.span>
              );
            })}
          </div>

          {/* Lien vers le projet */}
          <motion.div
            whileHover={{ x: 6 }}
            className="text-purple-400 mt-4 font-medium flex items-center gap-2 cursor-pointer"
          >
            Voir le projet →
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
