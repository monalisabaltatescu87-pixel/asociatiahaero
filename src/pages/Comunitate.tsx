import React from 'react';
import { Link } from 'react-router-dom';

const Comunitate: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-haero-yellow-50 via-haero-yellow-100/50 to-haero-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-haero-dark mb-4">
              Comunitate
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-haero-gray-500 max-w-3xl mx-auto text-lg">
              În această călătorie, responsabilitatea poate fi egal împărțită între toți
              cei care doresc să se implice. Fie că ești pacient sau cunoști pe cineva
              diagnosticat cu această boală rară, povestea ta merită să fie ascultată.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-raised hover:shadow-lifted transition-all duration-200 hover:-translate-y-0.5 text-center border-t-4 border-haero-yellow">
              <div className="w-20 h-20 bg-haero-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">Grupul de Facebook</h3>
              <p className="text-haero-gray-500 mb-6">
                Am creat un grup de Facebook în care pacienții și aparținătorii pot comunica
                deschis, pot pune întrebări și pot primi răspunsuri de la persoane care au
                parte de experiențe asemănătoare.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-haero-yellow text-haero-dark px-6 py-3 rounded-full font-bold hover:bg-haero-yellow-600 transition-all duration-200 shadow-raised hover:shadow-lifted"
              >
                Alătură-te
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-raised hover:shadow-lifted transition-all duration-200 hover:-translate-y-0.5 text-center border-t-4 border-haero-yellow">
              <div className="w-20 h-20 bg-haero-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">Distribuie</h3>
              <p className="text-haero-gray-500 mb-6">
                Ajută-ne să facem cunoscută această boală rară. Dacă crezi că te identifici
                cu simptomele specifice AEE sau ești medic și ai nevoie de informații,
                te invităm să ne contactezi.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-transparent text-haero-dark border-2 border-haero-yellow px-6 py-3 rounded-full font-bold hover:bg-haero-yellow-50 transition-all duration-200"
              >
                Contactează-ne
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comunitate;
