import React from 'react';
import SEO from '../components/SEO';
import { ArticleHero, ArticleSection, Pullquote, ArticleNav, ArticleSource } from '../components/ui';

const Travel: React.FC = () => {
  return (
    <>
      <SEO
        title="Călătorii cu AEE"
        description="Sfaturi utile pentru călătoriile persoanelor cu angioedem ereditar: pregătirea medicamentelor, carduri de urgență și resurse."
        path="/calatorii"
      />
      <div className="bg-white">
        <ArticleHero
          backLink="/ce-este-aee"
          title="Călătorii cu AEE"
          description="Indiferent dacă plecați în interes de serviciu sau pentru vacanță, iată câteva lucruri de luat în considerare când vă pregătiți pentru călătorie."
        />

        <div className="max-w-[860px] mx-auto px-5 sm:px-6 pb-20">

          {/* Sfaturi */}
          <ArticleSection label="Sfaturi">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-3 leading-snug">Sfaturi pentru planificarea călătoriei</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-8">O pregătire atentă vă poate ajuta să călătoriți în siguranță și cu încredere.</p>

            {[
              {
                name: 'Carduri de urgență',
                desc: <>Purtați întotdeauna informații de contact de urgență. Cardurile de Urgență HAEi sunt disponibile în multe limbi în Aplicația HAEi Companion sau pe <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">haei.org</a>.</>,
              },
              {
                name: 'Îngrijire medicală la destinație',
                desc: <>Căutați informații despre îngrijirea medicală în țara pe care o vizitați. Găsiți medici și spitale care știu despre AEE în aplicația HAEi Companion sau pe <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">haei.org</a>.</>,
              },
              {
                name: 'Medicamente în bagajul de mână',
                desc: 'Păstrați medicamentele AEE în bagajul de mână. Nu le puneți în bagajul de cală — poate fi pierdut sau întârziat.',
              },
              {
                name: 'Suficiente medicamente',
                desc: 'Asigurați-vă că aduceți suficiente medicamente pentru întreaga călătorie. Luați în calcul posibile întârzieri sau prelungiri.',
              },
            ].map((item) => (
              <div key={item.name} className="py-5 border-b border-neutral-200">
                <h3 className="font-bold text-neutral-800 text-lg mb-1">{item.name}</h3>
                <p className="text-base leading-[1.75] text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </ArticleSection>

          {/* Resurse */}
          <ArticleSection label="Resurse">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-3 leading-snug">Resurse utile pentru călătorie</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-8">HAEi oferă instrumente digitale gratuite care vă pot ajuta să gestionați AEE în timpul călătoriilor.</p>

            <div className="py-6 border-b border-neutral-200">
              <h3 className="font-playfair text-xl font-bold text-neutral-800 mb-3">Aplicația HAEi Companion</h3>
              <p className="text-base leading-[1.75] text-neutral-600 mb-4">Acces rapid la informații esențiale în timpul călătoriei:</p>
              <ul className="space-y-2 text-base text-neutral-600">
                {['Carduri de urgență în multe limbi', 'Listă de medici și spitale care cunosc AEE', 'Informații despre organizațiile HAE locale'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 mt-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-6 border-b border-neutral-200">
              <h3 className="font-playfair text-xl font-bold text-neutral-800 mb-3">HAE TrackR</h3>
              <p className="text-base leading-[1.75] text-neutral-600 mb-4">Monitorizați atacurile și tratamentele, cu date valoroase pentru medic:</p>
              <ul className="space-y-2 text-base text-neutral-600">
                {['Jurnal digital al atacurilor de AEE', 'Înregistrarea tratamentelor administrate', 'Rapoarte utile pentru consultații medicale'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 mt-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ArticleSection>

          <Pullquote tag="Nu uitați">
            <p>
              Discutați cu medicul specialist <strong>înainte de orice călătorie mai lungă</strong>. Împreună puteți stabili un plan de acțiune personalizat și vă puteți asigura că aveți toate resursele necesare.
            </p>
          </Pullquote>

          <ArticleSource sources={[
            { href: 'https://haei.org', label: 'HAE International (HAEi)' },
          ]} />

          <ArticleNav
            prev={{ to: '/femei-si-sarcina', label: 'Femei și sarcina' }}
            next={{ to: '/despre-haei', label: 'Despre HAEi' }}
          />
        </div>
      </div>
    </>
  );
};

export default Travel;
