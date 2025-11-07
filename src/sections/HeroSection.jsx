import { useContext, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { packages } from '../data/packages';
import { BookingContext } from '../App';

const heroConfigs = [
  {
    category: 'Domestic',
    eyebrow: 'Domestic Highlights',
    secondaryLabel: 'Browse Domestic',
    browseHref: '/packages/domestic',
  },
  {
    category: 'International',
    eyebrow: 'International Luxury',
    secondaryLabel: 'Browse International',
    browseHref: '/packages/international',
  },
  {
    category: 'Spiritual',
    eyebrow: 'Sacred Journeys',
    secondaryLabel: 'View Spiritual Tours',
    browseHref: '/services',
  },
];

const imageSlides = [
  {
    image: '/assests/A serene beach scene with turquoise waters, lush greenery, and majestic cliffs in the video.jpg',
    title: 'Your Journey',
    subtitle: 'Begins Here',
    description: 'Discover the world\'s most breathtaking destinations with our curated travel experiences'
  },
  {
    image: '/assests/Breathtaking Nature Landscape Image Ideas.jpg',
    title: 'Your Journey',
    subtitle: 'Awaits',
    description: 'Create unforgettable memories with personalized travel packages designed just for you'
  },
  {
    image: '/assests/Breathtaking Nature Scenery Landscape Image.jpg',
    title: 'Your Journey',
    subtitle: 'Unfolds',
    description: 'Experience the magic of travel with expert guidance and seamless planning'
  }
];

function HeroSection() {
  const navigate = useNavigate();
  const { openBookingForm } = useContext(BookingContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isManuallyNavigated, setIsManuallyNavigated] = useState(false);

  useEffect(() => {
    if (isManuallyNavigated) {
      const timeout = setTimeout(() => setIsManuallyNavigated(false), 6000);
      return () => clearTimeout(timeout);
    }
  }, [isManuallyNavigated]);

  useEffect(() => {
    if (isManuallyNavigated || imageSlides.length === 0) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imageSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isManuallyNavigated]);

  const activeSlide = useMemo(() => {
    if (!imageSlides.length) {
      return null;
    }
    return imageSlides[activeIndex % imageSlides.length];
  }, [activeIndex]);

  const handleNavigate = (index) => {
    setIsManuallyNavigated(true);
    setActiveIndex(index);
  };

  return (
    <section className="relative overflow-hidden h-screen">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeSlide.image}
            src={activeSlide.image}
            alt={activeSlide.title}
            className="h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            key={activeSlide.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-6xl md:text-8xl font-black tracking-tight text-white"
            >
              {activeSlide.title}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-display text-4xl md:text-6xl font-bold text-ocean"
            >
              {activeSlide.subtitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl leading-relaxed text-white/90 max-w-2xl mx-auto"
            >
              {activeSlide.description}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              size="lg"
              className="px-8 py-4 text-lg"
              onClick={openBookingForm}
            >
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10"
              onClick={() => navigate('/packages')}
            >
              Explore Packages
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {imageSlides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              className={`h-3 rounded-full transition-all ${
                index === activeIndex ? 'w-12 bg-white' : 'w-3 bg-white/40'
              }`}
              onClick={() => handleNavigate(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
