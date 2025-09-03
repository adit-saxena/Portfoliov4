// components/ProjectCard.jsx
import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';


const ProjectCard = ({ 
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  metrics,
  ctaText,
  ctaLink,
  onCtaClick,
  className,
  imageWidth,
  imageHeight
}) => {
  const isVideo = heroImage?.endsWith('.webm') || heroImage?.endsWith('.mp4');
  
  const handleCtaClick = (e) => {
    if (onCtaClick) {
      e.preventDefault();
      onCtaClick();
    }
  };

  return (
    <section className={`${styles.projectCard} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            {title && <h1 className={styles.title}>{title}</h1>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          
          <div className={styles.projectImageContainer}>
            {heroImage && (
              <div className={styles.imageWrapper}>
                {isVideo ? (
                  <video
                    className={styles.projectMedia}
                    autoPlay
                    loop
                    muted
                    playsInline
                    width={imageWidth}
                    height={imageHeight}
                  >
                    <source src={heroImage} type={`video/${heroImage.split('.').pop()}`} />
                  </video>
                ) : (
                  <Image
                    src={heroImage}
                    alt={heroImageAlt || "Hero illustration"}
                    width={imageWidth || 500}
                    height={imageHeight || 600}
                    className={styles.projectMedia}
                    priority
                  />
                )}
              </div>
            )}
            
            {/* Floating Metrics */}
            {metrics && metrics.length > 0 && metrics.map((metric, index) => (
              <div
                key={`metric-${index}`}
                className={`${styles.metricBadge} ${styles[`metric${index + 1}`]}`}
              >
                <div className={styles.metricContent}>
                  {metric.value && (
                    <span 
                      className={styles.metricValue}
                      style={metric.valueColor ? { color: metric.valueColor } : {}}
                    >
                      {metric.value}
                    </span>
                  )}
                  <span className={styles.metricLabel}>{metric.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {(ctaText || ctaLink) && (
          <a 
            href={ctaLink || "#"} 
            className={styles.ctaButton}
            onClick={handleCtaClick}
          >
            {ctaText}
            <svg className={styles.ctaArrow} viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14m-7-7l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
      </div>
    </section>
  );
};

ProjectCard.propTypes = {
  /** Main heading text */
  title: PropTypes.string,
  /** Subtitle/description text */
  subtitle: PropTypes.string,
  /** Path to project image or video (webp, webm, mp4) */
  heroImage: PropTypes.string,
  /** Alt text for project image */
  heroImageAlt: PropTypes.string,
  /** Array of metrics to display as floating badges */
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      /** Metric label text */
      label: PropTypes.string.isRequired,
      /** Metric value (optional) */
      value: PropTypes.string,
      /** Custom color for metric value */
      valueColor: PropTypes.string
    })
  ),
  /** Call-to-action button text */
  ctaText: PropTypes.string,
  /** Call-to-action link URL */
  ctaLink: PropTypes.string,
  /** Custom click handler for CTA button */
  onCtaClick: PropTypes.func,
  /** Additional CSS class name */
  className: PropTypes.string,
  /** Image width for Next.js Image component */
  imageWidth: PropTypes.number,
  /** Image height for Next.js Image component */
  imageHeight: PropTypes.number
};

ProjectCard.defaultProps = {
  title: "Crafted digital experiences that delight users - and businesses",
  subtitle: "Crafting digital experiences that delight users - and businesses", 
  heroImage: "/hero-doctor.webp",
  heroImageAlt: "Project illustration",
  metrics: [
    { label: "Engagement", value: "+5%" },
    { label: "Agile Methodology", value: "" }
  ],
  ctaText: "View Project",
  ctaLink: "#",
  imageWidth: 500,
  imageHeight: 600
};

export default ProjectCard;