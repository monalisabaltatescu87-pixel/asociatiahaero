import React from 'react';

interface LeadershipProps {
  isVisible: (id: string) => boolean;
}

interface Member {
  id: string;
  name: string;
  role: string;
  labelColor: string;
  photo: string;
  story: string[];
  reverse: boolean;
}

const members: Member[] = [
  {
    id: 'leader-ana-maria',
    name: 'Ana Maria Stan',
    role: 'Vicepreședinte',
    labelColor: 'text-accent-400',
    photo: '/ana-maria-stan.jpg',
    story: [
      'Primele atacuri de Angioedem Ereditar au apărut încă din copilărie. A fost o perioadă plină de teamă și nesiguranță — nu știam când va veni următorul atac și simțeam că nu pot controla boala așa cum mi-aș fi dorit.',
      'Odată cu apariția tratamentelor moderne, viața mea s-a schimbat radical. Am început să privesc fiecare zi cu mai multă încredere și am înțeles că pot face față provocărilor, indiferent cât de mari par.',
      'Astăzi sunt medic cardiolog, iar experiența personală cu AEE m-a învățat cât de important este un diagnostic corect și un tratament potrivit. Prin tot ceea ce fac, îmi doresc să le ofer și altora speranța și siguranța pe care eu le-am regăsit, iar asociația HAERO își propune să crească conștientizarea bolii și să sprijine medicii pentru un diagnostic mai rapid, astfel încât pacienții să primească ajutorul de care au nevoie cât mai devreme.',
    ],
    reverse: false,
  },
  {
    id: 'leader-monalisa',
    name: 'Monalisa Bălțătescu',
    role: 'Președinte',
    labelColor: 'text-primary-400',
    photo: '/monalisa-baltatescu.jpg',
    story: [
      'După multe diagnostice greșite — gastrită, pancreatită — momentul în care am aflat diagnosticul corect a fost ca o adevărată gură de aer proaspăt. În sfârșit am putut să tratez corect atacurile de Angioedem Ereditar (AEE), iar teama constantă de un atac imprevizibil a început să se diminueze.',
      'La început, nu mi-a fost ușor să vorbesc deschis despre boala mea — nici cu colegii de școală, nici cu cei de muncă, și uneori nici măcar cu membrii familiei. Totuși, am descoperit o comunitate de pacienți empatică și deschisă, care m-a ajutat să privesc AEE cu mai multă încredere și curaj.',
      'Această experiență mi-a arătat cât de mult contează să ai unde și cu cine să vorbești despre ceea ce trăiești. De aceea, îmi doresc ca asociația HAERO să devină exact acest lucru: un loc sigur, unde persoanele cu AEE pot împărtăși experiențele lor, pot fi înțelese și pot afla că nu sunt singure în lupta cu AEE.',
    ],
    reverse: true,
  },
];

const Leadership: React.FC<LeadershipProps> = ({ isVisible }) => (
  <section
    id="leadership"
    data-animate
    className={`border-b border-neutral-200 bg-[#f9f7f3] transition-all duration-700 ${
      isVisible('leadership') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}
  >
    <div className="max-w-[960px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
      <div className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6">
        Echipa de conducere
      </div>
      <h2 className="font-playfair text-3xl sm:text-[2.25rem] font-bold text-neutral-800 tracking-tight mb-4 max-w-[560px]">
        Poveștile noastre
      </h2>
      <p className="text-[1.05rem] leading-[1.85] text-neutral-600 max-w-[560px] mb-12">
        Suntem paciente cu Angioedem Ereditar. Împărtășim experiențele noastre în speranța că vor
        ajunge la cei care trec prin ceva asemănător — și că nimeni nu va mai simți că luptă singur.
      </p>

      <div className="space-y-14">
        {members.map((member, index) => (
          <article
            key={member.id}
            id={member.id}
            data-animate
            className={`grid md:grid-cols-[320px_1fr] gap-8 md:gap-12 items-start transition-all duration-700 ${
              isVisible(member.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            } ${member.reverse ? 'md:[&>figure]:order-2' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <figure className="m-0">
              <div className="overflow-hidden bg-neutral-100 aspect-[3/4]">
                <img
                  src={member.photo}
                  alt={`Portret ${member.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </figure>

            <div>
              <div
                className={`text-[0.65rem] font-bold uppercase tracking-[0.2em] ${member.labelColor} mb-3`}
              >
                {member.role}
              </div>
              <h3 className="font-playfair text-2xl sm:text-[1.75rem] font-bold text-neutral-800 leading-[1.2] mb-5">
                {member.name}
              </h3>
              <div className="space-y-4">
                {member.story.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[0.95rem] leading-[1.85] text-neutral-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Leadership;
