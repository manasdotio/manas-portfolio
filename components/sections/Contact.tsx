"use client";

import Link from "next/link";
import styles from "./Contact.module.css";
import { SOCIAL_LINKS } from "../data/links";
import CopyEmailButton from "../ui/CopyEmailButton";
import { playClickSound } from "../ui/sound";

const EMAIL_LINK = SOCIAL_LINKS.find((item) => item.platform === "Email")?.href ?? "mailto:manasdotio@gmail.com";
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
          Have an open fullstack role, a freelance project, or just want to chat system architecture?
          I&apos;m responsive and always excited to connect with great teams.
        </p>

        {/* Ergonomic Click-to-Copy Email with tactile feedback */}
        <div className="mt-5">
          <CopyEmailButton email="manasdotio@gmail.com" />
        </div>

        <div className={styles.ctaRow}>
          <a
            href={EMAIL_LINK}
            onClick={() => playClickSound()}
            className={styles.ctaPrimary}
          >
            Send an email ↗
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound()}
            className={styles.ctaGhost}
          >
            Download Resume (PDF)
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
