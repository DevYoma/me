import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.name}>Ogheneyoma</h1>
      
      {/* 
      <p className={styles.creator}>
        Creator of <strong>yomaproduct</strong>
      </p> 
      */}

      <p className={styles.role}>SOFTWARE ENGINEER</p>
      
      <div className={styles.socials}>
        <a href="https://github.com/DevYoma" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span>/</span>
        <a href="https://www.linkedin.com/in/ogheneyoma-emore-87a8341b3/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span>/</span>
        <a href="mailto:lawrenceyoma@gmail.com">Email</a>
      </div>
    </header>
  );
};

export default Header;
