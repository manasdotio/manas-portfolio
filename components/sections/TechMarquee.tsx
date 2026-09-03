"use client";

import styles from "./TechMarquee.module.css";
import type { IconType } from "../ui/techIcons";
import {
  SiDocker,
  SiExpress,
  SiFramer,
  SiGit,
  SiGraphql,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiVercel,
  SiFirefoxbrowser,
  SiVite,
} from "../ui/techIcons";
import { useTechFilter } from "../ui/stackFilter";
import { PORTFOLIO_DATA, SkillCategory } from "../../data/portfolio";

const ICON_MAP: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  Vite: SiVite,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  "REST APIs": SiNodedotjs,
  GraphQL: SiGraphql,
  tRPC: SiTrpc,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  Prisma: SiPrisma,
  MongoDB: SiMongodb,
  "Browser Extension": SiFirefoxbrowser,
  Docker: SiDocker,
  Vercel: SiVercel,
  Git: SiGit,
  Linux: SiLinux,
};

const CATEGORY_META: Record<
  SkillCategory,
  { label: string; badgeIcon: IconType }
> = {
  frontend: { label: "Frontend & UI", badgeIcon: SiReact },
  backend: { label: "Backend & APIs", badgeIcon: SiNodedotjs },
  database: { label: "Databases & ORM", badgeIcon: SiPostgresql },
  infra: { label: "Tools & Extensions", badgeIcon: SiDocker },
};

const CATEGORIES: SkillCategory[] = ["frontend", "backend", "database", "infra"];

const getCategoryClass = (category: SkillCategory) => {
  if (category === "frontend") return styles.frontend;
  if (category === "backend") return styles.backend;
  if (category === "database") return styles.database;
  return styles.infra;
};

const TechMarquee = () => {
  const { selectedTech, setTechFilter } = useTechFilter();

  // Dynamically group skills enabled in data/portfolio.ts
  const enabledSkills = PORTFOLIO_DATA.skills.filter((s) => s.enabled);

  const stackGroups = CATEGORIES.map((cat) => {
    const meta = CATEGORY_META[cat];
    const items = enabledSkills
      .filter((s) => s.category === cat)
      .map((s) => ({
        name: s.name,
        icon: ICON_MAP[s.name] ?? SiReact,
      }));

    return {
      category: cat,
      label: meta.label,
      badgeIcon: meta.badgeIcon,
      items,
    };
  }).filter((group) => group.items.length > 0);

  return (
    <section id="stack" className={styles.section} aria-label="Technology stack">
      <div className={styles.sectionHeader}>
        <div className="mb-4 mt-4 w-full">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-3 uppercase text-[11px] font-medium tracking-[0.18em] text-[#888888] [font-variant:small-caps]">
              <span className="h-px w-12 bg-[#33394d]" />
              <span>01</span>
            </div>

            {selectedTech && (
              <button
                onClick={() => setTechFilter(null)}
                className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-mono text-blue-400 hover:bg-blue-500/20 cursor-pointer"
              >
                <span>Filtered: {selectedTech}</span>
                <span className="text-xs">✕ Clear</span>
              </button>
            )}
          </div>

          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <div className="flex items-baseline gap-3">
              <h3 className="font-instrument text-[48px] font-medium leading-none text-text-primary">
                My
              </h3>
              <p className="font-instrument text-[48px] font-medium leading-none italic text-[#666666]">
                stack.
              </p>
            </div>
            <p className="font-mono text-xs text-[#6b7280]">
              Click any skill to filter matching projects ↗
            </p>
          </div>
        </div>
      </div>

      {/* Balanced 2x2 Bento Grid with Horizontal Interactive Badges */}
      <div className={styles.stackGrid}>
        {stackGroups.map((group) => {
          const BadgeIcon = group.badgeIcon;

          return (
            <article
              className={`${styles.stackCard} ${getCategoryClass(group.category)}`}
              key={group.label}
            >
              <div className={styles.cardHead}>
                <div className="flex items-center gap-2.5">
                  <span className={`${styles.categoryBadge} ${getCategoryClass(group.category)}`}>
                    <BadgeIcon size={14} />
                  </span>
                  <h4 className={`${styles.categoryLabel} ${getCategoryClass(group.category)}`}>
                    {group.label}
                  </h4>
                </div>
                <span className={styles.itemCountBadge}>
                  {group.items.length} tools
                </span>
              </div>

              {/* Horizontal cluster of tactile interactive pills */}
              <div className={styles.pillsWrap}>
                {group.items.map((item) => {
                  const isSelected = selectedTech === item.name;

                  return (
                    <button
                      key={item.name}
                      onClick={() => setTechFilter(isSelected ? null : item.name)}
                      className={`${styles.techPill} ${
                        isSelected ? styles.techPillActive : ""
                      }`}
                      title={`Filter projects using ${item.name}`}
                    >
                      <item.icon
                        className={`${styles.pillIcon} ${
                          isSelected ? styles.pillIconActive : ""
                        }`}
                        size={14}
                      />
                      <span className={styles.pillText}>{item.name}</span>
                      {isSelected && (
                        <span className={styles.pillDot}>●</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TechMarquee;