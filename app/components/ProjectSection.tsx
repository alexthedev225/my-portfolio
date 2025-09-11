"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

type ProjectSectionProps = {
  id: string;
};

const ProjectSection: React.FC<ProjectSectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="relative py-32 px-10 md:px-12 
           bg-gradient-to-b from-black/10 via-black/5 to-transparent 
           backdrop-blur-2xl border border-white/3 
           rounded-3xl shadow-xl"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          A selection of recent work focusing on clarity, functionality, and
          modern design.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="group rounded-2xl border border-white/10 
                       bg-black/10 backdrop-blur-md p-8 
                       transition-transform duration-300 
                       hover:-translate-y-2 hover:shadow-[0_4px_25px_rgba(0,0,0,0.35)]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold text-white mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-200 mb-4">{project.description}</p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm text-gray-300 bg-black/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-medium hover:text-red-300 transition-colors"
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
