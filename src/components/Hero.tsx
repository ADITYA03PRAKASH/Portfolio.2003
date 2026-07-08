"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
} from "framer-motion";
import {
  ArrowRight,
  Download,
  Brain,
  Star,
  ChevronDown,
} from "lucide-react";

/* ─── Animation variants ────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const rightVariants = {
  hidden:  { opacity: 0, scale: 0.88, x: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

/* ─── Stat micro-card ───────────────────────────────────────────── */
interface StatCardProps {
  value: string;
  label: string;
}
function StatCard({ value, label }: StatCardProps) {
  return (
    <div
      className="
        bg-white border border-[#F1E4DA]
        rounded-2xl px-4 py-3 text-center
        shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]
        hover:shadow-[0_4px_16px_rgba(255,107,0,0.08),0_16px_40px_rgba(255,107,0,0.05)]
        hover:border-[#E8D5C8]
        transition-all duration-300
        flex-1
      "
    >
      <div
        className="font-heading font-black text-[#FF6B00] text-xl leading-none mb-1"
      >
        {value}
      </div>
      <div
        className="text-[#999999] text-[10px] uppercase tracking-wider font-semibold"
      >
        {label}
      </div>
    </div>
  );
}

/* ─── Floating glass info card ──────────────────────────────────── */
interface FloatCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
function FloatCard({ children, className = "", delay = 0 }: FloatCardProps) {
  return (
    <div
      className={`
        absolute z-20
        glass-card
        bg-white/85 backdrop-blur-xl
        border border-[#F1E4DA]
        rounded-2xl px-3 py-2.5
        shadow-[0_4px_24px_rgba(0,0,0,0.07)]
        animate-float
        ${className}
      `}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────── */
export default function Hero() {
  const heroRef  = useRef<HTMLElement>(null);
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const leftInView  = useInView(leftRef,  { once: true, amount: 0.25 });
  const rightInView = useInView(rightRef, { once: true, amount: 0.2  });

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="
        relative min-h-screen flex items-center
        overflow-hidden
        bg-white dot-grid
        pt-24 pb-16
      "
    >
      {/* ─── Soft orange background blobs ────────────────────────── */}
      <div
        aria-hidden="true"
        className="
          absolute top-[-10%] right-[-5%]
          w-[600px] h-[600px] rounded-full
          bg-gradient-to-br from-[#FF6B00] to-[#FF8A00]
          opacity-[0.13] blur-[120px]
          pointer-events-none
        "
      />
      <div
        aria-hidden="true"
        className="
          absolute bottom-[-15%] left-[-8%]
          w-[500px] h-[500px] rounded-full
          bg-gradient-to-tr from-[#FF8A00] to-[#FFB347]
          opacity-[0.10] blur-[120px]
          pointer-events-none
        "
      />

      {/* ─── Main 12-column grid ─────────────────────────────────── */}
      <div className="container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">

          {/* ═══════════════════════════════════════════════════════
              LEFT COLUMN — Typography block (7 cols)
          ════════════════════════════════════════════════════════ */}
          <motion.div
            ref={leftRef}
            variants={containerVariants}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
            className="lg:col-span-7 flex flex-col gap-7"
          >
            {/* Availability pill */}
            <motion.div variants={itemVariants}>
              <span className="section-label inline-flex items-center gap-2">
                <span className="
                  w-1.5 h-1.5 rounded-full bg-[#FF6B00]
                  animate-pulse-slow
                " />
                Available for Work
              </span>
            </motion.div>

            {/* Display heading */}
            <motion.h1
              variants={itemVariants}
              className="display-1 text-[#111111] leading-[0.92]"
            >
              Building
              <br />
              <span className="text-gradient">Digital</span>
              <br />
              Experiences.
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={itemVariants}
              className="text-[#666666] text-lg leading-relaxed max-w-md"
            >
              I&apos;m Aditya Prakash, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. I build scalable business websites, SaaS platforms, admin dashboards, and productivity applications with a strong focus on performance, clean architecture, and exceptional user experience.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => handleScroll("projects")}
                className="btn btn-primary group"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary group"
              >
                Download CV
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
              </a>
            </motion.div>

            {/* Stats trust row */}
            <motion.div
              variants={itemVariants}
              className="flex items-stretch gap-3 max-w-sm"
            >
              <StatCard value="5+"   label="Projects"      />
              <StatCard value="15+"  label="Technologies"  />
              <StatCard value="100%" label="Delivery"      />
            </motion.div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════
              RIGHT COLUMN — Visual block (5 cols)
          ════════════════════════════════════════════════════════ */}
          <motion.div
            ref={rightRef}
            variants={rightVariants}
            initial="hidden"
            animate={rightInView ? "visible" : "hidden"}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Outer container — sets positioning context */}
            <div className="relative w-[360px] h-[420px] sm:w-[400px] sm:h-[460px]">

              {/* Large glowing orange orb background */}
              <div
                aria-hidden="true"
                className="
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-72 h-72 sm:w-80 sm:h-80
                  rounded-full
                  bg-gradient-to-br from-[#FF6B00] to-[#FF8A00]
                  opacity-90
                  blur-[2px]
                  animate-pulse-slow
                  shadow-[0_0_80px_rgba(255,107,0,0.35)]
                "
              />

              {/* Profile image with perfectly circular mask */}
              <div
                className="
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%]
                  w-64 h-64 sm:w-72 sm:h-72
                  overflow-hidden
                  rounded-full
                  z-10
                  border-4 border-white
                  shadow-md
                "
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.jpg"
                  alt="Aditya Prakash Dwivedi — Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                />
              </div>

              {/* ── Floating card 1: Tech stack (top-left) ─────────── */}
              <FloatCard
                className="top-2 left-[-24px] sm:left-[-32px]"
                delay={0}
              >
                <div className="flex items-center gap-2">
                  <div className="
                    w-6 h-6 rounded-lg
                    bg-gradient-to-br from-[#FF6B00] to-[#FF8A00]
                    flex items-center justify-center
                    text-white text-[10px] font-black
                    flex-shrink-0
                  ">
                    ⚛
                  </div>
                  <div>
                    <div className="text-[11px] font-heading font-bold text-[#111111] whitespace-nowrap leading-tight">
                      React · Next.js
                    </div>
                    <div className="text-[9px] text-[#999999] font-semibold uppercase tracking-wider">
                      TypeScript
                    </div>
                  </div>
                </div>
              </FloatCard>

              {/* ── Floating card 2: AI (bottom-right) ─────────────── */}
              <FloatCard
                className="bottom-6 right-[-20px] sm:right-[-28px]"
                delay={0.8}
              >
                <div className="flex items-center gap-2">
                  <div className="
                    w-7 h-7 rounded-xl
                    bg-[#FFF4EE] border border-[#F1E4DA]
                    flex items-center justify-center
                    flex-shrink-0
                  ">
                    <Brain className="w-3.5 h-3.5 text-[#FF6B00]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-heading font-bold text-[#111111] whitespace-nowrap leading-tight">
                      AI Integration
                    </div>
                    <div className="text-[9px] text-[#999999] font-semibold uppercase tracking-wider">
                      Automation · APIs
                    </div>
                  </div>
                </div>
              </FloatCard>

              {/* ── Floating card 3: Rating (right side) ────────────── */}
              <FloatCard
                className="top-[38%] right-[-36px] sm:right-[-48px]"
                delay={1.5}
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-2.5 h-2.5 text-[#FF8A00] fill-[#FF8A00]"
                      />
                    ))}
                  </div>
                  <div className="text-[10px] font-heading font-bold text-[#111111] whitespace-nowrap">
                    5★ Client Rating
                  </div>
                </div>
              </FloatCard>

              {/* Subtle ring around the orb */}
              <div
                aria-hidden="true"
                className="
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-[300px] h-[300px] sm:w-[340px] sm:h-[340px]
                  rounded-full
                  border border-[#FF6B00]/15
                  pointer-events-none
                  z-0
                "
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Scroll indicator ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="
          absolute bottom-8 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-1.5
          z-10 pointer-events-none select-none
        "
      >
        <span className="label text-[#999999] text-[10px]">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-[#FF6B00]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
