import React from 'react';
import SEO from '../components/SEO';
import { ArticleHero, ArticleSection, Pullquote, ArticleNav, ArticleSource } from '../components/ui';

const HAETriggers: React.FC = () => {
  return (
    <>
      <SEO
        title="Factori Declanșatori AEE"
        description="Descoperă factorii care pot declanșa crizele de angioedem ereditar: stres, traume, infecții, fluctuații hormonale și alții."
        path="/care-sunt-declansatorii-aee"
      />
      <div className="bg-white">
        <ArticleHero
          backLink="/ce-este-aee"
          title="Factori declanșatori"
          description="Studiile sugerează că 50% dintre persoanele cu AEE raportează primele simptome până la vârsta de 10 ani, iar majoritatea au experimentat primul atac înaintea vârstei de 18 ani."
        />

        <div className="max-w-[860px] mx-auto px-5 sm:px-6 pb-20">

          <div className="pb-8">
            <p className="text-[17px] leading-[1.85] text-neutral-600">
              Chiar dacă sunt excepții, simptomele AEE sunt de regulă ușoare la
              copiii mici, dar episoade au fost raportate chiar și la copii de un
              an. Frecvența atacurilor poate să crească la pubertate și adolescență.
            </p>
          </div>

          {/* Declanșatori comuni */}
          <ArticleSection label="Comuni">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-6 leading-snug">Factorii declanșatori comuni</h2>

            {[
              { name: 'Anxietate', desc: 'Un factor declanșator frecvent raportat, putând contribui la apariția sau agravarea atacurilor.' },
              { name: 'Stres', desc: 'Stresul emoțional și fizic este unul dintre cei mai comuni factori care pot declanșa episoade de angioedem ereditar.' },
              { name: 'Traumatisme minore', desc: 'Inclusiv lovituri ușoare sau presiunea mecanică, pot declanșa episoade de umflare în zona afectată.' },
              { name: 'Intervenții chirurgicale', desc: 'Reprezintă un factor declanșator important, necesitând atenție specială și consultarea prealabilă a medicului specialist.' },
              { name: 'Boli și infecții', desc: 'Răceala, gripa și alte infecții virale pot declanșa sau agrava episoadele de angioedem ereditar.' },
            ].map((item) => (
              <div key={item.name} className="py-5 border-b border-neutral-200">
                <h3 className="font-bold text-neutral-800 text-lg mb-1">{item.name}</h3>
                <p className="text-base leading-[1.75] text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </ArticleSection>

          {/* Alți factori */}
          <ArticleSection label="Alți factori">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-6 leading-snug">Alți factori raportați</h2>

            {[
              { name: 'Expunerea la frig', desc: 'Temperaturile scăzute și expunerea la frig pot acționa ca factori declanșatori ai atacurilor de AEE.' },
              { name: 'Traumatisme mecanice', desc: 'Activități care provoacă traumatisme mecanice, cum ar fi grădinăritul, pot contribui la declanșarea episoadelor.' },
            ].map((item) => (
              <div key={item.name} className="py-5 border-b border-neutral-200">
                <h3 className="font-bold text-neutral-800 text-lg mb-1">{item.name}</h3>
                <p className="text-base leading-[1.75] text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </ArticleSection>

          {/* Hormoni */}
          <ArticleSection label="Hormoni">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-5 leading-snug">Hormoni</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-5">
              La femei, menstruația și sarcina pot afecta simptomele AEE.
              Unele femei raportează o creștere a numărului de atacuri în
              timpul perioadelor menstruale. Studiile relevă variații
              considerabile în frecvența atacurilor la femeile însărcinate.
            </p>
            <p className="text-[17px] leading-[1.85] text-neutral-600">
              Utilizarea medicamentelor derivate din estrogen (contraceptive
              orale, terapie de substituție hormonală) este asociată cu
              creșterea frecvenței și severității atacurilor. Persoanele cu
              AEE ar trebui să consulte medicul curant cu privire la
              opțiuni alternative de contracepție fără estrogen.
            </p>

            <Pullquote tag="Inhibitorii ECA">
              <p>
                Utilizați frecvent pentru tratarea hipertensiunii arteriale,
                inhibitorii ECA sunt cunoscuți pentru <strong>creșterea frecvenței și
                severității atacurilor</strong> de AEE și ar trebui evitați.
              </p>
            </Pullquote>

            <Pullquote tag="Proceduri dentare">
              <p>
                Traumatismele bucale cauzate de procedurile dentare pot declanșa
                umflarea orală și pot crește riscul de umflare a gâtului/căilor
                respiratorii. <strong>Consultați medicul curant AEE</strong> înainte de a efectua
                proceduri dentare.
              </p>
            </Pullquote>
          </ArticleSection>

          <ArticleSource sources={[
            { href: 'https://haei.org/what-is-hae/attack-triggers/', label: 'HAE International (HAEi)' },
          ]} />

          <ArticleNav
            prev={{ to: '/ce-cauzeaza-aee', label: 'Tipurile și cauzele AEE' }}
            next={{ to: '/diagnosticarea-aee', label: 'Diagnosticarea AEE' }}
          />
        </div>
      </div>
    </>
  );
};

export default HAETriggers;
