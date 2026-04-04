import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, FlaskConical, ShieldCheck } from 'lucide-react';
import { PageHero, SectionHeader, Callout } from '../components/ui';
import SEO from '../components/SEO';

const bloodTests = [
  {
    icon: Activity,
    title: 'C1-inhibitor cantitativ',
    description:
      'Măsoară cantitatea (nivelul antigenic) de proteină C1-inhibitor prezentă în sânge. Un nivel scăzut indică AEE Tip I.',
    pill: 'Cunoscut și ca: C1-INH antigenic',
    iconBg: 'bg-primary-50',
    iconBorder: 'border border-primary-200',
    iconColor: 'text-primary-500',
  },
  {
    icon: FlaskConical,
    title: 'C1-inhibitor funcțional',
    description:
      'Evaluează cât de bine funcționează proteina C1-inhibitor. Esențial pentru detectarea AEE Tip II, unde cantitatea poate fi normală, dar funcția este deficitară.',
    pill: 'Cunoscut și ca: C1-INH funcțional',
    iconBg: 'bg-secondary-50',
    iconBorder: 'border border-secondary-200',
    iconColor: 'text-secondary-500',
  },
  {
    icon: ShieldCheck,
    title: 'Complement C4',
    description:
      'Măsoară nivelul componentei C4 a sistemului complement. Un nivel de C4 scăzut este un indicator puternic care sugerează un posibil diagnostic de AEE.',
    pill: 'Adesea scăzut în timpul și între crize',
    iconBg: 'bg-accent-50',
    iconBorder: 'border border-accent-200',
    iconColor: 'text-accent-500',
  },
];

const mutations = [
  { gene: 'F12', label: 'Factorul XII', dotColor: 'bg-primary-400' },
  { gene: 'PLG', label: 'Plasminogenul', dotColor: 'bg-secondary-400' },
  { gene: 'ANGPT1', label: 'Angiopoietina', dotColor: 'bg-accent-400' },
  { gene: 'KNG1', label: 'Kininogenul', dotColor: 'bg-primary-400' },
  { gene: 'MYOF', label: 'Myoferilina', dotColor: 'bg-secondary-400' },
];

const DiagnosticAEE: React.FC = () => {
  return (
    <>
      <SEO
        title="Diagnosticarea AEE"
        description="Cum se diagnostichează angioedemul ereditar. Analize de sânge specifice și teste genetice pentru confirmarea AEE."
        path="/diagnosticarea-aee"
      />

      <div>
        {/* Hero */}
        <PageHero
          variant="reader"
          backLink="/ce-este-aee"
          backLabel="Despre AEE"
          title="Cum se diagnostichează AEE"
          description="Majoritatea cazurilor de angioedem sau umflare NU reprezintă AEE sau deficit de C1-inhibitor. Analiza de laborator a probelor de sânge sau a probelor genetice este necesară pentru a stabili diagnosticul de AEE."
        />

        {/* Blood Tests */}
        <section className="py-14 bg-white">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              reader={true}
              title="Analize de sânge specifice"
              description="Există trei analize specifice de sânge utilizate pentru confirmarea angioedemului ereditar de Tip I sau II:"
            />

            <div className="space-y-4 mt-8">
              {bloodTests.map((test) => {
                const Icon = test.icon;
                return (
                  <div
                    key={test.title}
                    className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors"
                  >
                    <div
                      className={`w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0 ${test.iconBg} ${test.iconBorder}`}
                    >
                      <Icon size={22} className={test.iconColor} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-neutral-800 font-bold text-lg mb-1">
                        {test.title}
                      </h3>
                      <p className="text-[17px] leading-[1.85] text-neutral-600 mb-3">
                        {test.description}
                      </p>
                      <span className="inline-block bg-neutral-100 rounded-full px-4 py-1.5 text-sm text-neutral-600">
                        {test.pill}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HAE with Normal C1-Inhibitor */}
        <section className="py-14 bg-white">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              reader={true}
              title="AEE cu C1-inhibitor normal"
            />

            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-8">
              La persoanele cu AEE cu C1-inhibitor normal, nivelurile și funcția
              C1-inhibitorului sunt normale. Cercetătorii au descoperit că, în unele
              cazuri, AEE cu C1-inhibitor normal este asociat cu mutații ale anumitor
              gene.
            </p>

            <div className="bg-neutral-50 rounded-2xl p-7 mb-8">
              <h3 className="text-neutral-800 font-bold text-lg mb-5">
                Mutații genetice asociate
              </h3>
              <ul className="space-y-3">
                {mutations.map((m) => (
                  <li key={m.gene} className="flex items-start gap-3">
                    <span
                      className={`mt-1.5 w-2.5 h-2.5 rounded-full ${m.dotColor} shrink-0`}
                    />
                    <span className="text-[17px] leading-[1.85] text-neutral-600">
                      {m.label} (<strong className="text-neutral-800 font-bold">{m.gene}</strong>)
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-8">
              Cu toate acestea, în multe cazuri, <strong className="text-neutral-800 font-bold">cauza genetică a AEE cu C1-inhibitor normal este necunoscută</strong>. Unele laboratoare comerciale pot testa mutațiile Factorului XII, însă nu există teste de laborator de rutină pentru a confirma un diagnostic de AEE cu C1-inhibitor normal.
            </p>

            <Callout variant="warning">
              <p className="leading-relaxed font-medium">
                Absența unui istoric familial <strong>nu exclude</strong>{' '}
                diagnosticul de AEE. Până la{' '}
                <strong>25% din cazurile de AEE</strong> rezultă dintr-o mutație
                spontană (de novo) a genei C1-inhibitorului la concepție. De aceea,
                orice suspiciune clinică trebuie investigată prin analize de laborator
                specifice.
              </p>
            </Callout>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 bg-white border-t border-neutral-100">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link
                to="/care-sunt-declansatorii-aee"
                className="text-primary-500 font-semibold hover:text-primary-600 transition-colors"
              >
                ← Factori declanșatori
              </Link>
              <Link
                to="/cum-tratam-aee"
                className="text-primary-500 font-semibold hover:text-primary-600 transition-colors sm:text-right"
              >
                Tratamente disponibile →
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
                href="https://haei.org/hae/diagnosing_hae"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 underline"
              >
                HAE International (HAEi)
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DiagnosticAEE;
