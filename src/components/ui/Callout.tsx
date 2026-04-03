import React from 'react';

type CalloutVariant = 'info' | 'warning' | 'success' | 'error' | 'accent';

interface CalloutProps {
  children: React.ReactNode;
  title?: string;
  variant?: CalloutVariant;
  icon?: React.ReactNode;
  className?: string;
}

const variantStyles: Record<CalloutVariant, { bg: string; border: string; title: string; text: string }> = {
  info: {
    bg: 'bg-accent-50',
    border: 'border-l-accent-400',
    title: 'text-accent-600',
    text: 'text-accent-700',
  },
  warning: {
    bg: 'bg-primary-50',
    border: 'border-l-primary-400',
    title: 'text-primary-600',
    text: 'text-primary-700',
  },
  success: {
    bg: 'bg-success-light',
    border: 'border-l-success',
    title: 'text-success',
    text: 'text-green-800',
  },
  error: {
    bg: 'bg-error-light',
    border: 'border-l-error',
    title: 'text-error-dark',
    text: 'text-red-900',
  },
  accent: {
    bg: 'bg-secondary-50',
    border: 'border-l-secondary-400',
    title: 'text-secondary-600',
    text: 'text-secondary-700',
  },
};

const Callout: React.FC<CalloutProps> = ({
  children,
  title,
  variant = 'info',
  icon,
  className = '',
}) => {
  const s = variantStyles[variant];

  return (
    <div
      className={`${s.bg} border-l-4 ${s.border} rounded-r-2xl p-5 ${className}`}
    >
      {title && (
        <div className={`flex items-center gap-2 ${s.title} font-bold text-sm uppercase tracking-wider mb-2`}>
          {icon}
          {title}
        </div>
      )}
      <div className={`${s.text} text-[15px] leading-relaxed`}>{children}</div>
    </div>
  );
};

export default Callout;
