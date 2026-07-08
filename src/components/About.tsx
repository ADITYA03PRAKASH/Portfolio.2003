"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

/* ─── Data ─────────────────────────────────────────────────────────── */

const stats = [
  { value: "30+", label: "Projects Delivered" },
  { value: "15+", label: "Technologies Mastered" },
  { value: "3+",  label: "Years Experience" },
];

const milestones = [
  { year: "2021", event: "Started coding", detail: "First lines of HTML & JavaScript" },
  { year: "2022", event: "First freelance project", detail: "Delivered client website end-to-end" },
  { year: "2023", event: "Built HR Tech platform", detail: "Full-stack SaaS with AI matching" },
  { year: "2024", event: "AI Voice Agent", detail: "LLM-powered conversational bots" },
  { year: "2025", event: "Enterprise SaaS", detail: "Scaled multi-tenant architecture" },
];

/* ─── Animation Variants ────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

/* ─── Sub-components ────────────────────────────────────────────────── */

function StatCard({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -6, boxShadow: "0 4px 16px rgba(255,107,0,0.08),0 24px 64px rgba(255,107,0,0.06)" }}
      className="bg-white rounded-3xl p-6 border border-[#F1E4DA] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.05)] flex flex-col items-center gap-1 cursor-none transition-shadow duration-300"
    >
      <span
        className="text-gradient font-heading font-black"
        style={{ fontSize: "clamp(36px,4vw,52px)", lineHeight: 1 }}
      >
        {value}
      </span>
      <span className="label text-[#999999] text-center mt-1">{label}</span>
    </motion.div>
  );
}

