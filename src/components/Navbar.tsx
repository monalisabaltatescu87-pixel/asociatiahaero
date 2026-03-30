import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isSubPage = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const mainLinks = [
    { href: '#despre', label: 'Despre Noi' },
    { href: '#misiune', label: 'Misiunea Noastră' },
    { href: '#comunitate', label: 'Comunitate' },
    { href: '#contact', label: 'Contact' },
  ];

  const aeeSubLinks = [
    { to: '/ce-este-aee', label: 'Care sunt simptomele AEE?' },
    { to: '/care-sunt-declansatorii-aee', label: 'Factori declanșatori' },
    { to: '/ce-cauzeaza-aee', label: 'Principalele cauze' },
    { to: '/cum-tratam-aee', label: 'Tratamente disponibile' },
  ];

  const handleAnchorClick = (href: string) => {
    if (isSubPage) {
      window.location.href = '/' + href;
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-floating'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <Logo size={48} />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-haero-dark">HAERO</span>
              <p className="text-xs text-haero-gray-500">Asociația pentru Angioedem Ereditar</p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {mainLinks.slice(0, 1).map((link) => (
              <a
                key={link.href}
                href={isSubPage ? '/' + link.href : link.href}
                onClick={() => handleAnchorClick(link.href)}
                className="text-haero-gray-700 hover:text-haero-yellow-600 transition-colors font-semibold text-sm border-b-2 border-transparent hover:border-haero-yellow"
              >
                {link.label}
              </a>
            ))}

            {/* AEE Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`text-haero-gray-700 hover:text-haero-yellow-600 transition-colors font-semibold text-sm border-b-2 flex items-center gap-1 ${
                  location.pathname.includes('aee') || location.pathname.includes('tratam') || location.pathname.includes('declansatori') || location.pathname.includes('cauzeaza')
                    ? 'border-haero-yellow text-haero-yellow-600'
                    : 'border-transparent'
                }`}
              >
                Ce este AEE?
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-floating border border-haero-gray-100 py-2 z-50">
                  <a
                    href={isSubPage ? '/#hae' : '#hae'}
                    className="block px-4 py-2 text-sm text-haero-gray-700 hover:bg-haero-yellow-50 hover:text-haero-yellow-600 transition-colors"
                  >
                    Ce este AEE? (rezumat)
                  </a>
                  {aeeSubLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        location.pathname === link.to
                          ? 'bg-haero-yellow-50 text-haero-yellow-600 font-semibold'
                          : 'text-haero-gray-700 hover:bg-haero-yellow-50 hover:text-haero-yellow-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {mainLinks.slice(1).map((link) => (
              <a
                key={link.href}
                href={isSubPage ? '/' + link.href : link.href}
                onClick={() => handleAnchorClick(link.href)}
                className="text-haero-gray-700 hover:text-haero-yellow-600 transition-colors font-semibold text-sm border-b-2 border-transparent hover:border-haero-yellow"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-haero-dark"
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
          <div className="md:hidden pb-4 border-t border-haero-gray-300 bg-haero-cream rounded-b-2xl">
            <a
              href={isSubPage ? '/#despre' : '#despre'}
              className="block py-3 px-4 text-haero-gray-700 hover:bg-haero-yellow-50 hover:text-haero-yellow-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Despre Noi
            </a>

            {/* Mobile AEE section */}
            <div className="border-l-2 border-haero-yellow ml-4">
              <a
                href={isSubPage ? '/#hae' : '#hae'}
                className="block py-3 px-4 text-haero-gray-700 hover:bg-haero-yellow-50 hover:text-haero-yellow-600 font-semibold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Ce este AEE?
              </a>
              {aeeSubLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block py-2 px-6 text-sm transition-colors ${
                    location.pathname === link.to
                      ? 'text-haero-yellow-600 font-semibold bg-haero-yellow-50'
                      : 'text-haero-gray-500 hover:bg-haero-yellow-50 hover:text-haero-yellow-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {mainLinks.slice(1).map((link) => (
              <a
                key={link.href}
                href={isSubPage ? '/' + link.href : link.href}
                className="block py-3 px-4 text-haero-gray-700 hover:bg-haero-yellow-50 hover:text-haero-yellow-600 font-medium transition-colors"
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
