import React from 'react';

const blobsConfig = [
  { id: 1, size: 750, top: '-5%', left: '-15%', rotation: 15, opacity: 0.15 },
  // This middle blob bridges the Welcome and Menu sections perfectly
  { id: 2, size: 1050, top: '45%', right: '-25%', rotation: 120, opacity: 0.18 },
  { id: 3, size: 850, bottom: '-5%', left: '-15%', rotation: 220, opacity: 0.12 },
  { id: 4, size: 650, top: '20%', right: '-10%', rotation: 75, opacity: 0.14 },
  { id: 5, size: 800, top: '75%', left: '-20%', rotation: 280, opacity: 0.15 },
  // A new blob bridging Welcome and Menu on the left side
  { id: 6, size: 900, top: '28%', left: '-25%', rotation: 180, opacity: 0.16 },
];
const BackgroundBlobs = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      {blobsConfig.map(blob => (
        <svg
          key={blob.id}
          viewBox="0 0 200 200"
          style={{
            position: 'absolute',
            width: blob.size,
            height: blob.size,
            ...(blob.top !== undefined ? { top: blob.top } : {}),
            ...(blob.bottom !== undefined ? { bottom: blob.bottom } : {}),
            ...(blob.left !== undefined ? { left: blob.left } : {}),
            ...(blob.right !== undefined ? { right: blob.right } : {}),
            opacity: blob.opacity,
            transform: `rotate(${blob.rotation}deg)`
          }}
        >
          <path fill="#ff4d4d"
            d="M50.4,-48.9C61,-39.8,62.2,-19.9,57,-5.1C51.9,9.6,40.4,19.3,29.9,32.4C19.3,45.6,9.6,62.2,-1.6,63.9C-12.9,65.5,-25.8,52.1,-33.5,38.9C-41.1,25.8,-43.6,12.9,-43.4,0.2C-43.2,-12.4,-40.2,-24.8,-32.5,-33.8C-24.8,-42.9,-12.4,-48.5,3.8,-52.3C19.9,-56,39.8,-57.9,50.4,-48.9Z"
            transform="translate(100 100)" />
        </svg>
      ))}
    </div>
  );
};

export default BackgroundBlobs;
