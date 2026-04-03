import React from 'react';
import SEO from './SEO';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <>
      <SEO
        title="Acasă"
        description="Asociația HAERO militează pentru drepturile pacienților cu angioedem ereditar (HAE) din România — acces egal la tratament, informare și suport de calitate."
        path="/"
      />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-neutral-50 to-accent-50/30" />

        {/* Organic blobs */}
        <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] blob-primary opacity-50 animate-float" />
        <div className="absolute bottom-[20%] left-[5%] w-[350px] h-[350px] blob-accent opacity-40 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[60%] right-[30%] w-[200px] h-[200px] blob-secondary opacity-30 animate-float" style={{ animationDelay: '4s' }} />

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 pattern-dots opacity-40" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-up">
            <div className="relative">
              <Logo size={140} />
              <div className="absolute -inset-4 bg-primary-200/20 rounded-full blur-2xl -z-10" />
            </div>
          </div>

          {/* Trust badge */}
          <div className="animate-fade-up delay-100 opacity-0 mb-6">
            <span className="trust-badge">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 1l2.472 5.01L18 6.903l-4 3.896.944 5.507L10 13.507l-4.944 2.799L6 10.799l-4-3.896 5.528-.893L10 1z"
                  clipRule="evenodd"
                />
              </svg>
              Asociație pentru pacienți
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-800 mb-5 tracking-tight animate-fade-up delay-200 opacity-0 text-balance">
            Asociația{' '}
            <span className="relative inline-block">
              <span className="text-primary-500">HAERO</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 6c40-4 80-4 120-2s56 2 76 0" stroke="#e4b544" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-600 mb-4 font-semibold animate-fade-up delay-300 opacity-0">
            Asociația pentru Angioedem Ereditar
          </p>

          <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-400 opacity-0">
            O comunitate a cărei voce să devină vocea comună a tuturor pacienților
            cu această boală rară. Fiecare pacient cu angioedem ereditar are nevoie
            să se simtă înțeles, acceptat și motivat.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-500 opacity-0">
            <Link
              to="/despre"
              className="bg-primary-400 text-neutral-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-500 transition-all duration-300 shadow-raised hover:shadow-glow-primary hover:-translate-y-0.5 tracking-wide"
            >
              Descoperă Misiunea Noastră
            </Link>
            <Link
              to="/comunitate"
              className="bg-white/80 backdrop-blur-sm text-neutral-700 border-2 border-neutral-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-accent-400 hover:text-accent-600 transition-all duration-300 hover:-translate-y-0.5"
            >
              Alătură-te Comunității
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-14 flex flex-wrap justify-center gap-8 animate-fade-up delay-600 opacity-0">
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-semibold">Organizație legitimă</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Membru HAEi</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-semibold">Târgu-Mureș, România</span>
            </div>
          </div>
        </div>

        {/* Bottom wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H0Z"
              fill="#fdfcfa"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
