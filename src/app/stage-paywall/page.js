"use client";
import React from 'react';
import { CaseStudy, Section, Figure, Statement, Features, Stats, styles } from '../components/caseStudy/CaseStudy';
import p from './paywall.module.css';

const IMG = '/stage-paywall';

const SECTIONS = [
  { id: 'context', num: '01', label: 'Context' },
  { id: 'signal', num: '02', label: 'The signal' },
  { id: 'journey', num: '03', label: 'Existing journey' },
  { id: 'users', num: '04', label: 'User interviews' },
  { id: 'model', num: '05', label: 'Behaviour model' },
  { id: 'variants', num: '06', label: 'Variants' },
  { id: 'testing', num: '07', label: 'Testing & stats' },
  { id: 'learnings', num: '08', label: 'Learnings' },
];

const FACTS = [
  { key: 'Role', val: 'Product designer' },
  { key: 'Surface', val: 'Trial paywall' },
  { key: 'Audience', val: 'Haryanvi, Rajasthani & Bhojpuri viewers arriving from ads' },
  { key: 'Method', val: 'User calls · Fogg model · A/B tests' },
];

const METRICS = [
  { value: '+21%', label: 'Trial starts on the winning paywall', accent: true },
  { value: '−27%', label: 'Refund requests per 1,000 trials' },
  { value: '9', label: 'Paywall screens across 7 formulas' },
  { value: '13', label: 'Elements, in 6 groups' },
];

function Phone({ src, alt, caption }) {
  return <Figure className={p.phone} src={src} alt={alt} caption={caption} />;
}

/* ── Hero: where it started, where it landed ── */
function Hero() {
  return (
    <div className={p.hero}>
      <Phone
        src={`${IMG}/stable-paywall.webp`}
        alt="The last stable paywall, before the experiments"
        caption={<>
          <span className={p.heroLabel}>Before</span>
          <span className={p.heroNote}>Last stable paywall</span>
        </>}
      />
      <div className={p.heroShift}>
        <span className={p.heroArrow} aria-hidden="true">→</span>
        <span className={p.heroValue}>+21%</span>
        <span className={p.heroNote}>trial starts</span>
      </div>
      <Phone
        src={`${IMG}/pw-v7.webp`}
        alt="Winning paywall variant V7"
        caption={<>
          <span className={`${p.heroLabel} ${p.heroLabelWin}`}>After · V7</span>
          <span className={p.heroNote}>The winner, every element on</span>
        </>}
      />
    </div>
  );
}

const JOURNEY = [
  { step: 'Ad', title: 'Sees a show', note: 'A ₹1 trial, promised in the ad' },
  { step: 'Paywall', title: '₹1 for 7 days', note: 'The ₹199 renewal is tucked into step 2', leak: 'Benefits unclear' },
  { step: 'UPI app', title: 'GPay asks for ₹199', note: 'The autopay mandate leads with the renewal', leak: 'Expected ₹1 — drops off' },
  { step: 'Days 1–7', title: 'Watches', note: 'The content does the convincing' },
  { step: 'Day 8', title: '₹199 autopay', note: 'For the next 3 months', leak: 'Refund requests start' },
];

/* Generic UPI autopay approval, drawn rather than screenshotted — the
   point is the number it leads with, not any one app's chrome. */
function MandateMock() {
  return (
    <figure className={p.phone}>
      <div className={p.mandate}>
        <div className={p.mandateTop}>UPI AutoPay request</div>
        <div className={p.mandateBody}>
          <div className={p.mandateMerchant}>STAGE</div>
          <div className={p.mandateAmount}>₹199</div>
          <div className={p.mandateMeta}>Every 3 months · until cancelled</div>
          <div className={p.mandateRows}>
            <span>First debit</span><span>after 7 days</span>
            <span>Pay now</span><span>₹1</span>
          </div>
        </div>
        <div className={p.mandateButton}>Approve AutoPay</div>
      </div>
      <figcaption className={styles.caption}>
        UPI app — illustrative. The mandate leads with ₹199; the ₹1 the user came for is a detail.
      </figcaption>
    </figure>
  );
}

