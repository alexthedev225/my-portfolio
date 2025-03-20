"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiTwitterLine,
  RiInstagramLine,
} from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: RiGithubLine, href: "#", label: "GitHub" },
    { icon: RiLinkedinLine, href: "#", label: "LinkedIn" },
    { icon: RiTwitterLine, href: "#", label: "Twitter" },
    { icon: RiInstagramLine, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative mt-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

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
            <motion.h3 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
              whileHover={{ scale: 1.05 }}
            >
              AlexCode
            </motion.h3>
            <p className="text-white/60 max-w-xs">
              Building digital experiences that make a difference
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-medium">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Projects", "Contact"].map((item) => (
                <Button 
                  key={item}
                  variant="link" 
                  className="text-white/60 hover:text-white p-0 h-auto"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-medium">Contact</h4>
            <div className="space-y-2 text-white/60">
              <p>alexcode@example.com</p>
              <p>Paris, France</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-white font-medium">Social</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-white/5 hover:bg-white/10 p-2 rounded-lg 
                    transition-colors duration-200"
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <p>© {currentYear} AlexCode. All rights reserved.</p>
          <div className="flex gap-4">
            <Button variant="link" className="text-white/40 hover:text-white p-0 h-auto text-sm">
              Privacy Policy
            </Button>
            <Button variant="link" className="text-white/40 hover:text-white p-0 h-auto text-sm">
              Terms of Service
            </Button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
