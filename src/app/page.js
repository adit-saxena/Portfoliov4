'use client';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Header from './components/header';
import { motion, AnimatePresence } from 'framer-motion'; // Combined motion and added AnimatePresence
import Hero from './components/hero';
import Link from 'next/link'; // Added Link import
import styles from './page.module.css';
import dynamic from 'next/dynamic';

// Dynamic imports with loading states as per edit
const Footer = dynamic(() => import('./components/Footer/footer2'), { loading: () => <p>Loading Footer...</p> });
const Loader = dynamic(() => import('./components/Loader/loader.js'), { ssr: false }); // Kept original Loader dynamic import
const AnimatedCard = dynamic(() => import('./components/AnimatedCard'), { ssr: false });
const ProjectCard = dynamic(() => import('./components/ProjectCard/ProjectCard.jsx'), { ssr: false });
const WorkNew = dynamic(() => import('./components/worknew'), { loading: () => <p>Loading Project...</p> }); // Redefined with loading
const SideProjectCard = dynamic(() => import('./components/SideProjectCard/SideProjectCard'), { loading: () => <p>Loading Side Project...</p> }); // Redefined with loading
const ArchiveList = dynamic(() => import('./components/ArchiveList/ArchiveList'), { loading: () => <p>Loading Archive...</p> }); // Redefined with loading
const ConstructionModal = dynamic(() => import('./components/ConstructionModal/ConstructionModal'), { ssr: false }); // Added ConstructionModal import
const NDAPasswordModal = dynamic(() => import('./components/NDAPasswordModal/NDAPasswordModal'), { ssr: false });

const mainProjects = [
  {
    id: 0,
    Tag1: "Fintech",
    Tag2: "Data-Led Research",
    Tag3: "Forms · Validation",
    ProjectName: "KredX",
    OneLiner: "Refining ₹20,000 crore worth of payments for 40+ businesses",
    Description: "Turned a bulk-upload-and-pray spreadsheet into a validated real-time entry flow, after an RBI mandate pushed upload volume up 400% and failures to 90%.",
    Url: "/ExpressCover.jpg",
    PageUrl: "/kredx-express",
    backgroundColor: "#004c6dff",
    isExternal: false
  },
  {
    id: 1, // Added id
    Tag1: "Fintech",
    Tag2: "B2B",
    Tag3: "IDP · Workflow",
    ProjectName: "KredX",
    OneLiner: "Cutting factoring unit creation time by 56%",
    Description: "Replaced a fragile CSV + ZIP upload process with direct PDF upload and IDP auto-extraction — removing the manual steps that were costing corporate treasury teams 9 minutes per submission.",
    Url: "/KredXCover.webp", // Reuse valid existing image as placeholder
    PageUrl: "/kredx",
    backgroundColor: "#003E7E",
    isExternal: false
  },
  {
    id: 2, // Added id
    Tag1: "Engagement 📈",
    Tag2: "Wireframing",
    Tag3: "Primary Research",
    ProjectName: "Stage OTT",
    OneLiner: "Helping find content people love",
    Description: "Designed the content discovery flow for a vernacular OTT platform, improving user engagement through personalized recommendations.",
    Url: "/StageWorksAnimations.webm",
    PageUrl: "/stage",
    backgroundColor: "#420e0eff",
    isExternal: false
  },
  {
    id: 3, // Added id
    Tag1: "In-Depth Interviews",
    Tag2: "Wireframing",
    Tag3: "UI Design",
    ProjectName: "Schmooze",
    OneLiner: "Matchmaking done right",
    Description: "Evaluated and redesigned key user flows to enhance the matchmaking experience, focusing on genuine connections over swiping.",
    Url: "/SchmoozeThumbnailMin.png",
    PageUrl: "/schmooze",
    backgroundColor: "#07008C",
    isExternal: false
  },


];

const sideProjects = [
  {
    id: 4, // Added id
    ProjectName: "SplitX",
    Description: "Building a smart automated A/B Testing engine for all website owners",
    Url: "/SplitXCover.webp",
    PageUrl: "https://split-x-ai.vercel.app/",
    backgroundColor: "#F0F0F0",
    isExternal: true, // Mark as external link
    Tag1: null, // Added null tags for consistency
    Tag2: null,
    OneLiner: null
  },
  {
    id: 5, // Added id
    ProjectName: "PDF Builder",
    Description: "Building a tool that helps create and prefill custom old school forms - the new way",
    Url: "/FormBuilder.webp",
    PageUrl: "https://pdfformbuilder.vercel.app/login", // Updated PDF Builder URL
    backgroundColor: "#ECECEC",
    isExternal: true,
    Tag1: null, // Added null tags for consistency
    Tag2: null,
    OneLiner: null
  }
];

