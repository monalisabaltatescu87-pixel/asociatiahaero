import React from 'react';

type DividerColor = 'primary' | 'accent' | 'secondary';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  dividerColor?: DividerColor;
  align?: 'center' | 'left';
  reader?: boolean;
  className?: string;
}

const dividerGradients: Record<DividerColor, string> = {
  primary: 'from-primary-400 via-primary-300 to-transparent',
  accent: 'from-accent-400 via-accent-300 to-transparent',
  secondary: 'from-secondary-400 via-secondary-300 to-transparent',
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  dividerColor = 'primary',
  align = 'center',
  reader = false,
  className = '',
}) => {
  const isCenter = align === 'center';

  if (reader) {
    return (
      <div className={`mb-5 ${className}`}>
        <h2 className="relative pl-5 font-playfair text-2xl sm:text-[26px] font-bold text-neutral-800 mb-4">
          <span className="absolute left-0 top-1 w-1 h-7 rounded-full bg-primary-400" />
          {title}
        </h2>
        {description && (
          <p className="text-neutral-500 text-[17px] leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`${isCenter ? 'text-center' : ''} mb-14 ${className}`}>
      {label && (
        <span className="inline-block text-[11px] font-bold uppercase tracking-[3px] text-primary-500 mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 mb-4 text-balance">
        {title}
      </h2>
      <div
        className={`h-1 w-16 rounded-full bg-gradient-to-r ${dividerGradients[dividerColor]} ${
          isCenter ? 'mx-auto' : ''
        } mb-6`}
      />
      {description && (
        <p
          className={`text-neutral-500 text-lg leading-relaxed ${
            isCenter ? 'max-w-3xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
