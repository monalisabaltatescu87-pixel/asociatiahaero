import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';
import { Frown, Zap, AlertTriangle, Heart, Thermometer, Activity, FlaskConical, ShieldCheck } from 'lucide-react';
import { PageHero, SectionHeader, Card, IconBox, Callout } from '../components/ui';

const HAETriggers: React.FC = () => {
  return (
    <><SEO title="Factori Declanșatori AEE" description="Descoperă factorii care pot declanșa crizele de angioedem ereditar: stres, traume, infecții, fluctuații hormonale și alții." path="/care-sunt-declansatorii-aee" /><div>
      {/* Hero Section */}
      <PageHero
        variant="primary"
        badge="Factori de risc"
        title="Factori"
        titleHighlight="declanșatori"
        description="Studiile sugerează că 50% dintre persoanele cu AEE raportează primele simptome până la vârsta de 10 ani, iar majoritatea oamenilor au experimentat simptome/primul atac înaintea vârstei de 18 ani."
        backLink="/ce-este-aee"
        backLabel="Înapoi la Ce este AEE"
      />

      {/* Additional intro text */}
      <section className="py-8 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-neutral-500 leading-relaxed text-center">
            Chiar dacă sunt excepții, simptomele AEE sunt de regulă ușoare la copiii mici, dar episoade au fost raportate chiar și la copii de un an. Frecvența atacurilor poate să crească la pubertate și adolescență.
          </p>
        </div>
      </section>

      {/* Common Triggers */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Declanșatori comuni"
            title="Factorii declanșatori"
            titleHighlight="comuni ai AEE"
            dividerColor="primary"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="accent-left" accentColor="primary" hover>
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <IconBox variant="primary" size="md">
                    <Frown size={24} />
                  </IconBox>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-2 text-lg">Anxietate</h3>
                    <p className="text-neutral-500 leading-relaxed">
                      Anxietatea este un factor declanșator frecvent raportat de persoanele cu AEE, putând contribui la apariția sau agravarea atacurilor.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="accent-left" accentColor="secondary" hover>
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <IconBox variant="secondary" size="md">
                    <Zap size={24} />
                  </IconBox>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-2 text-lg">Stres</h3>
                    <p className="text-neutral-500 leading-relaxed">
                      Stresul emoțional și fizic este unul dintre cei mai comuni factori care pot declanșa episoade de angioedem ereditar.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="accent-left" accentColor="accent" hover>
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <IconBox variant="accent" size="md">
                    <AlertTriangle size={24} />
                  </IconBox>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-2 text-lg">Traumatisme minore</h3>
                    <p className="text-neutral-500 leading-relaxed">
                      Traumatismele minore, inclusiv lovituri ușoare sau presiunea mecanică, pot declanșa episoade de umflare în zona afectată.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="accent-left" accentColor="primary" hover>
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <IconBox variant="primary" size="md">
                    <Heart size={24} />
                  </IconBox>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-2 text-lg">Intervenții chirurgicale</h3>
                    <p className="text-neutral-500 leading-relaxed">
                      Intervențiile chirurgicale reprezintă un factor declanșator important, necesitând atenție specială și consultarea prealabilă a medicului specialist.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="accent-left" accentColor="secondary" hover>
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <IconBox variant="secondary" size="md">
                    <AlertTriangle size={24} />
                  </IconBox>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-2 text-lg">Boli și infecții</h3>
                    <p className="text-neutral-500 leading-relaxed">
                      Bolile precum răceala, gripa și alte infecții virale pot declanșa sau agrava episoadele de angioedem ereditar.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Reported Triggers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Alți factori"
            titleHighlight="raportați"
            dividerColor="secondary"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card variant="accent-left" accentColor="accent" hover>
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <IconBox variant="accent" size="md">
                    <Thermometer size={24} />
                  </IconBox>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-2 text-lg">Expunerea la frig</h3>
                    <p className="text-neutral-500 leading-relaxed">
                      Temperaturile scăzute și expunerea la frig pot acționa ca factori declanșatori ai atacurilor de AEE.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="accent-left" accentColor="primary" hover>
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <IconBox variant="primary" size="md">
                    <Activity size={24} />
                  </IconBox>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-2 text-lg">Traumatisme mecanice</h3>
                    <p className="text-neutral-500 leading-relaxed">
                      Activități care provoacă traumatisme mecanice, cum ar fi grădinăritul, pot contribui la declanșarea episoadelor.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Hormones */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="accent-left" accentColor="secondary" hover={false}>
            <div className="p-8">
              <div className="flex items-start gap-4">
                <IconBox variant="secondary" size="md">
                  <FlaskConical size={24} />
                </IconBox>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-3 text-xl">Hormoni</h3>
                  <p className="text-neutral-500 leading-relaxed mb-4">
                    La femei, menstruația și sarcina pot afecta simptomele AEE. Unele femei raportează o creștere a numărului de atacuri în timpul perioadelor menstruale. Studiile relevă variații considerabile în frecvența atacurilor la femeile însărcinate.
                  </p>
                  <p className="text-neutral-500 leading-relaxed">
                    Utilizarea medicamentelor derivate din estrogen (contraceptive orale, terapie de substituție hormonală) este asociată cu creșterea frecvenței și severității atacurilor. Persoanele cu AEE ar trebui să consulte medicul curant AEE cu privire la opțiuni alternative de contracepție fără estrogen.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ACE Inhibitors */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Callout
            variant="error"
            title="Inhibitorii ECA"
            icon={<AlertTriangle size={20} />}
          >
            <p>
              Utilizați frecvent pentru tratarea hipertensiunii arteriale, inhibitorii ECA sunt cunoscuți pentru creșterea frecvenței și severității atacurilor de AEE și ar trebui evitați.
            </p>
          </Callout>
        </div>
      </section>

      {/* Dental Procedures */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Callout
            variant="warning"
            title="Proceduri dentare"
            icon={<ShieldCheck size={20} />}
          >
            <p>
              Traumatismele bucale cauzate de procedurile dentare pot declanșa umflarea orală și pot crește riscul de umflare a gâtului/căilor respiratorii. Consultați medicul curant AEE înainte de a efectua proceduri dentare.
            </p>
          </Callout>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-white section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/ce-este-aee" className="text-primary-500 font-semibold hover:text-primary-600 transition-colors">
              ← Ce este AEE?
            </Link>
            <Link to="/ce-cauzeaza-aee" className="text-primary-500 font-semibold hover:text-primary-600 transition-colors sm:text-right">
              Ce cauzează AEE? →
            </Link>
          </div>
        </div>
      </section>

      {/* Source Attribution */}
      <section className="py-8 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-500 text-sm">
            Informații bazate pe date de la{' '}
            <a href="https://haei.org/what-is-hae/attack-triggers/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">
              HAE International (HAEi)
            </a>.
          </p>
        </div>
      </section>
    </div>
  </>
  );
};

export default HAETriggers;
