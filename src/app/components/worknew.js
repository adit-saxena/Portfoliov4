'use client';

import Image from 'next/image';
import styles from '../page.module.css';
import Tags from './tags';
import Link from 'next/link';

export default function WorkNew({
  Tag1,
  Tag2,
  Tag3,
  ProjectName,
  OneLiner,
  Description,
  Url,
  PageUrl,
  backgroundColor,
  onClick,
  isExternal = false, // default: internal
}) {
  const isVideo = Url?.toLowerCase().endsWith('.webm');

  const content = (
    <div className={styles.outerbox}>
      {/* 1. Visual Container */}
      <div className={styles.visualContainer} style={{ backgroundColor }}>
        {isVideo ? (
          <video
            src={Url}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <Image
            src={Url}
            alt="Project Visual"
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>

      {/* Info Container */}
      <div className={styles.infoContainer}>
        {/* 2. Project Title */}
        <h2 className={styles.projectName} style={{ color: backgroundColor }}>
          {Tag1 === "Internship" || !ProjectName ? (ProjectName || "Project") : ProjectName}
        </h2>

        {/* Right Column: OneLiner, Description, Tags */}
        <div className={styles.projectDetails}>
          {/* 3. One-Liner */}
          <h3 className={styles.oneLiner} style={{ color: backgroundColor }}>
            {OneLiner}
          </h3>

          {/* 4. Descriptive Text (< 25 words) */}
          <p className={styles.description}>
            {Description}
          </p>

          {/* 5. Tags */}
          <div className={styles.tagrow}>
            {Tag1 && <Tags Text={Tag1} />}
            {Tag2 && <Tags Text={Tag2} />}
            {Tag3 && <Tags Text={Tag3} />}
          </div>
        </div>
      </div>
    </div>
  );

  return isExternal ? (
    <a href={PageUrl} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      {content}
    </a>
  ) : (
    <Link href={PageUrl} onClick={onClick}>
      {content}
    </Link>
  );
}