const ancientProjects = [
  {
    Tag1: "Internship",
    Tag2: "Stakeholders Collab",
    Tag3: "Research",
    ProjectName: "Nurture.Farm",
    OneLiner: "Improving field sales efficiency",
    Description: "Streamlined the sales process for on-field teams by redesigning the data collection and reporting tools.",
    Url: "/nurture-logo.webp",
    PageUrl: "https://drive.google.com/file/d/1hibXJyl-nEYUOsyLJK21vgVIH_F57JVx/view",
    backgroundColor: "#200054",
    isExternal: true
  },
  {
    Tag1: "Survey Design",
    Tag2: "Wireframing",
    Tag3: "Concept Testing",
    ProjectName: "Valorant",
    OneLiner: "Making gaming less toxic",
    Description: "Conceptualized features to reduce toxicity in competitive gaming, creating a more inclusive and relaxing environment for players.",
    Url: "/valorant-logo.webp",
    PageUrl: "https://drive.google.com/file/d/1McBTaejw2VjvLo55hTbPdVNZnL8hfAUS/view",
    backgroundColor: "#B22A00",
    isExternal: true
  }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isConstructionModalOpen, setIsConstructionModalOpen] = useState(false); // Added state for Construction Modal
  const [isNDAModalOpen, setIsNDAModalOpen] = useState(false);
  const [ndaTargetUrl, setNdaTargetUrl] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  // ── Restore scroll position when returning from a project page ──
  useEffect(() => {
    const saved = sessionStorage.getItem('homeScrollY');

    if (saved) {
      const targetY = parseInt(saved, 10);

      // Frosted-glass veil: GPU-composited overlay so we can instant-scroll
      // underneath it, then fade the veil away — "arrive through fog" effect.
      const spawnVeil = () => {
        const veil = document.createElement('div');
        Object.assign(veil.style, {
          position: 'fixed',
          inset: '0',
          zIndex: '99999',
          backdropFilter: 'blur(20px) brightness(1.03)',
          WebkitBackdropFilter: 'blur(20px) brightness(1.03)',
          background: 'rgba(255,255,255,0.55)',
          opacity: '1',
          transition: 'opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'none',
        });
        document.body.appendChild(veil);

        // Scroll instantly underneath the veil, then dissolve it
        requestAnimationFrame(() => {
          window.scrollTo(0, targetY);
          requestAnimationFrame(() => {
            // Short hold so the eye registers the blur before it clears
            setTimeout(() => {
              veil.style.opacity = '0';
              setTimeout(() => veil.remove(), 600);
            }, 80);
          });
        });
      };

      // Poll until the page is tall enough to reach targetY
      let attempts = 0;
      const MAX = 30;
      const tryRestore = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollable >= targetY || attempts >= MAX) {
          spawnVeil();
        } else {
          attempts++;
          setTimeout(tryRestore, 50);
        }
      };
      setTimeout(tryRestore, 80);
    }

    // Continuously persist scroll position while on home
    const onScroll = () => {
      sessionStorage.setItem('homeScrollY', String(Math.round(window.scrollY)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const handleProjectClick = (e, url, isExternal = false, projectName = "") => {
    if (url === '#construction') {
      e.preventDefault();
      setIsConstructionModalOpen(true);
      return;
    }
    // KredX case studies prompt from here. The pages themselves are unlisted
    // rather than gated, so a shared direct link opens without the password —
    // this only asks visitors arriving through the portfolio, and the answer
    // is remembered on the device until they clear site data.
    if (!isExternal && url?.startsWith('/kredx') && localStorage.getItem('kredx_unlocked') !== '1') {
      e.preventDefault();
      setNdaTargetUrl(url);
      setIsNDAModalOpen(true);
      return;
    }

    // Original handleLinkClick logic
    if (!isExternal) {
      setIsLoading(true);
    }
  };

  const handleNDASuccess = () => {
    setIsNDAModalOpen(false);
    localStorage.setItem('kredx_unlocked', '1');
    setIsLoading(true);
    router.push(ndaTargetUrl);
  };

  return (
    <div className={styles.container}>
      {isLoading && <Loader />}

      <motion.div className={styles["aurora-container"]} initial={{ opacity: 0 }}
        animate={{ opacity: 0.02 }} transition={{ duration: 0.4 }}>
      </motion.div>

      <Header />
      <Hero />
      <section className={styles.work}>
        {/* Main Projects Loop */}
        {mainProjects.map((project, index) => (
          <AnimatedCard key={project.ProjectName} delay={index * 0.1}>
            <motion.div
              id={`project-${project.ProjectName.replace(/\s+/g, '-')}`}
              initial={index === 0 ? { opacity: 0, y: 200, scale: 1 } : {}}
              animate={index === 0 ? {
                opacity: 1,
                y: [0, -5, 0],
                scale: 1,
              } : {}}
              transition={index === 0 ? {
                duration: 0.4,
                y: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              } : {}}
            >
              <WorkNew
                {...project}
                onClick={(e) => handleProjectClick(e, project.PageUrl, project.isExternal, project.ProjectName)} // Updated onClick
              />
            </motion.div>
          </AnimatedCard>
        ))}

        {/* Section: Beyond Design */}
        <div className={styles.sectionWrapper}>
          <h2 className={styles.subHeading}>Building Beyond Design</h2>
          <div className={styles.secondaryGrid}>
            {sideProjects.map((project, index) => (
              // Removed AnimatedCard wrapper as per edit
              <SideProjectCard
                key={project.ProjectName} // Changed key to ProjectName for consistency
                {...project}
                onClick={(e) => handleProjectClick(e, project.PageUrl, project.isExternal, project.ProjectName)} // Updated onClick
              />
            ))}
          </div>
        </div>

        {/* Section: The Archive Bin (List Layout) */}
        <div className={styles.sectionWrapper}>
          <h2 className={styles.subHeading}>The Archive Bin</h2>
          <ArchiveList projects={ancientProjects} />
        </div>


      </section>

      <Footer />

      {/* Render Construction Modal */}
      <ConstructionModal
        isOpen={isConstructionModalOpen}
        onClose={() => setIsConstructionModalOpen(false)}
      />

      <NDAPasswordModal
        isOpen={isNDAModalOpen}
        onClose={() => setIsNDAModalOpen(false)}
        onSuccess={handleNDASuccess}
        onSecondaryAction={() => {
          setIsNDAModalOpen(false);
          // Wait for modal exit animation before scrolling
          setTimeout(() => {
            const element = document.getElementById('project-Stage-OTT');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 300);
        }}
      />
    </div>
  );
}
