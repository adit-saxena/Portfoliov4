"use client";
import React from 'react';
import { CaseStudy, Section, Figure, Statement, Options, Features, styles } from '../components/caseStudy/CaseStudy';

const SECTIONS = [
  { id: 'research', num: '01', label: 'User research' },
  { id: 'challenges', num: '02', label: 'Problem statement' },
  { id: 'architecture', num: '03', label: 'Design solutions' },
  { id: 'iteration', num: '04', label: 'Iteration' },
  { id: 'conclusion', num: '05', label: 'Conclusion' },
];

const TLDR = [
  { key: '01', val: 'Identified misaligned user intent through in-depth interviews and observation sessions.' },
  { key: '02', val: 'Separated meme browsing from profile swiping into distinct intention-based flows.' },
  { key: '03', val: 'Redesigned UI language to balance playfulness with the gravitas of dating apps like Hinge.' },
];

const METHODS = [
  {
    title: 'Competitive audit',
    body: 'Analyzed how Schmooze’s features and interface compared to other popular dating apps, noting Schmooze’s distinct casual and ‘funky’ design language.',
  },
  {
    title: 'Participant observation',
    body: 'Used the app firsthand to understand the user flow and initial interactions — surfacing friction that users themselves couldn’t articulate.',
  },
  {
    title: 'User interviews',
    body: 'Directly engaged with users on the app. Initial sessions were hesitant — researcher profiles were redesigned to be more welcoming, which successfully encouraged participation.',
  },
];

const FRICTION = [
  {
    title: 'Mindless swiping',
    body: 'Users often swiped through memes and profiles without careful consideration, leading to matches lacking genuine connection. Some seemed desperate to interact, regardless of match quality.',
  },
  {
    title: 'Fluctuating user intent',
    body: 'Users’ primary interest in the app varied — some were focused on memes, while their desire for dating fluctuated over time.',
  },
  {
    title: 'Misaligned perceptions',
    body: 'Due to its casual branding, many users viewed Schmooze more as a general socializing app — attracting users not seeking romantic connections, including some just looking to socialize.',
  },
  {
    title: 'Chat initiation hurdles',
    body: 'Users found it difficult to start conversations with matches, often missing opportunities for meaningful interaction — no icebreaker architecture existed in the product.',
  },
  {
    title: 'Technical glitches',
    body: 'Frequent technical bugs, particularly within the chat system, frustrated users and sometimes led them to abandon the app entirely.',
  },
];

const OPTIONS = [
  {
    label: 'Before · fail',
    title: 'Single unified feed',
    body: 'Blended meme reactions and dating swipes in a single feed. Users couldn’t distinguish between content engagement and romantic interest — match rates were low.',
  },
  {
    label: 'After · pivot',
    title: 'Segmented intent flows',
    meta: 'Memes ↔ Profiles — Clear mode separation',
    body: <>
      Chat initiation rates up. Users reported feeling the app was &ldquo;more serious&rdquo; while
      retaining the meme-discovery <strong>fun they came for.</strong>
    </>,
    shipped: true,
  },
];

