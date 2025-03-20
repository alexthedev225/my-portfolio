"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contact" className="relative min-h-screen py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent" />
      
      {/* Design Elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : ["0% 0%", "0% 0%"],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{
          backgroundImage: "radial-gradient(circle at 3% 3%, #ffffff 0%, transparent 0.5%), radial-gradient(circle at 97% 97%, #ffffff 0%, transparent 0.5%)",
        }}
      />

      <div className="container relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let's Connect
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Have a project in mind? Let's create something extraordinary together.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#4A148C]/20 to-transparent rounded-2xl -m-1 blur-xl transition-opacity duration-500"
            style={{ opacity: isHovered ? 1 : 0 }} />
          
          <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Input
                  placeholder="Name"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30
                    focus:border-white/20 focus:ring-0 rounded-lg p-6"
                />
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30
                    focus:border-white/20 focus:ring-0 rounded-lg p-6"
                />
              </motion.div>

              <motion.div
                className="md:col-span-2"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Textarea
                  placeholder="Your message"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30
                    focus:border-white/20 focus:ring-0 rounded-lg min-h-[200px] p-6"
                />
              </motion.div>

              <motion.div
                className="md:col-span-2 flex justify-end"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg
                    rounded-lg flex items-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 transition-transform duration-300 
                    group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
