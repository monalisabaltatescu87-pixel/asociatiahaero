import React from 'react';
import SEO from '../components/SEO';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import SocialLinks from '../components/community/SocialLinks';
import Leadership from '../components/community/Leadership';
import MembershipForm from '../components/community/MembershipForm';

const Community: React.FC = () => {
  const isVisible = useAnimateOnScroll();

  return (
    <>
      <SEO
        title="Comunitate"
        description="Alătură-te comunității HAERO. Conectează-te cu alți pacienți, aparținători și medici implicați în lupta cu angioedemul ereditar."
        path="/comunitate"
      />

      <div>
        {/* ── Page header ── */}
        <section
          className="pt-[calc(64px+5rem)] pb-16 text-center"
          style={{
            background: 'linear-gradient(180deg, #fef9ec 0%, #fdfcfa 100%)',
          }}
        >
          <div className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-neutral-400 mb-6">
            Comunitate
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-neutral-800 max-w-[600px] mx-auto mb-5 px-6">
            Alătură-te
          </h1>
          <p className="text-[1.05rem] leading-[1.8] text-neutral-500 max-w-[480px] mx-auto px-6">
            În această călătorie, responsabilitatea poate fi egal împărțită între toți cei care doresc
            să se implice. Povestea ta merită să fie ascultată.
          </p>
        </section>

        <Leadership isVisible={isVisible} />
        <SocialLinks isVisible={isVisible} />
        <MembershipForm isVisible={isVisible} />
      </div>
    </>
  );
};

export default Community;
