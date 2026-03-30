import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 64 }) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/logo haero.jpeg`}
      alt="HAERO - Asociația pentru Angioedem Ereditar"
      height={size}
      className={`object-contain ${className}`}
      style={{ height: size, width: 'auto' }}
    />
  );
};

export default Logo;
