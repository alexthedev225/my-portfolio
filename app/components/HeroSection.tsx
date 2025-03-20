"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCallback } from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs,
  SiTailwindcss, 
  SiMongodb, 
  SiVercel, 
  SiGit, 
  SiGithub 
} from "react-icons/si";

const HeroSection = ({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) => {
  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/yourusername" },
    { icon: FiLinkedin, href: "https://linkedin.com/in/yourusername" },
    { icon: FiTwitter, href: "https://twitter.com/yourusername" },
  ];

  const skills = [
    { icon: SiJavascript },
    { icon: SiReact },
    { icon: SiNextdotjs },
    { icon: SiTypescript },
    { icon: SiNodedotjs },
    { icon: SiTailwindcss }
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4A148C]/40 via-[#7B1FA2]/30 to-[#9C27B0]/20">
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-20 mix-blend-soft-light" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container px-4 mx-auto relative z-10"
      >
        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute top-0 right-4 flex flex-col gap-6"
        >
          {socialLinks.map(({ icon: Icon, href }, index) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#9C27B0] transition-colors"
            >
              <Icon size={24} />
            </a>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/80 text-xl mb-4"
          >
            Full Stack Developer
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80"
          >
            Let's create your next digital project together
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-12 mt-12"
          >
            {skills.map(({ icon: Icon }) => (
              <motion.div
                key={Icon.toString()}
                whileHover={{ scale: 1.1 }}
                className="text-white/80 hover:text-[#9C27B0] transition-all duration-150 cursor-pointer
                hover:drop-shadow-[0_0_8px_rgba(156,39,176,0.5)]"
              >
                <Icon size={48} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group relative px-16 py-6 text-lg
              bg-black border border-white/20 text-white
              transition-all duration-200 ease-out
              hover:bg-white hover:text-black
              hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10 font-medium tracking-wider">
                Contact me
              </span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
