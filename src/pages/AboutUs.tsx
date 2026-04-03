import SEO from '../components/SEO';
import React from 'react';
import { PageHero, SectionHeader, Card, IconBox } from '../components/ui';
import { Heart, BookOpen, Users } from 'lucide-react';

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
                  <Heart size={32} strokeWidth={1.5} />
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
                  <BookOpen size={32} strokeWidth={1.5} />
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
                  <Users size={32} strokeWidth={1.5} />
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
