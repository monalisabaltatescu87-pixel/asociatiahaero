import React from 'react';

interface ArticleSectionProps {
  label: string;
  children: React.ReactNode;
}

const ArticleSection: React.FC<ArticleSectionProps> = ({ label, children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-y-2 gap-x-8 py-12 border-t border-neutral-200">
    <div className="text-[11px] font-extrabold tracking-[3px] uppercase text-neutral-400 pt-1.5 sm:sticky sm:top-24 self-start">
      {label}
    </div>
    <div>{children}</div>
  </div>
);

export default ArticleSection;
