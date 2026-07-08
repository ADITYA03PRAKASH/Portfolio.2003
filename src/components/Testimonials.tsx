"use client";

import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
}

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      name: "Marcus Vance",
      role: "CTO",
      company: "Starlight SaaS",
      feedback: "Aditya built our complete client onboarding dashboard in Next.js. His speed, clean TypeScript code, and visual attention to detail were unmatched. Highly recommended!",
      rating: 5,
    },
    {
      name: "Nisha Patel",
      role: "Founder",
      company: "HireSync Automation",
      feedback: "We contracted Aditya to engineer our AI talent search scoring engine. The system parsing resumes and sorting skills with OpenAI Embeddings works brilliantly and runs extremely fast.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Lead Engineer",
      company: "SecureNet Systems",
      feedback: "Aditya's work on our real-time cybersecurity Threat Dashboard was outstanding. He implemented WebSocket connections with 1000+ packets/sec updates without lockups. A top-tier dev.",
      rating: 5,
    },
    {
      name: "Sophia Martinez",
      role: "Product Lead",
      company: "CartBloom E-Com",
      feedback: "Aditya developed our localized vendor panels and card checkout integrations. The OTP verification flow and custom cart Redux logic are incredibly robust. Excellent developer.",
      rating: 5,
    },
  ];

  // Double list to create seamless loop
  const list = [...reviews, ...reviews];

  return (
    <section className="relative py-24 px-6 md:px-12 w-full max-w-7xl mx-auto overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-[20%] right-[-15%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Title */}
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 className="font-heading text-xs uppercase tracking-widest font-black text-primary mb-2">
          Testimonials
        </h2>
        <p className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
          Client & Partner Reviews
        </p>
        <span className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4" />
      </div>

      {/* Infinite Slider Marquee Container */}
      <div className="relative w-full overflow-hidden py-4 mask-gradient-x">
        {/* Blur overlays on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />

        {/* Sliding Track */}
        <div className="animate-marquee flex items-center gap-6">
          {list.map((rev, idx) => (
            <div
              key={idx}
              className="w-[280px] sm:w-[350px] shrink-0 p-6 rounded-2xl glass-card border border-black/5 bg-white/70 relative group transition-colors duration-300 hover:border-primary/20 shadow-sm shadow-orange-500/5"
            >
              {/* Soft background light */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: rev.rating }).map((_, rIdx) => (
                  <Star key={rIdx} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>

              {/* Feedback text */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-6 italic">
                &ldquo;{rev.feedback}&rdquo;
              </p>

              {/* User info */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                {/* Initials placeholder avatar */}
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/10 flex items-center justify-center font-heading font-black text-xs text-primary">
                  {rev.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-heading text-xs font-bold text-slate-800">
                    {rev.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-sans mt-0.5">
                    {rev.role} • {rev.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        .mask-gradient-x {
          -webkit-mask-image: linear-gradient(to right, transparent, #000 15%, #000 85%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 15%, #000 85%, transparent);
        }
      `}</style>
    </section>
  );
}
