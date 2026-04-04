import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeader, Card, Badge } from './ui';

const WhatIsHAE: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 to-primary-50/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Informare"
          title="Ce este Angioedermul Ereditar?"
          dividerColor="accent"
        />

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: text */}
          <div>
            <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
              <strong className="text-neutral-800">Angioedermul Ereditar (AEE)</strong> este o boală genetică rară,
              cu potențial letal, transmisă autozomal dominant — sunt 50% șanse ca
              părintele purtător să transmită boala copiilor — care se manifestă prin
              episoade recurente de angioedem localizat în diverse regiuni anatomice.
            </p>
            <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
              Denumirea de „ereditar" se datorează faptului că mutația genetică care
              duce la apariția bolii este transmisă din generație în generație. Totuși,
              25% din cazuri sunt reprezentate de pacienți care au avut o mutație spontană
              a genei inhibitorului C1 la concepție — absența istoricului familial nu
              exclude diagnosticul.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Badge variant="accent">Boală rară</Badge>
              <Badge variant="primary">Genetică</Badge>
              <Badge variant="secondary">1:10.000 — 1:50.000</Badge>
            </div>

            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
              Incidența este de <strong className="text-neutral-800">1 din 10.000 până la 1 din 50.000</strong> de
              persoane. Cel mai frecvent, primele episoade apar în copilărie sau
              adolescență și continuă să se manifeste cu o frecvență variabilă pe
              parcursul întregii vieți.
            </p>

            <Link
              to="/ce-este-aee"
              className="inline-flex items-center gap-2 bg-accent-400 text-white px-7 py-3 rounded-full font-bold hover:bg-accent-500 transition-all duration-300 shadow-raised hover:shadow-glow-accent hover:-translate-y-0.5"
            >
              Află mai multe despre AEE
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right: info cards */}
          <div className="space-y-5">
            <Card to="/ce-este-aee" variant="accent-left" accentColor="primary" className="p-6">
              <h3 className="font-bold text-neutral-800 mb-2">Simptome</h3>
              <p className="text-neutral-500 text-[15px] leading-relaxed">
                Zonele cele mai frecvent implicate sunt extremitățile (mâinile, picioarele,
                regiunea genitală), fața și gâtul (buzele, pleoapele, limba, laringele —
                forma cea mai gravă datorită posibilei evoluții spre asfixie), precum și
                abdomenul (colică abdominală cu greață, vărsături, diaree, dureri intense).
              </p>
              <span className="text-primary-500 font-semibold text-sm mt-3 inline-flex items-center gap-1">
                Citește mai mult
                <ChevronRight size={14} />
              </span>
            </Card>

            <Card to="/care-sunt-declansatorii-aee" variant="accent-left" accentColor="accent" className="p-6">
              <h3 className="font-bold text-neutral-800 mb-2">Factori declanșatori</h3>
              <p className="text-neutral-500 text-[15px] leading-relaxed">
                Stresul, traumatismele fizice, infecțiile, modificările hormonale și anumite
                medicamente pot declanșa episoade de angioedem ereditar.
              </p>
              <span className="text-primary-500 font-semibold text-sm mt-3 inline-flex items-center gap-1">
                Citește mai mult
                <ChevronRight size={14} />
              </span>
            </Card>

            <Card to="/ce-cauzeaza-aee" variant="accent-left" accentColor="secondary" className="p-6">
              <h3 className="font-bold text-neutral-800 mb-2">Principalele cauze</h3>
              <p className="text-neutral-500 text-[15px] leading-relaxed">
                AEE este cauzat de mutații genetice care afectează inhibitorul C1 esterază,
                ducând la producția excesivă de bradikinină și apariția edemului.
              </p>
              <span className="text-primary-500 font-semibold text-sm mt-3 inline-flex items-center gap-1">
                Citește mai mult
                <ChevronRight size={14} />
              </span>
            </Card>

            <Card to="/cum-tratam-aee" variant="accent-left" accentColor="accent" className="p-6">
              <h3 className="font-bold text-neutral-800 mb-2">Tratament</h3>
              <p className="text-neutral-500 text-[15px] leading-relaxed">
                Există tratamente moderne care pot preveni și trata crizele de angioedem.
                HAERO militează pentru accesul fiecărui pacient la tratament specific,
                individualizat.
              </p>
              <span className="text-primary-500 font-semibold text-sm mt-3 inline-flex items-center gap-1">
                Citește mai mult
                <ChevronRight size={14} />
              </span>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHAE;
