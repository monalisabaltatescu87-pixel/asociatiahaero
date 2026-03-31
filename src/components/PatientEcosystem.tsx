import React from 'react';

const PatientEcosystem: React.FC = () => {
  return (
    <section className="patient-ecosystem">
      <style>{`
        .patient-ecosystem {
          background: #0f1923;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 64px 16px;
          overflow: hidden;
        }

        .patient-ecosystem .eco-title {
          color: #ffffff;
          font-size: 15px;
          font-weight: 300;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 8px;
          opacity: 0;
          animation: ecoFadeUp 1s ease 0.3s forwards;
        }

        .patient-ecosystem .eco-subtitle {
          color: #3AACB8;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 48px;
          opacity: 0;
          animation: ecoFadeUp 1s ease 0.5s forwards;
        }

        .patient-ecosystem svg.eco-svg {
          width: min(600px, 92vw);
          height: min(560px, 86vw);
          overflow: visible;
          opacity: 0;
          animation: ecoFadeIn 1s ease 0.8s forwards;
        }

        .patient-ecosystem .eco-footer {
          color: rgba(255,255,255,0.25);
          font-size: 11px;
          letter-spacing: 2px;
          margin-top: 32px;
          text-transform: uppercase;
        }

        @keyframes ecoFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ecoFadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }

        .patient-ecosystem .ring {
          transform-origin: center;
          animation: ecoPulse 2.8s ease-in-out infinite;
        }
        .patient-ecosystem .ring-delay1 { animation-delay: 0s; }
        .patient-ecosystem .ring-delay2 { animation-delay: 0.9s; }
        .patient-ecosystem .ring-delay3 { animation-delay: 1.8s; }

        @keyframes ecoPulse {
          0%   { opacity: 0.7; r: 38; }
          50%  { opacity: 0;   r: 60; }
          100% { opacity: 0.7; r: 38; }
        }

        .patient-ecosystem .flow-line {
          stroke-dasharray: 8 12;
          stroke-dashoffset: 0;
          animation: ecoDashFlow 2s linear infinite;
        }
        .patient-ecosystem .flow-reverse {
          animation: ecoDashFlowRev 2s linear infinite;
        }

        @keyframes ecoDashFlow     { to { stroke-dashoffset: -80; } }
        @keyframes ecoDashFlowRev  { to { stroke-dashoffset:  80; } }

        .patient-ecosystem .node-group {
          opacity: 0;
          animation: ecoNodeIn 0.7s cubic-bezier(.34,1.56,.64,1) forwards;
        }
        .patient-ecosystem .n1 { animation-delay: 1.0s; }
        .patient-ecosystem .n2 { animation-delay: 1.3s; }
        .patient-ecosystem .n3 { animation-delay: 1.6s; }
        .patient-ecosystem .n4 { animation-delay: 1.9s; }

        @keyframes ecoNodeIn {
          from { opacity: 0; transform: scale(0.4); }
          to   { opacity: 1; transform: scale(1); }
        }

        .patient-ecosystem .edge {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: ecoDrawLine 1.1s ease forwards;
        }
        .patient-ecosystem .e1 { animation-delay: 2.1s; }
        .patient-ecosystem .e2 { animation-delay: 2.3s; }
        .patient-ecosystem .e3 { animation-delay: 2.5s; }

        @keyframes ecoDrawLine {
          to { stroke-dashoffset: 0; }
        }

        .patient-ecosystem .label-g {
          opacity: 0;
          animation: ecoFadeUp 0.8s ease forwards;
        }
        .patient-ecosystem .l1 { animation-delay: 2.6s; }
        .patient-ecosystem .l2 { animation-delay: 2.8s; }
        .patient-ecosystem .l3 { animation-delay: 3.0s; }
        .patient-ecosystem .l4 { animation-delay: 3.2s; }

        @keyframes ecoOrbitSpin    { to { transform: rotate(360deg); } }
        @keyframes ecoOrbitSpinRev { to { transform: rotate(-360deg); } }

        .patient-ecosystem .center-glow {
          animation: ecoCenterGlow 3s ease-in-out infinite alternate;
        }
        @keyframes ecoCenterGlow {
          from { opacity: 0.15; r: 52; }
          to   { opacity: 0.35; r: 65; }
        }
      `}</style>

      <div className="eco-title">Asocia\u021bia HAERO</div>
      <div className="eco-subtitle">Ecosistemul Pacientului cu HAE</div>

      <svg className="eco-svg" viewBox="0 0 600 520" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="gRed" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#FF5F61"/>
            <stop offset="100%" stopColor="#D4292B"/>
          </radialGradient>
          <radialGradient id="gYellow" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#FFE06A"/>
            <stop offset="100%" stopColor="#F5C842"/>
          </radialGradient>
          <radialGradient id="gTeal" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#60D4E0"/>
            <stop offset="100%" stopColor="#3AACB8"/>
          </radialGradient>
          <radialGradient id="gWhite" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#ffffff"/>
            <stop offset="100%" stopColor="#d0eef2"/>
          </radialGradient>
          <filter id="glowRed" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glowYellow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glowTeal" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glowWhite" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#000" floodOpacity="0.4"/>
          </filter>
          <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 Z" fill="#D4292B" opacity="0.8"/>
          </marker>
          <marker id="arrowYellow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 Z" fill="#F5C842" opacity="0.8"/>
          </marker>
          <marker id="arrowTeal" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 Z" fill="#3AACB8" opacity="0.8"/>
          </marker>
          <marker id="arrowWhite" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 Z" fill="rgba(255,255,255,0.5)"/>
          </marker>
        </defs>

        {/* Background grid */}
        <g opacity="0.04">
          <line x1="0" y1="0" x2="600" y2="0" stroke="white" strokeWidth="1"/>
          <line x1="0" y1="130" x2="600" y2="130" stroke="white" strokeWidth="1"/>
          <line x1="0" y1="260" x2="600" y2="260" stroke="white" strokeWidth="1"/>
          <line x1="0" y1="390" x2="600" y2="390" stroke="white" strokeWidth="1"/>
          <line x1="0" y1="520" x2="600" y2="520" stroke="white" strokeWidth="1"/>
          <line x1="0" y1="0" x2="0" y2="520" stroke="white" strokeWidth="1"/>
          <line x1="150" y1="0" x2="150" y2="520" stroke="white" strokeWidth="1"/>
          <line x1="300" y1="0" x2="300" y2="520" stroke="white" strokeWidth="1"/>
          <line x1="450" y1="0" x2="450" y2="520" stroke="white" strokeWidth="1"/>
          <line x1="600" y1="0" x2="600" y2="520" stroke="white" strokeWidth="1"/>
        </g>

        {/* Triangle edges */}
        <line className="edge e1" x1="300" y1="80" x2="300" y2="248"
          stroke="#D4292B" strokeWidth="2" strokeOpacity="0.5"/>
        <line className="edge e2" x1="116" y1="388" x2="264" y2="278"
          stroke="#F5C842" strokeWidth="2" strokeOpacity="0.5"/>
        <line className="edge e3" x1="484" y1="388" x2="336" y2="278"
          stroke="#3AACB8" strokeWidth="2" strokeOpacity="0.5"/>

        {/* Outer triangle */}
        <line className="edge e1" x1="300" y1="80" x2="116" y2="388"
          stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
        <line className="edge e2" x1="300" y1="80" x2="484" y2="388"
          stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
        <line className="edge e3" x1="116" y1="388" x2="484" y2="388"
          stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>

        {/* Animated flow lines */}
        <line className="flow-line" x1="300" y1="80" x2="300" y2="248"
          stroke="#D4292B" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round"/>
        <line className="flow-line flow-reverse" x1="116" y1="388" x2="264" y2="278"
          stroke="#F5C842" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round"/>
        <line className="flow-line" x1="484" y1="388" x2="336" y2="278"
          stroke="#3AACB8" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round"/>

        {/* Outer edges flow */}
        <line style={{strokeDasharray:'6 16',strokeDashoffset:0,animation:'ecoDashFlow 3s linear infinite'}}
          x1="300" y1="80" x2="116" y2="388"
          stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
        <line style={{strokeDasharray:'6 16',strokeDashoffset:0,animation:'ecoDashFlowRev 3s linear infinite'}}
          x1="300" y1="80" x2="484" y2="388"
          stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
        <line style={{strokeDasharray:'6 16',strokeDashoffset:0,animation:'ecoDashFlow 3.5s linear infinite'}}
          x1="116" y1="388" x2="484" y2="388"
          stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>

        {/* TOP: DOCTORS (Red) */}
        <g className="node-group n1" style={{transformOrigin:'300px 80px'}}>
          <circle cx="300" cy="80" r="38" fill="none" stroke="#D4292B" strokeWidth="1.5"
            className="ring ring-delay1" opacity="0.6"/>
          <circle cx="300" cy="80" r="42" fill="#D4292B" opacity="0.15" filter="url(#glowRed)"/>
          <circle cx="300" cy="80" r="38" fill="url(#gRed)" filter="url(#shadow)"/>
          <g transform="translate(300,80)" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
            <rect x="-11" y="-16" width="22" height="8" rx="4" fill="white" stroke="none"/>
            <rect x="-4" y="-16" width="8" height="22" rx="4" fill="white" stroke="none"/>
            <circle cx="0" cy="12" r="7" fill="none" stroke="white" strokeWidth="2.5"/>
            <circle cx="0" cy="12" r="2.5" fill="white" stroke="none"/>
          </g>
        </g>

        {/* LEFT: PHARMA (Yellow) */}
        <g className="node-group n2" style={{transformOrigin:'116px 388px'}}>
          <circle cx="116" cy="388" r="38" fill="none" stroke="#F5C842" strokeWidth="1.5"
            className="ring ring-delay2" opacity="0.6"/>
          <circle cx="116" cy="388" r="42" fill="#F5C842" opacity="0.15" filter="url(#glowYellow)"/>
          <circle cx="116" cy="388" r="38" fill="url(#gYellow)" filter="url(#shadow)"/>
          <g transform="translate(116,388)">
            <rect x="-14" y="-7" width="28" height="14" rx="7" fill="#1C1C1C" opacity="0.25" stroke="none"/>
            <rect x="-14" y="-7" width="14" height="14" rx="7" fill="white" opacity="0.9" stroke="none"/>
            <rect x="0" y="-7" width="14" height="14" rx="7" fill="#D4292B" opacity="0.8" stroke="none"/>
            <circle cx="-18" cy="-14" r="4" fill="white" opacity="0.85"/>
            <circle cx="18" cy="-14" r="4" fill="white" opacity="0.85"/>
            <circle cx="0" cy="17" r="4" fill="white" opacity="0.85"/>
            <line x1="-14" y1="-7" x2="-18" y2="-14" stroke="white" strokeWidth="1.5" opacity="0.7"/>
            <line x1="14" y1="-7" x2="18" y2="-14" stroke="white" strokeWidth="1.5" opacity="0.7"/>
            <line x1="0" y1="7" x2="0" y2="17" stroke="white" strokeWidth="1.5" opacity="0.7"/>
          </g>
        </g>

        {/* RIGHT: PATIENT ORG (Teal) */}
        <g className="node-group n3" style={{transformOrigin:'484px 388px'}}>
          <circle cx="484" cy="388" r="38" fill="none" stroke="#3AACB8" strokeWidth="1.5"
            className="ring ring-delay3" opacity="0.6"/>
          <circle cx="484" cy="388" r="42" fill="#3AACB8" opacity="0.15" filter="url(#glowTeal)"/>
          <circle cx="484" cy="388" r="38" fill="url(#gTeal)" filter="url(#shadow)"/>
          <g transform="translate(484,388)" fill="white">
            <circle cx="0" cy="-12" r="6" fill="white"/>
            <path d="M-8,0 Q0,-6 8,0 L8,10 Q0,6 -8,10 Z" fill="white" opacity="0.9"/>
            <circle cx="-16" cy="-8" r="4.5" fill="white" opacity="0.75"/>
            <path d="M-22,4 Q-16,-1 -10,4 L-10,12 Q-16,8 -22,12 Z" fill="white" opacity="0.65"/>
            <circle cx="16" cy="-8" r="4.5" fill="white" opacity="0.75"/>
            <path d="M10,4 Q16,-1 22,4 L22,12 Q16,8 10,12 Z" fill="white" opacity="0.65"/>
          </g>
        </g>

        {/* CENTER: PATIENT */}
        <g className="node-group n4" style={{transformOrigin:'300px 270px'}}>
          <circle cx="300" cy="270" r="62" fill="white" className="center-glow" filter="url(#glowWhite)"/>
          <circle cx="300" cy="270" r="52" fill="none" stroke="#D4292B"
            strokeWidth="3" strokeDasharray="50 110" strokeDashoffset="0"
            style={{animation:'ecoOrbitSpin 8s linear infinite',transformOrigin:'300px 270px'}}/>
          <circle cx="300" cy="270" r="52" fill="none" stroke="#F5C842"
            strokeWidth="3" strokeDasharray="50 110" strokeDashoffset="55"
            style={{animation:'ecoOrbitSpin 8s linear infinite',transformOrigin:'300px 270px'}}/>
          <circle cx="300" cy="270" r="52" fill="none" stroke="#3AACB8"
            strokeWidth="3" strokeDasharray="50 110" strokeDashoffset="110"
            style={{animation:'ecoOrbitSpin 8s linear infinite',transformOrigin:'300px 270px'}}/>
          <circle cx="300" cy="270" r="44" fill="url(#gWhite)" filter="url(#shadow)"/>
          <g transform="translate(300,270)" fill="#1C2833">
            <circle cx="0" cy="-20" r="10" fill="#3AACB8"/>
            <path d="M-14,-4 Q0,-12 14,-4 L14,18 Q0,12 -14,18 Z" fill="#3AACB8"/>
            <path d="M-5,0 C-5,-4 -10,-4 -10,0 C-10,4 -5,8 0,12 C5,8 10,4 10,0 C10,-4 5,-4 5,0 Z"
              fill="#D4292B" transform="translate(0,-2) scale(0.7)"/>
          </g>
        </g>

        {/* Labels */}
        <g className="label-g l1">
          <rect x="210" y="-14" width="180" height="34" rx="8" fill="#D4292B" opacity="0.18"/>
          <text x="300" y="1" textAnchor="middle" fontFamily="Arial" fontSize="11"
            fontWeight="700" fill="#FF7B7C" letterSpacing="2">MEDICI</text>
          <text x="300" y="14" textAnchor="middle" fontFamily="Arial" fontSize="9"
            fill="#FF7B7C" letterSpacing="1">Speciali&#537;ti &amp; Cercet&#259;tori</text>
        </g>

        <g className="label-g l2">
          <rect x="14" y="440" width="202" height="34" rx="8" fill="#F5C842" opacity="0.15"/>
          <text x="115" y="455" textAnchor="middle" fontFamily="Arial" fontSize="11"
            fontWeight="700" fill="#F5C842" letterSpacing="2">COMPANII FARMACEUTICE</text>
          <text x="115" y="468" textAnchor="middle" fontFamily="Arial" fontSize="9"
            fill="#c49a00" letterSpacing="1">Tratamente &amp; Inova&#539;ie</text>
        </g>

        <g className="label-g l3">
          <rect x="384" y="440" width="202" height="34" rx="8" fill="#3AACB8" opacity="0.15"/>
          <text x="485" y="455" textAnchor="middle" fontFamily="Arial" fontSize="11"
            fontWeight="700" fill="#3AACB8" letterSpacing="2">ORGANIZA&#538;IA HAERO</text>
          <text x="485" y="468" textAnchor="middle" fontFamily="Arial" fontSize="9"
            fill="#2d8c96" letterSpacing="1">Advocacy &amp; Suport</text>
        </g>

        <g className="label-g l4">
          <rect x="226" y="322" width="148" height="30" rx="8" fill="white" opacity="0.1"/>
          <text x="300" y="337" textAnchor="middle" fontFamily="Arial" fontSize="11"
            fontWeight="700" fill="#1a7a84" letterSpacing="2">PACIENTUL</text>
          <text x="300" y="349" textAnchor="middle" fontFamily="Arial" fontSize="9"
            fill="#2d8c96" letterSpacing="1">&#238;n centrul ecosistemului</text>
        </g>

        {/* Relationship edge labels */}
        <g opacity="0" style={{animation:'ecoFadeUp 0.8s ease 3.4s forwards'}}>
          <rect x="304" y="152" width="116" height="22" rx="5" fill="rgba(212,41,43,0.2)"/>
          <text x="362" y="167" textAnchor="middle" fontFamily="Arial" fontSize="8.5"
            fill="#FFB3B4" letterSpacing="0.5">diagnostic &amp; tratament</text>
          <rect x="110" y="305" width="90" height="22" rx="5" fill="rgba(245,200,66,0.2)"/>
          <text x="155" y="320" textAnchor="middle" fontFamily="Arial" fontSize="8.5"
            fill="#F5C842" letterSpacing="0.5">terapii inovative</text>
          <rect x="400" y="305" width="90" height="22" rx="5" fill="rgba(58,172,184,0.2)"/>
          <text x="445" y="320" textAnchor="middle" fontFamily="Arial" fontSize="8.5"
            fill="#3AACB8" letterSpacing="0.5">advocacy &amp; suport</text>
        </g>
      </svg>

      <p className="eco-footer">
        Asocia&#539;ia HAERO &middot; Tg. Mure&#537; &middot; 2025
      </p>
    </section>
  );
};

export default PatientEcosystem;
