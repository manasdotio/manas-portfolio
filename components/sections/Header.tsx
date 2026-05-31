"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SOCIAL_LINKS } from "../data/links";

const NAV_LINKS = SOCIAL_LINKS.filter((s) => s.platform !== "Email");

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="relative">
      <nav className="flex w-full items-center justify-between py-2">
        <Link href="/" className="group flex items-baseline gap-0">
          <span className="text-xl font-bold tracking-tight text-text-primary">MS</span>
          <span className="font-instrument text-3xl font-medium leading-none text-text-muted transition-colors duration-300 group-hover:text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map(({ platform, href }) => (
            <li key={platform}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium tracking-wide text-text-muted uppercase transition-colors duration-200 hover:text-text-primary"
              >
                {platform}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contact"
              className="rounded-full border border-border px-5 py-2 text-[12px] font-medium tracking-wider text-text-secondary uppercase transition-all duration-200 hover:border-text-muted hover:text-text-primary"
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`h-px w-5 bg-text-primary transition-all duration-300 ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-text-primary transition-all duration-300 ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#050505]/98 backdrop-blur-sm lg:hidden">
          {NAV_LINKS.map(({ platform, href }) => (
            <Link
              key={platform}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-light tracking-wide text-text-secondary transition-colors hover:text-text-primary"
            >
              {platform}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-full border border-border px-8 py-3 text-sm font-medium tracking-wider text-text-secondary uppercase transition-all hover:border-text-muted hover:text-text-primary"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
