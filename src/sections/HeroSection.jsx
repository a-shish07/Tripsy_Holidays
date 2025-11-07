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

const slides = heroConfigs
  .map((config) => {
    const pkg = packages.find((item) => item.category === config.category);
    if (!pkg) {
      return null;
    }

    const tags = (pkg.activities && pkg.activities.length ? pkg.activities : pkg.highlights || []).slice(0, 3);

    return {
      eyebrow: config.eyebrow,
      title: pkg.name,
      highlight: pkg.subcategory || pkg.category,
      description: pkg.description,
      image: pkg.image,
      tags,
      primaryCta: { label: 'View Package', href: `/package/${pkg.id}` },
      secondaryCta: { label: config.secondaryLabel, href: config.browseHref },
      stat: {
        label: 'Verified Reviews',
        value: `${pkg.reviewCount}+`,
        description: `Rated ${pkg.rating}★ by discerning travelers`,
      },
      metrics: [
        {
          icon: '📅',
          label: 'Duration',
          value: pkg.duration || 'Custom',
          description: pkg.bestTime ? `Best time: ${pkg.bestTime}` : 'Flexible schedules',
        },
        {
          icon: '💰',
          label: 'Starting At',
          value: pkg.priceLabel || (pkg.price ? `₹${pkg.price}` : 'On Request'),
          description: 'Per person pricing',
        },
      ],
    };
  })
  .filter(Boolean);

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
    if (isManuallyNavigated || slides.length === 0) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7500);

    return () => clearInterval(interval);
  }, [isManuallyNavigated]);

  const activeSlide = useMemo(() => {
    if (!slides.length) {
      return null;
    }
    return slides[activeIndex % slides.length];
  }, [activeIndex]);

  const handleNavigate = (index) => {
    setIsManuallyNavigated(true);
    setActiveIndex(index);
  };

  return (
    <section className="relative overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-br from-night/90 via-night/80 to-night/60" />
        <div className="absolute -top-40 right-10 h-80 w-80 rounded-full bg-ocean/30 blur-3xl" />
        <div className="absolute -bottom-32 left-10 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      </div>

      <div className="relative z-10 px-4 pb-28 pt-28 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
            <motion.div
              key={activeSlide.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-2xl space-y-8"
            >
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-display font-semibold uppercase tracking-[0.25em] text-ocean"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-ocean" />
                {activeSlide.eyebrow}
              </motion.span>

              <div className="space-y-4">
                <h1 className="font-display text-5xl font-black tracking-tight text-white sm:text-6xl">
                  {activeSlide.title}
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="text-lg font-semibold uppercase tracking-[0.3em] text-ocean"
                >
                  {activeSlide.highlight}
                </motion.p>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
                className="text-lg leading-relaxed text-slate-200"
              >
                {activeSlide.description}
              </motion.p>

              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
                className="flex flex-wrap gap-3"
              >
                {activeSlide.tags.map((tag) => (
                  <motion.li
                    key={tag}
                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-display font-semibold uppercase tracking-[0.25em] text-white/80 shadow-sm"
                  >
                    {tag}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="flex flex-col gap-4 pt-6 sm:flex-row sm:flex-wrap"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => navigate(activeSlide.primaryCta.href)}
                >
                  {activeSlide.primaryCta.label}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-ocean/40 text-slate-100 hover:bg-ocean/10 sm:w-auto"
                  onClick={() => navigate(activeSlide.secondaryCta.href)}
                >
                  {activeSlide.secondaryCta.label}
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={openBookingForm}
                >
                  Book Now
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="relative w-full max-w-xl self-stretch rounded-3xl border border-white/10 bg-night/80 p-8 shadow-[0_30px_70px_rgba(16,28,56,0.45)] backdrop-blur"
            >
              <div className="absolute -top-10 right-6 hidden h-20 w-20 rounded-full bg-gradient-to-br from-ocean/30 to-primary/30 blur-2xl lg:block" />
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.7 }}
                  className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/15 via-white/8 to-ocean/10 p-6 shadow-inner"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70 font-semibold">{activeSlide.stat.label}</p>
                  <p className="mt-3 font-display text-5xl font-black text-white">{activeSlide.stat.value}</p>
                  {activeSlide.stat.description && (
                    <p className="mt-3 text-sm text-white/70">{activeSlide.stat.description}</p>
                  )}
                </motion.div>

                {activeSlide.metrics?.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                  >
                    {activeSlide.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-sm">
                        <div className="flex items-center gap-2">
                          {metric.icon && <span className="text-xl">{metric.icon}</span>}
                          <p className="text-xs uppercase tracking-[0.25em] text-ocean font-semibold">{metric.label}</p>
                        </div>
                        <p className="mt-2 font-display text-2xl font-bold text-white">{metric.value}</p>
                        {metric.description && <p className="mt-1 text-xs text-white/70">{metric.description}</p>}
                      </div>
                    ))}
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.7 }}
                  className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 p-5 shadow-sm"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-ocean font-semibold">Personal Travel Curator</p>
                    <p className="mt-2 text-sm text-white/70">Message our design studio to begin your bespoke itinerary.</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/contact')}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-ocean to-primary text-white shadow-lg"
                  >
                    →
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 flex flex-col items-center gap-6">
            <div className="flex items-center gap-6">
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-night/80 text-white/80 shadow-sm transition hover:border-ocean hover:text-ocean"
                onClick={() => handleNavigate((activeIndex - 1 + slides.length) % slides.length)}
              >
                ←
              </button>
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-night/80 text-white/80 shadow-sm transition hover:border-ocean hover:text-ocean"
                onClick={() => handleNavigate((activeIndex + 1) % slides.length)}
              >
                →
              </button>
            </div>
            <div className="flex gap-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex ? 'w-12 bg-gradient-to-r from-ocean to-primary' : 'w-6 bg-white/20'
                  }`}
                  onClick={() => handleNavigate(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
