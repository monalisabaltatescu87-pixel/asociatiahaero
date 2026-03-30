import React from 'react';
import { Link } from 'react-router-dom';

const TratamenteAEE: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-haero-yellow-50 via-haero-cream to-haero-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/ce-este-aee" className="text-haero-yellow-600 font-semibold text-sm hover:text-haero-yellow-700 transition-colors mb-4 inline-block">
              ← Ce este AEE?
            </Link>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-haero-dark mb-4">
              Tratamente <span className="text-haero-yellow-600">disponibile</span>
            </h1>
            <div className="w-20 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-haero-gray-500 max-w-3xl mx-auto leading-relaxed">
              Există tratamente moderne care pot preveni și trata crizele de angioedem ereditar,
              îmbunătățind semnificativ calitatea vieții pacienților.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="py-16 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-haero-dark mb-4">
              Categorii de <span className="text-haero-yellow-600">tratament</span>
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto"></div>
          </div>

          <div className="space-y-8">
            {/* Acute Treatment */}
            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-red">
              <h3 className="text-xl font-bold text-haero-dark mb-4">
                Tratamentul la cerere (acut)
              </h3>
              <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
                Tratamentul acut se administrează cât mai devreme posibil la debutul unui
                episod de angioedem, pentru a reduce severitatea și durata acestuia. Este
                esențial ca pacienții să aibă mereu la dispoziție medicația de urgență.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Concentrat de C1-INH derivat din plasmă</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Înlocuiește proteina lipsă sau disfuncțională prin administrare intravenoasă.
                    Acționează prin restabilirea nivelului de inhibitor C1 esterază.
                  </p>
                </div>
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Icatibant</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Antagonist al receptorului B2 al bradikininei, administrat subcutanat.
                    Blochează acțiunea bradikininei, mediatorul principal al edemului.
                  </p>
                </div>
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">C1-INH recombinant</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Varianta recombinantă a inhibitorului C1, administrare intravenoasă.
                    Oferă o alternativă la produsele derivate din plasmă.
                  </p>
                </div>
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Ecallantide</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Inhibitor al kalicreinei plasmatice, administrat subcutanat.
                    Reduce producția de bradikinină prin inhibarea enzimei care o generează.
                  </p>
                </div>
              </div>
            </div>

            {/* Prophylaxis */}
            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-yellow">
              <h3 className="text-xl font-bold text-haero-dark mb-4">
                Profilaxia pe termen lung (LTP)
              </h3>
              <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
                Tratamentul profilactic pe termen lung are scopul de a reduce frecvența,
                severitatea și impactul episoadelor de angioedem. Este recomandat pacienților
                cu episoade frecvente sau severe.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Lanadelumab</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Anticorp monoclonal care inhibă kalikreina plasmatică, administrat
                    subcutanat la fiecare 2 sau 4 săptămâni. Reduce semnificativ numărul
                    de episoade.
                  </p>
                </div>
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Berotralstat</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Inhibitor oral al kalicreinei plasmatice, administrat zilnic sub formă
                    de capsulă. Oferă o opțiune convenabilă de profilaxie fără injecții.
                  </p>
                </div>
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Concentrat de C1-INH subcutanat</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Administrare subcutanată de două ori pe săptămână pentru menținerea
                    unui nivel constant de inhibitor C1 esterază în organism.
                  </p>
                </div>
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Dusirisiran / Garadacimab</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Terapii de nouă generație aflate în diferite stadii de aprobare, care
                    promit administrare mai rară și eficacitate ridicată.
                  </p>
                </div>
              </div>
            </div>

            {/* Short-term Prophylaxis */}
            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-blue">
              <h3 className="text-xl font-bold text-haero-dark mb-4">
                Profilaxia pe termen scurt (STP)
              </h3>
              <p className="text-haero-gray-700 text-lg leading-relaxed">
                Se administrează înainte de proceduri medicale sau stomatologice care ar
                putea declanșa un episod (de exemplu, intervenții chirurgicale, proceduri
                dentare). De obicei se utilizează concentrat de C1-INH administrat cu
                1-6 ore înainte de procedură.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HAERO Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-haero-dark mb-6">
            Misiunea <span className="text-haero-yellow-600">HAERO</span>
          </h2>
          <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
            HAERO militează pentru accesul fiecărui pacient la tratament specific,
            individualizat, și pentru îmbunătățirea managementului bolii, în special
            în zona de profilaxie pe termen lung.
          </p>
          <p className="text-haero-gray-700 text-lg mb-8 leading-relaxed">
            Fiecare pacient cu AEE merită acces la tratamente moderne care îi permit
            să ducă o viață normală, fără teama episoadelor imprevizibile.
          </p>
          <Link
            to="/contact"
            className="bg-haero-yellow text-haero-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-haero-yellow-600 transition-all duration-200 shadow-lifted hover:shadow-floating hover:scale-[1.02] tracking-wide inline-block"
          >
            Contactează-ne
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/ce-cauzeaza-aee" className="text-haero-yellow-600 font-semibold hover:text-haero-yellow-700 transition-colors">
              ← Principalele cauze
            </Link>
            <Link to="/ce-este-aee" className="text-haero-yellow-600 font-semibold hover:text-haero-yellow-700 transition-colors sm:text-right">
              Înapoi la Ce este AEE? →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TratamenteAEE;
