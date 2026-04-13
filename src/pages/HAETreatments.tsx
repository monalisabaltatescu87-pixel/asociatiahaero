import React from 'react';
import SEO from '../components/SEO';
import { ArticleHero, ArticleSection, Pullquote, ArticleNav, ArticleSource } from '../components/ui';

const HAETreatments: React.FC = () => {
  return (
    <>
      <SEO
        title="Tratamente pentru Angioedem Ereditar"
        description="Opțiuni de tratament disponibile pentru angioedemul ereditar: tratament la cerere, profilaxie pe termen lung și scurt, și noi terapii."
        path="/cum-tratam-aee"
      />
      <div className="bg-white">
        <ArticleHero
          backLink="/ce-este-aee"
          title="Tratamente disponibile"
          description="Există tratamente eficiente care ajută la reducerea frecvenței și severității umflăturilor. Cu medicamentele moderne, unele persoane raportează că pot trăi practic fără umflături."
        />

        <div className="max-w-[860px] mx-auto px-5 sm:px-6 pb-20">

          {/* Tratament acut */}
          <ArticleSection label="Acut">
            <Pullquote tag="Important">
              <p>
                Angioedermul din AEE <strong>nu răspunde</strong> la antihistaminice, adrenalină sau corticosteroizi. Deși adrenalina poate avea un efect tranzitoriu, <strong>nu modifică evoluția unui atac</strong>.
              </p>
            </Pullquote>

            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-5 leading-snug">Tratamentul la cerere (acut)</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-8">
              Utilizat pentru a opri progresia umflăturii. Utilizarea rapidă este deosebit
              de importantă la nivelul gâtului/căilor respiratorii.
            </p>

            {[
              { tag: 'IV', name: 'Concentrat de C1-inhibitor intravenos', desc: 'Produse din plasmă (pdC1-inhibitor) și produse recombinante (rhC1-inhibitor). Toate sunt autorizate pentru autoadministrare.' },
              { tag: 'IK', name: 'Inhibitor de kalikreină plasmatică', desc: 'Ecallantidă — reduce producția de bradikinină prin inhibarea enzimei care o generează.' },
              { tag: 'AR', name: 'Antagonist al receptorilor de bradikinină', desc: 'Icatibant — blochează acțiunea bradikininei. Autorizat pentru autoadministrare.' },
            ].map((item) => (
              <div key={item.tag} className="grid grid-cols-1 sm:grid-cols-[52px_1fr] gap-x-5 py-5 border-b border-neutral-200 items-start">
                <span className="font-playfair text-2xl font-black text-neutral-200 pt-0.5">{item.tag}</span>
                <div>
                  <h3 className="font-bold text-neutral-800 text-lg mb-1">{item.name}</h3>
                  <p className="text-base leading-[1.75] text-neutral-600">{item.desc}</p>
                </div>
              </div>
            ))}

            <h4 className="font-bold text-neutral-800 mt-8 mb-4">Recomandări WAO/EAACI</h4>
            <ul className="space-y-2 text-base leading-[1.75] text-neutral-600">
              {[
                'Tratamentul precoce oferă răspuns mai bun',
                'Se recomandă autoadministrarea cât mai devreme posibil',
                'Toate concentratele de C1-inhibitor și icatibantul sunt autorizate pentru autoadministrare',
                'Dacă nu sunt disponibile, se utilizează plasmă tratată (SDP) sau proaspătă congelată (FFP)',
                'Se recomandă evitarea antifibrinoliticelor sau androgenilor ca tratamente la cerere',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 mt-2.5" />
                  {item}
                </li>
              ))}
            </ul>
          </ArticleSection>

          {/* Profilaxie termen lung */}
          <ArticleSection label="Profilaxie">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-5 leading-snug">Profilaxia pe termen lung (PTL)</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-8">
              Utilizarea regulată de medicamente pentru a preveni episoadele de umflare.
              Cu medicamente moderne, unele persoane nu mai au atacuri deloc.
            </p>

            {[
              { tag: 'C1', name: 'Concentrat de C1-inhibitor (pdC1-inhibitor)', desc: 'Administrare regulată pentru menținerea unui nivel constant. Disponibil subcutanat și intravenos.' },
              { tag: 'L', name: 'Lanadelumab', desc: 'Inhibitor de kalikreină (anticorp monoclonal), subcutanat. Primă linie pentru profilaxie.' },
              { tag: 'B', name: 'Berotralstat', desc: 'Inhibitor de kalikreină, oral. Primă linie, fără necesitatea injecțiilor.' },
            ].map((item) => (
              <div key={item.tag} className="grid grid-cols-1 sm:grid-cols-[52px_1fr] gap-x-5 py-5 border-b border-neutral-200 items-start">
                <span className="font-playfair text-2xl font-black text-neutral-200 pt-0.5">{item.tag}</span>
                <div>
                  <h3 className="font-bold text-neutral-800 text-lg mb-1">{item.name}</h3>
                  <p className="text-base leading-[1.75] text-neutral-600">{item.desc}</p>
                </div>
              </div>
            ))}

            <h4 className="font-bold text-neutral-800 mt-8 mb-3">Alternative</h4>
            <ul className="space-y-2 text-base leading-[1.75] text-neutral-600 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 mt-2.5" />
                Androgenii atenuați — multe efecte secundare
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 mt-2.5" />
                Antifibrinoliticele (acid tranexamic) — când androgenii sunt contraindicați
              </li>
            </ul>

            <Pullquote tag="Atenție">
              <p>
                Chiar dacă se utilizează profilaxia pe termen lung, tratamentul la cerere trebuie să fie <strong>întotdeauna disponibil</strong>.
              </p>
            </Pullquote>
          </ArticleSection>

          {/* Profilaxie termen scurt */}
          <ArticleSection label="Termen scurt">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-5 leading-snug">Profilaxia pe termen scurt</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-6">
              Se efectuează înainte de proceduri chirurgicale sau dentare. Concentratul de
              C1-inhibitor derivat din plasmă intravenos este tratamentul ales.
            </p>

            <h4 className="font-bold text-neutral-800 mb-3">Alternative</h4>
            <ul className="space-y-2 text-base leading-[1.75] text-neutral-600 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 mt-2.5" />
                Concentrat recombinant de C1-inhibitor
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 mt-2.5" />
                Plasmă proaspătă congelată (FFP)
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 mt-2.5" />
                Androgeni atenuați (5 zile înainte și 2-3 zile după procedură)
              </li>
            </ul>

            <Pullquote tag="Atenție">
              <p>
                Tratamentul la cerere trebuie să fie <strong>disponibil în timpul procedurii</strong>.
              </p>
            </Pullquote>
          </ArticleSection>

          <ArticleSource sources={[
            { href: 'https://haei.org/what-is-hae/treatment/', label: 'HAE International (HAEi)' },
            { href: 'https://www.haea.org/pages/p/treatments', label: 'US HAEA' },
            { href: 'https://emedicine.medscape.com/article/135604-treatment', label: 'Medscape' },
          ]} />

          <ArticleNav
            prev={{ to: '/diagnosticarea-aee', label: 'Diagnosticarea AEE' }}
            next={{ to: '/aee-si-copiii', label: 'AEE și copiii' }}
          />
        </div>
      </div>
    </>
  );
};

export default HAETreatments;
