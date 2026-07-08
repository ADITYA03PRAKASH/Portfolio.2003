"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Eye, Shield, Activity, Users, ShoppingBag, Radio } from "lucide-react";
import { GitHub } from "@/components/SocialIcons";

interface Project {
  id: number;
  title: string;
  category: "Full Stack" | "AI & Automation" | "Security";
  desc: string;
  tech: string[];
  features: string[];
  challenges: string;
  architecture: string;
  github: string;
  live: string;
  icon: React.ReactNode;
  gradient: string;
}

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "AI Voice Agent",
      category: "AI & Automation",
      desc: "An intelligent, low-latency conversational assistant capable of automated customer service calls, real-time voice synthesis, and query resolution, deployed at Tevatel.",
      tech: ["React.js", "TypeScript", "Node.js", "REST APIs", "WebSockets", "Voice AI"],
      features: [
        "Bidirectional WebSocket voice streaming with <300ms latency",
        "Contextual tool call integrations to check databases mid-call",
        "Refactored reusable component architecture, improving frontend page consistency",
        "Automated transcription and call-summary extraction",
      ],
      challenges: "Handling real-time audio packet buffering without dropping connections, and coordinating voice activity detection to prevent GPT from interrupting callers.",
      architecture: "Web client -> WebSockets Gateway -> Twilio Stream Engine -> Whisper Transcriber -> GPT-4 Agent -> TTS voice synthesizer -> WebSockets Output.",
      github: "https://github.com/ADITYA03PRAKASH",
      live: "https://tevatel.com",
      icon: <Radio className="w-8 h-8 text-cyan-400" />,
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    },
    {
      id: 2,
      title: "EHub - Full Stack Startup",
      category: "Full Stack",
      desc: "A production-ready full-stack engineering platform with secure JWT authentication, role-based access control, and dynamic interactive user panels.",
      tech: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "JWT Auth"],
      features: [
        "Architected and developed full-stack commerce features serving live production workflows",
        "Centralized error handling with protected routes and schema validations",
        "Designed SEO-optimized frontends with dynamic forms and reusable styles",
        "Managed database connection pools, DNS records, and server hosting configurations",
      ],
      challenges: "Tuning MySQL connection pools and database schema indexing to prevent query latency, and managing domain DNS configurations for live environments.",
      architecture: "React Frontend -> Express REST API -> MySQL Database connection pools.",
      github: "https://github.com/ADITYA03PRAKASH",
      live: "https://www.ehubind.com/",
      icon: <ShoppingBag className="w-8 h-8 text-purple-400" />,
      gradient: "from-purple-500/20 via-accent/10 to-transparent",
    },
    {
      id: 3,
      title: "Threat Monitoring Dashboard",
      category: "Security",
      desc: "A luxury cybersecurity operation center UI capturing real-time network traffic threats, visualizing IP packet attacks, and deploying firewall bans.",
      tech: ["React.js", "Vite", "WebSockets", "PostgreSQL", "Docker", "Tailwind CSS"],
      features: [
        "Interactive canvas threat globe linking threat origins to endpoints",
        "Live network packet inspection grid with instant severity categorization",
        "Automated alert escalation via Webhook alerts (Discord/Slack)",
        "Docker log ingest agents acting as background system processes",
      ],
      challenges: "Updating complex UI states with 1000+ threat packets per second without causing React render locks or dropping UI frame rates.",
      architecture: "Client Canvas UI -> WebSocket connections -> Ingestion Gateway -> Redis queue -> Parser -> Database backend.",
      github: "https://github.com/ADITYA03PRAKASH",
      live: "https://github.com/ADITYA03PRAKASH",
      icon: <Shield className="w-8 h-8 text-red-400" />,
      gradient: "from-red-500/20 via-orange-500/10 to-transparent",
    },
    {
      id: 4,
      title: "Smart Task Manager (MERN)",
      category: "Full Stack",
      desc: "A full-stack project manager built on the MERN stack featuring role-based access control and secure routing.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth", "Tailwind CSS"],
      features: [
        "JWT token authentication and encrypted password hashing pipelines",
        "Protected routes and middleware validating requests",
        "Interactive board structures displaying task statuses and assignments",
      ],
      challenges: "Handling real-time token state synchronization across multiple protected routes during expiration events.",
      architecture: "React.js -> Express API -> MongoDB Mongoose.",
      github: "https://github.com/ADITYA03PRAKASH/Smart-Task-Manager-MERN-",
      live: "https://github.com/ADITYA03PRAKASH/Smart-Task-Manager-MERN-",
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    },
    {
      id: 5,
      title: "OOP Task Manager",
      category: "Full Stack",
      desc: "A client-side task management utility designed using core Object-Oriented Programming (OOP) classes and LocalStorage state persistence.",
      tech: ["JavaScript", "HTML5", "CSS3", "OOP Principles", "LocalStorage"],
      features: [
        "Strict class-based modular code architecture",
        "LocalStorage database abstraction layer for state caching",
        "Interactive lists and search filters",
      ],
      challenges: "Designing a clean OOP pattern in vanilla JS to map state changes to DOM renders without external libraries.",
      architecture: "Vanilla JS classes -> LocalStorage APIs -> Custom DOM binding.",
      github: "https://github.com/ADITYA03PRAKASH/Todo-List-OOP-LocalStorage-",
      live: "https://github.com/ADITYA03PRAKASH/Todo-List-OOP-LocalStorage-",
      icon: <Activity className="w-8 h-8 text-indigo-400" />,
      gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  // Custom 3D Tilt Hook/Handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, card: HTMLDivElement) => {
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coords relative to card
    const xVal = e.clientX - rect.left;
    const yVal = e.clientY - rect.top;
    
    // Convert to percentage offsets (-0.5 to 0.5)
    const xPct = (xVal / width - 0.5) * 20; // 20deg max tilt
    const yPct = (yVal / height - 0.5) * -20;
    
    card.style.transform = `perspective(1000px) rotateX(${yPct}deg) rotateY(${xPct}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (card: HTMLDivElement) => {
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <section id="projects" className="relative py-24 px-6 md:px-12 w-full max-w-7xl mx-auto overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      {/* Headline */}
      <div className="text-center mb-12 flex flex-col items-center">
        <h2 className="font-heading text-xs uppercase tracking-widest font-black text-cyan-400 mb-2">
          Projects Portfolio
        </h2>
        <p className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-slate-100">
          Featured Engineering Works
        </p>
        <span className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4" />
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
        {["All", "Full Stack", "AI & Automation", "Security"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              filter === cat
                ? "bg-gradient-to-r from-primary/20 to-cyan-500/20 border border-cyan-500/30 text-cyan-200"
                : "bg-white/5 border border-white/5 text-slate-400 hover:text-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p) => {
            let cardRef: HTMLDivElement | null = null;
            return (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="cursor-pointer"
                onClick={() => setSelectedProject(p)}
              >
                {/* 3D Tilt Card wrapper */}
                <div
                  ref={(el) => { cardRef = el; }}
                  onMouseMove={(e) => cardRef && handleMouseMove(e, cardRef)}
                  onMouseLeave={() => cardRef && handleMouseLeave(cardRef)}
                  style={{ transition: "transform 0.15s ease-out" }}
                  className="rounded-2xl glass-card border border-white/5 p-6 relative overflow-hidden flex flex-col h-full group"
                >
                  {/* Subtle Gradient background blobs */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${p.gradient} pointer-events-none opacity-50`} />

                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-6 z-10">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      {p.icon}
                    </div>
                    <span className="text-[9px] uppercase font-extrabold tracking-widest text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      {p.category}
                    </span>
                  </div>

                  {/* Info */}
                  <h3 className="font-heading text-lg font-bold text-slate-200 mb-2 group-hover:text-cyan-400 transition-colors z-10">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-6 flex-grow z-10">
                    {p.desc}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6 z-10">
                    {p.tech.slice(0, 4).map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono text-slate-500 bg-slate-950/60 px-2 py-0.5 rounded border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 4 && (
                      <span className="text-[9px] font-mono text-slate-500 bg-slate-950/60 px-1.5 py-0.5 rounded border border-white/5">
                        +{p.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Hover indicator link */}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:translate-x-1.5 transition-transform z-10">
                    View Details
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Modal Popup Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 w-full h-full bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[700px] max-h-[85vh] rounded-2xl border border-white/10 glass-card bg-slate-950/90 overflow-y-auto shadow-2xl relative p-6 sm:p-8 scrollbar-thin"
            >
              {/* Top gradient spotlight */}
              <div className={`absolute top-0 left-0 w-full h-40 bg-gradient-to-b ${selectedProject.gradient} pointer-events-none opacity-40`} />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-200 p-1.5 hover:bg-white/5 rounded-lg transition-colors cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-4 mb-6 z-10 relative mt-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  {selectedProject.icon}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-100 mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Detailed Content */}
              <div className="space-y-6 font-sans text-sm relative z-10 text-slate-300">
                
                {/* Description */}
                <div>
                  <h4 className="font-heading text-xs uppercase font-extrabold tracking-widest text-slate-500 mb-2">
                    Overview
                  </h4>
                  <p className="leading-relaxed text-slate-400">
                    {selectedProject.desc}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-heading text-xs uppercase font-extrabold tracking-widest text-slate-500 mb-2.5">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono text-cyan-200 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-heading text-xs uppercase font-extrabold tracking-widest text-slate-500 mb-2">
                    Key Features
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges & Solution */}
                <div>
                  <h4 className="font-heading text-xs uppercase font-extrabold tracking-widest text-slate-500 mb-2">
                    Technical Challenges
                  </h4>
                  <p className="leading-relaxed text-slate-400">
                    {selectedProject.challenges}
                  </p>
                </div>

                {/* System Architecture */}
                <div>
                  <h4 className="font-heading text-xs uppercase font-extrabold tracking-widest text-slate-500 mb-2">
                    System Architecture
                  </h4>
                  <div className="font-mono text-xs bg-slate-950 p-4 rounded-xl border border-white/5 text-cyan-400/90 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                    {selectedProject.architecture}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/15 relative z-10">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  Live Demo
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  GitHub Repository
                  <GitHub className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
