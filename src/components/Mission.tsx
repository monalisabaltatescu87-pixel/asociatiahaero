import React from 'react';
import { CheckCircle, Building2, MessageCircle, Globe } from 'lucide-react';
import { SectionHeader, Card, IconBox } from './ui';

const Mission: React.FC = () => {
  const goals = [
    {
      icon: (
        <CheckCircle size={24} strokeWidth={1.5} />
      ),
      title: 'Calitatea Vieții',
      description:
        'Scopul nostru primordial este de a îmbunătăți calitatea vieții pacienților, atât prin facilitarea îngrijirilor medicale de calitate, cât și prin diminuarea impactului psihosocial pe care această boală rară îl produce.',
      color: 'primary' as const,
    },
    {
      icon: (
        <Building2 size={24} strokeWidth={1.5} />
      ),
      title: 'Acces la Tratament',
      description:
        'Vrem să reușim ca fiecare pacient cu angioedem ereditar din România să beneficieze de tratament individualizat. Militam pentru accesul la tratament specific și pentru introducerea de protocoale terapeutice moderne.',
      color: 'accent' as const,
    },
    {
      icon: (
        <MessageCircle size={24} strokeWidth={1.5} />
      ),
      title: 'Dialog Deschis',
      description:
        'Rămânem aproape de comunitate, inițiem și menținem un dialog deschis între pacienți și medici, informăm și întreprindem acțiuni care aduc beneficii celor diagnosticați cu angioedem ereditar.',
      color: 'secondary' as const,
    },
    {
      icon: (
        <Globe size={24} strokeWidth={1.5} />
      ),
      title: 'Colaborare cu HAEi',
      description:
        'Adunăm pentru pacienți știrile relevante din domeniu, noutățile legate de tratament și inițiativele Asociației internaționale de angioedem ereditar (HAEi) pentru a ține comunitatea informată.',
      color: 'primary' as const,
    },
  ];

  return (
    <section className="py-24 bg-neutral-50 relative">
      <div className="absolute inset-0 pattern-stripes" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Ce facem"
          title="Misiunea"
          titleHighlight="Noastră"
          dividerColor="accent"
          description="Ideea înființării Asociației a venit ca urmare a faptului că fiecare pacient cu angioedem ereditar are nevoie să se simtă înțeles, acceptat și motivat să facă față acestei boli care reprezintă o continuă provocare."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {goals.map((goal, index) => (
            <Card key={index} variant="default" className="p-6">
              <div className="flex gap-4">
                <IconBox variant={goal.color} size="md">
                  {goal.icon}
                </IconBox>
                <div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-2">{goal.title}</h3>
                  <p className="text-neutral-500 leading-relaxed">{goal.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
