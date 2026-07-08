"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Compass, User, Cpu, Briefcase, FileCode, Mail, Award, MessageSquare } from "lucide-react";
import AudioToggle from "./AudioToggle";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = [
    { id: "home", label: "Home", icon: <Compass className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <User className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Cpu className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <Briefcase className="w-4 h-4" /> },
    { id: "experience", label: "Experience", icon: <Award className="w-4 h-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // IntersectionObserver to watch active section
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // triggers when section is in middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navbar (Top Floating Dock) */}
      <header
        className={`fixed top-0 left-0 w-full z-40 hidden md:flex items-center justify-between px-10 py-4 transition-all duration-500 ${
          scrolled
            ? "bg-white/70 backdrop-blur-md border-b border-black/5 py-3 shadow-[0_2px_15px_rgba(0,0,0,0.01)]"
            : "bg-transparent py-5"
        }`}
      >
        {/* Brand Logo */}
        <div
          onClick={() => handleClick("home")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center font-heading font-black text-white text-xs group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(255,107,0,0.25)]">
            AD
          </span>
          <span className="font-heading font-bold text-sm tracking-widest text-slate-800 group-hover:text-primary transition-colors uppercase">
            Aditya.Dev
          </span>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1.5 bg-white/70 backdrop-blur-lg border border-black/5 px-2.5 py-1.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive ? "text-primary" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeDockIndicator"
                    className="absolute inset-0 rounded-full bg-primary/5 border border-primary/10 shadow-[0_0_10px_rgba(255,107,0,0.05)] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Audio control widget */}
        <div className="flex items-center gap-3">
          <AudioToggle />
        </div>
      </header>

      {/* Mobile Navbar (Bottom Floating Dock) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] z-40 md:hidden flex items-center justify-between bg-white/75 backdrop-blur-xl border border-black/5 px-4 py-2.5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
        <nav className="flex items-center justify-between w-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`relative p-2 rounded-xl flex flex-col items-center justify-center gap-0.5 transition-all duration-300 cursor-pointer ${
                  isActive ? "text-primary scale-110" : "text-slate-500 hover:text-slate-800"
                }`}
                aria-label={`Go to ${item.label}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeMobileDockIndicator"
                    className="absolute inset-0 rounded-xl bg-slate-100 border border-black/5 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.icon}
                <span className="text-[8px] uppercase tracking-wider font-bold">
                  {item.label}
                </span>
              </button>
            );
          })}
          <div className="border-l border-black/10 h-6 mx-1" />
          <AudioToggle />
        </nav>
      </div>
    </>
  );
}
