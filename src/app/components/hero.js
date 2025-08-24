'use client';
import styles from '../page.module.css';
import { motion } from 'framer-motion';
import TextType from './TextType/TextType.jsx';
import Card from './HeroCard/Card.jsx';

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // controls delay between children
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <div>
      <motion.div
        className={styles.hero}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 1. Link */}
        <motion.a
          href="/stage"
          variants={itemVariants}
          className={styles.cuttochase}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          Shortcut to my best work yet →
        </motion.a>

        {/* 2. Heading */}
        <motion.h2 variants={itemVariants}>
          i hate design.
        </motion.h2>

        {/* 3. Paragraph */}
        <motion.div
          className={styles.experiences}
          variants={itemVariants}
        >
          <motion.div
            variants={itemVariants}
            className={styles.whennot}
          >
            <span className={styles.whennotside}>If it</span>
            <span className={styles.whennotmain}>
              <TextType 
                text={[
                  "isn't as intuitive as drinking water", 
                  "feels like solving a riddle every time", 
                  "makes users think harder"
                ]}
                typingSpeed={60}
                as={"span"}
                pauseDuration={8000}
                showCursor={true}
              />
            </span>
            <span className={styles.whennotside}>and so I</span>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.cardrow}
          variants={itemVariants}>
              <Card
              bgColor="#D6E5BE"
              image="'/dtu2.jpg'"
              text="studied Bachelor of Design at DTU for 4 years"
              rotation={12.44}
              />
              <Card
              bgColor="#FAE1A7"
              image="'/exp.png'"
              text="designed for 1 Cr+  users across e-commerce & OTT"
              rotation={-3.89}
              />
              <Card
              bgColor="#FFCBE1"
              image="'/comps.png'"
              text="got recognized at leading design competitions "
              rotation={7.24}
              />
              <Card
              bgColor="#DCCCEA"
              image="'/dtu.png'"
              text="discussed my work with design experts from IITs"
              rotation={-9.7}
              />

          </motion.div>
          <motion.p
            variants={itemVariants}
            className={styles.tagline}
          >
            only to end up...
            </motion.p>
      </motion.div>
    </div>
  );
}
