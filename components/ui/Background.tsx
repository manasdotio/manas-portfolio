import React from "react";

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen w-full relative">
    {/* Crimson Depth */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #111827 100%)",
      }}
    />
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

export default Background;