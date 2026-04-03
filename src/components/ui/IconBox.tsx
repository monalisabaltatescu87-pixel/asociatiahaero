import React from 'react';

type IconBoxVariant = 'primary' | 'secondary' | 'accent';
type IconBoxSize = 'sm' | 'md' | 'lg';

interface IconBoxProps {
  children: React.ReactNode;
  variant?: IconBoxVariant;
  size?: IconBoxSize;
  className?: string;
}

const variantStyles: Record<IconBoxVariant, string> = {
  primary: 'bg-primary-50 text-primary-500',
  secondary: 'bg-secondary-50 text-secondary-500',
  accent: 'bg-accent-50 text-accent-500',
};

const sizeStyles: Record<IconBoxSize, string> = {
  sm: 'w-10 h-10 rounded-xl',
  md: 'w-12 h-12 rounded-xl',
  lg: 'w-16 h-16 rounded-2xl',
};

const IconBox: React.FC<IconBoxProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  return (
    <div
      className={`flex items-center justify-center flex-shrink-0 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </div>
  );
};

export default IconBox;
