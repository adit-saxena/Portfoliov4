"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './express.module.css';

/* ── A framed screenshot with a caption and click-to-zoom ── */
function Figure({ src, alt, caption, className }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <figure className={className || styles.figure}>
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

const SECTIONS = [
  { id: 'context', num: '01', label: 'Context' },
  { id: 'trigger', num: '02', label: 'The trigger' },
  { id: 'research', num: '03', label: 'Research' },
  { id: 'user', num: '04', label: 'Talking to a user' },
  { id: 'deciding', num: '05', label: 'Deciding' },
  { id: 'express', num: '06', label: 'Designing Express' },
  { id: 'impact', num: '07', label: 'Impact' },
];

/* ── Section nav. Active section is resolved from scroll position rather than
   from whichever observer entry fired last, so adjacent sections can't fight
   over it. ── */
function SectionNav() {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    let frame = null;

    const resolve = () => {
      frame = null;
      const line = window.innerHeight * 0.35;
      let current = SECTIONS[0].id;
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // At the very bottom, latch the last section — otherwise a short final
      // section never reaches the line.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = SECTIONS[SECTIONS.length - 1].id;
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
  }, []);

  const activeIndex = SECTIONS.findIndex((s) => s.id === active);
  const fill = ((activeIndex + 0.5) / SECTIONS.length) * 100;

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
        {SECTIONS.map(({ id, num, label }, i) => (
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

const FACTS = [
  { key: 'Role', val: 'Product designer, end to end' },
  { key: 'Users', val: 'CPSE buyers financing MSME invoices' },
  { key: 'Shipped', val: 'Express flow · hardened bulk template' },
];

const METRICS = [
  { value: '1400%', label: 'Rise in uploads after the mandate', accent: true },
  { value: '~83%', label: 'Failure rate the spike exposed' },
  { value: '34%', label: 'Bulk error rate after the fix' },
  { value: '74%', label: 'Of users moved to Express' },
];

const ERRORS = [
  {
    error: 'Wrong GSTIN',
    share: '44%',
    tone: styles.shareLead,
    cause: 'Mislabeled — any failure to verify or create the seller was reported as a GSTIN error, whatever the cause',
  },
  {
    error: '“Payment Account Number”',
    share: '18%',
    tone: styles.share,
    cause: 'Naming ambiguity — read as “which account should I pay to,” not the buyer’s own account',
  },
  {
    error: 'Date format mismatch',
    share: '15%',
    tone: styles.share,
    cause: 'Free-text date entry, no format enforcement',
  },
  {
    error: 'Leading-zero truncation',
    share: 'silent',
    tone: styles.shareSilent,
    cause: 'Excel strips leading zeros from account numbers, corrupting data before validation sees it',
  },
];

const FEATURES = [
  {
    title: 'Seller first, by name',
    body: 'GSTIN stays the identifier — it’s the system’s unique key — with name-based search on top, because name is what a human filling this out repeatedly remembers. A known GSTIN prefetches everything else; a new one asks for a name.',
  },
  {
    title: 'Errors while you type',
    body: 'Validation runs inline instead of after submission, and the form renders only the fields the current state needs — for sellers already on file, bank account fields disappear.',
  },
  {
    title: 'Fields grouped the way finance reads them',
    body: 'Primary details, six optional deduction types, and supporting PO/GRN documents with an “apply to all invoices in this batch” checkbox. Wireframes moved from three columns to two: every amount field stacked vertically like a general ledger, primary info and supporting documents in the second column.',
  },
  {
    title: 'Several invoices, one sitting',
    body: 'An Add Invoice action keeps the session going without leaving the drawer.',
  },
];

/* Unlisted, not gated: the direct URL opens for anyone it's shared with.
   The password prompt lives on the home page card instead, and the route is
   marked noindex in layout.js so it stays off search engines. */
export default function KredXExpressPage() {
  // Seeing any KredX case study counts as unlocked, so arriving here by a
  // shared link doesn't get you prompted on the way to the other one.
  // localStorage, so the answer survives a new tab or a browser restart.
  useEffect(() => {
    localStorage.setItem('kredx_unlocked', '1');
  }, []);

  return (
    <div className={styles.page}>

      <SectionNav />

      <div className={styles.shell}>
        <div className={styles.topNav}>
          <Link href="/" className={styles.backLink}>← Back</Link>
        </div>

        <header className={styles.header}>
          <div className={styles.eyebrow}>KredX · TReDS</div>
          <h1 className={styles.title}>Easing out ₹20,000 crore worth of payments for 40+ Enterprises</h1>
          <p className={styles.standfirst}>
            A parallel workflow that replaced a blind bulk-upload-and-pray process with a validated,
            real-time entry flow — after an RBI mandate pushed upload volume up 400% and exposed a ~83%
            failure rate.
          </p>

          <dl className={styles.facts}>
            {FACTS.map(({ key, val }) => (
              <div key={key}>
                <dt className={styles.factKey}>{key}</dt>
                <dd className={styles.factVal}>{val}</dd>
              </div>
            ))}
          </dl>
        </header>
      </div>

      <Figure
        className={styles.heroFigure}
        src="/express-ui.jpg"
        alt="Express invoice upload — the form in its filled state, with the amounts ledger on the right"
        caption="The shipped flow — seller entered once, invoice fields left, every figure in a ledger on the right."
      />

      <div className={styles.shell}>

        <section className={styles.metrics}>
          {METRICS.map(({ value, label, accent }) => (
            <div key={label}>
              <div className={`${styles.metricValue} ${accent ? styles.metricValueAccent : ''}`}>{value}</div>
              <div className={styles.metricLabel}>{label}</div>
            </div>
          ))}
        </section>

        <main className={styles.main}>

          {/* ── 01 Context ── */}
          <section id="context">
            <div className={styles.sectionKicker}>01 — Context</div>
            <h2 className={styles.sectionTitle}>Bulk upload, and nothing else</h2>
            <p className={styles.p}>
              KredX is a TReDS platform: buyers — typically execs at Central Public Sector Enterprises —
              upload invoices so their MSME suppliers can be financed. The only manual path was a spreadsheet
              round trip. Download a template, fill it offline, re-upload with a zip of PDFs, submit, then
              track it in a &ldquo;past processes&rdquo; table.
            </p>
            <p className={styles.p}>
              The process was asynchronous by design, built to move high invoice values safely, which meant
              errors only surfaced after submission — returned as the same Excel file with an
              &ldquo;errors&rdquo; column bolted on. Download, decode, fix, re-upload. Repeat as needed.
            </p>
            <p className={styles.pLast}>
              That was tolerable because it was a fallback. Most invoices arrived through ERP integrations, so
              manual upload only mattered when integration failed. It served a small group of power users who
              had learned to live with it.
            </p>
          </section>

          {/* ── 02 The trigger ── */}
          <section id="trigger">
            <div className={styles.sectionKicker}>02 — The trigger</div>
            <h2 className={styles.sectionTitle}>A fallback becomes the front door</h2>
            <p className={styles.p}>
              On 30th June, RBI made it mandatory for CPSEs to route all MSME payments through TReDS.
              Overnight, uploads rose roughly 1400%, and support and PM teams started fielding a steady stream
              of stuck users.
            </p>
            <p className={styles.inset}>
              The problem reached me by ear, not by ticket — overhearing repeated troubleshooting from support
              and PMs was the actual signal that something needed attention.
            </p>
          </section>

          {/* ── 03 Research ── */}
          <section id="research">
            <div className={styles.sectionKicker}>03 — Research</div>
            <h2 className={styles.sectionTitle}>Three questions before touching design</h2>
            <p className={styles.p}>
              <strong>Is the failure rate actually bad?</strong> Total vs. failed records over 15 days in
              Metabase: a ~83% failure rate. Confirmed.
            </p>
            <p className={styles.p}>
              <strong>Learning curve, or broken process?</strong> I split the same data by user history.
              Repeat, &ldquo;learned&rdquo; users failed just as often as first-timers, which ruled out
              education and reframed the problem as the process itself.
            </p>

            <Figure
              src="/error-rate-metabase.png"
              alt="Metabase bar chart of daily error percentage on bulk upload, July 18 to August 15"
              caption="Daily error percentage on bulk upload, straight out of Metabase — the query the whole project was argued from, and the one it was later measured against."
            />

            <p className={styles.p} style={{ marginBottom: 22 }}>
              <strong>What are people stuck on?</strong> I pulled the error distribution, then asked
              engineering and support what each error actually meant.
            </p>

            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Error</th>
                    <th className={styles.thShare}>Share</th>
                    <th>Real cause</th>
                  </tr>
                </thead>
                <tbody>
                  {ERRORS.map(({ error, share, tone, cause }) => (
                    <tr key={error}>
                      <td>{error}</td>
                      <td className={tone}>{share}</td>
                      <td>{cause}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className={styles.pLast}>
              Nearly half of all &ldquo;failures&rdquo; weren&rsquo;t about GSTIN at all. The error message
              was telling users the wrong thing.
            </p>
          </section>

          {/* ── 04 Talking to a user ── */}
          <section id="user">
            <div className={styles.sectionKicker}>04 — Talking to a user</div>
            <h2 className={styles.sectionTitle}>One session broke an internal assumption</h2>
            <p className={styles.p}>
              I got on a call with a client actively using the flow and shadowed him building his upload
              sheet, live. He was copying from a pre-approved payment voucher his own team had issued — not
              looking anything up, not querying a system. Typing, line by line, from a piece of paper.
            </p>
            <p className={styles.p}>
              That contradicted a long-standing internal assumption that buyers used VLOOKUP-style techniques
              against their own systems, which was the justification for keeping the whole thing an offline
              spreadsheet exercise. If the user is transcribing static values, the platform can simply ask for
              them.
            </p>
            <p className={styles.p} style={{ marginBottom: 32 }}>
              I asked him what would make this easier. He didn&rsquo;t ask for a better spreadsheet.
            </p>

            <div className={styles.statement}>
              <div className={styles.statementQuote}>&ldquo;Tell me sooner.&rdquo;</div>
              <p className={styles.statementNote}>
                The brief, in three words: move validation from post-submission and asynchronous to real-time
                and inline.
              </p>
            </div>
          </section>

          {/* ── 05 Deciding ── */}
          <section id="deciding">
            <div className={styles.sectionKicker}>05 — Deciding</div>
            <h2 className={styles.sectionTitle}>Two paths, stress-tested</h2>

            <div className={styles.options}>
              <div className={styles.option}>
                <div className={styles.optionLabel}>Option A · cut</div>
                <h4 className={styles.optionTitle}>Digitize</h4>
                <p className={styles.optionBody}>
                  Take the invoice or voucher as a document and extract the fields automatically. Internal
                  precedent existed on factoring-unit creation.
                </p>
              </div>
              <div className={`${styles.option} ${styles.optionShipped}`}>
                <div className={`${styles.optionLabel} ${styles.optionLabelShipped}`}>Option B · shipped</div>
                <h4 className={styles.optionTitle}>Manual input, done right</h4>
                <p className={styles.optionBody}>
                  Every template column becomes a real field, validated as the user types, with errors
                  surfaced immediately instead of after a round trip.
                </p>
              </div>
            </div>

            <p className={styles.p}>
              I stress-tested A by asking what would make it fail: would buyers share quality invoice images,
              and would those invoices contain everything we need? The sense in the room was that buyers are
              cautious about sharing invoices at all, since it exposes a slice of their supply chain. The data
              agreed — the share of uploads submitted without the optional supporting document was already
              high, even when including it cost nothing — and the business team confirmed the same was coming
              back from customers.
            </p>
            <p className={styles.pLast}>
              Manual field entry won, not because it was the more interesting design, but because it was the
              one users would actually complete.
            </p>
          </section>

          {/* ── 06 Designing Express ── */}
          <section id="express">
            <div className={styles.sectionKicker}>06 — Designing Express</div>
            <h2 className={styles.sectionTitle}>An option, not a replacement</h2>
            <p className={styles.p}>
              Power users had built their week around bulk upload, so the constraint I set was that bulk stays
              exactly as it is and Express arrives alongside it. Bulk launched from the &ldquo;past
              processes&rdquo; table; Express doesn&rsquo;t need a progress table, being synchronous, so I
              anchored it on My Invoices where the data already lives — both paths behind one{' '}
              <strong>Add Invoice</strong> button opening a drawer. A drawer rather than a modal, to stay with
              the AntD language already in use; not a full page, because that would work against the quick
              feeling the flow depends on.
            </p>

            <Figure
              src="/express-flow.png"
              alt="Invoice list, the Add Invoice chooser drawer, and the Express form"
              caption="One button, two paths behind it."
            />

            <div className={styles.features}>
              {FEATURES.map(({ title, body }) => (
                <div className={styles.feature} key={title}>
                  <h4 className={styles.featureTitle}>{title}</h4>
                  <p className={styles.featureBody}>{body}</p>
                </div>
              ))}
            </div>

            <Figure
              src="/express-figma.png"
              alt="An earlier three-column iteration of Express, with deductions in a separate section"
              caption="An earlier iteration — three columns, with deductions in a section of their own. Folding them into a single amounts column is what produced the shipped layout at the top of this page."
            />

            <p className={styles.p}>
              <strong>What I cut.</strong> Multiple sellers as tabs, so a user could batch across sellers in
              one sitting. I tested it in a guided UAT with 5 users on a working prototype: they submitted at
              a seller level anyway, and couldn&rsquo;t tell whether &ldquo;submit&rdquo; applied to the
              active tab or all of them. Between that confusion, scoping pressure and unresolved error
              handling for multi-seller batches, the tabs came out.
            </p>

            <Figure
              src="/express-tabs-cut.png"
              alt="The multi-seller tab strip explored for Express, with a seller tab bar above the form"
              caption="The exploration that didn't ship — one tab per seller, cut after UAT."
            />

            <p className={styles.pLast}>
              <strong>The parallel fix.</strong> Bulk still had to survive the spike, so I hardened the
              template alongside: the barely-used guide folded into its first sheet, all 28 columns regrouped,
              cell formatting locked with column-level validation, dropdowns wherever possible (Project ID had
              been free text), field names rewritten from what the error research revealed, GSTIN and PAN
              merged into the single field the backend needed, and guidance to prefix account numbers with{' '}
              <code className={styles.code}>#</code> — closing the silent leading-zero loop.
            </p>
          </section>

          {/* ── 07 Impact ── */}
          <section id="impact">
            <div className={styles.sectionKicker}>07 — Impact</div>
            <h2 className={styles.sectionTitle}>Where it landed</h2>
            <p className={styles.p}>
              Express now carries 29% of invoice volume and 74% of user volume — most individual users moved
              across, while the largest bulk uploaders still push their batches through the template, which is
              exactly why keeping it alive and fixing it mattered.
            </p>
            <p className={styles.p} style={{ marginBottom: 28 }}>
              Bulk upload&rsquo;s error rate is down to a five-day average of 34%, from the ~83% that started
              this project, driven by the parallel template hardening.
            </p>
            <p className={styles.footnote}>
              Figures from the platform&rsquo;s Metabase dashboards, measured on the same queries used in the
              original research.
            </p>
          </section>

        </main>

        <footer className={styles.footer}>
          <Link href="/" className={styles.backLink}>← Back</Link>
          <Link href="/kredx" className={styles.nextLink}>Next project →</Link>
        </footer>
      </div>
    </div>
  );
}
