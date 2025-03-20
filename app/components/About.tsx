import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Brain, Rocket } from "lucide-react";

interface AboutProps {
  scrollToSection: (section: string) => void;
  fadeInUp: any;
  staggerContainer: any;
}

const About: React.FC<AboutProps> = ({ scrollToSection, fadeInUp, staggerContainer }) => {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6 mb-2" />,
      title: "Frontend Development",
      description: "Specialized in building modern web applications using React and Next.js",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"]
    },
    {
      icon: <Palette className="w-6 h-6 mb-2" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with attention to detail",
      technologies: ["Figma", "Framer Motion", "CSS3", "Responsive Design"]
    },
    {
      icon: <Brain className="w-6 h-6 mb-2" />,
      title: "Backend Integration",
      description: "Experience with full-stack development and API integration",
      technologies: ["Node.js", "REST APIs", "GraphQL", "Database Design"]
    }
  ];

  return (
    <section id="about" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto px-4"
      >
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Passionate developer crafting digital experiences with modern web technologies
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col"
            >
              <Card className="h-full backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border-gray-200 dark:border-gray-700">
                <CardContent className="pt-6">
                  <div className="text-pink-600 dark:text-pink-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-gray-200 dark:bg-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        
      </motion.div>
    </section>
  );
};

export default About;
