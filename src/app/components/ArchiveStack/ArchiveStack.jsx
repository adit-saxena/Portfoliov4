'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ArchiveStack.module.css';

export default function ArchiveStack({ projects }) {
    const [index, setIndex] = useState(0);

    const nextCard = () => {
        setIndex((prev) => (prev + 1) % projects.length);
    };

    // We'll show a stack of 2-3 cards.
    // The 'active' card is at projects[index].
    // The 'next' card is at projects[(index + 1) % len], etc.

    // We want to render them in reverse order so the active one is z-index highest (dom order or manual z-index).
    // Actually, absolute positioning allows manual z-index.

    const currentProject = projects[index];
    const nextProject = projects[(index + 1) % projects.length];

    return (
        <div className={styles.stackContainer}>
            <div className={styles.cardArea} onClick={nextCard}>
                <AnimatePresence mode="popLayout">
                    {/* Background Card (The one behind) */}
                    <motion.div
                        key={nextProject.ProjectName + '-upcoming'}
                        className={`${styles.card} ${styles.backgroundCard}`}
                        initial={{ scale: 0.9, rotate: -4, y: 15, opacity: 0.6 }}
                        animate={{ scale: 0.95, rotate: -2, y: 10, opacity: 0.8 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className={styles.imagePlaceholder} style={{ backgroundColor: nextProject.backgroundColor }}>
                            {/* Visual placeholder or blurred image */}
                            <img src={nextProject.Url} alt="" className={styles.bgImg} />
                        </div>
                    </motion.div>

                    {/* Active Card */}
                    <motion.div
                        key={currentProject.ProjectName}
                        className={styles.card}
                        initial={{ x: 300, opacity: 0, rotate: 10 }}
                        animate={{ x: 0, opacity: 1, rotate: 0 }}
                        exit={{ x: -300, opacity: 0, rotate: -10 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        style={{ zIndex: 10 }}
                        whileHover={{ scale: 1.02, rotate: 1 }}
                        whileTap={{ cursor: "grabbing" }}
                    >
                        <div className={styles.cardInner}>
                            <div className={styles.start}>
                                <span className={styles.tag}>{currentProject.Tag1}</span>
                                <div className={styles.visual} style={{ backgroundColor: currentProject.backgroundColor }}>
                                    <img src={currentProject.Url} alt={currentProject.ProjectName} />
                                </div>
                            </div>

                            <div className={styles.info}>
                                <h3 className={styles.title}>{currentProject.ProjectName}</h3>
                                <p className={styles.oneLiner}>{currentProject.OneLiner}</p>
                                <p className={styles.desc}>{currentProject.Description}</p>
                                <div className={styles.hint}>Click to see next &rarr;</div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className={styles.introDetails}>
                <h3>From the Archives</h3>
                <p>
                    A rotating collection of experiments, early concepts, and lessons learned.
                    <br />
                    <strong>{index + 1} / {projects.length}</strong>
                </p>
            </div>
        </div>
    );
}
