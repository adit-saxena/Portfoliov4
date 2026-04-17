'use client';
import styles from './projectHeader.module.css';

export default function HeaderP({ BGColor }) {
  return (
    <header
      className={styles.header}
      style={{ backgroundColor: BGColor || '#ffffff' }}
    >
      <a
        href="./ProductDesigner_AditSaxena.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.resumeBtn}
      >
        resume
      </a>
    </header>
  );
}