import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';

const HAETriggers: React.FC = () => {
  return (
    <><SEO title="Factori Declanșatori AEE" description="Descoperă factorii care pot declanșa crizele de angioedem ereditar: stres, traume, infecții, fluctuații hormonale și alții." path="/care-sunt-declansatorii-aee" /><div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-haero-yellow-50 via-haero-cream to-haero-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/ce-este-aee" className="text-haero-yellow-600 font-semibold text-sm hover:text-haero-yellow-700 transition-colors mb-4 inline-block">
              ← Înapoi la Ce este AEE
            </Link>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-haero-dark mb-4">
              Factori <span className="text-haero-yellow-600">declanșatori</span>
            </h1>
            <div className="w-20 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-haero-gray-500 max-w-3xl mx-auto leading-relaxed">
              Studiile sugerează că 50% dintre persoanele cu AEE raportează primele simptome până la vârsta de 10 ani, iar majoritatea oamenilor au experimentat simptome/primul atac înaintea vârstei de 18 ani.
            </p>
            <p className="text-lg text-haero-gray-500 max-w-3xl mx-auto leading-relaxed mt-4">
              Chiar dacă sunt excepții, simptomele AEE sunt de regulă ușoare la copiii mici, dar episoade au fost raportate chiar și la copii de un an. Frecvența atacurilor poate să crească la pubertate și adolescență.
            </p>
          </div>
        </div>
      </section>

      {/* Common Triggers */}
      <section className="py-16 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-haero-dark mb-8 text-center">Factorii declanșatori comuni ai AEE</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-yellow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-haero-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-haero-dark mb-2 text-lg">Anxietate</h3>
                  <p className="text-haero-gray-500 leading-relaxed">
                    Anxietatea este un factor declanșator frecvent raportat de persoanele cu AEE, putând contribui la apariția sau agravarea atacurilor.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-yellow-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-haero-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-haero-dark mb-2 text-lg">Stres</h3>
                  <p className="text-haero-gray-500 leading-relaxed">
                    Stresul emoțional și fizic este unul dintre cei mai comuni factori care pot declanșa episoade de angioedem ereditar.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-yellow-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-haero-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-haero-dark mb-2 text-lg">Traumatisme minore</h3>
                  <p className="text-haero-gray-500 leading-relaxed">
                    Traumatismele minore, inclusiv lovituri ușoare sau presiunea mecanică, pot declanșa episoade de umflare în zona afectată.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-red">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-haero-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-haero-dark mb-2 text-lg">Intervenții chirurgicale</h3>
                  <p className="text-haero-gray-500 leading-relaxed">
                    Intervențiile chirurgicale reprezintă un factor declanșator important, necesitând atenție specială și consultarea prealabilă a medicului specialist.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-blue">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-haero-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-haero-dark mb-2 text-lg">Boli și infecții</h3>
                  <p className="text-haero-gray-500 leading-relaxed">
                    Bolile precum răceala, gripa și alte infecții virale pot declanșa sau agrava episoadele de angioedem ereditar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Reported Triggers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-haero-dark mb-8 text-center">Alți factori raportați</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-gray-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-haero-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-haero-dark mb-2 text-lg">Expunerea la frig</h3>
                  <p className="text-haero-gray-500 leading-relaxed">
                    Temperaturile scăzute și expunerea la frig pot acționa ca factori declanșatori ai atacurilor de AEE.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-gray-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-haero-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-haero-dark mb-2 text-lg">Traumatisme mecanice</h3>
                  <p className="text-haero-gray-500 leading-relaxed">
                    Activități care provoacă traumatisme mecanice, cum ar fi grădinăritul, pot contribui la declanșarea episoadelor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hormones */}
      <section className="py-16 bg-haero-yellow-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-yellow-700">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-haero-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-haero-dark mb-3 text-xl">Hormoni</h3>
                <p className="text-haero-gray-500 leading-relaxed mb-4">
                  La femei, menstruația și sarcina pot afecta simptomele AEE. Unele femei raportează o creștere a numărului de atacuri în timpul perioadelor menstruale. Studiile relevă variații considerabile în frecvența atacurilor la femeile însărcinate.
                </p>
                <p className="text-haero-gray-500 leading-relaxed">
                  Utilizarea medicamentelor derivate din estrogen (contraceptive orale, terapie de substituție hormonală) este asociată cu creșterea frecvenței și severității atacurilor. Persoanele cu AEE ar trebui să consulte medicul curant AEE cu privire la opțiuni alternative de contracepție fără estrogen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACE Inhibitors */}
      <section className="py-16 bg-haero-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-haero-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-haero-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-haero-dark mb-3 text-xl">Inhibitorii ECA</h3>
                <p className="text-haero-gray-700 leading-relaxed">
                  Utilizați frecvent pentru tratarea hipertensiunii arteriale, inhibitorii ECA sunt cunoscuți pentru creșterea frecvenței și severității atacurilor de AEE și ar trebui evitați.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dental Procedures */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-haero-yellow-50 rounded-2xl p-8 border border-haero-yellow-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-haero-dark mb-3 text-xl">Proceduri dentare</h3>
                <p className="text-haero-gray-700 leading-relaxed">
                  Traumatismele bucale cauzate de procedurile dentare pot declanșa umflarea orală și pot crește riscul de umflare a gâtului/căilor respiratorii. Consultați medicul curant AEE înainte de a efectua proceduri dentare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-haero-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/ce-este-aee" className="text-haero-yellow-600 font-semibold hover:text-haero-yellow-700 transition-colors">
              ← Ce este AEE?
            </Link>
            <Link to="/ce-cauzeaza-aee" className="text-haero-yellow-600 font-semibold hover:text-haero-yellow-700 transition-colors sm:text-right">
              Ce cauzează AEE? →
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
            </a>.
          </p>
        </div>
      </section>
    </div>
  </>
  );
};

export default HAETriggers;
