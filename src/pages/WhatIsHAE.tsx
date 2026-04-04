import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Hand, Activity, AlertTriangle } from 'lucide-react';
import { PageHero, SectionHeader, Callout } from '../components/ui';

const WhatIsHAE: React.FC = () => {
  return (
    <><SEO title="Ce este Angioedemul Ereditar" description="Angioedemul Ereditar (AEE) este o afecțiune genetică foarte rară și potențial fatală. Află despre tipurile de AEE, simptome și de ce diagnosticul precoce este important." path="/ce-este-aee" /><div>
      {/* Hero Section */}
      <PageHero
        variant="reader"
        title="Ghid despre Angioedemul Ereditar"
        description="Angioedemul Ereditar (AEE) este o afecțiune genetică foarte rară și potențial fatală, care apare la aproximativ 1 din 10.000 până la 1 din 50.000 de persoane. AEE provoacă simptome de angioedem (umflare) în diverse părți ale corpului, inclusiv: mâini, picioare, față și gât/căi respiratorii."
      />

      {/* What is HAE */}
      <section className="py-8 bg-white">
        <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            reader={true}
            title="Ce este AEE"
          />
          <p className="text-[17px] leading-[1.85] text-neutral-600 mb-6">
            Persoanele cu AEE suferă adesea de dureri abdominale insuportabile, greață și vărsături cauzate de umflarea peretelui intestinal. <strong className="text-neutral-800 font-bold">Umflarea căilor respiratorii sau a gâtului este deosebit de periculoasă</strong>, deoarece poate cauza moartea prin sufocare.
          </p>
          <p className="text-[17px] leading-[1.85] text-neutral-600 mb-6">
            Majoritatea persoanelor cu AEE au un defect în gena care controlează o proteină importantă numită <strong className="text-neutral-800 font-bold">C1-inhibitor</strong>, care se găsește în plasmă — partea lichidă a sângelui. Din cauza acestui defect genetic, C1-inhibitorul la persoanele cu AEE nu își îndeplinește funcția de a controla interacțiunile biologice complexe din plasmă.
          </p>
          <p className="text-[17px] leading-[1.85] text-neutral-600 mb-10">
            Necontrolate, aceste interacțiuni produc o substanță numită <strong className="text-neutral-800 font-bold">bradikinină</strong>, care provoacă umflarea prin permiterea fluidelor plasmatice să pătrundă în țesuturile moi ale diverselor părți ale corpului.
          </p>

          {/* Important callout with floating badge */}
          <div className="relative">
            <div className="absolute -top-3.5 left-10 w-7 h-7 bg-accent-400 text-white rounded-full flex items-center justify-center font-extrabold text-sm">!</div>
            <Callout variant="info" title="Important de știut">
              <p className="mb-4">
                Umflarea legată de AEE <strong>NU este aceeași</strong> cu umflarea cauzată de alergii. <strong>Antihistaminicele, corticosteroizii și epinefrina sunt ineficiente</strong> în tratarea AEE.
              </p>
              <p className="mb-4">
                Fără tratament, atacurile pot dura între <strong>două și cinci zile</strong>. Frecvența și severitatea pot varia dramatic între persoane și la aceeași persoană în diferite etape ale vieții.
              </p>
              <p>
                Absența unui istoric familial nu exclude diagnosticul. Până la <strong>25% din cazuri</strong> rezultă dintr-o mutație spontană. Copiii au <strong>50% șanse</strong> să moștenească AEE dacă un părinte are afecțiunea.
              </p>
            </Callout>
          </div>
        </div>
      </section>

      {/* Types of HAE */}
      <section className="py-8 bg-white">
        <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            reader={true}
            title="Tipurile de AEE"
            description="Există mai multe forme de Angioedem Ereditar, clasificate în funcție de nivelul și funcția C1-inhibitorului."
          />

          <div className="flex flex-col gap-4">
            {/* Type I */}
            <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center font-black text-lg flex-shrink-0 bg-primary-50 text-primary-500 border-2 border-primary-200">
                I
              </div>
              <div>
                <h3 className="font-bold text-neutral-800 text-lg mb-1">AEE Tip I</h3>
                <span className="text-[13px] font-bold text-primary-500">85% din persoanele cu AEE</span>
                <p className="text-[17px] leading-[1.85] text-neutral-600 mt-2">
                  Cea mai frecventă formă, caracterizată prin niveluri cantitative scăzute de C1-inhibitor.
                </p>
              </div>
            </div>

            {/* Type II */}
            <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center font-black text-lg flex-shrink-0 bg-secondary-50 text-secondary-400 border-2 border-secondary-200">
                II
              </div>
              <div>
                <h3 className="font-bold text-neutral-800 text-lg mb-1">AEE Tip II</h3>
                <span className="text-[13px] font-bold text-primary-500">15% din persoanele cu AEE</span>
                <p className="text-[17px] leading-[1.85] text-neutral-600 mt-2">
                  Teste de laborator arată niveluri normale sau crescute de C1-inhibitor, dar proteina nu funcționează corect.
                </p>
              </div>
            </div>

            {/* Type Normal C1-inhibitor */}
            <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center font-black text-lg flex-shrink-0 bg-accent-50 text-accent-400 border-2 border-accent-200">
                N
              </div>
              <div>
                <h3 className="font-bold text-neutral-800 text-lg mb-1">AEE cu C1-inhibitor normal</h3>
                <p className="text-[17px] leading-[1.85] text-neutral-600 mt-2">
                  Simptomele sunt consistente cu AEE tip I și II, dar rezultatele de laborator arată niveluri și funcție normale ale C1-inhibitorului. Studii recente au confirmat mutații genetice conectate cu umflarea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-8 bg-white">
        <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            reader={true}
            title="Simptomele AEE"
            description="Atacuri cu umflare și durere în diverse părți ale corpului — piele, abdomen, gât și căi respiratorii."
          />

          <div className="flex flex-col gap-4">
            {/* Skin swelling */}
            <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0 bg-primary-50 border-2 border-primary-200 text-primary-500">
                <Hand size={22} />
              </div>
              <div>
                <h3 className="font-bold text-neutral-800 text-lg mb-1">Umflături cutanate</h3>
                <p className="text-[17px] leading-[1.85] text-neutral-600 mt-2">
                  Umflături dureroase ale mâinilor, picioarelor, feței și regiunii genitale.
                  Zonele umflate sunt dure, dureroase, fără mâncărime și fără roșeață —
                  diferit de reacțiile alergice.
                </p>
                <p className="text-[15px] leading-relaxed text-neutral-500 mt-2">
                  ~25% experimentează erupție cutanată roșie, fără mâncărime, înainte sau în timpul unui atac.
                </p>
              </div>
            </div>

            {/* Abdominal symptoms */}
            <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0 bg-secondary-50 border-2 border-secondary-200 text-secondary-400">
                <Activity size={22} />
              </div>
              <div>
                <h3 className="font-bold text-neutral-800 text-lg mb-1">Simptome abdominale</h3>
                <p className="text-[17px] leading-[1.85] text-neutral-600 mt-2">
                  Dureri abdominale insuportabile, greață, vărsături și diaree cauzate de umflarea peretelui intestinal.
                </p>
                <p className="text-[15px] leading-relaxed text-neutral-500 mt-2">
                  Pot fi confundate cu alte patologii și pot duce la intervenții
                  chirurgicale inutile atunci când AEE nu este diagnosticat.
                </p>
              </div>
            </div>

            {/* Laryngeal edema */}
            <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0 bg-accent-50 border-2 border-accent-200 text-accent-400">
                <AlertTriangle size={22} />
              </div>
              <div>
                <span className="inline-block text-xs font-bold text-error bg-error-light px-3 py-1 rounded-full mb-1.5">Pericol vital</span>
                <h3 className="font-bold text-neutral-800 text-lg mb-1">Edem laringian</h3>
                <p className="text-[17px] leading-[1.85] text-neutral-600 mt-2">
                  Cele mai periculoase simptome. Umflăturile la nivelul gâtului sau căilor respiratorii pot cauza <strong className="text-neutral-800 font-bold">deces prin sufocare</strong> dacă nu sunt tratate.
                </p>
                <p className="text-[15px] leading-relaxed text-neutral-500 mt-2">
                  Rata mortalității este de aproximativ <strong className="text-neutral-800 font-bold">30%</strong> pentru persoane netratate. 50% experimentează cel puțin o umflare a gâtului în viață.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-8 bg-white">
        <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            reader={true}
            title="Semne de avertizare"
            description="Înainte de un episod, unii pacienți experimentează semne precoce de avertizare (simptome prodromale):"
          />
          <div className="bg-primary-50 rounded-2xl p-7">
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0"></div>
                <span className="text-neutral-600">Furnicături sau senzație de strângere</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0"></div>
                <span className="text-neutral-600">Oboseală extremă</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0"></div>
                <span className="text-neutral-600">Schimbări bruște de dispoziție</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0"></div>
                <span className="text-neutral-600">Greață sau iritabilitate</span>
              </div>
            </div>
          </div>
          <p className="text-[17px] leading-[1.85] text-neutral-600 mt-6">
            Aproximativ <strong className="text-neutral-800 font-bold">25% dintre pacienți</strong> experimentează o erupție
            cutanată roșie, fără mâncărime, care apare adesea înainte sau
            în timpul unui episod de AEE.
          </p>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-8 bg-white">
        <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl sm:text-[26px] font-bold text-neutral-800 mb-8 text-center">
            Află mai multe
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/care-sunt-declansatorii-aee" className="border border-neutral-200 rounded-xl px-5 py-4 flex items-center justify-between hover:border-primary-300 hover:bg-primary-50 transition-all text-sm font-semibold text-neutral-700">
              Factori declanșatori
              <ChevronRight size={16} className="text-neutral-400" />
            </Link>
            <Link to="/ce-cauzeaza-aee" className="border border-neutral-200 rounded-xl px-5 py-4 flex items-center justify-between hover:border-primary-300 hover:bg-primary-50 transition-all text-sm font-semibold text-neutral-700">
              Principalele cauze
              <ChevronRight size={16} className="text-neutral-400" />
            </Link>
            <Link to="/cum-tratam-aee" className="border border-neutral-200 rounded-xl px-5 py-4 flex items-center justify-between hover:border-primary-300 hover:bg-primary-50 transition-all text-sm font-semibold text-neutral-700">
              Tratamente
              <ChevronRight size={16} className="text-neutral-400" />
            </Link>
            <Link to="/diagnosticarea-aee" className="border border-neutral-200 rounded-xl px-5 py-4 flex items-center justify-between hover:border-primary-300 hover:bg-primary-50 transition-all text-sm font-semibold text-neutral-700">
              Diagnosticarea
              <ChevronRight size={16} className="text-neutral-400" />
            </Link>
            <Link to="/aee-si-copiii" className="border border-neutral-200 rounded-xl px-5 py-4 flex items-center justify-between hover:border-primary-300 hover:bg-primary-50 transition-all text-sm font-semibold text-neutral-700">
              AEE și copiii
              <ChevronRight size={16} className="text-neutral-400" />
            </Link>
            <Link to="/femei-si-sarcina" className="border border-neutral-200 rounded-xl px-5 py-4 flex items-center justify-between hover:border-primary-300 hover:bg-primary-50 transition-all text-sm font-semibold text-neutral-700">
              Femei și sarcină
              <ChevronRight size={16} className="text-neutral-400" />
            </Link>
            <Link to="/calatorii" className="border border-neutral-200 rounded-xl px-5 py-4 flex items-center justify-between hover:border-primary-300 hover:bg-primary-50 transition-all text-sm font-semibold text-neutral-700">
              Călătorii
              <ChevronRight size={16} className="text-neutral-400" />
            </Link>
            <Link to="/despre-haei" className="border border-neutral-200 rounded-xl px-5 py-4 flex items-center justify-between hover:border-primary-300 hover:bg-primary-50 transition-all text-sm font-semibold text-neutral-700">
              Despre HAEi
              <ChevronRight size={16} className="text-neutral-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* Source Attribution */}
      <section className="py-8 bg-white">
        <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-500 text-sm">
            Informații bazate pe date de la{' '}
            <a href="https://haei.org/what-is-hae/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
              HAE International (HAEi)
            </a>
            {', '}
            <a href="https://rarediseases.org/rare-diseases/hereditary-angioedema/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
              NORD
            </a>
            {' și '}
            <a href="https://my.clevelandclinic.org/health/diseases/hereditary-angioedema" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
              Cleveland Clinic
            </a>.
          </p>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="py-8 bg-white border-t border-neutral-100">
        <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end">
            <Link to="/ce-cauzeaza-aee" className="text-primary-500 hover:text-primary-600 text-sm font-semibold transition-colors">
              Tipurile și cauzele AEE &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  </>
  );
};

export default WhatIsHAE;
