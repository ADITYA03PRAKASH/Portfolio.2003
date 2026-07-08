"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Cpu, Settings2, BarChart3, LineChart } from "lucide-react";

interface ServiceItem {
  title: string;
  icon: React.ReactNode;
  desc: string;
  tech: string[];
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: "Full Stack SaaS Apps",
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      desc: "End-to-end development of scalable multi-tenant software as a service. Includes authentication, payment gateways, role management, and performance-tuned UI dashboards.",
      tech: ["Next.js", "Node.js", "Prisma", "Postgres", "Stripe"],
    },
    {
      title: "AI Voice & Dialog Systems",
      icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
      desc: "Engineering natural, low-latency voice assistants and smart support chatbots using generative LLM agents. Features real-time WebSocket communication and database tool calling.",
      tech: ["OpenAI API", "WebSockets", "Twilio Streams", "Whisper"],
    },
    {
      title: "Custom Automation Workflows",
      icon: <Settings2 className="w-6 h-6 text-blue-400" />,
      desc: "Optimizing company efficiency by connecting databases, CRM software, messaging clients, and web scraping hooks into automated workflows.",
      tech: ["Python", "Docker", "Node.js", "Cron Jobs", "Webhooks"],
    },
    {
      title: "Real-time Metrics Dashboards",
      icon: <BarChart3 className="w-6 h-6 text-emerald-400" />,
      desc: "Creating responsive data dashboards visualizing cloud server statistics, transaction histories, or threat vectors via persistent WebSocket push protocols.",
      tech: ["React.js", "Chart.js/Recharts", "WebSockets", "SQL"],
    },
    {
      title: "API Design & Backend Services",
      icon: <Cpu className="w-6 h-6 text-amber-400" />,
      desc: "Designing fast, secure, and fully documented REST and GraphQL interfaces. Includes database migration scripts, relational index tuning, and schema validations.",
      tech: ["Express.js", "PostgreSQL", "Zod", "JWT Auth", "Postman"],
    },
    {
      title: "E-Commerce Architectures",
      icon: <LineChart className="w-6 h-6 text-rose-400" />,
      desc: "Constructing custom multi-vendor online storefronts with cart persistence, real-time inventories, local delivery calculators, and checkout pathways.",
      tech: ["React", "Redux Toolkit", "MongoDB", "Razorpay", "Tailwind"],
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 w-full max-w-7xl mx-auto overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-[40%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      {/* Title */}
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 className="font-heading text-xs uppercase tracking-widest font-black text-primary mb-2">
          What I Offer
        </h2>
        <p className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
          Professional Services & Solutions
        </p>
        <span className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4" />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((srv, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-2xl glass-card border border-black/5 bg-white/70 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group h-full relative"
          >
            {/* Background spotlight shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />

            <div>
              {/* Icon Container */}
              <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/10 w-fit mb-6 group-hover:bg-gradient-to-r group-hover:from-primary/10 group-hover:to-secondary/10 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-300">
                {srv.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-base font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                {srv.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans mb-6">
                {srv.desc}
              </p>
            </div>

            {/* Badges footer */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/5">
              {srv.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[9px] font-mono text-slate-600 group-hover:text-primary bg-slate-50 px-2 py-0.5 rounded border border-black/5 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
