import React from 'react';
import SEO from './SEO';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <><SEO title="Acasă" description="Asociația HAERO militează pentru drepturile pacienților cu angioedem ereditar (HAE) din România — acces egal la tratament, informare și suport de calitate." path="/" /><section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-haero-yellow-50 via-haero-cream to-haero-yellow-100 pt-20">
      {/* Decorative blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-haero-yellow-200 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-haero-yellow-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <Logo size={160} />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-haero-dark mb-4 tracking-tight">
          Asociația <span className="text-haero-yellow-600">HAERO</span>
        </h1>
        <p className="text-xl sm:text-2xl text-haero-gray-700 mb-4 font-semibold">
          Asociația pentru Angioedem Ereditar
        </p>
        <p className="text-lg text-haero-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          O comunitate a cărei voce să devină vocea comună a tuturor pacienților
          cu această boală rară. Fiecare pacient cu angioedem ereditar are nevoie
          să se simtă înțeles, acceptat și motivat.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/despre"
            className="bg-haero-yellow text-haero-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-haero-yellow-600 transition-all duration-200 shadow-lifted hover:shadow-floating hover:scale-[1.02] tracking-wide"
          >
            Descoperă Misiunea Noastră
          </Link>
          <Link
            to="/comunitate"
            className="bg-transparent text-haero-dark border-2 border-haero-yellow px-8 py-4 rounded-full text-lg font-semibold hover:bg-haero-yellow-50 transition-all duration-200"
          >
            Alătură-te Comunității
          </Link>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#FFFEF5"
          />
        </svg>
      </div>
    </section></>
  );
};

export default Hero;
