"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Smooth cursor following
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
      }
    };

    const animate = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const handleEnter = () => setIsHidden(false);
    const handleLeave = () => setIsHidden(true);
    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);

    const addHover = (e: Event) => setIsHovering(true);
    const removeHover = (e: Event) => setIsHovering(false);

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);

    const interactables = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]"
    );
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      {/* Inner dot cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ willChange: "transform" }}
      >
        <div
          className="rounded-full transition-all duration-150"
          style={{
            width: isClicking ? "8px" : "12px",
            height: isClicking ? "8px" : "12px",
            background: isHovering
              ? "linear-gradient(135deg, #FF6B00, #FF8A00)"
              : "#111111",
            opacity: isHidden ? 0 : 1,
            transition: "width 0.15s, height 0.15s, background 0.2s, opacity 0.15s",
          }}
        />
      </div>

      {/* Outer trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ willChange: "transform" }}
      >
        <div
          className="rounded-full border-2 transition-all duration-300"
          style={{
            width: isHovering ? "48px" : "40px",
            height: isHovering ? "48px" : "40px",
            borderColor: isHovering ? "#FF6B00" : "rgba(17,17,17,0.2)",
            opacity: isHidden ? 0 : isHovering ? 0.8 : 0.5,
            background: isHovering ? "rgba(255,107,0,0.08)" : "transparent",
            transform: isClicking ? "scale(0.85)" : "scale(1)",
            transition: "width 0.3s, height 0.3s, border-color 0.3s, opacity 0.2s, transform 0.15s",
          }}
        />
      </div>
    </>
  );
}
