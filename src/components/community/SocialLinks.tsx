import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SocialLinksProps {
  isVisible: (id: string) => boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ isVisible }) => (
  <section
    id="social"
    data-animate
    className={`border-b border-neutral-200 transition-all duration-700 ${
      isVisible('social') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}
  >
    <div className="max-w-[880px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
      <div className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6">
        Unde ne găsești
      </div>
      <p className="text-[1.05rem] leading-[1.85] text-neutral-600 max-w-[560px] mb-10">
        Am creat spații online în care pacienții și aparținătorii pot comunica deschis, pot pune
        întrebări și pot primi răspunsuri de la persoane cu experiențe asemănătoare.
      </p>

      <div className="grid sm:grid-cols-2 gap-px bg-neutral-200">
        {[
          {
            href: 'https://www.facebook.com/angioedemereditarromania',
            labelColor: 'text-primary-400',
            label: 'Facebook',
            title: 'Pagina oficială',
            text: 'Comunitatea noastră deschisă pentru pacienți, aparținători și medici.',
          },
          {
            href: 'https://www.instagram.com/asociatiahaero',
            labelColor: 'text-accent-400',
            label: 'Instagram',
            title: '@asociatiahaero',
            text: 'Noutăți, povești și informații utile despre angioedemul ereditar.',
          },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-50 p-8 no-underline transition-colors duration-200 hover:bg-[#f9f7f3]"
          >
            <div
              className={`text-[0.65rem] font-bold uppercase tracking-[0.2em] ${link.labelColor} mb-3`}
            >
              {link.label}
            </div>
            <h3 className="font-playfair text-xl font-bold text-neutral-800 mb-2">{link.title}</h3>
            <p className="text-[0.9rem] leading-[1.75] text-neutral-500 mb-4">{link.text}</p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-600 group-hover:text-neutral-800 transition-colors">
              Vizitează
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default SocialLinks;
