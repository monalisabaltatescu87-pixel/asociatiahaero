import React from 'react';
import SEO from './SEO';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const Hero: React.FC = () => {
  const isVisible = useAnimateOnScroll();

  return (
    <>
      <SEO
        title="Acasă"
        description="Asociația HAERO militează pentru drepturile pacienților cu angioedem ereditar (HAE) din România — acces egal la tratament, informare și suport de calitate."
        path="/"
      />

      {/* ── Hero ── */}
      <section
        className="min-h-screen flex flex-col justify-center items-center pt-16 text-center"
        style={{
          background: 'linear-gradient(180deg, #fef9ec 0%, #fdfcfa 60%, #fdfcfa 100%)',
        }}
      >
        <div className="animate-fade-up">
          <Logo size={72} />
        </div>

        <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.15] tracking-tight text-neutral-800 max-w-[680px] px-6 mt-8 mb-8 animate-fade-up delay-100 opacity-0">
          O voce comună pentru pacienții cu Angioedem Ereditar din România
        </h1>

        <div className="w-12 h-px bg-primary-200 mb-8 animate-fade-up delay-200 opacity-0" />

        <p className="text-base leading-[1.8] text-neutral-500 max-w-[420px] px-6 mb-10 animate-fade-up delay-300 opacity-0">
          Am pornit de la o convingere simplă: nimeni nu ar trebui să se confrunte singur cu o boală rară.
        </p>

        <div className="flex gap-3 animate-fade-up delay-400 opacity-0">
          <Link
            to="/despre"
            className="px-7 py-3 bg-primary-400 text-neutral-800 font-bold text-sm rounded-md hover:bg-primary-500 transition-all duration-200 hover:-translate-y-0.5"
          >
            Descoperă Misiunea
          </Link>
          <Link
            to="/comunitate"
            className="px-7 py-3 text-neutral-600 font-semibold text-sm rounded-md hover:text-neutral-800 transition-colors duration-200"
          >
            <span className="border-b border-neutral-300 pb-px">Alătură-te</span>
          </Link>
        </div>
      </section>

      {/* ── Info band ── */}
      <section
        id="info-band"
        data-animate
        className={`border-t border-neutral-200 transition-all duration-700 ${
          isVisible('info-band')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-[880px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
          <div className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6">
            Despre Angioedemul Ereditar
          </div>
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
            <p className="text-[0.95rem] leading-[1.85] text-neutral-600">
              Angioedemul Ereditar (AEE) este o afecțiune genetică foarte rară și potențial fatală, care apare la aproximativ{' '}
              <strong className="text-neutral-800 font-bold">1 din 50.000 de persoane</strong>. Crizele pot fi severe, cu risc vital.
            </p>
            <p className="text-[0.95rem] leading-[1.85] text-neutral-600">
              Diagnostic întârziat cu o medie de{' '}
              <strong className="text-neutral-800 font-bold">13 ani</strong>, lipsa accesului rapid la tratament, și izolarea pacienților — acestea sunt problemele pe care HAERO le adresează.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="border-t border-neutral-200 bg-neutral-100">
        <div className="grid md:grid-cols-3">
          {[
            {
              id: 'pillar-suport',
              label: 'Suport',
              labelColor: 'text-primary-400',
              title: 'Ascultăm fiecare voce',
              text: 'Un cadru organizat în care pacienții pot să-și exprime ideile, experiențele, fricile și bucuriile.',
              delay: 0,
            },
            {
              id: 'pillar-informare',
              label: 'Informare',
              labelColor: 'text-accent-400',
              title: 'Reducem întârzierea diagnosticului',
              text: 'Informăm atât pacienții cât și medicii, facem cunoscută această boală rară.',
              delay: 100,
            },
            {
              id: 'pillar-comunitate',
              label: 'Comunitate',
              labelColor: 'text-secondary-400',
              title: 'Construim împreună',
              text: 'O comunitate în care încrederea primează, lucrând împreună pentru creșterea calității vieții.',
              delay: 200,
            },
          ].map((pillar, index) => (
            <div
              key={pillar.id}
              id={pillar.id}
              data-animate
              className={`py-12 px-6 sm:px-8 lg:px-10 ${
                index < 2 ? 'md:border-r border-b md:border-b-0 border-neutral-200' : ''
              } transition-all duration-700 ${
                isVisible(pillar.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${pillar.delay}ms` }}
            >
              <div className={`text-[0.65rem] font-bold uppercase tracking-[0.2em] ${pillar.labelColor} mb-4`}>
                {pillar.label}
              </div>
              <h3 className="font-playfair text-xl font-bold text-neutral-800 mb-3">
                {pillar.title}
              </h3>
              <p className="text-[0.9rem] leading-[1.8] text-neutral-600">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </section>

    </>
  );
};

export default Hero;
