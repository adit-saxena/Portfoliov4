'use client';
import { motion } from 'framer-motion';
import styles from './ArchiveList.module.css';

export default function ArchiveList({ projects }) {
    return (
        <div className={styles.container}>
            {/* Header Row */}
            <div className={styles.header}>
                <span className={styles.colThumb}></span>
                <span className={styles.colName}>Project</span>
                <span className={styles.colFactor}> The "Factor"</span> {/* The Hook */}
                <span className={styles.colLink}></span>
            </div>

            <div className={styles.list}>
                {projects.map((project, i) => (
                    <motion.a
                        key={i}
                        href={project.PageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.row}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ x: 10, backgroundColor: 'rgba(0,0,0,0.02)' }}
                    >
                        <div className={styles.colThumb}>
                            <div className={styles.thumbWrapper}>
                                <img src={project.Url} alt={project.ProjectName} className={styles.thumbImg} />
                            </div>
                        </div>

                        <div className={styles.colName}>
                            <span className={styles.title}>{project.ProjectName}</span>
                        </div>

                        {/* The "Important Factor" - using OneLiner as the hook */}
                        <div className={styles.colFactor}>
                            {project.OneLiner}
                        </div>



                        <div className={styles.colLink}>
                            <span className={styles.ctaButton}>View</span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
