import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbzMo8ooVZKpcl52LhVKbKCFtokcMJrwrX9DxcJzprTnRYMFuINaWvPa--oy2Yh7ed8/exec';

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  phone: '',
  locality: '',
  category: '',
  acceptMember: false,
  acceptPrivacy: false,
  acceptStatut: false,
};

interface MembershipFormProps {
  isVisible: (id: string) => boolean;
}

const MembershipForm: React.FC<MembershipFormProps> = ({ isVisible }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );

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
        body: JSON.stringify(formData),
      });
      setSubmitStatus('success');
      setFormData(INITIAL_FORM_DATA);
    } catch (err) {
      console.error('Membership form submission failed:', err);
      setSubmitStatus('error');
    }
  };

  return (
    <section
      id="form-section"
      data-animate
      className={`transition-all duration-700 ${
        isVisible('form-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-[880px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6">
          Devino Membru
        </div>
        <div>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-neutral-800 tracking-tight mb-4">
            Înscrie-te în comunitate
          </h2>
          <p className="text-[0.95rem] leading-[1.85] text-neutral-600 mb-4 max-w-[620px]">
            Asociația HAERO nu solicită donații și nu percepe cotizații pentru calitatea de membru.
            Înscrierea ta ne ajută să demonstrăm că există o comunitate reală de pacienți, aparținători
            și profesioniști care susțin drepturile persoanelor cu angioedem ereditar. Cu cât suntem mai
            mulți, cu atât vocea noastră este mai puternică.
          </p>
        </div>

        <div className="mt-8">
          {submitStatus === 'success' ? (
            <div className="text-center py-12 border border-neutral-200 rounded-md">
              <h3 className="font-playfair text-xl font-bold text-neutral-800 mb-2">
                Cererea ta a fost trimisă!
              </h3>
              <p className="text-neutral-500 text-sm mb-4">
                Mulțumim că te-ai alăturat comunității HAERO.
              </p>
              <button
                type="button"
                onClick={() => setSubmitStatus('idle')}
                className="text-sm font-semibold text-neutral-600 hover:text-neutral-800 transition-colors"
              >
                <span className="border-b border-neutral-300 pb-px">Trimite o altă cerere</span>
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="member-name"
                  className="block text-sm font-semibold text-neutral-700 mb-1"
                >
                  Nume și prenume <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  id="member-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 outline-none bg-white text-neutral-800 transition-all"
                  placeholder="Numele tău complet"
                />
              </div>
              <div>
                <label
                  htmlFor="member-email"
                  className="block text-sm font-semibold text-neutral-700 mb-1"
                >
                  Adresa de email <span className="text-error">*</span>
                </label>
                <input
                  type="email"
                  id="member-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 outline-none bg-white text-neutral-800 transition-all"
                  placeholder="email@exemplu.ro"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="member-phone"
                    className="block text-sm font-semibold text-neutral-700 mb-1"
                  >
                    Telefon{' '}
                    <span className="text-xs text-neutral-400 font-normal">(opțional)</span>
                  </label>
                  <input
                    type="tel"
                    id="member-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 outline-none bg-white text-neutral-800 transition-all"
                    placeholder="+40 7XX XXX XXX"
                  />
                </div>
                <div>
                  <label
                    htmlFor="member-locality"
                    className="block text-sm font-semibold text-neutral-700 mb-1"
                  >
                    Localitate
                  </label>
                  <input
                    type="text"
                    id="member-locality"
                    name="locality"
                    value={formData.locality}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 outline-none bg-white text-neutral-800 transition-all"
                    placeholder="Oraș sau sat"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="member-category"
                  className="block text-sm font-semibold text-neutral-700 mb-1"
                >
                  Mă descrie cel mai bine <span className="text-error">*</span>
                </label>
                <select
                  id="member-category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 outline-none bg-white text-neutral-800 transition-all"
                >
                  <option value="" disabled>
                    Selectează o opțiune
                  </option>
                  <option value="pacient-diagnosticat">Pacient diagnosticat</option>
                  <option value="persoana-cu-simptome">Persoană cu simptome, nediagnosticată</option>
                  <option value="medic">Medic</option>
                  <option value="reprezentant-pharma">Reprezentant pharma</option>
                </select>
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="acceptMember"
                    checked={formData.acceptMember}
                    onChange={handleChange}
                    required
                    className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-primary-500 focus:ring-primary-400"
                  />
                  <span className="text-sm text-neutral-600">
                    Accept să devin membru al Asociației HAERO.{' '}
                    <span className="text-error">*</span>
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="acceptPrivacy"
                    checked={formData.acceptPrivacy}
                    onChange={handleChange}
                    required
                    className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-primary-500 focus:ring-primary-400"
                  />
                  <span className="text-sm text-neutral-600">
                    Confirm că am citit și sunt de acord cu{' '}
                    <Link
                      to="/politica-confidentialitate"
                      className="font-semibold text-neutral-800 underline underline-offset-2 hover:text-primary-500 transition-colors"
                    >
                      Politica de Confidențialitate
                    </Link>
                    . <span className="text-error">*</span>
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="acceptStatut"
                    checked={formData.acceptStatut}
                    onChange={handleChange}
                    required
                    className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-primary-500 focus:ring-primary-400"
                  />
                  <span className="text-sm text-neutral-600">
                    Confirm că am citit{' '}
                    <Link
                      to="/statutul-asociatiei"
                      className="font-semibold text-neutral-800 underline underline-offset-2 hover:text-primary-500 transition-colors"
                    >
                      Statutul Asociației
                    </Link>
                    . <span className="text-error">*</span>
                  </span>
                </label>
              </div>

              {submitStatus === 'error' && (
                <p className="text-sm text-error">
                  A apărut o eroare. Te rugăm să încerci din nou.
                </p>
              )}

              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="w-full mt-2 px-7 py-3 bg-primary-400 text-neutral-800 font-bold text-sm rounded-md hover:bg-primary-500 transition-all duration-200 disabled:opacity-50"
              >
                {submitStatus === 'loading' ? 'Se trimite...' : 'Trimite cererea de membru'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default MembershipForm;
