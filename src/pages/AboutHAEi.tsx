import React from 'react';
import SEO from '../components/SEO';
import { ArticleHero, ArticleSection, ArticleNav, ArticleSource } from '../components/ui';

const resources = [
  { name: 'HAE TrackR', desc: <>Jurnal electronic pentru înregistrarea atacurilor, tratamentelor și impactului AEE. Date securizate și conforme GDPR. Accesibil pe <a href="https://haetrackr.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">haetrackr.org</a>.</> },
  { name: 'Carduri de urgență', desc: <>Informații clare despre AEE și tratamentul necesar în caz de urgență. Disponibile în multe limbi prin aplicația HAE Companion și pe <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">haei.org</a>.</> },
  { name: 'HAE Companion App', desc: 'Aplicație mobilă cu carduri de urgență electronice, centre ACARE, spitale, medici specializați în AEE și direcții prin Maps. Disponibilă pe Apple App Store și Google Play.' },
  { name: 'Programul de Acces Global (GAP)', desc: 'Acces la medicamente pentru AEE în țările unde nu sunt disponibile terapii moderne. Primul program de acest fel inițiat de o organizație de pacienți.' },
  { name: 'Site web și rețele sociale', desc: <>
    <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">haei.org</a> oferă informații, povești ale pacienților, studii clinice și știri. Urmăriți HAEi pe{' '}
    <a href="https://facebook.com/groups/HAEinternational" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">Facebook</a>,{' '}
    <a href="https://instagram.com/hae_international" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">Instagram</a>,{' '}
    <a href="https://twitter.com/HAEDAY" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">Twitter</a> și LinkedIn.
  </> },
  { name: 'hae day :-)', desc: <>Ziua mondială de conștientizare a AEE, marcată pe 16 mai anual, din 2012. Mai multe pe <a href="https://haeday.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">haeday.org</a>.</> },
  { name: 'Revista Global Perspectives', desc: <>Publicație trimestrială cu articole despre experiențele pacienților, studii clinice și știri din industrie. Disponibilă pe <a href="https://haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">haei.org</a>.</> },
  { name: 'Conferințe și ateliere', desc: 'Evenimente care reunesc pacienți, îngrijitori, medici și reprezentanți din industrie pentru schimb de cunoștințe și experiențe.' },
  { name: 'Comunitatea Tinerilor', desc: <>Dedicată pacienților 12–25 ani. Include cărți de activități, resurse pentru copii și un Grup Consultativ din 6 voluntari tineri. Vizitați <a href="https://youngsters.haei.org" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">youngsters.haei.org</a>.</> },
];

const AboutHAEi: React.FC = () => {
  return (
    <>
      <SEO
        title="Despre HAE International"
        description="HAE International (HAEi) - rețeaua globală de asociații de pacienți cu angioedem ereditar. Resurse, aplicații și programe de acces."
        path="/despre-haei"
      />
      <div className="bg-white">
        <ArticleHero
          backLink="/ce-este-aee"
          label="Organizație"
          title="Despre HAE International"
          description="O rețea globală non-profit de asociații de pacienți dedicată îmbunătățirii vieții persoanelor cu AEE. Neutră față de companii și produse."
        />

        <div className="max-w-[860px] mx-auto px-5 sm:px-6 pb-20">

          <ArticleSection label="Resurse">
            <h2 className="font-playfair text-[28px] font-bold text-neutral-800 mb-3 leading-snug">Resurse și Programe HAEi</h2>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-8">
              HAEi oferă o gamă largă de resurse, aplicații și programe pentru pacienții cu AEE din întreaga lume.
            </p>

            {resources.map((item) => (
              <div key={item.name} className="py-5 border-b border-neutral-200">
                <h3 className="font-bold text-neutral-800 text-lg mb-1">{item.name}</h3>
                <p className="text-base leading-[1.75] text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </ArticleSection>

          <ArticleSource sources={[
            { href: 'https://haei.org', label: 'HAE International (HAEi)' },
          ]} />

          <ArticleNav
            prev={{ to: '/calatorii', label: 'Călătorii cu AEE' }}
          />
        </div>
      </div>
    </>
  );
};

export default AboutHAEi;
