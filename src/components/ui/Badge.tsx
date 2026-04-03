import React from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'neutral';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-primary-50 text-primary-600 border-primary-200',
  secondary: 'bg-secondary-50 text-secondary-500 border-secondary-100',
  accent: 'bg-accent-50 text-accent-600 border-accent-200',
  neutral: 'bg-neutral-100 text-neutral-600 border-neutral-200',
};

const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[2px] border px-4 py-1.5 rounded-full ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
