import React from 'react';

const About: React.FC = () => {
  return (
    <section id="despre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-haero-dark mb-4">
            Despre <span className="text-haero-red">HAEro</span>
          </h2>
          <div className="w-20 h-1 bg-haero-yellow mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            HAEro este o asociație non-guvernamentală dedicată sprijinirii pacienților
            cu Angioedem Ereditar (HAE) din România. Fondata din dorința de a crea o
            comunitate puternică, oferim resurse, informații și suport pentru cei afectați.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-haero-red/5 to-haero-red/10 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-haero-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-haero-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-haero-dark mb-3">Suport</h3>
            <p className="text-gray-600">
              Oferim suport emoțional și practic pacienților și familiilor afectate de HAE.
            </p>
          </div>

          <div className="bg-gradient-to-br from-haero-yellow/5 to-haero-yellow/10 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-haero-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-haero-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-haero-dark mb-3">Educație</h3>
            <p className="text-gray-600">
              Informăm publicul și comunitatea medicală despre Angioedermul Ereditar.
            </p>
          </div>

          <div className="bg-gradient-to-br from-haero-blue/5 to-haero-blue/10 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-haero-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-haero-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-haero-dark mb-3">Comunitate</h3>
            <p className="text-gray-600">
              Construim o rețea de sprijin pentru pacienții HAE și familiile lor din România.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
