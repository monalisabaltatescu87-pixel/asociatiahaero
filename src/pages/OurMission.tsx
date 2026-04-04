import SEO from '../components/SEO';
import React, { useEffect, useRef, useState } from 'react';
import {
  CheckCircle,
  BookOpen,
  Heart,
  Building2,
  FileText,
  Globe,
  Users,
} from 'lucide-react';

const iconBoxStyles = [
  'bg-primary-50 text-primary-500 border-2 border-primary-200',
  'bg-accent-50 text-accent-500 border-2 border-accent-200',
  'bg-secondary-50 text-secondary-400 border-2 border-secondary-200',
];

const actions = [
  {
    icon: <CheckCircle size={22} strokeWidth={1.5} />,
    text: 'Milităm pentru dreptul fiecărui pacient la tratament personalizat, administrat la timp — pentru că nimeni nu ar trebui să aștepte în criză.',
  },
  {
    icon: <BookOpen size={22} strokeWidth={1.5} />,
    text: 'Informăm medicii și publicul larg despre simptomele, diagnosticul și opțiunile terapeutice ale AEE — ca boala să fie recunoscută mai repede.',
  },
  {
    icon: <Heart size={22} strokeWidth={1.5} />,
    text: 'Oferim suport emoțional și psihologic pacienților și familiilor lor — pentru că o boală rară nu trebuie să însemne o luptă solitară.',
  },
  {
    icon: <Building2 size={22} strokeWidth={1.5} />,
    text: 'Reprezentăm interesele pacienților în fața autorităților și instituțiilor de sănătate — vocea comunității trebuie auzită acolo unde se iau deciziile.',
  },
  {
    icon: <FileText size={22} strokeWidth={1.5} />,
    text: 'Facilităm simplificarea procedurilor administrative — birocrația nu ar trebui să fie o altă boală.',
  },
  {
    icon: <Globe size={22} strokeWidth={1.5} />,
    text: 'Construim parteneriate cu organizații naționale și internaționale — împreună suntem mai puternici.',
  },
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    text: 'Organizăm întâlniri de pacienți, workshop-uri și programe educative — pentru că atunci când ne cunoaștem și ne susținem, totul devine mai ușor.',
  },
];

const OurMission: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <>
      <SEO
        title="Misiunea Noastră"
        description="HAERO luptă pentru drepturile pacienților cu angioedem ereditar — acces la tratament, informare, suport emoțional și reprezentare."
        path="/misiune"
      />

      <div>
        {/* ── Hero ── */}
        <section className="relative pt-28 pb-20 text-center overflow-hidden bg-gradient-to-b from-white to-neutral-50">
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(228,181,68,0.06)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[58px] font-bold leading-[1.1] text-neutral-800 mb-6 tracking-tight">
              Misiunea Noastră
            </h1>

            <p className="text-lg leading-[1.8] text-neutral-500 max-w-[580px] mx-auto">
              Asociația HAERO există pentru a proteja și promova drepturile pacienților cu angioedem ereditar din România.
            </p>
          </div>
        </section>

        {/* ── Prose Introduction ── */}
        <section
          id="prose-intro"
          data-animate
          className={`py-12 bg-white transition-all duration-700 ${
            isVisible('prose-intro')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-[620px] mx-auto px-4 sm:px-6 text-center">
            {/* Diamond ornament */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="block w-10 h-px bg-primary-300" />
              <span className="block w-2 h-2 bg-primary-400 rotate-45 flex-shrink-0" />
              <span className="block w-10 h-px bg-primary-300" />
            </div>

            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-4">
              Credem că fiecare persoană afectată merită acces egal, rapid și fără discriminare la diagnostic, tratament și suport de calitate.
            </p>

            <p className="text-[17px] leading-[1.85] text-neutral-600">
              Prin advocacy activ, campanii de informare și o comunitate în care nimeni nu se simte singur, luptăm pentru o viață demnă și împlinită — indiferent de vârstă, localizare geografică sau condiție socio-economică.
            </p>
          </div>
        </section>

        {/* ── Actions Header ── */}
        <section
          id="actions-header"
          data-animate
          className={`pt-6 pb-10 bg-white text-center transition-all duration-700 ${
            isVisible('actions-header')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-2">
            Ce facem concret
          </h2>
          <div className="w-12 h-[3px] bg-primary-400 rounded-full mx-auto" />
        </section>

        {/* ── Action Grid (2 columns) ── */}
        <section className="pb-12 bg-white">
          <div className="max-w-[780px] mx-auto px-4 sm:px-6 grid sm:grid-cols-2 gap-5">
            {actions.map((action, index) => {
              const id = `action-${index}`;
              const isLast = index === actions.length - 1;
              const isOdd = actions.length % 2 !== 0;
              const colorClass = iconBoxStyles[index % 3];

              return (
                <div
                  key={index}
                  id={id}
                  data-animate
                  className={`
                    group p-7 bg-neutral-50 rounded-[20px] transition-all duration-500
                    hover:bg-neutral-100 hover:-translate-y-[3px] hover:shadow-lifted
                    ${isLast && isOdd ? 'sm:col-span-2 sm:max-w-[380px] sm:justify-self-center' : ''}
                    ${isVisible(id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                  `}
                  style={{ transitionDelay: `${(index % 4) * 80}ms` }}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3.5 ${colorClass}`}
                  >
                    {action.icon}
                  </div>
                  <p className="text-[15px] leading-relaxed text-neutral-500">
                    {action.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Closing — De ce contează ── */}
        <section
          id="closing"
          data-animate
          className={`relative py-14 bg-white overflow-hidden transition-all duration-700 ${
            isVisible('closing')
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-[0.97]'
          }`}
        >
          {/* Organic blobs */}
          <div className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(150,104,162,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute -bottom-8 -right-5 w-[160px] h-[160px] rounded-full bg-[radial-gradient(circle,rgba(90,157,164,0.05)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative max-w-[560px] mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-playfair text-2xl font-bold text-neutral-800 mb-4">
              De ce contează
            </h2>

            <p className="text-[17px] leading-[1.75] text-neutral-600 mb-3">
              Angioedemul ereditar este o boală rară, adesea nediagnosticată sau diagnosticată cu întârziere de ani de zile. Crizele pot fi severe, cu risc vital, iar lipsa accesului rapid la tratament poate costa vieți.
            </p>

            <p className="font-playfair text-xl leading-[1.5] text-primary-600 font-semibold mt-5">
              HAERO este vocea care spune: fiecare pacient contează, fiecare criză prevenită este o victorie.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurMission;
