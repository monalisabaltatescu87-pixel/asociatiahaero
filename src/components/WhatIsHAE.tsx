import React from 'react';
import { Link } from 'react-router-dom';

const WhatIsHAE: React.FC = () => {
  return (
    <section id="hae" className="py-20 bg-haero-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-haero-dark mb-4">
            Ce este <span className="text-haero-yellow-600">Angioedermul Ereditar</span>?
          </h2>
          <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
              <strong>Angioedermul Ereditar (AEE)</strong> este o boală genetică rară,
              cu potențial letal, transmisă autozomal dominant — sunt 50% șanse ca
              părintele purtător să transmită boala copiilor — care se manifestă prin
              episoade recurente de angioedem localizat în diverse regiuni anatomice.
            </p>
            <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
              Denumirea de „ereditar" se datorează faptului că mutația genetică care
              duce la apariția bolii este transmisă din generație în generație. Totuși,
              25% din cazuri sunt reprezentate de pacienți care au avut o mutație spontană
              a genei inhibitorului C1 la concepție — absența istoricului familial nu
              exclude diagnosticul.
            </p>
            <p className="text-haero-gray-700 text-lg mb-8 leading-relaxed">
              Incidența este de <strong>1 din 10.000 până la 1 din 50.000</strong> de
              persoane. Cel mai frecvent, primele episoade apar în copilărie sau
              adolescență și continuă să se manifeste cu o frecvență variabilă pe
              parcursul întregii vieți.
            </p>
            <Link
              to="/ce-este-aee"
              className="bg-haero-yellow text-haero-dark px-6 py-3 rounded-full font-bold hover:bg-haero-yellow-600 transition-all duration-200 shadow-lifted hover:shadow-floating hover:scale-[1.02] inline-block"
            >
              Află mai multe despre AEE →
            </Link>
          </div>

          <div className="space-y-6">
            <Link to="/ce-este-aee" className="bg-white rounded-2xl p-6 shadow-raised border-l-4 border-haero-yellow block hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="font-bold text-haero-dark mb-2">Simptome</h3>
              <p className="text-haero-gray-500">
                Zonele cele mai frecvent implicate sunt extremitățile (mâinile, picioarele,
                regiunea genitală), fața și gâtul (buzele, pleoapele, limba, laringele —
                forma cea mai gravă datorită posibilei evoluții spre asfixie), precum și
                abdomenul (colică abdominală cu greață, vărsături, diaree, dureri intense).
              </p>
              <span className="text-haero-yellow-600 font-semibold text-sm mt-3 inline-block">Citește mai mult →</span>
            </Link>
            <Link to="/care-sunt-declansatorii-aee" className="bg-white rounded-2xl p-6 shadow-raised border-l-4 border-haero-yellow-600 block hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="font-bold text-haero-dark mb-2">Factori declanșatori</h3>
              <p className="text-haero-gray-500">
                Stresul, traumatismele fizice, infecțiile, modificările hormonale și anumite
                medicamente pot declanșa episoade de angioedem ereditar.
              </p>
              <span className="text-haero-yellow-600 font-semibold text-sm mt-3 inline-block">Citește mai mult →</span>
            </Link>
            <Link to="/ce-cauzeaza-aee" className="bg-white rounded-2xl p-6 shadow-raised border-l-4 border-haero-yellow-700 block hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="font-bold text-haero-dark mb-2">Principalele cauze</h3>
              <p className="text-haero-gray-500">
                AEE este cauzat de mutații genetice care afectează inhibitorul C1 esterază,
                ducând la producția excesivă de bradikinină și apariția edemului.
              </p>
              <span className="text-haero-yellow-600 font-semibold text-sm mt-3 inline-block">Citește mai mult →</span>
            </Link>
            <Link to="/cum-tratam-aee" className="bg-white rounded-2xl p-6 shadow-raised border-l-4 border-haero-red block hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="font-bold text-haero-dark mb-2">Tratament</h3>
              <p className="text-haero-gray-500">
                Există tratamente moderne care pot preveni și trata crizele de angioedem.
                HAERO militează pentru accesul fiecărui pacient la tratament specific,
                individualizat.
              </p>
              <span className="text-haero-yellow-600 font-semibold text-sm mt-3 inline-block">Citește mai mult →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHAE;
