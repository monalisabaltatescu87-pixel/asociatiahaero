import React, { useState } from 'react';

const WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbzrkk2UJX8EnnAdmZJBQsIj733WDz8Jb8t-Fm2jTYIub8H5dzQumLpOoRa4I9nu21lE9A/exec';

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  locality: '',
  category: '',
  subject: '',
  message: '',
};

interface ContactFormProps {
  isVisible: (id: string) => boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isVisible }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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
      setFormData(INITIAL_FORM_DATA);
    } catch (err) {
      console.error('Contact form submission failed:', err);
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
        <div>
          <div className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6">
            Trimite-ne un mesaj
          </div>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-neutral-800 tracking-tight mb-4">
            Suntem aici să ajutăm
          </h2>
          <p className="text-[0.95rem] leading-[1.85] text-neutral-600 mb-4 max-w-[620px]">
            Completează formularul și îți vom răspunde cât mai curând posibil. Fie că ești pacient,
            aparținător sau medic, nu ezita să ne scrii.
          </p>
        </div>

        <div className="mt-8">
          {submitStatus === 'success' ? (
            <div className="text-center py-12 border border-neutral-200 rounded-md">
              <h3 className="font-playfair text-xl font-bold text-neutral-800 mb-2">
                Mesaj trimis cu succes!
              </h3>
              <p className="text-neutral-500 text-sm">
                Îți mulțumim pentru mesaj. Te vom contacta cât mai curând posibil.
              </p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-neutral-700 mb-1"
                  >
                    Nume <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 outline-none bg-white text-neutral-800 transition-all"
                    placeholder="Numele tău"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-neutral-700 mb-1"
                  >
                    Email <span className="text-error">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 outline-none bg-white text-neutral-800 transition-all"
                    placeholder="email@exemplu.ro"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="locality"
                    className="block text-sm font-semibold text-neutral-700 mb-1"
                  >
                    Localitate{' '}
                    <span className="text-xs text-neutral-400 font-normal">(opțional)</span>
                  </label>
                  <input
                    type="text"
                    id="locality"
                    name="locality"
                    value={formData.locality}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 outline-none bg-white text-neutral-800 transition-all"
                    placeholder="Oraș sau sat"
                  />
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-semibold text-neutral-700 mb-1"
                  >
                    Mă descrie cel mai bine
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 outline-none bg-white text-neutral-800 transition-all"
                  >
                    <option value="" disabled>
                      Selectează o opțiune
                    </option>
                    <option value="pacient-diagnosticat">Pacient diagnosticat</option>
                    <option value="persoana-cu-simptome">
                      Persoană cu simptome, nediagnosticată
                    </option>
                    <option value="medic">Medic</option>
                    <option value="reprezentant-pharma">Reprezentant pharma</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-neutral-700 mb-1"
                >
                  Subiect <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 outline-none bg-white text-neutral-800 transition-all"
                  placeholder="Subiectul mesajului"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-neutral-700 mb-1"
                >
                  Mesaj <span className="text-error">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400 outline-none resize-none bg-white text-neutral-800 transition-all"
                  placeholder="Scrie mesajul tău aici..."
                />
              </div>

              {submitStatus === 'error' && (
                <p className="text-error text-sm">
                  A apărut o eroare. Te rugăm să încerci din nou.
                </p>
              )}

              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="w-full mt-2 px-7 py-3 bg-primary-400 text-neutral-800 font-bold text-sm rounded-md hover:bg-primary-500 transition-all duration-200 disabled:opacity-50"
              >
                {submitStatus === 'loading' ? 'Se trimite...' : 'Trimite Mesajul'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
