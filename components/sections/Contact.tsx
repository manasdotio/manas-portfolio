import Link from "next/link";
import styles from "./Contact.module.css";
import { SOCIAL_LINKS } from "../data/links";

const EMAIL_LINK = SOCIAL_LINKS.find((item) => item.platform === "Email")?.href ?? "mailto:manas@example.com";
const EMAIL_HANDLE = SOCIAL_LINKS.find((item) => item.platform === "Email")?.handle ?? "manas@example.com";
const SOCIAL_ROW_LINKS = SOCIAL_LINKS.filter((item) => item.platform !== "Email");

const Contact = () => {
  return (
    <section className={styles.section} aria-label="Contact">
      <div className={styles.heading}>
        <div className={styles.headingEyebrow}>
          <span className={styles.headingLine} />
          <span className={styles.headingIndex}>04</span>
        </div>
        <h2 className={styles.headingPrimary}>Let&apos;s build something</h2>
        <p className={styles.headingSecondary}>meaningful.</p>
      </div>

      <div className={styles.contentWrap}>
        <p className={styles.subtext}>
          Have a project in mind, a role you think I&apos;d be a good fit for, or just want to say
          hello? I&apos;d love to hear from you.
        </p>

        <Link href={EMAIL_LINK} className={styles.emailLink}>
          {EMAIL_HANDLE}
        </Link>

        <div className={styles.ctaRow}>
          <Link href={EMAIL_LINK} className={styles.ctaPrimary}>
            Start a project
          </Link>
          <Link href={EMAIL_LINK} className={styles.ctaGhost}>
            Send message
          </Link>
        </div>

        <div className={styles.socialRow}>
          {SOCIAL_ROW_LINKS.map((item) => (
            <Link href={item.href} className={styles.socialLink} key={item.platform}>
              {item.platform} ↗
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
