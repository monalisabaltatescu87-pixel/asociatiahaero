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
              ← Ce este AEE?
            </Link>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-haero-dark mb-4">
              Factori <span className="text-haero-yellow-600">declanșatori</span>
            </h1>
            <div className="w-20 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-haero-gray-500 max-w-3xl mx-auto leading-relaxed">
              Episoadele de angioedem ereditar pot fi declanșate de o varietate de factori,
              deși uneori apar și fără un motiv aparent.
            </p>
          </div>
        </div>
      </section>

      {/* Triggers Grid */}
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
                  <h3 className="font-bold text-haero-dark mb-2 text-lg">Stresul emoțional</h3>
                  <p className="text-haero-gray-500 leading-relaxed">
                    Stresul psihologic și emoțional este unul dintre cei mai frecvenți factori
                    declanșatori raportați de pacienți. Anxietatea, supărarea sau presiunea
                    emoțională pot precipita un episod.
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
                  <h3 className="font-bold text-haero-dark mb-2 text-lg">Traumatisme fizice</h3>
                  <p className="text-haero-gray-500 leading-relaxed">
                    Lovituri, presiune locală, proceduri stomatologice sau chirurgicale pot
                    declanșa episoade de angioedem în zona afectată sau în alte regiuni ale corpului.
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
                    Fluctuațiile hormonale, cum ar fi cele din timpul ciclului menstrual,
                    sarcinii sau utilizării contraceptivelor orale cu estrogen, pot influența
                    frecvența și severitatea episoadelor.
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
                    Infecțiile bacteriene sau virale, inclusiv răcelile comune, pot activa
                    sistemul complementului și pot declanșa episoade de angioedem.
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
                  <h3 className="font-bold text-haero-dark mb-2 text-lg">Medicamente</h3>
                  <p className="text-haero-gray-500 leading-relaxed">
                    Anumite medicamente, în special inhibitorii enzimei de conversie a
                    angiotensinei (IECA) și estrogenul, pot agrava sau declanșa episoade
                    de AEE și trebuie evitate.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-gray-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-haero-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-haero-dark mb-2 text-lg">Oboseala și efortul fizic</h3>
                  <p className="text-haero-gray-500 leading-relaxed">
                    Oboseala excesivă, efortul fizic intens sau lipsa somnului pot contribui
                    la apariția episoadelor de angioedem, mai ales în perioade de vulnerabilitate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-16 bg-white">
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
      <section className="py-12 bg-haero-cream">
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
    </div>
  );
};

export default DeclansatoriAEE;
