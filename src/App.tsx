import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIsHAE from './components/WhatIsHAE';
import Mission from './components/Mission';
import GetInvolved from './components/GetInvolved';

import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhatIsHAE />
      <Mission />
      <GetInvolved />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
