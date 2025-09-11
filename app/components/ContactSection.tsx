"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useState } from "react";

type ContactSectionProps = {
  id: string;
};

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {


  return (
    <section
      id={id}
      className="relative py-32 px-6 md:px-12 overflow-hidden
                 bg-gradient-to-b from-black/10 via-black/5 to-transparent 
                 backdrop-blur-2xl border border-white/3 rounded-3xl shadow-xl"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Have an idea or a project? Let's build something extraordinary
          together.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
     
        className="relative bg-black/30 backdrop-blur-md border border-white/10 
                   rounded-3xl p-10 md:p-14 transition-all duration-500 shadow-2xl"
      >
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <Input
            placeholder="Your Name"
            className="bg-black/10 border border-white/10 text-white placeholder:text-white/60 
                       focus:border-violet-400/40 focus:ring-0 rounded-xl p-6"
          />
          <Input
            type="email"
            placeholder="Your Email"
            className="bg-black/10 border border-white/10 text-white placeholder:text-white/60 
                       focus:border-violet-400/40 focus:ring-0 rounded-xl p-6"
          />
          <Textarea
            placeholder="Your Message"
            className="md:col-span-2 bg-black/10 border border-white/10 text-white placeholder:text-white/60 
                       focus:border-violet-400/40 focus:ring-0 rounded-xl min-h-[220px] p-6"
          />
          <div className="md:col-span-2 flex justify-end">
            <Button
              className="relative overflow-hidden px-10 py-6 text-lg font-semibold
             rounded-xl text-white backdrop-blur-md bg-white/10 border border-white/20
             transition-all duration-300 shadow-lg
             hover:bg-white/20 
             hover:scale-105 flex items-center gap-2"
            >
              Send Message
              <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
