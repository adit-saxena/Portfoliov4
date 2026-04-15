"use client";
import React from 'react';
import {
  BrandLayout,
  BrandSection,
  BrandSectionHeader,
  BrandAccent,
  BrandFeatureCard,
  BrandImageBanner,
  BrandStatItem,
  BrandCompare,
} from '../components/brand/BrandLayout';
import styles from '../components/brand/brand.module.css';

// Derived from home card backgroundColor="#420e0eff" → vivid red, WCAG 6.6:1 on white
const ACCENT = '#c0392b';

const TITLE_STYLE = {
  fontStyle: 'normal',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
  letterSpacing: '-0.02em',
};

export default function StageProject() {
  return (
    <BrandLayout
      accentColor={ACCENT}
      heroLabel="Stage OTT · Product Case Study"
      heroTitle={
        <>STAGE: <BrandAccent>Personalized OTT</BrandAccent> for Bharat</>
      }
      heroTitleStyle={{
        fontStyle: 'normal',
        textTransform: 'none',
        fontWeight: 700,
        fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
        letterSpacing: '-0.03em',
        lineHeight: 1.15,
      }}
      heroDesc="Stage is a regional SVOD OTT platform with 4M+ subscribers. A core challenge was 58% of trial users declined autopay, citing a lack of relevant content despite a large library. This project aimed to solve this by improving content personalization and engagement."
      heroInsight="The recommendation engine was only as good as its input data. No feedback loop = no personalization = continued churn."
      tldr={[
        { num: '01', text: 'Shipped binary feedback UI across Mobile, Web, and Android TV.' },
        { num: '02', text: 'Resolved iconography ambiguity through on-ground usability testing.' },
        { num: '03', text: 'Established the direct data pipeline required to train the ML model.' },
      ]}
      sidebarLinks={[
        { id: 'overview', label: 'Overview', icon: 'info' },
        { id: 'research', label: 'Research & Insights', icon: 'search' },
        { id: 'feedback', label: 'Explicit Feedback', icon: 'thumb_up' },
        { id: 'touchpoints', label: 'User Flows', icon: 'account_tree' },
        { id: 'icons', label: 'Icon Research', icon: 'emoji_emotions' },
        { id: 'final-ui', label: 'Final UI', icon: 'devices' },
        { id: 'impact', label: 'Outcome & Impact', icon: 'trending_up' },
      ]}
      nextProject={{ label: "Schmooze →", href: '/schmooze' }}
      outroTitle={<>The feedback loop is the <BrandAccent>product</BrandAccent>.</>}
      outroBody="Without reliable explicit signals, no recommendation engine can work. Shipping this system — cleanly, across three platforms — directly enabled Stage to attack the 58% trial drop-off."
    >

      {/* ── 00 Overview ── */}
      <BrandSection id="overview" variant="default">
        <BrandSectionHeader number="00" title="Overview & Business Problem" titleStyle={TITLE_STYLE} />
        <BrandImageBanner
          src="/stagetrialplan.png"
          alt="Stage's Pricing"
          tagLabel="Stage's Pricing"
          tagText="Trial plan context — 58% of trial users declined autopay, citing a lack of relevant content."
          height="35vh"
        />
        <div className={styles.twoCol}>
          <div>
            <p className={styles.sectionBody} style={{ marginBottom: '1.5rem' }}>
              Stage is a regional SVOD OTT platform with 4M+ subscribers. A core challenge was <strong>58% of trial users declined autopay</strong>, citing a <strong>lack of relevant content</strong> despite a large library. This project aimed to solve this by <strong>improving content personalization and engagement</strong>.
            </p>
          </div>
          <div>
            <div className={styles.heroInsightBox}>
              <p className={styles.heroInsightLabel}>The Constraint</p>
              <p className={styles.heroInsightText}>
                "The feedback UI couldn't disrupt the primary viewing experience. Placement had to feel contextual — not forced."
              </p>
            </div>
          </div>
        </div>
      </BrandSection>

      {/* ── 01 Role & Team ── */}
      <BrandSection id="role" variant="dark">
        <BrandSectionHeader number="01" title="My Role & Team" titleStyle={TITLE_STYLE} />
        <div className={styles.twoCol}>
          <div>
            <p className={styles.sectionBody} style={{ marginBottom: '1.5rem' }}>
              As a <strong>Product Designer, I drove this initiative</strong>, focusing on <strong>competitive audit, research, wireframing, prototyping, usability testing, and dev handoff</strong>.
            </p>
            <p className={styles.sectionBody}>
              I collaborated with a Senior Product Designer, Product Manager, and 6 Developers.
            </p>
          </div>
          <div className={styles.threeCol} style={{ marginTop: 0 }}>
            <BrandFeatureCard icon="manage_search" title="Research & Audit" body="Competitive audit across 6+ SVOD platforms. Recommendation engine model research." />
            <BrandFeatureCard icon="design_services" title="Design & Prototype" body="Wireframing, prototyping, and usability testing across all platforms." />
            <BrandFeatureCard icon="handshake" title="Dev Handoff" body="Semantic component specs. Direct collaboration with 6 engineers across 3 platforms." />
          </div>
        </div>
      </BrandSection>

      {/* ── 02 Research ── */}
      <BrandSection id="research" variant="default">
        <BrandSectionHeader number="02" title="Research & Insights" titleStyle={TITLE_STYLE} />
        <div className={styles.twoCol}>
          <div>
            <p className={styles.sectionBody} style={{ marginBottom: '1.5rem' }}>
              We conducted <strong>extensive secondary research, including a competitive audit of 6+ leading SVOD platforms</strong> to analyze content surfacing strategies.
            </p>
            <p className={styles.sectionBody}>
              We also <strong>researched recommendation engine models</strong> (Collaborative, Content, Hybrid Filtering) to inform our personalization strategy.
            </p>
          </div>
          <div>
            <BrandStatItem
              icon="model_training"
              title="Collaborative Filtering"
              body="Recommends based on what similar users liked. Strong for cold-start but requires volume."
            />
            <BrandStatItem
              icon="category"
              title="Content Filtering"
              body="Recommends based on attributes of content the user has engaged with. Needs explicit signals."
              muted
            />
            <BrandStatItem
              icon="merge_type"
              title="Hybrid Filtering"
              body="Combines both approaches. The target model — but requires clean explicit feedback data to function."
            />
          </div>
        </div>
      </BrandSection>

      {/* ── 03 Strategic Need ── */}
      <BrandSection id="feedback" variant="dark">
        <BrandSectionHeader number="03" title="Strategic Need for Explicit Feedback" titleStyle={TITLE_STYLE} />
        <div className={styles.twoCol}>
          <div>
            <p className={styles.sectionBody} style={{ marginBottom: '1.5rem' }}>
              Our existing recommendations lacked objective cues. Explicit feedback (like/dislike) was identified as the <strong>'ultimate source of truth'</strong> for user interest, serving as the <strong>backbone for a robust recommendation engine</strong>, and directly <strong>improving retention and conversion</strong>.
            </p>
            <p className={styles.sectionBody}>
              We proposed two feedback collection methods: simple voluntary interactions for overall satisfaction, and objective Likert scales for ML algorithms. We <strong>aligned with stakeholders to prioritize a user-friendly, industry-standard interaction model for higher adoption</strong>.
            </p>
          </div>
          <div>
            <BrandCompare
              before={{
                title: '5-Point Likert Scale',
                icons: [
                  { name: 'star' }, { name: 'star' }, { name: 'star' }, { name: 'star' }, { name: 'star', dim: true }
                ],
                verdict: 'Nuanced but confusing. Middle ratings gave the ML model ambiguous signals and users frequently skipped it.',
              }}
              after={{
                title: 'Binary Thumbs',
                icons: [
                  { name: 'thumb_up', accent: true, filled: true },
                  { name: 'thumb_down' },
                ],
                verdict: 'Hard signal. 10,000 binary votes are more useful than 1,000 star ratings for training a recommendation engine.',
                highlight: '',
              }}
            />
          </div>
        </div>
      </BrandSection>

      {/* ── 04 User Flows & Touchpoints ── */}
      <BrandSection id="touchpoints" variant="default">
        <BrandSectionHeader number="04" title="User Flows & Touchpoints" titleStyle={TITLE_STYLE} />
        <p className={styles.sectionBody} style={{ marginBottom: '2rem' }}>
          User flows were designed to <strong>integrate feedback collection seamlessly into key user journeys</strong>, such as post-content viewing and on content detail screens, based on competitive analysis.
        </p>
        <BrandImageBanner
          src="/UserTouchPoints.png"
          alt="User Touchpoints for Feedback Collection"
          tagLabel="User Touchpoints for Feedback Collection"
          tagText="Key moments in the viewing journey where feedback was anchored."
          imgStyle={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
        />
      </BrandSection>

      {/* ── 05 Icon Research ── */}
      <BrandSection id="icons" variant="dark">
        <BrandSectionHeader number="05" title="Icon Research & Usability Testing" titleStyle={TITLE_STYLE} />
        <div className={styles.twoCol}>
          <div>
            <p className={styles.sectionBody} style={{ marginBottom: '1.5rem' }}>
              A <strong>rigorous on-ground research (two rounds)</strong> was conducted to identify <strong>culturally appropriate and intuitive icons for our regional audience</strong>. This <strong>directly impacted usability and data quality</strong>.
            </p>
            <p className={styles.sectionBody}>
              Abstract icons caused measurable hesitation — users associated up/down arrow patterns with volume, not sentiment. We iterated until icons had zero ambiguity.
            </p>
          </div>
          <div className={styles.threeCol} style={{ marginTop: 0 }}>
            <BrandFeatureCard icon="science" title="2 Test Rounds" body="On-ground sessions with regional users before shipping. Not assumptions — actual observation." />
            <BrandFeatureCard icon="visibility" title="Icon Clarity" body="Iterated until icons had zero ambiguity. Any hesitation = failed test." />
            <BrandFeatureCard icon="data_object" title="Data Integrity" body="Culturally accurate icons = accurate ML training data. Bad icons = corrupted signals." />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <BrandImageBanner
              src="/EarlyStageIcons.png"
              alt="Initial Icon Ideations"
              tagLabel="Initial Icon Ideations"
              tagText="Early concepts — abstract arrows/thumbs that users associated with volume, not sentiment."
              imgStyle={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <BrandImageBanner
              src="/StageLaterIcons.png"
              alt="Icons Considered During Research for Cultural Relevance"
              tagLabel="Icons Considered During Research for Cultural Relevance"
              tagText="Icons tested for cultural relevance across regional demographics — final set had zero ambiguity."
              imgStyle={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </BrandSection>

      {/* ── 06 Final UI ── */}
      <BrandSection id="final-ui" variant="default">
        <BrandSectionHeader number="06" title="Design Details: Final UI" titleStyle={TITLE_STYLE} />
        <p className={styles.sectionBody} style={{ marginBottom: '2rem' }}>
          The final UI was designed for <strong>seamless integration and ease of use across Mobile, Web, and TV</strong>. <strong>Strategic placement</strong> on content detail screens, within the video player, and on home screens ensures intuitive user interaction.
        </p>
        <BrandImageBanner
          src="/StageMobile.png"
          alt="Final UI of Feedback Mechanism on Mobile Details Screen"
          tagLabel="Mobile UI"
          tagText="Final UI of Feedback Mechanism on Mobile Details Screen."
        />
        <BrandImageBanner
          src="/StageTV.png"
          alt="TV UI"
          tagLabel="TV UI"
          tagText="Final UI of Feedback Mechanism on Android TV — D-pad navigable, 10-foot legibility."
        />
        <BrandImageBanner
          src="/StageWeb.png"
          alt="Final UI of Feedback Mechanism on Web Details Screen"
          tagLabel="Web UI"
          tagText="Final UI of Feedback Mechanism on Web Details Screen."
        />
      </BrandSection>

      {/* ── 07 Outcome & Impact ── */}
      <BrandSection id="impact" variant="dark">
        <BrandSectionHeader number="07" title="Outcome & Impact" titleStyle={TITLE_STYLE} />
        <div className={styles.twoCol}>
          <div>
            <p className={styles.sectionBody} style={{ marginBottom: '2rem' }}>
              This feedback mechanism is a <strong>foundational element for Stage's growth</strong>. By collecting direct user preferences, we've established a <strong>crucial data source for our recommendation engine</strong>, leading to:
            </p>
            <BrandStatItem icon="recommend" title="Better Recommendations" body="More precise and personalized content discovery." />
            <BrandStatItem icon="timer" title="Enhanced Engagement" body="Increased time on platform due to relevant content." muted />
            <BrandStatItem icon="person_check" title="Improved Retention" body="Reduced trial-to-paid subscriber churn." />
            <BrandStatItem icon="trending_up" title="Increased Conversions" body="Directly impacting business goals." muted />
          </div>
          <div>
            <div className={styles.heroInsightBox}>
              <p className={styles.heroInsightLabel}>Design Manager Takeaway</p>
              <p className={styles.heroInsightText}>
                "The project required cross-functional coordination, culturally nuanced research, multi-platform systems thinking, and an engineering-first handoff approach. It shipped. It works. The data flows."
              </p>
            </div>
          </div>
        </div>
      </BrandSection>

    </BrandLayout>
  );
}
