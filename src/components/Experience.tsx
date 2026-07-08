"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  year: string;
  achievements: string[];
  side: "left" | "right";
}

const experiences: ExperienceEntry[] = [
  {
    company: "EHubInd.com (EngineerHub)",
    role: "Founder & Full Stack Developer",
    period: "2026 – Present",
    year: "2026",
    achievements: [
      "Founded eHubInd.com, a digital platform connecting civil engineers, architects, freelancers, students, and businesses within a unified engineering ecosystem.",
      "Developed features for freelance project discovery, internship opportunities, engineering services, and professional networking.",
      "Built a scalable full-stack platform enabling businesses to hire skilled professionals and collaborate on engineering and construction projects.",
      "Designed and implemented responsive user interfaces, secure backend APIs, and modern database architecture using React.js, Next.js, Node.js, Express.js, Tailwind CSS, and SQL databases.",
    ],
    side: "left",
  },
  {
    company: "Tevatel",
    role: "Full Stack Developer",
    period: "2026 – Present",
    year: "2026",
    achievements: [
      "Developed and enhanced enterprise cloud communication platform features.",
      "Built dynamic CMS modules, feature pages, blogs, webinar pages, and reusable React components.",
      "Integrated REST APIs and optimized frontend performance for better user experience.",
      "Worked with React.js, Next.js, Node.js, Express.js, MySQL, and Tailwind CSS.",
      "Contributed to production deployments, debugging, feature enhancements, and performance improvements.",
    ],
    side: "right",
  },
];

function CardContent({ entry }: { entry: ExperienceEntry }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow:
          "0 4px 16px rgba(255,107,0,0.08), 0 24px 64px rgba(255,107,0,0.06)",
      }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-white rounded-[32px] p-8 border border-[#F1E4DA] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.05)] overflow-hidden"
    >
      {/* Large faint year watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-2 right-4 font-heading text-[#F1E4DA] select-none"
        style={{ fontSize: 80, fontWeight: 300, lineHeight: 1 }}
      >
        {entry.year}
      </span>

      {/* Period */}
      <span className="label text-[#999999] mb-3 block">{entry.period}</span>

      {/* Company */}
      <h3 className="heading-2 text-[#111111] mb-1 relative z-10">
        {entry.company}
      </h3>

      {/* Role */}
      <p className="text-[#FF6B00] font-bold text-lg mb-5 relative z-10">
        {entry.role}
      </p>

      {/* Achievements */}
      <ul className="space-y-2.5 relative z-10">
        {entry.achievements.map((achievement, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="flex-shrink-0 mt-[7px] w-[6px] h-[6px] rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FF8A00]" />
            <span className="body-md text-[#666666] leading-relaxed">
              {achievement}
            </span>
          </li>
        ))}
      </ul>

      {/* Decorative corner accent */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#FFE8D6]/40 to-transparent rounded-[32px]" />
    </motion.div>
  );
}

function ExperienceCard({
  entry,
  index,
}: {
  entry: ExperienceEntry;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = entry.side === "left";

  return (
    <div ref={ref} className="relative flex items-center w-full">
      {/* ── Desktop: alternating left / right ── */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] w-full items-center">
        {/* Left slot */}
        <div className="flex justify-end pr-10">
          {isLeft && (
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }
              }
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full max-w-[420px]"
            >
              <CardContent entry={entry} />
            </motion.div>
          )}
        </div>

        {/* Center node */}
        <div className="flex items-center justify-center relative z-10 px-2">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{
              duration: 0.5,
              delay: index * 0.15 + 0.2,
              ease: "backOut",
            }}
            className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FF8A00] shadow-[0_0_0_5px_#FFE8D6,0_0_0_8px_rgba(255,107,0,0.08)] flex-shrink-0"
          />
        </div>

        {/* Right slot */}
        <div className="flex justify-start pl-10">
          {!isLeft && (
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }
              }
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full max-w-[420px]"
            >
              <CardContent entry={entry} />
            </motion.div>
          )}
        </div>
      </div>

      {/* ── Mobile: all right ── */}
      <div className="flex md:hidden items-start gap-6 w-full">
        <div className="flex-shrink-0 pt-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{
              duration: 0.5,
              delay: index * 0.15 + 0.2,
              ease: "backOut",
            }}
            className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FF8A00] shadow-[0_0_0_4px_#FFE8D6]"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex-1"
        >
          <CardContent entry={entry} />
        </motion.div>
      </div>
    </div>
  );
}

export default function Experience() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <span className="section-label">Career</span>
          <h2 className="heading-1 text-[#111111] mt-4">
            Where I&apos;ve Built
          </h2>
          <p className="body-lg text-[#666666] mt-4 max-w-xl">
            A journey of building meaningful products across industries — from
            startups to enterprise platforms.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Dashed vertical line — desktop */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-px border-l-2 border-dashed border-[#FFE8D6] z-0"
          />
          {/* Dashed vertical line — mobile */}
          <div
            aria-hidden="true"
            className="md:hidden absolute left-[10px] top-0 bottom-0 border-l-2 border-dashed border-[#FFE8D6] z-0"
          />

          {/* Entries */}
          <div className="relative z-10 flex flex-col gap-14 md:gap-16">
            {experiences.map((entry, index) => (
              <ExperienceCard
                key={entry.company}
                entry={entry}
                index={index}
              />
            ))}
          </div>

          {/* Bottom cap dot */}
          <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-[#FFE8D6] border-2 border-[#FF6B00]/30 z-10" />
        </div>
      </div>
    </section>
  );
}
