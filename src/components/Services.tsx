"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Bot, BarChart3 } from "lucide-react";

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  iconBg: string;
  learnMore: string;
}

const services: ServiceCard[] = [
  {
    title: "Web Development",
    description:
      "Full-stack web apps, SaaS products, and ecommerce platforms built with modern tech.",
    icon: <Code2 className="w-8 h-8 text-[#FF6B00]" />,
    gradient: "from-[#FF6B00]/10 to-[#FF8A00]/5",
    iconBg: "border-[#FFE8D6]",
    learnMore: "#contact",
  },
  {
    title: "AI & Automation",
    description:
      "Voice agents, chatbots, ML pipelines, and workflow automation systems.",
    icon: <Bot className="w-8 h-8 text-[#6366f1]" />,
    gradient: "from-[#6366f1]/10 to-[#8b5cf6]/5",
    iconBg: "border-[#e0e7ff]",
    learnMore: "#contact",
  },
  {
    title: "SaaS & Platforms",
    description:
      "End-to-end SaaS architectures, dashboards, analytics, and subscription systems.",
    icon: <BarChart3 className="w-8 h-8 text-[#10b981]" />,
    gradient: "from-[#10b981]/10 to-[#059669]/5",
    iconBg: "border-[#d1fae5]",
    learnMore: "#contact",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section id="services" className="section bg-[#FFF8F3]">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <span className="section-label">What I Do</span>
          <h2 className="heading-1 text-[#111111] mt-4">Services</h2>
          <p className="body-lg text-[#666666] mt-4 max-w-xl">
            From concept to deployment — I craft digital products that scale,
            perform, and look exceptional.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 4px 16px rgba(255,107,0,0.08), 0 24px 64px rgba(255,107,0,0.06)",
              }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-card rounded-[40px] p-10 border border-[#F1E4DA] bg-gradient-to-br ${service.gradient} flex flex-col gap-6 relative overflow-hidden group`}
            >
              {/* Decorative orb */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-white/20 blur-2xl"
              />

              {/* Icon container */}
              <div
                className={`w-16 h-16 rounded-[20px] bg-white shadow-sm border ${service.iconBg} p-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 gap-3">
                <h3 className="heading-2 text-[#111111]">{service.title}</h3>
                <p className="body-md text-[#666666] leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>

              {/* Learn more */}
              <a
                href={service.learnMore}
                className="inline-flex items-center gap-2 text-[#FF6B00] font-bold text-sm tracking-wide group/link"
              >
                <span className="group-hover/link:underline underline-offset-2">
                  Learn more
                </span>
                <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
