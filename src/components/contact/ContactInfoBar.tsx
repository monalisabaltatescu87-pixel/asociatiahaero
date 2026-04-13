import React from 'react';

const contactInfo = [
  { label: 'Email', value: 'asociatia.haero@gmail.com', href: 'mailto:asociatia.haero@gmail.com' },
  { label: 'Telefon', value: '+40 746 252 817', href: 'tel:+40746252817' },
  { label: 'Sediu', value: 'Târgu-Mureș, România' },
  { label: 'Vicepreședinte', value: 'Ana-Maria Stan' },
];

interface ContactInfoBarProps {
  isVisible: (id: string) => boolean;
}

const ContactInfoBar: React.FC<ContactInfoBarProps> = ({ isVisible }) => (
  <section
    id="contact-info"
    data-animate
    className={`border-b border-neutral-200 bg-[#f9f7f3] transition-all duration-700 ${
      isVisible('contact-info') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}
  >
    <div className="max-w-[880px] mx-auto px-6 sm:px-10 lg:px-16 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
      {contactInfo.map((item) => {
        const Tag = item.href ? 'a' : 'div';
        const linkProps = item.href
          ? {
              href: item.href,
              target: item.href.startsWith('mailto') ? undefined : ('_blank' as const),
              rel: 'noopener noreferrer',
            }
          : {};
        return (
          <Tag
            key={item.label}
            {...linkProps}
            className={`no-underline ${item.href ? 'group cursor-pointer' : ''}`}
          >
            <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-1.5">
              {item.label}
            </div>
            <div
              className={`text-[0.95rem] font-semibold text-neutral-800 leading-snug ${
                item.href ? 'group-hover:text-primary-500 transition-colors' : ''
              }`}
            >
              {item.value}
            </div>
          </Tag>
        );
      })}
    </div>
  </section>
);

export default ContactInfoBar;
