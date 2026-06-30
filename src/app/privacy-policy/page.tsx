"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Terminal, Lock } from "lucide-react";

export default function PrivacyPolicyPage() {
  const lastUpdated = "June 30, 2026";

  return (
    <div className="relative min-h-screen w-full pt-32 pb-24 px-6 md:px-12 overflow-hidden">
      {/* Security Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <ShieldAlert className="w-8 h-8 text-primary" />
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Privacy Policy</h1>
        </div>
        
        <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6">
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-gray-400">
            REV: 1.0.0
          </span>
          <span className="text-sm font-mono text-primary flex items-center gap-2">
            <Terminal className="w-4 h-4" /> LAST_UPDATE: {lastUpdated}
          </span>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-2xl flex flex-col gap-8">
          
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-gray-500" /> 1. Data Collection Protocol
            </h2>
            <div className="text-gray-400 text-sm leading-relaxed space-y-4">
              <p>
                XARVIONEX Ω∞, di bawah arahan Arifi Razzaq, beroperasi dengan prinsip minimalisasi data (Data Minimization). Kami hanya mengumpulkan informasi telemetri esensial yang diperlukan untuk memastikan stabilitas server, eksekusi bot otonom, dan keamanan jaringan.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-500">
                <li><strong className="text-gray-300">Log Interaksi Sistem:</strong> Perintah (commands) yang dikirimkan ke Bot WhatsApp/API publik disimpan secara temporer (volatile memory) untuk proses NLP, kecuali secara eksplisit diminta untuk disimpan.</li>
                <li><strong className="text-gray-300">Telemetri Jaringan:</strong> IP Address dan User-Agent dicatat semata-mata untuk mitigasi serangan DDoS dan optimasi *load balancer*.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-gray-500" /> 2. Utilization of Data
            </h2>
            <div className="text-gray-400 text-sm leading-relaxed space-y-4">
              <p>
                Seluruh set data yang masuk ke dalam matriks XARVIONEX digunakan untuk:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-500">
                <li>Melatih dan meningkatkan akurasi *Artificial Intelligence* (hanya menggunakan data anonim).</li>
                <li>Melakukan *debugging* dan penyelesaian anomali perangkat lunak.</li>
                <li>Menghasilkan status telemetri *real-time* untuk dasbor publik.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-gray-500" /> 3. Third-Party Transmission
            </h2>
            <div className="text-gray-400 text-sm leading-relaxed space-y-4">
              <p>
                Sistem arsitektur kami dibangun dengan isolasi data yang ketat. XARVIONEX Ω∞ <strong>tidak pernah</strong> menjual, menyewakan, atau mendistribusikan kunci enkripsi maupun data pengguna kepada entitas komersial pihak ketiga. Transmisi eksternal hanya terjadi pada:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-500">
                <li>Penyedia infrastruktur cloud (AWS/GCP/DigitalOcean) untuk keperluan *hosting*.</li>
                <li>API LLM Terenkripsi (misal: OpenAI) di mana data diatur untuk tidak digunakan sebagai basis pelatihan model publik mereka.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-gray-500" /> 4. Communication & Inquiries
            </h2>
            <div className="text-gray-400 text-sm leading-relaxed space-y-4">
              <p>
                Untuk permintaan penghapusan data secara paksa (*Right to be Forgotten*) dari memori server kami, atau pertanyaan terkait arsitektur keamanan, Anda diinstruksikan untuk menghubungi Lead Architect secara langsung melalui protokol komunikasi berikut:
              </p>
              <p className="font-mono text-primary bg-primary/10 px-4 py-2 rounded-md inline-block border border-primary/20">
                razzaqinspires@gmail.com
              </p>
            </div>
          </section>

        </div>
      </motion.div>
    </div>
  );
}
