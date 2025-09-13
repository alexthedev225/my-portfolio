"use client";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },

  { label: "Contact", href: "contact" },
];

type NavbarProps = {
  scrollToSection: (id: string) => void;
};

const Navbar = ({ scrollToSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 px-4"
    >
      <div
        className={`
          mx-auto max-w-3xl rounded-2xl transition-all duration-500
          ${
            isScrolled
              ? "bg-black/40 backdrop-blur-2xl border border-white/10 "
              : "bg-black/20 backdrop-blur-xl"
          }
          border border-white/5
        `}
      >
        <nav className="px-6">
          <div className="h-16 flex items-center justify-between relative">
            {/* Logo */}
            <motion.a
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-white font-bold text-xl relative z-10"
            >
              AlexCode
              <motion.div
                className="absolute inset-0 rounded-lg blur-lg bg-white/10"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-10 pr-4">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className={`
                    relative text-sm  py-2 rounded-lg group cursor-pointer transition-colors
                    ${
                      activeSection === item.href
                        ? "text-white"
                        : "text-white/70"
                    }
                    hover:text-white
                  `}
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.label}
                  <span
                    className={`
                      absolute bottom-0 left-0 w-full h-[2px] bg-white transform transition-transform duration-300 origin-center
                      ${
                        activeSection === item.href
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }
                    `}
                  />
                </motion.button>
              ))}
            </div>

            {/* Mobile menu */}
            <div className="md:hidden relative">
              <button
                className="text-white/80 hover:text-white w-10 h-10 flex items-center justify-center rounded-lg"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      mobileOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>

              {mobileOpen && (
                <motion.div
                  initial={{ x: 300 }}
                  animate={{ x: 0 }}
                  exit={{ x: 300 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 right-0 h-screen w-72 bg-black/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_20px_rgb(255,0,80,0.3)] rounded-l-2xl flex flex-col pt-20 px-4"
                >
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => {
                        scrollToSection(item.href);
                        setMobileOpen(false);
                      }}
                      className={`
                        text-left px-4 py-2 rounded-lg mb-2 transition-colors
                        ${
                          activeSection === item.href
                            ? "text-red-400 bg-white/10"
                            : "text-white/70"
                        }
                        hover:text-cyan-400 hover:bg-white/10
                      `}
                    >
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
