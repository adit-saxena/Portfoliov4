"use client";
import React, { useEffect, useState } from 'react'; // eslint-disable-line
import { useRouter } from 'next/navigation';
import {
  BrandLayout,
  BrandSection,
  BrandSectionHeader,
  BrandAccent,
  BrandFeatureCard,
  BrandStatItem,
  BrandCompare,
  ImagePlaceholder,
} from '../components/brand/BrandLayout';
import styles from '../components/brand/brand.module.css';

const ACCENT = '#2C5FA3';

const TITLE_STYLE = {
  fontStyle: 'normal',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
  letterSpacing: '-0.02em',
};

export default function KredXPage() {
  const router = useRouter();
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('kredx_unlocked') === '1') {
      setUnlocked(true);
    } else {
      router.replace('/');
    }
  }, [router]);

  if (!unlocked) return null;

  return (
    <BrandLayout
      accentColor={ACCENT}
      heroLabel="KredX · TReDS Platform"
      heroTitle="Redesigning the Factoring Unit Flow"
      heroTitleStyle={{
        fontStyle: 'normal',
        textTransform: 'none',
        fontWeight: 700,
        fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
        letterSpacing: '-0.03em',
        lineHeight: 1.15,
      }}
      heroDesc="KredX operates a TReDS platform where corporates create factoring units — bundles of invoices submitted for financier bidding. The process required uploading a manually-prepared CSV and a matching ZIP of invoice PDFs. It was fragile, error-prone, and a consistent source of user frustration."
      heroInsight="A single design decision cut factoring unit creation time by 56% — from 9 minutes to 4. Here's how we got there."
      tldr={[
        { num: '01', text: 'Replaced a CSV + ZIP upload workflow with direct PDF upload and IDP-powered auto-extraction.' },
        { num: '02', text: 'Made deduction entry modular — usage data showed most FUs had zero deductions, so the complexity served a minority case.' },
        { num: '03', text: 'Validated with 5 UAT users before go-live. TDS percentage auto-apply is the planned next iteration.' },
      ]}
      sidebarLinks={[
        { id: 'impact', label: 'Impact', icon: 'bar_chart' },
        { id: 'research', label: 'The Brief', icon: 'search' },
        { id: 'discovery', label: 'Discovery', icon: 'manage_search' },
        { id: 'ideation', label: 'Ideation', icon: 'lightbulb' },
        { id: 'solution', label: 'The Solution', icon: 'check_circle' },
        { id: 'outcome', label: 'Outcome', icon: 'trending_up' },
      ]}
      nextProject={{ label: "Stage OTT →", href: '/stage' }}
      outroTitle={<>The best process is the one <BrandAccent>users don't notice.</BrandAccent></>}
      outroBody="By replacing a multi-file manual upload with a single PDF drop and letting IDP handle the rest, factoring unit creation went from a source of daily frustration to a routine background task."

    >

      {/* ── 00 Impact ── */}
      <BrandSection id="impact" variant="dark">
        <BrandSectionHeader number="00" title="The Impact" titleStyle={TITLE_STYLE} />
        <div className={styles.twoCol} style={{ alignItems: 'flex-start' }}>
          <div>
            <p className={styles.sectionBody} style={{ marginBottom: '2rem' }}>
              Before we get into the process — this is what the redesign moved.
            </p>
            <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '2.5rem 2rem', marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem' }}>KPI · FU Creation Time · 14 days post-launch</p>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div>
                  <p style={{ fontSize: '3.5rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.05em', lineHeight: 1, opacity: 0.3, textDecoration: 'line-through' }}>9m</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.375rem' }}>Before</p>
                </div>
                <span className="material-symbols-outlined" style={{ color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>arrow_forward</span>
                <div>
                  <p style={{ fontSize: '3.5rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '-0.05em', lineHeight: 1 }}>4m</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.375rem' }}>After</p>
                </div>
                <div style={{ marginBottom: '0.5rem', background: 'color-mix(in srgb, var(--accent) 10%, transparent)', padding: '0.5rem 1rem', alignSelf: 'flex-end' }}>
                  <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '-0.03em' }}>−56%</p>
                </div>
              </div>
            </div>
            <p className={styles.sectionBody} style={{ fontSize: '0.9375rem' }}>
              Avg. session time to create and submit a factoring unit, measured over the first 14 days post-release. Not a lab number — this is what randomly sampled users actually did.
            </p>
          </div>
          <div>
            <div className={styles.heroInsightBox}>
              <p className={styles.heroInsightLabel}>Why it matters</p>
              <p className={styles.heroInsightText}>
                "For corporate treasury teams creating multiple FUs a week, 5 minutes saved per submission compounds fast. The process went from something people dreaded to something they don't think about."
              </p>
            </div>
            <div style={{ marginTop: '1.5rem', padding: '1.25rem 1.5rem', background: 'var(--bg)', border: '1px solid var(--border)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>How we got here</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                The answer wasn't a UI polish pass. It was removing a process step entirely — replacing a multi-file manual export with a single PDF upload and IDP extraction. The sections below explain the thinking.
              </p>
            </div>
          </div>
        </div>
      </BrandSection>

      {/* ── 01 The Brief ── */}
      <BrandSection id="research" variant="default">
        <BrandSectionHeader number="01" title="Dissecting the Brief" titleStyle={TITLE_STYLE} />
        <div className={styles.twoCol}>
          <div>
            <p className={styles.sectionBody} style={{ fontStyle: 'italic', color: 'var(--text)', marginBottom: '1.75rem', borderLeft: '3px solid var(--border)', paddingLeft: '1.25rem' }}>
              "Users have been complaining about how tough our factoring unit creation process is."
            </p>
            <p className={styles.sectionBody} style={{ marginBottom: '1.5rem' }}>
              Before designing anything, I pushed back on two words.
            </p>
            <BrandStatItem
              icon="person_search"
              title='"Users" — who, exactly?'
              body="Corporate treasury teams familiar with SAP S/4HANA ERP — not a general consumer audience. They were uploading invoice data they had already prepared in another system."
            />
            <BrandStatItem
              icon="compare_arrows"
              title='"Tough" — relative to what?'
              body="Relative to their ERP workflow, where invoice data was already structured and clean. Re-exporting a CSV and compiling a ZIP was redundant work layered on top of work already done."
              muted
            />
          </div>
          <div>
            <div className={styles.heroInsightBox}>
              <p className={styles.heroInsightLabel}>Reframed Problem</p>
              <p className={styles.heroInsightText}>
                "Users weren't struggling to understand the product. They were frustrated at being asked to repackage data they already had — just to hand it back to us in a different format."
              </p>
            </div>
          </div>
        </div>
      </BrandSection>

      {/* ── 02 Discovery ── */}
      <BrandSection id="discovery" variant="default">
        <BrandSectionHeader number="02" title="Discovery" titleStyle={TITLE_STYLE} />
        <ImagePlaceholder
          label="User Flow Map — ERP to KredX Submission"
          caption="End-to-end journey from invoice creation in SAP S/4HANA to factoring unit submission. Every handoff, file, and manual touchpoint mapped."
          fullBleed
          icon="account_tree"
        />
        <p className={styles.sectionBody} style={{ marginBottom: '2.5rem' }}>
          I used four methods in sequence. Each pass narrowed the problem definition before the next.
        </p>
        <div className={styles.threeCol}>
          <BrandFeatureCard
            icon="videocam"
            title="Session Recordings"
            body="Reviewed existing recordings to find drop-off, hesitation, and retry patterns. The CSV upload step showed the highest abandonment rate."
          />
          <BrandFeatureCard
            icon="chat"
            title="User Interviews"
            body="Spoke with corporate treasury users. They described CSV preparation as a 'translation tax' — moving data from S/4HANA into a format KredX would accept."
          />
          <BrandFeatureCard
            icon="schema"
            title="User Flow Mapping"
            body="Drew the end-to-end flow from invoice creation in the ERP to submission on KredX. Every handoff, every file, every manual touch point."
          />
        </div>
        <div style={{ marginTop: '2rem' }}>
          <BrandStatItem
            icon="play_lesson"
            title="SAP S/4HANA Deep Dive"
            body="Watched ERP tutorials to understand how users actually generate and manage invoice data. The critical finding: every field we required already existed in their system, accurately structured. The invoice PDF was the source of truth."
          />
        </div>

        <div className={styles.twoCol} style={{ marginTop: '2.5rem' }}>
          <div>
            <p className={styles.sectionBody} style={{ fontWeight: 600, color: 'var(--text)', marginBottom: '1.25rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Pain Points Identified
            </p>
            <BrandStatItem
              icon="error_outline"
              title="CSV Formatting Errors"
              body="Column mismatches, wrong delimiters, merged cells from Excel — the upload failed silently or threw cryptic error messages with no clear recovery path."
            />
            <BrandStatItem
              icon="folder_zip"
              title="ZIP Compilation Overhead"
              body="Manually selecting, naming, and zipping invoice PDFs. Any filename mismatch between CSV rows and ZIP contents caused the entire submission to fail."
              muted
            />
            <BrandStatItem
              icon="repeat"
              title="No Partial Recovery"
              body="One bad row in the CSV invalidated the whole factoring unit. Users had to fix, re-export, and re-upload the full batch from scratch."
            />
          </div>
          <div>
            <div className={styles.heroInsightBox}>
              <p className={styles.heroInsightLabel}>The Unlock</p>
              <p className={styles.heroInsightText}>
                "Every field we required — invoice number, amount, due date, counterparty — was already printed on the invoice PDF. The CSV was users manually transcribing their own documents for us."
              </p>
            </div>
          </div>
        </div>
      </BrandSection>

      {/* ── 03 Ideation ── */}
      <BrandSection id="ideation" variant="dark">
        <BrandSectionHeader number="03" title="Ideation & Tradeoffs" titleStyle={TITLE_STYLE} />
        <div className={styles.twoCol}>
          <div>
            <p className={styles.sectionBody} style={{ marginBottom: '1.5rem' }}>
              The natural solution was IDP — upload invoice PDFs, extract fields automatically. But one question kept surfacing before I could commit to the design direction.
            </p>
            <p className={styles.sectionBody} style={{ marginBottom: '1.5rem' }}>
              Factoring units can carry invoice-level deductions — TDS, quality holdbacks, advance adjustments. In the old CSV flow, these were just columns. In a PDF-first flow, they'd need manual entry. For large batches, that could be a real problem.
            </p>
            <p className={styles.sectionBody} style={{ marginBottom: '1.5rem' }}>
              So before designing around the assumption, I pulled the data.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
              <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '1.25rem 1.5rem' }}>
                <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '-0.04em', lineHeight: 1 }}>64.6%</p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: 1.5 }}>of invoices had no deductions whatsoever — no TDS, no debit note, no advance adjustment</p>
              </div>
              <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '1.25rem 1.5rem' }}>
                <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '-0.04em', lineHeight: 1 }}>1</p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: 1.5 }}>median invoices per FU — most units are small, making PDF-by-PDF upload entirely feasible</p>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.heroInsightBox}>
              <p className={styles.heroInsightLabel}>The Question That Mattered</p>
              <p className={styles.heroInsightText}>
                "If we remove the CSV, how do users enter deductions across 50 invoices? Is that a real problem we need to solve upfront, or are we optimizing for a rare case?"
              </p>
            </div>
          </div>
        </div>

        <BrandCompare
          subtle
          beforeLabel="Design for All Cases"
          afterLabel="Modular, Data-Backed"
          before={{
            title: 'Inline Bulk Deduction Editor',
            icons: [
              { name: 'table_chart' }, { name: 'edit_note' }, { name: 'calculate' }, { name: 'table_chart' }
            ],
            verdict: 'Build a full bulk-deduction editor alongside PDF upload. Handles every case — but adds significant UI complexity that most users will never need, and slows down the primary flow.',
          }}
          after={{
            title: 'Primary Flow + Optional Module',
            icons: [
              { name: 'picture_as_pdf', accent: true, filled: true },
              { name: 'add_circle', accent: true, filled: true },
            ],
            subtext: 'Primary flow  ·  Deduction module',
            verdict: 'Data showed deductions were applied in a small minority of FUs. Ship the clean primary flow first. Deduction entry becomes an opt-in module — available but non-blocking.',
            highlight: 'Design for the majority; accommodate the rest.',
          }}
        />
      </BrandSection>

      {/* ── 04 Solution ── */}
      <BrandSection id="solution" variant="default">
        <BrandSectionHeader number="04" title="The Redesigned Flow" titleStyle={TITLE_STYLE} />
        <ImagePlaceholder
          label="Redesigned Factoring Unit Flow — Before & After"
          caption="Old CSV + ZIP upload vs. new single PDF drop with IDP auto-extraction. Full Figma annotated spec."
          fullBleed
          icon="swap_horiz"
        />
        <p className={styles.sectionBody} style={{ marginBottom: '2.5rem' }}>
          The new flow replaced a three-step manual process with a single upload interaction, letting IDP do the work users had been doing by hand.
        </p>
        <div className={styles.threeCol}>
          <BrandFeatureCard
            icon="upload_file"
            title="Upload Invoice PDFs"
            body="Users drop their invoice PDFs directly — the same files they already have from S/4HANA. No reformatting, no renaming, no ZIP compilation required."
          />
          <BrandFeatureCard
            icon="document_scanner"
            title="IDP Auto-Extraction"
            body="Intelligent Document Processing reads each PDF and populates all required fields — invoice number, amount, date, counterparty — automatically. Users review, not re-enter."
          />
          <BrandFeatureCard
            icon="tune"
            title="Modular Deductions"
            body="Deduction entry is available as an opt-in step. It doesn't impose on users creating standard factoring units, but it's there when needed."
          />
        </div>
        <div style={{ marginTop: '2.5rem' }}>
          <BrandStatItem
            icon="bolt"
            title="Eliminated the Translation Tax"
            body="The CSV required users to convert structured ERP data into a format we could read. IDP reads the source document directly — that overhead is gone entirely."
          />
          <BrandStatItem
            icon="shield"
            title="Reduced Error Surface"
            body="No CSV means no column mismatches, no delimiter errors, no merge-cell surprises. The primary failure mode of the old flow is removed at the architecture level."
            muted
          />
        </div>
      </BrandSection>

      {/* ── 05 Outcome ── */}
      <BrandSection id="outcome" variant="default">
        <BrandSectionHeader number="05" title="Validation & Outcome" titleStyle={TITLE_STYLE} />
        <div className={styles.twoCol}>
          <div>
            <BrandStatItem
              icon="group"
              title="UAT with 5 Users"
              body="Ran User Acceptance Testing with 5 corporate users before go-live. Sessions covered the full PDF upload → IDP review → submit flow. No significant blockers surfaced."
            />
            <BrandStatItem
              icon="check_circle"
              title="Shipped to Production"
              body="The redesigned flow went live. CSV and ZIP upload paths were retired. All 5 UAT participants completed their first FU without assistance — no training material required."
              muted
            />
            <BrandStatItem
              icon="schedule"
              title="Next: TDS Percentage Auto-Apply"
              body="Planned improvement: allow users to enter TDS as a fixed percentage and apply it uniformly across all invoices in a FU — eliminating the last repetitive manual step for deduction-heavy cases."
            />
          </div>
          <div>
            <div className={styles.heroInsightBox}>
              <p className={styles.heroInsightLabel}>Design Principle</p>
              <p className={styles.heroInsightText}>
                "Don't ask users to give you data they've already given to another system. If the invoice PDF exists, read the invoice PDF. The user's job is to confirm, not transcribe."
              </p>
            </div>
          </div>
        </div>
      </BrandSection>

    </BrandLayout>
  );
}
