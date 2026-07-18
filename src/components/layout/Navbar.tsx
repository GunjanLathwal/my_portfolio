"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Github } from "@/components/icons/Github";
import { Linkedin } from "@/components/icons/Linkedin";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Research", path: "/projects/research" },
  { name: "Skills", path: "/skills" },
  { name: "Resume", path: "/resume" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border/50 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container h-20 flex items-center justify-between ">
        <Link href="/" className="relative z-10 font-heading text-2xl font-bold tracking-tighter">
          GL<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.path ? "text-primary" : "text-muted"
                )}
              >
                {pathname === link.path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-[2px] w-full bg-primary"
                  />
                )}
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l border-border pl-6">
            <Link href="https://github.com/gunjan-lathwal" target="_blank" className="text-muted hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com/in/gunjan-lathwal" target="_blank" className="text-muted hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted hover:text-foreground transition-colors p-1"
            >
              {mounted && (theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
            </button>

            <Link href="/contact" className="ml-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] active:scale-95">
              Hire Me
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-10 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-background flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-2xl font-heading font-medium transition-colors",
                  pathname === link.path ? "text-primary" : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-4 px-8 py-3 rounded-full bg-primary text-white font-medium">
              Hire Me
            </Link>
          </motion.div>
        )}
      </div>
    </header>
  );
}
