"use client";
import { motion } from "framer-motion";
import { Code2, Palette, Rocket } from "lucide-react";

type SkillsProps = {
  id: string;
};

const Skills: React.FC<SkillsProps> = ({ id }) => {
  const skills = [
    {
      icon: <Code2 className="w-12 h-12 text-white" />,
      title: "Frontend Development",
      description:
        "Expert in building dynamic, responsive, and accessible web interfaces using React, Next.js, and TailwindCSS. Focused on clean code, maintainable architecture, and elegant user experience without claiming professional UI/UX design expertise.",
      technologies: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Responsive Design",
        "Accessibility (a11y)",
      ],
    },
    {
      icon: <Rocket className="w-12 h-12 text-white" />,
      title: "Backend Development",
      description:
        "Experience creating robust backend systems with Node.js and Express, including RESTful APIs. Basic experience in PHP & Laravel. Backend solutions designed to support scalable web applications.",
      technologies: [
        "Node.js",
        "Express",
        "REST APIs",
        "PHP",
        "Laravel",
        "Database Design",
      ],
    },
    {
      icon: <Code2 className="w-12 h-12 text-white" />,
      title: "Fullstack Development",
      description:
        "Specializes in building fullstack web applications primarily using Next.js. This approach allows seamless integration of frontend and backend in a single framework, leveraging Next.js Server & Client Components, API Routes, and optimized rendering strategies. While Node.js and Express are optional, most projects are implemented entirely with Next.js for simplicity and performance. Basic experience exists with PHP & Laravel for legacy or hybrid setups, but the focus remains on modern full Next.js architecture.",
      technologies: [
        "Next.js (frontend + backend)",
        "React",
        "TailwindCSS",

        "API Routes",
        "Server & Client Components",
      ],
    },
    {
      icon: <Palette className="w-12 h-12 text-white" />,
      title: "Version Control & Collaboration",
      description:
        "Proficient in Git and GitHub for version control, collaboration, and maintaining clean code history. Able to manage branches, pull requests, and merge conflicts effectively.",
      technologies: ["Git", "GitHub", "Branching", "Pull Requests"],
    },
    {
      icon: <Code2 className="w-12 h-12 text-white" />,
      title: "Technical Practices & Optimization",
      description:
        "Skilled in responsive design, SEO-friendly code, performance optimization, and debugging. Ensures web applications are fast, accessible, and maintainable.",
      technologies: [
        "Responsive Design",
        "SEO Basics",
        "Debugging",
        "Performance Optimization",
      ],
    },
    {
      icon: <Rocket className="w-12 h-12 text-white" />,
      title: "Learning & Adaptability",
      description:
        "Quickly learns new technologies, tools, and frameworks. Able to adapt fullstack solutions depending on project requirements, while keeping a preference for full Next.js architecture.",
      technologies: [
        "Adaptability",
        "Rapid Learning",
        "Problem Solving",
        "Modern Web Practices",
      ],
    },
  ];

  return (
    <section
      id={id}
      className="relative py-32 px-10 md:px-12 
                 bg-black/5 backdrop-blur-2xl border border-white/3 
                 rounded-3xl shadow-xl"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-bold text-white mb-4">My Skills</h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Here are some of my core skills and technologies I use to craft
          modern, efficient, and beautiful digital experiences.
        </p>
      </motion.div>

      {/* Skills */}
      <div className="flex flex-col gap-16 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Icon */}
            <div
              className="flex-shrink-0 flex items-center justify-center 
                            w-24 h-24 bg-black/20 backdrop-blur-md 
                            rounded-full border-2 border-white"
            >
              {skill.icon}
            </div>

            {/* Content */}
            <div
              className="flex-1 text-center md:text-left 
                         bg-black/10 backdrop-blur-md 
                         border border-white/10 rounded-2xl 
                         p-8 shadow-md hover:shadow-lg 
                         transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-300 mb-4">{skill.description}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {skill.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm text-gray-300 
                               bg-black/10 backdrop-blur-sm 
                               px-3 py-1 rounded-full 
                               border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
