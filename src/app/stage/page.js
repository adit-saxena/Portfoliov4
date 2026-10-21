"use client";
import React from 'react';
import { CaseStudy, Section, Figure, FigurePair, Statement, Options, Features, styles } from '../components/caseStudy/CaseStudy';

const SECTIONS = [
  { id: 'overview', num: '00', label: 'Overview' },
  { id: 'role', num: '01', label: 'Role & team' },
  { id: 'research', num: '02', label: 'Research & insights' },
  { id: 'feedback', num: '03', label: 'Explicit feedback' },
  { id: 'touchpoints', num: '04', label: 'User flows' },
  { id: 'icons', num: '05', label: 'Icon research' },
  { id: 'final-ui', num: '06', label: 'Final UI' },
  { id: 'impact', num: '07', label: 'Outcome & impact' },
];

const TLDR = [
  { key: '01', val: 'Shipped binary feedback UI across Mobile, Web, and Android TV.' },
  { key: '02', val: 'Resolved iconography ambiguity through on-ground usability testing.' },
  { key: '03', val: 'Established the direct data pipeline required to train the ML model.' },
];

const METRICS = [
  { value: '58%', label: 'Of trial users declined autopay', accent: true },
  { value: '4M+', label: 'Subscribers on the platform' },
  { value: '6+', label: 'SVOD platforms audited' },
  { value: '3', label: 'Platforms shipped — Mobile, Web, Android TV' },
];

const ROLE = [
  { title: 'Research & audit', body: 'Competitive audit across 6+ SVOD platforms. Recommendation engine model research.' },
  { title: 'Design & prototype', body: 'Wireframing, prototyping, and usability testing across all platforms.' },
  { title: 'Dev handoff', body: 'Semantic component specs. Direct collaboration with 6 engineers across 3 platforms.' },
];

const MODELS = [
  { title: 'Collaborative filtering', body: 'Recommends based on what similar users liked. Strong for cold-start but requires volume.' },
  { title: 'Content filtering', body: 'Recommends based on attributes of content the user has engaged with. Needs explicit signals.' },
  { title: 'Hybrid filtering', body: 'Combines both approaches. The target model — but requires clean explicit feedback data to function.' },
];

const OPTIONS = [
  {
    label: 'Before · fail',
    title: '5-point Likert scale',
    body: 'Nuanced but confusing. Middle ratings gave the ML model ambiguous signals and users frequently skipped it.',
  },
  {
    label: 'After · pivot',
    title: 'Binary thumbs',
    body: 'Hard signal. 10,000 binary votes are more useful than 1,000 star ratings for training a recommendation engine.',
    shipped: true,
  },
];

const TESTING = [
  { title: '2 test rounds', body: 'On-ground sessions with regional users before shipping. Not assumptions — actual observation.' },
  { title: 'Icon clarity', body: 'Iterated until icons had zero ambiguity. Any hesitation = failed test.' },
  { title: 'Data integrity', body: 'Culturally accurate icons = accurate ML training data. Bad icons = corrupted signals.' },
];

const OUTCOMES = [
  { title: 'Better recommendations', body: 'More precise and personalized content discovery.' },
  { title: 'Enhanced engagement', body: 'Increased time on platform due to relevant content.' },
  { title: 'Improved retention', body: 'Reduced trial-to-paid subscriber churn.' },
  { title: 'Increased conversions', body: 'Directly impacting business goals.' },
];

