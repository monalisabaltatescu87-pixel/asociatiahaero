import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleNavProps {
  prev?: { to: string; label: string };
  next?: { to: string; label: string };
}

const ArticleNav: React.FC<ArticleNavProps> = ({ prev, next }) => (
  <div className="pt-10 border-t border-neutral-200 flex justify-between items-center">
    {prev ? (
      <Link to={prev.to} className="text-primary-500 hover:text-primary-600 text-sm font-semibold transition-colors">
        &larr; {prev.label}
      </Link>
    ) : <span />}
    {next ? (
      <Link to={next.to} className="text-primary-500 hover:text-primary-600 text-sm font-semibold transition-colors">
        {next.label} &rarr;
      </Link>
    ) : <span />}
  </div>
);

export default ArticleNav;
