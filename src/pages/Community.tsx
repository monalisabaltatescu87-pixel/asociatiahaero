import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, SectionHeader, Card, Button } from '../components/ui';

const Community: React.FC = () => {
  return (
    <><SEO title="Comunitate" description="Alătură-te comunității HAERO. Conectează-te cu alți pacienți, aparținători și medici implicați în lupta cu angioedemul ereditar." path="/comunitate" /><div className="pt-20">
      {/* Hero Section */}
      <PageHero
        variant="secondary"
        badge="Împreună"
        title="Community"
        description="În această călătorie, responsabilitatea poate fi egal împărțită între toți cei care doresc să se implice. Fie că ești pacient sau cunoști pe cineva diagnosticat cu această boală rară, povestea ta merită să fie ascultată."
      />

      {/* Social Cards */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Facebook */}
            <Card variant="feature" accentColor="primary" hover>
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">Facebook</h3>
                <p className="text-neutral-500 mb-6">
                  Am creat o pagină de Facebook în care pacienții și aparținătorii pot comunica
                  deschis, pot pune întrebări și pot primi răspunsuri de la persoane care au
                  parte de experiențe asemănătoare.
                </p>
                <Button
                  variant="primary"
                  href="https://www.facebook.com/angioedemereditarromania"
                >
                  Alătură-te
                </Button>
              </div>
            </Card>

            {/* Instagram */}
            <Card variant="feature" accentColor="secondary" hover>
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-secondary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-secondary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">Instagram</h3>
                <p className="text-neutral-500 mb-6">
                  Urmărește-ne pe Instagram pentru noutăți, povești ale pacienților
                  și informații utile despre angioedemul ereditar.
                </p>
                <Button
                  variant="primary"
                  href="https://www.instagram.com/asociatiahaero?igsh=MW81YjZ3YXRnbzFpMA%3D%3D&utm_source=qr"
                >
                  Urmărește-ne
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Alătură-te"
            title="Devino"
            titleHighlight="Membru"
            description="Asociația HAERO nu solicită donații și nu percepe cotizații pentru calitatea de membru. Înscrierea ta ca membru ne ajută să demonstrăm că există o comunitate reală de pacienți, aparținători și profesioniști care susțin drepturile persoanelor cu angioedem ereditar. Cu cât suntem mai mulți, cu atât vocea noastră este mai puternică în fața autorităților și a factorilor de decizie din sistemul de sănătate. Fiecare membru contează — prezența ta în asociație oferă credibilitate și legitimitate demersurilor noastre pentru acces egal la tratament, informare și îngrijire de calitate."
            dividerColor="primary"
          />

          <Card variant="elevated" hover={false} className="overflow-visible">
            <div className="p-8 sm:p-10">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="member-name" className="block text-sm font-semibold text-neutral-700 mb-1">
                      Nume și prenume <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="member-name"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                      placeholder="Numele tău complet"
                    />
                  </div>
                  <div>
                    <label htmlFor="member-email" className="block text-sm font-semibold text-neutral-700 mb-1">
                      Adresa de email <span className="text-error">*</span>
                    </label>
                    <input
                      type="email"
                      id="member-email"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                      placeholder="email@exemplu.ro"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="member-phone" className="block text-sm font-semibold text-neutral-700 mb-1">
                      Număr de telefon <span className="text-xs text-neutral-400 font-normal">(opțional)</span>
                    </label>
                    <input
                      type="tel"
                      id="member-phone"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                      placeholder="+40 7XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="member-address" className="block text-sm font-semibold text-neutral-700 mb-1">
                      Adresa <span className="text-xs text-neutral-400 font-normal">(opțional)</span>
                    </label>
                    <input
                      type="text"
                      id="member-address"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                      placeholder="Orașul sau localitatea"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="member-locality" className="block text-sm font-semibold text-neutral-700 mb-1">
                      Localitate
                    </label>
                    <input
                      type="text"
                      id="member-locality"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                      placeholder="Oraș sau sat"
                    />
                    <p className="text-xs text-neutral-400 mt-1">Nu este nevoie de adresa exactă, doar orașul sau satul.</p>
                  </div>
                  <div>
                    <label htmlFor="member-category" className="block text-sm font-semibold text-neutral-700 mb-1">
                      Mă descrie cel mai bine <span className="text-error">*</span>
                    </label>
                    <select
                      id="member-category"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                      defaultValue=""
                    >
                      <option value="" disabled>Selectează o opțiune</option>
                      <option value="pacient-diagnosticat">Pacient diagnosticat</option>
                      <option value="persoana-cu-simptome">Persoană cu simptome, nediagnosticată</option>
                      <option value="medic">Medic</option>
                      <option value="reprezentant-pharma">Reprezentant pharma</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="accept-member"
                      required
                      className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-500 focus:ring-primary-400"
                    />
                    <label htmlFor="accept-member" className="text-sm text-neutral-600">
                      Accept să devin membru al Asociației HAERO. <span className="text-error">*</span>
                    </label>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="accept-privacy"
                      required
                      className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-500 focus:ring-primary-400"
                    />
                    <label htmlFor="accept-privacy" className="text-sm text-neutral-600">
                      Confirm că am citit și sunt de acord cu{' '}
                      <Link to="/politica-confidentialitate" className="text-primary-500 underline hover:text-primary-600">
                        Politica de Confidențialitate
                      </Link>. <span className="text-error">*</span>
                    </label>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="accept-statut"
                      required
                      className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-500 focus:ring-primary-400"
                    />
                    <label htmlFor="accept-statut" className="text-sm text-neutral-600">
                      Confirm că am citit{' '}
                      <Link to="/statutul-asociatiei" className="text-primary-500 underline hover:text-primary-600">
                        Statutul Asociației
                      </Link>. <span className="text-error">*</span>
                    </label>
                  </div>
                </div>

                <Button type="submit" variant="primary" size="lg" fullWidth className="mt-4">
                  Trimite cererea de membru
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </section>
    </div>
  </>
  );
};

export default Community;
