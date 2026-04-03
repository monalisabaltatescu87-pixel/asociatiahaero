import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';

const AEEChildren: React.FC = () => {
  return (
    <><SEO title="AEE și Copiii" description="Informații despre angioedemul ereditar la copii: testare, debutul simptomelor, opțiuni de tratament pediatric." path="/aee-si-copiii" /><div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-haero-yellow-50 via-haero-cream to-haero-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/ce-este-aee" className="text-haero-yellow-600 font-semibold text-sm hover:text-haero-yellow-700 transition-colors mb-4 inline-block">
              ← Ce este AEE?
            </Link>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-haero-dark mb-4">
              AEE și <span className="text-haero-yellow-600">copiii</span>
            </h1>
            <div className="w-20 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-haero-gray-500 max-w-3xl mx-auto leading-relaxed">
              Defectul genetic care cauzează AEE este ereditar. Copiii unui părinte
              cu AEE au 50% șanse să moștenească afecțiunea.
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistic Callout */}
      <section className="py-12 bg-haero-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-haero-yellow-50 rounded-2xl p-6 border border-haero-yellow-200">
            <p className="text-haero-gray-700 leading-relaxed font-medium text-center text-lg">
              Copiii unui părinte cu AEE au <strong>50% șanse</strong> să moștenească
              afecțiunea. Testarea timpurie și un plan de tratament individualizat
              sunt esențiale.
            </p>
          </div>
        </div>
      </section>

      {/* Testing Section */}
      <section className="py-16 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-haero-dark mb-6">
                Testarea este <span className="text-haero-yellow-600">esențială</span>
              </h2>
              <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
                Odată ce o persoană este diagnosticată, experții recomandă ca toți
                membrii familiei apropiate (părinți, frați și copii) să fie testați
                pentru AEE.
              </p>
              <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
                Testarea pentru AEE este posibilă în primul an de viață, cu toate
                acestea, unii medici recomandă să așteptați până când copilul are
                cel puțin un (1) an înainte de testare. Aceasta se datorează
                nivelurilor foarte variabile de C1 antigenic și C4 în primul an de
                viață.
              </p>
              <p className="text-haero-gray-700 text-lg leading-relaxed">
                Testarea precoce permite părinților sau tutorilor legali să
                colaboreze în avans cu medicul copilului pentru a crea un plan de
                tratament individualizat.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow">
                <h3 className="font-bold text-haero-dark mb-3 text-lg">Cine trebuie testat?</h3>
                <p className="text-haero-gray-500 leading-relaxed">
                  Toți membrii familiei apropiate: <strong>părinți, frați și copii</strong> ai
                  persoanei diagnosticate cu AEE.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow-600">
                <h3 className="font-bold text-haero-dark mb-3 text-lg">Când se poate testa?</h3>
                <p className="text-haero-gray-500 leading-relaxed">
                  Testarea este posibilă din primul an de viață, dar se recomandă
                  așteptarea până la <strong>cel puțin 1 an</strong> din cauza
                  nivelurilor variabile de C1 antigenic și C4.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow-700">
                <h3 className="font-bold text-haero-dark mb-3 text-lg">De ce contează testarea precoce?</h3>
                <p className="text-haero-gray-500 leading-relaxed">
                  Permite crearea unui <strong>plan de tratament individualizat</strong> în
                  avans, în colaborare cu medicul copilului.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptom Onset */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-haero-dark mb-4">
              Debutul <span className="text-haero-yellow-600">simptomelor</span>
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto"></div>
          </div>

          <p className="text-haero-gray-700 text-lg mb-8 leading-relaxed">
            Vârsta de debut variază considerabil. Majoritatea persoanelor cu AEE
            au experimentat simptome sau primul atac înainte de vârsta de 18 ani.
            Pare să existe o frecvență crescută a atacurilor în timpul pubertății
            sau adolescenței.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-haero-yellow-50 rounded-2xl p-6 border border-haero-yellow-200 text-center">
              <p className="text-4xl font-extrabold text-haero-yellow-600 mb-2">50%</p>
              <p className="text-haero-gray-700 leading-relaxed font-medium">
                dintre persoanele cu AEE raportează primele simptome
                până la <strong>vârsta de 10 ani</strong>
              </p>
            </div>
            <div className="bg-haero-yellow-50 rounded-2xl p-6 border border-haero-yellow-200 text-center">
              <p className="text-4xl font-extrabold text-haero-yellow-600 mb-2">&lt;18 ani</p>
              <p className="text-haero-gray-700 leading-relaxed font-medium">
                Majoritatea pacienților au experimentat <strong>primul atac</strong> înainte
                de vârsta adultă
              </p>
            </div>
          </div>

          <div className="bg-haero-yellow-50 rounded-2xl p-6 border border-haero-yellow-200">
            <p className="text-haero-gray-700 leading-relaxed font-medium">
              <strong>Important:</strong> Pare să existe o frecvență crescută a
              atacurilor în timpul <strong>pubertății sau adolescenței</strong>,
              ceea ce subliniază importanța unui diagnostic și plan de tratament
              stabilite cât mai devreme posibil.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Section */}
      <section className="py-16 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-haero-dark mb-4">
              Tratamentul AEE <span className="text-haero-yellow-600">la copii</span>
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-haero-gray-500 max-w-3xl mx-auto leading-relaxed">
              Similar cu adulții, toți pacienții pediatrici cu AEE ar trebui să
              aibă un plan de gestionare a bolii, inclusiv un plan de acțiune
              terapeutică, împreună cu medicul lor.
            </p>
          </div>

          <div className="space-y-8">
            {/* Acute Treatment for Children */}
            <div className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow">
              <h3 className="text-xl font-bold text-haero-dark mb-4">
                Terapii disponibile pentru copii și adolescenți
              </h3>
              <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
                Tratamentul la cerere pentru atacuri acute la pacienții pediatrici
                include următoarele opțiuni:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Concentrat de C1-inhibitor</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Produse din plasmă sanguină (pdC1-inhibitor) și produse
                    recombinante (rhC1-inhibitor). Înlocuiește proteina lipsă
                    sau disfuncțională.
                  </p>
                </div>
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Icatibant</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Antagonist al receptorilor de bradikinină. Blochează acțiunea
                    bradikininei, mediatorul principal al edemului.
                  </p>
                </div>
                <div className="bg-haero-yellow-50 rounded-xl p-6 md:col-span-2">
                  <h4 className="font-bold text-haero-dark mb-2">Alternative</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Dacă tratamentele specifice nu sunt disponibile: plasma tratată
                    cu solvent-detergent (SDP) sau plasma proaspătă congelată (FFP)
                    pot fi utilizate.
                  </p>
                </div>
              </div>
            </div>

            {/* Long-term Prophylaxis for Children */}
            <div className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow-600">
              <h3 className="text-xl font-bold text-haero-dark mb-4">
                Profilaxie pe termen lung (PTL) la copii
              </h3>
              <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
                Opțiunile de profilaxie pe termen lung la copii reflectă în general
                opțiunile disponibile pentru adulți.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Concentrat de C1-inhibitor</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Prima opțiune pentru profilaxia pe termen lung la copii,
                    similar cu recomandările pentru adulți.
                  </p>
                </div>
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Antifibrinolitice (acid tranexamic)</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Dacă concentratul de C1-inhibitor nu este disponibil,
                    antifibrinoliticele pot fi utilizate ca alternativă.
                  </p>
                </div>
              </div>
              <div className="bg-haero-yellow-50 rounded-2xl p-6 border border-haero-yellow-200 mt-6">
                <p className="text-haero-gray-700 leading-relaxed font-medium">
                  <strong>De reținut:</strong> PTL cu antifibrinolitice este
                  preferată în locul androgenilor la copii, datorită unui
                  <strong> profil de siguranță mai bun</strong>.
                </p>
              </div>
            </div>

            {/* Short-term Prophylaxis for Children */}
            <div className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow-700">
              <h3 className="text-xl font-bold text-haero-dark mb-4">
                Profilaxie pe termen scurt la copii
              </h3>
              <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
                Profilaxia pe termen scurt se administrează înainte de proceduri
                chirurgicale sau stomatologice pentru a preveni atacurile.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Concentrat de C1-inhibitor</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Opțiunea preferată pentru profilaxia pe termen scurt la
                    pacienții pediatrici.
                  </p>
                </div>
                <div className="bg-haero-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-haero-dark mb-2">Androgeni atenuați</h4>
                  <p className="text-haero-gray-500 text-sm leading-relaxed">
                    Alternativă pentru profilaxia pe termen scurt, atunci când
                    concentratul de C1-inhibitor nu este disponibil.
                  </p>
                </div>
              </div>
              <div className="bg-haero-yellow-50 rounded-2xl p-6 border border-haero-yellow-200 mt-6">
                <p className="text-haero-gray-700 leading-relaxed font-medium">
                  <strong>Important:</strong> Tratamentul la cerere trebuie să fie
                  întotdeauna <strong>disponibil pe parcursul procedurii</strong>,
                  indiferent de profilaxia administrată.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/diagnosticarea-aee" className="text-haero-yellow-600 font-semibold hover:text-haero-yellow-700 transition-colors">
              ← Diagnosticarea AEE
            </Link>
            <Link to="/femei-si-sarcina" className="text-haero-yellow-600 font-semibold hover:text-haero-yellow-700 transition-colors sm:text-right">
              Femei și sarcina →
            </Link>
          </div>
        </div>
      </section>

      {/* Source Attribution */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-haero-gray-500 text-sm">
            Informații bazate pe date de la{' '}
            <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-haero-yellow-600 hover:text-haero-yellow-700 underline">
              HAE International (HAEi)
            </a>.
          </p>
        </div>
      </section>
    </div>
  </>
  );
};

export default AEEChildren;
