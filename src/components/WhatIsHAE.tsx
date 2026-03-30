import React from 'react';

const WhatIsHAE: React.FC = () => {
  return (
    <section id="hae" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-haero-dark mb-4">
            Ce este <span className="text-haero-blue">Angioedermul Ereditar</span>?
          </h2>
          <div className="w-20 h-1 bg-haero-blue mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              <strong>Angioedermul Ereditar (AEE)</strong> este o boală genetică rară,
              cu potențial letal, transmisă autozomal dominant — sunt 50% șanse ca
              părintele purtător să transmită boala copiilor — care se manifestă prin
              episoade recurente de angioedem localizat în diverse regiuni anatomice.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Denumirea de „ereditar" se datorează faptului că mutația genetică care
              duce la apariția bolii este transmisă din generație în generație. Totuși,
              25% din cazuri sunt reprezentate de pacienți care au avut o mutație spontană
              a genei inhibitorului C1 la concepție — absența istoricului familial nu
              exclude diagnosticul.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Incidența este de <strong>1 din 10.000 până la 1 din 50.000</strong> de
              persoane. Cel mai frecvent, primele episoade apar în copilărie sau
              adolescență și continuă să se manifeste cu o frecvență variabilă pe
              parcursul întregii vieți.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-haero-red">
              <h3 className="font-bold text-haero-dark mb-2">Simptome</h3>
              <p className="text-gray-600">
                Zonele cele mai frecvent implicate sunt extremitățile (mâinile, picioarele,
                regiunea genitală), fața și gâtul (buzele, pleoapele, limba, laringele —
                forma cea mai gravă datorită posibilei evoluții spre asfixie), precum și
                abdomenul (colică abdominală cu greață, vărsături, diaree, dureri intense).
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-haero-yellow">
              <h3 className="font-bold text-haero-dark mb-2">Diagnostic</h3>
              <p className="text-gray-600">
                Certitudinea diagnosticului vine adesea după ani în care vizitele la medic
                au fost nenumărate. Atacurile abdominale pot fi confundate cu alte patologii
                și pot duce la intervenții chirurgicale inutile. Este important să informați
                medicul despre istoricul familial.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-haero-blue">
              <h3 className="font-bold text-haero-dark mb-2">Tratament</h3>
              <p className="text-gray-600">
                Există tratamente moderne care pot preveni și trata crizele de angioedem.
                HAERO militează pentru accesul fiecărui pacient la tratament specific,
                individualizat, și pentru îmbunătățirea managementului bolii, în special
                în zona de profilaxie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHAE;
