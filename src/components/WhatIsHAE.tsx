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
              <strong>Angioedermul Ereditar (HAE)</strong> este o boală genetică rară,
              caracterizată prin episoade recurente de umflături severe (edem) care pot
              afecta diverse părți ale corpului, inclusiv fața, extremitățile,
              tractul gastrointestinal și căile respiratorii.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              HAE este cauzat de o deficiență sau disfuncție a proteinei C1-inhibitor,
              ceea ce duce la producerea excesivă de bradikinină, o substanță care
              provoacă umflături și durere.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Deși este o boală rară, afectând aproximativ <strong>1 din 50.000 de
              persoane</strong>, impactul asupra calității vieții poate fi semnificativ.
              Cu tratament adecvat și suport, pacienții pot duce o viață normală.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-haero-red">
              <h3 className="font-bold text-haero-dark mb-2">Simptome</h3>
              <p className="text-gray-600">
                Umflături dureroase ale pielii, dureri abdominale severe,
                și în cazuri grave, umflarea căilor respiratorii.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-haero-yellow">
              <h3 className="font-bold text-haero-dark mb-2">Diagnostic</h3>
              <p className="text-gray-600">
                Teste de sânge pentru nivelul și funcția C1-inhibitorului,
                istoricul familial și evaluarea clinică.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-haero-blue">
              <h3 className="font-bold text-haero-dark mb-2">Tratament</h3>
              <p className="text-gray-600">
                Există tratamente moderne care pot preveni și trata crizele de angioedem,
                îmbunătățind semnificativ calitatea vieții.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHAE;
