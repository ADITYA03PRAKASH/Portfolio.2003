"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Position for cursor dot
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for outer cursor ring
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);

    // Detect touch device
    const checkDevice = () => {
      const mobile = 
        window.matchMedia("(max-width: 768px)").matches ||
        ("ontouchstart" in window) ||
        (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      const x = e.clientX;
      const y = e.clientY;
      
      cursorX.set(x);
      cursorY.set(y);

      // Update global CSS variables for spotlight effect
      document.documentElement.style.setProperty("--mouse-x", `${x}px`);
      document.documentElement.style.setProperty("--mouse-y", `${y}px`);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Add hover states for interactive elements
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, input, textarea, [role='button'], .interactive-hover"
      );
      
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    // Observer to handle dynamically loaded elements
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    
    addHoverListeners();

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isMounted) return null;

  if (isMobile) {
    // Renders the spotlight overlay even on mobile for visual consistency
    return <div className="cursor-spotlight" />;
  }

  return (
    <>
      {isVisible && <div className="cursor-spotlight" />}
      
      {isVisible && (
        <>
          {/* Outer Ring */}
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
            style={{
              x: ringX,
              y: ringY,
              scale: isHovered ? 1.6 : isClicking ? 0.8 : 1,
              backgroundColor: isHovered ? "rgba(255, 107, 0, 0.05)" : "transparent",
              borderColor: isHovered ? "#FF8A26" : "#FF6B00",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {isHovered && (
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-accent"
                layoutId="cursorDot"
              />
            )}
          </motion.div>

          {/* Inner Dot */}
          {!isHovered && (
            <motion.div
              className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
              style={{
                x: cursorX,
                y: cursorY,
                scale: isClicking ? 0.6 : 1,
              }}
            />
          )}
        </>
      )}
    </>
  );
}
