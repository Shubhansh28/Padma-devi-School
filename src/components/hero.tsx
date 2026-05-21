import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Microscope, Palette, Users, Globe } from 'lucide-react';

// --- Data for Slideshow ---
// I've chosen images and text that evoke a sense of learning, community, and growth.
// You can easily replace these URLs and text with your own.
const slides = [
  {
    img: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: BookOpen,
    headline: 'Nurturing Young Minds for a Bright Future',
    subheadline: 'Excellence in Education Since 1998',
  },
  {
    img: 'https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: Users,
    headline: 'A Community of Passionate Learners',
    subheadline: 'Where every student is known and valued.',
  },
  {
    img: 'https://images.pexels.com/photos/8471843/pexels-photo-8471843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: Microscope,
    headline: 'Discover, Innovate, and Create',
    subheadline: 'Hands-on learning that sparks curiosity.',
  },
  {
    img: 'https://images.pexels.com/photos/1720184/pexels-photo-1720184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: Palette,
    headline: 'Unleashing Creativity and Talent',
    subheadline: 'Fostering artistic expression in every child.',
  },
  {
    img: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: Globe,
    headline: 'Preparing Global Citizens of Tomorrow',
    subheadline: 'Building a foundation for lifelong success.',
  },
];

// --- Animation Variants ---
// We define different animation styles for the image transitions.
const imageVariants = {
  // Ken Burns Effect (subtle zoom and pan)
  kenBurns: {
    initial: { scale: 1, opacity: 0 },
    animate: { scale: 1.1, opacity: 1, transition: { duration: 7, ease: "easeInOut" } },
    exit: { scale: 1.1, opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } },
  },
  // Slide from Right
  slideRight: {
    initial: { x: '100%', opacity: 0 },
    animate: { x: '0%', opacity: 1, transition: { duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] } },
    exit: { x: '-100%', opacity: 0, transition: { duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] } },
  },
  // Fade In/Out
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2, ease: "easeIn" } },
    exit: { opacity: 0, transition: { duration: 2, ease: "easeOut" } },
  },
  // Slide from Bottom
  slideUp: {
    initial: { y: '100%', opacity: 0 },
    animate: { y: '0%', opacity: 1, transition: { duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] } },
    exit: { y: '-100%', opacity: 0, transition: { duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] } },
  },
};

// We'll cycle through these animations for variety
const animationCycle = [imageVariants.kenBurns, imageVariants.fade, imageVariants.slideRight, imageVariants.kenBurns, imageVariants.slideUp];


function App() {
  const [index, setIndex] = useState(0);

  // Effect to handle the slideshow timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[index];
  const currentAnimation = animationCycle[index % animationCycle.length];
  const IconComponent = currentSlide.icon;

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white text-center relative overflow-hidden">
      {/* Animated Background Image */}
      <AnimatePresence initial={false} custom={currentAnimation}>
        <motion.div
          key={index}
          className="absolute inset-0 z-0"
          variants={currentAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentSlide.img})` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          key={`content-${index}`} // Animate content along with the image
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <div className="mb-4">
             <IconComponent className="h-12 w-12 sm:h-16 sm:w-16 mx-auto text-yellow-400" />
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif mb-4 leading-tight">
            Padma Devi Public School
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {currentSlide.headline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 text-sm sm:text-base rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
              Apply for Admission
            </button>
            <button className="border-2 border-white text-white px-8 py-3 text-sm sm:text-base rounded-full font-bold hover:glass-card hover:text-white transition-all duration-300">
              Take a Virtual Tour
            </button>
          </div>
        </motion.div>
      </div>

      {/* Slideshow Progress Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === i ? 'glass-card' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