export default function SchmoozePage() {
  return (
    <CaseStudy
      accent="#4f46e5"
      sections={SECTIONS}
      eyebrow="Product Design Case Study"
      title="Schmooze: Matchmaking done right"
      standfirst="Schmooze is a dating app that matches users based on their meme preferences, moving away from traditional swiping methods. The core challenge: a casual product perception was attracting users with misaligned intent, causing friction in real matchmaking flows."
      insight="Initial interactions revealed users were treating it as a social playground. We needed to redesign the experience to communicate serious dating intent without sacrificing the brand’s playful core."
      facts={TLDR}
      factCols={3}
      next={{ href: '/nda', label: 'KredX →' }}
    >

      {/* ── 01 Research ── */}
      <Section id="research" title="User Research & The Opportunity">
        <p className={styles.pLast}>
          A multi-faceted research approach was employed to understand user perceptions of Schmooze and
          identify barriers hindering a smooth user experience.
        </p>

        <Features items={METHODS} />

        <Figure
          src="/Schmooze2.png"
          alt="Profile for participant recruitment"
          caption="Participant recruitment — profile redesigned to be more welcoming and transparent about research intentions, which unlocked honest responses."
        />

        <Statement
          quote="Aligning meme consumption with the intent to foster real dating connections."
          note="A critical subset of the user base viewed Schmooze as a pure meme platform, with no awareness or intent toward dating."
        />

        <p className={styles.inset} style={{ margin: '32px 0 0' }}>
          <strong>Research insight.</strong> Users weren&rsquo;t swiping to match — they were swiping to
          react. The meme format had inadvertently become the destination, not the vehicle.
        </p>
      </Section>

      {/* ── 02 Challenges ── */}
      <Section id="challenges" title="Problem Statement & Friction">
        <p className={styles.p}>
          The research surfaced severe misalignment in perception and behavior across the user base. Three
          core friction points emerged from usability testing.
        </p>

        <Figure
          src="/Schmooze1.png"
          alt="UI comparison with other dating apps"
          caption="Competitive analysis — mapping Schmooze’s UI language vs Hinge, Bumble."
        />

        <Features items={FRICTION} />
      </Section>

      {/* ── 03 Solutions ── */}
      <Section id="architecture" title="Architecting Design Solutions">
        <p className={styles.p}>
          Based on the research insights, three design solutions were proposed.
        </p>

        <p className={styles.p}>
          <strong>Solution #1 — Separate tabs for memes and profiles.</strong> To help users differentiate
          between browsing content (memes) and evaluating potential matches (profiles), distinct tabs were
          introduced. This aimed to make users more mindful during profile swiping.
        </p>
        <Figure
          src="/Schmooze3.png"
          alt="Suggested UI with separate Memes and Profiles tabs"
          caption="Solution #1 — suggested UI with separate ‘Memes’ and ‘Profiles’ tabs."
        />

        <p className={styles.p}>
          <strong>Solution #2 — Enhanced profile discovery.</strong> For users wanting more control over
          matching beyond the algorithm, a new tab was proposed allowing them to find others who liked the
          same specific memes.
        </p>
        <Figure
          narrow
          src="/Schmooze4.png"
          alt="Suggested UI for discovering profiles based on shared meme likes"
          caption="Solution #2 — suggested UI for discovering profiles based on shared meme likes."
        />

        <p className={styles.p}>
          <strong>Solution #3 — Refining the UI language.</strong> To more clearly communicate
          Schmooze&rsquo;s intent as a dating platform, the design language was refined to balance the fun
          elements with a more elegant, serious aesthetic, akin to other dating apps.
        </p>
        <Figure
          src="/Schmooze5.png"
          alt="Redesigned Onboarding Flow"
          caption="Redesigned onboarding flow, with refined UI language."
        />
        <Figure
          src="/Schmooze6.png"
          alt="Redesigned Base Flow"
          caption="Redesigned base flow, with refined UI language."
        />
      </Section>

      {/* ── 04 Iteration ── */}
      <Section id="iteration" kicker="04 — Design refinement" title="Playful, but purposeful">
        <p className={styles.p} style={{ marginBottom: 28 }}>
          The UI language needed to walk a tightrope — fun enough to retain the meme DNA, serious enough to
          attract genuine daters.
        </p>

        <Options items={OPTIONS} />
      </Section>

      {/* ── 05 Conclusion ── */}
      <Section id="conclusion" title="Better Matchmaking Experience">
        <p className={styles.p}>
          By understanding user behaviors and perceptions through research, key pain points like mindless
          swiping, unclear app intent, and interaction difficulties were identified.
        </p>
        <p className={styles.p} style={{ marginBottom: 40 }}>
          The proposed design solutions — introducing distinct tabs, offering tailored profile discovery, and
          refining the UI&rsquo;s visual language — aim to create a more intentional, effective, and
          satisfying dating experience on Schmooze.
        </p>

        <Statement
          quote="Clarity of intent is the foundation of connection."
          note="By separating casual meme browsing from intentional dating flows, Schmooze gained the design credibility it needed to retain users who genuinely wanted to match."
        />
      </Section>

    </CaseStudy>
  );
}
