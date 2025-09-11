"use client";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

type NavbarProps = {
  scrollToSection: (id: string) => void;
};

const Navbar = ({ scrollToSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY } = useScroll();

  // Détecte le scroll et la section active
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);

      let current = "hero";
      for (const item of ["hero", "skills", "projects", "contact"]) {
        const el = document.getElementById(item);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = item;
            break;
          }
        }
      }
      setActiveSection(current);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-0 right-0 z-50 px-4"
    >
      <motion.div
        className={`bg-black/90 backdrop-blur-xl border border-white/10 mx-auto max-w-3xl transition-all duration-300 rounded-2xl
          ${
            isScrolled
              ? " backdrop-blur-xl border border-white/10"
              : "bg-transparent"
          }`}
      >
        <nav className="px-8">
          <div className="h-16 flex items-center justify-between relative">
            {/* Logo */}
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white font-semibold text-xl pl-4"
            >
              <span className="relative z-10">AlexCode</span>
            </motion.a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6 pr-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Button
                    variant="ghost"
                    className={`relative text-sm transition-colors overflow-hidden group cursor-pointer 
                     ${
                       activeSection === item.href
                         ? "text-red-400"
                         : "text-white/70"
                     } hover:text-red-400 hover:bg-transparent
"
                      }`}
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[1px] bg-red-400 transform 
                        transition-transform duration-300 origin-center
                        ${
                          activeSection === item.href
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                    />
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Mobile menu */}
            <div className="md:hidden absolute right-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/80 hover:text-white hover:bg-white/10 
                      w-8 h-8 rounded-lg"
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] bg-black/95 border-white/10 backdrop-blur-xl"
                >
                  <nav className="flex flex-col gap-4 mt-8">
                    {navItems.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        className={`text-left px-4 py-2 rounded-lg transition-colors
  ${
    activeSection === item.href
      ? "text-red-400 bg-white/10"
      : "text-white/70"
  }
  hover:text-white hover:bg-white/10`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
