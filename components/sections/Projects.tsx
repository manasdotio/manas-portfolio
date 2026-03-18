import Link from "next/link";
import styles from "./Projects.module.css";

type ProjectStatus = "Live" | "In Progress";

type Project = {
  name: string;
  year: number;
  status: ProjectStatus;
  description: string;
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
    tags: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/assets/project.png",
  },
  {
    name: "Portfolio Website",
    year: 2025,
    status: "In Progress",
    description:
      "The site you are looking at. Built with a focus on typography, whitespace, and motion. Custom marquee and minimal dark aesthetic throughout.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/assets/project.png",
  },
  {
    name: "TaskFlow Dashboard",
    year: 2024,
    status: "Live",
    description:
      "A team productivity dashboard for tracking tasks, sprint priorities, and release milestones with clean visual reporting.",
    tags: ["React", "TypeScript", "PostgreSQL", "Docker"],
    githubUrl: "#",
    image: "/assets/project.png",
  },
];

const formatProjectIndex = (index: number) => String(index + 1).padStart(2, "0");

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

                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span className={styles.tag} key={`${project.name}-${tag}`}>
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
          <Link href="#" className={styles.moreLink}>
            GitHub ↗
          </Link>
        </div>
        <span className={styles.countText}>3 projects</span>
      </div>
    </section>
  );
};

export default Projects;
