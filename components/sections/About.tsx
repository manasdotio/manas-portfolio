import Link from "next/link";
import styles from "./About.module.css";

const stats = [
  { value: "2+", label: "Years building" },
  { value: "12", label: "Projects shipped" },
  { value: "∞", label: "Tabs open" },
  { value: "1", label: "Cup of chai / day" },
];

const currentFocus = [
  "Building this portfolio",
  "Learning system design",
  "Open to fullstack roles",
  "Based in Jaipur, open to remote",
];

const About = () => {
  return (
    <section className={styles.section} aria-label="About me">
      <div className={styles.heading}>
        <div className={styles.headingEyebrow}>
          <span className={styles.headingLine} />
          <span className={styles.headingIndex}>03</span>
        </div>
        <h2 className={styles.headingPrimary}>About</h2>
        <p className={styles.headingSecondary}>me.</p>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.leftColumn}>
          <div className={styles.imageFrame}>
            <img src="/assets/avatar.jpg" alt="Manas Singh" className={styles.profileImage} />
          </div>

          <div className={styles.metaRow}>
            <span className={styles.nameText}>Manas Singh</span>
            <span className={styles.locationWrap}>
              <span className={styles.locationDot} />
              <span className={styles.locationText}>Jaipur, India</span>
            </span>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <p className={styles.intro}>
            I build things for the web - <em>carefully, intentionally,</em> and with a lot
            of attention to detail.
          </p>

          <div className={styles.bodyCopy}>
            <p>
              I got into coding because I loved seeing ideas become tangible. What started as
              tweaking layouts and small scripts turned into a deeper interest in building
              products that people actually use.
            </p>
            <p>
              As a developer, I care a lot about craft. Clean structure, thoughtful motion,
              accessibility, and small interface details matter to me because they shape how a
              product feels every day.
            </p>
            <p>
              Right now I am focused on leveling up system thinking while continuing to ship
              polished fullstack work. I am looking for a <Link href="#" className={styles.inlineLink}>full-time role</Link> and open to the right <Link href="#" className={styles.inlineLink}>freelance project</Link> where quality and ownership are valued.
            </p>
          </div>

          <div className={styles.divider} />

          <div className={styles.statsGrid}>
            {stats.map((item) => (
              <div className={styles.statItem} key={item.label}>
                <p className={styles.statValue}>{item.value}</p>
                <p className={styles.statLabel}>{item.label}</p>
              </div>
            ))}
          </div>

          <div className={styles.divider} />

          <div className={styles.currentBlock}>
            <p className={styles.currentLabel}>Currently</p>
            <div className={styles.currentList}>
              {currentFocus.map((item) => (
                <div className={styles.currentItem} key={item}>
                  <span className={styles.currentDot} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.ctaRow}>
            <Link href="#" className={styles.ctaPrimary}>
              Download CV
            </Link>
            <Link href="#" className={styles.ctaSecondary}>
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
