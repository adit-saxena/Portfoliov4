import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p className={styles.heading}>
          Always open to building great products. <br />
          Reach out at <a href="mailto:aditsaxena2004@gmail.com">aditsaxena2004@gmail.com</a>
        </p>
        <p className={styles.made}>
          Made with <span className={styles.heart}>❤️</span> by Adit (& AI)
        </p>
      </div>
      <div className={styles.right}>
        <a href="https://www.behance.net/aditsaxena" target="_blank" rel="noopener noreferrer">
          Behance ↗
        </a>
        <a href="https://www.linkedin.com/in/heyadit/" target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
        <a href="https://www.instagram.com/adit.saxena/" target="_blank" rel="noopener noreferrer">
          Instagram ↗
        </a>
      </div>
    </footer>
  );
}
