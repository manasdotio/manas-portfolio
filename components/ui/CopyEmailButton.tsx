"use client";

import { useState } from "react";
import { playClickSound } from "./sound";

interface CopyEmailButtonProps {
  email?: string;
  className?: string;
  variant?: "pill" | "hero" | "minimal";
}

export default function CopyEmailButton({
  email = "manasdotio@gmail.com",
  className = "",
  variant = "pill",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    playClickSound();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (variant === "minimal") {
    return (
      <button
        onClick={handleCopy}
        className={`inline-flex items-center gap-1.5 font-mono text-xs text-[#9ca3af] hover:text-white transition-colors cursor-pointer ${className}`}
        title="Click to copy email"
      >
        <span>{copied ? "Copied! ✓" : email}</span>
      </button>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <button
        onClick={handleCopy}
        className={`group relative inline-flex items-center gap-2.5 rounded-lg border px-4 py-2 font-mono text-xs font-medium transition-all duration-200 cursor-pointer ${
          copied
            ? "border-green-500/50 bg-green-500/10 text-green-300 shadow-[0_0_12px_rgba(34,197,94,0.2)]"
            : "border-[#2a2f40] bg-[#10121a] text-[#d1d5db] hover:border-[#3b4461] hover:bg-[#141724] hover:text-white"
        }`}
        title="Click to copy email to clipboard"
      >
        {copied ? (
          <svg className="h-3.5 w-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="h-3.5 w-3.5 text-[#9ca3af] group-hover:text-[#60a5fa] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
        <span>{copied ? "Copied to clipboard!" : email}</span>
        <span className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] text-[#6b7280] group-hover:text-[#9ca3af] transition-colors">
          {copied ? "✓" : "Click to copy"}
        </span>
      </button>

      <a
        href={`mailto:${email}`}
        className="text-[11px] text-[#6b7280] hover:text-[#9ca3af] transition-colors underline underline-offset-4"
        title="Or open default mail client"
      >
        open client ↗
      </a>
    </div>
  );
}
