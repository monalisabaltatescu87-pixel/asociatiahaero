import React from 'react';

const MisiuneaNoastra: React.FC = () => {
  const goals = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Calitatea Vieții',
      description: 'Scopul nostru primordial este de a îmbunătăți calitatea vieții pacienților, atât prin facilitarea îngrijirilor medicale de calitate, cât și prin diminuarea impactului psihosocial pe care această boală rară îl produce.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Acces la Tratament',
      description: 'Vrem să reușim ca fiecare pacient cu angioedem ereditar din România să beneficieze de tratament individualizat. Militam pentru accesul la tratament specific și pentru introducerea de protocoale terapeutice moderne.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Dialog Deschis',
      description: 'Rămânem aproape de comunitate, inițiem și menținem un dialog deschis între pacienți și medici, informăm și întreprindem acțiuni care aduc beneficii celor diagnosticați cu angioedem ereditar.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Colaborare cu HAEi',
      description: 'Adunăm pentru pacienți știrile relevante din domeniu, noutățile legate de tratament și inițiativele Asociației internaționale de angioedem ereditar (HAEi) pentru a ține comunitatea informată.',
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-haero-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-haero-dark mb-4">
              Misiunea <span className="text-haero-yellow-600">Noastră</span>
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-haero-gray-500 max-w-3xl mx-auto text-lg">
              Ideea înființării Asociației a venit ca urmare a faptului că fiecare pacient
              cu angioedem ereditar are nevoie să se simtă înțeles, acceptat și motivat să
              facă față acestei boli care reprezintă o continuă provocare.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white rounded-2xl shadow-raised hover:shadow-lifted transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-haero-yellow-100 rounded-lg flex items-center justify-center text-haero-yellow-600">
                  {goal.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-haero-dark mb-2">{goal.title}</h3>
                  <p className="text-haero-gray-500">{goal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MisiuneaNoastra;
