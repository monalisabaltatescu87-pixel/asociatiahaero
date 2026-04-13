import React from 'react';
import SEO from '../components/SEO';
import { ArticleHero, ArticleSection, Pullquote, ArticleNav, ArticleSource } from '../components/ui';

const AEEChildren: React.FC = () => {
  return (
    <>
      <SEO
        title="AEE și Copiii"
        description="Informații despre angioedemul ereditar la copii: testare, debutul simptomelor, opțiuni de tratament pediatric."
        path="/aee-si-copiii"
      />
      <div className="bg-white">
        <ArticleHero
          backLink="/ce-este-aee"
          title="AEE și copiii"
          description="Copiii unui părinte cu AEE au 50% șanse să moștenească afecțiunea. Testarea timpurie și un plan de tratament individualizat sunt esențiale."
        />

        <div className="max-w-[860px] mx-auto px-5 sm:px-6 pb-20">

          {/* Testare */}
          <ArticleSection label="Testare">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-5 leading-snug">Testarea este esențială</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-5">
              Odată ce o persoană este diagnosticată, experții recomandă ca toți
              membrii familiei apropiate (<strong className="text-neutral-800 font-bold">părinți, frați și copii</strong>) să fie testați
              pentru AEE.
            </p>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-5">
              Testarea este posibilă în primul an de viață, cu toate acestea, unii medici
              recomandă să așteptați până când copilul are cel puțin un (1) an, datorită
              nivelurilor foarte variabile de C1 antigenic și C4.
            </p>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-8">
              Testarea precoce permite părinților sau tutorilor legali să colaboreze în avans
              cu medicul copilului pentru a crea un plan de tratament individualizat.
            </p>

            {[
              { q: 'Cine trebuie testat?', a: 'Toți membrii familiei apropiate: părinți, frați și copii ai persoanei diagnosticate cu AEE.' },
              { q: 'Când se poate testa?', a: 'Din primul an de viață, dar se recomandă așteptarea până la cel puțin 1 an din cauza nivelurilor variabile.' },
              { q: 'De ce contează testarea precoce?', a: 'Permite crearea unui plan de tratament individualizat în avans, în colaborare cu medicul copilului.' },
            ].map((item) => (
              <div key={item.q} className="py-5 border-b border-neutral-200">
                <h3 className="font-bold text-neutral-800 text-lg mb-1">{item.q}</h3>
                <p className="text-base leading-[1.75] text-neutral-600">{item.a}</p>
              </div>
            ))}
          </ArticleSection>

          {/* Debut */}
          <ArticleSection label="Debut">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-5 leading-snug">Debutul simptomelor</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-8">
              Vârsta de debut variază considerabil. Majoritatea persoanelor cu AEE
              au experimentat simptome sau primul atac înainte de vârsta de 18 ani.
            </p>

            <div className="grid sm:grid-cols-2 gap-12 py-6 border-t border-neutral-200">
              <div>
                <span className="font-playfair text-5xl font-black text-primary-400 leading-none block mb-2">50%</span>
                <p className="text-base leading-[1.75] text-neutral-600">
                  raportează primele simptome până la <strong className="text-neutral-800 font-bold">vârsta de 10 ani</strong>
                </p>
              </div>
              <div>
                <span className="font-playfair text-5xl font-black text-primary-400 leading-none block mb-2">&lt;18</span>
                <p className="text-base leading-[1.75] text-neutral-600">
                  Majoritatea au experimentat <strong className="text-neutral-800 font-bold">primul atac</strong> înainte de vârsta adultă
                </p>
              </div>
            </div>

            <Pullquote tag="Important">
              <p>
                Pare să existe o frecvență crescută a atacurilor în timpul <strong>pubertății sau adolescenței</strong>, ceea ce subliniază importanța unui diagnostic și plan de tratament stabilite cât mai devreme.
              </p>
            </Pullquote>
          </ArticleSection>

          {/* Tratament */}
          <ArticleSection label="Tratament">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-3 leading-snug">Tratamentul AEE la copii</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-10">
              Similar cu adulții, toți pacienții pediatrici ar trebui să aibă un plan de
              gestionare, inclusiv un plan de acțiune terapeutică.
            </p>

            <h3 className="font-playfair text-xl font-bold text-neutral-800 mb-4">Terapii disponibile pentru atacuri acute</h3>
            {[
              { name: 'Concentrat de C1-inhibitor', desc: 'Produse din plasmă (pdC1-inhibitor) și recombinante (rhC1-inhibitor). Înlocuiește proteina lipsă sau disfuncțională.' },
              { name: 'Icatibant', desc: 'Antagonist al receptorilor de bradikinină. Blochează acțiunea bradikininei.' },
              { name: 'Alternative', desc: 'Plasma tratată cu solvent-detergent (SDP) sau proaspătă congelată (FFP).' },
            ].map((item) => (
              <div key={item.name} className="py-4 border-b border-neutral-200">
                <h4 className="font-bold text-neutral-800 mb-1">{item.name}</h4>
                <p className="text-[15px] leading-[1.75] text-neutral-600">{item.desc}</p>
              </div>
            ))}

            <h3 className="font-playfair text-xl font-bold text-neutral-800 mt-10 mb-4">Profilaxie pe termen lung (PTL)</h3>
            {[
              { name: 'Concentrat de C1-inhibitor', desc: 'Prima opțiune, similar cu recomandările pentru adulți.' },
              { name: 'Antifibrinolitice (acid tranexamic)', desc: 'Alternativă dacă concentratul nu este disponibil.' },
            ].map((item) => (
              <div key={item.name} className="py-4 border-b border-neutral-200">
                <h4 className="font-bold text-neutral-800 mb-1">{item.name}</h4>
                <p className="text-[15px] leading-[1.75] text-neutral-600">{item.desc}</p>
              </div>
            ))}

            <Pullquote tag="De reținut">
              <p>
                PTL cu antifibrinolitice este preferată în locul androgenilor la copii, datorită unui <strong>profil de siguranță mai bun</strong>.
              </p>
            </Pullquote>

            <h3 className="font-playfair text-xl font-bold text-neutral-800 mb-4">Profilaxie pe termen scurt</h3>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-4">
              Se administrează înainte de proceduri chirurgicale sau stomatologice.
            </p>
            {[
              { name: 'Concentrat de C1-inhibitor', desc: 'Opțiunea preferată pentru pacienții pediatrici.' },
              { name: 'Androgeni atenuați', desc: 'Alternativă când concentratul nu este disponibil.' },
            ].map((item) => (
              <div key={item.name} className="py-4 border-b border-neutral-200">
                <h4 className="font-bold text-neutral-800 mb-1">{item.name}</h4>
                <p className="text-[15px] leading-[1.75] text-neutral-600">{item.desc}</p>
              </div>
            ))}

            <Pullquote tag="Important">
              <p>
                Tratamentul la cerere trebuie să fie întotdeauna <strong>disponibil pe parcursul procedurii</strong>, indiferent de profilaxia administrată.
              </p>
            </Pullquote>
          </ArticleSection>

          <ArticleSource sources={[
            { href: 'https://haei.org', label: 'HAE International (HAEi)' },
          ]} />

          <ArticleNav
            prev={{ to: '/cum-tratam-aee', label: 'Tratamente disponibile' }}
            next={{ to: '/femei-si-sarcina', label: 'Femei și sarcina' }}
          />
        </div>
      </div>
    </>
  );
};

export default AEEChildren;
