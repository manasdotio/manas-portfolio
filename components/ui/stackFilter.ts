"use client";

import { useEffect, useState } from "react";
import { playClickSound } from "./sound";

let activeTechFilter: string | null = null;

export function getSelectedTech(): string | null {
  return activeTechFilter;
}

export function setTechFilter(tech: string | null): void {
  activeTechFilter = tech;
  playClickSound();
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("portfolio_tech_filter", { detail: tech }));
  }
}

export function useTechFilter() {
  const [selectedTech, setSelected] = useState<string | null>(activeTechFilter);

  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<string | null>;
      setSelected(custom.detail);
    };

    window.addEventListener("portfolio_tech_filter", handler);
    return () => window.removeEventListener("portfolio_tech_filter", handler);
  }, []);

  return {
    selectedTech,
    setTechFilter,
  };
}
