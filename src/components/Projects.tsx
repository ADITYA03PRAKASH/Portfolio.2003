"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, GitBranch, ArrowUpRight, Sparkles } from "lucide-react";

/* ─── Types ─────────────────────────────────────────────────────── */
interface Project {
  id: number;
  number: string;
  title: string;
  desc: string;
  tech: string[];
  live: string;
  github: string;
  gradient: string;
  featured?: boolean;
}

/* ─── Data ───────────────────────────────────────────────────────── */
const PROJECTS: Project[] = [
  {
    id: 1,
    number: "01",
    title: "AI Voice Agent",
    desc: "End-to-end AI voice agent system with real-time speech recognition, GPT-4 integration, and natural language understanding for automated customer support.",
    tech: ["Python", "OpenAI", "FastAPI", "React", "WebRTC"],
    live: "https://ehubind.com",
    github: "#",
    gradient: "from-[#FF6B00] via-[#FF8A00] to-[#FFB347]",
    featured: true,
  },
  {
    id: 2,
    number: "02",
    title: "HR Consultancy Platform",
    desc: "Full-stack HR tech platform with candidate-job matching, automated screening, and recruiter dashboards. Serves 500+ active job seekers.",
    tech: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
    live: "https://firstdoorhr.com",
    github: "#",
    gradient: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
  },
  {
    id: 3,
    number: "03",
    title: "eHubInd — Small Town Ecommerce",
    desc: "Hyperlocal ecommerce platform connecting small-town vendors to consumers. Features OTP auth, cart system, and vendor panels.",
    tech: ["React", "Express", "MongoDB", "Redux"],
    live: "https://ehubind.com",
    github: "#",
    gradient: "from-[#7C3AED] via-[#6D28D9] to-[#4C1D95]",
  },
  {
    id: 4,
    number: "04",
    title: "Tevatel — Telecom SaaS",
    desc: "Enterprise telecom SaaS dashboard with real-time call monitoring, analytics, and automated reporting.",
    tech: ["Next.js", "Python", "PostgreSQL", "WebSocket"],
    live: "https://tevatel.com",
    github: "#",
    gradient: "from-[#0f2027] via-[#203a43] to-[#2c5364]",
  },
  {
    id: 5,
    number: "05",
    title: "Threat Monitoring Dashboard",
    desc: "Real-time cybersecurity threat monitoring dashboard with ML-based anomaly detection and automated alert system.",
    tech: ["React", "Python", "TensorFlow", "Redis"],
    live: "#",
    github: "#",
    gradient: "from-[#1a1a1a] via-[#2d1515] to-[#4a1515]",
  },
];

/* ─── Image Placeholder ──────────────────────────────────────────── */
function ProjectImagePlaceholder({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="relative aspect-[16/10] rounded-3xl overflow-hidden cursor-none"
      style={{
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.04), 0 20px 60px rgba(0,0,0,0.15)",
      }}
    >
      {/* Main gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-25" />

      {/* Radial glow in center */}
      <div
        className="absolute rounded-full blur-3xl opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)",
          inset: "10%",
        }}
      />

      {/* Corner accent brackets */}
      <div
        className="absolute top-5 left-5 w-8 h-8 border-t-[2px] border-l-[2px] rounded-tl-md opacity-50"
        style={{ borderColor: "rgba(255,255,255,0.5)" }}
      />
      <div
        className="absolute bottom-5 right-5 w-8 h-8 border-b-[2px] border-r-[2px] rounded-br-md opacity-50"
        style={{ borderColor: "rgba(255,255,255,0.5)" }}
      />

      {/* Large watermark number */}
      <div
        className="absolute top-2 right-4 font-heading font-black text-white pointer-events-none select-none"
        style={{ fontSize: "clamp(64px, 10vw, 110px)", lineHeight: 1, opacity: 0.07 }}
      >
        {project.number}
      </div>

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
        <p
          className="font-body font-bold uppercase tracking-[0.2em] mb-3"
          style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}
        >
          Project {project.number}
        </p>
        <h3
          className="font-heading font-black text-white drop-shadow-lg"
          style={{
            fontSize: "clamp(20px, 3vw, 38px)",
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
          }}
        >
          {project.title}
        </h3>
        <div
          className="mt-4 rounded-full"
          style={{
            width: "clamp(36px, 5vw, 64px)",
            height: 2,
            background: "rgba(255,255,255,0.35)",
          }}
        />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black/25 to-transparent" />
    </motion.div>
  );
}

