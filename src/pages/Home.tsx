// HomePage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link} from 'react-router-dom';
import {
  Building2, Users, Trophy, Microscope, BookOpen, Monitor,
  Star, Award, Heart, Target, ArrowRight, Phone, MessageCircle, MapPin, Clock, Mail, Globe, Palette,
  Rocket, Plus, Sparkles, Smile, ChevronLeft, ChevronRight, X
} from 'lucide-react';

import { galleryCards, features, stats, contactInfo, slides } from '../data/homeData';

// --- Animation Variants ---
const imageVariants = {
  kenBurns: {
    initial: { scale: 1, opacity: 0 },
    animate: { scale: 1.1, opacity: 1, transition: { duration: 7, ease: "easeInOut" } },
    exit: { scale: 1.1, opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } },
  },
  slideRight: {
    initial: { x: '100%', opacity: 0 },
    animate: { x: '0%', opacity: 1, transition: { duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] } },
    exit: { x: '-100%', opacity: 0, transition: { duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] } },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2, ease: "easeIn" } },
    exit: { opacity: 0, transition: { duration: 2, ease: "easeOut" } },
  },
  slideUp: {
    initial: { y: '100%', opacity: 0 },
    animate: { y: '0%', opacity: 1, transition: { duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] } },
    exit: { y: '-100%', opacity: 0, transition: { duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] } },
  },
};

const animationCycle = [imageVariants.kenBurns, imageVariants.fade, imageVariants.slideRight, imageVariants.kenBurns, imageVariants.slideUp];


