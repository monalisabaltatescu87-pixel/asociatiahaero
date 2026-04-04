import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, SectionHeader, Callout } from '../components/ui';

const HAETreatments: React.FC = () => {
  return (
    <>
      <SEO
        title="Tratamente pentru Angioedem Ereditar"
        description="Opțiuni de tratament disponibile pentru angioedemul ereditar: tratament la cerere, profilaxie pe termen lung și scurt, și noi terapii."
        path="/cum-tratam-aee"
      />
      <div className="bg-white">
        {/* Hero Section */}
        <PageHero
          variant="reader"
          backLink="/ce-este-aee"
          backLabel="Despre AEE"
          title="Tratamente disponibile"
          description="Există tratamente eficiente care ajută la reducerea frecvenței și severității umflăturilor și ameliorează simptomele. Din păcate, similar cu multe alte boli rare, nu există un tratament curativ pentru AEE. Obiectivele tratamentului AEE sunt de a obține controlul complet al bolii și de a normaliza viața pacienților. Cu medicamentele moderne, unele persoane raportează că pot trăi practic fără umflături."
        />

        {/* Important distinction */}
        <section className="pt-10 pb-8">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="absolute -top-3.5 left-10 w-7 h-7 bg-accent-400 text-white rounded-full flex items-center justify-center font-extrabold text-sm">!</div>
              <Callout variant="info" title="Important">
                <p className="leading-relaxed font-medium">
                  Angioedermul din AEE <strong className="text-neutral-800 font-bold">nu răspunde</strong> la
                  medicamentele utilizate în tratarea altor forme de urticarie/angioedem,
                  cum ar fi antihistaminicele, adrenalina și corticosteroizii. Deși adrenalina
                  poate avea un efect tranzitoriu asupra umflăturii, nu modifică evoluția
                  unui atac.
                </p>
              </Callout>
            </div>
          </div>
        </section>

        {/* Acute Treatment */}
        <section className="py-8">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader reader={true} title="Tratamentul la cerere (acut)" />
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-6">
              Utilizat pentru a opri progresia umflăturii. Utilizarea rapidă este deosebit
              de importantă la nivelul gâtului/căilor respiratorii, deoarece poate duce la
              deces prin sufocare.
            </p>

            <div className="flex flex-col gap-4 mb-6">
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center font-black text-sm flex-shrink-0 bg-accent-50 text-accent-400 border-2 border-accent-200">IV</div>
                <div>
                  <h3 className="font-bold text-neutral-800 text-lg mb-1">Concentrat de C1-inhibitor intravenos</h3>
                  <p className="text-[17px] leading-[1.85] text-neutral-600">
                    Produse din plasmă sanguină (pdC1-inhibitor) și produse recombinante
                    (rhC1-inhibitor). Toate concentratele de C1-inhibitor sunt autorizate
                    pentru autoadministrare.
                  </p>
                </div>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center font-black text-sm flex-shrink-0 bg-secondary-50 text-secondary-400 border-2 border-secondary-200">IK</div>
                <div>
                  <h3 className="font-bold text-neutral-800 text-lg mb-1">Inhibitor de kalikreină plasmatică</h3>
                  <p className="text-[17px] leading-[1.85] text-neutral-600">
                    Ecallantidă — reduce producția de bradikinină prin inhibarea enzimei
                    care o generează.
                  </p>
                </div>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center font-black text-sm flex-shrink-0 bg-primary-50 text-primary-500 border-2 border-primary-200">AR</div>
                <div>
                  <h3 className="font-bold text-neutral-800 text-lg mb-1">Antagonist al receptorilor de bradikinină</h3>
                  <p className="text-[17px] leading-[1.85] text-neutral-600">
                    Icatibant — blochează acțiunea bradikininei, mediatorul principal al
                    edemului. Autorizat pentru autoadministrare.
                  </p>
                </div>
              </div>
            </div>

            <h4 className="font-bold text-neutral-800 mb-3">Recomandări WAO/EAACI</h4>
            <ul className="text-[17px] leading-[1.85] text-neutral-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                <span>Tratamentul precoce oferă răspuns mai bun</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                <span>Tratamentul ar trebui administrat cât mai devreme posibil, prin autoadministrare</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                <span>Toate concentratele de C1-inhibitor și icatibantul sunt autorizate pentru autoadministrare</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                <span>Dacă nu sunt disponibile, se utilizează plasma tratată cu solvent-detergent (SDP) sau plasma proaspătă congelată (FFP)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                <span>Se recomandă evitarea antifibrinoliticelor (acid tranexamic) sau androgenilor (danazol) ca tratamente la cerere</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Long-term Prophylaxis */}
        <section className="py-8">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader reader={true} title="Profilaxia pe termen lung (PTL)" />
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-6">
              Utilizarea regulată de medicamente pentru a preveni episoadele de umflare.
              Reduce numărul atacurilor, iar cu medicamente moderne, unele persoane nu mai
              au atacuri deloc. Trebuie adaptată individual.
            </p>

            <div className="flex flex-col gap-4 mb-6">
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center font-black text-sm flex-shrink-0 bg-primary-50 text-primary-500 border-2 border-primary-200">C1</div>
                <div>
                  <h3 className="font-bold text-neutral-800 text-lg mb-1">Concentrat de C1-inhibitor (pdC1-inhibitor)</h3>
                  <p className="text-[17px] leading-[1.85] text-neutral-600">
                    Administrare regulată pentru menținerea unui nivel constant de inhibitor
                    C1 esterază în organism. Disponibil în formă subcutanată și intravenoasă.
                  </p>
                </div>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center font-black text-sm flex-shrink-0 bg-secondary-50 text-secondary-400 border-2 border-secondary-200">L</div>
                <div>
                  <h3 className="font-bold text-neutral-800 text-lg mb-1">Lanadelumab</h3>
                  <p className="text-[17px] leading-[1.85] text-neutral-600">
                    Inhibitor de kalikreină plasmatică (anticorp monoclonal), administrat
                    subcutanat. Recomandat ca opțiune de primă linie pentru profilaxia pe
                    termen lung.
                  </p>
                </div>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center font-black text-sm flex-shrink-0 bg-accent-50 text-accent-400 border-2 border-accent-200">B</div>
                <div>
                  <h3 className="font-bold text-neutral-800 text-lg mb-1">Berotralstat</h3>
                  <p className="text-[17px] leading-[1.85] text-neutral-600">
                    Inhibitor de kalikreină plasmatică, administrat oral. Recomandat ca
                    opțiune de primă linie pentru profilaxie, fără necesitatea injecțiilor.
                  </p>
                </div>
              </div>
            </div>

            <h4 className="font-bold text-neutral-800 mb-3">Alternative când medicamentele de mai sus nu sunt disponibile</h4>
            <ul className="text-[17px] leading-[1.85] text-neutral-600 space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                <span>Androgenii atenuați pot fi utilizați, dar au multe efecte secundare</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                <span>Antifibrinoliticele (acid tranexamic) pot fi utilizate când androgenii sunt contraindicați</span>
              </li>
            </ul>

            <Callout variant="warning" title="Atenție">
              <p className="text-sm leading-relaxed font-medium">
                Chiar dacă se utilizează profilaxia pe termen lung,
                tratamentul la cerere trebuie să fie întotdeauna disponibil.
              </p>
            </Callout>
          </div>
        </section>

        {/* Short-term Prophylaxis */}
        <section className="py-8">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader reader={true} title="Profilaxia pe termen scurt" />
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-6">
              Se efectuează înainte de proceduri chirurgicale sau dentare. Concentratul de
              C1-inhibitor derivat din plasmă intravenos este tratamentul ales.
            </p>

            <h4 className="font-bold text-neutral-800 mb-3">Alternative</h4>
            <ul className="text-[17px] leading-[1.85] text-neutral-600 space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                <span>Concentrat recombinant de C1-inhibitor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                <span>Plasmă proaspătă congelată (FFP)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1 shrink-0">•</span>
                <span>Androgeni atenuați (5 zile înainte și 2-3 zile după procedură)</span>
              </li>
            </ul>

            <Callout variant="warning" title="Atenție">
              <p className="text-sm leading-relaxed font-medium">
                Tratamentul la cerere trebuie să fie disponibil în
                timpul procedurii.
              </p>
            </Callout>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-10">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between">
              <Link to="/diagnosticarea-aee" className="text-primary-500 font-semibold hover:text-primary-600 transition-colors">
                ← Diagnosticarea AEE
              </Link>
              <Link to="/aee-si-copiii" className="text-primary-500 font-semibold hover:text-primary-600 transition-colors text-right">
                AEE și copiii →
              </Link>
            </div>
          </div>
        </section>

        {/* Source Attribution */}
        <section className="py-8">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-neutral-500 text-sm">
              Informații bazate pe date de la{' '}
              <a href="https://haei.org/what-is-hae/treatment/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
                HAE International (HAEi)
              </a>
              {', '}
              <a href="https://www.haea.org/pages/p/treatments" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
                US HAEA
              </a>
              {' și '}
              <a href="https://emedicine.medscape.com/article/135604-treatment" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
                Medscape
              </a>.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HAETreatments;
