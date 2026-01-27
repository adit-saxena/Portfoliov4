'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
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

const mainProjects = [
  {
    id: 1, // Added id
    Tag1: "Fintech",
    Tag2: "B2B",
    Tag3: "Dashboard",
    ProjectName: "KredX",
    OneLiner: "Boosting factoring unit discovery for financiers",
    Description: "Redesigned the core financier dashboard to improve unit visibility, reducing discovery time by 40% and increasing platform liquidity.",
    Url: "/KredXCover.webp", // Reuse valid existing image as placeholder
    PageUrl: "/nda", // Updated KredX URL
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
    PageUrl: "https://app.splitx.live/signin",
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
    PageUrl: "#construction", // Updated PDF Builder URL
    backgroundColor: "#ECECEC",
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
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  const handleProjectClick = (e, url, isExternal = false) => { // Modified handleProjectClick to accept isExternal
    if (url === '#construction') {
      e.preventDefault();
      setIsConstructionModalOpen(true);
    } else {
      // Original handleLinkClick logic
      if (!isExternal) {
        setIsLoading(true);
      }
    }
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
                onClick={(e) => handleProjectClick(e, project.PageUrl, project.isExternal)} // Updated onClick
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
                onClick={(e) => handleProjectClick(e, project.PageUrl, project.isExternal)} // Updated onClick
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
    </div>
  );
}
