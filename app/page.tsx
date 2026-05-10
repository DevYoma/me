import styles from './page.module.scss';

export default function Home() {
  return (
    <section className={styles.intro}>
      <div className={styles.text}>
        <p>
          Hey, I&apos;m Yoma! I&apos;m a software engineer and technical writer passionate about building products.
        </p>
        <p>
          I build functional products on the web and enjoy turning ideas into reliable, 
          real-world systems while constantly learning along the way.
        </p>
      </div>

      <div className={styles.current}>
        <h2>Currently</h2>
        <p>
          Building <a href="https://fybvault.com" target="_blank" rel="noopener noreferrer"><strong>FYBVault</strong></a> — a payment tracking platform that eliminates 
          spreadsheet chaos and WhatsApp confusion when university students save for final year events.
        </p>
      </div>
    </section>
  );
}
