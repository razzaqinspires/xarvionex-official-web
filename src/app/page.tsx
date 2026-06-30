"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Cpu, Network, Database, ChevronRight, Zap, Code2, ShieldAlert } from "lucide-react";

export default function HomePage() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pb-24">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-12 md:pt-24">
        <motion.div 
          className="flex flex-col items-center md:items-start text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono text-gray-300 tracking-wider">SYSTEM v1.0.0 ONLINE</span>
          </motion.div>

          {/* Hero Typography */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 text-white">
            XARVIONEX <span className="text-primary text-glow font-light">Ω∞</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-2xl text-gray-400 max-w-2xl font-light mb-2">
            Pinnacle of Digital Architecture & Automation.
          </motion.p>
          <motion.p variants={itemVariants} className="text-sm md:text-base font-mono text-primary/70 mb-10">
            ENGINEERED BY ARIFI RAZZAQ // FOUNDER & CHIEF ARCHITECT
          </motion.p>

          {/* Call to Actions */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <Link href="/projects" className="group relative flex items-center gap-3 px-8 py-4 bg-primary text-black font-semibold rounded-sm overflow-hidden w-full sm:w-auto justify-center transition-all hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]">
              <span className="relative z-10">Initialize Projects</span>
              <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </Link>
            <Link href="/founder" className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-sm w-full sm:w-auto justify-center hover:bg-white/5 hover:border-white/40 transition-all">
              <Terminal className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              <span>Meet The Architect</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* System Telemetry & Bento Grid */}
        <motion.div 
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Core Card 1: AI & Logic */}
          <motion.div variants={itemVariants} className="glass-panel p-8 rounded-xl group hover:border-primary/50 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu className="w-24 h-24 text-primary" />
            </div>
            <Cpu className="w-8 h-8 text-primary mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Artificial Intelligence</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Neural processing engines, automated NLP interfaces, and predictive modeling for next-generation Bot platforms.
            </p>
            <div className="flex gap-2">
              <span className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/10">NLP</span>
              <span className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/10">Machine Learning</span>
            </div>
          </motion.div>

          {/* Core Card 2: Infrastructure */}
          <motion.div variants={itemVariants} className="glass-panel p-8 rounded-xl group hover:border-primary/50 transition-colors duration-500 relative overflow-hidden md:translate-y-8">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Network className="w-24 h-24 text-primary" />
            </div>
            <Network className="w-8 h-8 text-primary mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Cloud Architecture</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Scalable, resilient backend ecosystems designed with microservices readiness and high-availability telemetry.
            </p>
            <div className="flex gap-2">
              <span className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/10">Node.js</span>
              <span className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/10">Next.js</span>
            </div>
          </motion.div>

          {/* Core Card 3: Automation */}
          <motion.div variants={itemVariants} className="glass-panel p-8 rounded-xl group hover:border-primary/50 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code2 className="w-24 h-24 text-primary" />
            </div>
            <Code2 className="w-8 h-8 text-primary mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Bot Automation</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Enterprise-grade WhatsApp, Discord, and Telegram bots acting as autonomous digital concierges and system operators.
            </p>
            <div className="flex gap-2">
              <span className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/10">WhatsApp API</span>
              <span className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/10">Webhooks</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Live Terminal Simulation */}
        <motion.div 
          className="mt-24 max-w-4xl mx-auto glass-panel rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 bg-black/40 px-4 py-3 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="ml-4 text-xs font-mono text-gray-500">root@xarvionex:~ /system/boot</span>
          </div>
          <div className="p-6 font-mono text-sm md:text-base text-gray-300 flex flex-col gap-2 overflow-x-auto">
            <div className="flex gap-4">
              <span className="text-green-400">➜</span>
              <span className="text-primary">~</span>
              <span className="text-white">./initialize_ecosystem.sh --mode=production</span>
            </div>
            <div className="text-gray-500">[INFO] Authenticating Architect: Arifi Razzaq... SUCCESS</div>
            <div className="text-gray-500">[INFO] Loading Framework Modules... DONE</div>
            <div className="text-gray-500">[INFO] Establishing Secure Connection to PostgreSQL... CONNECTED</div>
            <div className="text-gray-500">[INFO] Deploying Neural Engines & Webhooks... ACTIVE</div>
            <div className="text-primary mt-2">XARVIONEX Ω∞ ECOSYSTEM INITIALIZED SUCCESSFULLY.</div>
            <div className="animate-pulse w-2 h-5 bg-white mt-2"></div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
