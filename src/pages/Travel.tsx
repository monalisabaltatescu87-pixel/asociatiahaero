import SEO from '../components/SEO';
import React from 'react';
import { CreditCard, Search, Package, CheckCircle, Smartphone, Check, Activity, Info } from 'lucide-react';
import { PageHero, SectionHeader, Card, IconBox, Callout, Button } from '../components/ui';

const Travel: React.FC = () => {
  return (
    <><SEO title="Călătorii cu AEE" description="Sfaturi utile pentru călătoriile persoanelor cu angioedem ereditar: pregătirea medicamentelor, carduri de urgență și resurse." path="/calatorii" /><div className="pt-20">
      {/* Hero Section */}
      <PageHero
        variant="primary"
        backLink="/ce-este-aee"
        backLabel="Înapoi la Ce este AEE"
        title="Călătorii cu"
        titleHighlight="AEE"
        description="Indiferent dacă plecați în interes de serviciu sau pentru vacanță, iată câteva lucruri de luat în considerare când vă pregătiți pentru călătorie."
      />

      {/* Travel Tips */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Pregătire"
            title="Sfaturi utile pentru planificarea"
            titleHighlight="călătoriei"
            description="O pregătire atentă vă poate ajuta să călătoriți în siguranță și cu încredere."
            dividerColor="primary"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Tip 1 - Emergency Contact */}
            <Card variant="accent-left" accentColor="primary">
              <div className="p-7 flex items-start gap-4">
                <IconBox variant="primary">
                  <CreditCard size={24} />
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2 text-lg">Carduri de urgență</h3>
                  <p className="text-neutral-500 leading-relaxed">
                    Purtați întotdeauna informații de contact de urgență. Puteți găsi Cardurile de Urgență HAEi în multe limbi în Aplicația HAEi Companion sau online pe{' '}
                    <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
                      haei.org
                    </a>.
                  </p>
                </div>
              </div>
            </Card>

            {/* Tip 2 - Medical Care */}
            <Card variant="accent-left" accentColor="accent">
              <div className="p-7 flex items-start gap-4">
                <IconBox variant="accent">
                  <Search size={24} />
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2 text-lg">Îngrijire medicală la destinație</h3>
                  <p className="text-neutral-500 leading-relaxed">
                    Căutați informații despre îngrijirea medicală în țara pe care o vizitați. Găsiți o listă a medicilor și spitalelor care știu despre AEE în aplicația HAEi Companion sau pe{' '}
                    <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
                      haei.org
                    </a>.
                  </p>
                </div>
              </div>
            </Card>

            {/* Tip 3 - Hand Luggage */}
            <Card variant="accent-left" accentColor="secondary">
              <div className="p-7 flex items-start gap-4">
                <IconBox variant="secondary">
                  <Package size={24} />
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2 text-lg">Medicamente în bagajul de mână</h3>
                  <p className="text-neutral-500 leading-relaxed">
                    Păstrați medicamentele AEE într-un bagaj de mână. Nu le puneți în bagajul de cală, deoarece acesta poate fi pierdut sau întârziat.
                  </p>
                </div>
              </div>
            </Card>

            {/* Tip 4 - Enough Medication */}
            <Card variant="accent-left" accentColor="primary">
              <div className="p-7 flex items-start gap-4">
                <IconBox variant="primary">
                  <CheckCircle size={24} />
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2 text-lg">Suficiente medicamente</h3>
                  <p className="text-neutral-500 leading-relaxed">
                    Asigurați-vă că aduceți suficiente medicamente pentru întreaga călătorie. Luați în calcul posibile întârzieri sau prelungiri ale șederii.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* HAEi Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Instrumente digitale"
            title="Resurse utile pentru"
            titleHighlight="călătorie"
            description="HAEi oferă instrumente digitale gratuite care vă pot ajuta să gestionați AEE în timpul călătoriilor."
            dividerColor="accent"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* HAEi Companion App */}
            <Card variant="accent-left" accentColor="accent">
              <div className="p-7 flex items-start gap-4">
                <IconBox variant="accent" size="lg">
                  <Smartphone size={28} />
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-3 text-xl">Aplicația HAEi Companion</h3>
                  <p className="text-neutral-600 leading-relaxed mb-3">
                    Aplicația HAEi Companion vă oferă acces rapid la informații esențiale în timpul călătoriei:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600 text-sm">Carduri de urgență în multe limbi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600 text-sm">Listă de medici și spitale care cunosc AEE</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600 text-sm">Informații despre organizațiile HAE locale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* HAE TrackR */}
            <Card variant="accent-left" accentColor="primary">
              <div className="p-7 flex items-start gap-4">
                <IconBox variant="primary" size="lg">
                  <Activity size={28} />
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-3 text-xl">HAE TrackR</h3>
                  <p className="text-neutral-600 leading-relaxed mb-3">
                    HAE TrackR vă ajută să monitorizați atacurile și tratamentele, oferindu-vă date valoroase pe care le puteți partaja cu medicul:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600 text-sm">Jurnal digital al atacurilor de AEE</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600 text-sm">Înregistrarea tratamentelor administrate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600 text-sm">Rapoarte utile pentru consultații medicale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Reminder Callout */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Callout
            variant="warning"
            title="Nu uitați"
            icon={
              <Info size={20} />
            }
          >
            <p>
              Discutați cu medicul dumneavoastră specialist înainte de orice călătorie mai lungă. Împreună puteți stabili un plan de acțiune personalizat și vă puteți asigura că aveți toate resursele necesare pentru a călători în siguranță cu AEE.
            </p>
          </Callout>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-primary-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Button variant="ghost" to="/femei-si-sarcina" size="md">
              ← Femei și Sarcina
            </Button>
            <Button variant="ghost" to="/despre-haei" size="md">
              Despre HAEi →
            </Button>
          </div>
        </div>
      </section>

      {/* Source Attribution */}
      <section className="py-8 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-400 text-sm">
            Informații bazate pe date de la{' '}
            <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
              HAE International (HAEi)
            </a>.
          </p>
        </div>
      </section>
    </div>
  </>
  );
};

export default Travel;
