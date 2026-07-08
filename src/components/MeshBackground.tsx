"use client";

import { useEffect } from "react";

export default function MeshBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,107,0,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Primary orange blob — top right */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, #FF6B00 0%, #FF8A00 40%, transparent 70%)",
          animation: "drift 16s ease-in-out infinite",
          borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
        }}
      />

      {/* Secondary blob — bottom left */}
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] opacity-15"
        style={{
          background:
            "radial-gradient(ellipse at center, #FF8A00 0%, #FFE8D6 50%, transparent 70%)",
          animation: "drift 20s ease-in-out infinite reverse",
          borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%",
        }}
      />

      {/* Subtle center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.04]"
        style={{
          background:
            "radial-gradient(ellipse at center, #FF6B00 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
