"use client";

import Link from "next/link";
import styles from "./About.module.css";
import { playClickSound } from "../ui/sound";

import { PORTFOLIO_DATA } from "../../data/portfolio";

const metrics = PORTFOLIO_DATA.metrics.filter((m) => m.enabled);
const timeline = PORTFOLIO_DATA.timeline.filter((t) => t.enabled);
const currentFocus = PORTFOLIO_DATA.currentFocus;

const About = () => {
  return (
    <section id="about" className={styles.section} aria-label="About me">
      {/* Section Header */}
      <div className={styles.heading}>
        <div className={styles.headingEyebrow}>
          <span className={styles.headingLine} />
          <span className={styles.headingIndex}>03</span>
        </div>
        <div className="flex items-baseline justify-between flex-wrap gap-3">
          <div className={styles.headingRow}>
            <h2 className={styles.headingPrimary}>About</h2>
            <p className={styles.headingSecondary}>me.</p>
          </div>
          <span className="font-mono text-xs text-[#6b7280]">
            Jaipur, IN · Junior Fullstack Developer
          </span>
        </div>
      </div>

      <div className={styles.contentGrid}>
        {/* Left Column: Timeline (Latest first) + Honest Metrics */}
        <div className={styles.leftColumn}>
          <div className={styles.introBox}>
            <p className={styles.intro}>
              I build things for the web — <em>carefully, intentionally,</em> and with a genuine
              curiosity to learn how things work under the hood.
            </p>
          </div>

          {/* Connected Timeline (Latest first) */}
          <div className={styles.timelineContainer}>
            <div className={styles.timelineLineTrack} />
            <div className={styles.timelineList}>
              {timeline.map((item, index) => (
                <div className={styles.timelineItem} key={item.year}>
                  <div className={styles.timelineMarker}>
                    <span
                      className={`${styles.timelineDot} ${
                        index === 0 ? styles.timelineDotActive : ""
                      }`}
                    />
                  </div>
                  <div className={styles.timelineContent}>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`${styles.timelineYearBadge} ${
                          index === 0 ? styles.timelineYearBadgeActive : ""
                        }`}
                      >
                        {item.year}
                      </span>
                      <h4 className={styles.timelineTitle}>{item.title}</h4>
                    </div>
                    <p className={styles.timelineDesc}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className={styles.metricsGrid}>
            {metrics.map((m) => (
              <div className={styles.metricCard} key={m.label}>
                <p className={styles.metricValue}>{m.value}</p>
                <p className={styles.metricLabel}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Honest, Grounded Bio & Currently Status */}
        <div className={styles.rightColumn}>
          <div className={styles.bodyCopy}>
            <p>
              I build things people actually use — a Firefox extension that strips distraction
              from YouTube, a browser-based desktop environment running at 60 FPS, and a
              full-stack video platform with JWT authentication and MongoDB aggregation
              pipelines.
            </p>
            <p>
              Self-taught since 2022, I learn by building real systems, not by watching
              tutorials. Every project on this site is something I designed, architected,
              and shipped end-to-end.
            </p>
            <p>
              I write clean, typed code and care deeply about the details — performance,
              accessibility, and UX that doesn't get in the way. I'm looking for a{" "}
              <Link href="#contact" className="text-white underline underline-offset-4 decoration-blue-500 hover:text-blue-400 transition-colors">
                team that values craft
              </Link>{" "}
              where I can contribute from day one and grow alongside experienced engineers.
            </p>
          </div>

          {/* Currently Status Board */}
          <div className={styles.currentBlock}>
            <p className={styles.subHeadingLabel}>Currently</p>
            <div className={styles.currentList}>
              {currentFocus.map((item) => (
                <div className={styles.currentItem} key={item}>
                  <span className={styles.currentDot} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className={styles.ctaRow}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound()}
              className={styles.ctaPrimary}
            >
              Download Resume ↗
            </a>
            <Link
              href="#contact"
              onClick={() => playClickSound()}
              className={styles.ctaSecondary}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
