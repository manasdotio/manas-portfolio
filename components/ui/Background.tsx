import type { ReactNode } from "react";

const Background = ({ children }: { children: ReactNode }) => (
  <div className="relative min-h-screen w-full bg-[#050505]">
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="bg-grid" />
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="grain" />
    </div>
    <div className="relative z-10">{children}</div>
  </div>
);

export default Background;
