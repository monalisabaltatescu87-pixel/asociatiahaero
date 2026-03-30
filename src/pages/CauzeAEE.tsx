import React from 'react';
import { Link } from 'react-router-dom';

const CauzeAEE: React.FC = () => {
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
              Principalele <span className="text-haero-yellow-600">cauze</span>
            </h1>
            <div className="w-20 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-haero-gray-500 max-w-3xl mx-auto leading-relaxed">
              Angioedermul Ereditar este cauzat de o mutație genetică care afectează
              producția sau funcția inhibitorului C1 esterază.
            </p>
          </div>
        </div>
      </section>

      {/* Genetic Cause */}
      <section className="py-16 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-haero-dark mb-6">
                Cauza <span className="text-haero-yellow-600">genetică</span>
              </h2>
              <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
                AEE este cauzat de mutații în gena <strong>SERPING1</strong>, care codifică
                proteina inhibitorul C1 esterază (C1-INH). Această proteină joacă un rol
                esențial în reglarea mai multor căi biologice, inclusiv sistemul complementului,
                sistemul de coagulare și sistemul kininelor.
              </p>
              <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
                Boala este transmisă <strong>autozomal dominant</strong>, ceea ce înseamnă
                că este suficientă o singură copie a genei mutante pentru a dezvolta boala.
                Un părinte afectat are 50% șanse de a transmite mutația fiecărui copil.
              </p>
              <p className="text-haero-gray-700 text-lg leading-relaxed">
                Aproximativ <strong>25% din cazuri</strong> apar prin mutații spontane (de novo),
                fără istoric familial. Absența cazurilor de AEE în familie nu exclude diagnosticul.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow">
                <h3 className="font-bold text-haero-dark mb-3 text-lg">Tipul I — Deficit cantitativ</h3>
                <p className="text-haero-gray-500 leading-relaxed mb-3">
                  Reprezintă aproximativ <strong>85% din cazuri</strong>. Se caracterizează
                  prin niveluri scăzute de inhibitor C1 esterază în sânge. Organismul produce
                  o cantitate insuficientă de proteină.
                </p>
                <div className="bg-haero-yellow-50 rounded-lg px-4 py-2 text-sm text-haero-gray-700">
                  Nivel C1-INH: scăzut | Funcție C1-INH: scăzută
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow-600">
                <h3 className="font-bold text-haero-dark mb-3 text-lg">Tipul II — Deficit funcțional</h3>
                <p className="text-haero-gray-500 leading-relaxed mb-3">
                  Reprezintă aproximativ <strong>15% din cazuri</strong>. Nivelurile de
                  inhibitor C1 sunt normale sau chiar crescute, dar proteina nu funcționează
                  corect.
                </p>
                <div className="bg-haero-yellow-50 rounded-lg px-4 py-2 text-sm text-haero-gray-700">
                  Nivel C1-INH: normal/crescut | Funcție C1-INH: scăzută
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow-700">
                <h3 className="font-bold text-haero-dark mb-3 text-lg">Tipul III — Cu C1-INH normal</h3>
                <p className="text-haero-gray-500 leading-relaxed mb-3">
                  Formă rară, descrisă mai recent. Nivelurile și funcția C1-INH sunt normale.
                  Poate fi cauzat de mutații ale genei factorului XII sau alte gene.
                  Predomină la femei.
                </p>
                <div className="bg-haero-yellow-50 rounded-lg px-4 py-2 text-sm text-haero-gray-700">
                  Nivel C1-INH: normal | Funcție C1-INH: normală
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanism */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-haero-dark mb-4">
              Mecanismul <span className="text-haero-yellow-600">bolii</span>
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto"></div>
          </div>
          <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
            Când inhibitorul C1 esterază lipsește sau nu funcționează corect, sistemul
            kininelor devine hiperactivat. Acest lucru duce la producția excesivă de
            <strong> bradikinină</strong> — un mediator care crește permeabilitatea vasculară.
          </p>
          <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
            Bradikinina cauzează dilatarea vaselor de sânge și scurgerea de lichid în
            țesuturile din jur, provocând umflăturile (edemul) caracteristice bolii.
            Spre deosebire de reacțiile alergice, acest proces <strong>nu implică
            histamina</strong>, motiv pentru care antihistaminicele, corticosteroizii
            și adrenalina nu sunt eficiente în tratamentul AEE.
          </p>
          <div className="bg-haero-yellow-50 rounded-2xl p-6 border border-haero-yellow-200">
            <p className="text-haero-gray-700 leading-relaxed font-medium">
              Această diferență esențială față de angioedermul alergic subliniază importanța
              diagnosticului corect și a tratamentului specific cu medicamente care vizează
              calea bradikininei.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/care-sunt-declansatorii-aee" className="text-haero-yellow-600 font-semibold hover:text-haero-yellow-700 transition-colors">
              ← Factori declanșatori
            </Link>
            <Link to="/cum-tratam-aee" className="text-haero-yellow-600 font-semibold hover:text-haero-yellow-700 transition-colors sm:text-right">
              Tratamente disponibile →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CauzeAEE;
