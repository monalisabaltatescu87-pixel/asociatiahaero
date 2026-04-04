import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui';

const TermsAndConditions: React.FC = () => {
  return (
    <><SEO title="Termeni și Condiții" description="Termenii și condițiile de utilizare a site-ului Asociației HAERO." path="/termeni-si-conditii" />
      <section className="relative pt-28 pb-12 text-center overflow-hidden bg-gradient-to-b from-white to-neutral-50">
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(228,181,68,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[58px] font-bold leading-[1.1] text-neutral-800 mb-6 tracking-tight">
            Termeni și Condiții
          </h1>
          <p className="text-lg leading-[1.8] text-neutral-500 max-w-[560px] mx-auto">
            {'Bine ați venit pe site-ul Asociației HAERO (denumită în continuare \u201EAsociația\u201D sau \u201EOperatorul\u201D).'}
          </p>
        </div>
      </section>

      <section className="py-8 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="bordered" hover={false} className="p-8 sm:p-12 space-y-10">
            <p className="text-neutral-600">
              Utilizarea site-ului implică acceptarea termenilor și condițiilor descrise mai jos. Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați site-ul.
            </p>

            <div>
              <h3 className="text-xl font-bold text-primary-500 mb-3">1. Scopul site-ului</h3>
              <p className="text-neutral-600">
                Site-ul are rol informativ și permite persoanelor interesate să se înscrie în cadrul Asociației HAERO și să primească informații despre activitățile și proiectele asociației.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary-500 mb-3">2. Înscrierea în asociație</h3>
              <p className="text-neutral-600">
                Prin completarea formularelor de pe site, utilizatorii pot transmite informații necesare pentru evidența membrilor și persoanelor interesate de activitatea asociației.
              </p>
              <p className="text-neutral-600 mt-2">
                Utilizatorul declară că informațiile furnizate sunt corecte și actuale.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary-500 mb-3">3. Protecția datelor personale</h3>
              <p className="text-neutral-600">
                Datele personale sunt prelucrate în conformitate cu legislația aplicabilă privind protecția datelor și cu <Link to="/politica-confidentialitate" className="text-primary-500 hover:underline">Politica de Confidențialitate</Link> disponibilă pe site.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary-500 mb-3">4. Drepturi de proprietate intelectuală</h3>
              <p className="text-neutral-600">
                Conținutul site-ului (texte, imagini, logo-uri, materiale informative) este proprietatea Asociației HAERO sau este utilizat cu permisiunea titularilor de drepturi și este protejat de legislația privind drepturile de autor.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary-500 mb-3">5. Limitarea răspunderii</h3>
              <p className="text-neutral-600">
                Asociația depune eforturi pentru a asigura acuratețea informațiilor prezentate pe site, însă nu garantează că acestea sunt întotdeauna complete sau actualizate.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary-500 mb-3">6. Modificarea termenilor</h3>
              <p className="text-neutral-600">
                Asociația își rezervă dreptul de a modifica acești termeni și condiții în orice moment. Versiunea actualizată va fi publicată pe site.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary-500 mb-3">7. Legea aplicabilă</h3>
              <p className="text-neutral-600">
                Acești termeni sunt guvernați de legislația din România. Eventualele litigii vor fi soluționate de instanțele competente din România.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary-500 mb-3">8. Contact</h3>
              <p className="text-neutral-600">
                Pentru întrebări privind utilizarea site-ului sau acești termeni, ne puteți contacta la adresa de email: <a href="mailto:asociatia.haero@gmail.com" className="text-primary-500 hover:underline">asociatia.haero@gmail.com</a>.
              </p>
            </div>
          </Card>
        </div>
      </section>
  </>
  );
};

export default TermsAndConditions;
