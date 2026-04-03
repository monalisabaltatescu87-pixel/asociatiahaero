import SEO from '../components/SEO';
import React from 'react';
import { PageHero, SectionHeader, Card, IconBox, Callout } from '../components/ui';

const WhatIsHAE: React.FC = () => {
  return (
    <><SEO title="Ce este Angioedemul Ereditar" description="Angioedemul Ereditar (AEE) este o afecțiune genetică foarte rară și potențial fatală. Află despre tipurile de AEE, simptome și de ce diagnosticul precoce este important." path="/ce-este-aee" /><div>
      {/* Hero Section */}
      <PageHero
        variant="accent"
        badge="Ghid medical"
        title="Ghid despre"
        titleHighlight="Angioedemul Ereditar"
        description="Angioedemul Ereditar (AEE) este o afecțiune genetică foarte rară și potențial fatală, care apare la aproximativ 1 din 10.000 până la 1 din 50.000 de persoane. AEE provoacă simptome de angioedem (umflare) în diverse părți ale corpului, inclusiv: mâini, picioare, față și gât/căi respiratorii."
      />

      {/* What is HAE */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                title="Ce este"
                titleHighlight="AEE"
                dividerColor="accent"
                align="left"
              />
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Persoanele cu AEE suferă adesea de dureri abdominale insuportabile, greață și vărsături cauzate de umflarea peretelui intestinal. <strong>Umflarea căilor respiratorii sau a gâtului este deosebit de periculoasă</strong>, deoarece poate cauza moartea prin sufocare.
              </p>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Majoritatea persoanelor cu AEE au un defect în gena care controlează o proteină importantă numită <strong>C1-inhibitor</strong>, care se găsește în plasmă — partea lichidă a sângelui. Din cauza acestui defect genetic, C1-inhibitorul la persoanele cu AEE nu își îndeplinește funcția de a controla interacțiunile biologice complexe din plasmă.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed">
                Necontrolate, aceste interacțiuni produc o substanță numită <strong>bradikinină</strong>, care provoacă umflarea prin permiterea fluidelor plasmatice să pătrundă în țesuturile moi ale diverselor părți ale corpului.
              </p>
            </div>

            <Callout variant="error" title="Important de știut">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Clasificare"
            title="Tipurile de"
            titleHighlight="AEE"
            description="Există mai multe forme de Angioedem Ereditar, clasificate în funcție de nivelul și funcția C1-inhibitorului."
            dividerColor="secondary"
          />

          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="accent-left" accentColor="primary" hover>
              <div className="p-8">
                <IconBox variant="primary" size="md" className="mb-4">
                  <span className="font-extrabold text-lg">I</span>
                </IconBox>
                <h3 className="font-bold text-neutral-800 mb-3 text-lg">AEE Tip I</h3>
                <p className="text-neutral-500 leading-relaxed mb-3">
                  <strong>85% din persoanele cu AEE.</strong> Cea mai frecventă formă, caracterizată prin niveluri cantitative scăzute de C1-inhibitor.
                </p>
              </div>
            </Card>

            <Card variant="accent-left" accentColor="secondary" hover>
              <div className="p-8">
                <IconBox variant="secondary" size="md" className="mb-4">
                  <span className="font-extrabold text-lg">II</span>
                </IconBox>
                <h3 className="font-bold text-neutral-800 mb-3 text-lg">AEE Tip II</h3>
                <p className="text-neutral-500 leading-relaxed mb-3">
                  <strong>15% din persoanele cu AEE.</strong> Teste de laborator arată niveluri normale sau crescute de C1-inhibitor, dar proteina nu funcționează corect.
                </p>
              </div>
            </Card>

            <Card variant="accent-left" accentColor="accent" hover>
              <div className="p-8">
                <IconBox variant="accent" size="md" className="mb-4">
                  <span className="font-extrabold text-lg">N</span>
                </IconBox>
                <h3 className="font-bold text-neutral-800 mb-3 text-lg">AEE cu C1-inhibitor normal</h3>
                <p className="text-neutral-500 leading-relaxed mb-3">
                  Simptomele sunt consistente cu AEE tip I și II, dar rezultatele de laborator arată niveluri și funcție normale ale C1-inhibitorului. Studii recente au confirmat mutații genetice conectate cu umflarea.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Simptome"
            title="Simptomele"
            titleHighlight="AEE"
            description="Atacuri cu umflare și durere în diverse părți ale corpului — piele, abdomen, gât și căi respiratorii."
            dividerColor="accent"
          />

          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="feature" accentColor="primary" hover>
              <div className="p-8">
                <IconBox variant="primary" size="md" className="mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </IconBox>
                <h3 className="font-bold text-neutral-800 mb-3 text-lg">Umflături cutanate</h3>
                <p className="text-neutral-500 leading-relaxed mb-3">
                  Umflături dureroase ale mâinilor, picioarelor, feței și regiunii genitale.
                  Zonele umflate sunt dure, dureroase, fără mâncărime și fără roșeață —
                  diferit de reacțiile alergice.
                </p>
                <p className="text-neutral-500 leading-relaxed text-sm">
                  ~25% experimentează erupție cutanată roșie, fără mâncărime, înainte sau în timpul unui atac.
                </p>
              </div>
            </Card>

            <Card variant="feature" accentColor="secondary" hover>
              <div className="p-8">
                <IconBox variant="secondary" size="md" className="mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </IconBox>
                <h3 className="font-bold text-neutral-800 mb-3 text-lg">Simptome abdominale</h3>
                <p className="text-neutral-500 leading-relaxed mb-3">
                  Dureri abdominale insuportabile, greață, vărsături și diaree cauzate de umflarea peretelui intestinal.
                </p>
                <p className="text-neutral-500 leading-relaxed text-sm">
                  Pot fi confundate cu alte patologii și pot duce la intervenții
                  chirurgicale inutile atunci când AEE nu este diagnosticat.
                </p>
              </div>
            </Card>

            <Card variant="feature" accentColor="accent" hover>
              <div className="p-8">
                <IconBox variant="accent" size="md" className="mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </IconBox>
                <h3 className="font-bold text-neutral-800 mb-3 text-lg">Edem laringian</h3>
                <p className="text-neutral-500 leading-relaxed mb-3">
                  Cele mai periculoase simptome. Umflăturile la nivelul gâtului sau căilor respiratorii pot cauza <strong>deces prin sufocare</strong> dacă nu sunt tratate.
                </p>
                <p className="text-neutral-500 leading-relaxed text-sm">
                  Rata mortalității este de aproximativ <strong>30%</strong> pentru persoane netratate. 50% experimentează cel puțin o umflare a gâtului în viață.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Prodromal Symptoms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Semne de"
              titleHighlight="avertizare"
              dividerColor="primary"
              align="left"
              description="Înainte de un episod, unii pacienți experimentează semne precoce de avertizare (simptome prodromale):"
            />
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-primary-50 rounded-xl p-4 flex items-center gap-3 shadow-raised">
                <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0"></div>
                <span className="text-neutral-600">Furnicături sau senzație de strângere</span>
              </div>
              <div className="bg-primary-50 rounded-xl p-4 flex items-center gap-3 shadow-raised">
                <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0"></div>
                <span className="text-neutral-600">Oboseală extremă</span>
              </div>
              <div className="bg-primary-50 rounded-xl p-4 flex items-center gap-3 shadow-raised">
                <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0"></div>
                <span className="text-neutral-600">Schimbări bruște de dispoziție</span>
              </div>
              <div className="bg-primary-50 rounded-xl p-4 flex items-center gap-3 shadow-raised">
                <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0"></div>
                <span className="text-neutral-600">Greață sau iritabilitate</span>
              </div>
            </div>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Aproximativ <strong>25% dintre pacienți</strong> experimentează o erupție
              cutanată roșie, fără mâncărime, care apare adesea înainte sau
              în timpul unui episod de AEE.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-navigation Cards */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Află"
            titleHighlight="mai multe"
            dividerColor="accent"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="feature" accentColor="primary" to="/care-sunt-declansatorii-aee" hover>
              <div className="p-8">
                <h3 className="font-bold text-neutral-800 mb-3 text-lg">Factori declanșatori</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Descoperă care sunt factorii care pot declanșa un episod de angioedem ereditar.
                </p>
                <span className="text-primary-500 font-semibold text-sm mt-4 inline-block">Citește mai mult &rarr;</span>
              </div>
            </Card>
            <Card variant="feature" accentColor="secondary" to="/ce-cauzeaza-aee" hover>
              <div className="p-8">
                <h3 className="font-bold text-neutral-800 mb-3 text-lg">Principalele cauze</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Înțelege mecanismele genetice și biologice care stau la baza acestei boli rare.
                </p>
                <span className="text-secondary-500 font-semibold text-sm mt-4 inline-block">Citește mai mult &rarr;</span>
              </div>
            </Card>
            <Card variant="feature" accentColor="accent" to="/cum-tratam-aee" hover>
              <div className="p-8">
                <h3 className="font-bold text-neutral-800 mb-3 text-lg">Tratamente disponibile</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Află despre tratamentele moderne disponibile pentru managementul AEE.
                </p>
                <span className="text-accent-500 font-semibold text-sm mt-4 inline-block">Citește mai mult &rarr;</span>
              </div>
            </Card>
            <Card variant="feature" accentColor="primary" to="/diagnosticarea-aee" hover>
              <div className="p-8">
                <h3 className="font-bold text-neutral-800 mb-3 text-lg">Diagnosticarea AEE</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Află cum se diagnostichează angioedemul ereditar și ce analize sunt necesare.
                </p>
                <span className="text-primary-500 font-semibold text-sm mt-4 inline-block">Citește mai mult &rarr;</span>
              </div>
            </Card>
            <Card variant="feature" accentColor="secondary" to="/aee-si-copiii" hover>
              <div className="p-8">
                <h3 className="font-bold text-neutral-800 mb-3 text-lg">AEE și copiii</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Informații despre cum afectează angioedemul ereditar copiii și ce trebuie să știe părinții.
                </p>
                <span className="text-secondary-500 font-semibold text-sm mt-4 inline-block">Citește mai mult &rarr;</span>
              </div>
            </Card>
            <Card variant="feature" accentColor="accent" to="/femei-si-sarcina" hover>
              <div className="p-8">
                <h3 className="font-bold text-neutral-800 mb-3 text-lg">Femei și sarcină</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Informații esențiale despre AEE în contextul sarcinii și sănătății femeilor.
                </p>
                <span className="text-accent-500 font-semibold text-sm mt-4 inline-block">Citește mai mult &rarr;</span>
              </div>
            </Card>
            <Card variant="feature" accentColor="primary" to="/calatorii" hover>
              <div className="p-8">
                <h3 className="font-bold text-neutral-800 mb-3 text-lg">Călătorii cu AEE</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Sfaturi și recomandări pentru călătoriile în siguranță cu angioedem ereditar.
                </p>
                <span className="text-primary-500 font-semibold text-sm mt-4 inline-block">Citește mai mult &rarr;</span>
              </div>
            </Card>
            <Card variant="feature" accentColor="secondary" to="/despre-haei" hover>
              <div className="p-8">
                <h3 className="font-bold text-neutral-800 mb-3 text-lg">Despre HAEi</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Află despre organizația internațională HAE International și misiunea sa.
                </p>
                <span className="text-secondary-500 font-semibold text-sm mt-4 inline-block">Citește mai mult &rarr;</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Source Attribution */}
      <section className="py-8 bg-neutral-50 section-divider">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-500 text-sm">
            Informații bazate pe date de la{' '}
            <a href="https://haei.org/what-is-hae/" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:text-accent-600 underline">
              HAE International (HAEi)
            </a>
            {', '}
            <a href="https://rarediseases.org/rare-diseases/hereditary-angioedema/" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:text-accent-600 underline">
              NORD
            </a>
            {' și '}
            <a href="https://my.clevelandclinic.org/health/diseases/hereditary-angioedema" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:text-accent-600 underline">
              Cleveland Clinic
            </a>.
          </p>
        </div>
      </section>
    </div>
  </>
  );
};

export default WhatIsHAE;
