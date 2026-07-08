"use client";

import { useRef, useEffect } from "react";
import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
  amount?: number;
}

const directionMap = {
  up:    { y: 40,  x: 0   },
  down:  { y: -40, x: 0   },
  left:  { x: 40,  y: 0   },
  right: { x: -40, y: 0   },
  none:  { x: 0,   y: 0   },
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
  amount = 0.15,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });
  const initial = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...initial }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
