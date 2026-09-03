"use client";

import { useState } from "react";
import Image from "next/image";
import LatestPush from "../ui/LatestPush";
import LocalTime from "../ui/LocalTime";
import { playClickSound } from "../ui/sound";
import { PORTFOLIO_DATA } from "../../data/portfolio";

const Hero = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const { personal } = PORTFOLIO_DATA;

  return (
    <div className="flex w-full flex-col pt-8 pb-10 text-white lg:pt-16 lg:pb-14">
      <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

        {/* Text Column */}
        <div className="flex w-full flex-col lg:w-3/4">

          {/* Status badge row */}
          <div className="mb-4 flex items-center flex-wrap gap-3">
            {personal.availableForWork && (
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <p className="text-[11px] font-mono font-semibold tracking-wider text-emerald-300 uppercase">
                  Available for work
                </p>
              </div>
            )}

            <LocalTime />
          </div>

          {/* Name */}
          <h1 className="text-4xl font-medium tracking-tight text-text-primary lg:text-8xl">
            {personal.name}
          </h1>

          {/* Title with subtle gradient emphasis */}
          <h2 className="mt-2 text-2xl font-medium italic text-[#9ca3af] lg:mt-3 lg:text-6xl font-instrument">
            {personal.role}
          </h2>

          {/* Bio */}
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#9ca3af] lg:mt-7 lg:text-base font-light">
            {personal.bioShort}
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-row items-center flex-wrap gap-3 lg:mt-9">
            <a
              href="#projects"
              onClick={() => playClickSound()}
              className="flex items-center gap-2 rounded-lg border border-[#3b4461] bg-[#141724] px-5 py-2.5 text-xs font-semibold tracking-wide text-white transition-all duration-200 hover:border-blue-500 hover:bg-[#1b2033] hover:shadow-[0_0_16px_rgba(59,130,246,0.3)]"
            >
              <span>EXPLORE WORK</span>
              <span className="text-blue-400 font-mono">↓</span>
            </a>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound()}
              className="flex items-center gap-2 rounded-lg border border-[#262b3a] bg-[#0e1017] px-4 py-2.5 text-xs font-semibold tracking-wide text-[#d1d5db] transition-colors hover:border-[#3b4461] hover:text-white"
            >
              <span>RESUME</span>
              <span className="text-[#6b7280]">↗</span>
            </a>

            <button
              onClick={() => {
                playClickSound();
                navigator.clipboard.writeText(personal.email);
                setEmailCopied(true);
                setTimeout(() => setEmailCopied(false), 2000);
              }}
              title="Copy email to clipboard"
              className={`hidden sm:flex items-center gap-2 rounded-lg border px-3.5 py-2.5 text-xs font-mono transition-all duration-200 cursor-pointer ${
                emailCopied
                  ? "border-green-500/50 bg-green-500/10 text-green-300"
                  : "border-[#202433] text-[#9ca3af] hover:border-[#333a50] hover:text-white"
              }`}
            >
              {emailCopied ? (
                <>
                  <svg className="h-3.5 w-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <svg className="h-3.5 w-3.5 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>{personal.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Activity & 30-Day Heatmap Telemetry Widget */}
          <div className="mt-8">
            <LatestPush />
          </div>
        </div>

        {/* Avatar with subtle glow and floating location glass badge (desktop/tablet only) */}
        <div className="hidden md:block relative h-72 w-56 shrink-0 lg:h-[400px] lg:w-80 lg:self-start lg:mt-2 group">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-blue-500/20 via-transparent to-transparent opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative h-full w-full overflow-hidden rounded-2xl border border-[#252a38] shadow-2xl shadow-black/80">
            <Image
              src="/assets/avatar.webp"
              alt={`${personal.name} - ${personal.role}`}
              width={320}
              height={400}
              loading="eager"
              className="block h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            />

            {/* Floating location glass badge */}
            <div className="absolute bottom-3 inset-x-3 rounded-xl border border-white/15 bg-[#0a0c14]/85 p-2.5 backdrop-blur-md transition-all duration-300 group-hover:border-blue-500/40">
              <div className="flex items-center gap-1.5 text-xs text-white font-medium">
                <span>📍</span>
                <span>{personal.city}, {personal.country}</span>
                <span className="text-[#6b7280]">·</span>
                <span className="font-mono text-[10px] text-emerald-400">Open to relocate</span>
              </div>
              <p className="font-mono text-[10px] text-[#9ca3af] mt-0.5">
                Available for full-time &amp; remote roles
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
