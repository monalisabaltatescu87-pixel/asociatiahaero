import React from 'react';
import { Link } from 'react-router-dom';

const CeEsteAEE: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-haero-yellow-50 via-haero-cream to-haero-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-haero-dark mb-4">
              Care sunt <span className="text-haero-yellow-600">simptomele AEE</span>?
            </h1>
            <div className="w-20 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-haero-gray-500 max-w-3xl mx-auto leading-relaxed">
              Angioedermul Ereditar se manifestă prin episoade recurente de umflături (edem)
              în diferite părți ale corpului, care pot varia ca severitate și localizare.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-haero-dark mb-6">
                Cum se manifestă <span className="text-haero-yellow-600">AEE</span>?
              </h2>
              <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
                <strong>Angioedermul Ereditar (AEE)</strong> este o boală genetică rară,
                cu potențial letal, transmisă autozomal dominant — sunt 50% șanse ca
                părintele purtător să transmită boala copiilor — care se manifestă prin
                episoade recurente de angioedem localizat în diverse regiuni anatomice.
              </p>
              <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
                Denumirea de „ereditar" se datorează faptului că mutația genetică care
                duce la apariția bolii este transmisă din generație în generație. Totuși,
                25% din cazuri sunt reprezentate de pacienți care au avut o mutație spontană
                a genei inhibitorului C1 la concepție — absența istoricului familial nu
                exclude diagnosticul.
              </p>
              <p className="text-haero-gray-700 text-lg leading-relaxed">
                Incidența este de <strong>1 din 10.000 până la 1 din 50.000</strong> de
                persoane. Cel mai frecvent, primele episoade apar în copilărie sau
                adolescență și continuă să se manifeste cu o frecvență variabilă pe
                parcursul întregii vieți.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-raised border-l-4 border-haero-red">
                <h3 className="font-bold text-haero-dark mb-3 text-lg">Simptome la nivelul extremităților</h3>
                <p className="text-haero-gray-500 leading-relaxed">
                  Umflături dureroase ale mâinilor, picioarelor și regiunii genitale. Aceste
                  episoade pot dura între 2-5 zile fără tratament și pot limita semnificativ
                  activitățile zilnice ale pacientului.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-raised border-l-4 border-haero-yellow">
                <h3 className="font-bold text-haero-dark mb-3 text-lg">Simptome la nivelul feței și gâtului</h3>
                <p className="text-haero-gray-500 leading-relaxed">
                  Umflături ale buzelor, pleoapelor, limbii și laringelui. <strong>Edemul
                  laringian este forma cea mai gravă</strong> datorită posibilei evoluții
                  spre asfixie și constituie o urgență medicală.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-raised border-l-4 border-haero-yellow-600">
                <h3 className="font-bold text-haero-dark mb-3 text-lg">Simptome abdominale</h3>
                <p className="text-haero-gray-500 leading-relaxed">
                  Colică abdominală severă însoțită de greață, vărsături, diaree și dureri
                  intense. Atacurile abdominale pot fi confundate cu alte patologii și pot
                  duce la intervenții chirurgicale inutile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-haero-dark mb-4">
              Importanța <span className="text-haero-yellow-600">diagnosticului</span>
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-haero-gray-700 text-lg mb-6 leading-relaxed">
              Certitudinea diagnosticului vine adesea după ani în care vizitele la medic
              au fost nenumărate. Atacurile abdominale pot fi confundate cu alte patologii
              și pot duce la intervenții chirurgicale inutile. Este important să informați
              medicul despre istoricul familial.
            </p>
            <p className="text-haero-gray-700 text-lg leading-relaxed">
              Diagnosticul corect se bazează pe analize de sânge specifice care măsoară
              nivelul și funcția inhibitorului C1 esterază, precum și nivelul componentei
              C4 a complementului. Un diagnostic precoce poate salva vieți.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-navigation Cards */}
      <section className="py-16 bg-haero-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-haero-dark mb-4">
              Află <span className="text-haero-yellow-600">mai multe</span>
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/care-sunt-declansatorii-aee" className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 block">
              <h3 className="font-bold text-haero-dark mb-3 text-lg">Factori declanșatori</h3>
              <p className="text-haero-gray-500 text-sm leading-relaxed">
                Descoperă care sunt factorii care pot declanșa un episod de angioedem ereditar.
              </p>
              <span className="text-haero-yellow-600 font-semibold text-sm mt-4 inline-block">Citește mai mult →</span>
            </Link>
            <Link to="/ce-cauzeaza-aee" className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow-600 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 block">
              <h3 className="font-bold text-haero-dark mb-3 text-lg">Principalele cauze</h3>
              <p className="text-haero-gray-500 text-sm leading-relaxed">
                Înțelege mecanismele genetice și biologice care stau la baza acestei boli rare.
              </p>
              <span className="text-haero-yellow-600 font-semibold text-sm mt-4 inline-block">Citește mai mult →</span>
            </Link>
            <Link to="/cum-tratam-aee" className="bg-white rounded-2xl p-8 shadow-raised border-t-4 border-haero-yellow-700 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 block">
              <h3 className="font-bold text-haero-dark mb-3 text-lg">Tratamente disponibile</h3>
              <p className="text-haero-gray-500 text-sm leading-relaxed">
                Află despre tratamentele moderne disponibile pentru managementul AEE.
              </p>
              <span className="text-haero-yellow-600 font-semibold text-sm mt-4 inline-block">Citește mai mult →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CeEsteAEE;
