"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Code2, } from "lucide-react";

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


  return (
    <section
      id={id}
      className="relative  w-full flex items-center justify-center overflow-hidden rounded-3xl py-16 lg:py-32 "
    >
      {/* Overlay original */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-transparent z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container px-4  relative z-10 max-w-xl mx-auto lg:max-w-5xl"
      >
        {/* Social Links avec glassmorphisme */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-666"
        >
          {socialLinks.map(({ icon: Icon, href }, index) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 backdrop-blur-xl bg-white/5 border border-white/10 
                         rounded-xl hover:bg-white/10 hover:border-white/20 
                         transition-all duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <Icon
                size={20}
                className="text-white/90 group-hover:text-white transition-colors"
              />
              {/* Effet de lueur */}
              <div
                className="absolute inset-0 rounded-xl bg-white/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Nom avec effet glassmorphisme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <h1
              className="relative berkshire-swash-regular text-5xl md:text-6xl font-bold 
                          text-white"
            >
              Alex Konan
            </h1>
          </motion.div>

          {/* Titre avec glassmorphisme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative inline-block"
          >
            <h2 className="relative text-white/90 text-2xl font-medium tracking-wide">
              Fullstack Developer
            </h2>
          </motion.div>

          {/* Message principal avec effet artistique */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="relative"
          >
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent 
                             bg-white leading-tight max-w-4xl mx-auto"
            >
              Let&apos;s create your next project together
            </h1>
          </motion.div>
          {/* Après le titre "Fullstack Developer" */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center "
          >
            <Code2 className="text-white/80 w-12 h-12" />
          </motion.div>

          {/* Button avec glassmorphisme avancé */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center "
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              {/* Effet de lueur animée */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-violet-300 via-violet-300 to-violet-300 
                           rounded-2xl opacity-20 blur-lg"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="relative px-12 py-6 text-lg font-medium tracking-wide
                          backdrop-blur-xl bg-white/5
                          border-2 border-white/20 text-white rounded-2xl
                          transition-all duration-500 ease-out
                          hover:bg-white/8
                          hover:border-white/40 
                          hover:shadow-violet-500/20 group-hover:text-white cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact me
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>

                {/* Reflet interne */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/10 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
