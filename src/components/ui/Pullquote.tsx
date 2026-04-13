import React from 'react';

interface PullquoteProps {
  tag?: string;
  children: React.ReactNode;
}

const Pullquote: React.FC<PullquoteProps> = ({ tag = 'Important de știut', children }) => (
  <div className="my-10 py-8 border-t-2 border-accent-400 border-b border-b-neutral-200">
    <span className="block text-[10px] font-extrabold tracking-[3px] uppercase text-accent-400 mb-4">
      {tag}
    </span>
    <div className="font-playfair text-lg sm:text-xl leading-[1.65] text-neutral-700 italic [&_strong]:not-italic [&_strong]:text-neutral-800 [&_strong]:font-bold [&_p]:mb-3 [&_p:last-child]:mb-0">
      {children}
    </div>
  </div>
);

export default Pullquote;
