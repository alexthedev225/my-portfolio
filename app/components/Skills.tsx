"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type SkillsProps = {
  id: string;
};

const Skills: React.FC<SkillsProps> = ({ id }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skills = [
    {
      title: "Frontend Development",
      description:
        "Crafts dynamic and responsive web interfaces with React, Next.js, and TailwindCSS. Focused on smooth user experiences and elegant code structure.",
      technologies: ["React", "Next.js", "TailwindCSS", "Responsive", "A11y"],
    },
    {
      title: "UI, Optimization & Best Practices",
      description:
        "Designs intuitive interfaces, implements SEO basics, and optimizes performance while maintaining clarity and accessibility.",
      technologies: ["UI", "SEO", "Performance", "Debugging"],
    },
    {
      title: "API & REST Integration",
      description:
        "Integrates REST APIs and external services for seamless frontend-backend communication and data handling.",
      technologies: ["REST APIs", "API Routes", "Integration", "Data"],
    },
    {
      title: "Backend Development",
      description:
        "Builds scalable backends with Node.js, Express, and optional PHP/Laravel support, focusing on modern fullstack solutions.",
      technologies: ["Node.js", "Express", "Database", "PHP", "Laravel"],
    },
    {
      title: "Fullstack Development",
      description:
        "Combines frontend, backend, and API layers with Next.js for unified, high-performance applications.",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "Server/Client Components",
      ],
    },
    {
      title: "Version Control & Deployment",
      description:
        "Proficient with Git, GitHub, and deploying apps on Vercel; open to alternative platforms while maintaining modern workflows.",
      technologies: ["Git", "GitHub", "Branching", "Pull Requests", "Vercel"],
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
    hidden: { opacity: 0, y: 50, scale: 0.9, rotate: -3 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  return (
    <section id={id} className="relative py-32 px-6 md:px-12 overflow-visible">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-white/90 tracking-tight mb-4">
          Value I Bring
        </h2>
        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          I create clean, functional web experiences that help clients succeed.
        </p>
      </motion.div>

      {/* Skills flow */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 flex flex-wrap justify-center items-start gap-12 md:gap-16"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="group relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 "
          >
            {/* Glass module */}
            <div
              className={`relative p-8 rounded-3xl border border-white/10
                          bg-white/5 backdrop-blur-3xl
                          hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-white/8
                          transition-all duration-700 ease-out overflow-hidden`}
            >
              {/* Subtle overlay */}
              <div
                className={`absolute inset-0 rounded-3xl bg-white/8 backdrop-blur-lg
                            opacity-25 group-hover:opacity-50 transition-opacity duration-500`}
              />

              {/* Title */}
              <h3 className="relative z-10 text-3xl font-bold text-white mb-3">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-white/90 mb-4 text-sm md:text-base leading-relaxed">
                {skill.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {skill.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-white/90 bg-black/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20
                               "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Minimal floating particles */}
              <motion.div
                className="absolute -top-2 -right-2 w-2 h-2 bg-white/20 rounded-full"
                animate={{ y: [0, -4, 0], x: [0, 3, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-2 h-2 bg-white/20 rounded-full"
                animate={{ y: [0, 3, 0], x: [0, -3, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
