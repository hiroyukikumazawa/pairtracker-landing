// src/components/FaviconLogo.tsx
import React from 'react';

const FaviconLogo: React.FC = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle */}
      <circle cx="32" cy="32" r="30" fill="#0D1117" stroke="#3B82F6" strokeWidth="4" />

      {/* Interlocking P and T */}
      <text
        x="12"
        y="43"
        fontFamily="Orbitron, sans-serif"
        fontSize="32"
        fill="#EC4899"
        fontWeight="bold"
      >
        P
      </text>
      <text
        x="30"
        y="43"
        fontFamily="Orbitron, sans-serif"
        fontSize="32"
        fill="#3B82F6"
        fontWeight="bold"
      >
        T
      </text>
    </svg>
  );
};

export default FaviconLogo;
