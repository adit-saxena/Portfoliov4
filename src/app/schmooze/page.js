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

// ── Derived from home page card: backgroundColor="#07008C"
// Lightened to vivid blue for legibility against dark background
const ACCENT = '#4f46e5';

const TITLE_STYLE = {
  fontStyle: 'normal',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
  letterSpacing: '-0.02em',
};

export default function SchmoozePage() {
  return (
    <BrandLayout
      accentColor={ACCENT}
      heroLabel="Product Design Case Study"
      heroTitle={
        <>
          SCHMOOZE:{' '}
          <BrandAccent>MATCHMAKING</BrandAccent>{' '}
          DONE RIGHT
        </>
      }
      heroTitleStyle={{
        fontStyle: 'normal',
        textTransform: 'none',
        fontWeight: 700,
        fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
        letterSpacing: '-0.03em',
        lineHeight: 1.15,
      }}
      heroDesc="Schmooze is a dating app that matches users based on their meme preferences, moving away from traditional swiping methods. The core challenge: a casual product perception was attracting users with misaligned intent, causing friction in real matchmaking flows."
      heroInsight="Initial interactions revealed users were treating it as a social playground. We needed to redesign the experience to communicate serious dating intent without sacrificing the brand's playful core."
      tldr={[
        { num: '01', text: 'Identified misaligned user intent through in-depth interviews and observation sessions.' },
        { num: '02', text: 'Separated meme browsing from profile swiping into distinct intention-based flows.' },
        { num: '03', text: 'Redesigned UI language to balance playfulness with the gravitas of dating apps like Hinge.' },
      ]}
      sidebarLinks={[
        { id: 'research', label: 'User Research', icon: 'search' },
        { id: 'challenges', label: 'Problem Statement', icon: 'warning' },
        { id: 'architecture', label: 'Design Solutions', icon: 'architecture' },
        { id: 'iteration', label: 'Iteration', icon: 'update' },
        { id: 'conclusion', label: 'Conclusion', icon: 'check_circle' },
      ]}
      nextProject={{ label: "KredX →", href: '/nda' }}
      outroTitle={<>Clarity of intent is the <BrandAccent>foundation</BrandAccent> of connection.</>}
      outroBody="By separating casual meme browsing from intentional dating flows, Schmooze gained the design credibility it needed to retain users who genuinely wanted to match."

    >
      {/* ── 01 Research ── */}
      <BrandSection id="research" variant="default">
        <BrandSectionHeader number="01" title="User Research & The Opportunity" titleStyle={TITLE_STYLE} />
        <p className={styles.sectionBody} style={{ marginBottom: '2.5rem' }}>
          A multi-faceted research approach was employed to understand user perceptions of Schmooze and identify barriers hindering a smooth user experience.
        </p>
        <div className={styles.threeCol} style={{ marginTop: 0 }}>
          <BrandFeatureCard
            icon="compare"
            title="Competitive Audit"
            body="Analyzed how Schmooze's features and interface compared to other popular dating apps, noting Schmooze's distinct casual and 'funky' design language."
          />
          <BrandFeatureCard
            icon="person_search"
            title="Participant Observation"
            body="Used the app firsthand to understand the user flow and initial interactions — surfacing friction that users themselves couldn't articulate."
          />
          <BrandFeatureCard
            icon="forum"
            title="User Interviews"
            body="Directly engaged with users on the app. Initial sessions were hesitant — researcher profiles were redesigned to be more welcoming, which successfully encouraged participation."
          />
        </div>
        <BrandImageBanner
          src="/Schmooze2.png"
          alt="Profile for participant recruitment"
          tagLabel="Participant Recruitment"
          tagText="Profile redesigned to be more welcoming and transparent about research intentions — unlocked honest responses."
        />
        <div className={styles.twoCol}>
          <div>
            <h3 className={styles.sectionBody} style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.5rem', marginBottom: '1.5rem' }}>
              Aligning meme consumption with the intent to foster real dating connections.
            </h3>
            <p className={styles.sectionBody}>
              A critical subset of the user base viewed Schmooze as a pure meme platform, with no awareness or intent toward dating.
            </p>
          </div>
          <div>
            <div className={styles.heroInsightBox}>
              <p className={styles.heroInsightLabel}>Research Insight</p>
              <p className={styles.heroInsightText}>
                "Users weren't swiping to match — they were swiping to react. The meme format had inadvertently become the destination, not the vehicle."
              </p>
            </div>
          </div>
        </div>
      </BrandSection>

      {/* ── 02 Challenges ── */}
      <BrandSection id="challenges" variant="dark">
        <BrandSectionHeader number="02" title={<>Problem Statement & <BrandAccent>Friction</BrandAccent></>} titleStyle={TITLE_STYLE} />
        <p className={styles.sectionBody} style={{ marginBottom: '2rem' }}>
          The research surfaced severe misalignment in perception and behavior across the user base. Three core friction points emerged from usability testing.
        </p>
        <BrandImageBanner
          src="/Schmooze1.png"
          alt="UI comparison with other dating apps"
          tagLabel="Competitive Analysis"
          tagText="Mapping Schmooze's UI language vs Hinge, Bumble."
        />
        <div className={styles.threeCol}>
          <BrandFeatureCard
            icon="swipe"
            title="Mindless Swiping"
            body="Users often swiped through memes and profiles without careful consideration, leading to matches lacking genuine connection. Some seemed desperate to interact, regardless of match quality."
          />
          <BrandFeatureCard
            icon="swap_horiz"
            title="Fluctuating User Intent"
            body="Users' primary interest in the app varied — some were focused on memes, while their desire for dating fluctuated over time."
          />
          <BrandFeatureCard
            icon="person_off"
            title="Misaligned Perceptions"
            body="Due to its casual branding, many users viewed Schmooze more as a general socializing app — attracting users not seeking romantic connections, including some just looking to socialize."
          />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '1.25rem' }}>
          <BrandFeatureCard
            icon="chat_bubble_outline"
            title="Chat Initiation Hurdles"
            body="Users found it difficult to start conversations with matches, often missing opportunities for meaningful interaction — no icebreaker architecture existed in the product."
          />
          <BrandFeatureCard
            icon="bug_report"
            title="Technical Glitches"
            body="Frequent technical bugs, particularly within the chat system, frustrated users and sometimes led them to abandon the app entirely."
          />
        </div>
      </BrandSection>

      {/* ── 03 Solutions ── */}
      <BrandSection id="architecture" variant="default">
        <BrandSectionHeader number="03" title={<>Architecting <BrandAccent>Design</BrandAccent> Solutions</>} titleStyle={TITLE_STYLE} />
        <p className={styles.sectionBody} style={{ marginBottom: '2.5rem' }}>
          Based on the research insights, three design solutions were proposed.
        </p>
        <BrandStatItem
          icon="call_split"
          title="Solution #1 — Separate Tabs for Memes and Profiles"
          body="To help users differentiate between browsing content (memes) and evaluating potential matches (profiles), distinct tabs were introduced. This aimed to make users more mindful during profile swiping."
        />
        <BrandImageBanner
          src="/Schmooze3.png"
          alt="Suggested UI with separate Memes and Profiles tabs"
          tagLabel="Solution #1 — Suggested UI"
          tagText="Separate 'Memes' and 'Profiles' tabs."
        />
        <BrandStatItem
          icon="manage_search"
          title="Solution #2 — Enhanced Profile Discovery"
          body="For users wanting more control over matching beyond the algorithm, a new tab was proposed allowing them to find others who liked the same specific memes."
          muted
        />
        <BrandImageBanner
          src="/Schmooze4.png"
          alt="Suggested UI for discovering profiles based on shared meme likes"
          tagLabel="Solution #2 — Suggested UI"
          tagText="Suggested UI for discovering profiles based on shared meme likes."
        />
        <BrandStatItem
          icon="palette"
          title="Solution #3 — Refining the UI Language"
          body="To more clearly communicate Schmooze's intent as a dating platform, the design language was refined to balance the fun elements with a more elegant, serious aesthetic, akin to other dating apps."
        />
        <BrandImageBanner
          src="/Schmooze5.png"
          alt="Redesigned Onboarding Flow"
          tagLabel="Redesigned Onboarding Flow"
          tagText="Redesigned flows with refined UI language."
          height="40vh"
        />
        <BrandImageBanner
          src="/Schmooze6.png"
          alt="Redesigned Base Flow"
          tagLabel="Redesigned Base Flow"
          tagText="Redesigned flows with refined UI language."
          height="40vh"
        />
      </BrandSection>

      {/* ── 04 Iteration ── */}
      <BrandSection id="iteration" variant="black">
        <div className={styles.iterationIntro}>
          <span className={styles.iterationLabel}>Design Refinement</span>
          <h2 className={styles.iterationTitle}>
            Playful, But <em>Purposeful</em>
          </h2>
          <p className={styles.iterationSubtitle}>
            The UI language needed to walk a tightrope — fun enough to retain the meme DNA, serious enough to attract genuine daters.
          </p>
        </div>
        <BrandCompare
          before={{
            title: 'Single Unified Feed',
            icons: [
              { name: 'view_stream' }, { name: 'view_stream' }, { name: 'view_stream' }, { name: 'view_stream' }
            ],
            verdict: "Blended meme reactions and dating swipes in a single feed. Users couldn't distinguish between content engagement and romantic interest — match rates were low.",
          }}
          after={{
            title: 'Segmented Intent Flows',
            icons: [
              { name: 'image', accent: true, filled: true },
              { name: 'favorite', accent: true, filled: true },
            ],
            subtext: 'Memes ↔ Profiles — Clear mode separation',
            verdict: 'Chat initiation rates up. Users reported feeling the app was "more serious" while retaining the meme-discovery',
            highlight: 'fun they came for.',
          }}
        />
      </BrandSection>

      {/* ── 05 Conclusion ── */}
      <BrandSection id="conclusion" variant="default">
        <BrandSectionHeader number="05" title="Better Matchmaking Experience" titleStyle={TITLE_STYLE} />
        <div className={styles.twoCol}>
          <div>
            <p className={styles.sectionBody} style={{ marginBottom: '1.5rem' }}>
              By understanding user behaviors and perceptions through research, key pain points like mindless swiping, unclear app intent, and interaction difficulties were identified.
            </p>
            <p className={styles.sectionBody}>
              The proposed design solutions — introducing distinct tabs, offering tailored profile discovery, and refining the UI's visual language — aim to create a more intentional, effective, and satisfying dating experience on Schmooze.
            </p>
          </div>
          <div>
            <div className={styles.heroInsightBox}>
              <p className={styles.heroInsightLabel}>Outcome</p>
              <p className={styles.heroInsightText}>
                "Clarity of intent is the foundation of connection. By separating casual meme browsing from intentional dating flows, Schmooze gained the design credibility it needed to retain users who genuinely wanted to match."
              </p>
            </div>
          </div>
        </div>
      </BrandSection>

    </BrandLayout>
  );
}