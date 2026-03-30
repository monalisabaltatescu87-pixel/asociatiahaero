import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AboutUs from './pages/AboutUs';
import OurMission from './pages/OurMission';
import Community from './pages/Community';
import ContactPage from './pages/ContactPage';
import WhatIsHAE from './pages/WhatIsHAE';
import HAETriggers from './pages/HAETriggers';
import HAECauses from './pages/HAECauses';
import HAETreatments from './pages/HAETreatments';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import AssociationBylaws from './pages/AssociationBylaws';

function HomePage() {
  return <Hero />;
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/asociatiahaero">
        <div className="min-h-screen">
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/despre" element={<AboutUs />} />
              <Route path="/ce-este-aee" element={<WhatIsHAE />} />
              <Route path="/care-sunt-declansatorii-aee" element={<HAETriggers />} />
              <Route path="/ce-cauzeaza-aee" element={<HAECauses />} />
              <Route path="/cum-tratam-aee" element={<HAETreatments />} />
              <Route path="/misiune" element={<OurMission />} />
              <Route path="/comunitate" element={<Community />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/politica-confidentialitate" element={<PrivacyPolicy />} />
              <Route path="/termeni-si-conditii" element={<TermsAndConditions />} />
              <Route path="/statutul-asociatiei" element={<AssociationBylaws />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
