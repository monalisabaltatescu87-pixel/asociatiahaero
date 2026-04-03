import SEO from '../components/SEO';
import React from 'react';
import { PageHero, Card, IconBox, Button } from '../components/ui';
import { Mail, Phone, MapPin, User } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <><SEO title="Contact" description="Contactează Asociația HAERO pentru întrebări, informații sau colaborări. Email, telefon și formular de contact." path="/contact" />
      <PageHero
        variant="accent"
        title="Contactează-ne"
        description="Dacă crezi că te identifici ca având simptomele specifice AEE sau ești medic și ai nevoie de informații mai exacte, te invităm să ne contactezi."
      />

      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <IconBox variant="accent">
                  <Mail size={24} strokeWidth={1.5} />
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-1">Email</h3>
                  <p className="text-neutral-500">asociatia.haero@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <IconBox variant="primary">
                  <Phone size={24} strokeWidth={1.5} />
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-1">Telefon</h3>
                  <p className="text-neutral-500">+40 746 252 817</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <IconBox variant="secondary">
                  <MapPin size={24} strokeWidth={1.5} />
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-1">Sediu</h3>
                  <p className="text-neutral-500">Târgu-Mureș, România</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <IconBox variant="accent">
                  <User size={24} strokeWidth={1.5} />
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-1">Vicepreședinte</h3>
                  <p className="text-neutral-500">Ana Maria Bălțătescu</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card variant="bordered" hover={false} className="p-8">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-1">
                      Nume
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                      placeholder="Numele tău"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                      placeholder="email@exemplu.ro"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="locality" className="block text-sm font-semibold text-neutral-700 mb-1">
                      Localitate
                    </label>
                    <input
                      type="text"
                      id="locality"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                      placeholder="Oraș sau sat"
                    />
                    <p className="text-xs text-neutral-500 mt-1">Nu este nevoie de adresa exactă, doar orașul sau satul.</p>
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-sm font-semibold text-neutral-700 mb-1">
                      Mă descrie cel mai bine
                    </label>
                    <select
                      id="category"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                      defaultValue=""
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
                    Subiect
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none bg-white text-neutral-800 transition-shadow"
                    placeholder="Subiectul mesajului"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-1">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none resize-none bg-white text-neutral-800 transition-shadow"
                    placeholder="Scrie mesajul tău aici..."
                  ></textarea>
                </div>
                <Button type="submit" variant="primary" size="lg" fullWidth>
                  Trimite Mesajul
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
  </>
  );
};

export default ContactPage;
