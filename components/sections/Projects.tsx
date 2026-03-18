import Link from "next/link";
import styles from "./Projects.module.css";
import { SOCIAL_LINKS } from "../data/links";

const GITHUB_HREF = SOCIAL_LINKS.find((s) => s.platform === "GitHub")?.href ?? "#";

type ProjectStatus = "Live" | "In Progress";

type Project = {
  name: string;
  year: number;
  status: ProjectStatus;
  description: string;
  architecture: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  image: string;
};

const projects: Project[] = [
  {
    name: "Book Collection App",
    year: 2025,
    status: "Live",
    description:
      "A full-stack app to manage and track your personal book library. Add books, set reading status, and organize your wishlist.",
    architecture: "Node API with typed Next.js client and relational persistence.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
    liveUrl: "#",
    githubUrl: GITHUB_HREF,
    image: "/assets/project.png",
  },
  {
    name: "Portfolio Website",
    year: 2025,
    status: "In Progress",
    description:
      "The site you are looking at. Built with a focus on typography, whitespace, and motion. Custom marquee and minimal dark aesthetic throughout.",
    architecture: "Component-driven Next.js UI with modular section styling.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    liveUrl: "#",
    githubUrl: GITHUB_HREF,
    image: "/assets/project.png",
  },
  {
    name: "TaskFlow Dashboard",
    year: 2024,
    status: "Live",
    description:
      "A team productivity dashboard for tracking tasks, sprint priorities, and release milestones with clean visual reporting.",
    architecture: "React dashboard backed by PostgreSQL and containerized services.",
    tags: ["React", "TypeScript", "PostgreSQL", "Docker"],
    githubUrl: GITHUB_HREF,
    image: "/assets/project.png",
  },
];

const formatProjectIndex = (index: number) => String(index + 1).padStart(2, "0");

const getTagTone = (tag: string) => {
  const frontendTags = new Set(["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"]);
  const backendTags = new Set(["Node.js", "Express", "NestJS"]);
  const databaseTags = new Set(["PostgreSQL", "MongoDB", "MySQL", "Prisma"]);
  const infraTags = new Set(["Docker", "Kubernetes", "AWS", "Vercel"]);

  if (frontendTags.has(tag)) return styles.tagFrontend;
  if (backendTags.has(tag)) return styles.tagBackend;
  if (databaseTags.has(tag)) return styles.tagDatabase;
  if (infraTags.has(tag)) return styles.tagInfra;
  return "";
};

const Projects = () => {
  return (
    <section className={styles.section} aria-label="Selected work">
      <div className={styles.heading}>
        <div className={styles.headingEyebrow}>
          <span className={styles.headingLine} />
          <span className={styles.headingIndex}>02</span>
        </div>
        <h2 className={styles.headingPrimary}>Selected</h2>
        <p className={styles.headingSecondary}>work.</p>
      </div>

      <div className={styles.projectsList}>
        {projects.map((project, index) => {
          const statusClass =
            project.status === "Live" ? styles.statusLive : styles.statusProgress;

          return (
            <article className={styles.projectRow} key={project.name}>
              <div className={styles.textColumn}>
                <div className={styles.projectMeta}>
                  <span className={styles.projectIndexYear}>
                    {formatProjectIndex(index)} - {project.year}
                  </span>
                  <span className={`${styles.status} ${statusClass}`}>
                    <span className={styles.statusDot} />
                    {project.status}
                  </span>
                </div>

                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Arch</span>
                  <span className={styles.archText}>{project.architecture}</span>
                </div>

                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span className={`${styles.tag} ${getTagTone(tag)}`} key={`${project.name}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.links}>
                  {project.liveUrl ? (
                    <Link href={project.liveUrl} className={styles.projectLink}>
                      <span>Live</span>
                      <span className={styles.projectArrow}>↗</span>
                    </Link>
                  ) : null}
                  <Link href={project.githubUrl} className={styles.projectLink}>
                    <span>GitHub</span>
                    <span className={styles.projectArrow}>↗</span>
                  </Link>
                </div>
              </div>

              <div className={styles.imageColumn}>
                <div className={styles.imageFrame}>
                  <div className={styles.chromeBar}>
                    <span className={styles.chromeDots}>
                      <span className={styles.chromeDot} />
                      <span className={styles.chromeDot} />
                      <span className={styles.chromeDot} />
                    </span>
                    <span className={styles.chromeUrl}>preview.local/project</span>
                  </div>
                  <div className={styles.imageBody}>
                    <img src={project.image} alt={project.name} className={styles.projectImage} />
                  </div>
                  <div className={styles.imageOverlay}>
                    <span className={styles.overlayCta}>View project</span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className={styles.bottomCta}>
        <div>
          <span className={styles.moreText}>More on</span>
          <Link href={GITHUB_HREF} className={styles.moreLink}>
            GitHub ↗
          </Link>
        </div>
        <span className={styles.countText}>3 projects</span>
      </div>
    </section>
  );
};

export default Projects;
