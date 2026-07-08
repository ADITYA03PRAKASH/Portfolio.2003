"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckSquare } from "lucide-react";

interface RoleExperience {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  achievements: string[];
}

export default function Experience() {
  const experiences: RoleExperience[] = [
    {
      company: "Tevatel Software Solutions",
      role: "Full Stack Developer",
      duration: "May 2026 - Present",
      location: "India",
      responsibilities: [
        "Built and shipped full-stack features using React.js, TypeScript, Node.js, and REST APIs, contributing to a codebase serving production users.",
        "Refactored reusable component architecture to improve page rendering speeds, reducing unnecessary re-renders.",
        "Integrated and debugged third-party APIs, and improved error handling for routing modules.",
      ],
      achievements: [
        "Improved frontend page load consistency and rendering speed across core application flows.",
        "Implemented robust SEO optimizations, increasing discoverability across key application pages.",
      ],
    },
    {
      company: "Codingal",
      role: "Software Developer Associate Intern",
      duration: "Nov 2025 - Apr 2026",
      location: "India",
      responsibilities: [
        "Enhanced live class features used by thousands of students, improving real-time interaction and session reliability.",
        "Debugged and optimized frontend and backend code blocks, collaborating directly with the core engineering team.",
        "Contributed to project-based learning module designs for programming courses.",
      ],
      achievements: [
        "Significantly reduced reported student session bugs by writing clean, modular fixes.",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-24 px-6 md:px-12 w-full max-w-7xl mx-auto overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-[30%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      {/* Section Title */}
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 className="font-heading text-xs uppercase tracking-widest font-black text-primary mb-2">
          Career Path
        </h2>
        <p className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
          Professional Work Experience
        </p>
        <span className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4" />
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-black/10 pl-6 md:pl-10 space-y-12 py-2 max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative group"
          >
            {/* Timeline Circle Node */}
            <div className="absolute -left-[35px] md:-left-[51px] top-2 w-[18px] h-[18px] md:w-[22px] md:h-[22px] rounded-full bg-white border-2 border-black/10 flex items-center justify-center group-hover:border-primary transition-colors z-10 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Experience Card */}
            <div className="p-6 rounded-3xl glass-card border border-black/5 bg-white/70 hover:border-primary/20 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 relative overflow-hidden">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-6">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-800 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="font-heading text-sm text-primary font-semibold mt-0.5">
                    {exp.company}
                  </p>
                </div>
                
                <div className="flex flex-col sm:items-end text-xs text-slate-500 font-sans">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.duration}
                  </span>
                  <span className="mt-0.5">{exp.location}</span>
                </div>
              </div>

              {/* Grid Responsibilities and Achievements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-xs sm:text-sm text-slate-500">
                
                {/* Responsibilities */}
                <div>
                  <h4 className="font-heading text-[10px] uppercase font-extrabold tracking-widest text-slate-500 mb-3 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-primary" />
                    Core Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-heading text-[10px] uppercase font-extrabold tracking-widest text-slate-500 mb-3 flex items-center gap-1.5">
                    <CheckSquare className="w-3.5 h-3.5 text-secondary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="leading-relaxed flex items-start gap-2 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded bg-secondary mt-1.5 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