/* What we heard on calls, and what each heard thing became on the page.
   Codes refer to the element kit in section 06. */
const INSIGHTS = [
  {
    cohort: 'Dropped off',
    items: [
      {
        title: '“The ad said ₹1. GPay said ₹199.”',
        heard: 'They tapped through for a ₹1 trial, then their UPI app asked them to approve ₹199. It read as a bait-and-switch, and they backed out.',
        response: 'Show ₹199 on our screen first, as the anchor ₹1 is set against, so the mandate confirms what they already saw.',
        chips: [['A4', '₹199 anchor'], ['A1', '₹1 for 7 days']],
      },
      {
        title: 'The reviews got there first',
        heard: 'Several had read Play Store complaints about payments before paying. The ₹199 prompt felt like proof.',
        response: 'Put trust next to the button: how many people already pay, a face they know, and a way out.',
        chips: [['B6', 'Subscriber count'], ['C', 'Neeraj video'], ['A3', 'Cancel anytime']],
      },
      {
        title: '₹199 felt too much for movies',
        heard: 'Beyond the one show in the ad, they couldn’t say what else was inside — so ₹199 felt like a lot to pay for films.',
        response: 'Show the size of the library and what a subscription adds, before the price.',
        chips: [['F1', 'Library wall'], ['B5', 'No. of shows'], ['F2–F4', 'HD · download · ad-free']],
      },
    ],
  },
  {
    cohort: 'Converted',
    items: [
      {
        title: '₹1 was a no-brainer, felt like trying',
        heard: 'The trial cost too little to think about. Nobody who paid hesitated over ₹1.',
        response: 'Keep ₹1 the biggest thing on the screen.',
        chips: [['A1', '₹1 for 7 days']],
      },
      {
        title: 'They came for one show',
        heard: 'They’d seen a specific show in the ad and wanted to finish it. Intent was already there.',
        response: 'Bring that show onto the paywall so the intent carries through.',
        chips: [['B7', 'Show from the ad']],
      },
      {
        title: 'The content, and the family, kept them',
        heard: 'They liked what they watched in the trial, and the whole household watched on one account — so ₹199 felt shared.',
        response: 'Show the breadth of the library — something for everyone at home.',
        chips: [['F1', 'Library wall'], ['B5', 'No. of shows']],
      },
    ],
  },
];

/* ── Fogg behaviour model: B = MAP. Users above the action line act when
   prompted; below it they don't. Plotted in a 560 × 360 box. ── */
const actionY = (x) => 320 - 13000 / (x - 10);
const ACTION_LINE = Array.from({ length: 80 }, (_, i) => 72 + i * 6)
  .map((x, i) => `${i ? 'L' : 'M'}${x} ${actionY(x).toFixed(1)}`)
  .join(' ');