export default function StageProject() {
  return (
    <CaseStudy
      accent="#c0392b"
      sections={SECTIONS}
      eyebrow="Stage OTT · Product Case Study"
      title="STAGE: Personalized OTT for Bharat"
      standfirst="Stage is a regional SVOD OTT platform with 4M+ subscribers. A core challenge was 58% of trial users declined autopay, citing a lack of relevant content despite a large library. This project aimed to solve this by improving content personalization and engagement."
      insight="The recommendation engine was only as good as its input data. No feedback loop = no personalization = continued churn."
      facts={TLDR}
      factCols={3}
      metrics={METRICS}
      next={{ href: '/schmooze', label: 'Schmooze →' }}
    >

      {/* ── 00 Overview ── */}
      <Section id="overview" title="Overview & Business Problem">
        <Figure
          src="/stagetrialplan.png"
          alt="Stage's Pricing"
          caption="Trial plan context — 58% of trial users declined autopay, citing a lack of relevant content."
        />
        <p className={styles.inset} style={{ marginBottom: 0 }}>
          <strong>The constraint.</strong> The feedback UI couldn&rsquo;t disrupt the primary viewing
          experience. Placement had to feel contextual — not forced.
        </p>
      </Section>

      {/* ── 01 Role & Team ── */}
      <Section id="role" title="My Role & Team">
        <p className={styles.p}>
          As a <strong>Product Designer, I drove this initiative</strong>, focusing on <strong>competitive
          audit, research, wireframing, prototyping, usability testing, and dev handoff</strong>.
        </p>
        <p className={styles.pLast}>
          I collaborated with a Senior Product Designer, Product Manager, and 6 Developers.
        </p>

        <Features items={ROLE} />
      </Section>

      {/* ── 02 Research ── */}
      <Section id="research" title="Research & Insights">
        <p className={styles.p}>
          We conducted <strong>extensive secondary research, including a competitive audit of 6+ leading
          SVOD platforms</strong> to analyze content surfacing strategies.
        </p>
        <p className={styles.pLast}>
          We also <strong>researched recommendation engine models</strong> (Collaborative, Content, Hybrid
          Filtering) to inform our personalization strategy.
        </p>

        <Features items={MODELS} />
      </Section>

      {/* ── 03 Strategic Need ── */}
      <Section id="feedback" title="Strategic Need for Explicit Feedback">
        <p className={styles.p}>
          Our existing recommendations lacked objective cues. Explicit feedback (like/dislike) was identified
          as the <strong>&lsquo;ultimate source of truth&rsquo;</strong> for user interest, serving as
          the <strong>backbone for a robust recommendation engine</strong>, and directly <strong>improving
          retention and conversion</strong>.
        </p>
        <p className={styles.p} style={{ marginBottom: 28 }}>
          We proposed two feedback collection methods: simple voluntary interactions for overall
          satisfaction, and objective Likert scales for ML algorithms. We <strong>aligned with stakeholders
          to prioritize a user-friendly, industry-standard interaction model for higher adoption</strong>.
        </p>

        <Options items={OPTIONS} />
      </Section>

      {/* ── 04 User Flows & Touchpoints ── */}
      <Section id="touchpoints" title="User Flows & Touchpoints">
        <p className={styles.p}>
          User flows were designed to <strong>integrate feedback collection seamlessly into key user
          journeys</strong>, such as post-content viewing and on content detail screens, based on
          competitive analysis.
        </p>
        <Figure
          src="/UserTouchPoints.png"
          alt="User Touchpoints for Feedback Collection"
          caption="User touchpoints for feedback collection — key moments in the viewing journey where feedback was anchored."
        />
      </Section>

      {/* ── 05 Icon Research ── */}
      <Section id="icons" title="Icon Research & Usability Testing">
        <p className={styles.p}>
          A <strong>rigorous on-ground research (two rounds)</strong> was conducted to identify{' '}
          <strong>culturally appropriate and intuitive icons for our regional audience</strong>. This{' '}
          <strong>directly impacted usability and data quality</strong>.
        </p>
        <p className={styles.pLast}>
          Abstract icons caused measurable hesitation — users associated up/down arrow patterns with
          volume, not sentiment. We iterated until icons had zero ambiguity.
        </p>

        <Features items={TESTING} />

        <FigurePair>
          <Figure
            src="/EarlyStageIcons.png"
            alt="Initial Icon Ideations"
            caption="Initial icon ideations — abstract arrows/thumbs that users associated with volume, not sentiment."
          />
          <Figure
            src="/StageLaterIcons.png"
            alt="Icons Considered During Research for Cultural Relevance"
            caption="Icons tested for cultural relevance across regional demographics — final set had zero ambiguity."
          />
        </FigurePair>
      </Section>

      {/* ── 06 Final UI ── */}
      <Section id="final-ui" title="Design Details: Final UI">
        <p className={styles.p}>
          The final UI was designed for <strong>seamless integration and ease of use across Mobile, Web,
          and TV</strong>. <strong>Strategic placement</strong> on content detail screens, within the video
          player, and on home screens ensures intuitive user interaction.
        </p>
        <Figure
          src="/StageMobile.png"
          alt="Final UI of Feedback Mechanism on Mobile Details Screen"
          caption="Mobile — final UI of the feedback mechanism on the details screen."
        />
        <Figure
          src="/StageTV.png"
          alt="TV UI"
          caption="Android TV — D-pad navigable, 10-foot legibility."
        />
        <Figure
          src="/StageWeb.png"
          alt="Final UI of Feedback Mechanism on Web Details Screen"
          caption="Web — final UI of the feedback mechanism on the details screen."
        />
      </Section>

      {/* ── 07 Outcome & Impact ── */}
      <Section id="impact" title="Outcome & Impact">
        <p className={styles.pLast}>
          This feedback mechanism is a <strong>foundational element for Stage&rsquo;s growth</strong>. By
          collecting direct user preferences, we&rsquo;ve established a <strong>crucial data source for our
          recommendation engine</strong>, leading to:
        </p>

        <Features items={OUTCOMES} />

        <p className={styles.inset} style={{ marginBottom: 40 }}>
          <strong>Design manager takeaway.</strong> The project required cross-functional coordination,
          culturally nuanced research, multi-platform systems thinking, and an engineering-first handoff
          approach. It shipped. It works. The data flows.
        </p>

        <Statement
          quote="The feedback loop is the product."
          note="Without reliable explicit signals, no recommendation engine can work. Shipping this system — cleanly, across three platforms — directly enabled Stage to attack the 58% trial drop-off."
        />
      </Section>

    </CaseStudy>
  );
}
