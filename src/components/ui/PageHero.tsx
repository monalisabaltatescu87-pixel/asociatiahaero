import React from 'react';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  description?: string;
  backLink?: string;
  backLabel?: string;
  badge?: string;
  variant?: 'primary' | 'accent' | 'secondary' | 'reader';
}

const gradients = {
  primary: 'from-primary-50 via-neutral-50 to-primary-50/30',
  accent: 'from-accent-50 via-neutral-50 to-accent-50/30',
  secondary: 'from-secondary-50 via-neutral-50 to-secondary-50/30',
  reader: '',
};

const blobColors = {
  primary: 'blob-primary',
  accent: 'blob-accent',
  secondary: 'blob-secondary',
  reader: '',
};

const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  backLink,
  backLabel = 'Înapoi',
  badge,
  variant = 'primary',
}) => {
  if (variant === 'reader') {
    return (
      <section className="relative pt-28 pb-14 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
        <div className="relative max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
          {backLink && (
            <Link
              to={backLink}
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-700 text-sm font-semibold mb-6 transition-colors group"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {backLabel}
            </Link>
          )}

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 mb-5 leading-tight text-center">
            {title}
          </h1>

          {description && (
            <p className="text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed text-center">
              {description}
            </p>
          )}
        </div>

      </section>
    );
  }

  return (
    <section
      className={`relative pt-28 pb-16 bg-gradient-to-br ${gradients[variant]} overflow-hidden`}
    >
      {/* Organic background blobs */}
      <div className={`absolute -top-24 -right-16 w-80 h-80 ${blobColors[variant]} opacity-60`} />
      <div className={`absolute -bottom-12 left-[20%] w-48 h-48 ${blobColors[variant]} opacity-40`} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {backLink && (
          <Link
            to={backLink}
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-700 text-sm font-semibold mb-6 transition-colors group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {backLabel}
          </Link>
        )}

        {badge && (
          <span className="inline-block text-[11px] font-bold uppercase tracking-[3px] text-primary-500 mb-4">
            {badge}
          </span>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-800 mb-5 text-balance leading-tight">
          {title}
        </h1>

        {description && (
          <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
