"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Hexagon, Terminal } from "lucide-react";

const NAV_LINKS = [
  { name: "System", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "Research", href: "/research" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll Event Observer
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#050505]/70 backdrop-blur-md border-b border-white/5 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* BRAND IDENTITY */}
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="relative flex items-center justify-center">
            <Hexagon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
            <div className="absolute inset-0 bg-primary/20 blur-md rounded-full scale-50 group-hover:scale-100 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-widest text-sm md:text-base leading-none text-white">XARVIONEX</span>
            <span className="text-[10px] text-primary/80 font-mono tracking-widest mt-1">SYS_CORE // Ω∞</span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative group"
              >
                <span className={`text-sm tracking-wide font-medium transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-gray-400 group-hover:text-white"
                }`}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-primary shadow-[0_0_8px_rgba(0,240,255,0.8)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP ACTION / STATUS */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_5px_rgba(0,240,255,1)]"></span>
            <span className="text-[10px] font-mono text-primary uppercase tracking-wider">System Online</span>
          </div>
          <Link href="/contact" className="group flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 rounded-sm transition-all duration-300">
            <Terminal className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
            <span className="text-sm font-mono text-gray-300 group-hover:text-white">Init_Contact</span>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="md:hidden relative z-50 text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium tracking-wide ${
                    pathname === link.href ? "text-primary text-glow" : "text-gray-400"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-sm"
              >
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono text-white">Initialize Contact</span>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
