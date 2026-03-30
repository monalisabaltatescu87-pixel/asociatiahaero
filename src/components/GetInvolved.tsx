import React from 'react';

const GetInvolved: React.FC = () => {
  return (
    <section id="implica-te" className="py-20 bg-gradient-to-br from-haero-red/5 via-haero-yellow/5 to-haero-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-haero-dark mb-4">
            Implică-te
          </h2>
          <div className="w-20 h-1 bg-haero-yellow mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Fiecare contribuție contează. Iată cum poți face diferența în viața
            pacienților cu HAE.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center">
            <div className="w-20 h-20 bg-haero-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-haero-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-haero-dark mb-3">Donează</h3>
            <p className="text-gray-600 mb-6">
              Donația ta ne ajută să continuăm activitățile de suport și informare
              pentru pacienții HAE.
            </p>
            <a
              href="#doneaza"
              className="inline-block bg-haero-red text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              Donează Acum
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center">
            <div className="w-20 h-20 bg-haero-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-haero-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-haero-dark mb-3">Voluntariat</h3>
            <p className="text-gray-600 mb-6">
              Devino voluntar și ajută-ne să organizăm evenimente, campanii de
              conștientizare și activități de suport.
            </p>
            <a
              href="#contact"
              className="inline-block bg-haero-yellow text-haero-dark px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors"
            >
              Devino Voluntar
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center">
            <div className="w-20 h-20 bg-haero-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-haero-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-haero-dark mb-3">Distribuie</h3>
            <p className="text-gray-600 mb-6">
              Ajută-ne să răspândim mesajul. Distribuie informații despre HAE
              în comunitatea ta.
            </p>
            <a
              href="#contact"
              className="inline-block bg-haero-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Află Mai Multe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
