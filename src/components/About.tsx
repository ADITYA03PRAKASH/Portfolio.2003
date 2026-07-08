"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Award, Code, CheckCircle } from "lucide-react";

interface StatItem {
  target: number;
  label: string;
  suffix: string;
}

function StatCounter({ target, label, suffix }: StatItem) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const stepTime = Math.abs(Math.floor(duration / target));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= target) {
          clearInterval(timer);
        }
      }, Math.max(stepTime, 20));

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center p-6 rounded-2xl glass-card border border-black/5 relative group overflow-hidden bg-white/70">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="font-heading text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-[0_0_15px_rgba(255,107,0,0.1)] select-none">
        {count}
        {suffix}
      </span>
      <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-2 text-center">
        {label}
      </span>
    </div>
  );
}

export default function About() {
  const journey = [
    {
      year: "2025 - Present",
      title: "Senior Full Stack & AI Architect",
      desc: "Architecting high-scale AI automations, conversational voice bots, and modular microservices SaaS platforms for global clients.",
      icon: <Code className="w-4 h-4 text-cyan-400" />,
    },
    {
      year: "2024",
      title: "AI Engineer & SaaS Developer",
      desc: "Delivered next-generation automation workflows and HR matching algorithms, integrating LLMs and Node/Python backends.",
      icon: <Award className="w-4 h-4 text-purple-400" />,
    },
    {
      year: "2023",
      title: "Full Stack Engineer",
      desc: "Built complex ecommerce engines, state management flows, and highly interactive React/Next.js frontend user dashboards.",
      icon: <Calendar className="w-4 h-4 text-blue-400" />,
    },
    {
      year: "2021 - 2022",
      title: "Software Developer Freelance",
      desc: "Laid strong foundations in clean code architecture, database modeling (MySQL/Postgres), and API design.",
      icon: <CheckCircle className="w-4 h-4 text-emerald-400" />,
    },
  ];

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 w-full max-w-7xl mx-auto overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-[-15%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Grid Headline */}
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 className="font-heading text-xs uppercase tracking-widest font-black text-primary mb-2">
          Aditya Prakash Dwivedi
        </h2>
        <p className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
          Crafting Digital Systems & AI
        </p>
        <span className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4" />
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        
        {/* Story & Biography */}
        <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-6">
          <h3 className="font-heading text-2xl font-bold text-slate-800">
            Designing Future-Proof Solutions
          </h3>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-sans">
            I am a Software Engineer based in Delhi, India, specializing in the intersection of premium web design, robust system architectures, and AI-driven automation. I craft software that does not just look beautiful, but scales seamlessly to handle complex processes under the hood.
          </p>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-sans">
            Over the years, I have engineered custom HR matching systems, full stack ecommerce apps, voice-activated AI agents, and enterprise analytics dashboards. My core driver is visual and functional excellence—making sure every detail is polished to perfection.
          </p>
          
          {/* Counters Grid */}
          <div className="grid grid-cols-3 gap-4 mt-2">
            <StatCounter target={30} label="Projects Built" suffix="+" />
            <StatCounter target={15} label="Tech Mastered" suffix="+" />
            <StatCounter target={100} label="Client Rating" suffix="%" />
          </div>
        </div>

        {/* Profile Image Column */}
        <div className="md:col-span-6 lg:col-span-3 flex justify-center">
          <div className="w-full max-w-[260px] rounded-3xl border border-black/5 glass-card p-2 relative overflow-hidden group shadow-2xl bg-white/70">
            {/* Spotlight neon effect on card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <img
              src="/profile.jpg"
              alt="Aditya Prakash Dwivedi"
              className="w-full aspect-[4/5] object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-500"
            />
            
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md border border-black/5 rounded-xl px-3 py-2 text-center text-[10px] uppercase font-bold tracking-widest text-primary">
              Aditya Dwivedi
            </div>
          </div>
        </div>

        {/* Timeline Column */}
        <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-8 mt-8 lg:mt-0">
          <h3 className="font-heading text-2xl font-bold text-slate-800">
            Milestones
          </h3>
          
          <div className="relative border-l border-black/10 pl-6 space-y-8 py-1">
            {journey.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Timeline node marker */}
                <div className="absolute -left-[35px] top-1.5 w-[18px] h-[18px] rounded-full bg-white border-2 border-black/10 flex items-center justify-center group-hover:border-primary transition-colors z-10 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* Milestone Details Card */}
                <div className="p-5 rounded-2xl glass-card border border-black/5 hover:border-primary/20 hover:shadow-xl hover:shadow-orange-500/5 transition-colors bg-white/70">
                  <div className="flex items-center justify-between gap-4 mb-2 flex-wrap sm:flex-nowrap">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-primary bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                      {item.year}
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="font-heading text-sm sm:text-base font-bold text-slate-800">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
