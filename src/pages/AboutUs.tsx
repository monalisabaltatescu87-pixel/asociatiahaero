import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const AboutUs: React.FC = () => {
  const isVisible = useAnimateOnScroll();

  const pillars = [
    {
      id: 'pillar-suport',
      label: 'Suport',
      labelColor: 'text-primary-400',
      title: 'Ascultăm fiecare voce',
      text: 'Reprezentăm un cadru organizat în care pacienții pot să-și exprime ideile, experiențele, fricile și bucuriile. Povestea ta merită să fie ascultată.',
      alt: false,
    },
    {
      id: 'pillar-informare',
      label: 'Informare',
      labelColor: 'text-accent-400',
      title: 'Reducem întârzierea diagnosticului',
      text: 'Ne propunem să informăm atât pacienții cât și medicii, să facem cunoscută această boală rară, întrucât riscul unui diagnostic greșit sau tardiv poate fi fatal.',
      alt: true,
    },
    {
      id: 'pillar-comunitate',
      label: 'Comunitate',
      labelColor: 'text-secondary-400',
      title: 'Construim împreună',
      text: 'Creștem o comunitate în care încrederea primează, lucrând împreună pentru creșterea calității vieții pacienților cu angioedem ereditar.',
      alt: false,
    },
  ];

  const actions = [
    'Milităm pentru dreptul fiecărui pacient la tratament personalizat, administrat la timp — pentru că nimeni nu ar trebui să aștepte în criză.',
    'Informăm medicii și publicul larg despre simptomele, diagnosticul și opțiunile terapeutice ale AEE — ca boala să fie recunoscută mai repede.',
    'Oferim suport emoțional și psihologic pacienților și familiilor lor — pentru că o boală rară nu trebuie să însemne o luptă solitară.',
    'Reprezentăm interesele pacienților în fața autorităților și instituțiilor de sănătate — vocea comunității trebuie auzită acolo unde se iau deciziile.',
    'Facilităm simplificarea procedurilor administrative — birocrația nu ar trebui să fie o altă boală.',
    'Construim parteneriate cu organizații naționale și internaționale — împreună suntem mai puternici.',
    'Organizăm întâlniri de pacienți, workshop-uri și programe educative — pentru că atunci când ne cunoaștem și ne susținem, totul devine mai ușor.',
  ];

  return (
    <>
      <SEO
        title="Despre Noi"
        description="Află cine suntem, ce ne motivează și cum luptăm pentru drepturile pacienților cu angioedem ereditar din România."
        path="/despre"
      />

      <div>
        {/* ── Page header ── */}
        <section
          className="pt-[calc(64px+5rem)] pb-16 text-center"
          style={{
            background: 'linear-gradient(180deg, #fef9ec 0%, #fdfcfa 100%)',
          }}
        >
          <div className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-neutral-400 mb-6">
            Despre HAERO
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-neutral-800 max-w-[600px] mx-auto mb-5 px-6">
            Despre Noi
          </h1>
          <p className="text-[1.05rem] leading-[1.8] text-neutral-500 max-w-[480px] mx-auto px-6">
            O asociație născută din dorința de a uni pacienții cu Angioedem Ereditar din România într-o singură voce.
          </p>
        </section>

        {/* ── Prose ── */}
        <section
          id="prose"
          data-animate
          className={`border-b border-neutral-200 transition-all duration-700 ${
            isVisible('prose')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-[620px] mx-auto px-6 sm:px-8 py-16">
            <p className="text-[1.05rem] leading-[1.9] text-neutral-600 mb-5">
              HAERO este o asociație non-guvernamentală înființată la Târgu-Mureș din dorința de a crea{' '}
              <strong className="text-neutral-800 font-bold">
                o comunitate a pacienților cu Angioedem Ereditar din România
              </strong>
              , o comunitate a cărei voce să devină vocea comună a tuturor pacienților cu această boală rară.
            </p>
            <p className="text-[1.05rem] leading-[1.9] text-neutral-600">
              Am pornit de la o convingere simplă: nimeni nu ar trebui să se confrunte singur cu o boală rară.
            </p>
          </div>
        </section>

        {/* ── Pillar bands ── */}
        {pillars.map((pillar, index) => (
          <section
            key={pillar.id}
            id={pillar.id}
            data-animate
            className={`border-b border-neutral-200 py-14 px-6 sm:px-10 lg:px-16 transition-all duration-700 ${
              pillar.alt ? 'bg-[#f9f7f3]' : 'bg-neutral-50'
            } ${
              isVisible(pillar.id)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="max-w-[880px] mx-auto grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-start">
              <div>
                <div className={`text-[0.65rem] font-bold uppercase tracking-[0.2em] ${pillar.labelColor} mb-2`}>
                  {pillar.label}
                </div>
                <h3 className="font-playfair text-2xl font-bold text-neutral-800 leading-[1.2]">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-[0.95rem] leading-[1.85] text-neutral-600 md:pt-1">
                {pillar.text}
              </p>
            </div>
          </section>
        ))}

        {/* ── Mission: Ce facem concret ── */}
        <section
          id="mission-header"
          data-animate
          className={`pt-16 pb-4 transition-all duration-700 ${
            isVisible('mission-header')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-[880px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6">
              Misiunea noastră
            </div>
            <h2 className="font-playfair text-3xl sm:text-[2.25rem] font-bold text-neutral-800 tracking-tight mb-3">
              Ce facem concret
            </h2>
            <p className="text-[1.05rem] leading-[1.85] text-neutral-600 max-w-[560px]">
              Credem că fiecare persoană afectată merită acces egal, rapid și fără discriminare la diagnostic, tratament și suport de calitate.
            </p>
          </div>
        </section>

        {/* ── Action list ── */}
        <section className="pb-8">
          <div className="max-w-[880px] mx-auto px-6 sm:px-10 lg:px-16">
            {actions.map((action, index) => {
              const id = `action-${index}`;
              return (
                <div
                  key={id}
                  id={id}
                  data-animate
                  className={`grid grid-cols-[40px_1fr] gap-3 items-start py-6 border-b border-neutral-200 transition-all duration-700 ${
                    isVisible(id)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${(index % 4) * 80}ms` }}
                >
                  <span className="font-playfair text-xl font-light text-neutral-300 leading-none pt-0.5">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[0.95rem] leading-[1.85] text-neutral-600">
                    {action}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Closing: De ce contează ── */}
        <section
          id="closing"
          data-animate
          className={`bg-[#f9f7f3] border-t border-neutral-200 py-16 transition-all duration-700 ${
            isVisible('closing')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-[560px] mx-auto px-6 sm:px-8 text-center">
            <div className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6">
              De ce contează
            </div>
            <p className="text-[1.05rem] leading-[1.85] text-neutral-600 mb-5">
              Angioedemul ereditar este o boală rară, adesea nediagnosticată sau diagnosticată cu întârziere de ani de zile. Crizele pot fi severe, cu risc vital, iar lipsa accesului rapid la tratament poate costa vieți.
            </p>
            <p className="font-playfair text-xl leading-[1.5] text-primary-500 font-semibold">
              HAERO este vocea pacienților cu angioedem ereditar din România.
            </p>
          </div>
        </section>

        {/* ── Navigation CTA ── */}
        <section
          id="cta-nav"
          data-animate
          className={`py-12 transition-all duration-700 ${
            isVisible('cta-nav')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex justify-center gap-3 flex-wrap px-6">
            {[
              { to: '/ce-este-aee', label: 'Ce este AEE' },
              { to: '/comunitate', label: 'Comunitate' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="group inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-200 rounded-md text-sm font-semibold text-neutral-600 transition-all duration-200 hover:border-neutral-400 hover:text-neutral-800"
              >
                {label}
                <ArrowRight
                  size={14}
                  className="text-neutral-400 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
