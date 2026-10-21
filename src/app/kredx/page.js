"use client";
import React, { useEffect } from 'react';
import { CaseStudy, Section, Figure, Statement, Options, Features, Stats, styles } from '../components/caseStudy/CaseStudy';

const SECTIONS = [
  { id: 'impact', num: '00', label: 'Impact' },
  { id: 'research', num: '01', label: 'The brief' },
  { id: 'discovery', num: '02', label: 'Discovery' },
  { id: 'ideation', num: '03', label: 'Ideation' },
  { id: 'solution', num: '04', label: 'The solution' },
  { id: 'outcome', num: '05', label: 'Outcome' },
];

const TLDR = [
  { key: '01', val: 'Replaced a CSV + ZIP upload workflow with direct PDF upload and IDP-powered auto-extraction.' },
  { key: '02', val: 'Made deduction entry modular — usage data showed most FUs had zero deductions, so the complexity served a minority case.' },
  { key: '03', val: 'Validated with 5 UAT users before go-live. TDS percentage auto-apply is the planned next iteration.' },
];

const METRICS = [
  { value: '−56%', label: 'FU creation time, 9 minutes to 4', accent: true },
  { value: '64.6%', label: 'Of invoices had no deductions' },
  { value: '1', label: 'Median invoices per FU' },
  { value: '5', label: 'UAT users before go-live' },
];

const QUESTIONS = [
  {
    title: '“Users” — who, exactly?',
    body: 'Corporate treasury teams familiar with SAP S/4HANA ERP — not a general consumer audience. They were uploading invoice data they had already prepared in another system.',
  },
  {
    title: '“Tough” — relative to what?',
    body: 'Relative to their ERP workflow, where invoice data was already structured and clean. Re-exporting a CSV and compiling a ZIP was redundant work layered on top of work already done.',
  },
];

const METHODS = [
  {
    title: 'Session recordings',
    body: 'Reviewed existing recordings to find drop-off, hesitation, and retry patterns. The CSV upload step showed the highest abandonment rate.',
  },
  {
    title: 'User interviews',
    body: 'Spoke with corporate treasury users. They described CSV preparation as a ‘translation tax’ — moving data from S/4HANA into a format KredX would accept.',
  },
  {
    title: 'User flow mapping',
    body: 'Drew the end-to-end flow from invoice creation in the ERP to submission on KredX. Every handoff, every file, every manual touch point.',
  },
  {
    title: 'SAP S/4HANA deep dive',
    body: 'Watched ERP tutorials to understand how users actually generate and manage invoice data. The critical finding: every field we required already existed in their system, accurately structured. The invoice PDF was the source of truth.',
  },
];

const PAIN_POINTS = [
  {
    title: 'CSV formatting errors',
    body: 'Column mismatches, wrong delimiters, merged cells from Excel — the upload failed silently or threw cryptic error messages with no clear recovery path.',
  },
  {
    title: 'ZIP compilation overhead',
    body: 'Manually selecting, naming, and zipping invoice PDFs. Any filename mismatch between CSV rows and ZIP contents caused the entire submission to fail.',
  },
  {
    title: 'No partial recovery',
    body: 'One bad row in the CSV invalidated the whole factoring unit. Users had to fix, re-export, and re-upload the full batch from scratch.',
  },
];

const OPTIONS = [
  {
    label: 'Design for all cases',
    title: 'Inline bulk deduction editor',
    body: 'Build a full bulk-deduction editor alongside PDF upload. Handles every case — but adds significant UI complexity that most users will never need, and slows down the primary flow.',
  },
  {
    label: 'Modular, data-backed',
    title: 'Primary flow + optional module',
    meta: 'Primary flow · Deduction module',
    body: <>
      Data showed deductions were applied in a small minority of FUs. Ship the clean primary flow first.
      Deduction entry becomes an opt-in module — available but non-blocking.{' '}
      <strong>Design for the majority; accommodate the rest.</strong>
    </>,
    shipped: true,
  },
];

