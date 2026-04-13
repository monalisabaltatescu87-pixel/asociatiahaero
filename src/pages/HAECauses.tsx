import React from 'react';
import SEO from '../components/SEO';
import { ArticleHero, ArticleSection, Pullquote, ArticleNav, ArticleSource } from '../components/ui';

const HAECauses: React.FC = () => {
  return (
    <>
      <SEO
        title="Cauzele Angioedemului Ereditar"
        description="Angioedemul ereditar este cauzat de o mutație genetică ce afectează proteina C1-inhibitor. Află despre mecanismele biologice ale bolii."
        path="/ce-cauzeaza-aee"
      />
      <div className="bg-white">
        <ArticleHero
          backLink="/ce-este-aee"
          title="Principalele cauze"
          description="AEE tip I și tip II sunt cauzate de un defect (mutație) în gena responsabilă pentru producerea proteinei inhibitor C1 esterază (C1-INH)."
        />

        <div className="max-w-[860px] mx-auto px-5 sm:px-6 pb-20">

          {/* Cauza genetică */}
          <ArticleSection label="Genetică">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-5 leading-snug">Cauza genetică</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-5">
              AEE este cauzat de mutații în gena <strong className="text-neutral-800 font-bold">SERPING1</strong>, care furnizează
              instrucțiuni pentru producerea proteinei inhibitorul C1 esterază (C1-INH).
              Această proteină este importantă pentru controlul răspunsului imunitar
              și al inflamației.
            </p>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-5">
              În condiții normale, C1-INH reglează producția de <strong className="text-neutral-800 font-bold">bradikinină</strong> în
              organism — un hormon care joacă un rol important în controlul dilatării
              și permeabilității vaselor de sânge. Dacă C1-INH nu funcționează corect
              sau dacă concentrația sa este scăzută, bradikinina este eliberată în exces,
              provocând umflăturile localizate.
            </p>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-5">
              Boala este transmisă <strong className="text-neutral-800 font-bold">autozomal dominant</strong> — un copil are
              50% șanse de a moșteni boala dacă unul dintre părinți este afectat. Cu
              toate acestea, aproximativ <strong className="text-neutral-800 font-bold">25% din cazuri</strong> rezultă din
              mutații spontane (de novo).
            </p>
            <p className="text-[17px] leading-[1.85] text-neutral-600">
              Au fost identificate aproape <strong className="text-neutral-800 font-bold">300 de variante patogene</strong> ale
              genei SERPING1.
            </p>
          </ArticleSection>

          {/* Tipuri */}
          <ArticleSection label="Tipuri">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-6 leading-snug">Tipurile de AEE</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-neutral-200 mb-8">
              <div className="bg-white p-6 sm:pl-0">
                <span className="font-playfair text-5xl font-black text-primary-200 leading-none block mb-3">I</span>
                <h3 className="text-[15px] font-extrabold text-neutral-800 mb-1">Deficit cantitativ</h3>
                <span className="text-xs font-bold text-primary-500 block mb-2">85% din cazuri</span>
                <p className="text-sm leading-relaxed text-neutral-500">Niveluri cantitative scăzute de C1-inhibitor.</p>
                <p className="text-xs text-neutral-400 mt-2">Nivel C1-INH: scăzut | Funcție: scăzută</p>
              </div>
              <div className="bg-white p-6">
                <span className="font-playfair text-5xl font-black text-secondary-200 leading-none block mb-3">II</span>
                <h3 className="text-[15px] font-extrabold text-neutral-800 mb-1">Deficit funcțional</h3>
                <span className="text-xs font-bold text-primary-500 block mb-2">15% din cazuri</span>
                <p className="text-sm leading-relaxed text-neutral-500">Niveluri normale sau crescute, dar proteina nu funcționează corect.</p>
                <p className="text-xs text-neutral-400 mt-2">Nivel C1-INH: normal/crescut | Funcție: scăzută</p>
              </div>
              <div className="bg-white p-6 sm:pr-0">
                <span className="font-playfair text-5xl font-black text-accent-200 leading-none block mb-3">N</span>
                <h3 className="text-[15px] font-extrabold text-neutral-800 mb-1">C1-inhibitor normal</h3>
                <p className="text-sm leading-relaxed text-neutral-500">Simptome consistente, dar laborator normal. Mutații genetice recente confirmate.</p>
                <p className="text-xs text-neutral-400 mt-2">Nivel C1-INH: normal | Funcție: normală</p>
              </div>
            </div>

            <p className="text-[17px] leading-[1.85] text-neutral-600">
              Absența unui istoric familial nu exclude diagnosticul. Până la <strong className="text-neutral-800 font-bold">25% din cazuri</strong> rezultă dintr-o mutație spontană. Copiii au <strong className="text-neutral-800 font-bold">50% șanse</strong> să moștenească AEE dacă un părinte are afecțiunea.
            </p>
          </ArticleSection>

          {/* Mecanism */}
          <ArticleSection label="Mecanism">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-5 leading-snug">Mecanismul bolii</h2>

            {/* SVG Diagram */}
            <div className="mb-8 bg-gradient-to-br from-primary-50 to-white p-6 sm:p-8 border border-primary-200">
              <h3 className="text-center text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6">
                Cascada bradikininei în AEE
              </h3>
              <svg viewBox="0 0 600 520" className="w-full max-w-lg mx-auto" aria-label="Diagrama mecanismului bolii AEE: cascada bradikininei">
                <rect x="150" y="10" width="300" height="60" rx="12" fill="#FBC02D" />
                <text x="300" y="35" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#2D2926">Mutație gena SERPING1</text>
                <text x="300" y="53" textAnchor="middle" fontSize="11" fill="#2D2926">defect genetic moștenit sau de novo</text>
                <line x1="300" y1="70" x2="300" y2="100" stroke="#D32F2F" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
                <rect x="150" y="100" width="300" height="60" rx="12" fill="#FFF3E0" stroke="#FBC02D" strokeWidth="2" />
                <text x="300" y="125" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#2D2926">Deficit de C1-Inhibitor</text>
                <text x="300" y="143" textAnchor="middle" fontSize="11" fill="#5D4037">proteină insuficientă sau nefuncțională</text>
                <line x1="300" y1="160" x2="300" y2="190" stroke="#D32F2F" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
                <rect x="150" y="190" width="300" height="60" rx="12" fill="#FFF3E0" stroke="#FBC02D" strokeWidth="2" />
                <text x="300" y="215" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#2D2926">Kalikreina necontrolată</text>
                <text x="300" y="233" textAnchor="middle" fontSize="11" fill="#5D4037">enzimă care scapă de sub reglare</text>
                <line x1="300" y1="250" x2="300" y2="280" stroke="#D32F2F" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
                <rect x="150" y="280" width="300" height="60" rx="12" fill="#FFCCBC" stroke="#D32F2F" strokeWidth="2" />
                <text x="300" y="305" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#B71C1C">Exces de bradikinină</text>
                <text x="300" y="323" textAnchor="middle" fontSize="11" fill="#5D4037">supraproducție de bradikinină</text>
                <line x1="300" y1="340" x2="300" y2="370" stroke="#D32F2F" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
                <rect x="150" y="370" width="300" height="60" rx="12" fill="#FFCCBC" stroke="#D32F2F" strokeWidth="2" />
                <text x="300" y="395" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#B71C1C">Permeabilitate vasculară crescută</text>
                <text x="300" y="413" textAnchor="middle" fontSize="11" fill="#5D4037">lichid se scurge prin pereții vaselor</text>
                <line x1="300" y1="430" x2="300" y2="460" stroke="#D32F2F" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
                <rect x="150" y="460" width="300" height="55" rx="12" fill="#D32F2F" />
                <text x="300" y="485" textAnchor="middle" fontWeight="bold" fontSize="15" fill="#FFFFFF">Angioedem (umflătură)</text>
                <text x="300" y="502" textAnchor="middle" fontSize="11" fill="#FFCDD2">episod acut de AEE</text>
                <rect x="465" y="290" width="130" height="40" rx="8" fill="#E3F2FD" stroke="#1976D2" strokeWidth="1.5" />
                <text x="530" y="307" textAnchor="middle" fontWeight="bold" fontSize="10" fill="#1976D2">≠ Histamină</text>
                <text x="530" y="320" textAnchor="middle" fontSize="9" fill="#1976D2">nu e reacție alergică</text>
                <line x1="450" y1="310" x2="465" y2="310" stroke="#1976D2" strokeWidth="1.5" strokeDasharray="4 2" />
                <rect x="5" y="200" width="130" height="40" rx="8" fill="#E8F5E9" stroke="#388E3C" strokeWidth="1.5" />
                <text x="70" y="217" textAnchor="middle" fontWeight="bold" fontSize="10" fill="#388E3C">Normal: C1-INH</text>
                <text x="70" y="230" textAnchor="middle" fontSize="9" fill="#388E3C">controlează kalikreina</text>
                <line x1="135" y1="220" x2="150" y2="220" stroke="#388E3C" strokeWidth="1.5" strokeDasharray="4 2" />
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

            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-5">
              Fără suficient inhibitor C1 funcțional, o enzimă din sânge numită
              <strong className="text-neutral-800 font-bold"> kalikreină</strong> scapă de sub control, declanșând supraproducția
              de <strong className="text-neutral-800 font-bold">bradikinină</strong>. Excesul de bradikinină determină vasele de
              sânge să elibereze lichid în țesuturile înconjurătoare, provocând umflăturile
              caracteristice.
            </p>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-5">
              Bradikinina promovează inflamația prin creșterea cantității de lichid care
              se scurge prin pereții vaselor de sânge în țesuturile corpului.
            </p>

            <Pullquote tag="Diferență esențială">
              <p>
                Spre deosebire de reacțiile alergice, acest proces <strong>nu implică histamina</strong>. De aceea, antihistaminicele, corticosteroizii și adrenalina sunt <strong>ineficiente</strong> în tratamentul AEE.
              </p>
            </Pullquote>

            <p className="text-[17px] leading-[1.85] text-neutral-600">
              Această diferență esențială față de angioedermul alergic subliniază importanța
              diagnosticului corect și a tratamentului specific cu medicamente care vizează
              calea bradikininei.
            </p>
          </ArticleSection>

          <ArticleSource sources={[
            { href: 'https://haei.org/hae/what_causes_hae', label: 'HAE International (HAEi)' },
            { href: 'https://medlineplus.gov/genetics/condition/hereditary-angioedema/', label: 'MedlinePlus' },
            { href: 'https://emedicine.medscape.com/article/135604-overview', label: 'Medscape' },
          ]} />

          <ArticleNav
            prev={{ to: '/ce-este-aee', label: 'Ce este AEE?' }}
            next={{ to: '/care-sunt-declansatorii-aee', label: 'Factori declanșatori' }}
          />
        </div>
      </div>
    </>
  );
};

export default HAECauses;
