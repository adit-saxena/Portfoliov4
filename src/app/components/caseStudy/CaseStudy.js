"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './caseStudy.module.css';

export { styles };

// Lets <Section> look its number and label up from the page's section list,
// so the nav and the kickers can't drift apart.
const SectionsContext = createContext([]);

/* ── A framed screenshot with a caption and click-to-zoom ── */
export function Figure({ src, alt, caption, className, narrow }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <figure className={className || (narrow ? styles.figureNarrow : styles.figure)}>
        <button type="button" className={styles.frame} onClick={() => setOpen(true)} aria-label={`Enlarge: ${alt}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} loading="lazy" />
        </button>
        {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
      </figure>

      {open && (
        <div className={styles.lightbox} onClick={() => setOpen(false)}>
          <button type="button" className={styles.lightboxClose} onClick={() => setOpen(false)} aria-label="Close">
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}

export function FigurePair({ children }) {
  return <div className={styles.figurePair}>{children}</div>;
}

/* ── Section nav. Active section is resolved from scroll position rather than
   from whichever observer entry fired last, so adjacent sections can't fight
   over it. ── */
function SectionNav({ sections }) {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    let frame = null;

    const resolve = () => {
      frame = null;
      const line = window.innerHeight * 0.35;
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // At the very bottom, latch the last section — otherwise a short final
      // section never reaches the line.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = sections[sections.length - 1].id;
      }
      setActive(current);
    };

    const onScroll = () => { if (frame === null) frame = requestAnimationFrame(resolve); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    resolve();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [sections]);

  const activeIndex = sections.findIndex((s) => s.id === active);
  const fill = ((activeIndex + 0.5) / sections.length) * 100;

  const go = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
  };

  return (
    <nav className={styles.nav} aria-label="Case study sections">
      <div className={styles.navList}>
        <span className={styles.navTrack} />
        <span className={styles.navFill} style={{ height: `${fill}%` }} />
        {sections.map(({ id, num, label }, i) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => go(e, id)}
            aria-current={active === id ? 'true' : undefined}
            className={[
              styles.navItem,
              active === id ? styles.navItemActive : '',
              activeIndex > i ? styles.navItemPast : '',
            ].filter(Boolean).join(' ')}
          >
            <span className={styles.navNum}>{num}</span>
            <span className={styles.navLabel}>{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ── Page shell: nav, header, optional hero shot and metrics, then the
   sections passed as children, then the footer. `accent` swaps the page's
   colour; the darker and lighter tints are mixed from it. ── */
export function CaseStudy({
  accent,
  sections,
  eyebrow,
  title,
  standfirst,
  insight,
  facts,
  factCols,
  hero,
  metrics,
  next,
  children,
}) {
  const theme = accent ? {
    '--accent': accent,
    '--accent-700': `color-mix(in srgb, ${accent} 70%, black)`,
    '--accent-100': `color-mix(in srgb, ${accent} 8%, white)`,
  } : undefined;

  return (
    <SectionsContext.Provider value={sections}>
      <div className={styles.page} style={theme}>

        <SectionNav sections={sections} />

        <div className={styles.shell}>
          <div className={styles.topNav}>
            <Link href="/" className={styles.backLink}>← Back</Link>
          </div>

          <header className={styles.header}>
            <div className={styles.eyebrow}>{eyebrow}</div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.standfirst}>{standfirst}</p>
            {insight && <p className={styles.insight}>{insight}</p>}

            {facts && (
              <dl className={styles.facts} style={factCols ? { '--fact-cols': factCols } : undefined}>
                {facts.map(({ key, val }) => (
                  <div key={key}>
                    <dt className={styles.factKey}>{key}</dt>
                    <dd className={styles.factVal}>{val}</dd>
                  </div>
                ))}
              </dl>
            )}
          </header>
        </div>

        {hero && <Figure className={styles.heroFigure} {...hero} />}

        <div className={styles.shell}>

          {metrics && (
            <section className={styles.metrics}>
              {metrics.map(({ value, label, accent: lead }) => (
                <div key={label}>
                  <div className={`${styles.metricValue} ${lead ? styles.metricValueAccent : ''}`}>{value}</div>
                  <div className={styles.metricLabel}>{label}</div>
                </div>
              ))}
            </section>
          )}

          <main className={styles.main}>
            {children}
          </main>

          <footer className={styles.footer}>
            <Link href="/" className={styles.backLink}>← Back</Link>
            <Link href={next.href} className={styles.nextLink}>{next.label}</Link>
          </footer>
        </div>
      </div>
    </SectionsContext.Provider>
  );
}

export function Section({ id, title, kicker, children }) {
  const section = useContext(SectionsContext).find((s) => s.id === id);
  return (
    <section id={id}>
      <div className={styles.sectionKicker}>{kicker || `${section.num} — ${section.label}`}</div>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

/* ── One line said loudly, with a quieter note under it ── */
export function Statement({ label, quote, note }) {
  return (
    <div className={styles.statement}>
      {label && <div className={styles.statementLabel}>{label}</div>}
      <div className={styles.statementQuote}>{quote}</div>
      {note && <p className={styles.statementNote}>{note}</p>}
    </div>
  );
}

/* ── Side-by-side comparison; the `shipped` option takes the accent ── */
export function Options({ items }) {
  return (
    <div className={styles.options}>
      {items.map(({ label, title, meta, body, shipped }) => (
        <div className={`${styles.option} ${shipped ? styles.optionShipped : ''}`} key={title}>
          <div className={`${styles.optionLabel} ${shipped ? styles.optionLabelShipped : ''}`}>{label}</div>
          <h4 className={styles.optionTitle}>{title}</h4>
          {meta && <p className={styles.optionMeta}>{meta}</p>}
          <p className={styles.optionBody}>{body}</p>
        </div>
      ))}
    </div>
  );
}

export function Features({ items, label }) {
  return (
    <>
      {label && <div className={styles.listLabel}>{label}</div>}
      <div className={styles.features}>
        {items.map(({ title, body }) => (
          <div className={styles.feature} key={title}>
            <h4 className={styles.featureTitle}>{title}</h4>
            <p className={styles.featureBody}>{body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

/* ── A pair of figures inside a section ── */
export function Stats({ items }) {
  return (
    <div className={styles.stats}>
      {items.map(({ value, label }) => (
        <div key={label}>
          <div className={styles.metricValue}>{value}</div>
          <div className={styles.metricLabel}>{label}</div>
        </div>
      ))}
    </div>
  );
}
