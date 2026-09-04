"use client";

import Link from "next/link";
import styles from "./Contact.module.css";
import { SOCIAL_LINKS } from "../data/links";
import CopyEmailButton from "../ui/CopyEmailButton";
import QuickContactForm from "./QuickContactForm";
import { playClickSound } from "../ui/sound";

const SOCIAL_ROW_LINKS = SOCIAL_LINKS.filter((item) => item.platform !== "Email");

const Contact = () => {
  return (
    <section id="contact" className={styles.section} aria-label="Contact">
      <div className={styles.heading}>
        <div className={styles.headingEyebrow}>
          <span className={styles.headingLine} />
          <span className={styles.headingIndex}>04</span>
        </div>
        <div className={styles.headingRow}>
          <h2 className={styles.headingPrimary}>Let&apos;s work</h2>
          <p className={styles.headingSecondary}>together.</p>
        </div>
      </div>

      <div className={styles.contentWrap}>
        <p className={styles.subtext}>
          Building something interesting? Have an open fullstack or frontend role?
          I respond to every message, usually within a few hours.
        </p>

        {/* Click-to-Copy Email */}
        <div className="mt-4">
          <CopyEmailButton email="manasdotio@gmail.com" />
        </div>

        {/* Primary: On-Page Message Form */}
        <div className="mt-6 w-full">
          <QuickContactForm />
        </div>

        <div className={styles.ctaRow}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound()}
            className={styles.ctaGhost}
          >
            Download Resume ↗
          </a>
        </div>

        <div className={styles.socialRow}>
          {SOCIAL_ROW_LINKS.map((item) => (
            <Link
              href={item.href}
              className={styles.socialLink}
              key={item.platform}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound()}
            >
              {item.platform} ↗
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
