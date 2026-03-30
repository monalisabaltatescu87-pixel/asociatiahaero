import React from 'react';
import { Link } from 'react-router-dom';

const DeclansatoriAEE: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-haero-yellow-50 via-haero-cream to-haero-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/ce-este-aee" className="text-haero-yellow-600 font-semibold text-sm hover:text-haero-yellow-700 transition-colors mb-4 inline-block">
              ← Care sunt simptomele AEE?
            </Link>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-haero-dark mb-4">
              Factori <span className="text-haero-yellow-600">declanșatori</span>
            </h1>
            <div className="w-20 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-haero-gray-500 max-w-3xl mx-auto leading-relaxed">
              Majoritatea episoadelor de AEE apar spontan. Cu toate acestea, există
              o serie de factori cunoscuți care pot declanșa sau agrava crizele.
            </p>
          </div>
        </div>
      </section>

      {/* Main Triggers */}
      <section className="py-16 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-yellow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-haero-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-haero-dark mb-2 text-lg">Stresul fizic și emoțional</h3>
                  <p className="text-haero-gray-500 leading-relaxed">
                    Infecțiile, leziunile, intervențiile chirurgicale sau stresul pot duce
                    la consumul inhibitorului C1 și pot determina creșterea nivelului de
                    bradikinină, cu formarea ulterioară de edem. Stresul emoțional poate
                    agrava frecvența și severitatea atacurilor.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-yellow-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-haero-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-haero-dark mb-2 text-lg">Proceduri stomatologice și chirurgicale</h3>
                  <p className="text-haero-gray-500 leading-relaxed">
                    Procedurile stomatologice sau intervențiile chirurgicale (inclusiv
                    amigdalectomia) sunt factori declanșatori deosebit de critici,
                    deoarece pot cauza umflături la nivelul gâtului sau căilor respiratorii.
                    Se recomandă profilaxia pe termen scurt înaintea acestor proceduri.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-yellow-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-haero-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-haero-dark mb-2 text-lg">Modificări hormonale</h3>
                  <p className="text-haero-gray-500 leading-relaxed">
                    La femei, menstruația și sarcina pot afecta simptomele AEE. Unele
                    femei raportează o creștere a numărului de atacuri în timpul perioadei
                    menstruale. Atacurile se corelează adesea cu expunerea la estrogen,
                    posibil prin creșterea producției de bradikinină.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-red">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-haero-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-haero-dark mb-2 text-lg">Infecții</h3>
                  <p className="text-haero-gray-500 leading-relaxed">
                    Infecțiile bacteriene sau virale, inclusiv răcelile comune și bolile
                    virale, pot duce la consumul inhibitorului C1 și pot declanșa episoade
                    de angioedem prin activarea cascadei complementului.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-blue">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-haero-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-haero-dark mb-2 text-lg">Traumatisme fizice</h3>
                  <p className="text-haero-gray-500 leading-relaxed">
                    Traumatismele minore, presiunea locală, lovituri sau leziuni pot
                    declanșa episoade de angioedem în zona afectată. Și expunerea la
                    frig poate fi un factor declanșator.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-gray-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-haero-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-haero-dark mb-2 text-lg">Pubertatea și adolescența</h3>
                  <p className="text-haero-gray-500 leading-relaxed">
                    Frecvența și severitatea atacurilor de AEE pot crește în timpul
                    pubertății și adolescenței, pe măsură ce organismul trece prin
                    schimbări hormonale semnificative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medications to Avoid */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <h3 className="font-bold text-haero-dark mb-4 text-xl">Medicamente de evitat</h3>
            <p className="text-haero-gray-700 leading-relaxed mb-4">
              Anumite medicamente pot crește frecvența și severitatea atacurilor de AEE
              și trebuie evitate:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-haero-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p className="text-haero-gray-700">
                  <strong>Inhibitori ai enzimei de conversie a angiotensinei (IECA)</strong> —
                  utilizați pentru tratamentul hipertensiunii arteriale, pot crește
                  frecvența și severitatea atacurilor de AEE.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-haero-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p className="text-haero-gray-700">
                  <strong>Medicamente pe bază de estrogen</strong> — contraceptive orale
                  și terapia de substituție hormonală sunt asociate cu creșterea
                  frecvenței și severității atacurilor.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-haero-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p className="text-haero-gray-700">
                  <strong>Tamoxifenul</strong> — trebuie evitat la pacienții cu AEE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-16 bg-haero-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-haero-yellow-50 rounded-2xl p-8 border border-haero-yellow-200">
            <h3 className="font-bold text-haero-dark mb-4 text-lg">Important de știut</h3>
            <p className="text-haero-gray-700 leading-relaxed mb-4">
              Mulți pacienți raportează că episoadele pot apărea și fără un factor declanșator
              identificabil. Ținerea unui jurnal al episoadelor poate ajuta la identificarea
              tiparelor individuale și la un management mai bun al bolii.
            </p>
            <p className="text-haero-gray-700 leading-relaxed">
              Discutați cu medicul dumneavoastră specialist despre factorii declanșatori
              personali și despre strategiile de prevenire adaptate situației dumneavoastră.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/ce-este-aee" className="text-haero-yellow-600 font-semibold hover:text-haero-yellow-700 transition-colors">
              ← Care sunt simptomele AEE?
            </Link>
            <Link to="/ce-cauzeaza-aee" className="text-haero-yellow-600 font-semibold hover:text-haero-yellow-700 transition-colors sm:text-right">
              Principalele cauze →
            </Link>
          </div>
        </div>
      </section>

      {/* Source Attribution */}
      <section className="py-8 bg-haero-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-haero-gray-500 text-sm">
            Informații bazate pe date de la{' '}
            <a href="https://haei.org/what-is-hae/attack-triggers/" target="_blank" rel="noopener noreferrer" className="text-haero-yellow-600 hover:text-haero-yellow-700 underline">
              HAE International (HAEi)
            </a>
            {' și '}
            <a href="https://www.merckmanuals.com/professional/immunology-allergic-disorders/allergic-autoimmune-and-other-hypersensitivity-disorders/hereditary-and-acquired-c1-inhibitor-deficiency-or-dysfunction" target="_blank" rel="noopener noreferrer" className="text-haero-yellow-600 hover:text-haero-yellow-700 underline">
              Merck Manual
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DeclansatoriAEE;
