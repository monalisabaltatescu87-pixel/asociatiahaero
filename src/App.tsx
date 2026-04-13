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
import DiagnosticAEE from './pages/DiagnosticAEE';
import AEEChildren from './pages/AEEChildren';
import WomenPregnancy from './pages/WomenPregnancy';
import Travel from './pages/Travel';
import AboutHAEi from './pages/AboutHAEi';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import AssociationBylaws from './pages/AssociationBylaws';

function HomePage() {
  return <Hero />;
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-neutral-50">
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
              <Route path="/diagnosticarea-aee" element={<DiagnosticAEE />} />
              <Route path="/aee-si-copiii" element={<AEEChildren />} />
              <Route path="/femei-si-sarcina" element={<WomenPregnancy />} />
              <Route path="/calatorii" element={<Travel />} />
              <Route path="/despre-haei" element={<AboutHAEi />} />
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
