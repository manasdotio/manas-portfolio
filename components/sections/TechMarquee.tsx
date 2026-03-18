import styles from "./TechMarquee.module.css";
import type { IconType } from "react-icons";
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
} from "react-icons/si";

type StackCategory = "frontend" | "backend" | "database" | "infra";

type StackItem = {
  category: StackCategory;
  label: string;
  badgeIcon: IconType;
  items: Array<{
    name: string;
    icon: IconType;
  }>;
};

const stackGroups: StackItem[] = [
  {
    category: "frontend",
    label: "Frontend",
    badgeIcon: SiReact,
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    category: "backend",
    label: "Backend",
    badgeIcon: SiNodedotjs,
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "GraphQL", icon: SiGraphql },
      { name: "tRPC", icon: SiTrpc },
    ],
  },
  {
    category: "database",
    label: "Database",
    badgeIcon: SiPostgresql,
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
      { name: "Prisma", icon: SiPrisma },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    category: "infra",
    label: "Infra",
    badgeIcon: SiDocker,
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Git", icon: SiGit },
      { name: "Linux", icon: SiLinux },
    ],
  },
];

const getCategoryClass = (category: StackCategory) => {
  if (category === "frontend") return styles.frontend;
  if (category === "backend") return styles.backend;
  if (category === "database") return styles.database;
  return styles.infra;
};

const marqueeItems = stackGroups.flatMap((group) =>
  group.items.map((item) => ({ ...item, category: group.category }))
);

const repeatedMarquee = Array.from({ length: 4 }, () => marqueeItems).flat();

const TechMarquee = () => {
  return (
    <section className={styles.section} aria-label="Technology stack">
      <div className={styles.sectionHeader}>
        <div className="mb-12 mt-8">
          <div className="mb-4 flex items-center gap-3 uppercase text-[11px] font-normal tracking-[0.18em] text-text-ghost [font-variant:small-caps]">
            <span className="h-px w-12 bg-[#222222]" />
            <span>01</span>
          </div>
          <h3 className="font-instrument text-[56px] font-medium leading-none text-text-primary">
            My
          </h3>
          <p className="font-instrument text-[56px] font-medium leading-none italic text-[#3d3d3d]">
            stack.
          </p>
        </div>
      </div>

      <div className={styles.stackGrid}>
        {stackGroups.map((group) => {
          const BadgeIcon = group.badgeIcon;

          return (
            <article className={`${styles.stackCard} ${getCategoryClass(group.category)}`} key={group.label}>
              <div className={styles.cardHead}>
                <span className={`${styles.categoryBadge} ${getCategoryClass(group.category)}`}>
                  <BadgeIcon size={14} />
                </span>
                <p className={`${styles.categoryLabel} ${getCategoryClass(group.category)}`}>{group.label}</p>
              </div>

              <ul className={styles.itemList}>
                {group.items.map((item) => (
                  <li className={styles.itemRow} key={item.name}>
                    <item.icon className={styles.itemIcon} size={14} />
                    <span className={styles.itemText}>{item.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className={styles.marqueeStrip} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {repeatedMarquee.map((item, index) => (
            <span className={styles.marqueeItem} key={`${item.name}-${index}`}>
              <item.icon className={styles.marqueeIcon} size={14} />
              <span className={styles.marqueeName}>{item.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;