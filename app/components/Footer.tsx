"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black pointer-events-none" />

      {/* Content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative container mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="space-y-4">
            <motion.h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              AlexCode
            </motion.h3>
            <p className="text-white/90 max-w-xs">
              Building digital experiences that make a difference
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-xl">Contact</h4>
            <div className="space-y-2 text-white/90">
              <p>alexcode225@gmail.com</p>
              <p>Abidjan, Cote d'Ivoire</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/90 text-sm">
          <p>© {currentYear} AlexCode. All rights reserved.</p>
          <div className="flex gap-4">
            <Button
              variant="link"
              className="text-white/90 hover:text-white p-0 h-auto text-sm"
            >
              Privacy Policy
            </Button>
            <Button
              variant="link"
              className="text-white/90 hover:text-white p-0 h-auto text-sm"
            >
              Terms of Service
            </Button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
