"use client";

import { useEffect, useState, useRef } from "react";
import { Search, Terminal, FileText, Compass, ExternalLink, Sparkles, X } from "lucide-react";

interface CommandItem {
  icon: React.ReactNode;
  label: string;
  category: string;
  shortcut?: string;
  action: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Toggle Command Palette on Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Reset indices and focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setActiveIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const commands: CommandItem[] = [
    {
      category: "Navigation",
      label: "Go to Home",
      icon: <Compass className="w-4 h-4 text-blue-400" />,
      shortcut: "G H",
      action: () => scrollToSection("home"),
    },
    {
      category: "Navigation",
      label: "Go to About Journey",
      icon: <Compass className="w-4 h-4 text-blue-400" />,
      shortcut: "G A",
      action: () => scrollToSection("about"),
    },
    {
      category: "Navigation",
      label: "Go to Skills Showcase",
      icon: <Compass className="w-4 h-4 text-cyan-400" />,
      shortcut: "G S",
      action: () => scrollToSection("skills"),
    },
    {
      category: "Navigation",
      label: "Go to Projects Portfolio",
      icon: <Compass className="w-4 h-4 text-purple-400" />,
      shortcut: "G P",
      action: () => scrollToSection("projects"),
    },
    {
      category: "Navigation",
      label: "Go to Professional Experience",
      icon: <Compass className="w-4 h-4 text-purple-400" />,
      shortcut: "G E",
      action: () => scrollToSection("experience"),
    },
    {
      category: "Navigation",
      label: "Go to Contact",
      icon: <Compass className="w-4 h-4 text-red-400" />,
      shortcut: "G C",
      action: () => scrollToSection("contact"),
    },
    {
      category: "Quick Actions",
      label: "Interact with Terminal",
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      shortcut: "T E",
      action: () => {
        setIsOpen(false);
        const termInput = document.getElementById("terminal-cli-input");
        if (termInput) {
          termInput.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => termInput.focus(), 800);
        }
      },
    },
    {
      category: "Quick Actions",
      label: "Open Resume PDF",
      icon: <FileText className="w-4 h-4 text-yellow-400" />,
      shortcut: "D R",
      action: () => {
        setIsOpen(false);
        window.open("/resume.pdf", "_blank");
      },
    },
    {
      category: "Social Links",
      label: "Visit GitHub Profile",
      icon: <ExternalLink className="w-4 h-4 text-purple-400" />,
      shortcut: "G I",
      action: () => {
        setIsOpen(false);
        window.open("https://github.com/ADITYA03PRAKASH", "_blank");
      },
    },
    {
      category: "Social Links",
      label: "Connect on LinkedIn",
      icon: <ExternalLink className="w-4 h-4 text-blue-400" />,
      shortcut: "L I",
      action: () => {
        setIsOpen(false);
        window.open("https://www.linkedin.com/in/aditya-prakash-dwivedi-839943320", "_blank");
      },
    },
  ];

  // Filter commands by search term
  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  // Key navigation within list
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[activeIndex]) {
        filteredCommands[activeIndex].action();
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 flex items-center gap-2 px-3 py-2.5 rounded-full glass-card border border-white/5 hover:border-cyan-500/40 text-slate-400 hover:text-slate-200 transition-all duration-300 z-50 group cursor-pointer text-xs font-semibold"
        title="Open Command Palette (Ctrl+K)"
      >
        <Search className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
        <span className="hidden md:inline font-mono tracking-tight bg-white/5 px-1.5 py-0.5 rounded text-[10px] text-white/50 border border-white/5">
          Ctrl K
        </span>
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 w-full h-full bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[550px] rounded-2xl border border-white/10 glass-card bg-slate-950/80 overflow-hidden shadow-2xl relative"
        onKeyDown={handleKeyDown}
      >
        {/* Glow overlay */}
        <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-48 h-12 bg-cyan-500/10 blur-xl pointer-events-none" />

        {/* Input Bar */}
        <div className="flex items-center gap-3 p-4 border-b border-white/10">
          <Search className="w-5 h-5 text-cyan-400 animate-pulse" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent border-none outline-none text-slate-200 text-sm placeholder-slate-500 font-sans"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setActiveIndex(0);
            }}
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-500 hover:text-slate-200 p-1 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Commands List */}
        <div className="max-h-[320px] overflow-y-auto p-2 scrollbar-thin">
          {filteredCommands.length > 0 ? (
            <div>
              {/* Group headings logic */}
              {Object.entries(
                filteredCommands.reduce((acc, cmd) => {
                  if (!acc[cmd.category]) acc[cmd.category] = [];
                  acc[cmd.category].push(cmd);
                  return acc;
                }, {} as Record<string, typeof filteredCommands>)
              ).map(([category, items]) => (
                <div key={category} className="mb-2">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500 px-3 py-1.5 font-sans">
                    {category}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    {items.map((item) => {
                      const absoluteIndex = filteredCommands.indexOf(item);
                      const isSelected = absoluteIndex === activeIndex;

                      return (
                        <div
                          key={item.label}
                          onClick={item.action}
                          onMouseEnter={() => setActiveIndex(absoluteIndex)}
                          className={`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-all duration-150 ${
                            isSelected
                              ? "bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-cyan-500/20 text-cyan-200"
                              : "border border-transparent text-slate-400 hover:text-slate-300"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={isSelected ? "scale-110 transition-transform" : ""}>
                              {item.icon}
                            </span>
                            <span className="text-xs font-sans font-medium">{item.label}</span>
                          </div>
                          
                          {item.shortcut && (
                            <kbd className="hidden sm:inline-flex font-mono text-[9px] bg-white/5 px-2 py-0.5 rounded border border-white/5 text-slate-500 select-none">
                              {item.shortcut}
                            </kbd>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center text-slate-500 gap-2">
              <Sparkles className="w-8 h-8 text-slate-600" />
              <p className="text-xs font-sans">No matching commands found.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/5 bg-slate-950/40 text-[10px] text-slate-500 font-sans">
          <div className="flex gap-3">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
            <span>esc to close</span>
          </div>
          <span className="font-mono text-cyan-500/40">v1.0.0</span>
        </div>
      </div>
    </div>
  );
}
