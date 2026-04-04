import SEO from '../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Frown,
  Zap,
  AlertTriangle,
  Heart,
  Thermometer,
  Activity,

  ShieldCheck,
  Bug,
} from 'lucide-react';
import { PageHero, SectionHeader, Callout } from '../components/ui';

const HAETriggers: React.FC = () => {
  return (
    <>
      <SEO
        title="Factori Declanșatori AEE"
        description="Descoperă factorii care pot declanșa crizele de angioedem ereditar: stres, traume, infecții, fluctuații hormonale și alții."
        path="/care-sunt-declansatorii-aee"
      />
      <div className="bg-white">
        {/* Hero */}
        <PageHero
          variant="reader"
          title="Factori declanșatori"
          description="Studiile sugerează că 50% dintre persoanele cu AEE raportează primele simptome până la vârsta de 10 ani, iar majoritatea oamenilor au experimentat simptome/primul atac înaintea vârstei de 18 ani."
          backLink="/ce-este-aee"
          backLabel="Despre AEE"
        />

        {/* Intro paragraph */}
        <section className="pt-10 pb-6">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[17px] leading-[1.85] text-neutral-600">
              Chiar dacă sunt excepții, simptomele AEE sunt de regulă ușoare la
              copiii mici, dar episoade au fost raportate chiar și la copii de un
              an. Frecvența atacurilor poate să crească la pubertate și
              adolescență.
            </p>
          </div>
        </section>

        {/* Common Triggers */}
        <section className="pt-12 pb-6">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              reader={true}
              label="Declanșatori comuni"
              title="Factorii declanșatori comuni ai AEE"
            />

            <div className="flex flex-col gap-4">
              {/* Anxietate */}
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0 bg-secondary-50 border border-secondary-200">
                  <Frown size={22} className="text-secondary-500" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-800 text-lg mb-1">
                    Anxietate
                  </h3>
                  <p className="text-[17px] leading-[1.85] text-neutral-600">
                    Anxietatea este un factor declanșator frecvent raportat de
                    persoanele cu AEE, putând contribui la apariția sau agravarea
                    atacurilor.
                  </p>
                </div>
              </div>

              {/* Stres */}
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0 bg-accent-50 border border-accent-200">
                  <Zap size={22} className="text-accent-500" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-800 text-lg mb-1">
                    Stres
                  </h3>
                  <p className="text-[17px] leading-[1.85] text-neutral-600">
                    Stresul emoțional și fizic este unul dintre cei mai comuni
                    factori care pot declanșa episoade de angioedem ereditar.
                  </p>
                </div>
              </div>

              {/* Traumatisme minore */}
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0 bg-primary-50 border border-primary-200">
                  <AlertTriangle size={22} className="text-primary-500" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-800 text-lg mb-1">
                    Traumatisme minore
                  </h3>
                  <p className="text-[17px] leading-[1.85] text-neutral-600">
                    Traumatismele minore, inclusiv lovituri ușoare sau presiunea
                    mecanică, pot declanșa episoade de umflare în zona afectată.
                  </p>
                </div>
              </div>

              {/* Intervenții chirurgicale */}
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0 bg-secondary-50 border border-secondary-200">
                  <Heart size={22} className="text-secondary-500" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-800 text-lg mb-1">
                    Intervenții chirurgicale
                  </h3>
                  <p className="text-[17px] leading-[1.85] text-neutral-600">
                    Intervențiile chirurgicale reprezintă un factor declanșator
                    important, necesitând atenție specială și consultarea
                    prealabilă a medicului specialist.
                  </p>
                </div>
              </div>

              {/* Boli și infecții */}
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0 bg-accent-50 border border-accent-200">
                  <Bug size={22} className="text-accent-500" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-800 text-lg mb-1">
                    Boli și infecții
                  </h3>
                  <p className="text-[17px] leading-[1.85] text-neutral-600">
                    Bolile precum răceala, gripa și alte infecții virale pot
                    declanșa sau agrava episoadele de angioedem ereditar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Reported Triggers */}
        <section className="pt-12 pb-6">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              reader={true}
              title="Alți factori raportați"
            />

            <div className="flex flex-col gap-4">
              {/* Expunerea la frig */}
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0 bg-primary-50 border border-primary-200">
                  <Thermometer size={22} className="text-primary-500" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-800 text-lg mb-1">
                    Expunerea la frig
                  </h3>
                  <p className="text-[17px] leading-[1.85] text-neutral-600">
                    Temperaturile scăzute și expunerea la frig pot acționa ca
                    factori declanșatori ai atacurilor de AEE.
                  </p>
                </div>
              </div>

              {/* Traumatisme mecanice */}
              <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-5 hover:bg-neutral-100 transition-colors">
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0 bg-secondary-50 border border-secondary-200">
                  <Activity size={22} className="text-secondary-500" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-800 text-lg mb-1">
                    Traumatisme mecanice
                  </h3>
                  <p className="text-[17px] leading-[1.85] text-neutral-600">
                    Activități care provoacă traumatisme mecanice, cum ar fi
                    grădinăritul, pot contribui la declanșarea episoadelor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hormones */}
        <section className="py-8">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              reader={true}
              title="Hormoni"
            />

            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-4">
              La femei, menstruația și sarcina pot afecta simptomele AEE.
              Unele femei raportează o creștere a numărului de atacuri în
              timpul perioadelor menstruale. Studiile relevă variații
              considerabile în frecvența atacurilor la femeile însărcinate.
            </p>
            <p className="text-[17px] leading-[1.85] text-neutral-600 mb-8">
              Utilizarea medicamentelor derivate din estrogen (contraceptive
              orale, terapie de substituție hormonală) este asociată cu
              creșterea frecvenței și severității atacurilor. Persoanele cu
              AEE ar trebui să consulte medicul curant AEE cu privire la
              opțiuni alternative de contracepție fără estrogen.
            </p>

            <Callout
              variant="warning"
              title="Inhibitorii ECA"
              icon={<AlertTriangle size={20} />}
            >
              <p>
                Utilizați frecvent pentru tratarea hipertensiunii arteriale,
                inhibitorii ECA sunt cunoscuți pentru creșterea frecvenței și
                severității atacurilor de AEE și ar trebui evitați.
              </p>
            </Callout>

            <Callout
              variant="warning"
              title="Proceduri dentare"
              icon={<ShieldCheck size={20} />}
              className="mt-4"
            >
              <p>
                Traumatismele bucale cauzate de procedurile dentare pot declanșa
                umflarea orală și pot crește riscul de umflare a gâtului/căilor
                respiratorii. Consultați medicul curant AEE înainte de a efectua
                proceduri dentare.
              </p>
            </Callout>
          </div>
        </section>

        {/* Navigation */}
        <section className="pt-12 pb-10">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between">
              <Link
                to="/ce-cauzeaza-aee"
                className="text-primary-500 font-semibold hover:text-primary-600 transition-colors"
              >
                ← Tipurile și cauzele AEE
              </Link>
              <Link
                to="/diagnosticarea-aee"
                className="text-primary-500 font-semibold hover:text-primary-600 transition-colors"
              >
                Diagnosticarea AEE →
              </Link>
            </div>
          </div>
        </section>

        {/* Source Attribution */}
        <section className="py-8">
          <div className="max-w-[660px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-neutral-500 text-sm">
              Informații bazate pe date de la{' '}
              <a
                href="https://haei.org/what-is-hae/attack-triggers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 underline"
              >
                HAE International (HAEi)
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HAETriggers;
