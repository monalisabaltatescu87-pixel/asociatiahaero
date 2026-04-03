import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';

const WomenPregnancy: React.FC = () => {
  return (
    <><SEO title="Femei și Sarcină - AEE" description="Informații despre angioedemul ereditar în sarcină: managementul AEE, tratament, naștere și testarea bebelușului." path="/femei-si-sarcina" /><div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-haero-yellow-50 via-haero-cream to-haero-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/ce-este-aee" className="text-haero-yellow-600 font-semibold text-sm hover:text-haero-yellow-700 transition-colors mb-4 inline-block">
              ← Informații despre AEE
            </Link>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-haero-dark mb-4">
              Femei și <span className="text-haero-yellow-600">sarcină</span>
            </h1>
            <div className="w-20 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-haero-gray-500 max-w-3xl mx-auto leading-relaxed">
              Dacă doriți să rămâneți însărcinată sau sunteți însărcinată, medicul dumneavoastră
              vă va urmări îndeaproape pentru a discuta managementul adecvat al AEE.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment During Pregnancy */}
      <section className="py-16 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3" aria-hidden="true">💊</span>
                <h2 className="text-2xl font-bold text-haero-dark">
                  Tratamentul <span className="text-haero-yellow-600">AEE</span> în sarcină
                </h2>
              </div>
              <p className="text-haero-gray-700 text-lg leading-relaxed mb-4">
                În timpul sarcinii și alăptării, tratamentul cu <strong>androgeni anabolizanți</strong> (sau
                steroizi) sau <strong>acid tranexamic</strong> nu este recomandat.
              </p>
              <p className="text-haero-gray-700 text-lg leading-relaxed">
                Medicul curant AEE vă poate ajuta să elaborați un <strong>plan de tratament specific</strong> nevoilor
                dumneavoastră individuale — înainte, în timpul și după naștere, precum și în timp ce alăptați.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow-600">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3" aria-hidden="true">⚡</span>
                <h2 className="text-2xl font-bold text-haero-dark">
                  Atacuri de <span className="text-haero-yellow-600">AEE</span>
                </h2>
              </div>
              <p className="text-haero-gray-700 text-lg leading-relaxed mb-4">
                Femeile cu AEE raportează că <strong>fiecare sarcină poate fi diferită</strong>. În unele cazuri,
                femeile pot experimenta atacuri de AEE mai frecvente și/sau mai severe.
              </p>
              <p className="text-haero-gray-700 text-lg leading-relaxed">
                În alte cazuri, femeile pot constata că au <strong>puține sau deloc atacuri</strong> de AEE
                în timpul sarcinii. Discutați cu medicul dumneavoastră pentru a fi pregătită pentru orice
                scenariu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reassuring Callout - Healthy Birth */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-haero-yellow-50 rounded-2xl p-6 border border-haero-yellow-200">
            <div className="flex items-start">
              <span className="text-3xl mr-4 mt-1" aria-hidden="true">🤱</span>
              <div>
                <h3 className="text-xl font-bold text-haero-dark mb-3">
                  Majoritatea femeilor cu AEE au parte de o naștere sănătoasă
                </h3>
                <p className="text-haero-gray-700 text-lg leading-relaxed">
                  Majoritatea femeilor cu AEE au parte de o naștere sănătoasă a copilului lor,
                  la fel ca cele din populația generală. <strong>Atacurile de AEE sunt rare în momentul
                  nașterii.</strong> Există unele indicii privind o creștere a frecvenței și severității
                  atacurilor în perioada post-partum, dar echipa medicală vă va monitoriza atent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Baby Testing */}
      <section className="py-16 bg-haero-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-yellow">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3" aria-hidden="true">👶</span>
              <h2 className="text-2xl font-bold text-haero-dark">
                Bebelușul <span className="text-haero-yellow-600">meu</span>
              </h2>
            </div>
            <p className="text-haero-gray-700 text-lg leading-relaxed mb-4">
              AEE este o afecțiune ereditară și fiecare copil născut unui părinte cu AEE
              are <strong>50% șanse să moștenească</strong> afecțiunea.
            </p>
            <p className="text-haero-gray-700 text-lg leading-relaxed mb-6">
              Testarea pentru AEE este posibilă în primul an de viață, cu toate acestea,
              unii medici recomandă să așteptați până când copilul are cel puțin <strong>un (1) an</strong> înainte
              de testare.
            </p>
            <div className="bg-haero-yellow-50 rounded-xl px-5 py-4 border border-haero-yellow-200">
              <p className="text-haero-gray-700 text-sm leading-relaxed">
                <strong>Important:</strong> Discutați cu medicul dumneavoastră specialist în AEE
                despre cel mai bun moment pentru testarea copilului și despre opțiunile de monitorizare disponibile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Ahead */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-raised border-l-4 border-haero-yellow-600">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3" aria-hidden="true">📋</span>
              <h2 className="text-2xl font-bold text-haero-dark">
                Planificarea <span className="text-haero-yellow-600">sarcinii</span>
              </h2>
            </div>
            <p className="text-haero-gray-700 text-lg leading-relaxed mb-4">
              Dacă aveți AEE și plănuiți o sarcină, este important să discutați din timp cu medicul
              dumneavoastră specialist. Împreună, puteți stabili un plan care să acopere:
            </p>
            <ul className="space-y-3 text-haero-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-haero-yellow-600 font-bold mr-3 mt-1">•</span>
                <span>Ajustarea tratamentului <strong>înainte de concepție</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-haero-yellow-600 font-bold mr-3 mt-1">•</span>
                <span>Managementul atacurilor <strong>în timpul sarcinii</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-haero-yellow-600 font-bold mr-3 mt-1">•</span>
                <span>Pregătirea pentru <strong>naștere</strong> și perioada post-partum</span>
              </li>
              <li className="flex items-start">
                <span className="text-haero-yellow-600 font-bold mr-3 mt-1">•</span>
                <span>Opțiuni sigure de tratament în timpul <strong>alăptării</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/aee-si-copiii" className="text-haero-yellow-600 font-semibold hover:text-haero-yellow-700 transition-colors">
              ← AEE și copiii
            </Link>
            <Link to="/calatorii" className="text-haero-yellow-600 font-semibold hover:text-haero-yellow-700 transition-colors sm:text-right">
              Călătorii →
            </Link>
          </div>
        </div>
      </section>

      {/* Source Attribution */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-haero-gray-500 text-sm">
            Informații bazate pe date de la{' '}
            <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-haero-yellow-600 hover:text-haero-yellow-700 underline">
              HAE International (HAEi)
            </a>.
          </p>
        </div>
      </section>
    </div>
  </>
  );
};

export default WomenPregnancy;
