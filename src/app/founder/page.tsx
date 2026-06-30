"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Terminal, Code, BrainCircuit, Bot, 
  Server, LayoutTemplate, CloudCog, 
  Microscope, Mail, MessageSquare, Instagram,
  ChevronRight
} from "lucide-react";

export default function FounderPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const specializations = [
    { icon: Code, title: "Software Engineering", desc: "Arsitektur perangkat lunak skala enterprise dengan fokus pada clean code dan modularitas." },
    { icon: BrainCircuit, title: "Artificial Intelligence", desc: "Riset dan implementasi neural engine serta pemrosesan bahasa alami (NLP)." },
    { icon: Bot, title: "Automation System", desc: "Pengembangan ekosistem bot otonom (WhatsApp, Discord, Telegram)." },
    { icon: Server, title: "Backend Development", desc: "Desain API tangguh, manajemen database kompleks, dan keamanan server." },
    { icon: LayoutTemplate, title: "Frontend Development", desc: "Rekayasa antarmuka pengguna responsif dan animasi presisi tinggi (GPU-accelerated)." },
    { icon: CloudCog, title: "Cloud Architecture", desc: "Infrastruktur cloud scalable, load balancing, dan continuous deployment (CI/CD)." },
    { icon: Microscope, title: "Digital Research", desc: "Eksplorasi teknologi masa depan dan perancangan protokol sistem baru." },
  ];

  return (
    <div className="relative min-h-screen w-full pt-32 pb-24 px-6 md:px-12 overflow-hidden">
      {/* Background Matrix Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* LEFT COLUMN: IDENTITY BADGE */}
        <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col gap-6">
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
            
            <div className="w-24 h-24 mb-6 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/20 animate-pulse" />
              <Terminal className="w-10 h-10 text-primary relative z-10" />
            </div>

            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Arifi Razzaq</h1>
            <div className="flex flex-col gap-1 mb-6">
              <span className="text-primary font-mono text-sm">FOUNDER & CEO</span>
              <span className="text-gray-400 font-mono text-xs">LEAD DEVELOPER // CHIEF ARCHITECT</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Arsitek utama di balik XARVIONEX Ω∞. Memimpin riset, pengembangan perangkat lunak, dan visi infrastruktur digital otonom untuk masa depan.
            </p>

            <div className="flex flex-col gap-3">
              <Link href="mailto:razzaqinspires@gmail.com" className="flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-lg transition-all group/btn">
                <Mail className="w-4 h-4 text-gray-400 group-hover/btn:text-primary transition-colors" />
                <span className="text-sm text-gray-300">razzaqinspires@gmail.com</span>
              </Link>
              <Link href="https://wa.me/6283193905842" target="_blank" className="flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-lg transition-all group/btn">
                <MessageSquare className="w-4 h-4 text-gray-400 group-hover/btn:text-primary transition-colors" />
                <span className="text-sm text-gray-300">+62 831 9390 5842</span>
              </Link>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <Link href="https://instagram.com/ar.zzq" target="_blank" className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-lg transition-all group/btn">
                  <Instagram className="w-4 h-4 text-gray-400 group-hover/btn:text-pink-500 transition-colors" />
                  <span className="text-sm text-gray-300">@ar.zzq</span>
                </Link>
                <Link href="https://tiktok.com/@ar.zzq" target="_blank" className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-lg transition-all group/btn">
                  <svg className="w-4 h-4 text-gray-400 group-hover/btn:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.66a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  <span className="text-sm text-gray-300">@ar.zzq</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: COGNITIVE MAP & EXPERTISE */}
        <motion.div variants={itemVariants} className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Vision & Mission Panel */}
          <div className="glass-panel p-8 md:p-10 rounded-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <h2 className="text-xl font-bold text-white tracking-wide">Core Vision & Directive</h2>
            </div>
            <div className="prose prose-invert max-w-none text-gray-400">
              <p className="mb-4 leading-relaxed">
                XARVIONEX Ω∞ bukan sekadar entitas bisnis; ini adalah manifestasi dari penelitian berkelanjutan terhadap arsitektur sistem masa depan. Sebagai Founder, visi saya adalah merancang ekosistem digital yang tidak hanya berfungsi secara pasif, melainkan mampu beroperasi secara <strong>otonom, adaptif, dan evolusioner</strong>.
              </p>
              <p className="leading-relaxed">
                Saya meyakini bahwa persimpangan antara <em>Software Engineering</em> tingkat lanjut, <em>Artificial Intelligence</em>, dan otomasi akan melahirkan paradigma baru dalam interaksi mesin-manusia. Seluruh baris kode dalam proyek ini didedikasikan untuk menjembatani masa kini dengan infrastruktur masa depan.
              </p>
            </div>
          </div>

          {/* Technical Specializations Grid */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <h2 className="text-xl font-bold text-white tracking-wide">Architectural Expertise</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specializations.map((spec, idx) => (
                <motion.div 
                  key={idx}
                  className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-300 group"
                  whileHover={{ y: -2 }}
                >
                  <spec.icon className="w-6 h-6 text-gray-500 mb-4 group-hover:text-primary transition-colors duration-300" />
                  <h3 className="text-base font-semibold text-white mb-2">{spec.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {spec.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </motion.div>
      </motion.div>
    </div>
  );
}
