// HomePage.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link} from 'react-router-dom';
import {
  Building2, Users, Trophy, Microscope, BookOpen, Monitor,
  Star, Award, Heart, Target, ArrowRight, Phone, MessageCircle, MapPin, Clock, Mail, Globe, Palette
} from 'lucide-react';

const galleryCards = [
  {
    title: 'Beautiful Campus',
    description: 'Explore our modern and well-maintained campus facilities',
    icon: Building2,
    category: 'campus',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-blue-500 to-blue-700'
  },
  {
    title: 'Cultural Programs',
    description: 'Vibrant cultural events and celebrations throughout the year',
    icon: Users,
    category: 'events',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-purple-500 to-purple-700'
  },
  {
    title: 'Sports & Games',
    description: 'Comprehensive sports facilities and athletic programs',
    icon: Trophy,
    category: 'sports',
    image: 'https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-green-500 to-green-700'
  },
  {
    title: 'Science Labs',
    description: 'State-of-the-art laboratories for hands-on learning',
    icon: Microscope,
    category: 'labs',
    image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-red-500 to-red-700'
  },
  {
    title: 'Library & Reading',
    description: 'Extensive collection of books and digital resources',
    icon: BookOpen,
    category: 'library',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    title: 'Smart Classrooms',
    description: 'Technology-enabled learning environments',
    icon: Monitor,
    category: 'classrooms',
    image: 'https://images.pexels.com/photos/8471929/pexels-photo-8471929.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-indigo-500 to-indigo-700'
  }
];

const features = [
  {
    icon: Star,
    title: 'Excellence in Education',
    description: 'CBSE affiliated curriculum with focus on holistic development'
  },
  {
    icon: Award,
    title: 'Experienced Faculty',
    description: 'Qualified and dedicated teachers committed to student success'
  },
  {
    icon: Heart,
    title: 'Nurturing Environment',
    description: 'Safe and supportive atmosphere for learning and growth'
  },
  {
    icon: Target,
    title: 'Individual Attention',
    description: 'Small class sizes ensuring personalized learning experience'
  }
];

