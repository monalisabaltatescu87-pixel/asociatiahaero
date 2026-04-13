import React from 'react';
import SEO from '../components/SEO';
import { ArticleHero, ArticleSection, ArticleNav, ArticleSource } from '../components/ui';

const WomenPregnancy: React.FC = () => {
  return (
    <>
      <SEO
        title="Femei și Sarcină - AEE"
        description="Informații despre angioedemul ereditar în sarcină: managementul AEE, tratament, naștere și testarea bebelușului."
        path="/femei-si-sarcina"
      />
      <div className="bg-white">
        <ArticleHero
          backLink="/ce-este-aee"
          title="Femei și sarcină"
          description="Dacă doriți să rămâneți însărcinată sau sunteți însărcinată, medicul dumneavoastră vă va urmări îndeaproape pentru a discuta managementul adecvat al AEE."
        />

        <div className="max-w-[860px] mx-auto px-5 sm:px-6 pb-20">

          {/* Tratament în sarcină */}
          <ArticleSection label="Tratament">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-5 leading-snug">Tratamentul AEE în sarcină</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-5">
              În timpul sarcinii și alăptării, tratamentul cu <strong className="text-neutral-800 font-bold">androgeni anabolizanți</strong> sau <strong className="text-neutral-800 font-bold">acid tranexamic</strong> nu este recomandat.
            </p>
            <p className="text-[17px] leading-[1.85] text-neutral-600">
              Medicul curant vă poate ajuta să elaborați un <strong className="text-neutral-800 font-bold">plan de tratament specific</strong> nevoilor dumneavoastră — înainte, în timpul și după naștere, precum și în timp ce alăptați.
            </p>
          </ArticleSection>

          {/* Atacuri */}
          <ArticleSection label="Atacuri">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-5 leading-snug">Atacuri de AEE</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-5">
              Femeile cu AEE raportează că <strong className="text-neutral-800 font-bold">fiecare sarcină poate fi diferită</strong>. În unele cazuri, atacurile pot fi mai frecvente și/sau mai severe.
            </p>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-5">
              În alte cazuri, femeile constată că au <strong className="text-neutral-800 font-bold">puține sau deloc atacuri</strong> în timpul sarcinii.
            </p>
            <p className="text-[17px] leading-[1.85] text-neutral-600">
              Majoritatea femeilor cu AEE au parte de o naștere sănătoasă. <strong className="text-neutral-800 font-bold">Atacurile de AEE sunt rare în momentul nașterii.</strong> Există unele indicii privind o creștere în perioada post-partum, dar echipa medicală vă va monitoriza atent.
            </p>
          </ArticleSection>

          {/* Bebelus */}
          <ArticleSection label="Bebelușul">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-5 leading-snug">Bebelușul meu</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-5">
              AEE este ereditară și fiecare copil născut unui părinte cu AEE
              are <strong className="text-neutral-800 font-bold">50% șanse să moștenească</strong> afecțiunea.
            </p>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-5">
              Testarea este posibilă în primul an de viață, cu toate acestea,
              unii medici recomandă să așteptați până când copilul are cel puțin <strong className="text-neutral-800 font-bold">un (1) an</strong>.
            </p>
            <p className="text-[17px] leading-[1.85] text-neutral-600">
              Discutați cu medicul specialist despre cel mai bun moment pentru testare
              și despre opțiunile de monitorizare disponibile.
            </p>
          </ArticleSection>

          {/* Planificare */}
          <ArticleSection label="Planificare">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-5 leading-snug">Planificarea sarcinii</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-6">
              Dacă aveți AEE și plănuiți o sarcină, este important să discutați din timp cu medicul specialist. Împreună, puteți stabili un plan care să acopere:
            </p>
            <ul className="space-y-3 text-[17px] leading-[1.85] text-neutral-600">
              {[
                ['Ajustarea tratamentului', 'înainte de concepție'],
                ['Managementul atacurilor', 'în timpul sarcinii'],
                ['Pregătirea pentru', 'naștere și perioada post-partum'],
                ['Opțiuni sigure de tratament', 'în timpul alăptării'],
              ].map(([prefix, suffix]) => (
                <li key={prefix} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 mt-3" />
                  <span>{prefix} <strong className="text-neutral-800 font-bold">{suffix}</strong></span>
                </li>
              ))}
            </ul>
          </ArticleSection>

          <ArticleSource sources={[
            { href: 'https://haei.org', label: 'HAE International (HAEi)' },
          ]} />

          <ArticleNav
            prev={{ to: '/aee-si-copiii', label: 'AEE și copiii' }}
            next={{ to: '/calatorii', label: 'Călătorii' }}
          />
        </div>
      </div>
    </>
  );
};

export default WomenPregnancy;
