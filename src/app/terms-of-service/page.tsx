"use client";

import { motion } from "framer-motion";
import { Scale, Terminal, Gavel } from "lucide-react";

export default function TermsOfServicePage() {
  const lastUpdated = "June 30, 2026";

  return (
    <div className="relative min-h-screen w-full pt-32 pb-24 px-6 md:px-12 overflow-hidden">
      {/* Legal Glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Scale className="w-8 h-8 text-accent" />
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Terms of Service</h1>
        </div>
        
        <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6">
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-gray-400">
            REV: 1.0.0
          </span>
          <span className="text-sm font-mono text-accent flex items-center gap-2">
            <Terminal className="w-4 h-4" /> LAST_UPDATE: {lastUpdated}
          </span>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-2xl flex flex-col gap-8">
          
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Gavel className="w-5 h-5 text-gray-500" /> 1. Intellectual Property Matrix
            </h2>
            <div className="text-gray-400 text-sm leading-relaxed space-y-4">
              <p>
                Seluruh arsitektur sistem, baris kode (kecuali diidentifikasi sebagai *open-source*), desain antarmuka, aset visual, dan logika operasional bot AI di dalam domain dan ekosistem XARVIONEX Ω∞ adalah kekayaan intelektual eksklusif milik <strong>Arifi Razzaq</strong>.
              </p>
              <p>
                Dilarang keras mereplikasi, mendistribusikan ulang, atau melakukan *reverse-engineering* terhadap *API Endpoints* maupun infrastruktur backend tanpa izin tertulis (Lisensi Korporat).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Gavel className="w-5 h-5 text-gray-500" /> 2. API & Bot Usage Protocol
            </h2>
            <div className="text-gray-400 text-sm leading-relaxed space-y-4">
              <p>
                Pengguna yang berinteraksi dengan instrumen automasi kami (termasuk namun tidak terbatas pada XARVIONEX Core Bot di platform WhatsApp) wajib mematuhi parameter berikut:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-500">
                <li><strong className="text-gray-300">Rate Limiting:</strong> Sistem dilengkapi dengan pemutus arus (*circuit breaker*). Upaya eksploitasi beban server (Spam/DDoS) akan memicu pemblokiran otomatis permanen dari jaringan.</li>
                <li><strong className="text-gray-300">Zero-Malice Policy:</strong> Penggunaan *tools* kami untuk aktivitas peretasan pihak ketiga, penipuan, atau injeksi *malware* adalah pelanggaran tingkat kritis.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Gavel className="w-5 h-5 text-gray-500" /> 3. Service Level Agreement (SLA)
            </h2>
            <div className="text-gray-400 text-sm leading-relaxed space-y-4">
              <p>
                Meskipun kami membangun infrastruktur ini dengan fokus pada redundansi dan *high-availability*, XARVIONEX Ω∞ disediakan dengan status "AS IS" (Sebagaimana Adanya). Arifi Razzaq tidak bertanggung jawab atas kerugian finansial atau kerusakan data yang timbul akibat penghentian layanan sementara (*downtime*) atau pemeliharaan server darurat (*emergency patch*).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Gavel className="w-5 h-5 text-gray-500" /> 4. Evolution of Terms
            </h2>
            <div className="text-gray-400 text-sm leading-relaxed space-y-4">
              <p>
                Seiring dengan evolusi sistem dan pergeseran *Roadmap*, protokol persyaratan layanan ini dapat diamandemen. Modifikasi pada protokol ini akan diterapkan secara asinkron tanpa notifikasi paksa, melainkan akan direfleksikan pada parameter LAST_UPDATE di atas dokumen ini.
              </p>
            </div>
          </section>

        </div>
      </motion.div>
    </div>
  );
}
