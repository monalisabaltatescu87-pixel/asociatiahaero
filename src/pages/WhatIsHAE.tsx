import React from 'react';
import { Link } from 'react-router-dom';

const WhatIsHAE: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-haero-yellow-50 via-haero-cream to-haero-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-haero-dark mb-4">
              Care sunt <span className="text-haero-yellow-600">simptomele AEE</span>?
            </h1>
            <div className="w-20 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-haero-gray-500 max-w-3xl mx-auto leading-relaxed">
              Angioedermul Ereditar (AEE) este o afecțiune genetică rară caracterizată prin
              episoade recurente și dureroase de umflături (edem) severe în diferite părți
              ale corpului. AEE <strong>NU</strong> este o alergie sau o reacție alergică.
            </p>
          </div>
        </div>
      </section>

      {/* What is HAE */}
      <section className="py-16 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-haero-dark mb-6">
                Ce este <span className="text-haero-yellow-600">AEE</span>?
              </h2>
              <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
                <strong>Angioedermul Ereditar (AEE)</strong> este o boală genetică rară,
                cu potențial letal, transmisă autozomal dominant — sunt 50% șanse ca
                părintele purtător să transmită boala copiilor — care se manifestă prin
                episoade recurente de angioedem localizat în diverse regiuni anatomice.
                Afectează aproximativ <strong>1 din 50.000</strong> de persoane.
              </p>
              <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
                Denumirea de „ereditar" se datorează faptului că mutația genetică este
                transmisă din generație în generație. Totuși, <strong>25% din cazuri</strong> sunt
                reprezentate de pacienți care au avut o mutație spontană a genei inhibitorului
                C1 la concepție — absența istoricului familial nu exclude diagnosticul.
              </p>
              <p className="text-haero-gray-700 text-lg leading-relaxed">
                Cel mai frecvent, primele episoade apar în copilărie sau adolescență.
                Aproximativ 50% dintre pacienții cu AEE tip I sau II dezvoltă simptome
                până la vârsta de 10 ani, iar aproape toți prezintă simptome până la
                vârsta de 20 de ani.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-red">
              <h3 className="font-bold text-haero-dark mb-4 text-lg">Important de știut</h3>
              <p className="text-haero-gray-700 leading-relaxed mb-4">
                Umflăturile cauzate de AEE <strong>NU sunt identice</strong> cu cele
                cauzate de alergii și <strong>NU pot fi tratate</strong> ca o reacție
                alergică.
              </p>
              <p className="text-haero-gray-700 leading-relaxed mb-4">
                <strong>Antihistaminicele, corticosteroizii (prednison) și adrenalina
                sunt ineficiente</strong> în ameliorarea simptomelor AEE.
              </p>
              <p className="text-haero-gray-700 leading-relaxed">
                Un episod tipic durează <strong>3-5 zile</strong> fără tratament.
                Fără tratament, pacienții pot fi debilitați de simptome timp de
                100 de zile sau mai mult pe an.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-haero-dark mb-4">
              Simptome și <span className="text-haero-yellow-600">manifestări</span>
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto mb-4"></div>
            <p className="text-haero-gray-500 max-w-3xl mx-auto text-lg">
              Episoadele de umflătură apar cel mai frecvent la nivelul pielii, abdomenului
              și gâtului/căilor respiratorii.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-haero-yellow-50 rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow">
              <div className="w-12 h-12 bg-haero-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="font-bold text-haero-dark mb-3 text-lg">Umflături cutanate</h3>
              <p className="text-haero-gray-500 leading-relaxed mb-3">
                Umflături dureroase ale mâinilor, picioarelor, feței și regiunii genitale.
                Zonele umflate sunt dure, dureroase, fără mâncărime și fără roșeață —
                diferit de reacțiile alergice.
              </p>
              <p className="text-haero-gray-500 leading-relaxed text-sm">
                Umflăturile încep cu senzație de strângere și furnicătură, apoi progresează
                spre un edem extrem și dureros.
              </p>
            </div>

            <div className="bg-haero-yellow-50 rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow-600">
              <div className="w-12 h-12 bg-haero-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-haero-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <h3 className="font-bold text-haero-dark mb-3 text-lg">Simptome abdominale</h3>
              <p className="text-haero-gray-500 leading-relaxed mb-3">
                Umflarea peretelui intestinal poate provoca crampe abdominale severe,
                greață, vărsături, diaree și dureri. <strong>Atacurile abdominale
                reprezintă jumătate din totalul episoadelor de AEE.</strong>
              </p>
              <p className="text-haero-gray-500 leading-relaxed text-sm">
                Pot fi confundate cu alte patologii și pot duce la intervenții
                chirurgicale inutile atunci când AEE nu este diagnosticat.
              </p>
            </div>

            <div className="bg-haero-yellow-50 rounded-2xl p-8 shadow-raised border-t-4 border-haero-red">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-haero-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-haero-dark mb-3 text-lg">Edem laringian</h3>
              <p className="text-haero-gray-500 leading-relaxed mb-3">
                Umflăturile la nivelul gâtului sau limbii sunt <strong>deosebit de
                periculoase</strong> și pot cauza deces prin sufocare dacă nu sunt tratate.
              </p>
              <p className="text-haero-gray-500 leading-relaxed text-sm">
                Rata mortalității pentru edemul laringian netratat este estimată la
                aproximativ <strong>30%</strong>. Pot apărea modificări ale vocii și
                dificultăți de înghițire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prodromal Symptoms */}
      <section className="py-16 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-haero-dark mb-6">
              Semne de <span className="text-haero-yellow-600">avertizare</span> precoce
            </h2>
            <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
              Înainte de un episod, unii pacienți experimentează semne precoce de
              avertizare (simptome prodromale):
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 shadow-raised flex items-center gap-3">
                <div className="w-2 h-2 bg-haero-yellow rounded-full flex-shrink-0"></div>
                <span className="text-haero-gray-700">Furnicături sau senzație de strângere</span>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-raised flex items-center gap-3">
                <div className="w-2 h-2 bg-haero-yellow rounded-full flex-shrink-0"></div>
                <span className="text-haero-gray-700">Oboseală extremă</span>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-raised flex items-center gap-3">
                <div className="w-2 h-2 bg-haero-yellow rounded-full flex-shrink-0"></div>
                <span className="text-haero-gray-700">Schimbări bruște de dispoziție</span>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-raised flex items-center gap-3">
                <div className="w-2 h-2 bg-haero-yellow rounded-full flex-shrink-0"></div>
                <span className="text-haero-gray-700">Greață sau iritabilitate</span>
              </div>
            </div>
            <p className="text-haero-gray-700 text-lg leading-relaxed">
              Aproximativ <strong>25% dintre pacienți</strong> experimentează o erupție
              cutanată roșiatică, plată, fără mâncărime, care apare adesea înainte sau
              în timpul unui episod de AEE.
            </p>
          </div>
        </div>
      </section>

      {/* Diagnostic */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-haero-dark mb-4">
              Importanța <span className="text-haero-yellow-600">diagnosticului</span>
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto"></div>
          </div>
          <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
            Certitudinea diagnosticului vine adesea după ani în care vizitele la medic
            au fost nenumărate. Diagnosticul greșit este o problemă serioasă — pacienții
            pot primi tratament incorect, inclusiv intervenții chirurgicale inutile pentru
            durerile abdominale severe.
          </p>
          <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
            Diagnosticul corect se bazează pe analize de sânge specifice: niveluri scăzute
            de <strong>C4</strong> și <strong>funcție scăzută a inhibitorului C1</strong> indică
            angioedermul ereditar. Dacă angioedermul nu este însoțit de urticarie și
            reapare fără o cauză clară, medicii trebuie să suspecteze AEE.
          </p>
          <div className="bg-haero-yellow-50 rounded-2xl p-6 border border-haero-yellow-200">
            <p className="text-haero-gray-700 leading-relaxed font-medium">
              Este important să informați medicul despre istoricul familial. Un diagnostic
              precoce poate salva vieți și poate îmbunătăți semnificativ calitatea vieții.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-navigation Cards */}
      <section className="py-16 bg-haero-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-haero-dark mb-4">
              Află <span className="text-haero-yellow-600">mai multe</span>
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/care-sunt-declansatorii-aee" className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 block">
              <h3 className="font-bold text-haero-dark mb-3 text-lg">Factori declanșatori</h3>
              <p className="text-haero-gray-500 text-sm leading-relaxed">
                Descoperă care sunt factorii care pot declanșa un episod de angioedem ereditar.
              </p>
              <span className="text-haero-yellow-600 font-semibold text-sm mt-4 inline-block">Citește mai mult →</span>
            </Link>
            <Link to="/ce-cauzeaza-aee" className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow-600 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 block">
              <h3 className="font-bold text-haero-dark mb-3 text-lg">Principalele cauze</h3>
              <p className="text-haero-gray-500 text-sm leading-relaxed">
                Înțelege mecanismele genetice și biologice care stau la baza acestei boli rare.
              </p>
              <span className="text-haero-yellow-600 font-semibold text-sm mt-4 inline-block">Citește mai mult →</span>
            </Link>
            <Link to="/cum-tratam-aee" className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow-700 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 block">
              <h3 className="font-bold text-haero-dark mb-3 text-lg">Tratamente disponibile</h3>
              <p className="text-haero-gray-500 text-sm leading-relaxed">
                Află despre tratamentele moderne disponibile pentru managementul AEE.
              </p>
              <span className="text-haero-yellow-600 font-semibold text-sm mt-4 inline-block">Citește mai mult →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Source Attribution */}
      <section className="py-8 bg-haero-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-haero-gray-500 text-sm">
            Informații bazate pe date de la{' '}
            <a href="https://haei.org/what-is-hae/" target="_blank" rel="noopener noreferrer" className="text-haero-yellow-600 hover:text-haero-yellow-700 underline">
              HAE International (HAEi)
            </a>
            {', '}
            <a href="https://rarediseases.org/rare-diseases/hereditary-angioedema/" target="_blank" rel="noopener noreferrer" className="text-haero-yellow-600 hover:text-haero-yellow-700 underline">
              NORD
            </a>
            {' și '}
            <a href="https://my.clevelandclinic.org/health/diseases/hereditary-angioedema" target="_blank" rel="noopener noreferrer" className="text-haero-yellow-600 hover:text-haero-yellow-700 underline">
              Cleveland Clinic
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhatIsHAE;
