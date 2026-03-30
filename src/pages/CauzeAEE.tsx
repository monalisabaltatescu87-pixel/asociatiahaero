import React from 'react';
import { Link } from 'react-router-dom';

const CauzeAEE: React.FC = () => {
  return (
    <div className="pt-20">
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
  );
};

export default CauzeAEE;
