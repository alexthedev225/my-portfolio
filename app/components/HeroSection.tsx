"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs,
  SiTailwindcss, 

} from "react-icons/si";

type HeroSectionProps = {
  scrollToSection: (sectionId: string) => void;
  id: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection, id }) => {
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
    { icon: SiTailwindcss },
  ];

  return (
    <section
      id={id}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden rounded-3xl"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent" />

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
          className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50"
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
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="berkshire-swash-regular text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-white"
          >
            Alex Konan
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/99 text-xl mb-4"
          >
            Fullstack Developer
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="z-30 text-6xl mb-10 md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80"
            style={{ wordBreak: "break-word", lineHeight: "1.2" }} // Ajouter un "line-height" et ajuster les coupures de mots
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
             bg-white/10 backdrop-blur-lg border border-white/20 
             text-white transition-all duration-300 ease-in-out 
             hover:bg-white/20 hover:border-white/30 
             hover:shadow-[0_0_12px_rgba(255,255,255,0.3),0_0_24px_rgba(255,255,255,0.4)] 
             hover:scale-105 cursor-pointer"
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
