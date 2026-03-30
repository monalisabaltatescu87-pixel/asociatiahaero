import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-haero-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={40} />
              <div>
                <span className="text-lg font-bold">HAEro</span>
                <p className="text-gray-400 text-xs">Asociația pentru Angioedem Ereditar</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Împreună pentru o viață mai bună pentru pacienții cu Angioedem Ereditar
              din România.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Linkuri Utile</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#despre" className="hover:text-white transition-colors">Despre Noi</a></li>
              <li><a href="#hae" className="hover:text-white transition-colors">Ce este HAE?</a></li>
              <li><a href="#misiune" className="hover:text-white transition-colors">Misiunea Noastră</a></li>
              <li><a href="#implica-te" className="hover:text-white transition-colors">Implică-te</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Resurse</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><span className="hover:text-white transition-colors cursor-pointer">HAEi (HAE International)</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Ghid Pacient</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Politica de Confidențialitate</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Asociația HAEro. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
