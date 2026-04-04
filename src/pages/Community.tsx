import SEO from '../components/SEO';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui';

const WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbzMo8ooVZKpcl52LhVKbKCFtokcMJrwrX9DxcJzprTnRYMFuINaWvPa--oy2Yh7ed8/exec';

const Community: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    locality: '',
    category: '',
    acceptMember: false,
    acceptPrivacy: false,
    acceptStatut: false,
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          locality: formData.locality,
          category: formData.category,
          acceptMember: formData.acceptMember,
          acceptPrivacy: formData.acceptPrivacy,
          acceptStatut: formData.acceptStatut,
        }),
      });
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        locality: '',
        category: '',
        acceptMember: false,
        acceptPrivacy: false,
        acceptStatut: false,
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
        title="Comunitate"
        description="Alătură-te comunității HAERO. Conectează-te cu alți pacienți, aparținători și medici implicați în lupta cu angioedemul ereditar."
        path="/comunitate"
      />

      <div>
        {/* ── Hero ── */}
        <section className="relative pt-28 pb-20 text-center overflow-hidden bg-gradient-to-b from-white to-neutral-50">
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(228,181,68,0.06)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[58px] font-bold leading-[1.1] text-neutral-800 mb-6 tracking-tight">
              Comunitate
            </h1>

            <p className="text-lg leading-[1.8] text-neutral-500 max-w-[560px] mx-auto">
              În această călătorie, responsabilitatea poate fi egal împărțită între toți cei care doresc să se implice. Povestea ta merită să fie ascultată.
            </p>
          </div>
        </section>

        {/* ── Social Section ── */}
        <section className="bg-white">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 pt-12 pb-6">
            <h2
              id="social-heading"
              data-animate
              className={`relative pl-5 font-playfair text-2xl sm:text-[26px] font-bold text-neutral-800 mb-4 transition-all duration-700 ${
                isVisible('social-heading')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="absolute left-0 top-1 w-1 h-7 rounded-full bg-primary-400" />
              Unde ne găsești
            </h2>

            <p
              id="social-desc"
              data-animate
              className={`text-[17px] leading-[1.85] text-neutral-600 mb-8 transition-all duration-700 ${
                isVisible('social-desc')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              Am creat spații online în care pacienții și aparținătorii pot comunica deschis, pot pune întrebări și pot primi răspunsuri de la persoane cu experiențe asemănătoare.
            </p>

            {/* Social rows */}
            <div className="flex flex-col gap-3.5 mb-8">
              <a
                id="social-fb"
                data-animate
                href="https://www.facebook.com/angioedemereditarromania"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-5 p-6 bg-neutral-50 rounded-[20px] no-underline transition-all duration-500 hover:bg-neutral-100 hover:translate-x-1 ${
                  isVisible('social-fb')
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8'
                }`}
              >
                <div className="w-[52px] h-[52px] rounded-[14px] bg-primary-50 border-2 border-primary-200 flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[17px] font-extrabold text-neutral-800 mb-1">Facebook</h3>
                  <p className="text-[15px] leading-relaxed text-neutral-500 m-0">
                    Comunitatea noastră deschisă pentru pacienți, aparținători și medici.
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className="text-primary-500 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0"
                />
              </a>

              <a
                id="social-ig"
                data-animate
                href="https://www.instagram.com/asociatiahaero"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-5 p-6 bg-neutral-50 rounded-[20px] no-underline transition-all duration-500 delay-100 hover:bg-neutral-100 hover:translate-x-1 ${
                  isVisible('social-ig')
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8'
                }`}
              >
                <div className="w-[52px] h-[52px] rounded-[14px] bg-secondary-50 border-2 border-secondary-200 flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-secondary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[17px] font-extrabold text-neutral-800 mb-1">Instagram</h3>
                  <p className="text-[15px] leading-relaxed text-neutral-500 m-0">
                    Noutăți, povești și informații utile despre angioedemul ereditar.
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className="text-primary-500 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0"
                />
              </a>
            </div>
          </div>
        </section>

        {/* ── Membership Form ── */}
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
              Devino Membru
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
              Asociația HAERO nu solicită donații și nu percepe cotizații pentru calitatea de membru. Înscrierea ta ca membru ne ajută să demonstrăm că există o comunitate reală de pacienți, aparținători și profesioniști care susțin drepturile persoanelor cu angioedem ereditar. Cu cât suntem mai mulți, cu atât vocea noastră este mai puternică în fața autorităților și a factorilor de decizie din sistemul de sănătate.
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
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4">
                    <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Cererea ta a fost trimisă!</h3>
                  <p className="text-neutral-600 text-sm">Mulțumim că te-ai alăturat comunității HAERO.</p>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-4 text-sm text-primary-500 underline hover:text-primary-600"
                  >
                    Trimite o altă cerere
                  </button>
                </div>
              ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="member-name" className="block text-sm font-semibold text-neutral-700 mb-1">
                      Nume și prenume <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="member-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                      placeholder="Numele tău complet"
                    />
                  </div>
                  <div>
                    <label htmlFor="member-email" className="block text-sm font-semibold text-neutral-700 mb-1">
                      Adresa de email <span className="text-error">*</span>
                    </label>
                    <input
                      type="email"
                      id="member-email"
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
                    <label htmlFor="member-phone" className="block text-sm font-semibold text-neutral-700 mb-1">
                      Număr de telefon <span className="text-xs text-neutral-400 font-normal">(opțional)</span>
                    </label>
                    <input
                      type="tel"
                      id="member-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                      placeholder="+40 7XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="member-locality" className="block text-sm font-semibold text-neutral-700 mb-1">
                      Localitate
                    </label>
                    <input
                      type="text"
                      id="member-locality"
                      name="locality"
                      value={formData.locality}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                      placeholder="Oraș sau sat"
                    />
                    <p className="text-xs text-neutral-400 mt-1">Nu este nevoie de adresa exactă, doar orașul sau satul.</p>
                  </div>
                </div>

                <div>
                  <label htmlFor="member-category" className="block text-sm font-semibold text-neutral-700 mb-1">
                    Mă descrie cel mai bine <span className="text-error">*</span>
                  </label>
                  <select
                    id="member-category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                  >
                    <option value="" disabled>Selectează o opțiune</option>
                    <option value="pacient-diagnosticat">Pacient diagnosticat</option>
                    <option value="persoana-cu-simptome">Persoană cu simptome, nediagnosticată</option>
                    <option value="medic">Medic</option>
                    <option value="reprezentant-pharma">Reprezentant pharma</option>
                  </select>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="accept-member"
                      name="acceptMember"
                      checked={formData.acceptMember}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-500 focus:ring-primary-400"
                    />
                    <label htmlFor="accept-member" className="text-sm text-neutral-600">
                      Accept să devin membru al Asociației HAERO. <span className="text-error">*</span>
                    </label>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="accept-privacy"
                      name="acceptPrivacy"
                      checked={formData.acceptPrivacy}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-500 focus:ring-primary-400"
                    />
                    <label htmlFor="accept-privacy" className="text-sm text-neutral-600">
                      Confirm că am citit și sunt de acord cu{' '}
                      <Link to="/politica-confidentialitate" className="text-primary-500 underline hover:text-primary-600">
                        Politica de Confidențialitate
                      </Link>. <span className="text-error">*</span>
                    </label>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="accept-statut"
                      name="acceptStatut"
                      checked={formData.acceptStatut}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-500 focus:ring-primary-400"
                    />
                    <label htmlFor="accept-statut" className="text-sm text-neutral-600">
                      Confirm că am citit{' '}
                      <Link to="/statutul-asociatiei" className="text-primary-500 underline hover:text-primary-600">
                        Statutul Asociației
                      </Link>. <span className="text-error">*</span>
                    </label>
                  </div>
                </div>

                {submitStatus === 'error' && (
                  <p className="text-sm text-error">A apărut o eroare. Te rugăm să încerci din nou.</p>
                )}

                <Button type="submit" variant="primary" size="lg" fullWidth className="mt-4" disabled={submitStatus === 'loading'}>
                  {submitStatus === 'loading' ? 'Se trimite...' : 'Trimite cererea de membru'}
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

export default Community;
