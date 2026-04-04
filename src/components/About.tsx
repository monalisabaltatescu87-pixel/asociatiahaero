import React from 'react';
import { Heart, BookOpen, Users } from 'lucide-react';
import { SectionHeader, Card, IconBox } from './ui';

const About: React.FC = () => {
  const cards = [
    {
      icon: (
        <Heart size={28} strokeWidth={1.5} />
      ),
      title: 'Suport',
      description:
        'Reprezintăm un cadru organizat în care pacienții pot să-și exprime ideile, experiențele, fricile și bucuriile. Fie că ești pacient sau cunoști pe cineva diagnosticat, povestea ta merită să fie ascultată.',
      color: 'primary' as const,
    },
    {
      icon: (
        <BookOpen size={28} strokeWidth={1.5} />
      ),
      title: 'Informare',
      description:
        'Ne propunem să informăm atât pacienții cât și medicii, să facem cunoscută această boală rară, întrucât riscul unui diagnostic greșit sau tardiv poate fi fatal.',
      color: 'accent' as const,
    },
    {
      icon: (
        <Users size={28} strokeWidth={1.5} />
      ),
      title: 'Comunitate',
      description:
        'Creștem o comunitate în care încrederea primează, în care pacienții găsesc și oferă sprijin, lucrând împreună pentru creșterea calității vieții pacienților cu angioedem ereditar din România.',
      color: 'secondary' as const,
    },
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Despre noi"
          title="Despre HAERO"
          description="HAERO este o asociație non-guvernamentală înființată la Târgu-Mureș din dorința de a crea o comunitate a pacienților cu Angioedem Ereditar din România, o comunitate a cărei voce să devină vocea comună a tuturor pacienților cu această boală rară."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <Card key={i} variant="feature" accentColor={card.color} className="p-8 text-center">
              <IconBox variant={card.color} size="lg" className="mx-auto mb-6">
                {card.icon}
              </IconBox>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">{card.title}</h3>
              <p className="text-neutral-500 leading-relaxed">{card.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
