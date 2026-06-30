"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Terminal, Mail, MessageSquare, Send, 
  Share2, ArrowUpRight, Loader2, CheckCircle2 
} from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState<"IDLE" | "SUBMITTING" | "SUCCESS">("IDLE");

  // Simulasi Pengiriman Form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("SUBMITTING");
    
    // Simulasi delay jaringan (latency)
    setTimeout(() => {
      setFormState("SUCCESS");
      
      // Reset form setelah sukses
      setTimeout(() => setFormState("IDLE"), 5000);
    }, 2000);
  };

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

  return (
    <div className="relative min-h-screen w-full pt-32 pb-24 px-6 md:px-12 overflow-hidden">
      {/* Ambient Cyber Light */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Header Block */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="text-sm font-mono text-primary tracking-widest uppercase">
              Initialize Connection
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Command <span className="text-gray-500 font-light">&</span> Contact
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl font-light leading-relaxed">
            Pusat komunikasi ekosistem XARVIONEX Ω∞. Hubungi Lead Architect Arifi Razzaq untuk diskusi arsitektur, konsultasi sistem AI, pengembangan bot, atau kemitraan strategis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: DIRECT PROTOCOLS */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Email Protocol */}
            <Link 
              href="mailto:razzaqinspires@gmail.com"
              className="glass-panel p-6 rounded-xl flex items-start gap-5 group hover:border-primary/40 hover:bg-white/[0.03] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 group-hover:border-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-gray-300 group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Global Mail</h3>
                <p className="text-sm font-mono text-primary mb-2">razzaqinspires@gmail.com</p>
                <p className="text-xs text-gray-500">Saluran asinkron untuk proposal, diskusi bisnis, dan korespondensi korporat.</p>
              </div>
            </Link>

            {/* WhatsApp Protocol */}
            <Link 
              href="https://wa.me/6283193905842"
              target="_blank"
              className="glass-panel p-6 rounded-xl flex items-start gap-5 group hover:border-green-400/40 hover:bg-green-400/[0.03] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-green-400" />
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 group-hover:border-green-400/20 transition-colors">
                <MessageSquare className="w-6 h-6 text-gray-300 group-hover:text-green-400 transition-colors" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white">Direct Comm / Bot</h3>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <p className="text-sm font-mono text-green-400 mb-2">+62 831 9390 5842</p>
                <p className="text-xs text-gray-500">Komunikasi real-time terenkripsi. Terhubung langsung dengan Arifi Razzaq atau Bot XARVIONEX.</p>
              </div>
            </Link>

            {/* Social Grid */}
            <div className="glass-panel p-6 rounded-xl mt-4">
              <div className="flex items-center gap-2 mb-6">
                <Share2 className="w-4 h-4 text-gray-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Social Matrix</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Link href="https://instagram.com/ar.zzq" target="_blank" className="flex flex-col items-center justify-center p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg transition-all group">
                  <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors">@ar.zzq</span>
                  <span className="text-[10px] text-gray-600 uppercase mt-1">Instagram</span>
                </Link>
                <Link href="https://tiktok.com/@ar.zzq" target="_blank" className="flex flex-col items-center justify-center p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg transition-all group">
                  <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors">@ar.zzq</span>
                  <span className="text-[10px] text-gray-600 uppercase mt-1">TikTok</span>
                </Link>
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: TERMINAL FORM */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="glass-panel p-1 rounded-xl h-full">
              <div className="bg-[#050505] rounded-lg h-full border border-white/5 p-6 md:p-8">
                
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-xs text-gray-500">~/xarvionex/message_relay.sh</span>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-mono text-xs text-primary uppercase tracking-wider ml-1">Entity Name</label>
                      <input 
                        type="text" 
                        required
                        disabled={formState !== "IDLE"}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-primary/5 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-xs text-primary uppercase tracking-wider ml-1">Return Address (Email)</label>
                      <input 
                        type="email" 
                        required
                        disabled={formState !== "IDLE"}
                        placeholder="john@enterprise.com"
                        className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-primary/5 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs text-primary uppercase tracking-wider ml-1">Subject Directive</label>
                    <input 
                      type="text" 
                      required
                      disabled={formState !== "IDLE"}
                      placeholder="Project Proposal / System Inquiry"
                      className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-primary/5 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs text-primary uppercase tracking-wider ml-1">Data Payload (Message)</label>
                    <textarea 
                      required
                      disabled={formState !== "IDLE"}
                      rows={5}
                      placeholder="Enter your transmission data here..."
                      className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-primary/5 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all resize-none disabled:opacity-50"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={formState !== "IDLE"}
                    className="mt-2 w-full flex items-center justify-center gap-2 py-4 bg-primary text-black font-bold tracking-wide rounded-lg hover:bg-white transition-all disabled:opacity-70 disabled:hover:bg-primary group relative overflow-hidden"
                  >
                    {formState === "IDLE" && (
                      <>
                        <span className="relative z-10">TRANSMIT_DATA</span>
                        <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                    {formState === "SUBMITTING" && (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-black" />
                        <span>ENCRYPTING & SENDING...</span>
                      </>
                    )}
                    {formState === "SUCCESS" && (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-green-700" />
                        <span className="text-green-900">TRANSMISSION SUCCESSFUL</span>
                      </>
                    )}
                    
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  </button>

                  <p className="text-center text-[10px] font-mono text-gray-600 mt-2">
                    Transmisi disalurkan melalui XARVIONEX Secure Network Protocol.
                  </p>

                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
