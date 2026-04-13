import React from 'react';
import SEO from '../components/SEO';
import { ArticleHero, ArticleSection, Pullquote, ArticleNav, ArticleSource } from '../components/ui';

const DiagnosticAEE: React.FC = () => {
  return (
    <>
      <SEO
        title="Diagnosticarea AEE"
        description="Cum se diagnostichează angioedemul ereditar. Analize de sânge specifice și teste genetice pentru confirmarea AEE."
        path="/diagnosticarea-aee"
      />
      <div className="bg-white">
        <ArticleHero
          backLink="/ce-este-aee"
          title="Diagnosticarea AEE"
          description="Majoritatea cazurilor de angioedem sau umflare NU reprezintă AEE. Analiza de laborator a probelor de sânge sau genetice este necesară pentru a stabili diagnosticul."
        />

        <div className="max-w-[860px] mx-auto px-5 sm:px-6 pb-20">

          {/* Analize de sânge */}
          <ArticleSection label="Analize">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-3 leading-snug">Analize de sânge specifice</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-8">Există trei analize specifice pentru confirmarea AEE de Tip I sau II:</p>

            <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-x-6 py-6 border-b border-neutral-200 items-start">
              <span className="font-playfair text-xs font-bold text-neutral-400 uppercase tracking-wider pt-1">Test 1</span>
              <div>
                <h3 className="font-playfair text-xl font-bold text-neutral-800 mb-2">C1-inhibitor cantitativ</h3>
                <p className="text-base leading-[1.75] text-neutral-600 mb-2">Măsoară cantitatea (nivelul antigenic) de proteină C1-inhibitor prezentă în sânge. Un nivel scăzut indică AEE Tip I.</p>
                <span className="text-sm text-neutral-400">Cunoscut și ca: C1-INH antigenic</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-x-6 py-6 border-b border-neutral-200 items-start">
              <span className="font-playfair text-xs font-bold text-neutral-400 uppercase tracking-wider pt-1">Test 2</span>
              <div>
                <h3 className="font-playfair text-xl font-bold text-neutral-800 mb-2">C1-inhibitor funcțional</h3>
                <p className="text-base leading-[1.75] text-neutral-600 mb-2">Evaluează cât de bine funcționează proteina C1-inhibitor. Esențial pentru detectarea AEE Tip II, unde cantitatea poate fi normală, dar funcția este deficitară.</p>
                <span className="text-sm text-neutral-400">Cunoscut și ca: C1-INH funcțional</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-x-6 py-6 border-b border-neutral-200 items-start">
              <span className="font-playfair text-xs font-bold text-neutral-400 uppercase tracking-wider pt-1">Test 3</span>
              <div>
                <h3 className="font-playfair text-xl font-bold text-neutral-800 mb-2">Complement C4</h3>
                <p className="text-base leading-[1.75] text-neutral-600 mb-2">Măsoară nivelul componentei C4 a sistemului complement. Un nivel de C4 scăzut este un indicator puternic care sugerează un posibil diagnostic de AEE.</p>
                <span className="text-sm text-neutral-400">Adesea scăzut în timpul și între crize</span>
              </div>
            </div>
          </ArticleSection>

          {/* C1-inhibitor normal */}
          <ArticleSection label="C1-INH normal">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-5 leading-snug">AEE cu C1-inhibitor normal</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-8">
              La persoanele cu AEE cu C1-inhibitor normal, nivelurile și funcția
              C1-inhibitorului sunt normale. Cercetătorii au descoperit că, în unele
              cazuri, AEE cu C1-inhibitor normal este asociat cu mutații ale anumitor gene.
            </p>

            <h3 className="font-bold text-neutral-800 text-lg mb-4">Mutații genetice asociate</h3>
            {[
              { gene: 'F12', label: 'Factorul XII' },
              { gene: 'PLG', label: 'Plasminogenul' },
              { gene: 'ANGPT1', label: 'Angiopoietina' },
              { gene: 'KNG1', label: 'Kininogenul' },
              { gene: 'MYOF', label: 'Myoferilina' },
            ].map((m) => (
              <div key={m.gene} className="flex items-center gap-3 py-2.5 border-b border-neutral-100 text-[17px] text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                {m.label} (<strong className="text-neutral-800 font-bold">{m.gene}</strong>)
              </div>
            ))}

            <p className="text-[17px] leading-[1.85] text-neutral-600 mt-8 mb-8">
              Cu toate acestea, în multe cazuri, <strong className="text-neutral-800 font-bold">cauza genetică a AEE cu C1-inhibitor normal este necunoscută</strong>. Nu există teste de laborator de rutină pentru a confirma acest diagnostic.
            </p>

            <Pullquote>
              <p>
                Absența unui istoric familial <strong>nu exclude</strong> diagnosticul de AEE. Până la <strong>25% din cazuri</strong> rezultă dintr-o mutație spontană (de novo). Orice suspiciune clinică trebuie investigată prin analize specifice.
              </p>
            </Pullquote>
          </ArticleSection>

          <ArticleSource sources={[
            { href: 'https://haei.org/hae/diagnosing_hae', label: 'HAE International (HAEi)' },
          ]} />

          <ArticleNav
            prev={{ to: '/care-sunt-declansatorii-aee', label: 'Factori declanșatori' }}
            next={{ to: '/cum-tratam-aee', label: 'Tratamente disponibile' }}
          />
        </div>
      </div>
    </>
  );
};

export default DiagnosticAEE;
