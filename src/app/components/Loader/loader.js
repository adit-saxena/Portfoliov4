'use client';
import styles from './loader.module.css';

export default function Loader() {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>Loading...</p>
    </div>
  );
}