function HomePage() {
  const [index, setIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(true);

  // States & Refs for Facilities Interactive Card Slider
  const facilitiesScrollRef = useRef<HTMLDivElement>(null);
  const [selectedFacility, setSelectedFacility] = useState<typeof galleryCards[number] | null>(null);

  // Preload current slide image for smooth transition
  useEffect(() => {
    if (slides.length === 0) return;
    setImageLoaded(false);
    const img = new Image();
    img.src = slides[index].img;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true);
  }, [index]);

  // Slideshow auto-advance timer
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Preload all images on mount for instant transitions
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.img;
    });
  }, []);

  const currentSlide = slides.length > 0 ? slides[index] : null;
  const currentAnimation = animationCycle[index % animationCycle.length];
  const IconComponent = currentSlide?.icon || BookOpen;

  return (
    <motion.div 
      className="overflow-x-hidden"
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >

      {/* Hero Section */}
      <section className="min-h-[620px] lg:h-screen lg:min-h-[750px] lg:max-h-[950px] flex items-center bg-primary-50 relative overflow-hidden pt-24 lg:pt-0 pb-16 lg:pb-0">
        {/* Abstract background elements */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <svg className="absolute top-10 left-10 w-48 h-48 text-primary-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10,50 Q25,25 40,50 T70,50 T100,50" />
          </svg>
          <svg className="absolute bottom-24 right-10 w-64 h-64 text-primary-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="50" cy="50" r="40" strokeDasharray="5,5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Circular Slideshow with cute doodles */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative order-last lg:order-first">
              {/* Floating Rocket Doodle */}
              <div className="absolute -top-12 right-4 z-20 animate-float">
                <Rocket className="w-14 h-14 text-primary-600 transform rotate-45 stroke-[1.5]" />
              </div>
              
              {/* Floating Stars */}
              <div className="absolute -top-4 -left-6 z-20 animate-pulse">
                <Plus className="w-6 h-6 text-secondary-500 stroke-[3]" />
              </div>
              <div className="absolute bottom-1/4 -right-8 z-20 animate-bounce-gentle">
                <Sparkles className="w-8 h-8 text-secondary-500 fill-secondary-500" />
              </div>
              <div className="absolute bottom-0 -left-6 z-20">
                <Smile className="w-10 h-10 text-primary-400 stroke-[1.5]" />
              </div>

              {/* Circular Slideshow Frame */}
              <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[410px] lg:h-[410px] rounded-full p-4 bg-white shadow-xl border border-primary-100 flex items-center justify-center">
                {/* Inner Circle Frame */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-50">
                  {currentSlide && (
                    <AnimatePresence initial={false}>
                      {imageLoaded && (
                        <motion.div
                          key={index}
                          className="absolute inset-0"
                          variants={imageVariants.fade}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <img
                            src={currentSlide.img}
                            alt="Students studying at PDPS"
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                  
                  {/* Soft overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/20 via-transparent to-transparent z-10" />
                </div>

                {/* Curved boundary decoration */}
                <svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] text-primary-900 pointer-events-none opacity-30" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="49" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                </svg>
              </div>

              {/* Slideshow Progress Indicator dots */}
              {slides.length > 0 && (
                <div className="mt-6 flex gap-2.5 z-20 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-primary-100/50">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                        index === i ? 'bg-secondary-500 scale-125 shadow-sm' : 'bg-primary-200 hover:bg-primary-300'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Left-aligned Text Content */}
            <div className="lg:col-span-7 text-left flex flex-col justify-center order-first lg:order-last">
              <motion.div
                key={`content-${index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Tagline */}
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-primary-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary-500 animate-pulse"></span>
                  <span className="text-xs sm:text-sm font-bold text-primary-800 tracking-wide uppercase font-sans">
                    Welcome to PDPS Raipur
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-900 font-serif leading-[1.15]">
                  Nurturing Bright <span className="text-secondary-600">Minds</span> for a <span className="underline decoration-secondary-500 decoration-wavy decoration-3 underline-offset-8">Brighter</span> Tomorrow
                </h1>

                {/* Subheadline description */}
                <p className="text-base sm:text-lg md:text-xl text-primary-700 font-sans max-w-2xl leading-relaxed">
                  {currentSlide?.headline || 'Early education designed to inspire curiosity, creativity, and confidence.'}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link 
                    to="/admissions" 
                    className="bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-base inline-flex items-center gap-2 group"
                  >
                    Admission Now 
                    <ArrowRight className="w-5 h-5 text-secondary-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/about" 
                    className="bg-white hover:bg-primary-50 text-primary-900 border border-primary-200 px-8 py-4 rounded-xl font-bold shadow-sm hover:shadow-md transition-all duration-300 text-base"
                  >
                    Take a Virtual Tour
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Wavy bottom divider transition into white background */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-1">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] text-white fill-current">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,88.43,26.85,152.42,44.29,220,62.24,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center max-w-6xl mx-auto px-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-2xl bg-primary-50/30 border border-primary-100/50"
            >
              <h3 className="text-3xl sm:text-4xl font-extrabold text-secondary-600">
                {stat.number}
              </h3>
              <p className="text-xs sm:text-sm text-primary-800 font-bold uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Cards Section (Overlaps background with deep navy cards) */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-primary-50/20 px-4 relative z-10 border-t border-primary-50">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-secondary-600 font-bold tracking-wider text-sm uppercase block mb-2">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-900 mb-4 leading-tight font-serif">
            Why Choose Padma Devi?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-800 max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive education that prepares students for success in academics and life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-primary-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg hover:bg-primary-950 hover-lift transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-primary-800 text-secondary-500 w-12 h-12 flex items-center justify-center rounded-xl mb-6 shadow-inner border border-primary-700/50">
                {React.createElement(feature.icon, { className: 'w-6 h-6' })}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-primary-200 text-sm sm:text-base leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Us Collage Section */}
      <section className="py-20 bg-white px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left side: Overlapping Image Collage */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Decorative background blobs */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 z-0"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 z-0"></div>
            
            {/* Collage Container */}
            <div className="relative w-full max-w-[480px] h-[360px] sm:h-[400px]">
              {/* Main Image */}
              <div className="absolute top-0 left-0 w-[78%] h-[78%] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="School classroom" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Secondary Overlapping Image */}
              <div className="absolute bottom-0 right-0 w-[68%] h-[64%] rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white z-10">
                <img 
                  src="https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Students playing" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small floating doodle decorative badge */}
              <div className="absolute -bottom-6 left-6 z-20 bg-primary-900 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="bg-secondary-500 p-2 rounded-lg text-primary-900">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary-300">Awarded School</p>
                  <p className="text-[10px] text-white/80 font-medium">Best Primary Education</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: About Content */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="text-secondary-600 font-bold tracking-wider text-sm uppercase font-sans">About Us</span>
              <div className="w-12 h-[2px] bg-secondary-500"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-900 font-serif leading-tight">
              Nurturing Talents & Fostering Character Since 2015
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              At Padma Devi Public School, we believe that education is the key to unlocking a child's potential. 
              Our curriculum blends academic rigour with creative expression, ensuring students grow into 
              well-rounded, responsible global citizens.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              We provide a safe, supportive, and intellectually stimulating environment equipped with 
              cutting-edge smart classrooms, advanced laboratories, and comprehensive sports programs 
              tailored to every developmental stage.
            </p>
            <div className="pt-2">
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 bg-primary-900 hover:bg-primary-800 text-white px-8 py-3.5 rounded-full font-bold shadow-md hover:shadow-lg transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4 text-secondary-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities / Classes Gallery Section (Deep Navy background matching the reference) */}
      <section className="py-20 bg-primary-900 text-white relative overflow-visible px-2 sm:px-6 lg:pr-16">
        {/* Subtle background decoration waves */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-950/40 rounded-full blur-3xl pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-950/40 rounded-full blur-3xl pointer-events-none z-0"></div>

        <div className="relative z-10 w-full">
          <div className="text-center mb-6 max-w-7xl mx-auto px-4">
            <span className="text-secondary-400 font-bold tracking-wider text-sm uppercase block mb-2 font-sans">Our Classes</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight font-serif">
              Explore Our Facilities
            </h2>
            <div className="w-20 h-1 bg-secondary-500 mx-auto mt-4 mb-6 rounded"></div>
            <p className="text-base sm:text-lg text-primary-200 max-w-2xl mx-auto leading-relaxed">
              Discover our world-class campus infrastructure designed to provide the ultimate learning environment.
            </p>
          </div>

          {/* Interactive Card Slider Details Container */}
          <div className="relative min-h-[500px] w-full flex items-center justify-center overflow-visible">
            <AnimatePresence mode="wait">
              {!selectedFacility ? (
                // Slider View - Full Screen Width Gesture Scroll with no navigation buttons
                <motion.div
                  key="slider-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col items-center overflow-visible"
                >
                  {/* Slider Cards Row - Continuous scroll, full viewport width */}
                  <div className="relative w-full overflow-visible py-16 px-4 md:px-8">
                    <div 
                      ref={facilitiesScrollRef}
                      className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-6 px-4 max-w-full no-scrollbar overflow-y-visible"
                      style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                      }}
                    >
                      {galleryCards.map((card, idx) => {
                        // Choose a specific vibrant themed background for the card
                        let cardBg = "bg-blue-600/95";
                        if (card.category === "events") cardBg = "bg-purple-600/95";
                        else if (card.category === "sports") cardBg = "bg-emerald-600/95";
                        else if (card.category === "labs") cardBg = "bg-rose-600/95";
                        else if (card.category === "library") cardBg = "bg-amber-600/95";
                        else if (card.category === "classrooms") cardBg = "bg-indigo-600/95";

                        return (
                          <motion.div
                            key={card.category}
                            onClick={() => setSelectedFacility(card)}
                            whileHover={{ y: -16, scale: 1.03 }}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className={`relative flex-shrink-0 w-72 h-[340px] ${cardBg} rounded-3xl cursor-pointer shadow-2xl flex flex-col items-center justify-between p-6 border border-white/25 group snap-center overflow-visible select-none mt-12`}
                          >
                            {/* 3D Overlapping Cutout Image with origin-bottom to scale upward correctly */}
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-110 z-10 origin-bottom">
                              <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                            </div>

                            {/* Filler to push text below overlapping image */}
                            <div className="h-28" />

                            {/* Card Content */}
                            <div className="w-full text-center flex flex-col items-center flex-grow justify-end pb-2">
                              <div className="w-10 h-10 bg-white/20 backdrop-blur-md flex items-center justify-center rounded-2xl mb-3 text-white border border-white/10">
                                {React.createElement(card.icon, { className: 'w-5 h-5' })}
                              </div>
                              <h3 className="text-xl font-black text-white tracking-wide drop-shadow-md">
                                {card.title}
                              </h3>
                              <p className="text-white/80 text-xs mt-2 line-clamp-2 px-2">
                                {card.description}
                              </p>
                              
                              <span className="mt-4 text-[11px] font-bold uppercase tracking-wider text-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                                View Details <ArrowRight className="w-3 h-3" />
                              </span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ) : (
                // Expanded Details View (Inside Out Character Card Style)
                <motion.div
                  key="detail-view"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ type: "spring", stiffness: 100, damping: 18 }}
                  className="w-full max-w-4xl bg-primary-950/90 border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl relative flex flex-col md:flex-row gap-8 items-center overflow-hidden"
                >
                  {/* Themed colored background glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary-500/10 via-transparent to-transparent pointer-events-none" />

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedFacility(null)}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/10 transition-all z-20"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Left Column: Image in frame */}
                  <div className="w-full md:w-2/5 flex flex-col items-center">
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                      <img
                        src={selectedFacility.image}
                        alt={selectedFacility.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Right Column: Rich Metadata & Description Details */}
                  <div className="w-full md:w-3/5 text-left space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-secondary-500 rounded-xl text-primary-950 shadow-md">
                        {React.createElement(selectedFacility.icon, { className: 'w-6 h-6' })}
                      </div>
                      <div>
                        <span className="text-secondary-400 font-bold uppercase tracking-wider text-[11px] font-sans block">
                          Facility Showcase
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif leading-tight">
                          {selectedFacility.title}
                        </h3>
                      </div>
                    </div>

                    <div className="w-16 h-[2px] bg-secondary-500 rounded"></div>

                    <p className="text-primary-100 text-sm sm:text-base leading-relaxed">
                      {selectedFacility.description}. We provide structured programs and experienced instructors to ensure our students get the absolute best out of our world-class campus infrastructure.
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm text-primary-200 pt-2">
                      <div className="bg-primary-900/60 p-3 rounded-xl border border-white/5">
                        <span className="text-secondary-400 font-bold block uppercase text-[10px] tracking-wider mb-1">Timing</span>
                        Regular School Hours
                      </div>
                      <div className="bg-primary-900/60 p-3 rounded-xl border border-white/5">
                        <span className="text-secondary-400 font-bold block uppercase text-[10px] tracking-wider mb-1">Access</span>
                        All Classes & Batches
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4">
                      <Link
                        to={`/gallery/${selectedFacility.category}`}
                        className="inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-primary-950 px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
                      >
                        Explore Gallery <ArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => setSelectedFacility(null)}
                        className="bg-white/10 hover:bg-white/20 border border-white/15 text-white px-6 py-3 rounded-xl font-bold transition-all"
                      >
                        Back to Facilities
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default HomePage;
