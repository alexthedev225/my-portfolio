"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Image from "next/image";

type ProjectSectionProps = {
  id: string;
};

const ProjectSection: React.FC<ProjectSectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="relative py-16 lg:py-32 px-6 md:px-12 max-w-xl mx-auto lg:max-w-5xl"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
          Work in Action
        </h2>
        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Real projects that turn clean design, performance, and usability into
          results.
        </p>
      </motion.div>

      <div className="flex flex-col gap-24 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`relative flex flex-col lg:flex-row items-center gap-8 p-8 rounded-3xl bg-white/3 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(255,255,255,0.05)]
            transition-transform duration-500 hover:-translate-y-3 hover:shadow-[0_12px_40px_rgba(255,255,255,0.1)]
            ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, type: "spring", stiffness: 80 }}
          >
            {/* Image plus grande */}
            <div className="w-full lg:w-2/5 h-64 lg:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-inner relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-4">
              <h3 className="text-3xl font-bold text-white">{project.title}</h3>
              <p className="text-white/90 text-sm md:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-white bg-black/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-white font-medium hover:text-white/90 transition-colors"
              >
                View Project
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M1 8h14M8 1l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
