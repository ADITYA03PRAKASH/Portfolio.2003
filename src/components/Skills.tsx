"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

/* ─── Types ─────────────────────────────────────────────────────────── */

type Category =
  | "All"
  | "Frontend"
  | "Backend"
  | "Database"
  | "AI/ML"
  | "Cloud"
  | "DevOps";

interface Skill {
  name: string;
  initials: string;
  category: Exclude<Category, "All">;
  /** Background color for the initials circle */
  bg: string;
  /** Text color for initials */
  color: string;
}

/* ─── Skills Data ───────────────────────────────────────────────────── */

const skills: Skill[] = [
  // Frontend
  { name: "React",          initials: "Re",  category: "Frontend",  bg: "#E8F4FD", color: "#087EA4" },
  { name: "Next.js",        initials: "Nx",  category: "Frontend",  bg: "#F0F0F0", color: "#000000" },
  { name: "TypeScript",     initials: "TS",  category: "Frontend",  bg: "#EEF2FF", color: "#3178C6" },
  { name: "JavaScript",     initials: "JS",  category: "Frontend",  bg: "#FEFCE8", color: "#CA8A04" },
  { name: "HTML5",          initials: "H5",  category: "Frontend",  bg: "#FFF1EE", color: "#E34F26" },
  { name: "CSS3",           initials: "C3",  category: "Frontend",  bg: "#EFF6FF", color: "#264DE4" },
  { name: "Tailwind",       initials: "Tw",  category: "Frontend",  bg: "#F0FDFA", color: "#0D9488" },
  { name: "Framer Motion",  initials: "FM",  category: "Frontend",  bg: "#FDF4FF", color: "#9333EA" },

  // Backend
  { name: "Node.js",        initials: "Nd",  category: "Backend",   bg: "#F0FFF4", color: "#339933" },
  { name: "Python",         initials: "Py",  category: "Backend",   bg: "#FEFCE8", color: "#3776AB" },
  { name: "Express",        initials: "Ex",  category: "Backend",   bg: "#F9FAFB", color: "#444444" },
  { name: "FastAPI",        initials: "FA",  category: "Backend",   bg: "#F0FDFA", color: "#009688" },
  { name: "REST API",       initials: "RS",  category: "Backend",   bg: "#FFF7ED", color: "#FF6B00" },
  { name: "GraphQL",        initials: "GQ",  category: "Backend",   bg: "#FDF4FF", color: "#E535AB" },

  // Database
  { name: "MongoDB",        initials: "Mg",  category: "Database",  bg: "#F0FFF4", color: "#47A248" },
  { name: "PostgreSQL",     initials: "PG",  category: "Database",  bg: "#EFF6FF", color: "#336791" },
  { name: "MySQL",          initials: "My",  category: "Database",  bg: "#EFF6FF", color: "#00758F" },
  { name: "Redis",          initials: "Rd",  category: "Database",  bg: "#FFF1F2", color: "#DC382D" },

  // AI/ML
  { name: "OpenAI",         initials: "AI",  category: "AI/ML",     bg: "#F9FAFB", color: "#10A37F" },
  { name: "LangChain",      initials: "LC",  category: "AI/ML",     bg: "#F0FDF4", color: "#1B7F37" },
  { name: "TensorFlow",     initials: "TF",  category: "AI/ML",     bg: "#FFF7ED", color: "#FF6F00" },
  { name: "Hugging Face",   initials: "HF",  category: "AI/ML",     bg: "#FEFCE8", color: "#E5AC00" },

  // Cloud
  { name: "AWS",            initials: "AW",  category: "Cloud",     bg: "#FFF7ED", color: "#FF9900" },
  { name: "Vercel",         initials: "Vc",  category: "Cloud",     bg: "#F9FAFB", color: "#000000" },
  { name: "Docker",         initials: "Dk",  category: "Cloud",     bg: "#EFF6FF", color: "#2496ED" },
  { name: "Kubernetes",     initials: "K8",  category: "Cloud",     bg: "#EFF6FF", color: "#326CE5" },

  // DevOps
  { name: "Git",            initials: "Gt",  category: "DevOps",    bg: "#FFF1EE", color: "#F05032" },
  { name: "GitHub Actions", initials: "GA",  category: "DevOps",    bg: "#F9FAFB", color: "#2088FF" },
  { name: "CI/CD",          initials: "CD",  category: "DevOps",    bg: "#F0FDF4", color: "#22C55E" },
  { name: "Linux",          initials: "Lx",  category: "DevOps",    bg: "#FEFCE8", color: "#FCC624" },
];

