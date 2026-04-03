import SEO from '../components/SEO';
import React from 'react';
import { CheckCircle, BookOpen, Heart, Building2, FileText, Globe, Users } from 'lucide-react';
import { PageHero, SectionHeader, Card, IconBox } from '../components/ui';

const colorCycle: Array<'primary' | 'accent' | 'secondary'> = ['primary', 'accent', 'secondary'];

const OurMission: React.FC = () => {
  const actions = [
    {
      icon: (
<CheckCircle size={24} strokeWidth={1.5} />
      ),
      text: 'Milităm pentru dreptul fiecărui pacient la tratament personalizat, administrat la timp — pentru că nimeni nu ar trebui să aștepte în criză.',
    },
    {
      icon: (
<BookOpen size={24} strokeWidth={1.5} />
      ),
      text: 'Informăm medicii și publicul larg despre simptomele, diagnosticul și opțiunile terapeutice ale HAE — ca boala să fie recunoscută mai repede.',
    },
    {
      icon: (
<Heart size={24} strokeWidth={1.5} />
      ),
      text: 'Oferim suport emoțional și psihologic pacienților și familiilor lor — pentru că o boală rară nu trebuie să însemne o luptă solitară.',
    },
    {
      icon: (
<Building2 size={24} strokeWidth={1.5} />
      ),
      text: 'Reprezentăm interesele pacienților în fața autorităților și instituțiilor de sănătate — vocea comunității HAE trebuie auzită acolo unde se iau deciziile.',
    },
    {
      icon: (
<FileText size={24} strokeWidth={1.5} />
      ),
      text: 'Facilităm simplificarea procedurilor administrative, inclusiv obținerea pensiei medicale — birocrația nu ar trebui să fie o altă boală de care suferim.',
    },
    {
      icon: (
<Globe size={24} strokeWidth={1.5} />
      ),
      text: 'Construim parteneriate cu organizații naționale și internaționale — împreună suntem mai puternici.',
    },
    {
      icon: (
<Users size={24} strokeWidth={1.5} />
      ),
      text: 'Organizăm întâlniri de pacienți, workshop-uri și programe educative — pentru că atunci când ne cunoaștem și ne susținem, totul devine mai ușor.',
    },
  ];

  return (
    <><SEO title="Misiunea Noastră" description="HAERO luptă pentru drepturile pacienților cu angioedem ereditar — acces la tratament, informare, suport emoțional și reprezentare." path="/misiune" /><div className="pt-20">
      {/* Hero Section */}
      <PageHero
        variant="primary"
        badge="Cine suntem"
        title="Misiunea"
        titleHighlight="Noastră"
        description="Asociația HAERO există pentru a proteja și promova drepturile pacienților cu angioedem ereditar (HAE) din România. Credem că fiecare persoană afectată merită acces egal, rapid și fără discriminare la diagnostic, tratament și suport de calitate."
      />

      {/* Additional mission statement */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-500 text-lg leading-relaxed">
            Prin advocacy activ, campanii de informare și o comunitate în care nimeni nu se simte singur,
            luptăm pentru o viață demnă și împlinită a pacienților cu HAE — indiferent de vârstă,
            localizare geografică sau condiție socio-economică.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Acțiuni"
            title="Ce facem"
            titleHighlight="concret"
            dividerColor="accent"
          />

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {actions.map((action, index) => {
              const color = colorCycle[index % 3];
              return (
                <Card key={index} variant="default" hover>
                  <div className="p-6 flex gap-4">
                    <IconBox variant={color}>
                      {action.icon}
                    </IconBox>
                    <p className="text-neutral-500 leading-relaxed">{action.text}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary-50 via-white to-accent-50 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 blob-secondary opacity-30" />
        <div className="absolute -bottom-16 right-[10%] w-48 h-48 blob-accent opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            title="De ce"
            titleHighlight="contează"
            dividerColor="secondary"
          />
          <div className="space-y-6">
            <p className="text-neutral-600 text-lg leading-relaxed">
              Angioedemul ereditar este o boală rară, adesea nediagnosticată sau diagnosticată
              cu întârziere de ani de zile. Crizele pot fi severe, cu risc vital, iar lipsa
              accesului rapid la tratament poate costa vieți.
            </p>
            <p className="text-primary-600 text-xl font-semibold leading-relaxed">
              HAERO este vocea care spune: fiecare pacient contează, fiecare criză prevenită este o victorie.
            </p>
          </div>
        </div>
      </section>
    </div>
  </>
  );
};

export default OurMission;
