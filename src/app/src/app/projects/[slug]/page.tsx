"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Github, BookOpen, Globe, 
  Cpu, GitCommit, Box, Calendar, Key, 
  TerminalSquare, ShieldCheck, Activity
} from "lucide-react";

// Simulasi Data (Akan digantikan oleh Prisma db.project.findUnique)
const PROJECT_DATABASE = [
  {
    id: "proj_01",
    slug: "xarvionex-core-bot",
    name: "XARVIONEX Core Bot",
    description: "Bot WhatsApp enterprise-grade otonom dengan integrasi AI dan sistem manajemen telemetri server. Dirancang untuk menangani ribuan request secara konkuren dengan latensi minimum.",
    status: "ACTIVE",
    version: "2.1.0",
    category: "BOT_WA",
    repositoryUrl: "https://github.com/arifi-razzaq/xarvionex-core",
    documentationUrl: "https://docs.xarvionex.com/core-bot",
    releaseDate: "2024-05-12",
    updateLog: [
      { version: "2.1.0", date: "2025-01-10", notes: "Integrasi OpenAI GPT-4 Turbo untuk NLP Command." },
      { version: "2.0.0", date: "2024-11-22", notes: "Migrasi penuh ke PostgreSQL & Prisma ORM." },
      { version: "1.0.0", date: "2024-05-12", notes: "Initial Release (Baileys Engine Core)." }
    ],
    techStack: ["Node.js", "Baileys", "PostgreSQL", "Prisma", "OpenAI API", "TypeScript"],
    dependencies: ["@whiskeysockets/baileys", "pino", "axios", "framer-motion"],
    license: "MIT",
    createdAt: "2024-01-10"
  }
];

export default function ProjectDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<typeof PROJECT_DATABASE[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulasi fetch data dari Database
  useEffect(() => {
    const slug = params.slug as string;
    const found = PROJECT_DATABASE.find((p) => p.slug === slug);
    
    // Simulate network delay for immersive terminal loading
    setTimeout(() => {
      setProject(found || null);
      setIsLoading(false);
    }, 600);
  }, [params.slug]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // LOADING STATE
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="flex flex-col items-center gap-4">
          <Activity className="w-8 h-8 text-primary animate-pulse" />
          <span className="font-mono text-sm text-primary tracking-widest">QUERYING DATABASE...</span>
        </div>
      </div>
    );
  }

  // NOT FOUND STATE
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 px-6">
        <TerminalSquare className="w-16 h-16 text-red-500 mb-6" />
        <h1 className="text-3xl font-bold text-white mb-2 font-mono">ERR_PROJECT_NOT_FOUND</h1>
        <p className="text-gray-400 mb-8 text-center max-w-md">
          Sistem tidak dapat mengidentifikasi artefak dengan slug <span className="text-white font-mono bg-white/10 px-2 py-1 rounded">{params.slug}</span>.
        </p>
        <button onClick={() => router.push('/projects')} className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm font-mono text-sm transition-colors">
          RETURN TO HUB
        </button>
      </div>
    );
  }

  // MAIN RENDER
  return (
    <div className="relative min-h-screen w-full pt-32 pb-24 px-6 md:px-12 overflow-hidden">
      {/* Background Matrix */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Breadcrumb Navigation */}
        <motion.div variants={itemVariants} className="mb-8">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO HUB</span>
          </Link>
        </motion.div>

        {/* Header Block */}
        <motion.div variants={itemVariants} className="mb-12 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-6 h-6 text-primary" />
              <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-primary uppercase tracking-wider">
                {project.category.replace("_", " ")}
              </span>
              <span className={`px-2 py-1 rounded text-[10px] font-mono border flex items-center gap-1.5 ${
                project.status === 'ACTIVE' ? 'text-green-400 border-green-400/20 bg-green-400/10' : 'text-yellow-400 border-yellow-400/20 bg-yellow-400/10'
              }`}>
                {project.status === 'ACTIVE' && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
                {project.status}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">{project.name}</h1>
            <p className="text-xl text-gray-400 max-w-2xl font-light">{project.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {project.repositoryUrl && (
              <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-sm transition-colors">
                <Github className="w-4 h-4" />
                <span>Repository</span>
              </a>
            )}
            {project.documentationUrl && (
              <a href={project.documentationUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-sm transition-colors">
                <BookOpen className="w-4 h-4" />
                <span>Docs</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info (Left/Center Column) */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-8">
            {/* Architecture / Detail Text */}
            <div className="glass-panel p-8 rounded-xl">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <TerminalSquare className="w-5 h-5 text-primary" />
                System Overview
              </h2>
              <div className="prose prose-invert max-w-none text-gray-400 text-sm leading-relaxed">
                <p>
                  Sistem ini diarsiteki dengan pendekatan modular, memungkinkan skalabilitas horizontal seiring dengan meningkatnya beban kerja (workload). 
                  Menggunakan <strong>{project.techStack[0]}</strong> sebagai fondasi runtime, arsitektur ini dioptimalkan untuk mengeksekusi operasi asinkron dengan <em>event-loop</em> yang efisien.
                </p>
                <p>
                  Lapisan data dikelola secara presisi melalui <strong>{project.techStack[3]} ORM</strong> yang terhubung ke database relasional, memastikan integritas data (ACID compliance) dan type-safety hingga ke level frontend.
                </p>
              </div>
            </div>

            {/* Update Log / Timeline */}
            <div className="glass-panel p-8 rounded-xl">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <GitCommit className="w-5 h-5 text-accent" />
                Update Protocol (Changelog)
              </h2>
              <div className="flex flex-col gap-6 relative border-l border-white/10 ml-3">
                {project.updateLog.map((log, idx) => (
                  <div key={idx} className="relative pl-6">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-sm font-bold text-white">v{log.version}</span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {log.date}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{log.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Metadata Sidebar (Right Column) */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            
            {/* Tech Stack Matrix */}
            <div className="glass-panel p-6 rounded-xl">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <Box className="w-4 h-4 text-primary" /> Core Matrix
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-primary/5 border border-primary/20 text-primary rounded-md text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Dependencies */}
            <div className="glass-panel p-6 rounded-xl">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <Activity className="w-4 h-4 text-accent" /> Dependencies
              </h3>
              <ul className="flex flex-col gap-2">
                {project.dependencies.map(dep => (
                  <li key={dep} className="text-sm text-gray-400 font-mono flex items-center gap-2">
                    <span className="text-gray-600">-</span> {dep}
                  </li>
                ))}
              </ul>
            </div>

            {/* License & Metadata */}
            <div className="glass-panel p-6 rounded-xl">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gray-400" /> System Info
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-xs text-gray-500 font-mono">VERSION</span>
                  <span className="text-sm text-white font-mono">{project.version}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-xs text-gray-500 font-mono">LICENSE</span>
                  <span className="text-sm text-white font-mono flex items-center gap-1">
                    <Key className="w-3 h-3 text-gray-400" /> {project.license}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 font-mono">INIT_DATE</span>
                  <span className="text-sm text-white font-mono">{project.createdAt}</span>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
