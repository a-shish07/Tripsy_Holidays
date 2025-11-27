import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useAnimation, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { BookingContext } from '../App';

const heroConfigs = [
  { 
    category: 'Domestic', 
    eyebrow: 'Domestic Highlights', 
    secondaryLabel: 'Browse Domestic', 
    browseHref: '/packages/domestic',
    icon: '🏔️',
    gradient: 'from-blue-400 to-cyan-500'
  },
  { 
    category: 'International', 
    eyebrow: 'International Luxury', 
    secondaryLabel: 'Browse International', 
    browseHref: '/packages/international',
    icon: '✈️',
    gradient: 'from-purple-500 to-pink-500'
  },
  { 
    category: 'Spiritual', 
    eyebrow: 'Sacred Journeys', 
    secondaryLabel: 'View Spiritual Tours', 
    browseHref: '/services',
    icon: '🕉️',
    gradient: 'from-amber-500 to-orange-500'
  }
];

const imageSlides = [
  {
    image: '/assests/A serene beach scene with turquoise waters, lush greenery, and majestic cliffs in the video.jpg',
    title: 'Your Journey',
    subtitle: 'Begins Here',
    description: "Discover the world's most breathtaking destinations with our curated travel experiences",
    location: 'Bali, Indonesia',
    duration: '7 Days',
    price: '$1,299'
  },
  {
    image: '/assests/Breathtaking Nature Landscape Image Ideas.jpg',
    title: 'Your Journey',
    subtitle: 'Awaits',
    description: 'Create unforgettable memories with personalized travel packages designed just for you',
    location: 'Swiss Alps, Switzerland',
    duration: '5 Days',
    price: '$1,899'
  },
  {
    image: '/assests/Breathtaking Nature Scenery Landscape Image.jpg',
    title: 'Your Journey',
    subtitle: 'Unfolds',
    description: 'Experience the magic of travel with expert guidance and seamless planning',
    location: 'Santorini, Greece',
    duration: '6 Days',
    price: '$1,599'
  }
];

const heroStats = [
  { label: 'Journeys Crafted', value: '25K+', icon: '🎯' },
  { label: 'Global Destinations', value: '50+', icon: '🌍' },
  { label: 'Traveler Rating', value: '4.9/5', icon: '⭐' },
];

