"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#FFF8F3] border-t border-[#F1E4DA] py-20 px-6 md:px-12 overflow-hidden z-20">
      {/* Giant faint monogram background */}
      <div 
        aria-hidden="true"
        className="absolute bottom-[-40px] right-[-20px] font-heading font-black select-none pointer-events-none text-[220px] leading-none text-[#FF6B00] opacity-[0.02]"
      >
        APD
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* LEFT: Branding */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#FF8A00] flex items-center justify-center font-heading font-black text-white text-sm shadow-[0_4px_12px_rgba(255,107,0,0.25)]">
                AD
              </span>
              <span className="font-heading font-bold text-lg text-[#111111] tracking-tight">
                Aditya
              </span>
            </div>
            <p className="body-md text-[#666666] max-w-xs leading-relaxed">
              Building the future of the web with high-performance systems and intelligent AI design.
            </p>
            <p className="text-xs text-[#999999] mt-2">
              &copy; {currentYear} Aditya Prakash Dwivedi. All rights reserved.
            </p>
          </div>

          {/* CENTER: Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="label text-[#111111]">Quick Links</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Home", id: "home" },
                { label: "About", id: "about" },
                { label: "Work", id: "projects" },
                { label: "Skills", id: "skills" },
                { label: "Experience", id: "experience" },
                { label: "Contact", id: "contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="w-fit text-left text-sm font-semibold text-[#666666] hover:text-[#FF6B00] transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* RIGHT: Socials & Newsletter */}
          <div className="flex flex-col gap-5">
            <h4 className="label text-[#111111]">Connect</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/ADITYA03PRAKASH"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-[#F1E4DA] bg-white flex items-center justify-center text-[#666666] hover:text-[#FF6B00] hover:border-[#FF6B00] hover:shadow-[0_4px_12px_rgba(255,107,0,0.1)] transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-prakash-dwivedi-839943320"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-[#F1E4DA] bg-white flex items-center justify-center text-[#666666] hover:text-[#FF6B00] hover:border-[#FF6B00] hover:shadow-[0_4px_12px_rgba(255,107,0,0.1)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:adityaprakash112233@gmail.com"
                className="w-11 h-11 rounded-full border border-[#F1E4DA] bg-white flex items-center justify-center text-[#666666] hover:text-[#FF6B00] hover:border-[#FF6B00] hover:shadow-[0_4px_12px_rgba(255,107,0,0.1)] transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-2 text-xs text-[#999999] leading-relaxed">
              Designed &amp; Built with visual precision. Delhi, India.
            </div>
          </div>
        </div>

        {/* Divider line for spacing */}
        <div className="border-t border-[#F1E4DA] mt-16" />
      </div>

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[99] w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FF8A00] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(255,107,0,0.35)] hover:scale-110 transition-transform duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
