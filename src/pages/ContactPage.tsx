import React from 'react';
import SEO from '../components/SEO';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import ContactInfoBar from '../components/contact/ContactInfoBar';
import ContactForm from '../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  const isVisible = useAnimateOnScroll();

  return (
    <>
      <SEO
        title="Contact"
        description="Contactează Asociația HAERO pentru întrebări, informații sau colaborări. Email, telefon și formular de contact."
        path="/contact"
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
            Contact
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-neutral-800 max-w-[600px] mx-auto mb-5 px-6">
            Contactează-ne
          </h1>
          <p className="text-[1.05rem] leading-[1.8] text-neutral-500 max-w-[480px] mx-auto px-6">
            Dacă crezi că te identifici ca având simptomele specifice AEE sau ești medic și ai nevoie
            de informații, te invităm să ne contactezi.
          </p>
        </section>

        <ContactInfoBar isVisible={isVisible} />
        <ContactForm isVisible={isVisible} />
      </div>
    </>
  );
};

export default ContactPage;
