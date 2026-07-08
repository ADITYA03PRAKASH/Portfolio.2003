"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FF6B00 0%, #FF8A00 50%, #FFB347 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 0",
      }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative blurred white circles */}
      <div
        className="absolute top-[-15%] right-[-10%] rounded-full pointer-events-none"
        style={{ width: 500, height: 500, background: "rgba(255,255,255,0.08)", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-[-10%] left-[-8%] rounded-full pointer-events-none"
        style={{ width: 400, height: 400, background: "rgba(255,255,255,0.06)", filter: "blur(80px)" }}
      />

      <div className="container relative z-10 w-full">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-white font-bold text-xs uppercase tracking-[0.12em] mb-6"
              style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-slow" />
              Get In Touch
            </span>
            <h2
              className="text-white text-center"
              style={{
                fontSize: "clamp(44px, 6vw, 80px)",
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                lineHeight: 1.0,
                letterSpacing: "-0.035em",
              }}
            >
              Let&apos;s Build
              <br />
              Something Great
            </h2>
            <p className="text-white/75 text-lg mt-4 leading-relaxed">
              Interested in collaborating or discussing job opportunities? Let&apos;s connect!
            </p>
          </motion.div>

          {/* LinkedIn Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 48, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[40px] p-8 md:p-12 text-center flex flex-col items-center gap-6"
            style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)" }}
          >
            <div className="w-16 h-16 rounded-full bg-[#FFF4EE] flex items-center justify-center border border-[#F1E4DA]">
              <LinkedinIcon className="w-8 h-8 text-[#FF6B00]" />
            </div>

            <div className="flex flex-col gap-3 max-w-lg">
              <h3 className="font-heading font-black text-2xl md:text-3xl text-[#111111] tracking-tight">
                Let&apos;s Connect on LinkedIn
              </h3>
              <p className="body-md text-[#666666] leading-relaxed">
                Looking for a Full Stack Developer or interested in collaborating on a project? Feel free to connect with me on LinkedIn. I&apos;m always open to discussing job opportunities, freelance work, internships, and exciting tech projects.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/aditya-prakash-dwivedi-839943320"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full sm:w-auto justify-center px-8 py-4 text-base font-bold flex items-center gap-2 group shadow-[0_4px_16px_rgba(255,107,0,0.25)] hover:shadow-[0_8px_24px_rgba(255,107,0,0.4)]"
            >
              <span>💼 Connect on LinkedIn</span>
            </a>

            {/* Professional Info Card Divider */}
            <div className="w-full h-px bg-[#F1E4DA] my-2" />

            {/* Professional Info Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left sm:text-center">
              <div className="bg-[#FFF8F3] border border-[#F1E4DA] rounded-2xl p-4 flex flex-col gap-1 items-start sm:items-center justify-center">
                <span className="text-lg">📍</span>
                <span className="text-xs font-semibold text-[#666666] uppercase tracking-wider">Location</span>
                <span className="text-sm font-bold text-[#111111]">India</span>
              </div>
              <div className="bg-[#FFF8F3] border border-[#F1E4DA] rounded-2xl p-4 flex flex-col gap-1 items-start sm:items-center justify-center">
                <span className="text-lg">💼</span>
                <span className="text-xs font-semibold text-[#666666] uppercase tracking-wider">Role</span>
                <span className="text-sm font-bold text-[#111111] whitespace-nowrap">Full Stack Developer</span>
              </div>
              <div className="bg-[#FFF8F3] border border-[#F1E4DA] rounded-2xl p-4 flex flex-col gap-1 items-start sm:items-center justify-center">
                <span className="text-lg">🚀</span>
                <span className="text-xs font-semibold text-[#666666] uppercase tracking-wider">Status</span>
                <span className="text-sm font-bold text-[#111111] leading-tight">Open to Jobs &amp; Freelance</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10"
          >
            <a
              href="mailto:adityaprakash112233@gmail.com"
              className="flex items-center gap-2 text-white/80 hover:text-white font-body text-sm transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              adityaprakash112233@gmail.com
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/30" />
            <a
              href="https://github.com/ADITYA03PRAKASH"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white font-body text-sm transition-colors duration-200"
            >
              <GithubIcon className="w-4 h-4" />
              ADITYA03PRAKASH
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/30" />
            <a
              href="https://www.linkedin.com/in/aditya-prakash-dwivedi-839943320"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white font-body text-sm transition-colors duration-200"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
