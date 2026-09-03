"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CommandMenu from "../ui/CommandMenu";
import { playClickSound, playToggleSound, isSoundEnabled, setSoundEnabled } from "../ui/sound";

const NAV_LINKS = [
  { label: "Work", href: "#projects", keyHint: "W" },
  { label: "Stack", href: "#stack", keyHint: "S" },
  { label: "About", href: "#about", keyHint: "A" },
  { label: "Contact", href: "#contact", keyHint: "C" },
];

const Header = () => {
  const [soundState, setSoundState] = useState(false);

  useEffect(() => {
    setSoundState(isSoundEnabled());
    const handleSoundChange = () => setSoundState(isSoundEnabled());
    window.addEventListener("portfolio_sound_change", handleSoundChange);
    return () => window.removeEventListener("portfolio_sound_change", handleSoundChange);
  }, []);

  // Keyboard shortcut listener for fast navigation: W, S, A, C (when not in input)
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName;
      if (activeTag === "INPUT" || activeTag === "TEXTAREA") return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const key = e.key.toUpperCase();
      const match = NAV_LINKS.find((n) => n.keyHint === key);
      if (match) {
        playClickSound();
        window.location.hash = match.href.replace("#", "");
      }
    };

    window.addEventListener("keydown", handleGlobalKey);
    return () => window.removeEventListener("keydown", handleGlobalKey);
  }, []);

  const handleSoundToggle = () => {
    const next = !soundState;
    setSoundEnabled(next);
    setSoundState(next);
    playToggleSound(next);
  };

  return (
    <header className="sticky top-0 z-50 -mx-4 sm:-mx-6 -mt-4 px-4 sm:px-6 py-2.5 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-[#202430] lg:-mx-24 lg:px-24 transition-colors">
      <nav className="mx-auto flex w-full max-w-350 items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => playClickSound()}
          className="flex items-baseline gap-0 text-text-primary group"
        >
          <span className="text-2xl font-bold leading-none tracking-tight group-hover:text-blue-400 transition-colors">
            MS
          </span>
          <span className="font-extrabold text-blue-500 font-instrument text-4xl leading-none -mt-1 -ml-0.5">
            .
          </span>
        </Link>

        {/* Desktop nav — section anchors with keyboard hints */}
        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map(({ label, href, keyHint }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => playClickSound()}
                className="group flex items-center gap-1.5 text-xs font-medium text-[#9ca3af] transition-colors hover:text-white"
              >
                <span>{label}</span>
                <kbd className="hidden lg:inline-block rounded bg-[#161922] px-1 py-0.2 font-mono text-[9px] text-[#6b7280] group-hover:text-blue-400 group-hover:bg-[#1e2330] border border-[#232838] transition-colors">
                  {keyHint}
                </kbd>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Utility: Command Palette Search & Sound Toggle */}
        <div className="flex items-center gap-2.5">
          <CommandMenu />

          {/* Sound Toggle Button */}
          <button
            onClick={handleSoundToggle}
            title={soundState ? "Mute tactile sounds" : "Enable tactile sounds"}
            className={`hidden sm:inline-flex items-center justify-center rounded-md border p-1.5 transition-colors cursor-pointer ${
              soundState
                ? "border-blue-500/40 bg-blue-500/10 text-blue-400"
                : "border-[#262a36] bg-[#12141c] text-[#6b7280] hover:text-[#9ca3af] hover:border-[#3b4461]"
            }`}
          >
            {soundState ? (
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            ) : (
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15zM17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            onClick={() => playClickSound()}
            className="rounded-md border border-[#2d3345] bg-[#12151e] px-3 py-1 text-xs font-semibold text-[#d1d5db] transition-colors hover:border-blue-500/50 hover:bg-[#181c28] hover:text-white"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
