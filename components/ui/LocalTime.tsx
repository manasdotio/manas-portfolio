"use client";

import { useEffect, useState } from "react";
import { playClickSound } from "./sound";

export default function LocalTime() {
  const [timeStr, setTimeStr] = useState<string>("");
  const [isAsleep, setIsAsleep] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        setTimeStr(formatter.format(now));

        // Check hour in IST
        const hourFormatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          hour12: false,
        });
        const hour = parseInt(hourFormatter.format(now), 10);
        setIsAsleep(hour >= 23 || hour < 7);
      } catch {
        setTimeStr("Jaipur, IN");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeStr) {
    return (
      <div className="flex items-center gap-2 text-xs text-text-muted font-mono">
        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <span>Jaipur, IN · IST</span>
      </div>
    );
  }

  const handleCopy = () => {
    playClickSound();
    navigator.clipboard.writeText(`Jaipur, India (IST) — Current time: ${timeStr}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      onClick={handleCopy}
      title="Click to copy local time & timezone"
      className="group inline-flex items-center gap-2 rounded-full border border-[#262a36] bg-[#12141c]/90 px-3 py-1 font-mono text-[11px] text-[#9ca3af] transition-all duration-200 hover:border-[#3b4255] hover:text-[#e5e7eb] cursor-pointer"
    >
      <span
        className={`h-2 w-2 rounded-full ${
          isAsleep ? "bg-amber-400" : "bg-green-500 animate-pulse"
        }`}
      />
      <span className="font-medium text-[#d1d5db]">Jaipur</span>
      <span className="text-[#4b5563]">·</span>
      <span>{timeStr}</span>
      <span className="text-[#4b5563]">·</span>
      <span className={isAsleep ? "text-amber-400" : "text-green-400"}>
        {copied ? "Copied! 📋" : isAsleep ? "🌙 Sleeping" : "🟢 Coding / Active"}
      </span>
    </button>
  );
}
