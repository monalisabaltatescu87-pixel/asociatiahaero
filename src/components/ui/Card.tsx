import React from 'react';
import { Link } from 'react-router-dom';

type CardVariant = 'default' | 'elevated' | 'bordered' | 'accent-left' | 'feature';
type AccentColor = 'primary' | 'secondary' | 'accent';

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  accentColor?: AccentColor;
  to?: string;
  className?: string;
  hover?: boolean;
}

const accentBorderColors: Record<AccentColor, string> = {
  primary: 'border-l-primary-400',
  secondary: 'border-l-secondary-400',
  accent: 'border-l-accent-400',
};

const accentTopColors: Record<AccentColor, string> = {
  primary: 'border-t-primary-400',
  secondary: 'border-t-secondary-400',
  accent: 'border-t-accent-400',
};

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  accentColor = 'primary',
  to,
  className = '',
  hover = true,
}) => {
  let styles = 'bg-white rounded-2xl overflow-hidden ';

  switch (variant) {
    case 'elevated':
      styles += 'shadow-lifted ';
      break;
    case 'bordered':
      styles += `border border-neutral-200 `;
      break;
    case 'accent-left':
      styles += `border-l-4 ${accentBorderColors[accentColor]} shadow-raised `;
      break;
    case 'feature':
      styles += `border-t-4 ${accentTopColors[accentColor]} shadow-raised `;
      break;
    default:
      styles += 'shadow-raised ';
      break;
  }

  if (hover) {
    styles += 'card-hover ';
  }

  const combinedStyles = `${styles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={`block ${combinedStyles}`}>
        {children}
      </Link>
    );
  }

  return <div className={combinedStyles}>{children}</div>;
};

export default Card;
