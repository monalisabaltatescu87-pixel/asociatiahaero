import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, SectionHeader, Card, Callout, IconBox } from '../components/ui';

const DiagnosticAEE: React.FC = () => {
  return (
    <><SEO title="Diagnosticarea AEE" description="Cum se diagnostichează angioedemul ereditar. Analize de sânge specifice și teste genetice pentru confirmarea AEE." path="/diagnosticarea-aee" /><div>
      {/* Hero Section */}
      <PageHero
        variant="accent"
        backLink="/ce-este-aee"
        backLabel="Despre AEE"
        title="Cum se"
        titleHighlight="diagnostichează AEE"
        description="Majoritatea cazurilor de angioedem sau umflare NU reprezintă AEE sau deficit de C1-inhibitor. Analiza de laborator a probelor de sânge sau a probelor genetice este necesară pentru a stabili diagnosticul de AEE."
      />

      {/* Blood Tests Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Analize de"
            titleHighlight="sânge specifice"
            dividerColor="accent"
            description="Există trei analize specifice de sânge utilizate pentru confirmarea angioedemului ereditar de Tip I sau II:"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Test 1 */}
            <Card variant="feature" accentColor="primary" hover={false} className="p-8">
              <IconBox variant="primary" size="lg" className="mb-5">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </IconBox>
              <h3 className="font-bold text-neutral-800 text-lg mb-3">
                C1-inhibitor cantitativ
              </h3>
              <p className="text-neutral-500 leading-relaxed mb-3">
                Măsoară <strong>cantitatea</strong> (nivelul antigenic) de proteină C1-inhibitor
                prezentă în sânge. Un nivel scăzut indică AEE Tip I.
              </p>
              <div className="bg-primary-50 rounded-lg px-4 py-2 text-sm text-neutral-700">
                Cunoscut și ca: C1-INH antigenic
              </div>
            </Card>

            {/* Test 2 */}
            <Card variant="feature" accentColor="accent" hover={false} className="p-8">
              <IconBox variant="accent" size="lg" className="mb-5">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </IconBox>
              <h3 className="font-bold text-neutral-800 text-lg mb-3">
                C1-inhibitor funcțional
              </h3>
              <p className="text-neutral-500 leading-relaxed mb-3">
                Evaluează cât de bine <strong>funcționează</strong> proteina C1-inhibitor.
                Esențial pentru detectarea AEE Tip II, unde cantitatea poate fi normală,
                dar funcția este deficitară.
              </p>
              <div className="bg-accent-50 rounded-lg px-4 py-2 text-sm text-neutral-700">
                Cunoscut și ca: C1-INH funcțional
              </div>
            </Card>

            {/* Test 3 */}
            <Card variant="feature" accentColor="secondary" hover={false} className="p-8">
              <IconBox variant="secondary" size="lg" className="mb-5">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </IconBox>
              <h3 className="font-bold text-neutral-800 text-lg mb-3">
                Complement C4
              </h3>
              <p className="text-neutral-500 leading-relaxed mb-3">
                Măsoară nivelul componentei C4 a sistemului complement. Un nivel de
                C4 <strong>scăzut</strong> este un indicator puternic care sugerează un posibil
                diagnostic de AEE.
              </p>
              <div className="bg-secondary-50 rounded-lg px-4 py-2 text-sm text-neutral-700">
                Adesea scăzut în timpul și între crize
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* HAE with Normal C1-Inhibitor */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="AEE cu C1-inhibitor"
            titleHighlight="normal"
            dividerColor="accent"
          />

          <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
            La persoanele cu AEE cu C1-inhibitor normal, nivelurile și funcția
            C1-inhibitorului sunt normale. Cercetătorii au descoperit că, în unele cazuri,
            AEE cu C1-inhibitor normal este asociat cu mutații ale anumitor gene.
          </p>

          <Card variant="accent-left" accentColor="accent" hover={false} className="p-8 mb-8">
            <h3 className="font-bold text-neutral-800 text-lg mb-4">
              Mutații genetice asociate
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-accent-400 shrink-0"></span>
                <span className="text-neutral-700 text-lg leading-relaxed">
                  Factorul XII (<strong>F12</strong>)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-primary-400 shrink-0"></span>
                <span className="text-neutral-700 text-lg leading-relaxed">
                  Plasminogenul (<strong>PLG</strong>)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-secondary-400 shrink-0"></span>
                <span className="text-neutral-700 text-lg leading-relaxed">
                  Angiopoietina (<strong>ANGPT1</strong>)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-accent-400 shrink-0"></span>
                <span className="text-neutral-700 text-lg leading-relaxed">
                  Kininogenul (<strong>KNG1</strong>)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-primary-400 shrink-0"></span>
                <span className="text-neutral-700 text-lg leading-relaxed">
                  Myoferilina (<strong>MYOF</strong>)
                </span>
              </li>
            </ul>
          </Card>

          <Callout variant="error" className="mb-8">
            <p className="leading-relaxed">
              Cu toate acestea, în multe cazuri, <strong>cauza genetică a AEE cu
              C1-inhibitor normal este necunoscută</strong>. Unele laboratoare comerciale
              pot testa mutațiile Factorului XII, însă nu există teste de laborator de
              rutină pentru a confirma un diagnostic de AEE cu C1-inhibitor normal.
            </p>
          </Callout>

          <Callout variant="warning">
            <p className="leading-relaxed font-medium">
              Absența unui istoric familial <strong>nu exclude</strong> diagnosticul de AEE.
              Până la <strong>25% din cazurile de AEE</strong> rezultă dintr-o mutație
              spontană (de novo) a genei C1-inhibitorului la concepție. De aceea, orice
              suspiciune clinică trebuie investigată prin analize de laborator specifice.
            </p>
          </Callout>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/cum-tratam-aee" className="text-accent-500 font-semibold hover:text-accent-600 transition-colors">
              ← Tratamente disponibile
            </Link>
            <Link to="/aee-si-copiii" className="text-accent-500 font-semibold hover:text-accent-600 transition-colors sm:text-right">
              AEE și copiii →
            </Link>
          </div>
        </div>
      </section>

      {/* Source Attribution */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-500 text-sm">
            Informații bazate pe date de la{' '}
            <a href="https://haei.org/hae/diagnosing_hae" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:text-accent-600 underline">
              HAE International (HAEi)
            </a>.
          </p>
        </div>
      </section>
    </div>
  </>
  );
};

export default DiagnosticAEE;
