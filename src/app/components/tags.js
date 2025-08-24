'use client';
import styles from '../page.module.css';

// Tags.js
export default function Tags({ Text }) {
  return (
    <div className={styles.tag}>
      <p>{Text}</p>
    </div>
  );
}
