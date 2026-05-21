import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import SocialMediaBar from './components/SocialMediaBar';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery/:category" element={<Gallery />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 relative overflow-x-hidden selection:bg-primary-500/30 selection:text-primary-950">
        {/* Global Dynamic Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
          <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <SocialMediaBar />
          <div className="flex-grow">
            <AnimatedRoutes />
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;