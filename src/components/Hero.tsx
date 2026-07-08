"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TermIcon, ArrowRight, Download, Mail, ChevronRight } from "lucide-react";

const roles = ["Full Stack Developer", "AI Engineer", "Software Architect"];

interface ConsoleLine {
  text: string;
  type: "input" | "output" | "error" | "system";
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Terminal State
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<ConsoleLine[]>([
    { text: "Welcome to Aditya's Interactive Shell v1.0.0", type: "system" },
    { text: "Type 'help' to see list of available commands.", type: "system" },
    { text: "", type: "output" },
  ]);
  const consoleBottomRef = useRef<HTMLDivElement>(null);

  // typing effect logic for roles
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  // Terminal submission logic
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...terminalHistory, { text: `aditya@portfolio:~$ ${terminalInput}`, type: "input" as const }];

    switch (cmd) {
      case "help":
        newHistory.push(
          { text: "Available commands:", type: "output" },
          { text: "  about     - Learn more about my professional profile", type: "output" },
          { text: "  skills    - View a summarized skills breakdown", type: "output" },
          { text: "  projects  - View featured project list", type: "output" },
          { text: "  clear     - Clean up terminal history", type: "output" },
          { text: "  socials   - View links to get in touch", type: "output" }
        );
        break;
      case "about":
        newHistory.push(
          { text: "Aditya Prakash Dwivedi - AI & Full Stack Developer", type: "output" },
          { text: "Experience: Full Stack & AI Developer at Tevatel Software Solutions.", type: "output" },
          { text: "Availability: Freelance, Full-Time, Contract", type: "output" },
          { text: "Location: Delhi, India (Remote Global)", type: "output" }
        );
        break;
      case "skills":
        newHistory.push(
          { text: "Technical Skills Matrix:", type: "output" },
          { text: "  Frontend:  ■■■■■■■■■□ 90% (Next.js, React, TS, Tailwind)", type: "output" },
          { text: "  Backend:   ■■■■■■■■□□ 80% (Node, Express, REST/GraphQL)", type: "output" },
          { text: "  DevOps:    ■■■■■■■■□□ 80% (Docker, CI/CD, Vercel, Linux)", type: "output" },
          { text: "  Languages: ■■■■■■■■■□ 90% (JS, TS, Python, SQL)", type: "output" }
        );
        break;
      case "projects":
        newHistory.push(
          { text: "Featured Projects:", type: "output" },
          { text: "  1. AI Voice Agent - Conversational assistant at Tevatel", type: "output" },
          { text: "  2. EHub - Full-stack startup site (ehubind.com)", type: "output" },
          { text: "  3. Smart Task Manager - Full-stack MERN board application", type: "output" },
          { text: "Scroll down to the Projects section to see full case studies!", type: "output" }
        );
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      case "socials":
        newHistory.push(
          { text: "GitHub:   https://github.com/ADITYA03PRAKASH", type: "output" },
          { text: "LinkedIn: https://www.linkedin.com/in/aditya-prakash-dwivedi-839943320", type: "output" },
          { text: "Email:    adityaprakash112233@gmail.com", type: "output" }
        );
        break;
      default:
        newHistory.push({ text: `Command not found: '${cmd}'. Type 'help' for options.`, type: "error" });
    }

    setTerminalHistory(newHistory);
    setTerminalInput("");

    // Auto scroll to bottom
    setTimeout(() => {
      consoleBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 overflow-hidden md:px-12"
    >
      {/* Decorative background grid lights */}
      <div className="absolute top-[20%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      {/* Main Content Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Headline Column */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex self-center lg:self-start items-center gap-2 px-3 py-1 rounded-full border border-primary/10 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase animate-pulse"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            Open for Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1]"
          >
            Hello, I&apos;m <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent font-black drop-shadow-[0_0_20px_rgba(255,107,0,0.15)]">
              Aditya Prakash Dwivedi
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-2xl text-slate-700 font-semibold h-8 min-h-[32px] flex items-center justify-center lg:justify-start"
          >
            I build next-generation&nbsp;
            <span className="text-primary border-r-2 border-primary animate-pulse pr-1">
              {currentText}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed mx-auto lg:mx-0 font-sans"
          >
            Creating premium full stack web platforms, intelligent AI voice agents, and high-performance automation software that elevates businesses and developers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-4"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold text-sm tracking-wide shadow-[0_4px_25px_rgba(255,107,0,0.2)] hover:scale-105 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="px-6 py-3 rounded-full glass-card hover:bg-primary/5 border border-black/5 hover:border-primary/20 text-slate-700 hover:text-primary font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              Hire Me
              <Mail className="w-4 h-4 text-primary" />
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-black/5 hover:bg-black/10 border border-transparent text-slate-600 hover:text-slate-800 font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              Resume
              <Download className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Right Terminal Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          {/* Glass Terminal container */}
          <div className="w-full max-w-[450px] aspect-[4/3] rounded-3xl border border-black/5 glass-card bg-white/70 overflow-hidden shadow-2xl relative flex flex-col">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-black/5 bg-slate-50 select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-mono tracking-tight">
                <TermIcon className="w-3 h-3 text-primary" />
                aditya@shell:~
              </div>
              <span className="w-12" /> {/* spacing element */}
            </div>

            {/* Terminal Output Area */}
            <div className="flex-1 overflow-y-auto p-4 font-mono text-xs space-y-2.5 terminal-scanline scrollbar-thin">
              {terminalHistory.map((line, idx) => (
                <div
                  key={idx}
                  className={`leading-relaxed break-words whitespace-pre-wrap ${
                    line.type === "input"
                      ? "text-primary font-bold"
                      : line.type === "error"
                      ? "text-red-600 font-bold"
                      : line.type === "system"
                      ? "text-purple-600 font-semibold"
                      : "text-slate-700"
                  }`}
                >
                  {line.text}
                </div>
              ))}
              <div ref={consoleBottomRef} />
            </div>

            {/* Terminal Input Form */}
            <form
              onSubmit={handleTerminalSubmit}
              className="flex items-center gap-2 p-3 border-t border-black/5 bg-slate-50/50"
            >
              <ChevronRight className="w-4 h-4 text-primary shrink-0" />
              <input
                id="terminal-cli-input"
                type="text"
                className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-slate-800 placeholder-slate-400"
                placeholder="Type 'help'..."
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                autoComplete="off"
                spellCheck="false"
              />
            </form>
          </div>
        </motion.div>
      </div>

      {/* Floating details banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 flex items-center gap-8 text-[11px] uppercase font-bold tracking-widest text-slate-400 pointer-events-none select-none z-10"
      >
        <span>available worldwide</span>
        <span>•</span>
        <span>luxury experiences</span>
        <span>•</span>
        <span>ai automation</span>
      </motion.div>
    </section>
  );
}
