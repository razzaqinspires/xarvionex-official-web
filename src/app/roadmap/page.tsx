"use client";

import { motion } from "framer-motion";
import { 
  Globe, BookOpen, LayoutDashboard, Database, 
  MessageSquare, BrainCircuit, CloudCog, Network, 
  Code2, Globe2, CheckCircle2, ChevronDown, Zap
} from "lucide-react";

type PhaseStatus = "COMPLETED" | "ACTIVE" | "FUTURE";

interface RoadmapPhase {
  phase: number;
  title: string;
  description: string;
  status: PhaseStatus;
  Icon: any;
}

// 10 Tahapan Evolusi XARVIONEX Ω∞
const ROADMAP_DATA: RoadmapPhase[] = [
  {
    phase: 1,
    title: "Official Website",
    description: "Fondasi digital utama. Pusat informasi, portofolio, dan antarmuka publik yang merepresentasikan identitas enterprise XARVIONEX Ω∞.",
    status: "COMPLETED",
    Icon: Globe
  },
  {
    phase: 2,
    title: "Official Documentation",
    description: "Pusat literatur dan referensi teknis yang komprehensif untuk pengembang dan pengguna sistem XARVIONEX.",
    status: "ACTIVE",
    Icon: BookOpen
  },
  {
    phase: 3,
    title: "Official Developer Dashboard",
    description: "Panel kendali (control panel) terpusat bagi pengembang untuk mengelola API keys, memantau metrik bot, dan analitik server.",
    status: "FUTURE",
    Icon: LayoutDashboard
  },
  {
    phase: 4,
    title: "Official Repository Center",
    description: "Ekosistem penyimpanan artefak kode sumber terbuka (open-source) dan tertutup, terintegrasi dengan pipeline CI/CD otonom.",
    status: "FUTURE",
    Icon: Database
  },
  {
    phase: 5,
    title: "Official WhatsApp Bot Platform",
    description: "Infrastruktur bot enterprise-grade yang berfungsi sebagai asisten digital, sistem notifikasi, dan pusat layanan terautomasi.",
    status: "FUTURE",
    Icon: MessageSquare
  },
  {
    phase: 6,
    title: "AI Platform",
    description: "Pengembangan dan integrasi model Kecerdasan Buatan kustom (NLP & Machine Learning) untuk kapabilitas kognitif ekosistem.",
    status: "FUTURE",
    Icon: BrainCircuit
  },
  {
    phase: 7,
    title: "Cloud Infrastructure",
    description: "Jaringan server terdistribusi secara global dengan arsitektur microservices untuk memastikan latensi rendah dan ketersediaan tinggi.",
    status: "FUTURE",
    Icon: CloudCog
  },
  {
    phase: 8,
    title: "Public API",
    description: "Membuka akses end-point sistem kepada pengembang publik untuk membangun aplikasi pihak ketiga di atas arsitektur XARVIONEX.",
    status: "FUTURE",
    Icon: Network
  },
  {
    phase: 9,
    title: "Developer Ecosystem",
    description: "Komunitas pengembang terdesentralisasi, forum diskusi, ruang kolaborasi riset, dan program inkubasi teknologi.",
    status: "FUTURE",
    Icon: Code2
  },
  {
    phase: 10,
    title: "Global Technology Platform",
    description: "Puncak evolusi. Integrasi seluruh infrastruktur menjadi satu platform SaaS (Software as a Service) otonom berskala global.",
    status: "FUTURE",
    Icon: Globe2
  }
];

export default function RoadmapPage() {
  const getStatusVisuals = (status: PhaseStatus) => {
    switch (status) {
      case "COMPLETED":
        return {
          line: "bg-primary",
          dot: "bg-primary shadow-[0_0_15px_rgba(0,240,255,0.8)]",
          border: "border-primary/50",
          bg: "bg-primary/5",
          text: "text-primary"
        };
      case "ACTIVE":
        return {
          line: "bg-gradient-to-b from-primary to-white/10",
          dot: "bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]",
          border: "border-white/30",
          bg: "bg-white/5",
          text: "text-white"
        };
      case "FUTURE":
      default:
        return {
          line: "bg-white/10",
          dot: "bg-white/20",
          border: "border-white/5",
          bg: "bg-white/[0.02]",
          text: "text-gray-500"
        };
    }
  };

  return (
    <div className="relative min-h-screen w-full pt-32 pb-32 px-6 md:px-12 overflow-hidden">
      
      {/* Background Cyber Grid & Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono text-gray-300 tracking-wider uppercase">Evolution Matrix</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            System <span className="text-primary text-glow font-light">Roadmap</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Visi sepuluh tahap menuju arsitektur digital otonom. Setiap fase adalah blok pembangun (building block) yang direkayasa secara presisi untuk ekosistem XARVIONEX Ω∞.
          </motion.p>
        </div>

        {/* Timeline Architecture */}
        <div className="relative">
          {/* Central Vertical Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/10" />

          {ROADMAP_DATA.map((phase, index) => {
            const isEven = index % 2 === 0;
            const visuals = getStatusVisuals(phase.status);

            return (
              <motion.div 
                key={phase.phase}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 md:mb-24 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                
                {/* Visual Dot on the Line */}
                <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center z-10">
                  <div className={`w-4 h-4 rounded-full ${visuals.dot} border-4 border-[#050505]`} />
                </div>

                {/* Empty Space for alignment (Desktop) */}
                <div className="hidden md:block w-5/12" />

                {/* Content Panel */}
                <div className="w-full md:w-5/12 pl-16 md:pl-0 mt-2 md:mt-0 relative group">
                  <div className={`p-8 rounded-2xl border transition-all duration-500 backdrop-blur-sm ${visuals.border} ${visuals.bg} ${
                    phase.status !== "FUTURE" ? "hover:border-primary/50 hover:bg-white/[0.08]" : ""
                  }`}>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className={`font-mono text-4xl font-bold opacity-20 ${visuals.text}`}>
                        {(phase.phase).toString().padStart(2, '0')}
                      </span>
                      <div className={`p-3 rounded-xl border ${visuals.border} bg-black/40`}>
                        <phase.Icon className={`w-6 h-6 ${visuals.text}`} />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <h3 className={`text-xl font-bold ${phase.status === 'FUTURE' ? 'text-gray-300' : 'text-white'}`}>
                        {phase.title}
                      </h3>
                      {phase.status === "COMPLETED" && <CheckCircle2 className="w-4 h-4 text-primary" />}
                    </div>
                    
                    <p className={`text-sm leading-relaxed ${phase.status === 'FUTURE' ? 'text-gray-500' : 'text-gray-400'}`}>
                      {phase.description}
                    </p>

                    {/* Status Badge */}
                    <div className="mt-6 inline-flex items-center gap-2">
                      <span className={`text-[10px] font-mono tracking-widest uppercase px-2 py-1 rounded border ${
                        phase.status === 'COMPLETED' ? 'text-primary border-primary/20 bg-primary/10' :
                        phase.status === 'ACTIVE' ? 'text-white border-white/20 bg-white/10' :
                        'text-gray-600 border-gray-800 bg-black/50'
                      }`}>
                        STATUS: {phase.status}
                      </span>
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* End of Roadmap Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mt-20 pt-10 border-t border-white/5"
        >
          <ChevronDown className="w-6 h-6 text-gray-600 animate-bounce mb-2" />
          <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">Awaiting Next Directive</span>
        </motion.div>

      </div>
    </div>
  );
}
