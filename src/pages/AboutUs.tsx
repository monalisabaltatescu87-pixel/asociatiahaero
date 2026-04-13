import SEO from '../components/SEO';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, BookOpen, Users, ArrowRight } from 'lucide-react';

const AboutUs: React.FC = () => {
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
        title="Despre Noi"
        description="Află cine suntem și ce ne motivează. HAERO oferă suport, informare și comunitate pacienților cu angioedem ereditar din România."
        path="/despre"
      />

      <div>
        {/* ── Hero ── */}
        <section className="relative pt-28 pb-20 text-center overflow-hidden bg-gradient-to-b from-white to-neutral-50">
          {/* Warm radial glow */}
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(228,181,68,0.06)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[58px] font-bold leading-[1.1] text-neutral-800 mb-6 tracking-tight">
              Despre HAERO
            </h1>

            <p className="text-lg leading-[1.8] text-neutral-500 max-w-[520px] mx-auto">
              O asociație născută din dorința de a uni pacienții cu Angioedem Ereditar din România într-o singură voce.
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

            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-5">
              Cine suntem
            </h2>

            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-4">
              HAERO este o asociație non-guvernamentală înființată la Târgu-Mureș din dorința de a crea{' '}
              <strong className="text-neutral-800">
                o comunitate a pacienților cu Angioedem Ereditar din România
              </strong>
              , o comunitate a cărei voce să devină vocea comună a tuturor pacienților cu această boală rară.
            </p>

            <p className="text-[17px] leading-[1.85] text-neutral-600">
              Am pornit de la o convingere simplă: nimeni nu ar trebui să se confrunte singur cu o boală rară.
            </p>
          </div>
        </section>

        {/* ── Story Spine — Three Pillars ── */}
        <section className="py-8 pb-12 bg-white">
          <div className="story-spine max-w-[720px] mx-auto px-4 sm:px-6 relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary-300 via-neutral-200 to-transparent" />

            {/* Pillar 1 — left */}
            <div
              id="pillar-1"
              data-animate
              className={`relative py-10 transition-all duration-700 delay-100 ${
                isVisible('pillar-1')
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              {/* Dot on spine */}
              <div className="hidden md:flex absolute top-12 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-[3px] border-primary-400 z-10" />

              <div className="md:w-[calc(50%-40px)] md:mr-auto group">
                <div className="p-7 bg-neutral-50 rounded-[20px] transition-all duration-300 group-hover:bg-neutral-100 group-hover:-translate-y-0.5 group-hover:shadow-lifted">
                  <div className="w-12 h-12 rounded-[14px] bg-primary-50 border-2 border-primary-200 flex items-center justify-center mb-4">
                    <Heart size={22} strokeWidth={1.5} className="text-primary-500" />
                  </div>
                  <h3 className="text-lg font-extrabold text-neutral-800 mb-2">Suport</h3>
                  <p className="text-[15px] leading-relaxed text-neutral-500">
                    Reprezintăm un cadru organizat în care pacienții pot să-și exprime ideile, experiențele, fricile și bucuriile. Povestea ta merită să fie ascultată.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 — right */}
            <div
              id="pillar-2"
              data-animate
              className={`relative py-10 transition-all duration-700 delay-200 ${
                isVisible('pillar-2')
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="hidden md:flex absolute top-12 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-[3px] border-primary-400 z-10" />

              <div className="md:w-[calc(50%-40px)] md:ml-auto group">
                <div className="p-7 bg-neutral-50 rounded-[20px] transition-all duration-300 group-hover:bg-neutral-100 group-hover:-translate-y-0.5 group-hover:shadow-lifted">
                  <div className="w-12 h-12 rounded-[14px] bg-secondary-50 border-2 border-secondary-200 flex items-center justify-center mb-4">
                    <BookOpen size={22} strokeWidth={1.5} className="text-secondary-400" />
                  </div>
                  <h3 className="text-lg font-extrabold text-neutral-800 mb-2">Informare</h3>
                  <p className="text-[15px] leading-relaxed text-neutral-500">
                    Ne propunem să informăm atât pacienții cât și medicii, să facem cunoscută această boală rară, întrucât riscul unui diagnostic greșit sau tardiv poate fi fatal.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 — left */}
            <div
              id="pillar-3"
              data-animate
              className={`relative py-10 transition-all duration-700 delay-300 ${
                isVisible('pillar-3')
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="hidden md:flex absolute top-12 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-[3px] border-primary-400 z-10" />

              <div className="md:w-[calc(50%-40px)] md:mr-auto group">
                <div className="p-7 bg-neutral-50 rounded-[20px] transition-all duration-300 group-hover:bg-neutral-100 group-hover:-translate-y-0.5 group-hover:shadow-lifted">
                  <div className="w-12 h-12 rounded-[14px] bg-accent-50 border-2 border-accent-200 flex items-center justify-center mb-4">
                    <Users size={22} strokeWidth={1.5} className="text-accent-500" />
                  </div>
                  <h3 className="text-lg font-extrabold text-neutral-800 mb-2">Comunitate</h3>
                  <p className="text-[15px] leading-relaxed text-neutral-500">
                    Creștem o comunitate în care încrederea primează, lucrând împreună pentru creșterea calității vieții pacienților cu angioedem ereditar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Navigation CTA ── */}
        <section
          id="cta-nav"
          data-animate
          className={`py-10 pb-14 bg-white transition-all duration-700 ${
            isVisible('cta-nav')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex justify-center gap-3 flex-wrap px-4">
            {[
              { to: '/misiune', label: 'Misiunea noastră' },
              { to: '/ce-este-aee', label: 'Ce este AEE' },
              { to: '/comunitate', label: 'Comunitate' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="group inline-flex items-center gap-2 px-6 py-3.5 border border-neutral-200 rounded-xl text-sm font-semibold text-neutral-700 transition-all duration-200 hover:border-primary-300 hover:bg-primary-50 hover:text-neutral-800"
              >
                {label}
                <ArrowRight
                  size={15}
                  className="text-primary-500 transition-transform duration-200 group-hover:translate-x-0.5"
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
