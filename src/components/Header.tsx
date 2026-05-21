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
      className={`sticky top-0 z-50 transition-all duration-300 font-sans ${isScrolled ? 'bg-primary-900/95 backdrop-blur-md shadow-lg' : 'bg-primary-900 border-b border-primary-800'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* PDPS Logo - Styled like reference */}
          <Link to="/" className="flex items-center space-x-3 text-white">
            <h1 className="text-4xl font-black tracking-tight text-white leading-none">PDPS</h1>
            <div className="flex flex-col leading-none border-l-2 border-primary-700 pl-3">
              <span className="text-xs font-bold text-white tracking-widest">PADMA DEVI</span>
              <span className="text-xs font-bold text-white tracking-widest">PUBLIC SCHOOL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative flex items-center px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full
                  ${location.pathname === item.path
                    ? 'bg-white text-primary-900 shadow-sm'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:7805992001"
              className="bg-white text-primary-900 px-6 py-2 rounded-full font-bold shadow-md hover:bg-primary-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
            >
              Enquiry Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary-800 transition-colors text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-primary-950/95 backdrop-blur-md border-t border-primary-800 overflow-hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-4 py-2.5 text-base font-bold rounded-lg transition-colors
                ${location.pathname === item.path
                  ? 'text-primary-900 bg-white shadow'
                  : 'text-white/80 hover:text-white hover:bg-primary-800'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="tel:7805992001"
            className="block text-center w-full bg-white text-primary-900 px-6 py-3 rounded-lg font-bold shadow-lg transition-all text-base"
            onClick={() => setIsMenuOpen(false)}
          >
            Enquiry Now
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
