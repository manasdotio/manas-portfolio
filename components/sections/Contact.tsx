import Link from "next/link";
import styles from "./Contact.module.css";
import { SOCIAL_LINKS } from "../data/links";

const Contact = () => {
  return (
    <section className={styles.section} aria-label="Contact">
      <div className={styles.heading}>
        <div className={styles.headingEyebrow}>
          <span className={styles.headingLine} />
          <span className={styles.headingIndex}>04</span>
        </div>
        <h2 className={styles.headingPrimary}>Let's</h2>
        <p className={styles.headingSecondary}>talk.</p>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.leftColumn}>
          <p className={styles.lead}>
            Have a project in mind, a role you think I'd be a good fit for, or just want to say
            hello? My inbox is always open.
          </p>

          <div>
            <p className={styles.blockLabel}>Email</p>
            <Link href="mailto:manas@example.com" className={styles.emailLink}>
              manas@example.com
            </Link>
          </div>

          <div className={styles.divider} />

          <div>
            <p className={styles.blockLabel}>Availability</p>
            <div className={styles.availabilityRow}>
              <span className={styles.availabilityDot} />
              <span className={styles.blockText}>Open to work - fullstack roles and freelance</span>
            </div>
          </div>

          <div className={styles.divider} />

          <div>
            <p className={styles.blockLabel}>Response time</p>
            <p className={styles.blockText}>Usually within 24 hours</p>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <p className={styles.blockLabelWide}>Find me on</p>

          <div className={styles.socialList}>
            {SOCIAL_LINKS.map((item, index) => (
              <Link
                href={item.href}
                className={`${styles.socialRow} ${index === SOCIAL_LINKS.length - 1 ? styles.socialRowLast : ""}`}
                key={item.platform}
              >
                <span className={styles.socialPlatform}>{item.platform}</span>
                <span className={styles.socialHandle}>{item.handle} ↗</span>
              </Link>
            ))}
          </div>

          <Link href="mailto:manas@example.com" className={styles.messageCta}>
            Send me a message ↗
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
