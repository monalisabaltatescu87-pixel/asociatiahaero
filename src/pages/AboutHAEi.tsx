import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, SectionHeader } from '../components/ui';
import { Activity, CreditCard, Smartphone, Handshake, Globe, Calendar, Newspaper, Video, Smile } from 'lucide-react';
import SEO from '../components/SEO';

const colorCycle: Array<'primary' | 'accent' | 'secondary'> = ['primary', 'accent', 'secondary'];

const iconBg: Record<string, string> = {
  primary: 'bg-primary-50 border-primary-200',
  accent: 'bg-accent-50 border-accent-200',
  secondary: 'bg-secondary-50 border-secondary-200',
};

const iconText: Record<string, string> = {
  primary: 'text-primary-500',
  accent: 'text-accent-500',
  secondary: 'text-secondary-500',
};

const resources = [
  {
    icon: Activity,
    title: 'HAE TrackR',
    body: (
      <>
        Jurnal electronic pentru înregistrarea atacurilor, tratamentelor și impactului AEE asupra vieții de zi cu zi. Datele sunt securizate și conforme cu GDPR. Accesibil pe{' '}
        <a href="https://haetrackr.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
          haetrackr.org
        </a>.
      </>
    ),
  },
  {
    icon: CreditCard,
    title: 'Carduri de urgență',
    body: (
      <>
        Conțin informații clare despre AEE și tratamentul necesar în caz de urgență. Disponibile în multe limbi prin aplicația HAE Companion și pe{' '}
        <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
          haei.org
        </a>.
      </>
    ),
  },
  {
    icon: Smartphone,
    title: 'HAE Companion App',
    body: (
      <>
        Aplicație mobilă cu carduri de urgență electronice, centre ACARE, spitale, medici specializați în AEE și direcții prin Maps. Disponibilă pe Apple App Store și Google Play.
      </>
    ),
  },
  {
    icon: Handshake,
    title: 'Programul de Acces Global (GAP)',
    body: (
      <>
        Program care oferă acces la medicamente pentru AEE în țările unde nu sunt disponibile terapii moderne. Este primul program de acest fel inițiat de o organizație de pacienți.
      </>
    ),
  },
  {
    icon: Globe,
    title: 'Site web și rețele sociale',
    body: (
      <>
        <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
          haei.org
        </a>{' '}
        oferă informații, povești ale pacienților, studii clinice și știri. Urmăriți HAEi pe{' '}
        <a href="https://facebook.com/groups/HAEinternational" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">Facebook</a>,{' '}
        <a href="https://instagram.com/hae_international" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">Instagram</a>,{' '}
        <a href="https://twitter.com/HAEDAY" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">Twitter</a> și LinkedIn.
      </>
    ),
  },
  {
    icon: Calendar,
    title: 'hae day :-)',
    body: (
      <>
        Ziua mondială de conștientizare a AEE, marcată pe 16 mai în fiecare an, începând din 2012. Un eveniment global dedicat sensibilizării publicului. Mai multe informații pe{' '}
        <a href="https://haeday.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
          haeday.org
        </a>.
      </>
    ),
  },
  {
    icon: Newspaper,
    title: 'Revista Global Perspectives',
    body: (
      <>
        Publicație trimestrială cu articole despre experiențele pacienților, studii clinice și știri din industrie. Disponibilă pe{' '}
        <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
          haei.org
        </a>.
      </>
    ),
  },
  {
    icon: Video,
    title: 'Conferințe și ateliere',
    body: (
      <>
        Evenimente care reunesc pacienți, îngrijitori, medici și reprezentanți din industrie pentru schimb de cunoștințe și experiențe în domeniul AEE.
      </>
    ),
  },
  {
    icon: Smile,
    title: 'Comunitatea Tinerilor',
    body: (
      <>
        Dedicată pacienților cu vârste între 12 și 25 de ani. Include cărți de activități, resurse pentru copii și un Grup Consultativ format din 6 voluntari tineri. Vizitați{' '}
        <a href="https://youngsters.haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
          youngsters.haei.org
        </a>.
      </>
    ),
  },
];

const AboutHAEi: React.FC = () => {
  return (
    <>
      <SEO
        title="Despre HAE International"
        description="HAE International (HAEi) - rețeaua globală de asociații de pacienți cu angioedem ereditar. Resurse, aplicații și programe de acces."
        path="/despre-haei"
      />
      <div>
        {/* Hero Section */}
        <PageHero
          variant="reader"
          backLink="/ce-este-aee"
          backLabel="Despre AEE"
          title="Despre HAE International (HAEi)"
          description="HAE International (HAEi) este o rețea globală non-profit de asociații de pacienți dedicată îmbunătățirii vieții persoanelor cu HAE. Un grup de pacienți și îngrijitori dedicați care lucrează pentru sensibilizarea, îmbunătățirea timpului până la diagnostic și susținerea aprobării terapiilor salvatoare de vieți. HAEi este neutră față de companii și produse."
        />

        {/* Resources Section */}
        <section className="py-8 bg-white">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              reader={true}
              title="Resurse și Programe HAEi"
              description="HAEi oferă o gamă largă de resurse, aplicații și programe pentru pacienții cu angioedem ereditar din întreaga lume."
            />

            <div className="flex flex-col gap-4 mt-10">
              {resources.map((item, i) => {
                const color = colorCycle[i % 3];
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors"
                  >
                    <div
                      className={`w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0 border ${iconBg[color]}`}
                    >
                      <Icon size={22} className={iconText[color]} />
                    </div>
                    <div>
                      <h3 className="text-neutral-800 font-bold text-lg mb-1.5">{item.title}</h3>
                      <p className="text-[17px] leading-[1.85] text-neutral-600">
                        {item.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 bg-white border-t border-neutral-100">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/calatorii"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-700 text-sm font-semibold transition-colors group"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Călătorii cu AEE
            </Link>
          </div>
        </section>

        {/* Source Attribution */}
        <section className="py-8 bg-white">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
