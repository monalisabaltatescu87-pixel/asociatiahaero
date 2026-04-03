import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, SectionHeader, Card, Callout, Button } from '../components/ui';

const HAETreatments: React.FC = () => {
  return (
    <><SEO title="Tratamente pentru Angioedem Ereditar" description="Opțiuni de tratament disponibile pentru angioedemul ereditar: tratament la cerere, profilaxie pe termen lung și scurt, și noi terapii." path="/cum-tratam-aee" /><div>
      {/* Hero Section */}
      <PageHero
        variant="accent"
        backLink="/ce-este-aee"
        backLabel="Care sunt simptomele AEE?"
        title="Tratamente"
        titleHighlight="disponibile"
        description="Există tratamente eficiente care ajută la reducerea frecvenței și severității umflăturilor și ameliorează simptomele. Din păcate, similar cu multe alte boli rare, nu există un tratament curativ pentru AEE. Obiectivele tratamentului AEE sunt de a obține controlul complet al bolii și de a normaliza viața pacienților. Cu medicamentele moderne, unele persoane raportează că pot trăi practic fără umflături."
      />

      {/* Important distinction */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Callout variant="error" title="Important">
            <p className="leading-relaxed font-medium">
              Angioedermul din AEE <strong>nu răspunde</strong> la
              medicamentele utilizate în tratarea altor forme de urticarie/angioedem,
              cum ar fi antihistaminicele, adrenalina și corticosteroizii. Deși adrenalina
              poate avea un efect tranzitoriu asupra umflăturii, nu modifică evoluția
              unui atac.
            </p>
          </Callout>
        </div>
      </section>

      {/* About Drug Classes */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="accent-left" accentColor="accent" hover={false} className="p-8">
            <h3 className="text-xl font-bold text-neutral-800 mb-4">
              Despre clasele și denumirile medicamentelor
            </h3>
            <p className="text-neutral-600 text-lg mb-4 leading-relaxed">
              Medicamentele cu anumite similitudini pot fi grupate în clase de medicamente.
              Fiecare medicament are un nume generic aprobat (substanța activă). Mai multe
              companii pot produce același medicament generic, fiecare cu un nume de marcă comercial.
            </p>
            <Callout variant="info">
              <p className="text-sm leading-relaxed">
                <strong>Exemplu:</strong> ibuprofenul (generic) → Advil®, Neurofen®, Motrin® etc.
              </p>
            </Callout>
          </Card>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Acute Treatment */}
            <Card variant="accent-left" accentColor="accent" hover={false} className="p-8">
              <h3 className="text-xl font-bold text-neutral-800 mb-4">
                Tratamentul la cerere (acut)
              </h3>
              <p className="text-neutral-600 text-lg mb-4 leading-relaxed">
                Utilizat pentru a opri progresia umflăturii. Utilizarea rapidă este deosebit
                de importantă la nivelul gâtului/căilor respiratorii, deoarece poate duce la
                deces prin sufocare.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-accent-50 rounded-xl p-6">
                  <h4 className="font-bold text-neutral-800 mb-2">Concentrat de C1-inhibitor intravenos</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Produse din plasmă sanguină (pdC1-inhibitor) și produse recombinante
                    (rhC1-inhibitor). Toate concentratele de C1-inhibitor sunt autorizate
                    pentru autoadministrare.
                  </p>
                </div>
                <div className="bg-accent-50 rounded-xl p-6">
                  <h4 className="font-bold text-neutral-800 mb-2">Inhibitor de kalikreină plasmatică</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Ecallantidă — reduce producția de bradikinină prin inhibarea enzimei
                    care o generează.
                  </p>
                </div>
                <div className="bg-accent-50 rounded-xl p-6 md:col-span-2">
                  <h4 className="font-bold text-neutral-800 mb-2">Antagonist al receptorilor de bradikinină</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Icatibant — blochează acțiunea bradikininei, mediatorul principal al
                    edemului. Autorizat pentru autoadministrare.
                  </p>
                </div>
              </div>

              {/* WAO/EAACI Recommendations */}
              <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                <h4 className="font-bold text-neutral-800 mb-3">Recomandări WAO/EAACI</h4>
                <ul className="text-neutral-700 text-sm leading-relaxed space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Tratamentul precoce oferă răspuns mai bun</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Tratamentul ar trebui administrat cât mai devreme posibil, prin autoadministrare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Toate concentratele de C1-inhibitor și icatibantul sunt autorizate pentru autoadministrare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Dacă nu sunt disponibile, se utilizează plasma tratată cu solvent-detergent (SDP) sau plasma proaspătă congelată (FFP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Se recomandă evitarea antifibrinoliticelor (acid tranexamic) sau androgenilor (danazol) ca tratamente la cerere</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Long-term Prophylaxis */}
            <Card variant="accent-left" accentColor="primary" hover={false} className="p-8">
              <h3 className="text-xl font-bold text-neutral-800 mb-4">
                Profilaxia pe termen lung (PTL)
              </h3>
              <p className="text-neutral-600 text-lg mb-4 leading-relaxed">
                Utilizarea regulată de medicamente pentru a preveni episoadele de umflare.
                Reduce numărul atacurilor, iar cu medicamente moderne, unele persoane nu mai
                au atacuri deloc. Trebuie adaptată individual.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-primary-50 rounded-xl p-6">
                  <h4 className="font-bold text-neutral-800 mb-2">Concentrat de C1-inhibitor (pdC1-inhibitor)</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Administrare regulată pentru menținerea unui nivel constant de inhibitor
                    C1 esterază în organism. Disponibil în formă subcutanată și intravenoasă.
                  </p>
                </div>
                <div className="bg-primary-50 rounded-xl p-6">
                  <h4 className="font-bold text-neutral-800 mb-2">Lanadelumab</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Inhibitor de kalikreină plasmatică (anticorp monoclonal), administrat
                    subcutanat. Recomandat ca opțiune de primă linie pentru profilaxia pe
                    termen lung.
                  </p>
                </div>
                <div className="bg-primary-50 rounded-xl p-6 md:col-span-2">
                  <h4 className="font-bold text-neutral-800 mb-2">Berotralstat</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Inhibitor de kalikreină plasmatică, administrat oral. Recomandat ca
                    opțiune de primă linie pentru profilaxie, fără necesitatea injecțiilor.
                  </p>
                </div>
              </div>

              {/* Alternative PTL options */}
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200 mb-6">
                <h4 className="font-bold text-neutral-800 mb-3">Alternative când medicamentele de mai sus nu sunt disponibile</h4>
                <ul className="text-neutral-700 text-sm leading-relaxed space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Androgenii atenuați pot fi utilizați, dar au multe efecte secundare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Antifibrinoliticele (acid tranexamic) pot fi utilizate când androgenii sunt contraindicați</span>
                  </li>
                </ul>
              </div>

              <Callout variant="error" title="Atenție">
                <p className="text-sm leading-relaxed font-medium">
                  Chiar dacă se utilizează profilaxia pe termen lung,
                  tratamentul la cerere trebuie să fie întotdeauna disponibil.
                </p>
              </Callout>
            </Card>

            {/* Short-term Prophylaxis */}
            <Card variant="accent-left" accentColor="secondary" hover={false} className="p-8">
              <h3 className="text-xl font-bold text-neutral-800 mb-4">
                Profilaxia pe termen scurt
              </h3>
              <p className="text-neutral-600 text-lg mb-4 leading-relaxed">
                Se efectuează înainte de proceduri chirurgicale sau dentare. Concentratul de
                C1-inhibitor derivat din plasmă intravenos este tratamentul ales.
              </p>
              <div className="bg-secondary-50 rounded-xl p-6 mb-4">
                <h4 className="font-bold text-neutral-800 mb-3">Alternative</h4>
                <ul className="text-neutral-700 text-sm leading-relaxed space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Concentrat recombinant de C1-inhibitor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Plasmă proaspătă congelată (FFP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Androgeni atenuați (5 zile înainte și 2-3 zile după procedură)</span>
                  </li>
                </ul>
              </div>
              <Callout variant="error" title="Atenție">
                <p className="text-sm leading-relaxed font-medium">
                  Tratamentul la cerere trebuie să fie disponibil în
                  timpul procedurii.
                </p>
              </Callout>
            </Card>
          </div>
        </div>
      </section>

      {/* HAERO Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            title="Misiunea"
            titleHighlight="HAERO"
            dividerColor="primary"
          />
          <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
            HAERO militează pentru accesul fiecărui pacient la tratament specific,
            individualizat, și pentru îmbunătățirea managementului bolii, în special
            în zona de profilaxie pe termen lung.
          </p>
          <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
            Fiecare pacient cu AEE merită acces la tratamente moderne care îi permit
            să ducă o viață normală, fără teama episoadelor imprevizibile.
          </p>
          <Button variant="primary" size="lg" to="/contact">
            Contactează-ne
          </Button>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/ce-cauzeaza-aee" className="text-primary-500 font-semibold hover:text-primary-600 transition-colors">
              ← Principalele cauze
            </Link>
            <Link to="/diagnosticarea-aee" className="text-primary-500 font-semibold hover:text-primary-600 transition-colors sm:text-right">
              Diagnosticarea AEE →
            </Link>
          </div>
        </div>
      </section>

      {/* Source Attribution */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