const CATEGORIES: Category[] = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "AI/ML",
  "Cloud",
  "DevOps",
];

/* ─── Animation Variants ─────────────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.94,
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] as [number, number, number, number] },
  },
};

/* ─── Skill Card ────────────────────────────────────────────────────── */

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{
        scale: 1.05,
        y: -4,
        boxShadow:
          "0 4px 16px rgba(255,107,0,0.10),0 16px 40px rgba(255,107,0,0.07)",
      }}
      className="group bg-white rounded-3xl p-6 border border-[#F1E4DA] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.05)] flex flex-col items-center gap-3 cursor-none transition-all duration-300 relative overflow-hidden"
    >
      {/* Subtle orange glow on hover */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,107,0,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Initials circle */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
        style={{ background: skill.bg }}
      >
        <span
          className="font-heading font-bold text-sm leading-none"
          style={{ color: skill.color }}
        >
          {skill.initials}
        </span>
      </div>

      {/* Skill name */}
      <span
        className="font-heading font-bold text-[#111111] text-[13px] text-center leading-tight relative z-10"
      >
        {skill.name}
      </span>

      {/* Category badge */}
      <span
        className="relative z-10"
        style={{
          fontSize: 9,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#999999",
          lineHeight: 1,
        }}
      >
        {skill.category}
      </span>
    </motion.div>
  );
}

/* ─── Category Tab ──────────────────────────────────────────────────── */

function CategoryTab({
  label,
  active,
  onClick,
}: {
  label: Category;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.18 }}
      className="relative rounded-full px-5 py-2 text-[13px] font-heading font-bold cursor-none transition-colors duration-250 outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]"
      style={{
        background: active ? "#FF6B00" : "#FFF4EE",
        color: active ? "#FFFFFF" : "#666666",
        boxShadow: active
          ? "0 4px 16px rgba(255,107,0,0.25)"
          : "none",
      }}
    >
      {label}
      {active && (
        <motion.div
          layoutId="active-tab-pill"
          className="absolute inset-0 rounded-full -z-10"
          style={{ background: "#FF6B00" }}
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}
    </motion.button>
  );
}

/* ─── Main Component ────────────────────────────────────────────────── */

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="section relative"
      style={{ background: "#FFFFFF" }}
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute top-0 right-[-10%] w-[500px] h-[500px] blob-orange opacity-[0.03] pointer-events-none animate-drift"
      />
      <div
        aria-hidden
        className="absolute bottom-[-5%] left-[-8%] w-[350px] h-[350px] blob-orange opacity-[0.025] pointer-events-none animate-float"
      />

      <div className="container relative z-10">

        {/* ── Section Header ─────────────────────────────────────── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 flex flex-col items-center gap-4"
        >
          <span className="section-label">Tech Stack</span>

          <h2 className="heading-1 text-[#111111]">
            Tools I{" "}
            <span className="text-gradient">Build With</span>
          </h2>

          <p className="body-lg max-w-2xl mx-auto" style={{ color: "#666666" }}>
            A curated toolkit refined through hundreds of hours of production
            work — each technology chosen for craft, reliability, and impact.
          </p>
        </motion.div>

        {/* ── Category Filters ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <CategoryTab
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </motion.div>

        {/* ── Skills Count indicator ─────────────────────────────── */}
        <motion.p
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center text-[#999999] text-[13px] font-heading font-semibold mb-8 tracking-wide"
        >
          Showing{" "}
          <span style={{ color: "#FF6B00" }}>{filtered.length}</span>{" "}
          {filtered.length === 1 ? "technology" : "technologies"}
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </motion.p>

        {/* ── Skills Grid ────────────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill) => (
              <SkillCard key={`${skill.name}-${skill.category}`} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Bottom CTA strip ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-transparent via-[#F1E4DA] to-transparent" />
          <p className="body-md text-center max-w-lg" style={{ color: "#999999" }}>
            Always learning — currently exploring{" "}
            <span style={{ color: "#FF6B00", fontWeight: 600 }}>WebAssembly</span>
            ,{" "}
            <span style={{ color: "#FF6B00", fontWeight: 600 }}>Rust</span>
            {" "}and{" "}
            <span style={{ color: "#FF6B00", fontWeight: 600 }}>edge computing</span>.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
