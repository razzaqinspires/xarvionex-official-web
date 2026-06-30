"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FolderGit2, TerminalSquare, Box, Globe, 
  Cpu, Webhook, Bot, Database, Server,
  ArrowUpRight, GitFork, Star
} from "lucide-react";

// Tipe data yang direfleksikan dari Prisma Schema
type ProjectStatus = "ACTIVE" | "BETA" | "IN_DEVELOPMENT" | "PLANNING" | "DEPRECATED";
type ProjectCategory = "ALL" | "AI" | "BOT_WA" | "BACKEND_API" | "AUTOMATION" | "INFRASTRUCTURE";

interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  status: ProjectStatus;
  version: string;
  category: ProjectCategory;
  techStack: string[];
}

// Simulasi Database Proyek XARVIONEX Ω∞
const MOCK_PROJECTS: ProjectItem[] = [
  {
    id: "proj_01",
    slug: "xarvionex-core-bot",
    name: "XARVIONEX Core Bot",
    description: "Bot WhatsApp enterprise-grade otonom dengan integrasi AI dan sistem manajemen telemetri server.",
    status: "ACTIVE",
    version: "2.1.0",
    category: "BOT_WA",
    techStack: ["Node.js", "Baileys", "PostgreSQL", "OpenAI"]
  },
  {
    id: "proj_02",
    slug: "nexus-api-gateway",
    name: "Nexus API Gateway",
    description: "Infrastruktur backend terpusat untuk mendistribusikan layanan mikro dan webhook ecosystem XARVIONEX.",
    status: "ACTIVE",
    version: "1.5.2",
    category: "BACKEND_API",
    techStack: ["Express", "Redis", "Docker", "Prisma"]
  },
  {
    id: "proj_03",
    slug: "neural-nlp-engine",
    name: "Neural NLP Engine",
    description: "Mesin pemrosesan bahasa alami kustom untuk mendeteksi intent pengguna dan memberikan respons dinamis.",
    status: "BETA",
    version: "0.9.0",
    category: "AI",
    techStack: ["Python", "TensorFlow", "FastAPI"]
  },
  {
    id: "proj_04",
    slug: "deploy-automaton",
    name: "Deploy Automaton",
    description: "Skrip otomasi CI/CD untuk penyebaran (deployment) langsung dari repositori Git ke server produksi.",
    status: "ACTIVE",
    version: "1.0.0",
    category: "AUTOMATION",
    techStack: ["Bash", "GitHub Actions", "Linux"]
  },
  {
    id: "proj_05",
    slug: "xarvionex-cloud-mesh",
    name: "Cloud Mesh Network",
    description: "Arsitektur load-balancer eksperimental untuk mendistribusikan lalu lintas bot secara efisien.",
    status: "IN_DEVELOPMENT",
    version: "0.1.0",
    category: "INFRASTRUCTURE",
    techStack: ["Nginx", "Go", "Docker Swarm"]
  }
];

const CATEGORIES: { label: string; value: ProjectCategory }[] = [
  { label: "All Systems", value: "ALL" },
  { label: "WhatsApp Bot", value: "BOT_WA" },
  { label: "Backend & API", value: "BACKEND_API" },
  { label: "Artificial Intelligence", value: "AI" },
  { label: "Automation", value: "AUTOMATION" },
  { label: "Infrastructure", value: "INFRASTRUCTURE" },
];

export default function ProjectsHubPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("ALL");

  const filteredProjects = MOCK_PROJECTS.filter(project => 
    activeFilter === "ALL" ? true : project.category === activeFilter
  );

  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case "ACTIVE": return "text-green-400 bg-green-400/10 border-green-400/20";
      case "BETA": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "IN_DEVELOPMENT": return "text-blue-400 bg-blue-400/10 border-blue-400/20";
      case "PLANNING": return "text-gray-400 bg-gray-400/10 border-gray-400/20";
      case "DEPRECATED": return "text-red-400 bg-red-400/10 border-red-400/20";
      default: return "text-gray-400 bg-gray-400/10 border-gray-400/20";
    }
  };

  const getCategoryIcon = (category: ProjectCategory) => {
    switch (category) {
      case "BOT_WA": return <Bot className="w-5 h-5 text-primary" />;
      case "BACKEND_API": return <Server className="w-5 h-5 text-accent" />;
      case "AI": return <Cpu className="w-5 h-5 text-pink-500" />;
      case "AUTOMATION": return <Webhook className="w-5 h-5 text-green-400" />;
      case "INFRASTRUCTURE": return <Database className="w-5 h-5 text-blue-400" />;
      default: return <Box className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="relative min-h-screen w-full pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight flex items-center gap-4">
              <FolderGit2 className="w-10 h-10 text-primary" />
              Projects Hub
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Pusat komando ekosistem. Menelusuri seluruh infrastruktur, bot otonom, dan antarmuka pemrograman aplikasi (API) yang dikembangkan oleh XARVIONEX Ω∞.
            </p>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
            <TerminalSquare className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-mono text-gray-300">Total Systems: {MOCK_PROJECTS.length}</span>
          </div>
        </div>

        {/* Dynamic Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-4 py-2 text-sm font-mono transition-all duration-300 rounded-md relative ${
                activeFilter === cat.value 
                  ? "text-white" 
                  : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
              }`}
            >
              {cat.label}
              {activeFilter === cat.value && (
                <motion.div 
                  layoutId="active-filter"
                  className="absolute inset-0 bg-primary/10 border border-primary/30 rounded-md -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid with Framer Motion Layout Animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                key={project.id}
              >
                <Link 
                  href={`/projects/${project.slug}`}
                  className="block h-full glass-panel p-6 rounded-xl hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>

                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                      {getCategoryIcon(project.category)}
                    </div>
                    <div className={`px-2 py-1 rounded text-[10px] font-mono border flex items-center gap-1.5 ${getStatusColor(project.status)}`}>
                      {project.status === "ACTIVE" && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
                      {project.status}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-xs font-mono text-gray-500">v{project.version}</span>
                      <div className="flex items-center gap-3 text-gray-500">
                        <span className="flex items-center gap-1 text-xs hover:text-white transition-colors"><GitFork className="w-3 h-3" /> Core</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty State / Search Failsafe */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="w-full py-20 flex flex-col items-center justify-center text-center border border-dashed border-white/10 rounded-xl"
          >
            <Box className="w-12 h-12 text-gray-600 mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">Tidak ada data ditemukan.</h3>
            <p className="text-gray-500">Sistem belum mencatat proyek dalam kategori ini.</p>
          </motion.div>
        )}

      </div>
    </div>
  );
}
