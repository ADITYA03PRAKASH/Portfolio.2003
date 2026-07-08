"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home",       label: "Home"       },
  { id: "about",      label: "About"      },
  { id: "projects",   label: "Work"       },
  { id: "skills",     label: "Skills"     },
  { id: "experience", label: "Experience" },
  { id: "contact",    label: "Contact"    },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled,      setScrolled]      = useState<boolean>(false);
  const [mobileOpen,    setMobileOpen]    = useState<boolean>(false);

  /* ─── Scroll shadow ─────────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ─── IntersectionObserver active section ────────────────────────── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ─── Scroll helpers ─────────────────────────────────────────────── */
  const scrollTo = useCallback((id: string) => {
    setActiveSection(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  /* ─── Close mobile menu on resize ───────────────────────────────── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ─── Lock body scroll when mobile menu open ─────────────────────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ─── Desktop Pill Navbar ─────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`
          fixed top-5 left-1/2 -translate-x-1/2 z-50
          hidden md:flex items-center gap-2
          bg-white/80 backdrop-blur-xl
          border border-[#F1E4DA]
          rounded-full
          px-3 py-2
          transition-shadow duration-500
          ${scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.08)]" : "shadow-[0_2px_8px_rgba(0,0,0,0.04)]"}
        `}
        style={{ willChange: "transform" }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 pl-1 pr-3 group"
          aria-label="Go to top"
        >
          <span
            className="
              w-8 h-8 rounded-lg
              bg-gradient-to-br from-[#FF6B00] to-[#FF8A00]
              flex items-center justify-center
              font-heading font-black text-white text-xs
              shadow-[0_4px_12px_rgba(255,107,0,0.3)]
              group-hover:shadow-[0_4px_16px_rgba(255,107,0,0.45)]
              transition-all duration-300
              group-hover:scale-105
              select-none
            "
          >
            AD
          </span>
          <span
            className="
              font-heading font-bold text-sm text-[#111111]
              tracking-tight
              group-hover:text-[#FF6B00]
              transition-colors duration-300
            "
          >
            Aditya
          </span>
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-[#F1E4DA]" />

        {/* Nav Links */}
        <nav className="flex items-center gap-0.5 px-1">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`
                  relative px-3.5 py-2 rounded-full
                  text-[13px] font-semibold
                  transition-all duration-300
                  ${isActive
                    ? "text-[#FF6B00]"
                    : "text-[#666666] hover:text-[#111111]"
                  }
                `}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="navActivePill"
                    className="absolute inset-0 rounded-full bg-[#FFE8D6]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{label}</span>

                {/* Active orange dot underneath */}
                {isActive && (
                  <motion.span
                    layoutId="navActiveDot"
                    className="
                      absolute bottom-0.5 left-1/2 -translate-x-1/2
                      w-1 h-1 rounded-full bg-[#FF6B00]
                    "
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="w-px h-5 bg-[#F1E4DA]" />

        {/* Hire Me CTA */}
        <button
          onClick={() => scrollTo("contact")}
          className="
            flex items-center gap-1.5
            bg-gradient-to-r from-[#FF6B00] to-[#FF8A00]
            text-white rounded-full
            px-5 py-2.5
            font-bold text-sm
            shadow-[0_4px_14px_rgba(255,107,0,0.3)]
            hover:shadow-[0_6px_20px_rgba(255,107,0,0.4)]
            hover:scale-[1.03]
            transition-all duration-300
            select-none
            mr-1
          "
        >
          Hire Me
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </motion.header>

      {/* ─── Mobile Header Bar ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`
          fixed top-0 left-0 right-0 z-50
          flex md:hidden items-center justify-between
          px-5 py-3
          bg-white/90 backdrop-blur-xl
          border-b border-[#F1E4DA]
          transition-shadow duration-500
          ${scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.06)]" : ""}
        `}
      >
        {/* Mobile Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2"
          aria-label="Go to top"
        >
          <span
            className="
              w-8 h-8 rounded-lg
              bg-gradient-to-br from-[#FF6B00] to-[#FF8A00]
              flex items-center justify-center
              font-heading font-black text-white text-xs
              shadow-[0_4px_12px_rgba(255,107,0,0.25)]
            "
          >
            AD
          </span>
          <span className="font-heading font-bold text-sm text-[#111111]">
            Aditya
          </span>
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="
            w-9 h-9 rounded-full
            bg-[#FFF4EE] border border-[#F1E4DA]
            flex items-center justify-center
            text-[#FF6B00]
            transition-all duration-200
            hover:bg-[#FFE8D6]
          "
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <X className="w-4 h-4" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <Menu className="w-4 h-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      {/* ─── Mobile Slide-Down Overlay Menu ─────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -16, clipPath: "inset(0 0 100% 0 round 0 0 24px 24px)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0 round 0 0 24px 24px)" }}
              exit={{ opacity: 0, y: -12, clipPath: "inset(0 0 100% 0 round 0 0 24px 24px)" }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="
                fixed top-0 left-0 right-0 z-[45]
                bg-white border-b border-[#F1E4DA]
                pt-20 pb-8 px-6
                flex flex-col gap-2
                md:hidden
                shadow-[0_16px_48px_rgba(0,0,0,0.08)]
              "
            >
              {NAV_ITEMS.map(({ id, label }, i) => {
                const isActive = activeSection === id;
                return (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => scrollTo(id)}
                    className={`
                      relative flex items-center justify-between
                      w-full px-5 py-4 rounded-2xl
                      text-left font-heading font-semibold text-base
                      transition-all duration-200
                      ${isActive
                        ? "bg-[#FFE8D6] text-[#FF6B00]"
                        : "text-[#666666] hover:bg-[#FFF4EE] hover:text-[#111111]"
                      }
                    `}
                  >
                    <span>{label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#FF6B00] flex-shrink-0" />
                    )}
                  </motion.button>
                );
              })}

              {/* Divider */}
              <div className="h-px bg-[#F1E4DA] my-2" />

              {/* Hire Me */}
              <motion.button
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => scrollTo("contact")}
                className="
                  w-full flex items-center justify-center gap-2
                  bg-gradient-to-r from-[#FF6B00] to-[#FF8A00]
                  text-white rounded-full
                  py-4 px-8
                  font-bold font-heading text-base
                  shadow-[0_4px_16px_rgba(255,107,0,0.3)]
                  mt-1
                "
              >
                Hire Me
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
