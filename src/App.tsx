import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import SocialMediaBar from './components/SocialMediaBar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Header />
        <SocialMediaBar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery/:category" element={<Gallery />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;