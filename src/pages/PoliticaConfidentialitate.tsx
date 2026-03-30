import React from 'react';

const PoliticaConfidentialitate: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-haero-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-haero-dark mb-4">
              Politica de <span className="text-haero-yellow-600">Confidențialitate</span>
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-haero-gray-500 max-w-3xl mx-auto text-lg">
              Această politică explică modul în care Asociația HAERO colectează și utilizează datele personale ale utilizatorilor site-ului.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-raised space-y-10">
            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">1. Operatorul de date</h3>
              <p className="text-haero-gray-500">
                Operatorul datelor personale este Asociația HAERO.
              </p>
              <p className="text-haero-gray-500 mt-2">
                Pentru orice solicitare privind datele personale ne puteți contacta la: Email: <a href="mailto:asociatia.haero@gmail.com" className="text-haero-yellow-600 hover:underline">asociatia.haero@gmail.com</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">2. Ce date colectăm</h3>
              <p className="text-haero-gray-500 mb-3">
                Prin intermediul formularelor de pe site colectăm următoarele date personale:
              </p>
              <ul className="list-disc list-inside text-haero-gray-500 space-y-1 ml-4">
                <li>nume și prenume</li>
                <li>adresa de email</li>
                <li>număr de telefon</li>
                <li>adresa dacă este furnizată</li>
              </ul>
              <p className="text-haero-gray-500 mt-3">
                Aceste date sunt furnizate voluntar de utilizatori.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">3. Scopul colectării datelor</h3>
              <p className="text-haero-gray-500 mb-3">
                Datele sunt colectate exclusiv pentru:
              </p>
              <ul className="list-disc list-inside text-haero-gray-500 space-y-1 ml-4">
                <li>evidența persoanelor înscrise în asociație</li>
                <li>comunicarea cu membrii și persoanele interesate</li>
                <li>transmiterea de informații despre activitatea asociației</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">4. Temeiul legal al prelucrării</h3>
              <p className="text-haero-gray-500 mb-3">
                Prelucrarea datelor se bazează pe:
              </p>
              <ul className="list-disc list-inside text-haero-gray-500 space-y-1 ml-4">
                <li>consimțământul persoanei vizate</li>
                <li>interesul legitim al asociației de a gestiona evidența membrilor</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">5. Partajarea datelor</h3>
              <p className="text-haero-gray-500">
                Asociația HAERO nu vinde, nu transferă și nu distribuie datele personale către terțe părți.
              </p>
              <p className="text-haero-gray-500 mt-2">
                Datele sunt utilizate exclusiv pentru activitățile interne ale asociației.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">6. Durata stocării datelor</h3>
              <p className="text-haero-gray-500">
                Datele personale sunt păstrate doar atât timp cât este necesar pentru scopurile pentru care au fost colectate sau până la retragerea consimțământului.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">7. Drepturile utilizatorilor</h3>
              <p className="text-haero-gray-500 mb-3">
                Conform legislației privind protecția datelor, aveți următoarele drepturi:
              </p>
              <ul className="list-disc list-inside text-haero-gray-500 space-y-1 ml-4">
                <li>dreptul de acces la date</li>
                <li>dreptul de rectificare</li>
                <li>dreptul de ștergere („dreptul de a fi uitat")</li>
                <li>dreptul de restricționare a prelucrării</li>
                <li>dreptul de opoziție</li>
                <li>dreptul de portabilitate a datelor</li>
              </ul>
              <p className="text-haero-gray-500 mt-3">
                Pentru exercitarea acestor drepturi ne puteți contacta la adresa de email menționată mai sus.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">8. Securitatea datelor</h3>
              <p className="text-haero-gray-500">
                Asociația HAERO implementează măsuri tehnice și organizatorice pentru protejarea datelor personale împotriva accesului neautorizat, pierderii sau modificării.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">9. Modificarea politicii</h3>
              <p className="text-haero-gray-500">
                Ne rezervăm dreptul de a actualiza această politică de confidențialitate. Versiunea actualizată va fi publicată pe site.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">10. Autoritatea de supraveghere</h3>
              <p className="text-haero-gray-500">
                Dacă considerați că drepturile dumneavoastră privind protecția datelor au fost încălcate, puteți depune o plângere la:
              </p>
              <p className="text-haero-gray-500 mt-2 font-medium">
                Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoliticaConfidentialitate;
