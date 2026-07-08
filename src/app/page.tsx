"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import MeshBackground from "@/components/MeshBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.floor(Math.random() * 18) + 6;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return next;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #FF6B00, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #FF8A00, transparent 70%)" }} />

      <div className="flex flex-col items-center gap-8 relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 h-16 rounded-2xl flex items-center justify-center font-heading font-black text-white text-xl shadow-[0_8px_32px_rgba(255,107,0,0.3)]"
          style={{ background: "linear-gradient(135deg, #FF6B00, #FF8A00)" }}
        >
          AD
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <p className="font-heading font-black text-2xl text-[#111111] tracking-tight">
            Aditya Prakash Dwivedi
          </p>
          <p className="label text-[#999999] mt-1">Full Stack & AI Engineer</p>
        </motion.div>

        {/* Progress */}
        <div className="flex flex-col items-center gap-3 w-48">
          <div
            className="font-heading font-black text-4xl"
            style={{
              background: "linear-gradient(135deg, #FF6B00, #FF8A00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {progress}%
          </div>
          <div className="w-full h-[3px] bg-[#F1E4DA] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #FF6B00, #FF8A00)",
                width: `${progress}%`,
                transition: "width 0.15s ease",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col min-h-screen"
        >
          <SmoothScroll />
          <CustomCursor />
          <MeshBackground />
          <Navbar />

          <main className="flex-grow flex flex-col relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Services />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}
