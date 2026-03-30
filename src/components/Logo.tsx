import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 64 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle - yellow background */}
      <circle cx="100" cy="100" r="90" fill="#FBC02D" stroke="#2D2D2D" strokeWidth="3" />

      {/* Puzzle pieces representing unity */}
      {/* Red piece - top left */}
      <path
        d="M100 100 Q60 30 30 70 Q10 100 40 100 Z"
        fill="#D32F2F"
      />
      {/* Blue piece - bottom */}
      <path
        d="M100 100 Q80 140 60 160 Q90 180 120 160 Q140 140 100 100 Z"
        fill="#1976D2"
      />
      {/* White/light piece - right */}
      <path
        d="M100 100 Q140 60 160 80 Q180 110 150 130 Q130 140 100 100 Z"
        fill="#FFF9C4"
      />

      {/* Puzzle connector nubs */}
      <circle cx="70" cy="95" r="8" fill="#D32F2F" />
      <circle cx="115" cy="135" r="8" fill="#1976D2" />
      <circle cx="135" cy="85" r="8" fill="#FFF9C4" />

      {/* HAERO text */}
      <text
        x="100"
        y="105"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="32"
        fill="#2D2D2D"
        letterSpacing="1"
      >
        HAERO
      </text>
    </svg>
  );
};

export default Logo;
