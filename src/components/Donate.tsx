import React from 'react';

const Donate: React.FC = () => {
  return (
    <section id="doneaza" className="py-20 bg-haero-red">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Sprijină Cauza Noastră
        </h2>
        <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto">
          Fiecare donație ne aduce mai aproape de obiectivul nostru: o viață mai bună
          pentru pacienții cu Angioedem Ereditar din România.
        </p>

        <div className="bg-white rounded-2xl p-8 sm:p-10 text-left shadow-xl">
          <h3 className="text-xl font-bold text-haero-dark mb-6 text-center">
            Date pentru donație prin transfer bancar
          </h3>
          <div className="space-y-4 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-3 bg-gray-50 rounded-lg">
              <span className="font-semibold text-gray-700 sm:w-48 flex-shrink-0">Denumire:</span>
              <span className="text-gray-600">Asociația HAERO</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-3 bg-gray-50 rounded-lg">
              <span className="font-semibold text-gray-700 sm:w-48 flex-shrink-0">CIF:</span>
              <span className="text-gray-600">— Contactați-ne pentru detalii —</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-3 bg-gray-50 rounded-lg">
              <span className="font-semibold text-gray-700 sm:w-48 flex-shrink-0">IBAN (RON):</span>
              <span className="text-gray-600">— Contactați-ne pentru detalii —</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-3 bg-gray-50 rounded-lg">
              <span className="font-semibold text-gray-700 sm:w-48 flex-shrink-0">IBAN (EUR):</span>
              <span className="text-gray-600">— Contactați-ne pentru detalii —</span>
            </div>
          </div>

          <div className="bg-haero-yellow/10 rounded-xl p-6 text-center">
            <p className="text-haero-dark font-medium">
              Poți redirecționa <strong>3.5%</strong> din impozitul pe venit către asociația noastră!
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Contactează-ne pentru formularul 230.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
