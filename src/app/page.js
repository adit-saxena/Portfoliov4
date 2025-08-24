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

  const handleLinkClick = () => {
    setIsLoading(true); 
  };

  return (
    <div className={styles.container}>
      {isLoading && <Loader />}
      
      <motion.div className={styles["aurora-container"]} initial={{ opacity: 0 }}
      animate={{ opacity: 0.02}} transition={{ duration: 0.4 }}>
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
            Title="Helping find content people love @ Stage OTT"
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
            Title="Matchmaking done right - evaluating how Schmooze could do it better"
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
            Title="Making gaming a bit more relaxing - and a lot less toxic"
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
            Title="Building to improve efficiency of our on-field sales team"
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
