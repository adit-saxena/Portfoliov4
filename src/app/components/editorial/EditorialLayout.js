"use client";
import React, { useEffect, useState } from 'react';
import styles from './editorial.module.css';

export function EditorialLayout({ header, tldr, sidebarLinks, children }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (!sidebarLinks || sidebarLinks.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );

    // Initial check and setup observation
    sidebarLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sidebarLinks]);

  return (
    <div className={styles.container}>
      <main className={styles.padded}>
        {/* Editorial Masthead */}
        {header && !header.custom && (
          <header className={styles.headerWrapper}>
            <div style={{ maxWidth: "72rem" }}>
              <p className={styles.headerSubtitle}>{header.subtitle}</p>
              <h1 className={styles.headerTitle}>{header.title}</h1>
              <div className={styles.headerDetails}>
                <p className={styles.headerDesc}>{header.description}</p>
                {header.domain && (
                  <div className={styles.domainBox}>
                    <span className={styles.domainLabel}>DOMAIN</span>
                    <span className={styles.domainValue}>{header.domain}</span>
                  </div>
                )}
              </div>
            </div>
          </header>
        )}
        {header && header.custom && (
          <header className={styles.headerWrapper}>
            {header.custom}
          </header>
        )}

        <div className={styles.editorialGrid}>
          {/* SideNavBar (Sticky Anchor) */}
          <aside className={styles.sidebar}>
            <nav className={styles.sidebarNav}>
              <div className={styles.sidebarHead}>
                <span className={styles.sidebarTitle}>CASE STUDY</span>
                <span className={styles.sidebarSubtitle}>V.01 ANALYSIS</span>
              </div>
              <ul className={styles.sidebarList}>
                {sidebarLinks && sidebarLinks.map((link) => (
                  <li key={link.id}>
                    <a 
                      href={`#${link.id}`} 
                      className={`${styles.sidebarLink} ${activeSection === link.id ? styles.sidebarLinkActive : ""}`}
                    >
                      {link.icon && (
                        <span className={`material-symbols-outlined ${styles.icon}`}>
                          {link.icon}
                        </span>
                      )}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content Canvas */}
          <div className={styles.contentCanvas}>
            {/* TL;DR Section */}
            {tldr && (
              <section className={styles.tldrSection}>
                <h2 className={styles.tldrTitle}>[THE TL;DR]</h2>
                <div className={styles.tldrGrid}>
                  {tldr.items.map((item, idx) => (
                    <div key={idx}>
                      <p className={styles.tldrHeader}>{item.label}</p>
                      <p className={styles.tldrValue}>{item.value}</p>
                      <p className={styles.tldrDesc}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Rendering The Sections */}
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

export function EditorialSection({ number, title, id, description, children }) {
  return (
    <section id={id} className={styles.sectionWrapper}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>{number}</span>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {description && <p className={styles.sectionDesc}>{description}</p>}
      </div>
      <div>
        {children}
      </div>
    </section>
  );
}

export function EditorialImage({ src, alt, caption, onClick }) {
  return (
    <figure className={styles.imageContainer} style={{ cursor: onClick ? 'zoom-in' : 'auto' }} onClick={onClick}>
      <img src={src} alt={alt} className={styles.image} style={{ borderRadius: '8px' }} />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
