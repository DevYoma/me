import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.line}></div>
      <p className={styles.text}>
        Yoma © 2026
      </p>
    </footer>
  );
};

export default Footer;
