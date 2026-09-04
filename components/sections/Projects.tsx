"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Projects.module.css";
import { SOCIAL_LINKS } from "../data/links";
import { useTechFilter } from "../ui/stackFilter";
import { playClickSound, playToggleSound } from "../ui/sound";
import { PORTFOLIO_DATA, Project } from "../../data/portfolio";

const GITHUB_HREF = SOCIAL_LINKS.find((s) => s.platform === "GitHub")?.href ?? "https://github.com/manasdotio";

const getTagTone = (tag: string) => {
  const frontendTags = new Set(["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "JavaScript", "CSS"]);
  const backendTags = new Set(["Node.js", "Express", "NestJS", "Browser Extension"]);
  const databaseTags = new Set(["PostgreSQL", "MongoDB", "MySQL", "Prisma"]);
  const infraTags = new Set(["Docker", "Kubernetes", "AWS", "Vercel", "Firefox", "Chrome", "Vite"]);

  if (frontendTags.has(tag)) return styles.tagFrontend;
  if (backendTags.has(tag)) return styles.tagBackend;
  if (databaseTags.has(tag)) return styles.tagDatabase;
  if (infraTags.has(tag)) return styles.tagInfra;
  return "";
};

const Projects = () => {
  const { selectedTech, setTechFilter } = useTechFilter();
  const [ytDistractMode, setYtDistractMode] = useState(false);

  // Active projects filtered from data/portfolio.ts
  const projects = PORTFOLIO_DATA.projects.filter((p) => p.enabled);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const matchesFilter = (project: Project) => {
    if (!selectedTech) return true;
    const techLower = selectedTech.toLowerCase();
    return project.tags.some(
      (t) =>
        t.toLowerCase() === techLower ||
        (techLower === "browser extension" && t.toLowerCase().includes("extension")) ||
        (techLower === "tailwind css" && t.toLowerCase() === "tailwind")
    );
  };

  return (
    <section id="projects" className={styles.section} aria-label="Selected work">
      <div className={styles.heading}>
        <div className={styles.headingEyebrow}>
          <span className={styles.headingLine} />
          <span className={styles.headingIndex}>02</span>
        </div>
        <div className="flex items-baseline justify-between flex-wrap gap-3">
          <div className={styles.headingRow}>
            <h2 className={styles.headingPrimary}>Selected</h2>
            <p className={styles.headingSecondary}>work.</p>
          </div>

          {selectedTech && (
            <div className="flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 font-mono text-xs text-blue-400">
              <span>
                Filtered by <strong className="text-white">{selectedTech}</strong>
              </span>
              <button
                onClick={() => setTechFilter(null)}
                className="ml-1 text-blue-300 hover:text-white cursor-pointer"
                title="Clear filter"
              >
                ✕ Clear
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Responsive 3-card grid */}
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => {
          const statusClass =
            project.status === "Live" ? styles.statusLive : styles.statusProgress;
          const isMatch = matchesFilter(project);
          const isYt = project.name === "Intentional YT";
          const currentImg = isYt && ytDistractMode && project.altImage ? project.altImage : project.image;

          return (
            <article
              aria-label={project.name}
              className={`${styles.projectCard} ${
                selectedTech && !isMatch ? styles.cardDimmed : ""
              } ${selectedTech && isMatch ? styles.cardHighlighted : ""}`}
              key={project.slug}
              onMouseMove={handleCardMouseMove}
            >
              {/* Screenshot Banner with Interactive Modes */}
              <div className={styles.imageWrap}>
                <Image
                  src={currentImg}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className={styles.projectImage}
                  {...(index === 0 ? { priority: true } : { loading: "lazy" as const })}
                />

                {/* Interactive Toggle Pill for Intentional YT */}
                {isYt && project.altImage && (
                  <div className="absolute top-3 right-3 z-20">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const next = !ytDistractMode;
                        setYtDistractMode(next);
                        playToggleSound(!next);
                      }}
                      title="Toggle between clean and cluttered YouTube states"
                      aria-pressed={ytDistractMode}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/75 px-2.5 py-1 text-[10px] font-mono font-medium text-white backdrop-blur-md transition-colors hover:border-blue-400 cursor-pointer shadow-lg"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          ytDistractMode ? "bg-red-400" : "bg-green-400"
                        }`}
                      />
                      <span>{ytDistractMode ? "Cluttered Feed" : "Focus Mode"}</span>
                      <span className="text-[9px] text-[#9ca3af]">⇄</span>
                    </button>
                  </div>
                )}

                <div className={styles.imageOverlay}>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className={styles.overlayCta}
                      onClick={() => playClickSound()}
                    >
                      Case Study →
                    </Link>
                    {project.liveUrl && project.liveUrl !== "#" ? (
                      <Link
                        href={project.liveUrl}
                        className={styles.overlayCta}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => playClickSound()}
                      >
                        Live ↗
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                {/* Meta row: High contrast index & year */}
                <div className={styles.projectMeta}>
                  <span className={styles.projectIndexYear}>
                    {String(index + 1).padStart(2, "0")} · {project.year}
                  </span>
                  <span className={`${styles.status} ${statusClass}`}>
                    <span className={styles.statusDot} />
                    {project.status}
                  </span>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  onClick={() => playClickSound()}
                  className="group/title block"
                >
                  <h3 className={styles.projectName}>
                    <span>{project.name}</span>
                    <span className="ml-1.5 inline-block font-sans text-xs text-[#6b7280] group-hover/title:text-[#60a5fa] transition-colors">
                      ↗
                    </span>
                  </h3>
                </Link>
                <p className={styles.description}>{project.description}</p>

                {/* Card Footer: Tags & Action Links */}
                <div className={styles.projectFooter}>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => {
                      const isTagActive = selectedTech?.toLowerCase() === tag.toLowerCase();

                      return (
                        <button
                          key={`${project.name}-${tag}`}
                          type="button"
                          onClick={() => setTechFilter(isTagActive ? null : tag)}
                          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setTechFilter(isTagActive ? null : tag); } }}
                          className={`${styles.tag} ${getTagTone(tag)} ${
                            isTagActive ? styles.tagActive : ""
                          } cursor-pointer`}
                          title={`Filter by ${tag}`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>

                  <div className={styles.links}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="font-mono text-[11px] font-semibold text-blue-400 hover:text-blue-300 transition-colors mr-1"
                      onClick={() => playClickSound()}
                    >
                      Case Study →
                    </Link>
                    {project.liveUrl && project.liveUrl !== "#" ? (
                      <Link
                        href={project.liveUrl}
                        className={styles.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => playClickSound()}
                      >
                        Live ↗
                      </Link>
                    ) : null}
                    <Link
                      href={project.githubUrl}
                      className={styles.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playClickSound()}
                    >
                      GitHub ↗
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className={styles.bottomCta}>
        <div>
          <span className={styles.moreText}>More on </span>
          <Link
            href={GITHUB_HREF}
            className={styles.moreLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound()}
          >
            GitHub ↗
          </Link>
        </div>
        <span className={styles.countText}>{projects.length} projects</span>
      </div>
    </section>
  );
};

export default Projects;
