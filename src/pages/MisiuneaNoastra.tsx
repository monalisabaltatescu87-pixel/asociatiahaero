import React from 'react';

const MisiuneaNoastra: React.FC = () => {
  const actions = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: 'Milităm pentru dreptul fiecărui pacient la tratament personalizat, administrat la timp — pentru că nimeni nu ar trebui să aștepte în criză.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      text: 'Informăm medicii și publicul larg despre simptomele, diagnosticul și opțiunile terapeutice ale HAE — ca boala să fie recunoscută mai repede.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      text: 'Oferim suport emoțional și psihologic pacienților și familiilor lor — pentru că o boală rară nu trebuie să însemne o luptă solitară.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      text: 'Reprezentăm interesele pacienților în fața autorităților și instituțiilor de sănătate — vocea comunității HAE trebuie auzită acolo unde se iau deciziile.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      text: 'Facilităm simplificarea procedurilor administrative, inclusiv obținerea pensiei medicale — birocrația nu ar trebui să fie o altă boală de care suferim.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      text: 'Construim parteneriate cu organizații naționale și internaționale — împreună suntem mai puternici.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      text: 'Organizăm întâlniri de pacienți, workshop-uri și programe educative — pentru că atunci când ne cunoaștem și ne susținem, totul devine mai ușor.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-haero-yellow-50 via-haero-cream to-haero-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-haero-dark mb-4">
              Misiunea <span className="text-haero-yellow-600">Noastră</span>
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-haero-gray-700 text-lg leading-relaxed">
              Asociația HAERO există pentru a proteja și promova drepturile pacienților cu angioedem
              ereditar (HAE) din România. Credem că fiecare persoană afectată merită acces egal, rapid
              și fără discriminare la diagnostic, tratament și suport de calitate.
            </p>
            <p className="text-haero-gray-500 text-lg leading-relaxed">
              Prin advocacy activ, campanii de informare și o comunitate în care nimeni nu se simte singur,
              luptăm pentru o viață demnă și împlinită a pacienților cu HAE — indiferent de vârstă,
              localizare geografică sau condiție socio-economică.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-haero-dark mb-4">
              Ce facem <span className="text-haero-yellow-600">concret</span>
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {actions.map((action, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white rounded-2xl shadow-raised hover:shadow-lifted transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-haero-yellow-100 rounded-lg flex items-center justify-center text-haero-yellow-600">
                  {action.icon}
                </div>
                <p className="text-haero-gray-500 leading-relaxed">{action.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-haero-dark mb-4">
            De ce <span className="text-haero-yellow-600">contează</span>
          </h2>
          <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto mb-8"></div>
          <div className="space-y-6">
            <p className="text-haero-gray-700 text-lg leading-relaxed">
              Angioedemul ereditar este o boală rară, adesea nediagnosticată sau diagnosticată
              cu întârziere de ani de zile. Crizele pot fi severe, cu risc vital, iar lipsa
              accesului rapid la tratament poate costa vieți.
            </p>
            <p className="text-haero-yellow-700 text-xl font-semibold leading-relaxed">
              HAERO este vocea care spune: fiecare pacient contează, fiecare criză prevenită este o victorie.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MisiuneaNoastra;
