import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import { ArticleHero, ArticleSection, Pullquote, ArticleNav, ArticleSource } from '../components/ui';

const WhatIsHAE: React.FC = () => {
  return (
    <>
      <SEO
        title="Ce este Angioedemul Ereditar"
        description="Angioedemul Ereditar (AEE) este o afecțiune genetică foarte rară și potențial fatală. Află despre tipurile de AEE, simptome și de ce diagnosticul precoce este important."
        path="/ce-este-aee"
      />
      <div className="bg-white">
        <ArticleHero
          title="Angioedemul Ereditar"
          description="O afecțiune genetică foarte rară și potențial fatală, care apare la aproximativ 1 din 10.000 până la 1 din 50.000 de persoane."
        />

        <div className="max-w-[860px] mx-auto px-5 sm:px-6 pb-20">

          {/* Ce este AEE */}
          <ArticleSection label="Definiție">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-5 leading-snug">Ce este AEE</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-5">
              Persoanele cu AEE suferă adesea de dureri abdominale insuportabile, greață și vărsături cauzate de umflarea peretelui intestinal. <strong className="text-neutral-800 font-bold">Umflarea căilor respiratorii sau a gâtului este deosebit de periculoasă</strong>, deoarece poate cauza moartea prin sufocare.
            </p>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-5">
              Majoritatea persoanelor cu AEE au un defect în gena care controlează o proteină importantă numită <strong className="text-neutral-800 font-bold">C1-inhibitor</strong>, care se găsește în plasmă — partea lichidă a sângelui. Din cauza acestui defect genetic, C1-inhibitorul nu își îndeplinește funcția de a controla interacțiunile biologice complexe din plasmă.
            </p>
            <p className="text-[17px] leading-[1.85] text-neutral-600">
              Necontrolate, aceste interacțiuni produc o substanță numită <strong className="text-neutral-800 font-bold">bradikinină</strong>, care provoacă umflarea prin permiterea fluidelor plasmatice să pătrundă în țesuturile moi ale diverselor părți ale corpului.
            </p>

            <Pullquote>
              <p>
                Umflarea legată de AEE <strong>nu este aceeași</strong> cu umflarea cauzată de alergii. Antihistaminicele, corticosteroizii și epinefrina sunt <strong>ineficiente</strong> în tratarea AEE.
              </p>
              <p>
                Fără tratament, atacurile pot dura între <strong>două și cinci zile</strong>. Absența unui istoric familial nu exclude diagnosticul — până la <strong>25% din cazuri</strong> rezultă dintr-o mutație spontană.
              </p>
            </Pullquote>
          </ArticleSection>

          {/* Tipuri */}
          <ArticleSection label="Clasificare">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-3 leading-snug">Tipurile de AEE</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-6">Clasificate în funcție de nivelul și funcția C1-inhibitorului.</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-neutral-200 my-6">
              <div className="bg-white p-6 sm:pl-0">
                <span className="font-playfair text-5xl font-black text-primary-200 leading-none block mb-3">I</span>
                <h3 className="text-[15px] font-extrabold text-neutral-800 mb-1">AEE Tip I</h3>
                <span className="text-xs font-bold text-primary-500 block mb-2">85% din cazuri</span>
                <p className="text-sm leading-relaxed text-neutral-500">Cea mai frecventă formă, caracterizată prin niveluri cantitative scăzute de C1-inhibitor.</p>
              </div>
              <div className="bg-white p-6">
                <span className="font-playfair text-5xl font-black text-secondary-200 leading-none block mb-3">II</span>
                <h3 className="text-[15px] font-extrabold text-neutral-800 mb-1">AEE Tip II</h3>
                <span className="text-xs font-bold text-primary-500 block mb-2">15% din cazuri</span>
                <p className="text-sm leading-relaxed text-neutral-500">Niveluri normale sau crescute de C1-inhibitor, dar proteina nu funcționează corect.</p>
              </div>
              <div className="bg-white p-6 sm:pr-0">
                <span className="font-playfair text-5xl font-black text-accent-200 leading-none block mb-3">N</span>
                <h3 className="text-[15px] font-extrabold text-neutral-800 mb-1">C1-inhibitor normal</h3>
                <p className="text-sm leading-relaxed text-neutral-500">Simptome consistente cu AEE tip I și II, dar rezultatele de laborator arată niveluri și funcție normale. Mutații genetice recente confirmate.</p>
              </div>
            </div>
          </ArticleSection>

          {/* Simptome */}
          <ArticleSection label="Simptome">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-6 leading-snug">Simptomele AEE</h2>

            <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-x-6 py-6 border-b border-neutral-200 items-start">
              <span className="font-playfair text-xs font-bold text-neutral-400 uppercase tracking-wider pt-1">Piele</span>
              <div>
                <h3 className="font-playfair text-xl font-bold text-neutral-800 mb-2">Umflături cutanate</h3>
                <p className="text-base leading-[1.75] text-neutral-600 mb-1">Umflături dureroase ale mâinilor, picioarelor, feței și regiunii genitale. Zonele umflate sunt dure, dureroase, fără mâncărime și fără roșeață — diferit de reacțiile alergice.</p>
                <p className="text-sm text-neutral-400">~25% experimentează erupție cutanată roșie, fără mâncărime, înainte sau în timpul unui atac.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-x-6 py-6 border-b border-neutral-200 items-start">
              <span className="font-playfair text-xs font-bold text-neutral-400 uppercase tracking-wider pt-1">Abdomen</span>
              <div>
                <h3 className="font-playfair text-xl font-bold text-neutral-800 mb-2">Simptome abdominale</h3>
                <p className="text-base leading-[1.75] text-neutral-600 mb-1">Dureri abdominale insuportabile, greață, vărsături și diaree cauzate de umflarea peretelui intestinal.</p>
                <p className="text-sm text-neutral-400">Pot fi confundate cu alte patologii și pot duce la intervenții chirurgicale inutile când AEE nu este diagnosticat.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-x-6 py-6 border-b border-neutral-200 items-start">
              <span className="font-playfair text-xs font-bold text-error uppercase tracking-wider pt-1">Pericol vital</span>
              <div>
                <h3 className="font-playfair text-xl font-bold text-neutral-800 mb-2">Edem laringian</h3>
                <p className="text-base leading-[1.75] text-neutral-600 mb-1">Cele mai periculoase simptome. Umflăturile la nivelul gâtului sau căilor respiratorii pot cauza <strong className="text-neutral-800 font-bold">deces prin sufocare</strong> dacă nu sunt tratate.</p>
                <p className="text-sm text-neutral-400">Rata mortalității: ~30% pentru persoane netratate. 50% experimentează cel puțin o umflare a gâtului în viață.</p>
              </div>
            </div>
          </ArticleSection>

          {/* Semne de avertizare */}
          <ArticleSection label="Avertizare">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-5 leading-snug">Semne de avertizare</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-6">Înainte de un episod, unii pacienți experimentează semne precoce (simptome prodromale):</p>

            <div className="grid sm:grid-cols-2 gap-0">
              {['Furnicături sau senzație de strângere', 'Oboseală extremă', 'Schimbări bruște de dispoziție', 'Greață sau iritabilitate'].map((sign) => (
                <div key={sign} className="flex items-center gap-3 py-3.5 border-b border-neutral-100 text-base text-neutral-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                  {sign}
                </div>
              ))}
            </div>

            <div className="pt-12">
              <span className="font-playfair text-[56px] font-black text-primary-400 leading-none">25%</span>
              <span className="font-playfair text-2xl text-neutral-600 ml-2 leading-snug">
                dintre pacienți experimentează o erupție cutanată roșie, fără mâncărime, care apare adesea înainte sau în timpul unui episod.
              </span>
            </div>
          </ArticleSection>

          {/* Află mai multe */}
          <div className="py-12 border-t border-neutral-200">
            <h2 className="font-playfair text-[22px] font-bold text-neutral-800 mb-6">Află mai multe</h2>
            <div className="grid sm:grid-cols-2 gap-0">
              {[
                { to: '/care-sunt-declansatorii-aee', label: 'Factori declanșatori' },
                { to: '/ce-cauzeaza-aee', label: 'Principalele cauze' },
                { to: '/cum-tratam-aee', label: 'Tratamente' },
                { to: '/diagnosticarea-aee', label: 'Diagnosticarea' },
                { to: '/aee-si-copiii', label: 'AEE și copiii' },
                { to: '/femei-si-sarcina', label: 'Femei și sarcină' },
                { to: '/calatorii', label: 'Călătorii' },
                { to: '/despre-haei', label: 'Despre HAEi' },
              ].map((link, i) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex justify-between items-center py-3.5 text-sm font-bold text-neutral-700 hover:text-primary-500 transition-colors border-b border-neutral-100 ${i % 2 === 0 ? 'sm:mr-8' : 'sm:ml-8'}`}
                >
                  {link.label}
                  <ChevronRight size={14} className="text-neutral-300" />
                </Link>
              ))}
            </div>
          </div>

          <ArticleSource sources={[
            { href: 'https://haei.org/what-is-hae/', label: 'HAE International (HAEi)' },
            { href: 'https://rarediseases.org/rare-diseases/hereditary-angioedema/', label: 'NORD' },
            { href: 'https://my.clevelandclinic.org/health/diseases/hereditary-angioedema', label: 'Cleveland Clinic' },
          ]} />

          <ArticleNav next={{ to: '/ce-cauzeaza-aee', label: 'Tipurile și cauzele AEE' }} />
        </div>
      </div>
    </>
  );
};

export default WhatIsHAE;
