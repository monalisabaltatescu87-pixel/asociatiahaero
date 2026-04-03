import React from 'react';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  titleHighlight?: string;
  description?: string;
  backLink?: string;
  backLabel?: string;
  badge?: string;
  variant?: 'primary' | 'accent' | 'secondary';
}

const gradients = {
  primary: 'from-primary-50 via-neutral-50 to-primary-50/30',
  accent: 'from-accent-50 via-neutral-50 to-accent-50/30',
  secondary: 'from-secondary-50 via-neutral-50 to-secondary-50/30',
};

const blobColors = {
  primary: 'blob-primary',
  accent: 'blob-accent',
  secondary: 'blob-secondary',
};

const highlightColors = {
  primary: 'text-primary-500',
  accent: 'text-accent-500',
  secondary: 'text-secondary-500',
};

const PageHero: React.FC<PageHeroProps> = ({
  title,
  titleHighlight,
  description,
  backLink,
  backLabel = 'Înapoi',
  badge,
  variant = 'primary',
}) => {
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
          <span
            className={`inline-block text-[11px] font-bold uppercase tracking-[3px] ${highlightColors[variant]} mb-4`}
          >
            {badge}
          </span>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-800 mb-5 text-balance leading-tight">
          {title}
          {titleHighlight && (
            <span className={` ${highlightColors[variant]}`}> {titleHighlight}</span>
          )}
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
