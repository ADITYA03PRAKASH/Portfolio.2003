"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GitHub, LinkedIn } from "@/components/SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-slate-950/20 backdrop-blur-md py-12 px-6 md:px-12 mt-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand signature */}
        <div className="flex items-center gap-2 select-none">
          <span className="w-6 h-6 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-heading font-black text-white text-[10px]">
            AD
          </span>
          <span className="font-heading text-xs tracking-widest text-slate-400 uppercase font-bold">
            Aditya Dwivedi &bull; Portfolio
          </span>
        </div>

        {/* Links and copyright */}
        <div className="text-center md:text-right space-y-1">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Aditya Prakash Dwivedi. All rights reserved.
          </p>
          <p className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">
            Handcrafted with Next.js & Framer Motion
          </p>
        </div>

        {/* Action Widgets */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/20 text-slate-400 hover:text-slate-200 transition-all cursor-pointer"
            aria-label="GitHub"
          >
            <GitHub className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/20 text-slate-400 hover:text-slate-200 transition-all cursor-pointer"
            aria-label="LinkedIn"
          >
            <LinkedIn className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400 hover:text-cyan-200 transition-all cursor-pointer flex items-center justify-center"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
