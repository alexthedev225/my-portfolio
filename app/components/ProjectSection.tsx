"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

type ProjectSectionProps = {
  id: string;
};

const ProjectSection: React.FC<ProjectSectionProps> = ({ id }) => {
  return (
    <section id={id} className="relative py-32 px-6 md:px-12">
      <motion.div className="text-center mb-20 relative">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white/90 tracking-tight mb-4">
          Featured Projects
        </h2>
        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          A selection of recent work focusing on clarity, functionality, and
          modern design.
        </p>
      </motion.div>

      <div className="flex flex-col gap-16 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="relative rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 p-8
                   shadow-[0_8px_32px_rgba(255,255,255,0.05)] transition-transform duration-500
                   hover:-translate-y-3 hover:shadow-[0_12px_40px_rgba(255,255,255,0.1)]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, type: "spring", stiffness: 80 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-white/90 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-white/90 bg-black/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-medium hover:text-white/90 transition-colors"
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
