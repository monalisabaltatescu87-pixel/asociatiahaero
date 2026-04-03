import React from 'react';
import { Mail, Phone, MapPin, User } from 'lucide-react';
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
                  <Mail size={24} strokeWidth={1.5} />
                ),
                label: 'Email',
                value: 'asociatia.haero@gmail.com',
                color: 'primary' as const,
              },
              {
                icon: (
                  <Phone size={24} strokeWidth={1.5} />
                ),
                label: 'Telefon',
                value: '+40 (746) 022 532',
                color: 'accent' as const,
              },
              {
                icon: (
                  <MapPin size={24} strokeWidth={1.5} />
                ),
                label: 'Sediu',
                value: 'Târgu-Mureș, România',
                color: 'secondary' as const,
              },
              {
                icon: (
                  <User size={24} strokeWidth={1.5} />
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
