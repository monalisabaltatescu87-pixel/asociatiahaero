import React from 'react';

const TermeniSiConditii: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-haero-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-haero-dark mb-4">
              Termeni și <span className="text-haero-yellow-600">Condiții</span>
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-haero-gray-500 max-w-3xl mx-auto text-lg">
              Bine ați venit pe site-ul Asociației HAERO (denumită în continuare „Asociația" sau „Operatorul").
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-raised space-y-10">
            <p className="text-haero-gray-500">
              Utilizarea site-ului implică acceptarea termenilor și condițiilor descrise mai jos. Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați site-ul.
            </p>

            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">1. Scopul site-ului</h3>
              <p className="text-haero-gray-500">
                Site-ul are rol informativ și permite persoanelor interesate să se înscrie în cadrul Asociației HAERO și să primească informații despre activitățile și proiectele asociației.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">2. Înscrierea în asociație</h3>
              <p className="text-haero-gray-500">
                Prin completarea formularelor de pe site, utilizatorii pot transmite informații necesare pentru evidența membrilor și persoanelor interesate de activitatea asociației.
              </p>
              <p className="text-haero-gray-500 mt-2">
                Utilizatorul declară că informațiile furnizate sunt corecte și actuale.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">3. Protecția datelor personale</h3>
              <p className="text-haero-gray-500">
                Datele personale sunt prelucrate în conformitate cu legislația aplicabilă privind protecția datelor și cu <a href="#/politica-confidentialitate" className="text-haero-yellow-600 hover:underline">Politica de Confidențialitate</a> disponibilă pe site.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">4. Drepturi de proprietate intelectuală</h3>
              <p className="text-haero-gray-500">
                Conținutul site-ului (texte, imagini, logo-uri, materiale informative) este proprietatea Asociației HAERO sau este utilizat cu permisiunea titularilor de drepturi și este protejat de legislația privind drepturile de autor.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">5. Limitarea răspunderii</h3>
              <p className="text-haero-gray-500">
                Asociația depune eforturi pentru a asigura acuratețea informațiilor prezentate pe site, însă nu garantează că acestea sunt întotdeauna complete sau actualizate.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">6. Modificarea termenilor</h3>
              <p className="text-haero-gray-500">
                Asociația își rezervă dreptul de a modifica acești termeni și condiții în orice moment. Versiunea actualizată va fi publicată pe site.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">7. Legea aplicabilă</h3>
              <p className="text-haero-gray-500">
                Acești termeni sunt guvernați de legislația din România. Eventualele litigii vor fi soluționate de instanțele competente din România.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-3">8. Contact</h3>
              <p className="text-haero-gray-500">
                Pentru întrebări privind utilizarea site-ului sau acești termeni, ne puteți contacta la adresa de email: <a href="mailto:asociatia.haero@gmail.com" className="text-haero-yellow-600 hover:underline">asociatia.haero@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermeniSiConditii;
