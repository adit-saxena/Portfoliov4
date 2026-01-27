'use client';
import styles from './loader.module.css';

export default function Loader() {
  return (
    <div className={styles.overlay}>
      <div className={styles.wireframeContainer}>
        <div className={styles.wireframeHeader}></div>
        <div className={styles.wireframeBody}>
          <div className={styles.line} style={{ width: '80%' }}></div>
          <div className={styles.line} style={{ width: '60%' }}></div>
          <div className={styles.line} style={{ width: '90%' }}></div>
        </div>
      </div>
      <p className={styles.text}>Constructing...</p>
    </div>
  );
}