const stats = [
  { number: '25+', label: 'Years of Excellence' },
  { number: '2000+', label: 'Happy Students' },
  { number: '100+', label: 'Qualified Teachers' },
  { number: '95%', label: 'Success Rate' }
];

  const contactInfo = [
    {
      title: 'Branch 1 - Main Campus',
      icon: MapPin,
      details: [
        { icon: MapPin, text: 'Mini Talkies Road, Satyam Vihar Colony, Changurabhata, Raipur, Chhattisgarh 492013' },
        { icon: Phone, text: '7805992001 | 7805992004' },
        { icon: Clock, text: 'Mon-Sat: 8:00 AM - 4:00 PM' }
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Branch 2 - City Campus',
      icon: MapPin,
      details: [
        { icon: MapPin, text: 'Shanti Chowk, Purani Basti, Raipur, Chhattisgarh 492001' },
        { icon: Phone, text: '7805992001 | 7805992003' },
        { icon: Clock, text: 'Mon-Sat: 8:00 AM - 4:00 PM' }
      ],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Quick Contact',
      icon: MessageCircle,
      details: [
        { icon: Mail, text: 'pdps.school@gmail.com' },
        { icon: Globe, text: 'www.padmadevischool.edu.in' },
        { icon: MessageCircle, text: 'WhatsApp: 7805992001' }
      ],
      color: 'from-purple-500 to-violet-500'
    }
  ];
    // --- Data for Slideshow ---
// I've chosen images and text that evoke a sense of learning, community, and growth.
// You can easily replace these URLs and text with your own.
{/* DESKTOP SLIDESHOW */}
const slides = [
  {
    img: 'https://res.cloudinary.com/dtwsktjgj/image/upload/v1752407833/IMG-20250709-WA0017_gc1b6s.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    img: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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


function HomePage() {
  const [index, setIndex] = useState(0);
const [imageLoaded, setImageLoaded] = useState(true); // Controls when to show animation

useEffect(() => {
  setImageLoaded(false);
  const img = new Image();
  img.src = slides[index].img;
  img.onload = () => setImageLoaded(true);
  img.onerror = () => {
    console.warn('Image failed to load:', slides[index].img);
    setImageLoaded(true);
  };
}, [index]);

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
  
  {/* MOBILE SLIDESHOW */}
<div className="md:hidden relative w-full h-[70vh] overflow-hidden">
  <AnimatePresence>
    {imageLoaded && (
      <motion.div
        key={index}
        initial={currentAnimation.initial}
        animate={currentAnimation.animate}
        exit={currentAnimation.exit}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={currentSlide.img}
          alt="Slide"
          className="object-cover w-full h-full"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <IconComponent className="text-white mb-3 w-10 h-10" />
          <h2 className="text-white text-2xl font-bold mb-2 leading-tight">
            {currentSlide.headline}
          </h2>
          <p className="text-blue-100 text-sm max-w-xs">
            {currentSlide.subheadline}
          </p>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</div>

  return (
    <div className="overflow-x-hidden">

{/* Hero Section */}
<section className="min-h-screen flex items-center justify-center bg-black text-white text-center relative overflow-hidden">
  {/* Preloaded background image with fade animation */}
  <AnimatePresence initial={false}>
    {imageLoaded && (
      <motion.div
        key={index}
        className="absolute inset-0 z-0"
        variants={imageVariants.fade}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${currentSlide.img})`,
          }}
        />
      </motion.div>
    )}
  </AnimatePresence>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60 z-10" />

  {/* Content */}
  <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6">
    <motion.div
      key={`content-${index}`}
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
        <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 text-sm sm:text-base rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
          Apply for Admission
        </button>
        <button className="border-2 border-white text-white px-8 py-3 text-sm sm:text-base rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300">
          Take a Virtual Tour
        </button>
      </div>
    </motion.div>
  </div>

  {/* Slideshow Indicators */}
  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
    {slides.map((_, i) => (
      <button
        key={i}
        onClick={() => setIndex(i)}
        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
          index === i ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
        }`}
        aria-label={`Go to slide ${i + 1}`}
      />
    ))}
  </div>
</section>

{/* Stats */}
<section className="py-16 bg-white">
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center max-w-6xl mx-auto px-4">
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <h3 className="text-3xl sm:text-4xl font-bold text-primary-600">
          {stat.number}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 font-medium mt-2">
          {stat.label}
        </p>
      </motion.div>
    ))}
  </div>
</section>

{/* Features */}
<section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-4">
  <div className="text-center mb-12 sm:mb-16">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
      Why Choose <span className="text-primary-600">Padma Devi Public School?</span>
    </h2>
    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
      We provide comprehensive education that prepares students for success in academics and life.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
    {features.map((feature, index) => (
      <motion.div
        key={index}
        className="bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <div className="bg-primary-600 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg mb-4">
          {React.createElement(feature.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6' })}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
      </motion.div>
    ))}
  </div>
</section>

{/* Gallery */}
<section className="py-16 sm:py-20 bg-white px-4">
  <div className="text-center mb-12 sm:mb-16">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
      Explore Our <span className="text-primary-600">Facilities</span>
    </h2>
    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
      Discover our world-class facilities designed to provide the best learning environment
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
    {galleryCards.map((card, index) => (
      <motion.div
        key={index}
        className="group rounded-2xl overflow-hidden shadow-lg relative cursor-pointer hover:shadow-xl transition-all"
        whileHover={{ y: -8 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <Link to={`/gallery/${card.category}`}>
          <div className="relative aspect-[4/3]">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-70`} />
            <div className="absolute bottom-0 p-4 text-white z-10">
              <div className="w-10 h-10 bg-white/30 flex items-center justify-center rounded-lg mb-2">
                {React.createElement(card.icon, { className: 'w-5 h-5 text-white' })}
              </div>
              <h3 className="text-lg sm:text-xl font-bold">{card.title}</h3>
              <p className="text-sm text-white/90 hidden sm:block">{card.description}</p>
              <div className="mt-2 flex items-center gap-2 text-sm">
                <span>View Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    ))}
  </div>
</section>

{/* WhatsApp & Contact Section */}

</div>
  );
};

export default HomePage;
