import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, SectionHeader, Card, Callout } from '../components/ui';

const AEEChildren: React.FC = () => {
  return (
    <><SEO title="AEE și Copiii" description="Informații despre angioedemul ereditar la copii: testare, debutul simptomelor, opțiuni de tratament pediatric." path="/aee-si-copiii" /><div>
      {/* Hero Section */}
      <PageHero
        variant="secondary"
        backLink="/ce-este-aee"
        backLabel="Ce este AEE?"
        title="AEE și"
        titleHighlight="copiii"
        description="Defectul genetic care cauzează AEE este ereditar. Copiii unui părinte cu AEE au 50% șanse să moștenească afecțiunea."
      />

      {/* Key Statistic Callout */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Callout variant="warning">
            <p className="text-center text-lg font-medium leading-relaxed">
              Copiii unui părinte cu AEE au <strong>50% șanse</strong> să moștenească
              afecțiunea. Testarea timpurie și un plan de tratament individualizat
              sunt esențiale.
            </p>
          </Callout>
        </div>
      </section>

      {/* Testing Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                title="Testarea este"
                titleHighlight="esențială"
                dividerColor="secondary"
                align="left"
              />
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Odată ce o persoană este diagnosticată, experții recomandă ca toți
                membrii familiei apropiate (părinți, frați și copii) să fie testați
                pentru AEE.
              </p>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Testarea pentru AEE este posibilă în primul an de viață, cu toate
                acestea, unii medici recomandă să așteptați până când copilul are
                cel puțin un (1) an înainte de testare. Aceasta se datorează
                nivelurilor foarte variabile de C1 antigenic și C4 în primul an de
                viață.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed">
                Testarea precoce permite părinților sau tutorilor legali să
                colaboreze în avans cu medicul copilului pentru a crea un plan de
                tratament individualizat.
              </p>
            </div>

            <div className="space-y-6">
              <Card variant="feature" accentColor="secondary" hover={false} className="p-8">
                <h3 className="font-bold text-neutral-800 mb-3 text-lg">Cine trebuie testat?</h3>
                <p className="text-neutral-500 leading-relaxed">
                  Toți membrii familiei apropiate: <strong>părinți, frați și copii</strong> ai
                  persoanei diagnosticate cu AEE.
                </p>
              </Card>

              <Card variant="feature" accentColor="primary" hover={false} className="p-8">
                <h3 className="font-bold text-neutral-800 mb-3 text-lg">Când se poate testa?</h3>
                <p className="text-neutral-500 leading-relaxed">
                  Testarea este posibilă din primul an de viață, dar se recomandă
                  așteptarea până la <strong>cel puțin 1 an</strong> din cauza
                  nivelurilor variabile de C1 antigenic și C4.
                </p>
              </Card>

              <Card variant="feature" accentColor="accent" hover={false} className="p-8">
                <h3 className="font-bold text-neutral-800 mb-3 text-lg">De ce contează testarea precoce?</h3>
                <p className="text-neutral-500 leading-relaxed">
                  Permite crearea unui <strong>plan de tratament individualizat</strong> în
                  avans, în colaborare cu medicul copilului.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Symptom Onset */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Debutul"
            titleHighlight="simptomelor"
            dividerColor="secondary"
          />

          <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
            Vârsta de debut variază considerabil. Majoritatea persoanelor cu AEE
            au experimentat simptome sau primul atac înainte de vârsta de 18 ani.
            Pare să existe o frecvență crescută a atacurilor în timpul pubertății
            sau adolescenței.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <Card variant="bordered" hover={false} className="p-6 text-center">
              <p className="text-5xl font-extrabold text-secondary-500 mb-2">50%</p>
              <p className="text-neutral-700 leading-relaxed font-medium">
                dintre persoanele cu AEE raportează primele simptome
                până la <strong>vârsta de 10 ani</strong>
              </p>
            </Card>
            <Card variant="bordered" hover={false} className="p-6 text-center">
              <p className="text-5xl font-extrabold text-secondary-500 mb-2">&lt;18 ani</p>
              <p className="text-neutral-700 leading-relaxed font-medium">
                Majoritatea pacienților au experimentat <strong>primul atac</strong> înainte
                de vârsta adultă
              </p>
            </Card>
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
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Tratamentul AEE"
            titleHighlight="la copii"
            dividerColor="secondary"
            description="Similar cu adulții, toți pacienții pediatrici cu AEE ar trebui să aibă un plan de gestionare a bolii, inclusiv un plan de acțiune terapeutică, împreună cu medicul lor."
          />

          <div className="space-y-8">
            {/* Acute Treatment for Children */}
            <Card variant="feature" accentColor="secondary" hover={false} className="p-8">
              <h3 className="text-xl font-bold text-neutral-800 mb-4">
                Terapii disponibile pentru copii și adolescenți
              </h3>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Tratamentul la cerere pentru atacuri acute la pacienții pediatrici
                include următoarele opțiuni:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-secondary-50 rounded-xl p-6">
                  <h4 className="font-bold text-neutral-800 mb-2">Concentrat de C1-inhibitor</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Produse din plasmă sanguină (pdC1-inhibitor) și produse
                    recombinante (rhC1-inhibitor). Înlocuiește proteina lipsă
                    sau disfuncțională.
                  </p>
                </div>
                <div className="bg-secondary-50 rounded-xl p-6">
                  <h4 className="font-bold text-neutral-800 mb-2">Icatibant</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Antagonist al receptorilor de bradikinină. Blochează acțiunea
                    bradikininei, mediatorul principal al edemului.
                  </p>
                </div>
                <div className="bg-secondary-50 rounded-xl p-6 md:col-span-2">
                  <h4 className="font-bold text-neutral-800 mb-2">Alternative</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Dacă tratamentele specifice nu sunt disponibile: plasma tratată
                    cu solvent-detergent (SDP) sau plasma proaspătă congelată (FFP)
                    pot fi utilizate.
                  </p>
                </div>
              </div>
            </Card>

            {/* Long-term Prophylaxis for Children */}
            <Card variant="feature" accentColor="primary" hover={false} className="p-8">
              <h3 className="text-xl font-bold text-neutral-800 mb-4">
                Profilaxie pe termen lung (PTL) la copii
              </h3>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Opțiunile de profilaxie pe termen lung la copii reflectă în general
                opțiunile disponibile pentru adulți.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary-50 rounded-xl p-6">
                  <h4 className="font-bold text-neutral-800 mb-2">Concentrat de C1-inhibitor</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Prima opțiune pentru profilaxia pe termen lung la copii,
                    similar cu recomandările pentru adulți.
                  </p>
                </div>
                <div className="bg-primary-50 rounded-xl p-6">
                  <h4 className="font-bold text-neutral-800 mb-2">Antifibrinolitice (acid tranexamic)</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Dacă concentratul de C1-inhibitor nu este disponibil,
                    antifibrinoliticele pot fi utilizate ca alternativă.
                  </p>
                </div>
              </div>
              <Callout variant="warning" className="mt-6">
                <p className="leading-relaxed font-medium">
                  <strong>De reținut:</strong> PTL cu antifibrinolitice este
                  preferată în locul androgenilor la copii, datorită unui
                  <strong> profil de siguranță mai bun</strong>.
                </p>
              </Callout>
            </Card>

            {/* Short-term Prophylaxis for Children */}
            <Card variant="feature" accentColor="accent" hover={false} className="p-8">
              <h3 className="text-xl font-bold text-neutral-800 mb-4">
                Profilaxie pe termen scurt la copii
              </h3>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Profilaxia pe termen scurt se administrează înainte de proceduri
                chirurgicale sau stomatologice pentru a preveni atacurile.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-accent-50 rounded-xl p-6">
                  <h4 className="font-bold text-neutral-800 mb-2">Concentrat de C1-inhibitor</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Opțiunea preferată pentru profilaxia pe termen scurt la
                    pacienții pediatrici.
                  </p>
                </div>
                <div className="bg-accent-50 rounded-xl p-6">
                  <h4 className="font-bold text-neutral-800 mb-2">Androgeni atenuați</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Alternativă pentru profilaxia pe termen scurt, atunci când
                    concentratul de C1-inhibitor nu este disponibil.
                  </p>
                </div>
              </div>
              <Callout variant="warning" title="Important" className="mt-6">
                <p className="leading-relaxed font-medium">
                  Tratamentul la cerere trebuie să fie
                  întotdeauna <strong>disponibil pe parcursul procedurii</strong>,
                  indiferent de profilaxia administrată.
                </p>
              </Callout>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/diagnosticarea-aee" className="text-secondary-500 font-semibold hover:text-secondary-600 transition-colors">
              ← Diagnosticarea AEE
            </Link>
            <Link to="/femei-si-sarcina" className="text-secondary-500 font-semibold hover:text-secondary-600 transition-colors sm:text-right">
              Femei și sarcina →
            </Link>
          </div>
        </div>
      </section>

      {/* Source Attribution */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-500 text-sm">
            Informații bazate pe date de la{' '}
            <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-secondary-500 hover:text-secondary-600 underline">
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
