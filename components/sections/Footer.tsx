"use client";

import Link from "next/link";
import { SOCIAL_LINKS } from "../data/links";
import styles from "./Footer.module.css";
import { playClickSound } from "../ui/sound";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="flex flex-col gap-1">
        <span className={styles.left}>Manas Singh — Fullstack Developer</span>
        <span className="font-mono text-[10px] text-[#6b7280]">
          Next.js 16 · React 19 · Asia/Kolkata · 100/100 Core Web Vitals
        </span>
      </div>

      <div className="hidden md:flex items-center gap-2 font-mono text-[11px] text-[#6b7280]">
        <span>Press</span>
        <kbd className="rounded bg-[#171a24] px-1.5 py-0.5 border border-[#262b3a] text-[#9ca3af]">
          ⌘K
        </kbd>
        <span>for command menu</span>
      </div>

      <div className={styles.right}>
        {SOCIAL_LINKS.map((item) => (
          <Link
            key={item.platform}
            href={item.href}
            target={item.platform === "Email" ? undefined : "_blank"}
            rel={item.platform === "Email" ? undefined : "noopener noreferrer"}
            className={styles.socialLink}
            onClick={() => playClickSound()}
          >
            {item.platform}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
