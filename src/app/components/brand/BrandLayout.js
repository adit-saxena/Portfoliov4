"use client";
import React, { useEffect, useState, useCallback } from 'react';
import HeaderP from '../headerProjects';
import styles from './brand.module.css';

export function BrandLayout({
  accentColor = '#c0392b',
  heroLabel,
  heroTitle,
  heroTitleStyle,
  heroDesc,
  heroInsight,
  tldr,
  sidebarLinks,
  nextProject,
  outroTitle,
  outroBody,
  children,
}) {
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    }
  }, []);

  // Track reading progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for sidebar active state
  useEffect(() => {
    if (!sidebarLinks || sidebarLinks.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-15% 0px -65% 0px', threshold: 0 }
    );
    sidebarLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sidebarLinks]);

  const activeIndex = sidebarLinks ? sidebarLinks.findIndex(l => l.id === activeSection) : -1;
  const totalLinks = sidebarLinks ? sidebarLinks.length : 0;

  // Height of fill line as fraction of nav content
  // Each item is roughly equal height; fill covers items up to and including active
  const fillPercent = totalLinks > 0 && activeIndex >= 0
    ? ((activeIndex + 0.5) / totalLinks) * 100
    : 0;

  return (
    <div className={styles.page} style={{ '--accent': accentColor }}>
      {/* Reading progress bar */}
      <div className={styles.readingProgress}>
        <div className={styles.readingProgressFill} style={{ width: `${scrollProgress}%` }} />
      </div>

      <HeaderP />

      {/* ── Sidebar ── */}
      <aside className={styles.sidebar}>
        <a href="/" className={styles.sidebarBack}>
          <span className={`material-symbols-outlined ${styles.sidebarBackIcon}`}>arrow_back</span>
          All Work
        </a>

        <div className={styles.sidebarProjectInfo}>
          <p className={styles.sidebarProjectTitle}>{heroLabel}</p>
          <span className={styles.sidebarProjectTag}>Case Study</span>
        </div>

        <nav className={styles.sidebarNav}>
          {/* Track line */}
          <div className={styles.sidebarNavTrack} />
          {/* Accent fill line */}
          <div
            className={styles.sidebarNavFill}
            style={{ height: `${fillPercent}%` }}
          />

          {sidebarLinks && sidebarLinks.map(({ id, label }, index) => {
            const isActive = activeSection === id;
            const isPast = activeIndex > index;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={styles.sidebarNavItem}
              >
                <span className={[
                  styles.sidebarNavDot,
                  isActive ? styles.sidebarNavDotActive : '',
                  isPast && !isActive ? styles.sidebarNavDotPast : '',
                ].filter(Boolean).join(' ')} />
                <span className={[
                  styles.sidebarNavLabel,
                  isActive ? styles.sidebarNavLabelActive : '',
                  isPast && !isActive ? styles.sidebarNavLabelPast : '',
                ].filter(Boolean).join(' ')}>
                  {label}
                </span>
              </a>
            );
          })}
        </nav>
      </aside>

      {/* ── Main Canvas ── */}
      <main className={styles.main}>

        {/* ── Hero ── */}
        <section className={styles.hero}>
          <span className={styles.heroLabel}>{heroLabel}</span>
          <h1 className={styles.heroTitle} style={heroTitleStyle}>{heroTitle}</h1>

          <div className={styles.heroGrid}>
            <div>
              <p className={styles.heroDescription}>{heroDesc}</p>
              {heroInsight && (
                <div className={styles.heroInsightBox}>
                  <span className={styles.heroInsightLabel}>Key Insight</span>
                  <p className={styles.heroInsightText}>&ldquo;{heroInsight}&rdquo;</p>
                </div>
              )}
            </div>
            {tldr && (
              <div className={styles.tldrBox}>
                <span className={`material-symbols-outlined ${styles.tldrBoxIcon}`}>article</span>
                <p className={styles.tldrTitle}>TL;DR</p>
                <ul className={styles.tldrList}>
                  {tldr.map(({ num, text }) => (
                    <li key={num} className={styles.tldrItem}>
                      <span className={styles.tldrItemNum}>{num}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* ── Content Sections ── */}
        <div className={styles.sections}>
          {children}
        </div>

        {/* ── Outro ── */}
        <div className={styles.outro}>
          <div>
            <h3 className={styles.outroTitle}>
              {outroTitle || "Design that ships is design that matters."}
            </h3>
            <p className={styles.outroBody}>
              {outroBody || "By prioritizing clarity over complexity, the solution shipped across all platforms."}
            </p>
          </div>
          <div className={styles.outroNav}>
            {nextProject && (
              <>
                <p className={styles.outroNextLabel}>Next Case Study</p>
                <a href={nextProject.href} className={styles.outroNextLink}>
                  {nextProject.label}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </>
            )}
            <a href="/" className={styles.outroBtn}>Back to Portfolio</a>
          </div>
        </div>

      </main>
    </div>
  );
}

export function BrandSection({ id, variant = 'default', children }) {
  const variantClass = { default: '', dark: styles.darkBg, black: styles.blackBg }[variant] || '';
  return (
    <section id={id} className={`${styles.section} ${variantClass}`}>
      {children}
    </section>
  );
}

export function BrandSectionHeader({ number, title, subtitle, align = 'left', titleStyle }) {
  return (
    <div className={styles.sectionHeaderWrap} style={{ textAlign: align, marginBottom: '2rem' }}>
      {number && (
        <span className={styles.sectionDecorNum}>{number}</span>
      )}
      {subtitle && <span className={styles.sectionLabel}>{subtitle}</span>}
      <h2 className={styles.sectionTitle} style={titleStyle}>
        <span style={{ color: 'var(--accent)', opacity: 0.45 }}>{number}&thinsp;</span>
        {title}
      </h2>
      <div className={styles.sectionDivider} style={{
        marginLeft: align === 'right' ? 'auto' : 0,
        width: align === 'right' ? '50%' : '100%'
      }} />
    </div>
  );
}

export function BrandAccent({ children }) {
  return <span className={styles.heroAccent}>{children}</span>;
}

export function BrandFeatureCard({ icon, title, body }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureCardIconWrap}>
        <span className={`material-symbols-outlined ${styles.featureCardIcon}`}>{icon}</span>
      </div>
      <h4 className={styles.featureCardTitle}>{title}</h4>
      <p className={styles.featureCardBody}>{body}</p>
    </div>
  );
}

