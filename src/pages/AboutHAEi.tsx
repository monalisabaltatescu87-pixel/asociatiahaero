import SEO from '../components/SEO';
import React from 'react';
import { PageHero, SectionHeader, Card, IconBox, Button } from '../components/ui';
import { Activity, CreditCard, Smartphone, Handshake, Globe, Calendar, Newspaper, Video, Smile } from 'lucide-react';

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
                  <Activity size={24} />
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
                  <CreditCard size={24} />
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2 text-lg">Carduri de urgență</h3>
                  <p className="text-neutral-600 text-base leading-relaxed">
                    Conțin informații clare despre AEE și tratamentul necesar în caz de urgență. Disponibile în multe limbi prin aplicația HAE Companion și pe{' '}
                    <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
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
                  <Smartphone size={24} />
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
                  <Handshake size={24} />
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
                  <Globe size={24} />
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2 text-lg">Site web și rețele sociale</h3>
                  <p className="text-neutral-600 text-base leading-relaxed mb-3">
                    <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
                      haei.org
                    </a>{' '}
                    oferă informații, povești ale pacienților, studii clinice și știri.
                  </p>
                  <ul className="space-y-1 text-neutral-600 text-sm">
                    <li>
                      <a href="https://facebook.com/groups/HAEinternational" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">Facebook Group</a>
                    </li>
                    <li>
                      <a href="https://instagram.com/hae_international" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">Instagram</a>
                    </li>
                    <li>
                      <a href="https://twitter.com/HAEDAY" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">Twitter</a>
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
                  <Calendar size={24} />
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2 text-lg">hae day :-)</h3>
                  <p className="text-neutral-600 text-base leading-relaxed">
                    Ziua mondială de conștientizare a AEE, marcată pe 16 mai în fiecare an, începând din 2012. Un eveniment global dedicat sensibilizării publicului. Mai multe informații pe{' '}
                    <a href="https://haeday.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
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
                  <Newspaper size={24} />
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
                  <Video size={24} />
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
                  <Smile size={24} />
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-2 text-lg">Comunitatea Tinerilor</h3>
                  <p className="text-neutral-600 text-base leading-relaxed">
                    Dedicată pacienților cu vârste între 12 și 25 de ani. Include cărți de activități, resurse pentru copii și un Grup Consultativ format din 6 voluntari tineri. Vizitați{' '}
                    <a href="https://youngsters.haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
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
            <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
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