function TimelineItem({
  year,
  event,
  detail,
  index,
  isLast,
}: {
  year: string;
  event: string;
  detail: string;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center min-w-[180px] flex-shrink-0 relative group"
    >
      {/* Connector line */}
      {!isLast && (
        <div
          aria-hidden
          className="absolute top-[18px] left-[calc(50%+20px)] h-[2px] bg-[#F1E4DA] group-hover:bg-[#FFE8D6] transition-colors duration-500"
          style={{ width: "calc(100% - 20px)" }}
        />
      )}

      {/* Year dot */}
      <div className="relative z-10 w-9 h-9 rounded-full bg-white border-2 border-[#F1E4DA] flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] group-hover:border-[#FF6B00] transition-colors duration-300">
        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FF8A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="mt-4 text-center px-2">
        <span className="font-heading font-black text-[#FF6B00] text-sm block">
          {year}
        </span>
        <span className="font-heading font-bold text-[#111111] text-sm block mt-0.5 leading-tight">
          {event}
        </span>
        <span className="text-[11px] text-[#999999] block mt-1 leading-snug">
          {detail}
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ────────────────────────────────────────────────── */

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef   = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const quoteInView   = useInView(quoteRef,   { once: true, margin: "-100px" });
  const contentInView = useInView(contentRef, { once: true, margin: "-80px" });

  // Subtle parallax on blob
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section relative"
      style={{ background: "#FFF8F3" }}
    >
      {/* ── Top curved SVG divider ────────────────────────────────── */}
      <div className="curve-top" aria-hidden>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,80 C360,0 1080,0 1440,80 L1440,0 L0,0 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* ── Decorative blobs ─────────────────────────────────────── */}
      <motion.div
        style={{ y: blobY }}
        aria-hidden
        className="absolute top-[15%] left-[-8%] w-[420px] h-[420px] blob-orange opacity-[0.04] pointer-events-none"
      />
      <motion.div
        style={{ y: blobY }}
        aria-hidden
        className="absolute bottom-[20%] right-[-6%] w-[300px] h-[300px] blob-orange opacity-[0.035] pointer-events-none animate-drift"
      />

      {/* Dot grid accent */}
      <div
        aria-hidden
        className="dot-grid absolute inset-0 pointer-events-none opacity-40"
      />

      <div className="container relative z-10">

        {/* ══════════════════════════════════════════════════════════
            PULL QUOTE
        ══════════════════════════════════════════════════════════ */}
        <motion.div
          ref={quoteRef}
          initial={{ opacity: 0, y: 60 }}
          animate={quoteInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-24 md:mb-32"
        >
          {/* Opening quotation mark */}
          <div
            aria-hidden
            className="font-heading font-black text-[#FF6B00] opacity-20 leading-none select-none mb-[-16px]"
            style={{ fontSize: "clamp(80px,10vw,140px)" }}
          >
            &ldquo;
          </div>

          <blockquote className="display-2 text-[#111111] text-center" style={{ fontStyle: "italic" }}>
            I build software that doesn&rsquo;t just work&nbsp;&mdash;&nbsp;
            <span className="text-gradient">it delights.</span>
          </blockquote>

          {/* Attribution */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={quoteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col items-center gap-2"
          >
            <span className="w-12 h-[2px] bg-gradient-to-r from-[#FF6B00] to-[#FF8A00] rounded-full block" />
            <span className="label text-[#999999] tracking-[0.18em]">
              Aditya Prakash Dwivedi
            </span>
          </motion.div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════
            2-COLUMN: PHOTO  +  STORY
        ══════════════════════════════════════════════════════════ */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 xl:gap-20 items-center mb-24 md:mb-32"
        >
          {/* LEFT — Profile Photo */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: -0.5 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Gradient border wrapper */}
              <div
                className="p-[4px] rounded-[40px]"
                style={{
                  background: "linear-gradient(145deg, #FF6B00, #FF8A00, #FFB347)",
                  boxShadow: "0 8px 40px rgba(255,107,0,0.18), 0 2px 8px rgba(255,107,0,0.08)",
                }}
              >
                <div className="relative rounded-[37px] overflow-hidden bg-[#FFF4EE]" style={{ maxWidth: 420 }}>
                  <Image
                    src="/profile.jpg"
                    alt="Aditya Prakash Dwivedi — Full Stack Developer & AI Engineer"
                    width={420}
                    height={520}
                    priority
                    className="object-cover w-full"
                    style={{ display: "block" }}
                  />

                  {/* Floating name badge */}
                  <div className="absolute bottom-5 left-5 right-5 bg-white/85 backdrop-blur-md border border-[#F1E4DA] rounded-2xl px-4 py-3 flex items-center justify-between">
                    <div>
                      <p className="font-heading font-bold text-[#111111] text-sm leading-tight">
                        Aditya Prakash Dwivedi
                      </p>
                      <p className="text-[11px] text-[#FF6B00] font-semibold tracking-wide mt-0.5">
                        Full Stack &amp; AI Engineer
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FF8A00] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[10px] font-black">AD</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative offset elements */}
              <div
                aria-hidden
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl dot-grid border border-[#F1E4DA] opacity-60 -z-10"
              />
              <div
                aria-hidden
                className="absolute -top-4 -left-4 w-20 h-20 rounded-xl bg-[#FFE8D6] -z-10"
                style={{ borderRadius: "40% 60% 50% 50%" }}
              />
            </motion.div>
          </motion.div>

          {/* RIGHT — Story */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            <span className="section-label">The Story</span>

            <h2 className="heading-1 text-[#111111]">
              From curious coder to{" "}
              <span className="text-gradient">full-stack architect</span>
            </h2>

            <p className="body-lg">
              I started writing code out of sheer curiosity — just a browser console
              and a dream. That curiosity grew into a craft. Today I architect
              production-grade web applications, AI-powered systems, and SaaS products
              that serve real users at scale. Every interface I ship is obsessed with
              performance, accessibility, and visual polish.
            </p>

            <p className="body-lg">
              My work spans the full spectrum — from pixel-perfect React frontends to
              distributed Node.js microservices, from fine-tuned LLM pipelines to
              enterprise HR platforms that automate thousands of decisions daily.
              I believe the best software is invisible: it simply&nbsp;
              <em style={{ color: "#FF6B00", fontStyle: "italic" }}>works beautifully</em>.
            </p>

            {/* Stat cards row */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} {...stat} index={i} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            HORIZONTAL TIMELINE
        ══════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label */}
          <div className="flex flex-col items-center mb-10 gap-3">
            <span className="section-label">Journey</span>
            <p className="heading-2 text-[#111111] text-center">Key Milestones</p>
          </div>

          {/* Timeline scrollable card */}
          <div
            className="relative bg-white rounded-[32px] border border-[#F1E4DA] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.05)] overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {/* Horizontal rule beneath dots */}
            <div
              aria-hidden
              className="absolute top-[52px] left-10 right-10 h-[2px] bg-[#F1E4DA] pointer-events-none"
            />

            <div className="flex items-start gap-0 px-10 py-10 min-w-max">
              {milestones.map((m, i) => (
                <TimelineItem
                  key={m.year}
                  {...m}
                  index={i}
                  isLast={i === milestones.length - 1}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* ── Bottom curved SVG divider ─────────────────────────────── */}
      <div className="curve-bottom" aria-hidden>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