const FLOW = [
  {
    title: 'Upload invoice PDFs',
    body: 'Users drop their invoice PDFs directly — the same files they already have from S/4HANA. No reformatting, no renaming, no ZIP compilation required.',
  },
  {
    title: 'IDP auto-extraction',
    body: 'Intelligent Document Processing reads each PDF and populates all required fields — invoice number, amount, date, counterparty — automatically. Users review, not re-enter.',
  },
  {
    title: 'Modular deductions',
    body: 'Deduction entry is available as an opt-in step. It doesn’t impose on users creating standard factoring units, but it’s there when needed.',
  },
];

/* Unlisted, not gated — see kredx-express/page.js. The password prompt lives
   on the home page card; this route is marked noindex in layout.js. */
export default function KredXPage() {
  // See kredx-express/page.js — any KredX case study view marks the device.
  useEffect(() => {
    localStorage.setItem('kredx_unlocked', '1');
  }, []);

  return (
    <CaseStudy
      accent="#2C5FA3"
      sections={SECTIONS}
      eyebrow="KredX · TReDS Platform"
      title="Redesigning the Factoring Unit Flow"
      standfirst="KredX operates a TReDS platform where corporates create factoring units — bundles of invoices submitted for financier bidding. The process required uploading a manually-prepared CSV and a matching ZIP of invoice PDFs. It was fragile, error-prone, and a consistent source of user frustration."
      insight="A single design decision cut factoring unit creation time by 56% — from 9 minutes to 4. Here’s how we got there."
      facts={TLDR}
      factCols={3}
      metrics={METRICS}
      next={{ href: '/kredx-express', label: 'KredX · Express Upload →' }}
    >

      {/* ── 00 Impact ── */}
      <Section id="impact" title="The Impact">
        <p className={styles.p} style={{ marginBottom: 32 }}>
          Before we get into the process — this is what the redesign moved.
        </p>

        <Statement
          label="KPI · FU Creation Time · 14 days post-launch"
          quote={<><s style={{ opacity: 0.35 }}>9m</s> → 4m</>}
          note="Avg. session time to create and submit a factoring unit, measured over the first 14 days post-release. Not a lab number — this is what randomly sampled users actually did."
        />

        <p className={styles.p} style={{ marginTop: 32 }}>
          <strong>Why it matters.</strong> For corporate treasury teams creating multiple FUs a week, 5
          minutes saved per submission compounds fast. The process went from something people dreaded to
          something they don&rsquo;t think about.
        </p>
        <p className={styles.pLast}>
          <strong>How we got here.</strong> The answer wasn&rsquo;t a UI polish pass. It was removing a
          process step entirely — replacing a multi-file manual export with a single PDF upload and IDP
          extraction. The sections below explain the thinking.
        </p>
      </Section>

      {/* ── 01 The Brief ── */}
      <Section id="research" title="Dissecting the Brief">
        <p className={styles.inset}>
          &ldquo;Users have been complaining about how tough our factoring unit creation process is.&rdquo;
        </p>
        <p className={styles.pLast}>
          Before designing anything, I pushed back on two words.
        </p>

        <Features items={QUESTIONS} />

        <p className={styles.inset} style={{ marginBottom: 0 }}>
          <strong>Reframed problem.</strong> Users weren&rsquo;t struggling to understand the product. They
          were frustrated at being asked to repackage data they already had — just to hand it back to us
          in a different format.
        </p>
      </Section>

      {/* ── 02 Discovery ── */}
      <Section id="discovery" title="Discovery">
        <Figure
          src="/FUCreationFlow.png"
          alt="User Flow Map — ERP to KredX Submission: End-to-end journey from invoice creation in SAP S/4HANA to factoring unit submission."
          caption="User flow map, ERP to KredX submission — the end-to-end journey from invoice creation in SAP S/4HANA to factoring unit submission."
        />

        <p className={styles.pLast}>
          I used four methods in sequence. Each pass narrowed the problem definition before the next.
        </p>

        <Features items={METHODS} />
        <Features label="Pain points identified" items={PAIN_POINTS} />

        <p className={styles.inset} style={{ marginBottom: 0 }}>
          <strong>The unlock.</strong> Every field we required — invoice number, amount, due date,
          counterparty — was already printed on the invoice PDF. The CSV was users manually transcribing
          their own documents for us.
        </p>
      </Section>

      {/* ── 03 Ideation ── */}
      <Section id="ideation" title="Ideation & Tradeoffs">
        <p className={styles.p}>
          The natural solution was IDP — upload invoice PDFs, extract fields automatically. But one question
          kept surfacing before I could commit to the design direction.
        </p>
        <p className={styles.p}>
          Factoring units can carry invoice-level deductions — TDS, quality holdbacks, advance adjustments.
          In the old CSV flow, these were just columns. In a PDF-first flow, they&rsquo;d need manual entry.
          For large batches, that could be a real problem.
        </p>
        <p className={styles.inset}>
          <strong>The question that mattered.</strong> If we remove the CSV, how do users enter deductions
          across 50 invoices? Is that a real problem we need to solve upfront, or are we optimizing for a
          rare case?
        </p>
        <p className={styles.p}>
          So before designing around the assumption, I pulled the data.
        </p>

        <Stats
          items={[
            { value: '64.6%', label: 'of invoices had no deductions whatsoever — no TDS, no debit note, no advance adjustment' },
            { value: '1', label: 'median invoices per FU — most units are small, making PDF-by-PDF upload entirely feasible' },
          ]}
        />

        <Options items={OPTIONS} />
      </Section>

      {/* ── 04 Solution ── */}
      <Section id="solution" title="The Redesigned Flow">
        <Figure
          src="/idealFlow.png"
          alt="Ideal flow for factoring unit creation — invoice PDFs uploaded and scanned first, then splitting into single-seller and multiple-seller paths."
          caption="The ideal flow — invoice PDFs uploaded and scanned first, splitting into single-seller and multiple-seller paths."
        />

        <p className={styles.pLast}>
          The new flow replaced a three-step manual process with a single upload interaction, letting IDP do
          the work users had been doing by hand.
        </p>

        <Features items={FLOW} />

        <p className={styles.p}>
          <strong>Eliminated the translation tax.</strong> The CSV required users to convert structured ERP
          data into a format we could read. IDP reads the source document directly — that overhead is gone
          entirely.
        </p>
        <p className={styles.pLast}>
          <strong>Reduced error surface.</strong> No CSV means no column mismatches, no delimiter errors, no
          merge-cell surprises. The primary failure mode of the old flow is removed at the architecture level.
        </p>
      </Section>

      {/* ── 05 Outcome ── */}
      <Section id="outcome" title="Validation & Outcome">
        <p className={styles.p}>
          <strong>UAT with 5 users.</strong> Ran User Acceptance Testing with 5 corporate users before
          go-live. Sessions covered the full PDF upload → IDP review → submit flow. No significant blockers
          surfaced.
        </p>
        <p className={styles.p}>
          <strong>Shipped to production.</strong> The redesigned flow went live. All 5 UAT participants completed their first FU without assistance — no training
          material required.
        </p>
        <p className={styles.p}>
          <strong>Next: TDS percentage auto-apply.</strong> Planned improvement: allow users to enter TDS as a
          fixed percentage and apply it uniformly across all invoices in a FU — eliminating the last
          repetitive manual step for deduction-heavy cases.
        </p>
        <p className={styles.inset} style={{ marginBottom: 40 }}>
          <strong>Design principle.</strong> Don&rsquo;t ask users to give you data they&rsquo;ve already
          given to another system. If the invoice PDF exists, read the invoice PDF. The user&rsquo;s job is
          to confirm, not transcribe.
        </p>

        <Statement
          quote="The best process is the one users don’t notice."
          note="By replacing a multi-file manual upload with a single PDF drop and letting IDP handle the rest, factoring unit creation went from a source of daily frustration to a routine background task."
        />
      </Section>

    </CaseStudy>
  );
}
