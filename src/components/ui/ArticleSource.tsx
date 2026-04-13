import React from 'react';

interface SourceLink {
  href: string;
  label: string;
}

interface ArticleSourceProps {
  sources: SourceLink[];
}

const ArticleSource: React.FC<ArticleSourceProps> = ({ sources }) => (
  <div className="pt-8 pb-4 text-center text-[13px] text-neutral-400">
    Informații bazate pe date de la{' '}
    {sources.map((s, i) => (
      <React.Fragment key={s.href}>
        {i > 0 && (i === sources.length - 1 ? ' și ' : ', ')}
        <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-neutral-500 underline underline-offset-2 hover:text-primary-500">
          {s.label}
        </a>
      </React.Fragment>
    ))}.
  </div>
);

export default ArticleSource;
