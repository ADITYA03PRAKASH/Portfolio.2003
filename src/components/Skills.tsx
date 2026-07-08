"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Database, Cloud, Sparkles, Sliders } from "lucide-react";

interface SkillItem {
  name: string;
  level: number; // percentage
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string; // Tailwind glow border color
  skills: SkillItem[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      color: "group-hover:border-cyan-500/30",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 },
        { name: "Redux", level: 80 },
      ],
    },
    {
      title: "Backend Engineering",
      icon: <Server className="w-5 h-5 text-purple-400" />,
      color: "group-hover:border-purple-500/30",
      skills: [
        { name: "Node.js / Express", level: 90 },
        { name: "REST APIs", level: 95 },
        { name: "JWT Auth / Security", level: 90 },
        { name: "WebSockets / Realtime", level: 85 },
      ],
    },
    {
      title: "Database Systems",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      color: "group-hover:border-blue-500/30",
      skills: [
        { name: "PostgreSQL / MySQL", level: 85 },
        { name: "MongoDB", level: 88 },
        { name: "Supabase", level: 90 },
        { name: "Prisma ORM", level: 85 },
      ],
    },
    {
      title: "AI & Automations",
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      color: "group-hover:border-amber-500/30",
      skills: [
        { name: "OpenAI API", level: 92 },
        { name: "AI Automation Workflows", level: 90 },
        { name: "Voice AI & Chatbots", level: 88 },
        { name: "Prompt Engineering", level: 95 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-5 h-5 text-emerald-400" />,
      color: "group-hover:border-emerald-500/30",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Git / GitHub CI/CD", level: 90 },
        { name: "Vercel / Netlify", level: 95 },
        { name: "Linux OS Admin", level: 75 },
      ],
    },
    {
      title: "Tools & Integrations",
      icon: <Sliders className="w-5 h-5 text-rose-400" />,
      color: "group-hover:border-rose-500/30",
      skills: [
        { name: "Postman / Figma", level: 90 },
        { name: "Razorpay Payment Gateway", level: 85 },
        { name: "Cloudinary / Firebase", level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 px-6 md:px-12 w-full max-w-7xl mx-auto overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Section Title */}
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 className="font-heading text-xs uppercase tracking-widest font-black text-purple-400 mb-2">
          Skills Showcase
        </h2>
        <p className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-slate-100">
          Core Competency Matrix
        </p>
        <span className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`group p-6 rounded-2xl glass-card border border-white/5 ${category.color} transition-all duration-500 relative overflow-hidden`}
          >
            {/* Soft background light */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />

            {/* Category Header */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="font-heading text-base font-bold text-slate-200">
                {category.title}
              </h3>
            </div>

            {/* Skill list and progress bars */}
            <div className="space-y-4 font-sans">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  
                  {/* Outer track */}
                  <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5">
                    {/* Inner fill */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + sIdx * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary relative"
                    >
                      {/* Glow tip */}
                      <span className="absolute right-0 top-0 h-full w-2 bg-white blur-[2px] opacity-60 animate-pulse" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
