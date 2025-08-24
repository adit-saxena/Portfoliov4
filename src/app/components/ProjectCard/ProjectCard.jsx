import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './ProjectCard.css';

const ProjectCard = ({
  headline,
  description,
  metrics,
  layout,
  projectUrl,
  ctaText,
  horizontalMedia,
  verticalMedia,
}) => {
  // Decide which media to display based on the layout prop.
  const mediaToDisplay = layout === 'vertical' && verticalMedia ? verticalMedia : horizontalMedia;

  // Dynamically create the main class name for the card
  const cardClassName = `project-card project-card--${layout}`;

  return (
    <div className={cardClassName}>
      <div className="project-card__media-wrapper">
        {/* Render a video or image tag based on the media type */}
        {mediaToDisplay.type === 'video' ? (
          <video
            src={mediaToDisplay.src}
            className="project-card__media"
            autoPlay
            loop
            muted
            playsInline // Important for autoplay on mobile
            aria-label={headline}
          />
        ) : (
          <img
            src={mediaToDisplay.src}
            alt={headline}
            className="project-card__media"
          />
        )}
        
        {/* Map over the metrics array to display them as pills */}
        <div className="project-card__metrics">
          {metrics.map((metric, index) => (
            <span key={index} className="project-card__metric-pill">
              {metric}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card__content">
        <div className="project-card__text-container">
          <h2 className="project-card__headline">{headline}</h2>
          {/* Only render the description if it exists */}
          {description && layout === 'horizontal' && (
            <p className="project-card__description">{description}</p>
          )}
        </div>
        <a href={projectUrl} className="project-card__cta">
          {ctaText}
          <span className="project-card__cta-arrow"> →</span>
        </a>
      </div>
    </div>
  );
};

// --- PropTypes for Type Checking in JavaScript ---
ProjectCard.propTypes = {
  headline: PropTypes.string.isRequired,
  description: PropTypes.string,
  metrics: PropTypes.arrayOf(PropTypes.string).isRequired,
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  projectUrl: PropTypes.string.isRequired,
  ctaText: PropTypes.string,
  horizontalMedia: PropTypes.shape({
    src: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['image', 'video']).isRequired,
  }).isRequired,
  verticalMedia: PropTypes.shape({
    src: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['image', 'video']).isRequired,
  }),
};

// --- Default Props ---
ProjectCard.defaultProps = {
  description: '',
  layout: 'horizontal',
  ctaText: 'View Project',
  verticalMedia: null,
};

export default ProjectCard;