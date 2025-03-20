import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs,
  SiTailwindcss, 
  SiMongodb, 
  SiVercel,
  SiPrisma,
  SiPostgresql
} from "react-icons/si";

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
  "Prisma": SiPrisma,
  "PostgreSQL": SiPostgresql,
};

const ProjectSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section 
      ref={containerRef}
      id="projects" 
      className="relative min-h-screen py-24"
    >
      <motion.div 
        style={{ opacity }}
        className="sticky top-0 py-16 px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-white/60 text-center max-w-xl mx-auto">
          A selection of my recent work
        </p>
      </motion.div>

      <div className="relative">
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar">
          <div className="flex space-x-6 md:space-x-12 px-8 md:px-16">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="relative flex-none w-[80vw] md:w-[45vw] snap-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <div className="group relative aspect-[16/10] overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 
                    transition-colors duration-500 z-10" />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    style={{ y }}
                  />
                  <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => {
                        const Icon = techIcons[tech];
                        return (
                          <span 
                            key={tech} 
                            className="px-3 py-2 text-sm bg-white/90 hover:bg-white 
                              text-black font-medium rounded-full
                              transition-colors duration-200 flex items-center gap-2
                              shadow-lg backdrop-blur-sm"
                          >
                            {Icon && <Icon className="w-4 h-4" />}
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/70 max-w-md">
                        {project.description}
                      </p>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white mt-4 
                        group-hover:translate-x-2 transition-transform duration-300"
                      >
                        View Project
                        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                          <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" 
                            strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
