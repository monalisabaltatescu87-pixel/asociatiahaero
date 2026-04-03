import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, SectionHeader, Card, IconBox, Button } from '../components/ui';

const colorCycle: Array<'primary' | 'accent' | 'secondary'> = ['primary', 'accent', 'secondary'];

const AboutHAEi: React.FC = () => {
  return (
    <><SEO title="Despre HAE International" description="HAE International (HAEi) - rețeaua globală de asociații de pacienți cu angioedem ereditar. Resurse, aplicații și programe de acces." path="/despre-haei" /><div className="pt-20">
      {/* Hero Section */}
      <PageHero
        variant="accent"
        backLink="/ce-este-aee"
        backLabel="Înapoi la Ce este AEE"
        title="Despre"
        titleHighlight="HAE International (HAEi)"
        description="HAE International (HAEi) este o rețea globală non-profit de asociații de pacienți dedicată îmbunătățirii vieții persoanelor cu HAE. Un grup de pacienți și îngrijitori dedicați care lucrează pentru sensibilizarea, îmbunătățirea timpului până la diagnostic și susținerea aprobării terapiilor salvatoare de vieți. HAEi este neutră față de companii și produse."
      />

      {/* Resources Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Resurse globale"
            title="Resurse și"
            titleHighlight="Programe HAEi"
            description="HAEi oferă o gamă largă de resurse, aplicații și programe pentru pacienții cu angioedem ereditar din întreaga lume."
            dividerColor="accent"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 1 - HAE TrackR */}
            <Card variant="feature" accentColor={colorCycle[0]}>
              <div className="p-7 flex items-start gap-4">
                <IconBox variant={colorCycle[0]}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2 text-lg">HAE TrackR</h3>
                  <p className="text-neutral-600 text-base leading-relaxed">
                    Jurnal electronic pentru înregistrarea atacurilor, tratamentelor și impactului AEE asupra vieții de zi cu zi. Datele sunt securizate și conforme cu GDPR. Accesibil pe{' '}
                    <a href="https://haetrackr.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
                      haetrackr.org
                    </a>.
                  </p>
                </div>
              </div>
            </Card>

            {/* 2 - Carduri de urgență */}
            <Card variant="feature" accentColor={colorCycle[1]}>
              <div className="p-7 flex items-start gap-4">
                <IconBox variant={colorCycle[1]}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2 text-lg">Carduri de urgență</h3>
                  <p className="text-neutral-600 text-base leading-relaxed">
                    Conțin informații clare despre AEE și tratamentul necesar în caz de urgență. Disponibile în multe limbi prin aplicația HAE Companion și pe{' '}
                    <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:text-accent-600 underline">
                      haei.org
                    </a>.
                  </p>
                </div>
              </div>
            </Card>

            {/* 3 - HAE Companion App */}
            <Card variant="feature" accentColor={colorCycle[2]}>
              <div className="p-7 flex items-start gap-4">
                <IconBox variant={colorCycle[2]}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2 text-lg">HAE Companion App</h3>
                  <p className="text-neutral-600 text-base leading-relaxed">
                    Aplicație mobilă cu carduri de urgență electronice, centre ACARE, spitale, medici specializați în AEE și direcții prin Maps. Disponibilă pe Apple App Store și Google Play.
                  </p>
                </div>
              </div>
            </Card>

            {/* 4 - Programul de Acces Global (GAP) */}
            <Card variant="feature" accentColor={colorCycle[0]}>
              <div className="p-7 flex items-start gap-4">
                <IconBox variant={colorCycle[0]}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2 text-lg">Programul de Acces Global (GAP)</h3>
                  <p className="text-neutral-600 text-base leading-relaxed">
                    Program care oferă acces la medicamente pentru AEE în țările unde nu sunt disponibile terapii moderne. Este primul program de acest fel inițiat de o organizație de pacienți.
                  </p>
                </div>
              </div>
            </Card>

            {/* 5 - Site web și rețele sociale */}
            <Card variant="feature" accentColor={colorCycle[1]}>
              <div className="p-7 flex items-start gap-4">
                <IconBox variant={colorCycle[1]}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2 text-lg">Site web și rețele sociale</h3>
                  <p className="text-neutral-600 text-base leading-relaxed mb-3">
                    <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:text-accent-600 underline">
                      haei.org
                    </a>{' '}
                    oferă informații, povești ale pacienților, studii clinice și știri.
                  </p>
                  <ul className="space-y-1 text-neutral-600 text-sm">
                    <li>
                      <a href="https://facebook.com/groups/HAEinternational" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:text-accent-600 underline">Facebook Group</a>
                    </li>
                    <li>
                      <a href="https://instagram.com/hae_international" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:text-accent-600 underline">Instagram</a>
                    </li>
                    <li>
                      <a href="https://twitter.com/HAEDAY" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:text-accent-600 underline">Twitter</a>
                    </li>
                    <li>LinkedIn</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* 6 - hae day :-) */}
            <Card variant="feature" accentColor={colorCycle[2]}>
              <div className="p-7 flex items-start gap-4">
                <IconBox variant={colorCycle[2]}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2 text-lg">hae day :-)</h3>
                  <p className="text-neutral-600 text-base leading-relaxed">
                    Ziua mondială de conștientizare a AEE, marcată pe 16 mai în fiecare an, începând din 2012. Un eveniment global dedicat sensibilizării publicului. Mai multe informații pe{' '}
                    <a href="https://haeday.org" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-secondary-500 underline">
                      haeday.org
                    </a>.
                  </p>
                </div>
              </div>
            </Card>

            {/* 7 - Revista Global Perspectives */}
            <Card variant="feature" accentColor={colorCycle[0]}>
              <div className="p-7 flex items-start gap-4">
                <IconBox variant={colorCycle[0]}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2 text-lg">Revista Global Perspectives</h3>
                  <p className="text-neutral-600 text-base leading-relaxed">
                    Publicație trimestrială cu articole despre experiențele pacienților, studii clinice și știri din industrie. Disponibilă pe{' '}
                    <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
                      haei.org
                    </a>.
                  </p>
                </div>
              </div>
            </Card>

            {/* 8 - Conferințe și ateliere */}
            <Card variant="feature" accentColor={colorCycle[1]}>
              <div className="p-7 flex items-start gap-4">
                <IconBox variant={colorCycle[1]}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2 text-lg">Conferințe și ateliere</h3>
                  <p className="text-neutral-600 text-base leading-relaxed">
                    Evenimente care reunesc pacienți, îngrijitori, medici și reprezentanți din industrie pentru schimb de cunoștințe și experiențe în domeniul AEE.
                  </p>
                </div>
              </div>
            </Card>

            {/* 9 - Comunitatea Tinerilor */}
            <Card variant="feature" accentColor={colorCycle[2]} className="md:col-span-2">
              <div className="p-7 flex items-start gap-4">
                <IconBox variant={colorCycle[2]}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2 text-lg">Comunitatea Tinerilor</h3>
                  <p className="text-neutral-600 text-base leading-relaxed">
                    Dedicată pacienților cu vârste între 12 și 25 de ani. Include cărți de activități, resurse pentru copii și un Grup Consultativ format din 6 voluntari tineri. Vizitați{' '}
                    <a href="https://youngsters.haei.org" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-secondary-500 underline">
                      youngsters.haei.org
                    </a>.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-accent-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Button variant="ghost" to="/calatorii" size="md">
              ← Călătorii cu AEE
            </Button>
          </div>
        </div>
      </section>

      {/* Source Attribution */}
      <section className="py-8 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-400 text-sm">
            Informații bazate pe date de la{' '}
            <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:text-accent-600 underline">
              HAE International (HAEi)
            </a>.
          </p>
        </div>
      </section>
    </div>
  </>
  );
};

export default AboutHAEi;
