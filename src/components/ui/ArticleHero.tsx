import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleHeroProps {
  label?: string;
  title: string;
  description?: string;
  backLink?: string;
  backLabel?: string;
}

const ArticleHero: React.FC<ArticleHeroProps> = ({
  label = 'Ghid medical',
  title,
  description,
  backLink,
  backLabel = 'Despre AEE',
}) => (
  <section className="pt-28 pb-12 sm:pt-32 sm:pb-16">
    <div className="max-w-[860px] mx-auto px-5 sm:px-6">
      {backLink && (
        <Link
          to={backLink}
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-600 text-sm font-semibold mb-6 transition-colors group"
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
      <span className="block text-[11px] font-extrabold tracking-[4px] uppercase text-primary-500 mb-6">
        {label}
      </span>
      <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-800 leading-[1.1] mb-8">
        {title}
      </h1>
      {description && (
        <p className="text-lg sm:text-[19px] leading-[1.8] text-neutral-500 max-w-[560px] border-l-[3px] border-primary-300 pl-6">
          {description}
        </p>
      )}
    </div>
  </section>
);

export default ArticleHero;
