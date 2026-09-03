import React from "react";

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen w-full relative bg-[#07080b] selection:bg-blue-600 selection:text-white">
    {/* Subtle depth gradient */}
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: "radial-gradient(120% 120% at 50% 10%, #0d1017 0%, #07080b 100%)",
      }}
    />

    {/* Micro-noise grain texture eliminating color banding (desktop only to protect mobile GPU) */}
    <div
      className="fixed inset-0 z-0 pointer-events-none opacity-[0.028] hidden md:block"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />

    <div className="relative z-10">
      {children}
    </div>
  </div>
);

export default Background;