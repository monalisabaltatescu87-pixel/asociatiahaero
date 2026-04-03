import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader, Card, IconBox } from './ui';

const GetInvolved: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50/40 via-neutral-50 to-accent-50/30" />
      <div className="absolute inset-0 pattern-dots opacity-30" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Implică-te"
          title="Comunitate"
          dividerColor="secondary"
          description="În această călătorie, responsabilitatea poate fi egal împărțită între toți cei care doresc să se implice. Fie că ești pacient sau cunoști pe cineva diagnosticat cu această boală rară, povestea ta merită să fie ascultată."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card variant="feature" accentColor="secondary" className="p-8 text-center">
            <IconBox variant="secondary" size="lg" className="mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </IconBox>
            <h3 className="text-xl font-bold text-neutral-800 mb-3">Grupul de Facebook</h3>
            <p className="text-neutral-500 mb-6 leading-relaxed">
              Am creat un grup de Facebook în care pacienții și aparținătorii pot comunica
              deschis, pot pune întrebări și pot primi răspunsuri de la persoane care au
              parte de experiențe asemănătoare.
            </p>
            <Link
              to="/comunitate"
              className="inline-flex items-center gap-2 bg-secondary-400 text-white px-6 py-3 rounded-full font-bold hover:bg-secondary-500 transition-all duration-300 shadow-raised hover:-translate-y-0.5"
            >
              Alătură-te
            </Link>
          </Card>

          <Card variant="feature" accentColor="accent" className="p-8 text-center">
            <IconBox variant="accent" size="lg" className="mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </IconBox>
            <h3 className="text-xl font-bold text-neutral-800 mb-3">Distribuie</h3>
            <p className="text-neutral-500 mb-6 leading-relaxed">
              Ajută-ne să facem cunoscută această boală rară. Dacă crezi că te identifici
              cu simptomele specifice AEE sau ești medic și ai nevoie de informații,
              te invităm să ne contactezi.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-transparent text-accent-600 border-2 border-accent-300 px-6 py-3 rounded-full font-bold hover:bg-accent-50 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contactează-ne
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
