'use client';
import cs from '../caseStudy/caseStudy.module.css';
import styles from './loader.module.css';

/* Shown while a case study loads. A skeleton of the case study page itself,
   built on the same layout classes, so each bar sits where its text will land
   and the real page replaces it without a jump. */

// One grey bar per line of text, sized by the line-height of whatever it
// sits in.
function Lines({ widths }) {
  return widths.map((w, i) => (
    <span key={i} className={styles.line} style={{ width: w }} />
  ));
}

const NAV = ['70%', '58%', '76%', '52%', '66%', '60%', '72%'];

export default function Loader() {
  return (
    <div className={styles.overlay} role="status" aria-label="Loading case study">
      <div className={cs.page}>

        <nav className={cs.nav} aria-hidden="true">
          <div className={cs.navList}>
            <span className={cs.navTrack} />
            {NAV.map((w, i) => (
              <div key={i} className={cs.navItem}>
                <span className={cs.navLabel} style={{ flex: 1 }}>
                  <Lines widths={[w]} />
                </span>
              </div>
            ))}
          </div>
        </nav>

        <div className={cs.shell} aria-hidden="true">
          <div className={cs.topNav}>
            <span className={cs.backLink}><Lines widths={['52px']} /></span>
          </div>

          <header className={cs.header}>
            <div className={cs.eyebrow}><Lines widths={['148px']} /></div>
            <div className={cs.title}><Lines widths={['100%', '62%']} /></div>
            <div className={cs.standfirst}><Lines widths={['100%', '97%', '99%', '44%']} /></div>
            <div className={`${cs.insight} ${styles.insight}`}><Lines widths={['100%', '64%']} /></div>

            <div className={cs.facts} style={{ '--fact-cols': 3 }}>
              {[0, 1, 2].map((i) => (
                <div key={i}>
                  <div className={cs.factKey}><Lines widths={['22px']} /></div>
                  <div className={cs.factVal}><Lines widths={['100%', '88%', '54%']} /></div>
                </div>
              ))}
            </div>
          </header>

          <div className={cs.metrics}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i}>
                <div className={cs.metricValue}><Lines widths={['58%']} /></div>
                <div className={cs.metricLabel}><Lines widths={['90%']} /></div>
              </div>
            ))}
          </div>

          <div className={cs.main}>
            <div>
              <div className={cs.sectionKicker}><Lines widths={['96px']} /></div>
              <div className={cs.sectionTitle}><Lines widths={['46%']} /></div>
              <div className={cs.p}><Lines widths={['100%', '98%', '94%', '40%']} /></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
