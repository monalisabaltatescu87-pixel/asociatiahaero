import React from 'react';
import SEO from './SEO';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Star } from 'lucide-react';

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
              <Star size={14} fill="currentColor" />
              Asociație pentru pacienți
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-800 mb-5 tracking-tight animate-fade-up delay-200 opacity-0 text-balance">
            Asociația{' '}
            <span className="relative inline-block">
              HAERO
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
              className="bg-white/80 backdrop-blur-sm text-neutral-700 border-2 border-neutral-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-primary-300 hover:text-primary-600 transition-all duration-300 hover:-translate-y-0.5"
            >
              Alătură-te Comunității
            </Link>
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
