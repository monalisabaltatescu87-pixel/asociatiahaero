import React from 'react';
import { Link } from 'react-router-dom';

const Comunitate: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-haero-dark mb-4">
              Comunitate
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-haero-gray-500 max-w-3xl mx-auto text-lg">
              În această călătorie, responsabilitatea poate fi egal împărțită între toți
              cei care doresc să se implice. Fie că ești pacient sau cunoști pe cineva
              diagnosticat cu această boală rară, povestea ta merită să fie ascultată.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-raised hover:shadow-lifted transition-all duration-200 hover:-translate-y-0.5 text-center border-t-4 border-haero-yellow">
              <div className="w-20 h-20 bg-haero-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-haero-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">Facebook</h3>
              <p className="text-haero-gray-500 mb-6">
                Am creat o pagină de Facebook în care pacienții și aparținătorii pot comunica
                deschis, pot pune întrebări și pot primi răspunsuri de la persoane care au
                parte de experiențe asemănătoare.
              </p>
              <a
                href="https://www.facebook.com/angioedemereditarromania"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-haero-yellow text-haero-dark px-6 py-3 rounded-full font-bold hover:bg-haero-yellow-600 transition-all duration-200 shadow-raised hover:shadow-lifted"
              >
                Alătură-te
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-raised hover:shadow-lifted transition-all duration-200 hover:-translate-y-0.5 text-center border-t-4 border-haero-yellow">
              <div className="w-20 h-20 bg-haero-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-haero-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">Instagram</h3>
              <p className="text-haero-gray-500 mb-6">
                Urmărește-ne pe Instagram pentru noutăți, povești ale pacienților
                și informații utile despre angioedemul ereditar.
              </p>
              <a
                href="https://www.instagram.com/asociatiahaero?igsh=MW81YjZ3YXRnbzFpMA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-haero-yellow text-haero-dark px-6 py-3 rounded-full font-bold hover:bg-haero-yellow-600 transition-all duration-200 shadow-raised hover:shadow-lifted"
              >
                Urmărește-ne
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-haero-dark mb-4">
              Devino <span className="text-haero-yellow-600">Membru</span>
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-haero-gray-500 max-w-2xl mx-auto text-lg">
              Asociația HAERO nu solicită donații și nu percepe cotizații pentru calitatea de membru.
              Înscrierea ta ca membru ne ajută să demonstrăm că există o comunitate reală de pacienți,
              aparținători și profesioniști care susțin drepturile persoanelor cu angioedem ereditar.
              Cu cât suntem mai mulți, cu atât vocea noastră este mai puternică în fața autorităților
              și a factorilor de decizie din sistemul de sănătate. Fiecare membru contează — prezența
              ta în asociație oferă credibilitate și legitimitate demersurilor noastre pentru acces
              egal la tratament, informare și îngrijire de calitate.
            </p>
          </div>

          <div className="bg-haero-cream rounded-2xl p-8 sm:p-10 shadow-raised border-t-4 border-haero-yellow">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="member-name" className="block text-sm font-semibold text-haero-gray-700 mb-1">
                    Nume și prenume <span className="text-haero-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="member-name"
                    required
                    className="w-full px-4 py-3 border border-haero-gray-300 rounded-lg focus:ring-2 focus:ring-haero-yellow-700 focus:border-transparent outline-none bg-white transition-shadow"
                    placeholder="Numele tău complet"
                  />
                </div>
                <div>
                  <label htmlFor="member-email" className="block text-sm font-semibold text-haero-gray-700 mb-1">
                    Adresa de email <span className="text-haero-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="member-email"
                    required
                    className="w-full px-4 py-3 border border-haero-gray-300 rounded-lg focus:ring-2 focus:ring-haero-yellow-700 focus:border-transparent outline-none bg-white transition-shadow"
                    placeholder="email@exemplu.ro"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="member-phone" className="block text-sm font-semibold text-haero-gray-700 mb-1">
                    Număr de telefon <span className="text-xs text-haero-gray-500 font-normal">(opțional)</span>
                  </label>
                  <input
                    type="tel"
                    id="member-phone"
                    className="w-full px-4 py-3 border border-haero-gray-300 rounded-lg focus:ring-2 focus:ring-haero-yellow-700 focus:border-transparent outline-none bg-white transition-shadow"
                    placeholder="+40 7XX XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="member-address" className="block text-sm font-semibold text-haero-gray-700 mb-1">
                    Adresa <span className="text-xs text-haero-gray-500 font-normal">(opțional)</span>
                  </label>
                  <input
                    type="text"
                    id="member-address"
                    className="w-full px-4 py-3 border border-haero-gray-300 rounded-lg focus:ring-2 focus:ring-haero-yellow-700 focus:border-transparent outline-none bg-white transition-shadow"
                    placeholder="Orașul sau localitatea"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="member-role" className="block text-sm font-semibold text-haero-gray-700 mb-1">
                  Rol <span className="text-haero-red">*</span>
                </label>
                <select
                  id="member-role"
                  required
                  className="w-full px-4 py-3 border border-haero-gray-300 rounded-lg focus:ring-2 focus:ring-haero-yellow-700 focus:border-transparent outline-none bg-white transition-shadow"
                  defaultValue=""
                >
                  <option value="" disabled>Selectează rolul tău</option>
                  <option value="pacient">Pacient</option>
                  <option value="aparținator">Aparținator</option>
                  <option value="medic">Medic</option>
                  <option value="altceva">Altceva</option>
                </select>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="accept-member"
                    required
                    className="mt-1 h-4 w-4 rounded border-haero-gray-300 text-haero-yellow-600 focus:ring-haero-yellow-700"
                  />
                  <label htmlFor="accept-member" className="text-sm text-haero-gray-700">
                    Accept să devin membru al Asociației HAERO. <span className="text-haero-red">*</span>
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="accept-privacy"
                    required
                    className="mt-1 h-4 w-4 rounded border-haero-gray-300 text-haero-yellow-600 focus:ring-haero-yellow-700"
                  />
                  <label htmlFor="accept-privacy" className="text-sm text-haero-gray-700">
                    Confirm că am citit și sunt de acord cu{' '}
                    <Link to="/politica-confidentialitate" className="text-haero-yellow-700 underline hover:text-haero-yellow-600">
                      Politica de Confidențialitate
                    </Link>. <span className="text-haero-red">*</span>
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="accept-statut"
                    required
                    className="mt-1 h-4 w-4 rounded border-haero-gray-300 text-haero-yellow-600 focus:ring-haero-yellow-700"
                  />
                  <label htmlFor="accept-statut" className="text-sm text-haero-gray-700">
                    Confirm că am citit{' '}
                    <Link to="/statutul-asociatiei" className="text-haero-yellow-700 underline hover:text-haero-yellow-600">
                      Statutul Asociației
                    </Link>. <span className="text-haero-red">*</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-haero-yellow text-haero-dark py-3 rounded-full font-bold hover:bg-haero-yellow-600 transition-all duration-200 shadow-raised hover:shadow-lifted text-lg mt-4"
              >
                Trimite cererea de membru
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comunitate;
