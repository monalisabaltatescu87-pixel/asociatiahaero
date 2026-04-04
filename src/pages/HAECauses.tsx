import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, SectionHeader, Callout } from '../components/ui';

const HAECauses: React.FC = () => {
  return (
    <><SEO title="Cauzele Angioedemului Ereditar" description="Angioedemul ereditar este cauzat de o mutație genetică ce afectează proteina C1-inhibitor. Află despre mecanismele biologice ale bolii." path="/ce-cauzeaza-aee" /><div className="bg-white">
      {/* Hero Section */}
      <PageHero
        variant="reader"
        title="Principalele cauze"
        description="AEE tip I și tip II sunt cauzate de un defect (mutație) în gena responsabilă pentru producerea proteinei inhibitor C1 esterază (C1-INH)."
        backLink="/ce-este-aee"
        backLabel="Despre AEE"
      />

      {/* Genetic Cause */}
      <section className="py-8 bg-white">
        <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Cauza genetică"
            reader={true}
          />

          <p className="text-[17px] leading-[1.85] text-neutral-600 mb-6">
            AEE este cauzat de mutații în gena <strong className="text-neutral-800 font-bold">SERPING1</strong>, care furnizează
            instrucțiuni pentru producerea proteinei inhibitorul C1 esterază (C1-INH).
            Această proteină este importantă pentru controlul răspunsului imunitar
            și al inflamației.
          </p>
          <p className="text-[17px] leading-[1.85] text-neutral-600 mb-6">
            În condiții normale, C1-INH reglează producția de <strong className="text-neutral-800 font-bold">bradikinină</strong> în
            organism — un hormon care joacă un rol important în controlul dilatării
            și permeabilității vaselor de sânge. Dacă C1-INH nu funcționează corect
            sau dacă concentrația sa este scăzută, bradikinina este eliberată în exces,
            provocând umflăturile localizate.
          </p>
          <p className="text-[17px] leading-[1.85] text-neutral-600 mb-6">
            Boala este transmisă <strong className="text-neutral-800 font-bold">autozomal dominant</strong> — un copil are
            50% șanse de a moșteni boala dacă unul dintre părinți este afectat. Cu
            toate acestea, aproximativ <strong className="text-neutral-800 font-bold">25% din cazuri</strong> rezultă din
            mutații spontane (de novo).
          </p>
          <p className="text-[17px] leading-[1.85] text-neutral-600 mb-10">
            Au fost identificate aproape <strong className="text-neutral-800 font-bold">300 de variante patogene</strong> ale
            genei SERPING1.
          </p>

          {/* HAE Types as stacked rows */}
          <div className="space-y-4 mb-8">
            {/* Tip I */}
            <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <span className="text-primary-500 font-bold text-lg">I</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className="font-bold text-neutral-800 text-lg">AEE Tip I — Deficit cantitativ</h3>
                  <span className="text-sm text-neutral-500">85% din cazuri</span>
                </div>
                <p className="text-[17px] leading-[1.85] text-neutral-600 mb-3">
                  Cea mai frecventă formă a afecțiunii, se caracterizează prin niveluri
                  cantitative scăzute de C1-inhibitor.
                </p>
                <div className="bg-primary-50 rounded-lg px-4 py-2 text-sm text-neutral-600">
                  Nivel C1-INH: scăzut | Funcție C1-INH: scăzută
                </div>
              </div>
            </div>

            {/* Tip II */}
            <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary-100 flex items-center justify-center">
                <span className="text-secondary-500 font-bold text-lg">II</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className="font-bold text-neutral-800 text-lg">AEE Tip II — Deficit funcțional</h3>
                  <span className="text-sm text-neutral-500">15% din cazuri</span>
                </div>
                <p className="text-[17px] leading-[1.85] text-neutral-600 mb-3">
                  Testele de laborator arată niveluri normale sau crescute de C1-inhibitor,
                  dar proteina nu funcționează corect.
                </p>
                <div className="bg-primary-50 rounded-lg px-4 py-2 text-sm text-neutral-600">
                  Nivel C1-INH: normal/crescut | Funcție C1-INH: scăzută
                </div>
              </div>
            </div>

            {/* C1-inhibitor normal */}
            <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center">
                <span className="text-accent-500 font-bold text-lg">N</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className="font-bold text-neutral-800 text-lg">AEE cu C1-inhibitor normal</h3>
                </div>
                <p className="text-[17px] leading-[1.85] text-neutral-600 mb-3">
                  Simptomele sunt consistente cu AEE tip I și II, dar rezultatele de
                  laborator arată niveluri și funcție normale ale C1-inhibitorului.
                  Studiile recente au confirmat că AEE cu C1-Inhibitor normal include un
                  număr de mutații genetice care sunt conectate cu umflarea. Așteptarea
                  este ca mai multe astfel de mutații să fie identificate în viitor.
                </p>
                <div className="bg-primary-50 rounded-lg px-4 py-2 text-sm text-neutral-600">
                  Nivel C1-INH: normal | Funcție C1-INH: normală
                </div>
              </div>
            </div>
          </div>

          <p className="text-[17px] leading-[1.85] text-neutral-600 mt-6">
            Absența unui istoric familial nu exclude diagnosticul de AEE cauzat de
            deficiența de C1-inhibitor. Până la <strong className="text-neutral-800 font-bold">25% din cazurile de HAE</strong> rezultă
            dintr-o mutație spontană a genei C1-inhibitorului la concepție. Copiii
            au <strong className="text-neutral-800 font-bold">50% șanse</strong> să moștenească HAE dacă unul dintre părinți are
            această afecțiune.
          </p>
          <SectionHeader
            title="Mecanismul bolii"
            className="mt-10"
            reader={true}
          />

          {/* Disease Mechanism Diagram */}
          <div className="mb-10 bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 sm:p-8 border border-primary-200 shadow-raised">
            <h3 className="text-center text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6">
              Cascada bradikininei în AEE
            </h3>
            <svg viewBox="0 0 600 520" className="w-full max-w-lg mx-auto" aria-label="Diagrama mecanismului bolii AEE: cascada bradikininei">
              {/* Step 1: Gene mutation */}
              <rect x="150" y="10" width="300" height="60" rx="12" fill="#FBC02D" />
              <text x="300" y="35" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#2D2926">Mutație gena SERPING1</text>
              <text x="300" y="53" textAnchor="middle" fontSize="11" fill="#2D2926">defect genetic moștenit sau de novo</text>

              {/* Arrow 1 */}
              <line x1="300" y1="70" x2="300" y2="100" stroke="#D32F2F" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

              {/* Step 2: C1-INH deficiency */}
              <rect x="150" y="100" width="300" height="60" rx="12" fill="#FFF3E0" stroke="#FBC02D" strokeWidth="2" />
              <text x="300" y="125" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#2D2926">Deficit de C1-Inhibitor</text>
              <text x="300" y="143" textAnchor="middle" fontSize="11" fill="#5D4037">proteină insuficientă sau nefuncțională</text>

              {/* Arrow 2 */}
              <line x1="300" y1="160" x2="300" y2="190" stroke="#D32F2F" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

              {/* Step 3: Kallikrein uncontrolled */}
              <rect x="150" y="190" width="300" height="60" rx="12" fill="#FFF3E0" stroke="#FBC02D" strokeWidth="2" />
              <text x="300" y="215" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#2D2926">Kalikreina necontrolată</text>
              <text x="300" y="233" textAnchor="middle" fontSize="11" fill="#5D4037">enzimă care scapă de sub reglare</text>

              {/* Arrow 3 */}
              <line x1="300" y1="250" x2="300" y2="280" stroke="#D32F2F" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

              {/* Step 4: Bradykinin overproduction */}
              <rect x="150" y="280" width="300" height="60" rx="12" fill="#FFCCBC" stroke="#D32F2F" strokeWidth="2" />
              <text x="300" y="305" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#B71C1C">Exces de bradikinină</text>
              <text x="300" y="323" textAnchor="middle" fontSize="11" fill="#5D4037">supraproducție de bradikinină</text>

              {/* Arrow 4 */}
              <line x1="300" y1="340" x2="300" y2="370" stroke="#D32F2F" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

              {/* Step 5: Vascular permeability */}
              <rect x="150" y="370" width="300" height="60" rx="12" fill="#FFCCBC" stroke="#D32F2F" strokeWidth="2" />
              <text x="300" y="395" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#B71C1C">Permeabilitate vasculară crescută</text>
              <text x="300" y="413" textAnchor="middle" fontSize="11" fill="#5D4037">lichid se scurge prin pereții vaselor</text>

              {/* Arrow 5 */}
              <line x1="300" y1="430" x2="300" y2="460" stroke="#D32F2F" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

              {/* Step 6: Angioedema */}
              <rect x="150" y="460" width="300" height="55" rx="12" fill="#D32F2F" />
              <text x="300" y="485" textAnchor="middle" fontWeight="bold" fontSize="15" fill="#FFFFFF">Angioedem (umflătură)</text>
              <text x="300" y="502" textAnchor="middle" fontSize="11" fill="#FFCDD2">episod acut de AEE</text>

              {/* Side annotation: NOT histamine */}
              <rect x="465" y="290" width="130" height="40" rx="8" fill="#E3F2FD" stroke="#1976D2" strokeWidth="1.5" />
              <text x="530" y="307" textAnchor="middle" fontWeight="bold" fontSize="10" fill="#1976D2">≠ Histamină</text>
              <text x="530" y="320" textAnchor="middle" fontSize="9" fill="#1976D2">nu e reacție alergică</text>
              <line x1="450" y1="310" x2="465" y2="310" stroke="#1976D2" strokeWidth="1.5" strokeDasharray="4 2" />

              {/* Side annotation: Normal regulation */}
              <rect x="5" y="200" width="130" height="40" rx="8" fill="#E8F5E9" stroke="#388E3C" strokeWidth="1.5" />
              <text x="70" y="217" textAnchor="middle" fontWeight="bold" fontSize="10" fill="#388E3C">Normal: C1-INH</text>
              <text x="70" y="230" textAnchor="middle" fontSize="9" fill="#388E3C">controlează kalikreina</text>
              <line x1="135" y1="220" x2="150" y2="220" stroke="#388E3C" strokeWidth="1.5" strokeDasharray="4 2" />

              {/* Arrow marker definition */}
              <defs>
                <marker id="arrowRed" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#D32F2F" />
                </marker>
              </defs>
            </svg>
            <p className="text-center text-xs text-neutral-500 mt-4">
              Figura: Cascada bradikininei — mecanismul prin care deficitul de C1-inhibitor duce la episoade de angioedem ereditar.
            </p>
          </div>

          <p className="text-[17px] leading-[1.85] text-neutral-600 mb-6">
            Fără suficient inhibitor C1 funcțional, o enzimă din sânge numită
            <strong className="text-neutral-800 font-bold"> kalikreină</strong> scapă de sub control, declanșând supraproducția
            de <strong className="text-neutral-800 font-bold">bradikinină</strong>. Excesul de bradikinină determină vasele de
            sânge să elibereze lichid în țesuturile înconjurătoare, provocând umflăturile
            caracteristice pe care le experimentează pacienții cu AEE.
          </p>
          <p className="text-[17px] leading-[1.85] text-neutral-600 mb-8">
            Bradikinina promovează inflamația prin creșterea cantității de lichid care
            se scurge prin pereții vaselor de sânge în țesuturile corpului
            (permeabilitate vasculară crescută).
          </p>

          <Callout variant="warning" title="Diferență esențială" className="mb-8">
            <p className="font-medium">
              Spre deosebire de reacțiile alergice, acest proces <strong>nu implică
              histamina</strong>. De aceea, antihistaminicele, corticosteroizii și
              adrenalina sunt <strong>ineficiente</strong> în tratamentul AEE.
            </p>
          </Callout>

          <p className="text-[17px] leading-[1.85] text-neutral-600">
            Această diferență esențială față de angioedermul alergic subliniază importanța
            diagnosticului corect și a tratamentului specific cu medicamente care vizează
            calea bradikininei.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-white border-t border-neutral-100">
        <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/ce-este-aee" className="text-primary-500 font-semibold hover:text-primary-600 transition-colors">
              ← Ce este AEE?
            </Link>
            <Link to="/care-sunt-declansatorii-aee" className="text-primary-500 font-semibold hover:text-primary-600 transition-colors sm:text-right">
              Factori declanșatori →
            </Link>
          </div>
        </div>
      </section>

      {/* Source Attribution */}
      <section className="py-8 bg-white">
        <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-500 text-sm">
            Informații bazate pe date de la{' '}
            <a href="https://haei.org/hae/what_causes_hae" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
              HAE International (HAEi)
            </a>
            {', '}
            <a href="https://medlineplus.gov/genetics/condition/hereditary-angioedema/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
              MedlinePlus
            </a>
            {' și '}
            <a href="https://emedicine.medscape.com/article/135604-overview" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
              Medscape
            </a>.
          </p>
        </div>
      </section>
    </div>
  </>
  );
};

export default HAECauses;
