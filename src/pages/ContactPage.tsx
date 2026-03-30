import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-haero-dark mb-4">
              Contactează-ne
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-haero-gray-500 max-w-2xl mx-auto text-lg">
              Dacă crezi că te identifici ca având simptomele specifice AEE sau ești
              medic și ai nevoie de informații mai exacte, te invităm să ne contactezi.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-haero-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-haero-dark mb-1">Email</h3>
                  <p className="text-haero-gray-500">asociatia.haero@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-haero-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-haero-dark mb-1">Telefon</h3>
                  <p className="text-haero-gray-500">+40 746 252 817</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-haero-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-haero-dark mb-1">Sediu</h3>
                  <p className="text-haero-gray-500">Târgu-Mureș, România</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-haero-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-haero-dark mb-1">Vicepreședinte</h3>
                  <p className="text-haero-gray-500">Ana Maria Bălțătescu</p>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-haero-gray-700 mb-1">
                    Nume
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-haero-gray-300 rounded-lg focus:ring-2 focus:ring-haero-yellow-700 focus:border-transparent outline-none bg-white transition-shadow"
                    placeholder="Numele tău"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-haero-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-haero-gray-300 rounded-lg focus:ring-2 focus:ring-haero-yellow-700 focus:border-transparent outline-none bg-white transition-shadow"
                    placeholder="email@exemplu.ro"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="locality" className="block text-sm font-semibold text-haero-gray-700 mb-1">
                    Localitate
                  </label>
                  <input
                    type="text"
                    id="locality"
                    className="w-full px-4 py-3 border border-haero-gray-300 rounded-lg focus:ring-2 focus:ring-haero-yellow-700 focus:border-transparent outline-none bg-white transition-shadow"
                    placeholder="Oraș sau sat"
                  />
                  <p className="text-xs text-haero-gray-500 mt-1">Nu este nevoie de adresa exactă, doar orașul sau satul.</p>
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-semibold text-haero-gray-700 mb-1">
                    Cine ești?
                  </label>
                  <select
                    id="category"
                    className="w-full px-4 py-3 border border-haero-gray-300 rounded-lg focus:ring-2 focus:ring-haero-yellow-700 focus:border-transparent outline-none bg-white transition-shadow"
                    defaultValue=""
                  >
                    <option value="" disabled>Selectează o opțiune</option>
                    <option value="pacient-diagnosticat">Pacient diagnosticat</option>
                    <option value="persoana-cu-simptome">Persoană cu simptome, nediagnosticată</option>
                    <option value="medic">Medic</option>
                    <option value="reprezentant-pharma">Reprezentant pharma</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-haero-gray-700 mb-1">
                  Subiect
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-haero-gray-300 rounded-lg focus:ring-2 focus:ring-haero-yellow-700 focus:border-transparent outline-none bg-white transition-shadow"
                  placeholder="Subiectul mesajului"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-haero-gray-700 mb-1">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-haero-gray-300 rounded-lg focus:ring-2 focus:ring-haero-yellow-700 focus:border-transparent outline-none resize-none bg-white transition-shadow"
                  placeholder="Scrie mesajul tău aici..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-haero-yellow text-haero-dark py-3 rounded-full font-bold hover:bg-haero-yellow-600 transition-all duration-200 shadow-raised hover:shadow-lifted text-lg"
              >
                Trimite Mesajul
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
