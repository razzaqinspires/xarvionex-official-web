import Link from "next/link";
import { Hexagon, Terminal, Mail, MessageSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#050505] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Hexagon className="w-6 h-6 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="font-bold tracking-widest text-sm leading-none text-white">XARVIONEX</span>
                <span className="text-[9px] text-primary/80 font-mono tracking-widest mt-1">SYS_CORE // Ω∞</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mt-2">
              Pinnacle of Digital Architecture. Membangun infrastruktur berkinerja tinggi, bot otonom, dan ekosistem AI masa depan.
            </p>
            <div className="flex items-center gap-2 mt-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-mono text-primary uppercase tracking-wider">System Operational</span>
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm tracking-wide uppercase">Ecosystem</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-gray-400 hover:text-primary text-sm transition-colors w-fit">About XARVIONEX</Link>
              <Link href="/founder" className="text-gray-400 hover:text-primary text-sm transition-colors w-fit">The Founder</Link>
              <Link href="/projects" className="text-gray-400 hover:text-primary text-sm transition-colors w-fit">Projects Hub</Link>
              <Link href="/roadmap" className="text-gray-400 hover:text-primary text-sm transition-colors w-fit">Evolution Roadmap</Link>
              <Link href="/research" className="text-gray-400 hover:text-primary text-sm transition-colors w-fit">Research Center</Link>
            </nav>
          </div>

          {/* Quick Contacts */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm tracking-wide uppercase">Direct Protocol</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/contact" className="text-gray-400 hover:text-primary text-sm flex items-center gap-2 transition-colors w-fit">
                <Terminal className="w-4 h-4" /> Command Center
              </Link>
              <Link href="mailto:razzaqinspires@gmail.com" className="text-gray-400 hover:text-primary text-sm flex items-center gap-2 transition-colors w-fit">
                <Mail className="w-4 h-4" /> Business Email
              </Link>
              <Link href="https://wa.me/6283193905842" target="_blank" className="text-gray-400 hover:text-green-400 text-sm flex items-center gap-2 transition-colors w-fit">
                <MessageSquare className="w-4 h-4" /> WhatsApp Bot
              </Link>
            </nav>
          </div>

          {/* Legal & Social */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm tracking-wide uppercase">Legal & Connect</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-primary text-sm transition-colors w-fit">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-primary text-sm transition-colors w-fit">Terms of Service</Link>
              <div className="flex items-center gap-4 mt-2">
                <a href="https://instagram.com/ar.zzq" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <span className="text-xs font-mono">IG</span>
                </a>
                <a href="https://tiktok.com/@ar.zzq" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <span className="text-xs font-mono">TT</span>
                </a>
                <a href="https://github.com/arifi-razzaq" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <span className="text-xs font-mono">GH</span>
                </a>
              </div>
            </nav>
          </div>

        </div>

        {/* Copyright Sealer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-mono">
            &copy; {currentYear} XARVIONEX Ω∞ by Arifi Razzaq. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-xs font-mono">
            <span>ENGINEERED IN INDONESIA</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full" />
            <span>GLOBAL DEPLOYMENT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
