import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIsHAE from './components/WhatIsHAE';
import Mission from './components/Mission';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CeEsteAEE from './pages/CeEsteAEE';
import DeclansatoriAEE from './pages/DeclansatoriAEE';
import CauzeAEE from './pages/CauzeAEE';
import TratamenteAEE from './pages/TratamenteAEE';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhatIsHAE />
      <Mission />
      <GetInvolved />
      <Contact />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ce-este-aee" element={<CeEsteAEE />} />
          <Route path="/care-sunt-declansatorii-aee" element={<DeclansatoriAEE />} />
          <Route path="/ce-cauzeaza-aee" element={<CauzeAEE />} />
          <Route path="/cum-tratam-aee" element={<TratamenteAEE />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
