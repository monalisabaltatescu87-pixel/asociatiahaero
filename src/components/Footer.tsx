import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-neutral-800 text-white overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 pattern-dots opacity-[0.03]" />

      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-white rounded-xl p-1.5 shadow-raised">
                <Logo size={34} />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight">HAERO</span>
                <p className="text-neutral-500 text-[11px] tracking-wide">
                  Asociația pentru Angioedem Ereditar
                </p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Împreună pentru creșterea calității vieții pacienților cu
              angioedem ereditar din România.
            </p>
          </div>

          {/* Links column */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-primary-400 mb-4">
              Linkuri Utile
            </h3>
            <ul className="space-y-2.5">
              {[
                { to: '/despre', label: 'Despre Noi' },
                { to: '/misiune', label: 'Misiunea Noastră' },
                { to: '/comunitate', label: 'Comunitate' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-neutral-400 text-sm hover:text-primary-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AEE column */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-primary-400 mb-4">
              Despre AEE
            </h3>
            <ul className="space-y-2.5">
              {[
                { to: '/ce-este-aee', label: 'Care sunt simptomele AEE?' },
                { to: '/care-sunt-declansatorii-aee', label: 'Factori declanșatori' },
                { to: '/ce-cauzeaza-aee', label: 'Principalele cauze' },
                { to: '/cum-tratam-aee', label: 'Tratamente disponibile' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-neutral-400 text-sm hover:text-primary-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-primary-400 mb-4">
              Resurse
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://haei.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 text-sm hover:text-primary-300 transition-colors duration-200 inline-flex items-center gap-1"
                >
                  HAEi (HAE International)
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.angioedem.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 text-sm hover:text-primary-300 transition-colors duration-200 inline-flex items-center gap-1"
                >
                  Centrul de Expertiză AEE
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Asociația HAERO. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/politica-confidentialitate"
              className="text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
            >
              Politica de Confidențialitate
            </Link>
            <span className="text-neutral-700">|</span>
            <Link
              to="/termeni-si-conditii"
              className="text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
            >
              Termeni și Condiții
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
