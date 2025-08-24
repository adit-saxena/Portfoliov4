// src/app/components/SolutionBlock.js
'use client'; // Add this if needed in your Next.js version/setup

import React from 'react';

// Define or import necessary styles - reusing styles defined in schmooze/page.js for simplicity
// In a real application, you might move these styles to a CSS module or a shared style object
const otherImageStyle = {
    display: 'block',          // Keep as block for margin auto
    margin: '0 auto',          // Keep centered
    maxWidth: '70%',           // Keep max width constraint from previous style
    maxHeight: '50vh',         // Enforce max height (already present)
    width: 'auto',             // MODIFIED: Let width adjust based on height/aspect ratio
    height: 'auto',            // MODIFIED: Let height adjust based on width/aspect ratio (within maxHeight)
    objectFit: 'contain',      // ADDED: Scale image while preserving aspect ratio
    borderRadius: '8px',       // Keep styling
    border: '1px solid #eee'   // Keep styling
};

const figureStyle = {
    textAlign: 'center',
    margin: '2vh auto' // Reduced margin slightly for component use
};

const figcaptionStyle = {
    marginTop: '0.5em',
    fontSize: '0.9em',
    color: '#555',
    fontStyle: 'italic' // Added italic style as seen in the original page
};

export default function SolutionBlock({ solutionNumber, title, rationale, images = [] }) {
  return (
    <div style={{ marginTop: '3em' }}> {/* Add some top margin for separation */}
      <h4 style={{ textAlign: 'center', fontWeight: 'bold' }}>
        Solution {solutionNumber}: {title}
      </h4>
      <p style={{ textAlign: 'center', maxWidth: '60vw', margin: '0.5em auto 1.5em auto' }}>
        <strong>Rationale:</strong> {rationale}
      </p>

      {/* Map over the images array to display each image and its caption */}
      {images.map((image, index) => (
        <figure key={index} style={figureStyle}>
          {/* Optional: Add descriptive text like 'Before:', 'After:', 'Suggested UI:' */}
          {image.description && (
            <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '0.5em' }}>
              {image.description}
            </p>
          )}
          <img
            src={image.src}
            alt={image.alt}
            style={otherImageStyle} // Use the defined image style
          />
          {image.caption && (
            <figcaption style={figcaptionStyle}>
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}