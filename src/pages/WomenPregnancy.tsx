import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, SectionHeader } from '../components/ui';

const WomenPregnancy: React.FC = () => {
  return (
    <><SEO title="Femei și Sarcină - AEE" description="Informații despre angioedemul ereditar în sarcină: managementul AEE, tratament, naștere și testarea bebelușului." path="/femei-si-sarcina" /><div className="bg-white">
      {/* Hero Section */}
      <PageHero
        variant="reader"
        backLink="/ce-este-aee"
        backLabel="Despre AEE"
        title="Femei și sarcină"
        description="Dacă doriți să rămâneți însărcinată sau sunteți însărcinată, medicul dumneavoastră vă va urmări îndeaproape pentru a discuta managementul adecvat al AEE."
      />

      {/* Reader Content */}
      <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        {/* Treatment During Pregnancy */}
        <section className="mb-12">
          <SectionHeader
            reader={true}
            title="Tratamentul AEE în sarcină"
          />
          <p className="text-[17px] leading-[1.85] text-neutral-600 mb-4">
            În timpul sarcinii și alăptării, tratamentul cu <strong className="text-neutral-800 font-bold">androgeni anabolizanți</strong> (sau
            steroizi) sau <strong className="text-neutral-800 font-bold">acid tranexamic</strong> nu este recomandat.
          </p>
          <p className="text-[17px] leading-[1.85] text-neutral-600">
            Medicul curant AEE vă poate ajuta să elaborați un <strong className="text-neutral-800 font-bold">plan de tratament specific</strong> nevoilor
            dumneavoastră individuale — înainte, în timpul și după naștere, precum și în timp ce alăptați.
          </p>
        </section>

        {/* Attacks During Pregnancy */}
        <section className="mb-12">
          <SectionHeader
            reader={true}
            title="Atacuri de AEE"
          />
          <p className="text-[17px] leading-[1.85] text-neutral-600 mb-4">
            Femeile cu AEE raportează că <strong className="text-neutral-800 font-bold">fiecare sarcină poate fi diferită</strong>. În unele cazuri,
            femeile pot experimenta atacuri de AEE mai frecvente și/sau mai severe.
          </p>
          <p className="text-[17px] leading-[1.85] text-neutral-600">
            În alte cazuri, femeile pot constata că au <strong className="text-neutral-800 font-bold">puține sau deloc atacuri</strong> de AEE
            în timpul sarcinii. Discutați cu medicul dumneavoastră pentru a fi pregătită pentru orice
            scenariu.
          </p>
        </section>

        {/* Reassuring text */}
        <section className="mb-8">
          <p className="text-[17px] leading-[1.85] text-neutral-600">
            Majoritatea femeilor cu AEE au parte de o naștere sănătoasă a copilului lor,
            la fel ca cele din populația generală. <strong className="text-neutral-800 font-bold">Atacurile de AEE sunt rare în momentul
            nașterii.</strong> Există unele indicii privind o creștere a frecvenței și severității
            atacurilor în perioada post-partum, dar echipa medicală vă va monitoriza atent.
          </p>
        </section>

        {/* Baby Testing */}
        <section className="mb-8">
          <SectionHeader
            reader={true}
            title="Bebelușul meu"
          />
          <p className="text-[17px] leading-[1.85] text-neutral-600 mb-4">
            AEE este o afecțiune ereditară și fiecare copil născut unui părinte cu AEE
            are <strong className="text-neutral-800 font-bold">50% șanse să moștenească</strong> afecțiunea.
          </p>
          <p className="text-[17px] leading-[1.85] text-neutral-600 mb-4">
            Testarea pentru AEE este posibilă în primul an de viață, cu toate acestea,
            unii medici recomandă să așteptați până când copilul are cel puțin <strong className="text-neutral-800 font-bold">un (1) an</strong> înainte
            de testare.
          </p>
          <p className="text-[17px] leading-[1.85] text-neutral-600">
            Discutați cu medicul dumneavoastră specialist în AEE
            despre cel mai bun moment pentru testarea copilului și despre opțiunile de monitorizare disponibile.
          </p>
        </section>

        {/* Pregnancy Planning */}
        <section className="mb-8">
          <SectionHeader
            reader={true}
            title="Planificarea sarcinii"
          />
          <p className="text-[17px] leading-[1.85] text-neutral-600 mb-5">
            Dacă aveți AEE și plănuiți o sarcină, este important să discutați din timp cu medicul
            dumneavoastră specialist. Împreună, puteți stabili un plan care să acopere:
          </p>
          <ul className="space-y-3 text-[17px] leading-[1.85] text-neutral-600">
            <li className="flex items-start">
              <span className="text-primary-500 font-bold mr-3 mt-1">•</span>
              <span>Ajustarea tratamentului <strong className="text-neutral-800 font-bold">înainte de concepție</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 font-bold mr-3 mt-1">•</span>
              <span>Managementul atacurilor <strong className="text-neutral-800 font-bold">în timpul sarcinii</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 font-bold mr-3 mt-1">•</span>
              <span>Pregătirea pentru <strong className="text-neutral-800 font-bold">naștere</strong> și perioada post-partum</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 font-bold mr-3 mt-1">•</span>
              <span>Opțiuni sigure de tratament în timpul <strong className="text-neutral-800 font-bold">alăptării</strong></span>
            </li>
          </ul>
        </section>

        {/* Navigation */}
        <section className="pt-8 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/aee-si-copiii" className="text-primary-500 font-semibold hover:text-primary-600 transition-colors">
              ← AEE și copiii
            </Link>
            <Link to="/calatorii" className="text-primary-500 font-semibold hover:text-primary-600 transition-colors sm:text-right">
              Călătorii →
            </Link>
          </div>
        </section>

        {/* Source Attribution */}
        <section className="pt-8 mt-8 text-center">
          <p className="text-neutral-500 text-sm">
            Informații bazate pe date de la{' '}
            <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
              HAE International (HAEi)
            </a>.
          </p>
        </section>

      </div>
    </div>
  </>
  );
};

export default WomenPregnancy;
