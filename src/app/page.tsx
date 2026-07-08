"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";
import CanvasBackground from "@/components/CanvasBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import AIChatWidget from "@/components/AIChatWidget";
import CommandPalette from "@/components/CommandPalette";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment preloader progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300); // short delay after 100%
          return 100;
        }
        // Random incremental steps for natural feel
        const next = prev + Math.floor(Math.random() * 15) + 5;
        return next > 100 ? 100 : next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          /* Luxury Loading Preloader Screen */
          <motion.div
            key="preloader"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 w-full h-full bg-[#FFFFFF] z-[999] flex flex-col items-center justify-center font-heading"
          >
            {/* Ambient background blob */}
            <div className="absolute w-[30vw] h-[30vw] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

            <div className="flex flex-col items-center gap-4 relative z-10">
              {/* Premium Logomark */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center font-black text-white text-xl shadow-[0_0_30px_rgba(255,107,0,0.25)]"
              >
                AD
              </motion.div>

              <h1 className="text-xs uppercase tracking-[0.25em] font-extrabold text-slate-500 mt-2">
                Aditya Dwivedi &bull; System Architect
              </h1>

              {/* Progress counter text */}
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-6 select-none font-mono">
                {progress}%
              </div>

              {/* Progress bar track */}
              <div className="w-48 h-[3px] bg-slate-100 rounded-full overflow-hidden border border-black/5 mt-2">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Render Main Content shell */}
      {!loading && (
        <div className="relative flex flex-col min-h-screen">
          {/* Smooth Scroll Lenis handler */}
          <SmoothScroll />
          
          {/* Custom cursor with spotlight glows */}
          <CustomCursor />
          
          {/* High performance Canvas particle background */}
          <CanvasBackground />

          {/* Core Layout Navbar */}
          <Navbar />

          <main className="flex-grow flex flex-col items-center">
            {/* Sections */}
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Services />
            <Testimonials />
            <Contact />
          </main>

          {/* Bottom command palette hook */}
          <CommandPalette />

          {/* Interactive client AI Assistant chat widget */}
          <AIChatWidget />

          {/* Footer signature and tools */}
          <Footer />
        </div>
      )}
    </>
  );
}

