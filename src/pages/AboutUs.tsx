import SEO from '../components/SEO';
import React from 'react';
import { PageHero, SectionHeader, Card, IconBox } from '../components/ui';

const AboutUs: React.FC = () => {
  return (
    <><SEO title="Despre Noi" description="Află cine suntem și ce ne motivează. HAERO oferă suport, informare și comunitate pacienților cu angioedem ereditar din România." path="/despre" /><div>
      <PageHero
        variant="primary"
        badge="Despre noi"
        title="Despre"
        titleHighlight="HAERO"
        description="HAERO este o asociație non-guvernamentală înființată la Târgu-Mureș din dorința de a crea o comunitate a pacienților cu Angioedem Ereditar din România, o comunitate a cărei voce să devină vocea comună a tuturor pacienților cu această boală rară."
      />

      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Ce ne definește"
            title="Misiunea"
            titleHighlight="noastră"
            dividerColor="primary"
          />

          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="feature" accentColor="primary" hover>
              <div className="p-8 text-center">
                <IconBox variant="primary" size="lg" className="mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </IconBox>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">Suport</h3>
                <p className="text-neutral-500 leading-relaxed">
                  Reprezintăm un cadru organizat în care pacienții pot să-și exprime
                  ideile, experiențele, fricile și bucuriile. Fie că ești pacient sau
                  cunoști pe cineva diagnosticat, povestea ta merită să fie ascultată.
                </p>
              </div>
            </Card>

            <Card variant="feature" accentColor="secondary" hover>
              <div className="p-8 text-center">
                <IconBox variant="secondary" size="lg" className="mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </IconBox>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">Informare</h3>
                <p className="text-neutral-500 leading-relaxed">
                  Ne propunem să informăm atât pacienții cât și medicii, să facem
                  cunoscută această boală rară, întrucât riscul unui diagnostic greșit
                  sau tardiv poate fi fatal.
                </p>
              </div>
            </Card>

            <Card variant="feature" accentColor="accent" hover>
              <div className="p-8 text-center">
                <IconBox variant="accent" size="lg" className="mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </IconBox>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">Comunitate</h3>
                <p className="text-neutral-500 leading-relaxed">
                  Creștem o comunitate în care încrederea primează, în care pacienții
                  găsesc și oferă sprijin, lucrând împreună pentru creșterea calității
                  vieții pacienților cu angioedem ereditar din România.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  </>
  );
};

export default AboutUs;
