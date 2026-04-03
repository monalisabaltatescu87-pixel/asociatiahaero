import React from 'react';
import { SectionHeader, Card, IconBox } from './ui';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Contact"
          title="Contactează-ne"
          dividerColor="accent"
          description="Dacă crezi că te identifici ca având simptomele specifice AEE sau ești medic și ai nevoie de informații mai exacte, te invităm să ne contactezi."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                label: 'Email',
                value: 'asociatia.haero@gmail.com',
                color: 'primary' as const,
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                label: 'Telefon',
                value: '+40 (746) 022 532',
                color: 'accent' as const,
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                label: 'Sediu',
                value: 'Târgu-Mureș, România',
                color: 'secondary' as const,
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                label: 'Președinte',
                value: 'Mircea Stan',
                color: 'primary' as const,
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <IconBox variant={item.color}>
                  {item.icon}
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-0.5 text-sm">{item.label}</h3>
                  <p className="text-neutral-500">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <Card variant="bordered" hover={false} className="p-8">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                    Nume
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white transition-shadow text-neutral-800"
                    placeholder="Numele tău"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white transition-shadow text-neutral-800"
                    placeholder="email@exemplu.ro"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                  Subiect
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white transition-shadow text-neutral-800"
                  placeholder="Subiectul mesajului"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none resize-none bg-white transition-shadow text-neutral-800"
                  placeholder="Scrie mesajul tău aici..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-400 text-neutral-800 py-3.5 rounded-full font-bold hover:bg-primary-500 transition-all duration-300 shadow-raised hover:shadow-glow-primary text-lg"
              >
                Trimite Mesajul
              </button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
