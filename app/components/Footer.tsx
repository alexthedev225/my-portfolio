"use client";
import { motion } from "framer-motion";

import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

      {/* Content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative container mx-auto px-4 py-8"
      >
       

        <Separator className="my-8 bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white/80 text-sm">
          <p>© {currentYear} AlexCode. All rights reserved.</p>
          
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