/* ─── Single Project Row ─────────────────────────────────────────── */
function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // even index → image LEFT; odd index → image RIGHT
  const imageOnLeft = index % 2 === 0;

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: imageOnLeft ? -56 : 56 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const detailsVariants = {
    hidden: { opacity: 0, x: imageOnLeft ? 56 : -56 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`flex flex-col gap-10 lg:gap-14 ${
        imageOnLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center`}
    >
      {/* Image — 60% */}
      <motion.div variants={imageVariants} className="w-full lg:w-[60%]">
        <ProjectImagePlaceholder project={project} />
      </motion.div>

      {/* Details — 40% */}
      <motion.div
        variants={detailsVariants}
        className={`w-full lg:w-[40%] flex flex-col gap-5 ${
          imageOnLeft ? "lg:pl-4" : "lg:pr-4"
        }`}
      >
        {/* Featured badge */}
        {project.featured && (
          <motion.div variants={childVariants}>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white font-body font-bold uppercase"
              style={{
                fontSize: 10,
                letterSpacing: "0.12em",
                background: "#FF6B00",
                boxShadow: "0 4px 16px rgba(255,107,0,0.35)",
              }}
            >
              <Sparkles className="w-3 h-3" />
              Featured Project
            </span>
          </motion.div>
        )}

        {/* Project number */}
        <motion.p
          variants={childVariants}
          className="font-heading font-bold text-sm"
          style={{ color: "#FF6B00" }}
        >
          {project.number}
        </motion.p>

        {/* Title */}
        <motion.h3 variants={childVariants} className="heading-1" style={{ color: "#111111" }}>
          {project.title}
        </motion.h3>

        {/* Description */}
        <motion.p variants={childVariants} className="body-lg">
          {project.desc}
        </motion.p>

        {/* Tech chips */}
        <motion.div variants={childVariants} className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full px-3 py-1 text-xs font-bold"
              style={{ background: "#FFE8D6", color: "#FF6B00" }}
            >
              {t}
            </span>
          ))}
        </motion.div>

        {/* Action links */}
        <motion.div variants={childVariants} className="flex items-center gap-7 pt-1">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-heading font-bold text-sm cursor-none"
            style={{ color: "#FF6B00" }}
          >
            <span className="relative">
              Live Demo →
              <span
                className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 rounded-full"
                style={{ background: "#FF6B00" }}
              />
            </span>
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-heading font-bold text-sm cursor-none"
            style={{ color: "#FF6B00" }}
          >
            <span className="relative">
              View Code →
              <span
                className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 rounded-full"
                style={{ background: "#FF6B00" }}
              />
            </span>
            <GitBranch className="w-4 h-4 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Section Export ────────────────────────────────────────── */
export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="projects"
      className="section relative"
      style={{ background: "#FFF4EE" }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,107,0,0.055) 0%, transparent 70%)",
          transform: "translate(35%, -35%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,138,0,0.06) 0%, transparent 70%)",
          transform: "translate(-35%, 35%)",
        }}
      />

      <div className="container relative z-10">
        {/* ── Header ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 32 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 lg:mb-24"
        >
          <span className="section-label">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse-slow"
              style={{ background: "#FF6B00" }}
            />
            Featured Work
          </span>

          <h2 className="heading-1 mt-4 mb-5" style={{ color: "#111111" }}>
            Projects That{" "}
            <span className="text-gradient">Define Me</span>
          </h2>

          <p className="body-lg max-w-xl">
            A curated selection of production-grade builds — from AI infrastructure
            to hyperlocal commerce platforms — each solving real problems at scale.
          </p>
        </motion.div>

        {/* ── Project Rows ── */}
        <div>
          {PROJECTS.map((project, index) => (
            <div key={project.id}>
              <div className="py-14 lg:py-20">
                <ProjectRow project={project} index={index} />
              </div>

              {/* Separator — not after last item */}
              {index < PROJECTS.length - 1 && (
                <motion.hr
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    originX: 0,
                    border: "none",
                    borderTop: "1px solid #F1E4DA",
                    margin: 0,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://github.com/ADITYA03PRAKASH"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary cursor-none group"
          >
            View All on GitHub
            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#contact" className="btn btn-secondary cursor-none">
            Let&apos;s Build Together →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
