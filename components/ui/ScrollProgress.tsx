"use client";

import { useEffect, useRef } from "react";

const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let maxScroll = 0;

    const calculateMaxScroll = () => {
      const el = document.documentElement;
      maxScroll = Math.max(1, el.scrollHeight - el.clientHeight);
    };

    const updateProgress = () => {
      if (!barRef.current) return;
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0;
      barRef.current.style.transform = `scaleX(${progress})`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    calculateMaxScroll();
    const rafId = window.requestAnimationFrame(updateProgress);
    window.addEventListener("resize", calculateMaxScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", calculateMaxScroll);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent pointer-events-none" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-gradient-to-r from-accent/40 via-accent to-accent/40 will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
};

export default ScrollProgress;
