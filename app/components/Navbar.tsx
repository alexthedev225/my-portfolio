"use client";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
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
        className={`mx-auto max-w-3xl transition-all duration-300 rounded-2xl
          ${isScrolled ? "bg-black/50 backdrop-blur-xl border border-white/10" : "bg-transparent"}`}
      >
        <nav className="px-8">
          <div className="h-16 flex items-center justify-between relative">
            {/* Logo - Plus grand et avec plus d'espace */}
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white font-semibold text-xl pl-4"
            >
              <span className="relative z-10">AlexCode</span>
            </motion.a>

            {/* Navigation centrée avec padding équilibré */}
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
                    className="text-white/70 hover:text-white hover:bg-transparent
                      transition-colors relative overflow-hidden group text-sm"
                    asChild
                  >
                    <a href={item.href}>
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] 
                        bg-white transform scale-x-0 group-hover:scale-x-100 
                        transition-transform origin-center duration-300" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Menu mobile plus compact */}
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
                      <a
                        key={item.href}
                        href={item.href}
                        className="text-white/70 hover:text-white px-4 py-2 
                          hover:bg-white/10 rounded-lg transition-colors"
                      >
                        {item.label}
                      </a>
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
