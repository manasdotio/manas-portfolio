import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.left}>Manas Singh</span>
      <span className={styles.center}>Designed and built by Manas</span>
      <span className={styles.right}>2025</span>
    </footer>
  );
};

export default Footer;
