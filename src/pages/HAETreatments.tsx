import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';

const HAETreatments: React.FC = () => {
  return (
    <><SEO title="Tratamente pentru Angioedem Ereditar" description="Opțiuni de tratament disponibile pentru angioedemul ereditar: tratament la cerere, profilaxie pe termen lung și scurt, și noi terapii." path="/cum-tratam-aee" /><div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-haero-yellow-50 via-haero-cream to-haero-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/ce-este-aee" className="text-haero-yellow-600 font-semibold text-sm hover:text-haero-yellow-700 transition-colors mb-4 inline-block">
              ← Care sunt simptomele AEE?
            </Link>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-haero-dark mb-4">
              Tratamente <span className="text-haero-yellow-600">disponibile</span>
            </h1>
            <div className="w-20 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-haero-gray-500 max-w-3xl mx-auto leading-relaxed">
              Managementul AEE se bazează pe două piloane terapeutice principale:
              tratamentul la cerere pentru controlul rapid al atacurilor acute și
              profilaxia pentru prevenirea episoadelor.
            </p>
          </div>
        </div>
      </section>

      {/* Important distinction */}
      <section className="py-12 bg-haero-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
            <p className="text-haero-gray-700 leading-relaxed font-medium">
              <strong>Important:</strong> Angioedermul din AEE <strong>nu răspunde</strong> la
              medicamentele utilizate în tratarea altor forme de urticarie/angioedem,
              cum ar fi antihistaminicele, adrenalina și corticosteroizii. Deși adrenalina
              poate avea un efect tranzitoriu asupra umflăturii, nu modifică evoluția
              unui atac.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="py-16 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Acute Treatment */}
            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-red">
              <h3 className="text-xl font-bold text-haero-dark mb-4">
                Tratamentul la cerere (acut)
              </h3>
              <p className="text-haero-gray-700 text-lg mb-4 leading-relaxed">
                Atacurile de AEE trebuie tratate cât mai devreme posibil. Tratamentul
                precoce cu concentrat de inhibitor C1 intravenos, ecallantide sau icatibant
                oferă un răspuns mai bun decât tratamentul tardiv, rezultând adesea un timp
                mai scurt până la ameliorarea completă a simptomelor.
              </p>
              <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
                Autoadministrarea și administrarea la domiciliu pot reduce timpul până la
                tratament, permițând administrarea medicamentului mai devreme în cursul
                unui atac. Aceasta permite o independență mai mare și un management mai
                fiabil al simptomelor AEE.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Concentrat de C1-INH derivat din plasmă</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Înlocuiește proteina lipsă sau disfuncțională prin administrare
                    intravenoasă. Toate concentratele de C1-INH sunt autorizate pentru
                    autoadministrare.
                  </p>
                </div>
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Icatibant</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Antagonist al receptorului B2 al bradikininei, administrat subcutanat.
                    Blochează acțiunea bradikininei, mediatorul principal al edemului.
                    Autorizat pentru autoadministrare.
                  </p>
                </div>
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">C1-INH recombinant</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Varianta recombinantă a inhibitorului C1, administrare intravenoasă.
                    Oferă o alternativă la produsele derivate din plasmă.
                  </p>
                </div>
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Ecallantide</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Inhibitor al kalicreinei plasmatice, administrat subcutanat.
                    Reduce producția de bradikinină prin inhibarea enzimei care o generează.
                  </p>
                </div>
                <div className="bg-haero-yellow-50 rounded-xl p-6 md:col-span-2">
                  <h4 className="font-bold text-haero-dark mb-2">Sebetralstat</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Primul și singurul tratament la cerere <strong>oral</strong> aprobat
                    pentru atacurile acute de AEE. Oferă o opțiune convenabilă fără
                    necesitatea injecțiilor.
                  </p>
                </div>
              </div>
            </div>

            {/* Long-term Prophylaxis */}
            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-yellow">
              <h3 className="text-xl font-bold text-haero-dark mb-4">
                Profilaxia pe termen lung (LTP)
              </h3>
              <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
                Profilaxia pe termen lung presupune utilizarea regulată de medicamente
                pentru a preveni apariția episoadelor de umflătură. Unele medicamente
                moderne de profilaxie fac ca pacienții cu AEE să nu mai experimenteze
                deloc episoade de umflătură.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Lanadelumab</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Inhibitor al kalicreinei plasmatice (anticorp monoclonal), administrat
                    subcutanat la fiecare 2 sau 4 săptămâni. Recomandat ca opțiune de
                    primă linie pentru profilaxia pe termen lung.
                  </p>
                </div>
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Berotralstat</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Inhibitor <strong>oral</strong> al kalicreinei plasmatice, administrat
                    zilnic sub formă de capsulă. Recomandat ca opțiune de primă linie
                    pentru profilaxie, fără necesitatea injecțiilor.
                  </p>
                </div>
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Concentrat de C1-INH subcutanat</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Administrare subcutanată regulată pentru menținerea unui nivel
                    constant de inhibitor C1 esterază în organism. Disponibil și în
                    formă intravenoasă.
                  </p>
                </div>
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Garadacimab</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Singura terapie aprobată care inhibă <strong>începutul cascadei AEE</strong> prin
                    țintirea factorului XII activat (FXIIa). Administrare subcutanată
                    o dată pe lună.
                  </p>
                </div>
                <div className="bg-haero-yellow-50 rounded-xl p-6 md:col-span-2">
                  <h4 className="font-bold text-haero-dark mb-2">Donidalorsen</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Prima și singura terapie profilactică <strong>bazată pe ARN</strong> pentru
                    AEE, oferind cel mai lung interval între doze — la fiecare 4 sau 8
                    săptămâni.
                  </p>
                </div>
              </div>
            </div>

            {/* Short-term Prophylaxis */}
            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-blue">
              <h3 className="text-xl font-bold text-haero-dark mb-4">
                Profilaxia pe termen scurt (STP)
              </h3>
              <p className="text-haero-gray-700 text-lg mb-4 leading-relaxed">
                Se administrează chiar înainte de o procedură chirurgicală sau
                stomatologică pentru a preveni un atac de AEE în timpul sau după
                procedură. Utilizarea concentratului de C1-INH intravenos derivat din
                plasmă este considerată tratamentul de elecție, administrat cât mai
                aproape posibil de începutul procedurii.
              </p>
              <p className="text-haero-gray-700 text-lg leading-relaxed">
                Pacienții care primesc tratament profilactic au în continuare nevoie de
                un plan de tratament la cerere eficient, în cazul în care profilaxia nu
                este 100% eficientă.
              </p>
            </div>

            {/* Emerging Therapies */}
            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-gray-300">
              <h3 className="text-xl font-bold text-haero-dark mb-4">
                Terapii emergente și viitoare
              </h3>
              <p className="text-haero-gray-700 text-lg leading-relaxed">
                Terapiile emergente — inclusiv noi agenți orali, anticorpi monoclonali,
                terapii ARN și abordări pioniere de editare genetică — continuă să
                evolueze, vizând simplificarea tratamentului și personalizarea îngrijirilor.
                Noile medicamente vor simplifica modul de administrare (oral versus
                parenteral), vor prelungi intervalul între administrări (până la 3-6 luni
                de eficacitate cu o singură administrare) și pot determina o vindecare
                definitivă a bolii prin manipulare genetică.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HAERO Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-haero-dark mb-6">
            Misiunea <span className="text-haero-yellow-600">HAERO</span>
          </h2>
          <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
            HAERO militează pentru accesul fiecărui pacient la tratament specific,
            individualizat, și pentru îmbunătățirea managementului bolii, în special
            în zona de profilaxie pe termen lung.
          </p>
          <p className="text-haero-gray-700 text-lg mb-8 leading-relaxed">
            Fiecare pacient cu AEE merită acces la tratamente moderne care îi permit
            să ducă o viață normală, fără teama episoadelor imprevizibile.
          </p>
          <Link
            to="/contact"
            className="bg-haero-yellow text-haero-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-haero-yellow-600 transition-all duration-200 shadow-lifted hover:shadow-floating hover:scale-[1.02] tracking-wide inline-block"
          >
            Contactează-ne
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/ce-cauzeaza-aee" className="text-haero-yellow-600 font-semibold hover:text-haero-yellow-700 transition-colors">
              ← Principalele cauze
            </Link>
            <Link to="/ce-este-aee" className="text-haero-yellow-600 font-semibold hover:text-haero-yellow-700 transition-colors sm:text-right">
              Înapoi la simptomele AEE →
            </Link>
          </div>
        </div>
      </section>

      {/* Source Attribution */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-haero-gray-500 text-sm">
            Informații bazate pe date de la{' '}
            <a href="https://haei.org/what-is-hae/treatment/" target="_blank" rel="noopener noreferrer" className="text-haero-yellow-600 hover:text-haero-yellow-700 underline">
              HAE International (HAEi)
            </a>
            {', '}
            <a href="https://www.haea.org/pages/p/treatments" target="_blank" rel="noopener noreferrer" className="text-haero-yellow-600 hover:text-haero-yellow-700 underline">
              US HAEA
            </a>
            {' și '}
            <a href="https://emedicine.medscape.com/article/135604-treatment" target="_blank" rel="noopener noreferrer" className="text-haero-yellow-600 hover:text-haero-yellow-700 underline">
              Medscape
            </a>.
          </p>
        </div>
      </section>
    </div>
  </>
  );
};

export default HAETreatments;
