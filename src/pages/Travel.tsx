import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Search, Package, CheckCircle, Smartphone, Activity, Check, Info } from 'lucide-react';
import { PageHero, SectionHeader, Callout } from '../components/ui';
import SEO from '../components/SEO';

const Travel: React.FC = () => {
  return (
    <>
      <SEO
        title="Călătorii cu AEE"
        description="Sfaturi utile pentru călătoriile persoanelor cu angioedem ereditar: pregătirea medicamentelor, carduri de urgență și resurse."
        path="/calatorii"
      />
      <div className="pt-20 bg-white">
        {/* Hero Section */}
        <PageHero
          variant="reader"
          backLink="/ce-este-aee"
          backLabel="Despre AEE"
          title="Călătorii cu AEE"
          description="Indiferent dacă plecați în interes de serviciu sau pentru vacanță, iată câteva lucruri de luat în considerare când vă pregătiți pentru călătorie."
        />

        {/* Travel Tips */}
        <section className="py-8 bg-white">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              reader={true}
              title="Sfaturi utile pentru planificarea călătoriei"
              description="O pregătire atentă vă poate ajuta să călătoriți în siguranță și cu încredere."
            />

            <div className="space-y-4 mt-8">
              {/* Tip 1 - Emergency Contact */}
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
                <div className="w-12 h-12 rounded-[14px] bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <CreditCard size={22} className="text-accent-500" />
                </div>
                <div>
                  <h3 className="text-neutral-800 font-bold text-lg mb-2">Carduri de urgență</h3>
                  <p className="text-[17px] leading-[1.85] text-neutral-600">
                    Purtați întotdeauna informații de contact de urgență. Puteți găsi Cardurile de Urgență HAEi în multe limbi în Aplicația HAEi Companion sau online pe{' '}
                    <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
                      haei.org
                    </a>.
                  </p>
                </div>
              </div>

              {/* Tip 2 - Medical Care */}
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
                <div className="w-12 h-12 rounded-[14px] bg-secondary-100 flex items-center justify-center flex-shrink-0">
                  <Search size={22} className="text-secondary-500" />
                </div>
                <div>
                  <h3 className="text-neutral-800 font-bold text-lg mb-2">Îngrijire medicală la destinație</h3>
                  <p className="text-[17px] leading-[1.85] text-neutral-600">
                    Căutați informații despre îngrijirea medicală în țara pe care o vizitați. Găsiți o listă a medicilor și spitalelor care știu despre AEE în aplicația HAEi Companion sau pe{' '}
                    <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
                      haei.org
                    </a>.
                  </p>
                </div>
              </div>

              {/* Tip 3 - Hand Luggage */}
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
                <div className="w-12 h-12 rounded-[14px] bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <Package size={22} className="text-accent-500" />
                </div>
                <div>
                  <h3 className="text-neutral-800 font-bold text-lg mb-2">Medicamente în bagajul de mână</h3>
                  <p className="text-[17px] leading-[1.85] text-neutral-600">
                    Păstrați medicamentele AEE într-un bagaj de mână. Nu le puneți în bagajul de cală, deoarece acesta poate fi pierdut sau întârziat.
                  </p>
                </div>
              </div>

              {/* Tip 4 - Enough Medication */}
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
                <div className="w-12 h-12 rounded-[14px] bg-secondary-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={22} className="text-secondary-500" />
                </div>
                <div>
                  <h3 className="text-neutral-800 font-bold text-lg mb-2">Suficiente medicamente</h3>
                  <p className="text-[17px] leading-[1.85] text-neutral-600">
                    Asigurați-vă că aduceți suficiente medicamente pentru întreaga călătorie. Luați în calcul posibile întârzieri sau prelungiri ale șederii.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HAEi Resources Section */}
        <section className="py-8 bg-white">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              reader={true}
              title="Resurse utile pentru călătorie"
              description="HAEi oferă instrumente digitale gratuite care vă pot ajuta să gestionați AEE în timpul călătoriilor."
            />

            <div className="space-y-4 mt-8">
              {/* HAEi Companion App */}
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
                <div className="w-12 h-12 rounded-[14px] bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <Smartphone size={22} className="text-accent-500" />
                </div>
                <div>
                  <h3 className="text-neutral-800 font-bold text-lg mb-2">Aplicația HAEi Companion</h3>
                  <p className="text-[17px] leading-[1.85] text-neutral-600 mb-3">
                    Aplicația HAEi Companion vă oferă acces rapid la informații esențiale în timpul călătoriei:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600 text-[15px]">Carduri de urgență în multe limbi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600 text-[15px]">Listă de medici și spitale care cunosc AEE</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600 text-[15px]">Informații despre organizațiile HAE locale</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* HAE TrackR */}
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
                <div className="w-12 h-12 rounded-[14px] bg-secondary-100 flex items-center justify-center flex-shrink-0">
                  <Activity size={22} className="text-secondary-500" />
                </div>
                <div>
                  <h3 className="text-neutral-800 font-bold text-lg mb-2">HAE TrackR</h3>
                  <p className="text-[17px] leading-[1.85] text-neutral-600 mb-3">
                    HAE TrackR vă ajută să monitorizați atacurile și tratamentele, oferindu-vă date valoroase pe care le puteți partaja cu medicul:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600 text-[15px]">Jurnal digital al atacurilor de AEE</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600 text-[15px]">Înregistrarea tratamentelor administrate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600 text-[15px]">Rapoarte utile pentru consultații medicale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reminder Callout */}
        <section className="py-14 bg-white">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <Callout
              variant="warning"
              title="Nu uitați"
              icon={<Info size={20} />}
            >
              <p>
                Discutați cu medicul dumneavoastră specialist înainte de orice călătorie mai lungă. Împreună puteți stabili un plan de acțiune personalizat și vă puteți asigura că aveți toate resursele necesare pentru a călători în siguranță cu AEE.
              </p>
            </Callout>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-10 bg-white border-t border-neutral-100">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link
                to="/femei-si-sarcina"
                className="text-neutral-500 hover:text-neutral-700 text-sm font-semibold transition-colors"
              >
                ← Femei și Sarcina
              </Link>
              <Link
                to="/despre-haei"
                className="text-neutral-500 hover:text-neutral-700 text-sm font-semibold transition-colors"
              >
                Despre HAEi →
              </Link>
            </div>
          </div>
        </section>

        {/* Source Attribution */}
        <section className="py-8 bg-white border-t border-neutral-100">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
