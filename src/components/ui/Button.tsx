import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'trust';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-400 text-neutral-800 hover:bg-primary-500 shadow-raised hover:shadow-glow-primary',
  secondary:
    'bg-transparent text-primary-600 border-2 border-primary-300 hover:bg-primary-50 hover:border-primary-400',
  accent:
    'bg-accent-400 text-white hover:bg-accent-500 shadow-raised hover:shadow-glow-accent',
  ghost:
    'bg-transparent text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100',
  trust:
    'bg-accent-50 text-accent-600 border-2 border-accent-300 hover:bg-accent-100',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-9 py-4 text-lg',
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  fullWidth = false,
  disabled = false,
}) => {
  const base = `inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 hover:-translate-y-0.5 ${
    variantStyles[variant]
  } ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
