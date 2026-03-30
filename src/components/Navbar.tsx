import React, { useState } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#despre', label: 'Despre Noi' },
    { href: '#hae', label: 'Ce este AEE?' },
    { href: '#misiune', label: 'Misiunea Noastră' },
    { href: '#comunitate', label: 'Comunitate' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#top" className="flex items-center gap-3">
            <Logo size={48} />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-haero-dark">HAERO</span>
              <p className="text-xs text-gray-500">Asociația Pacienților cu Angioedem Ereditar</p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-haero-red transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-haero-red"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
