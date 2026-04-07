import SEO from '../components/SEO';
import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, User, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui';

const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbzrkk2UJX8EnnAdmZJBQsIj733WDz8Jb8t-Fm2jTYIub8H5dzQumLpOoRa4I9nu21lE9A/exec';

const ContactPage: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    locality: '',
    category: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        locality: '',
        category: '',
        subject: '',
        message: '',
      });
    } catch {
      setSubmitStatus('error');
    }
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <>
      <SEO
        title="Contact"
        description="Contactează Asociația HAERO pentru întrebări, informații sau colaborări. Email, telefon și formular de contact."
        path="/contact"
      />

      <div>
        {/* ── Hero ── */}
        <section className="relative pt-28 pb-20 text-center overflow-hidden bg-gradient-to-b from-white to-neutral-50">
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(228,181,68,0.06)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[58px] font-bold leading-[1.1] text-neutral-800 mb-6 tracking-tight">
              Contactează-ne
            </h1>

            <p className="text-lg leading-[1.8] text-neutral-500 max-w-[560px] mx-auto">
              Dacă crezi că te identifici ca având simptomele specifice AEE sau ești medic și ai nevoie de informații mai exacte, te invităm să ne contactezi.
            </p>
          </div>
        </section>

        {/* ── Contact Info ── */}
        <section className="bg-white">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 pt-12 pb-6">
            <h2
              id="info-heading"
              data-animate
              className={`relative pl-5 font-playfair text-2xl sm:text-[26px] font-bold text-neutral-800 mb-4 transition-all duration-700 ${
                isVisible('info-heading')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="absolute left-0 top-1 w-1 h-7 rounded-full bg-primary-400" />
              Informații de contact
            </h2>

            <p
              id="info-desc"
              data-animate
              className={`text-[17px] leading-[1.85] text-neutral-600 mb-8 transition-all duration-700 ${
                isVisible('info-desc')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              Ne poți contacta prin oricare dintre canalele de mai jos.
            </p>

            {/* Contact rows */}
            <div className="flex flex-col gap-3.5 mb-8">
              {[
                {
                  id: 'contact-email',
                  icon: <Mail size={22} strokeWidth={1.5} />,
                  iconStyle: 'bg-primary-50 border-2 border-primary-200 text-primary-500',
                  label: 'Email',
                  value: 'asociatia.haero@gmail.com',
                  href: 'mailto:asociatia.haero@gmail.com',
                },
                {
                  id: 'contact-phone',
                  icon: <Phone size={22} strokeWidth={1.5} />,
                  iconStyle: 'bg-accent-50 border-2 border-accent-200 text-accent-500',
                  label: 'Telefon',
                  value: '+40 746 252 817',
                  href: 'tel:+40746252817',
                },
                {
                  id: 'contact-location',
                  icon: <MapPin size={22} strokeWidth={1.5} />,
                  iconStyle: 'bg-secondary-50 border-2 border-secondary-200 text-secondary-400',
                  label: 'Sediu',
                  value: 'Târgu-Mureș, România',
                },
                {
                  id: 'contact-person',
                  icon: <User size={22} strokeWidth={1.5} />,
                  iconStyle: 'bg-primary-50 border-2 border-primary-200 text-primary-500',
                  label: 'Vicepreședinte',
                  value: 'Ana-Maria Stan',
                },
              ].map((item, index) => {
                const Tag = item.href ? 'a' : 'div';
                const linkProps = item.href
                  ? { href: item.href, target: item.href.startsWith('mailto') ? undefined : '_blank', rel: 'noopener noreferrer' }
                  : {};

                return (
                  <Tag
                    key={item.id}
                    id={item.id}
                    data-animate
                    {...linkProps}
                    className={`group flex items-center gap-5 p-6 bg-neutral-50 rounded-[20px] no-underline transition-all duration-500 hover:bg-neutral-100 ${
                      item.href ? 'hover:translate-x-1 cursor-pointer' : ''
                    } ${
                      isVisible(item.id)
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className={`w-[52px] h-[52px] rounded-[14px] flex items-center justify-center flex-shrink-0 ${item.iconStyle}`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[17px] font-extrabold text-neutral-800 mb-1">{item.label}</h3>
                      <p className="text-[15px] leading-relaxed text-neutral-500 m-0">{item.value}</p>
                    </div>
                    {item.href && (
                      <ArrowRight
                        size={18}
                        className="text-primary-500 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0"
                      />
                    )}
                  </Tag>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Contact Form ── */}
        <section className="bg-white pb-14">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6">
            <h2
              id="form-heading"
              data-animate
              className={`relative pl-5 font-playfair text-2xl sm:text-[26px] font-bold text-neutral-800 mb-3 transition-all duration-700 ${
                isVisible('form-heading')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="absolute left-0 top-1 w-1 h-7 rounded-full bg-primary-400" />
              Trimite-ne un mesaj
            </h2>

            <p
              id="form-desc"
              data-animate
              className={`text-[16px] leading-[1.75] text-neutral-600 mb-7 transition-all duration-700 ${
                isVisible('form-desc')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              Completează formularul de mai jos și îți vom răspunde cât mai curând posibil.
            </p>

            <div
              id="form-card"
              data-animate
              className={`bg-neutral-50 rounded-[20px] p-8 sm:p-9 transition-all duration-700 ${
                isVisible('form-card')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              {submitStatus === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-2">Mesaj trimis cu succes!</h3>
                  <p className="text-neutral-500">Îți mulțumim pentru mesaj. Te vom contacta cât mai curând posibil.</p>
                </div>
              ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-1">
                      Nume <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                      placeholder="Numele tău"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-1">
                      Email <span className="text-error">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                      placeholder="email@exemplu.ro"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="locality" className="block text-sm font-semibold text-neutral-700 mb-1">
                      Localitate <span className="text-xs text-neutral-400 font-normal">(opțional)</span>
                    </label>
                    <input
                      type="text"
                      id="locality"
                      name="locality"
                      value={formData.locality}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                      placeholder="Oraș sau sat"
                    />
                    <p className="text-xs text-neutral-400 mt-1">Nu este nevoie de adresa exactă.</p>
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-sm font-semibold text-neutral-700 mb-1">
                      Mă descrie cel mai bine
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                    >
                      <option value="" disabled>Selectează o opțiune</option>
                      <option value="pacient-diagnosticat">Pacient diagnosticat</option>
                      <option value="persoana-cu-simptome">Persoană cu simptome, nediagnosticată</option>
                      <option value="medic">Medic</option>
                      <option value="reprezentant-pharma">Reprezentant pharma</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-neutral-700 mb-1">
                    Subiect <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                    placeholder="Subiectul mesajului"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-1">
                    Mesaj <span className="text-error">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none resize-none bg-white text-neutral-800 transition-shadow"
                    placeholder="Scrie mesajul tău aici..."
                  />
                </div>

                {submitStatus === 'error' && (
                  <p className="text-error text-sm">A apărut o eroare. Te rugăm să încerci din nou.</p>
                )}

                <Button type="submit" variant="primary" size="lg" fullWidth className="mt-2" disabled={submitStatus === 'loading'}>
                  {submitStatus === 'loading' ? 'Se trimite...' : 'Trimite Mesajul'}
                </Button>
              </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
