import styles from "./TechMarquee.module.css";

type TechItem = {
  name: string;
  iconPath: string;
};

const row1: TechItem[] = [
  {
    name: "React",
    iconPath:
      "M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-11.5C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z",
  },
  {
    name: "Next.js",
    iconPath:
      "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14.5V7.5l6 9H11z",
  },
  {
    name: "TypeScript",
    iconPath: "M3 3h18v18H3V3zm10 10v-2h-2V9H9v2H7v2h2v4h2v-4h2z",
  },
  {
    name: "Tailwind",
    iconPath:
      "M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z",
  },
  {
    name: "JavaScript",
    iconPath:
      "M3 3h18v18H3V3zm10.5 14.5c0 1.5-1 2-2.5 2s-2.5-.75-2.5-2h1.5c0 .5.25.75 1 .75s1-.25 1-.75v-5H13.5v5zm3.5-1c0 1.5-1 2.5-2.5 2.5s-2.5-1-2.5-2h1.5c0 .5.25 1 1 1s1-.5 1-1c0-.75-.5-1-1.25-1.25l-.5-.125C13.25 16.375 13 15.625 13 14.75c0-1.25.75-2 2.25-2s2.25.75 2.25 1.75H16c0-.5-.25-.75-.75-.75s-.75.25-.75.75c0 .5.375.625.875.875l.5.125C17.375 15.125 17.5 16 17.5 16.5z",
  },
  { name: "Framer Motion", iconPath: "M5 4h14v7h-7L5 4zm0 7h7l7 9H5v-9z" },
  {
    name: "Node.js",
    iconPath:
      "M12 2L3 7v10l9 5 9-5V7L12 2zm0 2.3l6.7 3.7-6.7 3.7L5.3 8 12 4.3zM4 9.2l7 3.9v7.8L4 17V9.2zm9 11.7v-7.8l7-3.9V17l-7 3.9z",
  },
  {
    name: "CSS",
    iconPath:
      "M5 3l-.65 3.34h13.59L17.5 8.5H6.07l-.71 3.43h11.43l-.76 3.66-3.79 1.08-3.29-.93.23-1.13H6.18l-.44 2.16 5.16 1.55 5.58-1.55.93-4.34.18-.9.44-2.06H3.5L5 3z",
  },
];

const row2: TechItem[] = [
  {
    name: "Figma",
    iconPath:
      "M8 24a4 4 0 0 0 4-4v-4H8a4 4 0 0 0 0 8zm-4-8a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4zM8 8h4V0H8a4 4 0 0 0 0 8zm8 0a4 4 0 0 0 0-8h-4v8h4zm0 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  },
  {
    name: "Git",
    iconPath:
      "M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039 1.837 1.837 0 0 1-2.6-2.597L13.181 8.2v6.47a1.838 1.838 0 0 1 .48 3.581 1.838 1.838 0 0 1-2.275-1.788 1.836 1.836 0 0 1 1-1.634V8.087a1.836 1.836 0 0 1-.999-1.634 1.838 1.838 0 0 1 .05-.43L8.481 3.283 .452 11.31a1.55 1.55 0 0 0 0 2.189l10.48 10.478a1.55 1.55 0 0 0 2.189 0l10.424-10.43a1.55 1.55 0 0 0 0-2.188z",
  },
  { name: "Vercel", iconPath: "M24 22.525H0l12-21.05 12 21.05z" },
  { name: "VS Code", iconPath: "M17.5 0L8 9.5 3.5 5 0 7l8.5 8.5L21 3.5 17.5 0zM3.5 19L0 17l3.5-3.5L7 17l-3.5 2z" },
  {
    name: "Docker",
    iconPath:
      "M13.5 8h-2v2h2V8zm-3 0h-2v2h2V8zm-3 0h-2v2h2V8zm6-3h-2v2h2V5zm-3 0h-2v2h2V5zm-3 0h-2v2h2V5zm-3 3H4.5v2h2V8zm14.5 1.5c-.2-1.4-1.2-2-2-2.3-.2-1.2-1.1-3-3.2-3-.7 0-1.3.2-1.8.6-.4-.6-1.1-1-2-1-.2 0-.5 0-.7.1V5.1H4v7.4c0 2.5 2 4.5 4.5 4.5h7c2.5 0 4.2-1.8 4.5-4 .8-.3 2.1-1.2 2-3.5z",
  },
  {
    name: "PostgreSQL",
    iconPath:
      "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm-1 3v8h2V7h-2zm-3 2v4h2V9H8zm6 0v4h2V9h-2z",
  },
  {
    name: "Rust",
    iconPath:
      "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 2a8 8 0 1 1 0 16A8 8 0 0 1 12 4zm-1 3v5l4 2-1 1-4-2.5V7h1z",
  },
  {
    name: "Python",
    iconPath:
      "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 3h3c1.1 0 2 .9 2 2v4h-7V7c0-1.1.9-2 2-2zm-2 5h7v4c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2v-4zm1.5 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm3 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM8.5 7a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm7 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z",
  },
];

const repeatItems = (items: TechItem[], times = 3): TechItem[] =>
  Array.from({ length: times }, () => items).flat();

const MarqueeRow = ({ items, reverse = false }: { items: TechItem[]; reverse?: boolean }) => {
  const repeated = repeatItems(items);

  return (
    <div className={styles.marqueeWrapper}>
      <div className={`${styles.marqueeTrack} ${reverse ? styles.reverse : ""}`}>
        {repeated.map((item, index) => (
          <div className={styles.techItem} key={`${item.name}-${index}`}>
            <div className={styles.techIcon}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d={item.iconPath} />
              </svg>
            </div>
            <span className={styles.techName}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechMarquee = () => {
  return (
    <section className={styles.section} aria-label="Technology stack">
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>Technologies & Tools</h3>
        <div className={styles.headerLine} />
      </div>

      <MarqueeRow items={row1} />
      <div className={styles.divider} />
      <MarqueeRow items={row2} reverse />
    </section>
  );
};

export default TechMarquee;