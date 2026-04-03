import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';

const DiagnosticAEE: React.FC = () => {
  return (
    <><SEO title="Diagnosticarea AEE" description="Cum se diagnostichează angioedemul ereditar. Analize de sânge specifice și teste genetice pentru confirmarea AEE." path="/diagnosticarea-aee" /><div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-haero-yellow-50 via-haero-cream to-haero-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/ce-este-aee" className="text-haero-yellow-600 font-semibold text-sm hover:text-haero-yellow-700 transition-colors mb-4 inline-block">
              ← Despre AEE
            </Link>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-haero-dark mb-4">
              Cum se <span className="text-haero-yellow-600">diagnostichează</span> AEE
            </h1>
            <div className="w-20 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-haero-gray-500 max-w-3xl mx-auto leading-relaxed">
              Majoritatea cazurilor de angioedem sau umflare <strong>NU</strong> reprezintă AEE
              sau deficit de C1-inhibitor. Analiza de laborator a probelor de sânge sau
              a probelor genetice este necesară pentru a stabili diagnosticul de AEE.
            </p>
          </div>
        </div>
      </section>

      {/* Blood Tests Section */}
      <section className="py-16 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-haero-dark mb-4">
              Analize de <span className="text-haero-yellow-600">sânge</span> specifice
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto mb-4"></div>
            <p className="text-haero-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Există trei analize specifice de sânge utilizate pentru confirmarea
              angioedemului ereditar de Tip I sau II:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Test 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow">
              <div className="w-14 h-14 bg-haero-yellow-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-haero-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-haero-dark text-lg mb-3">
                C1-inhibitor cantitativ
              </h3>
              <p className="text-haero-gray-500 leading-relaxed mb-3">
                Măsoară <strong>cantitatea</strong> (nivelul antigenic) de proteină C1-inhibitor
                prezentă în sânge. Un nivel scăzut indică AEE Tip I.
              </p>
              <div className="bg-haero-yellow-50 rounded-lg px-4 py-2 text-sm text-haero-gray-700">
                Cunoscut și ca: C1-INH antigenic
              </div>
            </div>

            {/* Test 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow-600">
              <div className="w-14 h-14 bg-haero-yellow-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-haero-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-bold text-haero-dark text-lg mb-3">
                C1-inhibitor funcțional
              </h3>
              <p className="text-haero-gray-500 leading-relaxed mb-3">
                Evaluează cât de bine <strong>funcționează</strong> proteina C1-inhibitor.
                Esențial pentru detectarea AEE Tip II, unde cantitatea poate fi normală,
                dar funcția este deficitară.
              </p>
              <div className="bg-haero-yellow-50 rounded-lg px-4 py-2 text-sm text-haero-gray-700">
                Cunoscut și ca: C1-INH funcțional
              </div>
            </div>

            {/* Test 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow-700">
              <div className="w-14 h-14 bg-haero-yellow-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-haero-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-haero-dark text-lg mb-3">
                Complement C4
              </h3>
              <p className="text-haero-gray-500 leading-relaxed mb-3">
                Măsoară nivelul componentei C4 a sistemului complement. Un nivel de
                C4 <strong>scăzut</strong> este un indicator puternic care sugerează un posibil
                diagnostic de AEE.
              </p>
              <div className="bg-haero-yellow-50 rounded-lg px-4 py-2 text-sm text-haero-gray-700">
                Adesea scăzut în timpul și între crize
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HAE with Normal C1-Inhibitor */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-haero-dark mb-4">
              AEE cu C1-inhibitor <span className="text-haero-yellow-600">normal</span>
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto mb-4"></div>
          </div>

          <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
            La persoanele cu AEE cu C1-inhibitor normal, nivelurile și funcția
            C1-inhibitorului sunt normale. Cercetătorii au descoperit că, în unele cazuri,
            AEE cu C1-inhibitor normal este asociat cu mutații ale anumitor gene.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-yellow mb-8">
            <h3 className="font-bold text-haero-dark text-lg mb-4">
              Mutații genetice asociate
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-haero-yellow-600 shrink-0"></span>
                <span className="text-haero-gray-700 text-lg leading-relaxed">
                  Factorul XII (<strong>F12</strong>)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-haero-yellow-600 shrink-0"></span>
                <span className="text-haero-gray-700 text-lg leading-relaxed">
                  Plasminogenul (<strong>PLG</strong>)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-haero-yellow-600 shrink-0"></span>
                <span className="text-haero-gray-700 text-lg leading-relaxed">
                  Angiopoietina (<strong>ANGPT1</strong>)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-haero-yellow-600 shrink-0"></span>
                <span className="text-haero-gray-700 text-lg leading-relaxed">
                  Kininogenul (<strong>KNG1</strong>)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-haero-yellow-600 shrink-0"></span>
                <span className="text-haero-gray-700 text-lg leading-relaxed">
                  Myoferilina (<strong>MYOF</strong>)
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-2xl p-6 border border-red-200 mb-8">
            <p className="text-haero-gray-700 leading-relaxed">
              Cu toate acestea, în multe cazuri, <strong>cauza genetică a AEE cu
              C1-inhibitor normal este necunoscută</strong>. Unele laboratoare comerciale
              pot testa mutațiile Factorului XII, însă nu există teste de laborator de
              rutină pentru a confirma un diagnostic de AEE cu C1-inhibitor normal.
            </p>
          </div>

          <div className="bg-haero-yellow-50 rounded-2xl p-6 border border-haero-yellow-200">
            <p className="text-haero-gray-700 leading-relaxed font-medium">
              Absența unui istoric familial <strong>nu exclude</strong> diagnosticul de AEE.
              Până la <strong>25% din cazurile de AEE</strong> rezultă dintr-o mutație
              spontană (de novo) a genei C1-inhibitorului la concepție. De aceea, orice
              suspiciune clinică trebuie investigată prin analize de laborator specifice.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-haero-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/cum-tratam-aee" className="text-haero-yellow-600 font-semibold hover:text-haero-yellow-700 transition-colors">
              ← Tratamente disponibile
            </Link>
            <Link to="/aee-si-copiii" className="text-haero-yellow-600 font-semibold hover:text-haero-yellow-700 transition-colors sm:text-right">
              AEE și copiii →
            </Link>
          </div>
        </div>
      </section>

      {/* Source Attribution */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-haero-gray-500 text-sm">
            Informații bazate pe date de la{' '}
            <a href="https://haei.org/hae/diagnosing_hae" target="_blank" rel="noopener noreferrer" className="text-haero-yellow-600 hover:text-haero-yellow-700 underline">
              HAE International (HAEi)
            </a>.
          </p>
        </div>
      </section>
    </div>
  </>
  );
};

export default DiagnosticAEE;
