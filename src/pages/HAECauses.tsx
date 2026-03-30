import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';

const HAECauses: React.FC = () => {
  return (
    <><SEO title="Cauzele Angioedemului Ereditar" description="Angioedemul ereditar este cauzat de o mutație genetică ce afectează proteina C1-inhibitor. Află despre mecanismele biologice ale bolii." path="/ce-cauzeaza-aee" /><div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-haero-yellow-50 via-haero-cream to-haero-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/ce-este-aee" className="text-haero-yellow-600 font-semibold text-sm hover:text-haero-yellow-700 transition-colors mb-4 inline-block">
              ← Care sunt simptomele AEE?
            </Link>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-haero-dark mb-4">
              Principalele <span className="text-haero-yellow-600">cauze</span>
            </h1>
            <div className="w-20 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-haero-gray-500 max-w-3xl mx-auto leading-relaxed">
              AEE tip I și tip II sunt cauzate de un defect (mutație) în gena responsabilă
              pentru producerea proteinei inhibitor C1 esterază (C1-INH).
            </p>
          </div>
        </div>
      </section>

      {/* Genetic Cause */}
      <section className="py-16 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-haero-dark mb-6">
                Cauza <span className="text-haero-yellow-600">genetică</span>
              </h2>
              <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
                AEE este cauzat de mutații în gena <strong>SERPING1</strong>, care furnizează
                instrucțiuni pentru producerea proteinei inhibitorul C1 esterază (C1-INH).
                Această proteină este importantă pentru controlul răspunsului imunitar
                și al inflamației.
              </p>
              <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
                În condiții normale, C1-INH reglează producția de <strong>bradikinină</strong> în
                organism — un hormon care joacă un rol important în controlul dilatării
                și permeabilității vaselor de sânge. Dacă C1-INH nu funcționează corect
                sau dacă concentrația sa este scăzută, bradikinina este eliberată în exces,
                provocând umflăturile localizate.
              </p>
              <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
                Boala este transmisă <strong>autozomal dominant</strong> — un copil are
                50% șanse de a moșteni boala dacă unul dintre părinți este afectat. Cu
                toate acestea, aproximativ <strong>25% din cazuri</strong> rezultă din
                mutații spontane (de novo).
              </p>
              <p className="text-haero-gray-700 text-lg leading-relaxed">
                Au fost identificate aproape <strong>300 de variante patogene</strong> ale
                genei SERPING1.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow">
                <h3 className="font-bold text-haero-dark mb-3 text-lg">Tipul I — Deficit cantitativ</h3>
                <p className="text-haero-gray-500 leading-relaxed mb-3">
                  Reprezintă aproximativ <strong>85% din cazuri</strong>. Mutațiile produc
                  o proteină C1-INH trunchiată sau incorect pliată, rezultând niveluri
                  antigenice mai mici de 50% față de normal și un deficit funcțional
                  echivalent.
                </p>
                <div className="bg-haero-yellow-50 rounded-lg px-4 py-2 text-sm text-haero-gray-700">
                  Nivel C1-INH: scăzut | Funcție C1-INH: scăzută
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow-600">
                <h3 className="font-bold text-haero-dark mb-3 text-lg">Tipul II — Deficit funcțional</h3>
                <p className="text-haero-gray-500 leading-relaxed mb-3">
                  Reprezintă aproximativ <strong>15% din cazuri</strong>. Mutațiile la
                  nivelul buclei centrului reactiv (exonul 8) generează o proteină
                  nefuncțională care poate circula la niveluri antigenice normale sau
                  crescute, dar căreia îi lipsește activitatea inhibitorie.
                </p>
                <div className="bg-haero-yellow-50 rounded-lg px-4 py-2 text-sm text-haero-gray-700">
                  Nivel C1-INH: normal/crescut | Funcție C1-INH: scăzută
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow-700">
                <h3 className="font-bold text-haero-dark mb-3 text-lg">Tipul III — Cu C1-INH normal</h3>
                <p className="text-haero-gray-500 leading-relaxed mb-3">
                  Formă rară, cu niveluri cantitative și funcționale normale ale C1-INH.
                  Un subset de pacienți prezintă mutații ale genei <strong>F12 (factorul XII)</strong> care
                  facilitează activarea inadecvată a cascadei kalikreină–bradikinină.
                </p>
                <div className="bg-haero-yellow-50 rounded-lg px-4 py-2 text-sm text-haero-gray-700">
                  Nivel C1-INH: normal | Funcție C1-INH: normală
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanism */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-haero-dark mb-4">
              Mecanismul <span className="text-haero-yellow-600">bolii</span>
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto"></div>
          </div>

          {/* Disease Mechanism Diagram */}
          <div className="mb-12 bg-gradient-to-br from-haero-yellow-50 to-white rounded-2xl p-6 sm:p-8 border border-haero-yellow-200 shadow-raised">
            <h3 className="text-center text-sm font-semibold text-haero-gray-500 uppercase tracking-wider mb-6">
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
            <p className="text-center text-xs text-haero-gray-500 mt-4">
              Figura: Cascada bradikininei — mecanismul prin care deficitul de C1-inhibitor duce la episoade de angioedem ereditar.
            </p>
          </div>

          <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
            Fără suficient inhibitor C1 funcțional, o enzimă din sânge numită
            <strong> kalikreină</strong> scapă de sub control, declanșând supraproducția
            de <strong>bradikinină</strong>. Excesul de bradikinină determină vasele de
            sânge să elibereze lichid în țesuturile înconjurătoare, provocând umflăturile
            caracteristice pe care le experimentează pacienții cu AEE.
          </p>
          <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
            Bradikinina promovează inflamația prin creșterea cantității de lichid care
            se scurge prin pereții vaselor de sânge în țesuturile corpului
            (permeabilitate vasculară crescută).
          </p>
          <div className="bg-haero-yellow-50 rounded-2xl p-6 border border-haero-yellow-200 mb-6">
            <p className="text-haero-gray-700 leading-relaxed font-medium">
              Spre deosebire de reacțiile alergice, acest proces <strong>nu implică
              histamina</strong>. De aceea, antihistaminicele, corticosteroizii și
              adrenalina sunt <strong>ineficiente</strong> în tratamentul AEE.
            </p>
          </div>
          <p className="text-haero-gray-700 text-lg leading-relaxed">
            Această diferență esențială față de angioedermul alergic subliniază importanța
            diagnosticului corect și a tratamentului specific cu medicamente care vizează
            calea bradikininei.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/care-sunt-declansatorii-aee" className="text-haero-yellow-600 font-semibold hover:text-haero-yellow-700 transition-colors">
              ← Factori declanșatori
            </Link>
            <Link to="/cum-tratam-aee" className="text-haero-yellow-600 font-semibold hover:text-haero-yellow-700 transition-colors sm:text-right">
              Tratamente disponibile →
            </Link>
          </div>
        </div>
      </section>

      {/* Source Attribution */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-haero-gray-500 text-sm">
            Informații bazate pe date de la{' '}
            <a href="https://haei.org/hae/what_causes_hae" target="_blank" rel="noopener noreferrer" className="text-haero-yellow-600 hover:text-haero-yellow-700 underline">
              HAE International (HAEi)
            </a>
            {', '}
            <a href="https://medlineplus.gov/genetics/condition/hereditary-angioedema/" target="_blank" rel="noopener noreferrer" className="text-haero-yellow-600 hover:text-haero-yellow-700 underline">
              MedlinePlus
            </a>
            {' și '}
            <a href="https://emedicine.medscape.com/article/135604-overview" target="_blank" rel="noopener noreferrer" className="text-haero-yellow-600 hover:text-haero-yellow-700 underline">
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
