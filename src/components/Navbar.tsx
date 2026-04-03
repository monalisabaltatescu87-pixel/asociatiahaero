import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { ChevronDown, X, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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
    { to: '/despre', label: 'Despre Noi' },
    { to: '/misiune', label: 'Misiunea Noastră' },
    { to: '/comunitate', label: 'Comunitate' },
    { to: '/contact', label: 'Contact' },
  ];

  const aeeSubLinks = [
    { to: '/ce-este-aee', label: 'Ce este AEE?' },
    { to: '/ce-cauzeaza-aee', label: 'Tipurile și cauzele AEE' },
    { to: '/care-sunt-declansatorii-aee', label: 'Factori declanșatori' },
    { to: '/diagnosticarea-aee', label: 'Diagnosticarea AEE' },
    { to: '/cum-tratam-aee', label: 'Tratamente disponibile' },
    { to: '/aee-si-copiii', label: 'AEE și copiii' },
    { to: '/femei-si-sarcina', label: 'Femei și sarcină' },
    { to: '/calatorii', label: 'Călătorii cu AEE' },
    { to: '/despre-haei', label: 'Despre HAEi' },
  ];

  const isAeePage = aeeSubLinks.map(l => l.to).includes(location.pathname);

  const linkBase = 'relative text-sm font-semibold transition-colors duration-200 py-1';
  const linkActive = 'text-primary-500';
  const linkInactive = 'text-neutral-600 hover:text-primary-500';

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lifted'
          : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <Logo size={42} />
            <div className="hidden sm:block">
              <span className="text-lg font-extrabold text-neutral-800 tracking-tight">
                HAERO
              </span>
              <p className="text-[11px] text-neutral-500 -mt-0.5 tracking-wide">
                Asociația pentru Angioedem Ereditar
              </p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            <Link
              to="/despre"
              className={`${linkBase} ${
                location.pathname === '/despre' ? linkActive : linkInactive
              }`}
            >
              Despre Noi
              {location.pathname === '/despre' && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-400 rounded-full" />
              )}
            </Link>

            {/* AEE Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`${linkBase} flex items-center gap-1 ${
                  isAeePage ? linkActive : linkInactive
                }`}
              >
                Ce este AEE?
                <ChevronDown
                  size={14}
                  strokeWidth={2.5}
                  className={`transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                />
                {isAeePage && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-400 rounded-full" />
                )}
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-floating border border-neutral-200 py-2 z-50 animate-scale-in origin-top">
                  <div className="px-4 py-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-primary-500">
                      Informații despre AEE
                    </span>
                  </div>
                  {aeeSubLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block px-4 py-2.5 text-sm transition-all duration-150 rounded-lg mx-2 ${
                        location.pathname === link.to
                          ? 'bg-primary-50 text-primary-600 font-semibold'
                          : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-800'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {mainLinks.slice(1).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`${linkBase} ${
                  location.pathname === link.to ? linkActive : linkInactive
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-400 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-neutral-700 hover:text-neutral-900 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-5 pt-2 border-t border-neutral-200 bg-white rounded-b-2xl animate-fade-in">
            <Link
              to="/despre"
              className={`block py-3 px-4 font-medium rounded-xl mx-2 transition-colors ${
                location.pathname === '/despre'
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-neutral-600 hover:bg-neutral-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Despre Noi
            </Link>

            {/* Mobile AEE section */}
            <div className="ml-4 mt-2 mb-2 border-l-2 border-accent-300 pl-2">
              <p className="py-2 px-3 text-neutral-700 font-bold text-sm uppercase tracking-wider">
                Ce este AEE?
              </p>
              {aeeSubLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block py-2 px-3 text-sm rounded-lg transition-colors ${
                    location.pathname === link.to
                      ? 'text-primary-600 font-semibold bg-primary-50'
                      : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {mainLinks.slice(1).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-3 px-4 font-medium rounded-xl mx-2 transition-colors ${
                  location.pathname === link.to
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
