import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-haero-yellow/10 via-white to-haero-blue/10 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <Logo size={160} />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-haero-dark mb-4">
          Asociația <span className="text-haero-red">HAERO</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-4">
          Asociația pentru Angioedem Ereditar
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          O comunitate a cărei voce să devină vocea comună a tuturor pacienților
          cu această boală rară. Fiecare pacient cu angioedem ereditar are nevoie
          să se simtă înțeles, acceptat și motivat.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#despre"
            className="bg-haero-red text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
          >
            Descoperă Misiunea Noastră
          </a>
          <a
            href="#comunitate"
            className="bg-white text-haero-red border-2 border-haero-red px-8 py-4 rounded-full text-lg font-semibold hover:bg-haero-red hover:text-white transition-colors"
          >
            Alătură-te Comunității
          </a>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
