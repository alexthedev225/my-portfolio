"use client";
import { motion } from "framer-motion";

type SkillsProps = {
  id: string;
};

const Skills: React.FC<SkillsProps> = ({ id }) => {
  const skills = [
    {
      title: "Frontend Development",
      description:
        "Crafts dynamic and responsive web interfaces with React, Next.js, and TailwindCSS. Focused on smooth user experiences and elegant code structure.",
      technologies: ["React", "Next.js", "TailwindCSS", "Responsive", "A11y"],
    },
    {
      title: "UI & Optimization",
      description:
        "Designs intuitive interfaces with attention to detail, implements SEO fundamentals, and optimizes performance while maintaining clarity and accessibility.",
      technologies: ["UI", "SEO", "Performance", "Debugging"],
    },
    {
      title: "API & REST Integration",
      description:
        "Integrates REST APIs and external services for seamless frontend-backend communication, ensuring reliable data handling and smooth application workflows.",
      technologies: ["REST APIs", "API Routes", "Integration", "Data"],
    },
    {
      title: "Backend Development",
      description:
        "Builds scalable backends with Node.js, Express, and optionally PHP/Laravel, focusing on maintainable, efficient, and modern fullstack solutions.",
      technologies: ["Node.js", "Express",  "PHP", "Laravel"],
    },
    {
      title: "Fullstack Development",
      description:
        "Combines frontend, backend, and API layers with Next.js to deliver unified, performant, and well-structured fullstack applications.",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
    
      ],
    },
    {
      title: "Project Deployment",
      description:
        "Manages version control with Git and GitHub, sets up deployments on Vercel and other platforms, and ensures projects are deployed reliably and efficiently.",
      technologies: [
        "Git",
        "GitHub",
        "CI/CD",
        "Vercel",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id={id}
      className="relative py-16 lg:py-32 px-6 md:px-12 overflow-visible max-w-xl mx-auto lg:max-w-5xl"
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
          Value I Bring
        </h2>
        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          I create clean, functional web experiences that help clients succeed.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center gap-8 max-w-3xl mx-auto"
      >
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            <motion.div
              variants={itemVariants}
              className="group flex flex-col gap-3 p-6 rounded-2xl bg-white/3 backdrop-blur-md border border-white/10 hover:scale-[1.01] transition-all w-full"
            >
              <h3 className="text-2xl font-bold text-white">{skill.title}</h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed mt-2">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {skill.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-white bg-black/10 px-3 py-1.5 rounded-full border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Flèche verticale entre les skills sauf après le dernier */}
            {index < skills.length - 1 && (
              <div className="flex items-center mt-8">
                <div className="w-px h-10 bg-white/70" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="-mt-1 h-8 w-6 text-white/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14m0 0l-4-4m4 4l4-4"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
