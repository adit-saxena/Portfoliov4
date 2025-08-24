'use client';

import Image from 'next/image';
import styles from '../page.module.css';
import Tags from './tags';
import Link from 'next/link';

export default function WorkNew({
  Tag1,
  Tag2,
  Tag3,
  Title,
  Url,
  PageUrl,
  backgroundColor,
  onClick,
  isExternal = false, // default: internal
}) {
  const isVideo = Url?.toLowerCase().endsWith('.webm');

  const content = (
    <div className={styles.outerbox} style={{ backgroundColor }}>
      <div className={styles.leftcol}>
        <div className={styles.tagrow}>
          {Tag1 && <Tags Text={Tag1} />}
          {Tag2 && <Tags Text={Tag2} />}
          {Tag3 && <Tags Text={Tag3} />}
        </div>
        <h3>{Title}</h3>
      </div>

      <div className={styles.rightcol}>
        {isVideo ? (
          <video
            src={Url}
            autoPlay
            loop
            muted
            playsInline
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        ) : (
          <Image
            src={Url}
            alt="Project Visual"
            width={200}       // Set appropriate dimensions or make it responsive
            height={200}
          />
        )}
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
