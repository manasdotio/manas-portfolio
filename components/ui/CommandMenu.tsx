"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { playClickSound, playToggleSound, isSoundEnabled, setSoundEnabled } from "./sound";

type CommandItem = {
  id: string;
  title: string;
  category: "Navigation" | "Projects" | "Actions" | "Preferences";
  subtitle?: string;
  badge?: string;
  action: () => void;
};

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [soundState, setSoundState] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSoundState(isSoundEnabled());
    const handleSoundChange = () => setSoundState(isSoundEnabled());
    window.addEventListener("portfolio_sound_change", handleSoundChange);
    return () => window.removeEventListener("portfolio_sound_change", handleSoundChange);
  }, []);

  const commands: CommandItem[] = useMemo(() => [
    // Navigation
    {
      id: "nav-work",
      title: "Jump to Selected Work",
      category: "Navigation",
      badge: "Projects",
      action: () => {
        window.location.hash = "projects";
        setIsOpen(false);
      },
    },
    {
      id: "nav-stack",
      title: "Jump to Tech Stack",
      category: "Navigation",
      badge: "Skills",
      action: () => {
        window.location.hash = "stack";
        setIsOpen(false);
      },
    },
    {
      id: "nav-about",
      title: "Jump to About & Timeline",
      category: "Navigation",
      badge: "Bio",
      action: () => {
        window.location.hash = "about";
        setIsOpen(false);
      },
    },
    {
      id: "nav-contact",
      title: "Jump to Contact",
      category: "Navigation",
      badge: "Get in touch",
      action: () => {
        window.location.hash = "contact";
        setIsOpen(false);
      },
    },

    // Projects
    {
      id: "proj-os",
      title: "Operating System — Live Demo",
      subtitle: "operating-system-nine.vercel.app",
      category: "Projects",
      badge: "Live App",
      action: () => {
        window.open("https://operating-system-nine.vercel.app", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "proj-intentional-yt",
      title: "Intentional YT — Firefox Add-on",
      subtitle: "Distraction-free YouTube extension",
      category: "Projects",
      badge: "Add-on",
      action: () => {
        window.open("https://addons.mozilla.org/en-US/firefox/addon/intentional-yt/", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "proj-intentional-yt-gh",
      title: "Intentional YT — Source Code",
      subtitle: "github.com/manasdotio/intentional-yt",
      category: "Projects",
      badge: "GitHub",
      action: () => {
        window.open("https://github.com/manasdotio/intentional-yt", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "proj-vividstream",
      title: "VividStream — GitHub Repository",
      subtitle: "github.com/manasdotio/vividstream",
      category: "Projects",
      badge: "MERN Stack",
      action: () => {
        window.open("https://github.com/manasdotio/vividstream", "_blank");
        setIsOpen(false);
      },
    },

    // Actions
    {
      id: "act-copy-email",
      title: "Copy Email Address",
      subtitle: "manasdotio@gmail.com",
      category: "Actions",
      badge: "Clipboard",
      action: () => {
        navigator.clipboard.writeText("manasdotio@gmail.com");
        setCopiedMessage("Email copied to clipboard!");
        setTimeout(() => {
          setCopiedMessage(null);
          setIsOpen(false);
        }, 1200);
      },
    },
    {
      id: "act-resume",
      title: "Download Resume",
      subtitle: "Opens resume PDF in new tab",
      category: "Actions",
      badge: "PDF",
      action: () => {
        window.open("/resume.pdf", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "act-gh",
      title: "View GitHub Profile",
      subtitle: "github.com/manasdotio",
      category: "Actions",
      badge: "Profile",
      action: () => {
        window.open("https://github.com/manasdotio", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "act-linkedin",
      title: "View LinkedIn Profile",
      subtitle: "linkedin.com/in/manasdotio",
      category: "Actions",
      badge: "Network",
      action: () => {
        window.open("https://www.linkedin.com/in/manasdotio", "_blank");
        setIsOpen(false);
      },
    },

    // Preferences
    {
      id: "pref-sound",
      title: soundState ? "Disable Tactile Sounds" : "Enable Tactile Sounds",
      subtitle: "Synthesized Web Audio clicks on interactions",
      category: "Preferences",
      badge: soundState ? "ON" : "OFF",
      action: () => {
        const next = !soundState;
        setSoundEnabled(next);
        setSoundState(next);
        playToggleSound(next);
      },
    },
  ], [soundState]);

  const filtered = useMemo(() => {
    if (!search.trim()) return commands;
    const q = search.toLowerCase();
    return commands.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        (c.subtitle && c.subtitle.toLowerCase().includes(q)) ||
        c.category.toLowerCase().includes(q)
    );
  }, [commands, search]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  // Global keybindings
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is actively typing in another form field
      const activeTag = document.activeElement?.tagName;
      const isInput = activeTag === "INPUT" || activeTag === "TEXTAREA";

      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => {
          if (!prev) playClickSound();
          return !prev;
        });
        return;
      }

      if (e.key === "/" && !isInput && !isOpen) {
        e.preventDefault();
        playClickSound();
        setIsOpen(true);
        return;
      }

      if (isOpen) {
        if (e.key === "Escape") {
          e.preventDefault();
          setIsOpen(false);
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          playClickSound();
          setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          playClickSound();
          setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
        } else if (e.key === "Enter") {
          e.preventDefault();
          const target = filtered[selectedIndex];
          if (target) {
            playClickSound();
            target.action();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearch("");
      setCopiedMessage(null);
    }
  }, [isOpen]);

  if (!isOpen) {
    return (
      <button
        onClick={() => {
          playClickSound();
          setIsOpen(true);
        }}
        title="Open Command Palette (⌘K)"
        className="group inline-flex items-center gap-2 rounded-md border border-[#262a36] bg-[#12141c]/80 px-2.5 py-1 text-xs text-[#9ca3af] transition-colors hover:border-[#3b4461] hover:text-white cursor-pointer"
      >
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden sm:inline">Search</span>
        <kbd className="rounded bg-[#1e2330] px-1.5 py-0.5 font-mono text-[10px] text-[#9ca3af] group-hover:text-white">
          ⌘K
        </kbd>
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/75 p-4 pt-16 sm:pt-24 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-xl overflow-hidden rounded-xl border border-[#2d3345] bg-[#0e1017] shadow-2xl shadow-black/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-[#232736] px-4 py-3">
          <svg className="h-4 w-4 text-[#60a5fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type a command or jump to..."
            className="ml-3 w-full bg-transparent font-sans text-sm text-white placeholder-[#6b7280] outline-none"
          />
          <kbd
            onClick={() => setIsOpen(false)}
            className="cursor-pointer rounded border border-[#2d3345] bg-[#171a24] px-1.5 py-0.5 font-mono text-[10px] text-[#9ca3af] hover:text-white"
          >
            ESC
          </kbd>
        </div>

        {copiedMessage && (
          <div className="bg-green-500/10 border-b border-green-500/20 px-4 py-2 text-center font-mono text-xs text-green-400">
            {copiedMessage}
          </div>
        )}

        {/* Results List */}
        <div className="max-h-[360px] overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#6b7280]">
              No commands matching &ldquo;{search}&rdquo;
            </div>
          ) : (
            filtered.map((cmd, i) => {
              const isSelected = i === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={() => {
                    playClickSound();
                    cmd.action();
                  }}
                  onMouseEnter={() => setSelectedIndex(i)}
                  className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-xs transition-colors ${
                    isSelected
                      ? "bg-[#1f2538] text-white"
                      : "text-[#9ca3af] hover:bg-[#151824] hover:text-white"
                  }`}
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium text-white">{cmd.title}</span>
                    {cmd.subtitle && (
                      <span className="font-mono text-[11px] text-[#6b7280]">{cmd.subtitle}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {cmd.badge && (
                      <span className="rounded bg-[#141722] px-2 py-0.5 font-mono text-[10px] text-[#818cf8] border border-[#282d3f]">
                        {cmd.badge}
                      </span>
                    )}
                    {isSelected && (
                      <span className="font-mono text-[10px] text-[#60a5fa]">↵</span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Palette Footer Help */}
        <div className="flex items-center justify-between border-t border-[#1f2330] bg-[#0a0c12] px-4 py-2 text-[11px] text-[#6b7280]">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="rounded bg-[#171a24] px-1 py-0.5 font-mono text-[10px]">↑</kbd>{" "}
              <kbd className="rounded bg-[#171a24] px-1 py-0.5 font-mono text-[10px]">↓</kbd> navigate
            </span>
            <span>
              <kbd className="rounded bg-[#171a24] px-1 py-0.5 font-mono text-[10px]">↵</kbd> select
            </span>
          </div>
          <div>
            <span>Sound: </span>
            <button
              onClick={() => {
                const next = !soundState;
                setSoundEnabled(next);
                setSoundState(next);
                playToggleSound(next);
              }}
              className="font-mono text-[#9ca3af] hover:text-white cursor-pointer underline underline-offset-2"
            >
              {soundState ? "Enabled 🔊" : "Muted 🔇"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