function FoggChart() {
  return (
    <div className={p.fogg}>
      <svg viewBox="0 0 560 370" role="img" aria-label="Fogg behaviour model: motivation against ability, with the action line. Users who dropped off sit below it; the variants push them over.">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="var(--accent)" />
          </marker>
        </defs>

        <line x1="50" y1="320" x2="545" y2="320" stroke="var(--ink)" strokeWidth="1" />
        <line x1="50" y1="320" x2="50" y2="15" stroke="var(--ink)" strokeWidth="1" />
        <text x="50" y="345" fontSize="13" fill="var(--meta)">Ability →</text>
        <text x="545" y="345" fontSize="12" fill="var(--meta-light)" textAnchor="end">easy</text>
        <text transform="translate(34 320) rotate(-90)" fontSize="13" fill="var(--meta)">Motivation →</text>

        <path d={ACTION_LINE} fill="none" stroke="var(--accent)" strokeWidth="2" />
        <text x="540" y="282" fontSize="12" fill="var(--accent)" textAnchor="end">action line</text>
        <text x="520" y="40" fontSize="12" fill="var(--meta)" textAnchor="end">Prompt lands → they start a trial</text>
        <text x="64" y="308" fontSize="12" fill="var(--meta-light)">Prompt ignored</text>

        {/* What the variants do: push the drop-offs over the line */}
        <line x1="142" y1="232" x2="282" y2="232" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow)" />
        <line x1="390" y1="292" x2="390" y2="198" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow)" />
        <text x="212" y="222" fontSize="13" fontWeight="600" fill="var(--accent)" textAnchor="middle">A</text>
        <text x="402" y="250" fontSize="13" fontWeight="600" fill="var(--accent)">B</text>

        {/* Below the line: dropped off */}
        {[[125, 232, 1], [390, 305, 2]].map(([cx, cy, n]) => (
          <g key={n}>
            <circle cx={cx} cy={cy} r="12" fill="#fff" stroke="var(--meta)" strokeWidth="1.5" />
            <text x={cx} y={cy + 4.5} fontSize="12" fontWeight="600" fill="var(--meta)" textAnchor="middle">{n}</text>
          </g>
        ))}

        {/* Above the line: converted */}
        {[[170, 72, 3], [490, 232, 4]].map(([cx, cy, n]) => (
          <g key={n}>
            <circle cx={cx} cy={cy} r="12" fill="var(--accent)" />
            <text x={cx} y={cy + 4.5} fontSize="12" fontWeight="600" fill="#fff" textAnchor="middle">{n}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

const FOGG_LEGEND = [
  {
    label: 'Below the line — dropped',
    tone: p.markOut,
    items: [['1', 'Wanted it, until the ₹199 mandate surprised them'], ['2', 'Could afford it, but saw no reason to']],
  },
  {
    label: 'Above the line — converted',
    tone: p.markIn,
    items: [['3', 'Came for a show from the ad'], ['4', '₹1 made it effortless']],
  },
  {
    label: 'What the variants do',
    tone: p.markMove,
    items: [['A', 'No surprises in the price — raise ability'], ['B', 'Show what’s inside — raise motivation']],
  },
];

const PROPOSITIONS = [
  {
    lever: 'Ability',
    title: 'No surprises at the mandate',
    body: '₹1 is the price; ₹199 shows up on our screen first, as the anchor — so the UPI prompt repeats a number they’ve already seen.',
    chips: [['A1', '₹1 for 7 days'], ['A4', '₹199 anchor'], ['A3', 'Cancel anytime']],
  },
  {
    lever: 'Motivation',
    title: 'Remind them why they came',
    body: 'Lead with the show from the ad and the size of the library behind it, so the value is visible before the price.',
    chips: [['B7', 'Show from the ad'], ['B5', 'No. of shows'], ['F1', 'Library wall'], ['F2', 'HD']],
  },
  {
    lever: 'Trust',
    title: 'Borrow confidence',
    body: 'Against bad payment reviews: how many people like them already pay, and a face they recognise.',
    chips: [['B6', 'Regional subscriber count'], ['C', 'Neeraj Chopra video']],
  },
];

const KIT = [
  {
    row: 'Fixed',
    optional: false,
    groups: [
      { letter: 'A', name: 'Plan', items: [['A1', 'Re 1 for 7 days'], ['A2', 'Offer only for today'], ['A3', 'Cancel anytime'], ['A4', '₹199 anchoring']] },
      { letter: 'B', name: 'Nurturing', items: [['B5', 'No. of shows'], ['B6', 'No. of regional subscribers'], ['B7', 'Show from the ad']] },
      { letter: 'C', name: 'Neeraj video', items: [['', 'Olympic gold medallist, opening with “Ram Ram ji”']] },
      { letter: 'D', name: 'CTA', items: [['', 'Start trial']] },
    ],
  },
  {
    row: 'Optional',
    optional: true,
    groups: [
      { letter: 'F', name: 'Nurturing', items: [['F1', 'Library depth, as a visual'], ['F2', 'HD quality'], ['F3', 'Download, watch offline'], ['F4', 'Ad-free']] },
      { letter: 'G', name: 'CTA', items: [['G2', 'CTA with trial days']] },
    ],
  },
];

/* What each variant switched on, among the five elements that actually
   varied. The other eight (₹1/7 days, cancel anytime, ₹199 anchor, no. of
   shows, show from the ad, Neeraj video, library visual, HD) were on in all. */
const TOGGLES = ['Offer today', 'Subscriber count', 'Download', 'Ad-free', 'Trial-days CTA'];

const VARIANTS = [
  { id: 'V1', code: 'ABCDF1F2F4G2', on: [1, 1, 0, 1, 1], screens: ['pw-v1'], note: 'Urgency headline, three benefit tiles' },
  { id: 'V2', code: 'ABCDF1F2F4G2', on: [0, 1, 0, 1, 1], screens: ['pw-v2'], note: 'Library count leads instead of urgency' },
  { id: 'V3', code: 'ABCDF1F2F3F4', on: [0, 0, 1, 1, 0], screens: ['pw-v3a', 'pw-v3b'], note: 'Benefits collapsed to a single line' },
  { id: 'V4', code: 'ABCDF1F2', on: [0, 0, 0, 0, 0], screens: ['pw-v4'], note: 'A wall of posters; the bare minimum' },
  { id: 'V5', code: 'ABCDF1F2', on: [0, 1, 0, 0, 0], screens: ['pw-v5'], note: 'V4, plus one line of trust' },
  { id: 'V6', code: 'ABCDF1F2F3F4', on: [0, 1, 1, 1, 0], screens: ['pw-v6a', 'pw-v6b'], note: 'Price moves left, benefits under it' },
  { id: 'V7', code: 'ABCDF1F2F3F4G2', on: [1, 1, 1, 1, 1], screens: ['pw-v7'], note: 'Everything on', win: true },
];

function Strip({ items, path }) {
  return (
    <div className={p.strip}>
      {items.map(({ id, code, note, screens, win }) => (
        <div key={id} className={`${p.variant} ${win ? p.variantWin : ''}`}>
          <div className={p.variantHead}>
            <span className={p.variantId}>{id}</span>
            {win ? <span className={p.win}>Winner</span> : <span className={p.variantCode}>{code}</span>}
          </div>
          <div className={p.variantPhones}>
            {screens.map((s) => (
              <Phone key={s} src={`${path}/${s}.webp`} alt={`Paywall variant ${id}`} />
            ))}
          </div>
          {note && <div className={p.variantNote}>{note}</div>}
        </div>
      ))}
    </div>
  );
}

const SETUP = [
  ['Control', 'Last stable paywall'],
  ['Split', 'Even, control + 7 variants'],
  ['Duration', '21 days'],
  ['Primary metric', 'Paywall → trial start'],
  ['Guardrail', 'Refund requests per 1,000 trials'],
  ['Sample size', '~14k paywall visitors, ~1,750 per arm'],
];

const RESULTS = [
  { value: '+21%', label: 'Trial starts, V7 vs control' },
  { value: '18.4% → 22.3%', label: 'Paywall → trial start rate' },
  { value: '−27%', label: 'Refund requests per 1,000 trials, V7 vs control' },
];

const LEARNINGS = [
  {
    title: 'A fixed spine makes variants readable',
    body: 'Holding eight elements constant meant each winner pointed at something specific, instead of at “a different page.”',
  },
  {
    title: 'Answer every doubt on one screen',
    body: 'V7, with every element on, beat every leaner variant. For a cautious first-time payer, more reassurance wasn’t clutter.',
  },
  {
    title: 'Never let another app say the price first',
    body: 'The UPI mandate will always show ₹199. The fix was making sure it was the second time the user saw it, not the first.',
  },
  {
    title: 'Talk to both sides of the funnel',
    body: 'People who left told us what was broken. People who stayed told us what to put first.',
  },
];

export default function StagePaywallPage() {
  return (
    <CaseStudy
      accent="#c0392b"
      sections={SECTIONS}
      eyebrow="STAGE OTT · Paywall A/B testing"
      title="Getting 21% more people across the paywall"
      standfirst={<>
        Users signed up for a ₹1 trial, then their UPI app asked them to approve a ₹199 autopay. I broke
        the paywall into fixed and optional elements and A/B tested seven combinations against the last
        stable version.
      </>}
      insight="People weren’t rejecting the price. They were rejecting a price they hadn’t been shown."
      facts={FACTS}
      hero={<Hero />}
      metrics={METRICS}
      next={{ href: '/stage', label: 'STAGE: Personalized OTT →' }}
    >

      {/* ── 01 Context ── */}
      <Section id="context" title="One rupee at the front door, broken trust later">
        <p className={styles.pLast}>
          STAGE streams films and series in Haryanvi, Rajasthani and Bhojpuri. ~74% of new users arrive from
          an ad, land on a paywall, and pay ₹1 for a 7-day trial — set up as a UPI autopay that renews at
          ₹199 for three months. That screen is where an ad&rsquo;s promise either turns into a trial, or
          doesn&rsquo;t.
        </p>
      </Section>

      {/* ── 02 The signal ── */}
      <Section id="signal" title="Every channel highlighted the same problem">
        <div className={p.signal}>
          <div className={p.source}>
            <div className={p.label}>Source 01</div>
            <h4 className={p.sourceTitle}>Play Store reviews</h4>
            <p className={p.sourceBody}>Complaints about &lsquo;fraud&rsquo; ₹199 debits.</p>
          </div>
          <div className={p.source}>
            <div className={p.label}>Source 02</div>
            <h4 className={p.sourceTitle}>Support tickets</h4>
            <p className={p.sourceBody}>Majority around refund requests.</p>
          </div>
        </div>
      </Section>

      {/* ── 03 Existing journey ── */}
      <Section id="journey" title="₹1 on our screen, ₹199 on GPay’s">
        <ol className={p.journey}>
          {JOURNEY.map(({ step, title, note, leak }) => (
            <li key={step} className={`${p.stop} ${leak ? p.stopLeak : ''}`}>
              <div className={p.stopStep}>{step}</div>
              <div className={p.stopTitle}>{title}</div>
              <div className={p.stopNote}>{note}</div>
              {leak && <span className={p.leak}>{leak}</span>}
            </li>
          ))}
        </ol>

        <div className={p.journeyScreens}>
          <Phone
            src={`${IMG}/stable-paywall.webp`}
            alt="Last stable paywall"
            caption="Paywall — ₹1 in the biggest type on the screen; ₹199 every three months is step 2."
          />
          <Phone
            src={`${IMG}/stable-checkout.webp`}
            alt="Last stable checkout"
            caption="Checkout — ₹1 now, and ₹199 as a grey line underneath."
          />
          <MandateMock />
        </div>
      </Section>

      {/* ── 04 User interviews ── */}
      <Section id="users" title="Calling both sides of the paywall">
        <p className={styles.p} style={{ marginBottom: 28 }}>
          I called users from two groups — people who reached the paywall or the UPI step and left, and
          people who started the trial and paid — and asked each to walk me through what they saw and
          decided. Every insight became an element on the page.
        </p>

        {INSIGHTS.map(({ cohort, items }) => (
          <div key={cohort} className={`${p.cohort} ${cohort === 'Converted' ? p.cohortWin : ''}`}>
            <div className={p.cohortHead}>
              <span>{cohort}</span>
              <span className={p.label}>What we heard → what it changed</span>
            </div>
            {items.map(({ title, heard, response, chips }) => (
              <div key={title} className={p.insight}>
                <div>
                  <div className={p.insightTitle}>{title}</div>
                  <p className={p.insightHeard}>{heard}</p>
                </div>
                <div className={p.response}>
                  <p className={p.responseBody}>{response}</p>
                  <div className={p.chips}>
                    {chips.map(([code, name]) => (
                      <span key={code} className={p.chip}><b>{code}</b>{name}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

        <Statement
          quote="Leaving was about clarity. Staying was about content."
          note="None of the reasons for leaving was the ₹1 itself. People couldn’t tell what they’d be charged, or what they were paying for."
        />
      </Section>

      {/* ── 05 Behaviour model ── */}
      <Section id="model" title="Under the line, not out of the market">
        <p className={styles.p} style={{ marginBottom: 24 }}>
          BJ Fogg&rsquo;s model says a behaviour happens when motivation, ability and a prompt meet. The
          paywall already had a prompt. The people who left sat just under the action line.
        </p>

        <FoggChart />

        <div className={p.foggLegend}>
          {FOGG_LEGEND.map(({ label, tone, items }) => (
            <div key={label}>
              <div className={p.label}>{label}</div>
              <ul>
                {items.map(([n, text]) => (
                  <li key={n}><span className={`${p.mark} ${tone}`}>{n}</span>{text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={p.props}>
          {PROPOSITIONS.map(({ lever, title, body, chips }) => (
            <div key={title} className={p.prop}>
              <div className={p.propLever}>{lever}</div>
              <h4 className={p.propTitle}>{title}</h4>
              <p className={p.propBody}>{body}</p>
              <div className={p.chips}>
                {chips.map(([code, name]) => (
                  <span key={code} className={p.chip}><b>{code}</b>{name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 06 Variants ── */}
      <Section id="variants" title="A paywall built from parts">
        <p className={styles.p} style={{ marginBottom: 24 }}>
          Instead of designing whole new pages, I broke the paywall into elements. Fixed ones form the
          spine every variant shares; optional ones are switched on and off. Each variant is just a formula.
        </p>

        <div className={p.kit}>
          {KIT.map(({ row, optional, groups }) => (
            <div key={row} className={p.kitRow}>
              <div className={p.label}>{row}</div>
              <div className={p.kitGroups}>
                {groups.map(({ letter, name, items }) => (
                  <div key={letter} className={`${p.group} ${optional ? p.groupOptional : ''}`}>
                    <div className={p.groupHead}><span className={p.groupLetter}>{letter}</span>{name}</div>
                    <ul className={p.groupItems}>
                      {items.map(([code, text]) => (
                        <li key={text}>{code && <span className={p.itemCode}>{code}</span>}{text}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={p.label}>Nine screens, seven formulas — scroll →</div>
        <Strip items={VARIANTS} path={IMG} />

        <div className={p.matrixWrap}>
          <table className={p.matrix}>
            <thead>
              <tr>
                <th>Variant</th>
                {TOGGLES.map((t) => <th key={t}>{t}</th>)}
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {VARIANTS.map(({ id, on, win }) => (
                <tr key={id} className={win ? p.rowWin : undefined}>
                  <td>{id}</td>
                  {on.map((v, i) => (
                    <td key={TOGGLES[i]}>
                      <span className={v ? p.on : p.off} aria-label={v ? 'on' : 'off'} />
                    </td>
                  ))}
                  <td>{win && <span className={p.result}>Won</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.footnote}>
          Only the five elements that changed are shown. The other eight were on in every variant.
        </p>
      </Section>

      {/* ── 07 Testing & stats ── */}
      <Section id="testing" title="How the variants were judged">
        <dl className={p.setup}>
          {SETUP.map(([k, v]) => (
            <div key={k}>
              <dt className={p.label}>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>

        <Stats items={RESULTS} cols={3} />

        <p className={styles.p}>
          V7 — every element switched on — was the variant that cleared significance against control, and
          went out as the new default.
        </p>
        <p className={styles.footnote}>
          Figures are rounded and indicative, shared within STAGE&rsquo;s confidentiality limits.
        </p>
      </Section>

      {/* ── 08 Learnings ── */}
      <Section id="learnings" title="What stuck">
        <Features items={LEARNINGS} />

        <Statement
          quote="Clear beats clever."
          note="The ₹1 offer was never the problem. The surprise ₹199 was — so we showed it first, and framed it plainly."
        />
      </Section>

    </CaseStudy>
  );
}
