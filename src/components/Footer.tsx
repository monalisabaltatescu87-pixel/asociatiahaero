import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-haero-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={40} />
              <div>
                <span className="text-lg font-bold">HAERO</span>
                <p className="text-haero-gray-500 text-xs">Asociația pentru Angioedem Ereditar</p>
              </div>
            </div>
            <p className="text-haero-gray-500 text-sm">
              Împreună pentru creșterea calității vieții pacienților cu
              angioedem ereditar din România.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-haero-yellow">Linkuri Utile</h3>
            <ul className="space-y-2 text-haero-gray-500 text-sm">
              <li><Link to="/despre" className="hover:text-haero-yellow transition-colors">Despre Noi</Link></li>
              <li><Link to="/misiune" className="hover:text-haero-yellow transition-colors">Misiunea Noastră</Link></li>
              <li><Link to="/comunitate" className="hover:text-haero-yellow transition-colors">Comunitate</Link></li>
              <li><Link to="/contact" className="hover:text-haero-yellow transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-haero-yellow">Despre AEE</h3>
            <ul className="space-y-2 text-haero-gray-500 text-sm">
              <li><Link to="/ce-este-aee" className="hover:text-haero-yellow transition-colors">Care sunt simptomele AEE?</Link></li>
              <li><Link to="/care-sunt-declansatorii-aee" className="hover:text-haero-yellow transition-colors">Factori declanșatori</Link></li>
              <li><Link to="/ce-cauzeaza-aee" className="hover:text-haero-yellow transition-colors">Principalele cauze</Link></li>
              <li><Link to="/cum-tratam-aee" className="hover:text-haero-yellow transition-colors">Tratamente disponibile</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-haero-yellow">Resurse</h3>
            <ul className="space-y-2 text-haero-gray-500 text-sm">
              <li><a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="hover:text-haero-yellow transition-colors">HAEi (HAE International)</a></li>
              <li><a href="https://www.angioedem.ro" target="_blank" rel="noopener noreferrer" className="hover:text-haero-yellow transition-colors">Centrul de Expertiză AEE</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-haero-gray-700 pt-8 text-center text-haero-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Asociația HAERO. Toate drepturile rezervate.</p>
          <div className="mt-3 space-x-4">
            <Link to="/politica-confidentialitate" className="hover:text-haero-yellow transition-colors">Politica de Confidențialitate</Link>
            <span>|</span>
            <Link to="/termeni-si-conditii" className="hover:text-haero-yellow transition-colors">Termeni și Condiții</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
