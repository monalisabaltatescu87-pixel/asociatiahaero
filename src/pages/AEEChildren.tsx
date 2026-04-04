import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Clock, HeartPulse } from 'lucide-react';
import { PageHero, SectionHeader, Callout } from '../components/ui';
import SEO from '../components/SEO';

const testingItems = [
  {
    icon: Users,
    title: 'Cine trebuie testat?',
    description:
      'Toți membrii familiei apropiate: părinți, frați și copii ai persoanei diagnosticate cu AEE.',
    iconBg: 'bg-secondary-50',
    iconColor: 'text-secondary-500',
  },
  {
    icon: Clock,
    title: 'Când se poate testa?',
    description:
      'Testarea este posibilă din primul an de viață, dar se recomandă așteptarea până la cel puțin 1 an din cauza nivelurilor variabile de C1 antigenic și C4.',
    iconBg: 'bg-accent-50',
    iconColor: 'text-accent-500',
  },
  {
    icon: HeartPulse,
    title: 'De ce contează testarea precoce?',
    description:
      'Permite crearea unui plan de tratament individualizat în avans, în colaborare cu medicul copilului.',
    iconBg: 'bg-secondary-50',
    iconColor: 'text-secondary-500',
  },
];

const AEEChildren: React.FC = () => {
  return (
    <>
      <SEO
        title="AEE și Copiii"
        description="Informații despre angioedemul ereditar la copii: testare, debutul simptomelor, opțiuni de tratament pediatric."
        path="/aee-si-copiii"
      />

      <div>
        {/* Hero */}
        <PageHero
          variant="reader"
          backLink="/ce-este-aee"
          backLabel="Despre AEE"
          title="AEE și copiii"
          description="Defectul genetic care cauzează AEE este ereditar. Copiii unui părinte cu AEE au 50% șanse să moștenească afecțiunea."
        />

        {/* Key Statistic Callout */}
        <section className="py-8 bg-white">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <Callout variant="info">
              <p className="text-lg font-medium leading-relaxed">
                Copiii unui părinte cu AEE au <strong>50% șanse</strong> să moștenească
                afecțiunea. Testarea timpurie și un plan de tratament individualizat
                sunt esențiale.
              </p>
            </Callout>
          </div>
        </section>

        {/* Testing Section */}
        <section className="py-8 bg-white">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              reader={true}
              title="Testarea este esențială"
            />

            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-6">
              Odată ce o persoană este diagnosticată, experții recomandă ca toți
              membrii familiei apropiate (<strong className="text-neutral-800 font-bold">părinți, frați și copii</strong>) să fie testați
              pentru AEE.
            </p>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-6">
              Testarea pentru AEE este posibilă în primul an de viață, cu toate
              acestea, unii medici recomandă să așteptați până când copilul are
              cel puțin un (1) an înainte de testare. Aceasta se datorează
              nivelurilor foarte variabile de C1 antigenic și C4 în primul an de
              viață.
            </p>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-10">
              Testarea precoce permite părinților sau tutorilor legali să
              colaboreze în avans cu medicul copilului pentru a crea un plan de
              tratament individualizat.
            </p>

            {/* Testing Info Items — stacked rows */}
            <div className="space-y-4">
              {testingItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors"
                  >
                    <div
                      className={`flex-shrink-0 w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center`}
                    >
                      <Icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-800 mb-1 text-[17px]">
                        {item.title}
                      </h3>
                      <p className="text-[17px] leading-[1.85] text-neutral-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Symptom Onset */}
        <section className="py-8 bg-white">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              reader={true}
              title="Debutul simptomelor"
            />

            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-8">
              Vârsta de debut variază considerabil. Majoritatea persoanelor cu AEE
              au experimentat simptome sau primul atac înainte de vârsta de 18 ani.
              Pare să existe o frecvență crescută a atacurilor în timpul pubertății
              sau adolescenței.
            </p>

            {/* Stat Cards — side by side in neutral-50 container */}
            <div className="bg-neutral-50 rounded-2xl p-6 mb-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-extrabold text-primary-500 mb-2">50%</p>
                  <p className="text-[17px] leading-[1.85] text-neutral-600">
                    dintre persoanele cu AEE raportează primele simptome
                    până la <strong className="text-neutral-800 font-bold">vârsta de 10 ani</strong>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-extrabold text-primary-500 mb-2">&lt;18 ani</p>
                  <p className="text-[17px] leading-[1.85] text-neutral-600">
                    Majoritatea pacienților au experimentat <strong className="text-neutral-800 font-bold">primul atac</strong> înainte
                    de vârsta adultă
                  </p>
                </div>
              </div>
            </div>

            <Callout variant="warning" title="Important">
              <p className="leading-relaxed font-medium">
                Pare să existe o frecvență crescută a
                atacurilor în timpul <strong>pubertății sau adolescenței</strong>,
                ceea ce subliniază importanța unui diagnostic și plan de tratament
                stabilite cât mai devreme posibil.
              </p>
            </Callout>
          </div>
        </section>

        {/* Treatment Section */}
        <section className="py-8 bg-white">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              reader={true}
              title="Tratamentul AEE la copii"
              description="Similar cu adulții, toți pacienții pediatrici cu AEE ar trebui să aibă un plan de gestionare a bolii, inclusiv un plan de acțiune terapeutică, împreună cu medicul lor."
            />

            <div className="space-y-10 mt-8">
              {/* Acute Treatment */}
              <div>
                <h3 className="font-bold text-neutral-800 text-lg mb-3">
                  Terapii disponibile pentru copii și adolescenți
                </h3>
                <p className="text-[17px] leading-[1.85] text-neutral-600 mb-5">
                  Tratamentul la cerere pentru atacuri acute la pacienții pediatrici
                  include următoarele opțiuni:
                </p>
                <div className="space-y-3">
                  <div className="bg-white border border-neutral-200 rounded-2xl p-5">
                    <h4 className="font-bold text-neutral-800 mb-1">Concentrat de C1-inhibitor</h4>
                    <p className="text-[15px] leading-[1.85] text-neutral-600">
                      Produse din plasmă sanguină (pdC1-inhibitor) și produse
                      recombinante (rhC1-inhibitor). Înlocuiește proteina lipsă
                      sau disfuncțională.
                    </p>
                  </div>
                  <div className="bg-white border border-neutral-200 rounded-2xl p-5">
                    <h4 className="font-bold text-neutral-800 mb-1">Icatibant</h4>
                    <p className="text-[15px] leading-[1.85] text-neutral-600">
                      Antagonist al receptorilor de bradikinină. Blochează acțiunea
                      bradikininei, mediatorul principal al edemului.
                    </p>
                  </div>
                  <div className="bg-white border border-neutral-200 rounded-2xl p-5">
                    <h4 className="font-bold text-neutral-800 mb-1">Alternative</h4>
                    <p className="text-[15px] leading-[1.85] text-neutral-600">
                      Dacă tratamentele specifice nu sunt disponibile: plasma tratată
                      cu solvent-detergent (SDP) sau plasma proaspătă congelată (FFP)
                      pot fi utilizate.
                    </p>
                  </div>
                </div>
              </div>

              {/* Long-term Prophylaxis */}
              <div>
                <h3 className="font-bold text-neutral-800 text-lg mb-3">
                  Profilaxie pe termen lung (PTL) la copii
                </h3>
                <p className="text-[17px] leading-[1.85] text-neutral-600 mb-5">
                  Opțiunile de profilaxie pe termen lung la copii reflectă în general
                  opțiunile disponibile pentru adulți.
                </p>
                <div className="space-y-3">
                  <div className="bg-white border border-neutral-200 rounded-2xl p-5">
                    <h4 className="font-bold text-neutral-800 mb-1">Concentrat de C1-inhibitor</h4>
                    <p className="text-[15px] leading-[1.85] text-neutral-600">
                      Prima opțiune pentru profilaxia pe termen lung la copii,
                      similar cu recomandările pentru adulți.
                    </p>
                  </div>
                  <div className="bg-white border border-neutral-200 rounded-2xl p-5">
                    <h4 className="font-bold text-neutral-800 mb-1">Antifibrinolitice (acid tranexamic)</h4>
                    <p className="text-[15px] leading-[1.85] text-neutral-600">
                      Dacă concentratul de C1-inhibitor nu este disponibil,
                      antifibrinoliticele pot fi utilizate ca alternativă.
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <Callout variant="warning">
                    <p className="leading-relaxed font-medium">
                      <strong>De reținut:</strong> PTL cu antifibrinolitice este
                      preferată în locul androgenilor la copii, datorită unui
                      <strong> profil de siguranță mai bun</strong>.
                    </p>
                  </Callout>
                </div>
              </div>

              {/* Short-term Prophylaxis */}
              <div>
                <h3 className="font-bold text-neutral-800 text-lg mb-3">
                  Profilaxie pe termen scurt la copii
                </h3>
                <p className="text-[17px] leading-[1.85] text-neutral-600 mb-5">
                  Profilaxia pe termen scurt se administrează înainte de proceduri
                  chirurgicale sau stomatologice pentru a preveni atacurile.
                </p>
                <div className="space-y-3">
                  <div className="bg-white border border-neutral-200 rounded-2xl p-5">
                    <h4 className="font-bold text-neutral-800 mb-1">Concentrat de C1-inhibitor</h4>
                    <p className="text-[15px] leading-[1.85] text-neutral-600">
                      Opțiunea preferată pentru profilaxia pe termen scurt la
                      pacienții pediatrici.
                    </p>
                  </div>
                  <div className="bg-white border border-neutral-200 rounded-2xl p-5">
                    <h4 className="font-bold text-neutral-800 mb-1">Androgeni atenuați</h4>
                    <p className="text-[15px] leading-[1.85] text-neutral-600">
                      Alternativă pentru profilaxia pe termen scurt, atunci când
                      concentratul de C1-inhibitor nu este disponibil.
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <Callout variant="warning" title="Important">
                    <p className="leading-relaxed font-medium">
                      Tratamentul la cerere trebuie să fie
                      întotdeauna <strong>disponibil pe parcursul procedurii</strong>,
                      indiferent de profilaxia administrată.
                    </p>
                  </Callout>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 bg-white border-t border-neutral-100">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link
                to="/cum-tratam-aee"
                className="text-primary-500 font-semibold hover:text-primary-600 transition-colors"
              >
                ← Tratamente disponibile
              </Link>
              <Link
                to="/femei-si-sarcina"
                className="text-primary-500 font-semibold hover:text-primary-600 transition-colors sm:text-right"
              >
                Femei și sarcina →
              </Link>
            </div>
          </div>
        </section>

        {/* Source Attribution */}
        <section className="py-8 bg-white">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-neutral-500 text-sm">
              Informații bazate pe date de la{' '}
              <a
                href="https://haei.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 underline"
              >
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
