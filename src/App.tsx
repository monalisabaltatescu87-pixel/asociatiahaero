import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import DespreNoi from './pages/DespreNoi';
import MisiuneaNoastra from './pages/MisiuneaNoastra';
import Comunitate from './pages/Comunitate';
import ContactPage from './pages/ContactPage';
import CeEsteAEE from './pages/CeEsteAEE';
import DeclansatoriAEE from './pages/DeclansatoriAEE';
import CauzeAEE from './pages/CauzeAEE';
import TratamenteAEE from './pages/TratamenteAEE';

function HomePage() {
  return <Hero />;
}

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/despre" element={<DespreNoi />} />
          <Route path="/ce-este-aee" element={<CeEsteAEE />} />
          <Route path="/care-sunt-declansatorii-aee" element={<DeclansatoriAEE />} />
          <Route path="/ce-cauzeaza-aee" element={<CauzeAEE />} />
          <Route path="/cum-tratam-aee" element={<TratamenteAEE />} />
          <Route path="/misiune" element={<MisiuneaNoastra />} />
          <Route path="/comunitate" element={<Comunitate />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
