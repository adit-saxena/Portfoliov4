'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './SideProjectCard.module.css';

export default function SideProjectCard({
    ProjectName,
    Description,
    Url,
    PageUrl,
    backgroundColor = '#f0f0f0',
    onClick,
    isExternal = false,
}) {
    const content = (
        <div
            className={styles.card}
        // onClick handler moved to the wrapper
        >
            {/* Visual Container */}
            <div className={styles.visualContainer} style={{ backgroundColor }}>
                <Image
                    src={Url}
                    alt={ProjectName || "Project"}
                    fill
                    className={styles.image}
                />
            </div>

            {/* Info Container */}
            <div className={styles.infoContainer}>
                <h3 className={styles.title}>{ProjectName}</h3>
                <p className={styles.description}>{Description}</p>
            </div>
        </div>
    );

    if (!PageUrl) return content; // Fallback if no URL

    return isExternal ? (
        <a
            href={PageUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClick}
            className={styles.linkWrapper}
        >
            {content}
        </a>
    ) : (
        <Link
            href={PageUrl}
            onClick={onClick}
            className={styles.linkWrapper}
        >
            {content}
        </Link>
    );
}
