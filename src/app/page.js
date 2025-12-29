'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from './components/header';
import { motion } from 'framer-motion';
import Hero from './components/hero';
import styles from './page.module.css';
import WorkNew from './components/worknew';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('./components/Footer/footer2'), { ssr: false });
const Loader = dynamic(() => import('./components/Loader/loader.js'), { ssr: false });
const AnimatedCard = dynamic(() => import('./components/AnimatedCard'), { ssr: false });
const ProjectCard = dynamic(() => import('./components/ProjectCard/ProjectCard.jsx'), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  const handleLinkClick = (isExternal = false) => {
    if (!isExternal) {
      setIsLoading(true);
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
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 1 }}
          animate={{
            opacity: 1,
            y: [0, -5, 0], // Floating effect after initial drop
            scale: 1,
          }}
          transition={{
            duration: 0.4, // Initial drop duration
            y: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 0.98, opacity: 0.9 }}
        >
          <WorkNew
            Tag1="Internship"
            Tag2="Wireframing"
            Tag3="Primary Research"
            ProjectName="Stage OTT"
            OneLiner="Helping find content people love"
            Description="Designed the content discovery flow for a vernacular OTT platform, improving user engagement through personalized recommendations."
            Url="/StageWorksAnimations.webm"
            PageUrl="/stage"
            backgroundColor="#420e0eff"
            onClick={handleLinkClick} // Pass the click handler
          />
        </motion.div>


        <AnimatedCard delay={0}>
          <WorkNew
            Tag1="In-Depth Interviews"
            Tag2="Wireframing"
            Tag3="UI Design"
            ProjectName="Schmooze"
            OneLiner="Matchmaking done right"
            Description="Evaluated and redesigned key user flows to enhance the matchmaking experience, focusing on genuine connections over swiping."
            Url="/SchmoozeThumbnailMin.png"
            PageUrl="/schmooze"
            backgroundColor="#07008C"
            onClick={handleLinkClick}
          />
        </AnimatedCard>

        <AnimatedCard delay={0}>
          <WorkNew
            Tag1="Survey Design"
            Tag2="Wireframing"
            Tag3="Concept Testing"
            ProjectName="Valorant"
            OneLiner="Making gaming less toxic"
            Description="Conceptualized features to reduce toxicity in competitive gaming, creating a more inclusive and relaxing environment for players."
            Url="/valorantcovermin.png"
            PageUrl="https://drive.google.com/file/d/1McBTaejw2VjvLo55hTbPdVNZnL8hfAUS/view"
            backgroundColor="#B22A00"
            onClick={handleLinkClick}
            isExternal={true}
          />
        </AnimatedCard>

        <AnimatedCard delay={0}>
          <WorkNew
            Tag1="Internship"
            Tag2="Stakeholders Collab"
            Tag3="Research"
            ProjectName="Nurture.Farm"
            OneLiner="Improving field sales efficiency"
            Description="Streamlined the sales process for on-field teams by redesigning the data collection and reporting tools."
            Url="/nurturecover2min.png"
            PageUrl="https://drive.google.com/file/d/1hibXJyl-nEYUOsyLJK21vgVIH_F57JVx/view"
            backgroundColor="#200054"
            onClick={handleLinkClick}
            isExternal={true}
          />
        </AnimatedCard>


      </section>

      <Footer />
    </div>
  );
}
