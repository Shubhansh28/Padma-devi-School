import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 font-inter ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* PDPS Logo - Styled like SIA */}
          <Link to="/" className="flex items-center space-x-3">
            <h1 className="text-5xl font-extrabold tracking-tight text-black leading-none">PDPS</h1>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-semibold text-black tracking-widest">PADMA DEVI</span>
              <span className="text-sm font-semibold text-black tracking-widest">PUBLIC SCHOOL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative flex items-center px-3 py-2 text-sm font-medium transition-all duration-300
                  ${
                    location.pathname === item.path
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <a
              href="tel:7805992001"
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
            >
              Enquiry Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-4 space-y-3">

          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors
                ${
                  location.pathname === item.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="tel:7805992001"
            className="block text-center w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-700 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Enquiry Now
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<h2 className="text-3xl font-bold text-gray-800">Welcome to Home Page!</h2>} />
            <Route path="/about" element={<h2 className="text-3xl font-bold text-gray-800">About Us</h2>} />
            <Route path="/admissions" element={<h2 className="text-3xl font-bold text-gray-800">Admissions Information</h2>} />
            <Route path="/contact" element={<h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>} />
            <Route path="/gallery" element={<h2 className="text-3xl font-bold text-gray-800">School Gallery</h2>} />
          </Routes>
          <div className="mt-10 p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-700">
              This is placeholder content to show the header's sticky behavior and responsiveness.
              Scroll down to see the header change its appearance.
            </p>
            <div className="h-[1000px] bg-gray-50 mt-8 rounded-md flex items-center justify-center text-gray-400 text-xl font-semibold">
              Scrollable Content Area
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default Header;
