import React from 'react';
import PropTypes from 'prop-types'; 
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
  const mediaToDisplay = layout === 'vertical' && verticalMedia ? verticalMedia : horizontalMedia;

  const cardClassName = `project-card project-card--${layout}`;

  return (
    <div
      className={cardClassName}
      onClick={() => window.location.href = projectUrl}
      style={{ cursor: "pointer" }}
      tabIndex={0} // ✅ makes div focusable for accessibility
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          window.open(projectUrl, "_blank", "noopener,noreferrer");
        }
      }}
    >
      <div className="project-card__media-wrapper">
        {mediaToDisplay.type === 'video' ? (
          <video
            src={mediaToDisplay.src}
            className="project-card__media"
            autoPlay
            loop
            muted
            playsInline
            aria-label={headline}
          />
        ) : (
          <img
            src={mediaToDisplay.src}
            alt={headline}
            className="project-card__media"
          />
        )}

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
          {description && layout === 'horizontal' && (
            <p className="project-card__description">{description}</p>
          )}
        </div>
        <a
          href={projectUrl}
          className="project-card__cta"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()} // ✅ prevents parent click from firing
        >
          {ctaText}
          <span className="project-card__cta-arrow"> →</span>
        </a>
      </div>
    </div>
  );
};

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

ProjectCard.defaultProps = {
  description: '',
  layout: 'horizontal',
  ctaText: 'View Project',
  verticalMedia: null,
};

export default ProjectCard;