// Floating particles component
const FloatingParticles = ({ count = 15 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, -30, 0],
            x: [null, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default function HeroSectionPro() {
  const navigate = useNavigate();
  const { openBookingForm } = useContext(BookingContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const progressControls = useAnimation();
  const containerRef = useRef(null);
  const ariaLiveRef = useRef(null);

  // Enhanced auto-play with progress animation
  useEffect(() => {
    if (reducedMotion || isPaused || imageSlides.length === 0) return;

    const run = async () => {
      await progressControls.start({ 
        width: '100%' 
      }, { 
        duration: 5, 
        ease: 'linear' 
      });
      
      setActiveIndex((i) => (i + 1) % imageSlides.length);
      await progressControls.set({ width: '0%' });
    };

    run();
    const interval = setInterval(run, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, reducedMotion, progressControls]);

  // Enhanced blob animations with 3D effect
  const blobVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 15, 0],
      rotate: [0, 5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const secondBlobVariants = {
    animate: {
      y: [0, 25, 0],
      x: [0, -15, 0],
      rotate: [0, -3, 0],
      scale: [1, 1.08, 1],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      className="relative overflow-hidden pt-16 pb-10 lg:pb-16 min-h-screen flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured travel experiences"
    >
      {/* Enhanced Animated Background Elements */}
      <FloatingParticles count={20} />
      
      <motion.div
        variants={reducedMotion ? {} : blobVariants}
        animate="animate"
        className="absolute -left-32 top-2 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/20 to-accent/30 blur-3xl pointer-events-none"
        aria-hidden
      />

      <motion.div
        variants={reducedMotion ? {} : secondBlobVariants}
        animate="animate"
        className="absolute -right-32 bottom-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-secondary/20 to-purple-500/20 blur-3xl pointer-events-none"
        aria-hidden
      />

      {/* New: Animated grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,currentColor_25px),linear-gradient(transparent_24px,currentColor_25px)] bg-[size:25px_25px]"></div>
      </div>

      <div className="relative z-10 px-3 sm:px-4 md:px-6 lg:px-8 w-full">
        <div className="grid items-center gap-4 lg:grid-cols-2 xl:grid-cols-[1.1fr_0.9fr]">
          {/* Enhanced Content Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative rounded-3xl border border-black/20 bg-white/90 p-6 md:p-8 lg:p-9 shadow-2xl backdrop-blur-xl space-y-4"
            role="group"
            aria-labelledby="hero-heading-pro"
          >
            {/* Enhanced badge with shine effect */}
            <motion.div 
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-accent px-4 py-2 shadow-lg relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] shine-animation" />
              <span className="text-base">✨</span>
              <span className="text-xs font-bold text-white tracking-tight">CURATED JOURNEYS</span>
            </motion.div>

            <div className="space-y-3">
              <h1 id="hero-heading-pro" className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-snug tracking-tight">
                <motion.span 
                  className="block tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {imageSlides[activeIndex].title}
                </motion.span>
                <motion.span 
                  className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {imageSlides[activeIndex].subtitle}
                </motion.span>
              </h1>

              <motion.p 
                className="text-lg md:text-xl text-slate-600 max-w-prose leading-snug tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {imageSlides[activeIndex].description}
              </motion.p>
            </div>

            {/* Enhanced category buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {heroConfigs.map((c, index) => (
                <motion.button
                  key={c.category}
                  onClick={() => navigate(c.browseHref)}
                  className={`group relative rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/20 overflow-hidden`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <span className="text-xl mb-1 block">{c.icon}</span>
                  <p className="text-xs uppercase tracking-tight text-slate-500 font-semibold mb-1">{c.eyebrow}</p>
                  <p className="font-display text-base font-semibold text-slate-900 tracking-tight group-hover:text-primary transition-colors">
                    {c.category}
                  </p>
                </motion.button>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  onClick={openBookingForm} 
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Start Your Journey 
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => navigate('/packages')} 
                  className="w-full sm:w-auto border-2 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  Explore Packages
                </Button>
              </motion.div>
            </div>

            {/* Enhanced Stats */}
            <motion.div 
              className="grid gap-3 border-t border-slate-200 pt-3 sm:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              {heroStats.map((s, index) => (
                <motion.div 
                  key={s.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="text-2xl mb-0.5">{s.icon}</div>
                  <p className="font-display text-2xl font-black text-slate-900 tracking-tight">{s.value}</p>
                  <p className="text-sm uppercase tracking-tight text-slate-500 font-semibold">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Image Carousel */}
          <motion.div 
            className="relative"
            ref={containerRef}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 blur-3xl opacity-60 pointer-events-none" />
            
            <div className="relative overflow-hidden rounded-3xl border-2 border-black/40 bg-white/60 shadow-2xl backdrop-blur-lg group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={imageSlides[activeIndex].image}
                  initial={{ opacity: 0, scale: 1.1, rotateY: 5 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.95, rotateY: -5 }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                  className="relative"
                >
                  <img
                    src={imageSlides[activeIndex].image}
                    alt={`${imageSlides[activeIndex].title} ${imageSlides[activeIndex].subtitle}`}
                    className="h-[500px] w-full object-cover md:h-[580px] select-none group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                    decoding="async"
                    draggable={false}
                  />

                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Enhanced info panel */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute bottom-4 left-4 right-4 rounded-2xl border border-black/30 bg-white/95 p-5 backdrop-blur-md shadow-2xl"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase tracking-tight text-primary font-bold bg-primary/10 px-2.5 py-0.5 rounded-full">
                        Featured Escape
                      </span>
                      <div className="flex items-center gap-3 text-sm text-slate-600 tracking-tight">
                        <span>📍 {imageSlides[activeIndex].location}</span>
                        <span>⏱️ {imageSlides[activeIndex].duration}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-1">
                      {imageSlides[activeIndex].title} {imageSlides[activeIndex].subtitle}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-slate-600 leading-snug flex-1 tracking-tight">
                        {imageSlides[activeIndex].description}
                      </p>
                      <motion.span 
                        className="ml-3 text-xl font-black text-primary bg-primary/10 px-3 py-1.5 rounded-xl tracking-tight"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                      >
                        {imageSlides[activeIndex].price}
                      </motion.span>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Enhanced progress indicator */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="w-3/4 rounded-full h-1.5 bg-white/40 overflow-hidden backdrop-blur-sm">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: '0%' }}
                    animate={progressControls}
                    style={{ width: '0%' }}
                  />
                </div>
                <div className="text-xs text-white font-semibold tracking-tight bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
                  {activeIndex + 1}/{imageSlides.length}
                </div>
              </div>

              {/* Enhanced navigation dots */}
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {imageSlides.map((slide, i) => (
                  <motion.button
                    aria-label={`Go to slide ${i + 1}`}
                    key={slide.image}
                    onClick={() => {
                      setActiveIndex(i);
                      progressControls.set({ width: '0%' });
                    }}
                    className={`rounded-full transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-white/50 ${
                      i === activeIndex 
                        ? 'w-7 h-2.5 bg-white shadow-lg' 
                        : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              {/* Navigation arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <motion.button
                  onClick={() => setActiveIndex((i) => (i - 1 + imageSlides.length) % imageSlides.length)}
                  className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors focus:outline-none focus:ring-4 focus:ring-white/50"
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ←
                </motion.button>
                <motion.button
                  onClick={() => setActiveIndex((i) => (i + 1) % imageSlides.length)}
                  className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors focus:outline-none focus:ring-4 focus:ring-white/50"
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  →
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .shine-animation {
          animation: shine 3s infinite;
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}