"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

type ContactSectionProps = {
  id: string;
};

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const [hovered, setHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 20 },
    },
  };

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
        <h2 className="text-5xl md:text-6xl font-extrabold text-white/90 tracking-tight mb-4">
          Let's Connect
        </h2>
        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Have an idea or a project? Let's build something extraordinary
          together.
        </p>
      </motion.div>

      {/* Glassmorphin Form */}
      <motion.form
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {["Your Name", "Your Email"].map((placeholder, i) => (
          <motion.input
            key={i}
            type={placeholder === "Your Email" ? "email" : "text"}
            placeholder={placeholder}
            variants={itemVariants}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className={`bg-white/10 backdrop-blur-3xl border border-white/10 rounded-3xl p-6
                        text-white placeholder:text-white/80
                        focus:outline-none focus:border-white/20 transition-all duration-500
                        `}
          />
        ))}
        <motion.textarea
          placeholder="Your Message"
          variants={itemVariants}
          className={`md:col-span-2 bg-white/10 backdrop-blur-3xl border border-white/10 rounded-3xl p-6
                      text-white placeholder:text-white/80 min-h-[220px]
                      focus:outline-none focus:border-white/20 transition-all duration-500 resize-none
                      `}
        />

        <div className="md:col-span-2 flex justify-center">
          <Button
            type="submit"
            className="relative px-12 py-6 text-lg font-medium tracking-wide
                backdrop-blur-xl bg-white/5
                border-2 border-white/20 text-white rounded-2xl
                transition-all duration-500 ease-out
                hover:bg-white/8
                hover:border-white/40 
                hover:shadow-red-500/20 group-hover:text-white cursor-pointer"
          >
            <span className="relative flex items-center gap-2">
              Send Message
              <motion.div
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Send className="w-5 h-5" />
              </motion.div>
            </span>

            {/* Reflet interne subtil */}
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/10 to-transparent 
                 opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          </Button>
        </div>
      </motion.form>
    </section>
  );
};

export default ContactSection;