export function BrandImageBanner({ src, alt, tagLabel, tagText, height, imgStyle }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.imageBannerWrap} onClick={() => setOpen(true)}>
        <img src={src} alt={alt} className={styles.imageBanner} style={imgStyle ?? (height ? { height } : undefined)} />
        {tagLabel && (
          <div className={styles.imageBannerTag}>
            <span className={styles.imageBannerTagLabel}>{tagLabel}</span>
            <span className={styles.imageBannerTagText}>{tagText}</span>
          </div>
        )}
      </div>
      {open && (
        <div className={styles.lightboxOverlay} onClick={() => setOpen(false)}>
          <button className={styles.lightboxClose} onClick={() => setOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
          <img
            src={src}
            alt={alt}
            className={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export function BrandStatItem({ icon, title, body, muted = false }) {
  return (
    <div className={styles.statItem}>
      <div className={`${styles.statIcon} ${muted ? styles.statIconMuted : ''}`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <p className={styles.statTitle}>{title}</p>
        <p className={styles.statBody}>{body}</p>
      </div>
    </div>
  );
}

export function BrandCodePanel({ accentColor }) {
  return (
    <div className={styles.codePanel}>
      <div className={styles.codePanelBadge}>Production Ready</div>
      <div className={styles.codeInner}>
        <p className={styles.codeComment}>// Design System Tokens</p>
        <p>"colors": {'{'}</p>
        <p style={{ paddingLeft: '1rem' }}>"surface": "#F5F5F5",</p>
        <p style={{ paddingLeft: '1rem' }}>"primary": "{accentColor}",</p>
        <p style={{ paddingLeft: '1rem' }}>"muted": "#555555"</p>
        <p>{'}'},</p>
        <p>"spacing": {'{'}</p>
        <p style={{ paddingLeft: '1rem' }}>"xs": "4px",</p>
        <p style={{ paddingLeft: '1rem' }}>"sm": "8px",</p>
        <p style={{ paddingLeft: '1rem' }}>"md": "16px"</p>
        <p>{'}'},</p>
        <p>"typography": {'{'}</p>
        <p style={{ paddingLeft: '1rem' }}>"family": "Plus Jakarta Sans",</p>
        <p style={{ paddingLeft: '1rem' }}>"h1": "clamp(2.5rem,6vw,5rem)"</p>
        <p>{'}'}</p>
        <div className={styles.codeSyncBar}>
          <span>Last update: 2 mins ago</span>
          <span><span className={styles.syncDot}></span>Synchronized</span>
        </div>
      </div>
    </div>
  );
}

export function BrandCompare({ before, after, beforeLabel, afterLabel, subtle = false }) {
  return (
    <div className={styles.compareGrid}>
      <div className={styles.compareCard}>
        <span className={`${styles.compareCardBadge} ${styles.compareCardBadgeFail}`}>
          {beforeLabel || 'Before (Fail)'}
        </span>
        <h4 className={styles.compareCardTitle}>{before.title}</h4>
        <div className={styles.compareCardIcons}>
          {before.icons && before.icons.map((icon, i) => (
            <span key={i} className={`material-symbols-outlined ${styles.compareCardIcon}`} style={{ opacity: icon.dim ? 0.25 : 0.4 }}>{icon.name}</span>
          ))}
        </div>
        <p className={styles.compareCardVerdict}>{before.verdict}</p>
      </div>
      <div className={styles.compareCard} style={{ position: 'relative', overflow: 'hidden' }}>
        {!subtle && <div className={styles.compareCardFlair}></div>}
        <span className={`${styles.compareCardBadge} ${styles.compareCardBadgeWin}`}>
          {afterLabel || 'After (Pivot)'}
        </span>
        <h4 className={styles.compareCardTitle}>{after.title}</h4>
        <div className={styles.compareCardIcons}>
          {after.icons && after.icons.map((icon, i) => (
            <span
              key={i}
              className={`material-symbols-outlined ${icon.accent ? styles.compareCardIconAccent : styles.compareCardIcon}`}
              style={{ fontVariationSettings: icon.filled ? "'FILL' 1" : undefined }}
            >
              {icon.name}
            </span>
          ))}
        </div>
        {after.subtext && (
          <p style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)' }}>
            {after.subtext}
          </p>
        )}
        <p className={styles.compareCardVerdict}>
          {after.verdict}
          {after.highlight && <span className={styles.compareCardHighlight}> {after.highlight}</span>}
        </p>
      </div>
    </div>
  );
}

/* ── Image Placeholder ── */
export function ImagePlaceholder({ label = 'UI Screenshot', caption, aspectRatio = '16/9', icon = 'image', fullBleed = false }) {
  return (
    <div
      className={[styles.imagePlaceholder, fullBleed ? styles.imagePlaceholderFullBleed : ''].filter(Boolean).join(' ')}
      style={{ aspectRatio: fullBleed ? undefined : aspectRatio }}
    >
      <div className={styles.imagePlaceholderInner}>
        <span className={`material-symbols-outlined ${styles.imagePlaceholderIcon}`}>{icon}</span>
        <p className={styles.imagePlaceholderLabel}>{label}</p>
        {caption && <p className={styles.imagePlaceholderCaption}>{caption}</p>}
      </div>
    </div>
  );
}
