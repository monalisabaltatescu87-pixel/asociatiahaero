import React from 'react';
import { Users, Share2 } from 'lucide-react';
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
              <Users size={32} strokeWidth={1.5} />
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
              <Share2 size={32} strokeWidth={1.5} />
            </IconBox>
            <h3 className="text-xl font-bold text-neutral-800 mb-3">Distribuie</h3>
            <p className="text-neutral-500 mb-6 leading-relaxed">
              Ajută-ne să facem cunoscută această boală rară. Dacă crezi că te identifici
              cu simptomele specifice AEE sau ești medic și ai nevoie de informații,
              te invităm să ne contactezi.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-transparent text-neutral-700 border-2 border-neutral-300 px-6 py-3 rounded-full font-bold hover:bg-neutral-100 transition-all duration-300 hover:-translate-y-0.5"
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
