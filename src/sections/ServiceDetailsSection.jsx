import React, { useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { packages } from '../data/packages';

/**
 * Enhanced ServiceDetailsSection
 * - Premium 3D tilt effects with glow
 * - Advanced staggered animations
 * - Interactive hover states
 * - Professional glass morphism design
 * - Enhanced accessibility and performance
 */

const GRID_VARIANTS = {
  hidden: {},
  show: { 
    transition: { 
      staggerChildren: 0.12,
      delayChildren: 0.1
    } 
  },
};

const CARD_VARIANTS = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    scale: 0.95,
    rotateX: 5 
  },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    rotateX: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94],
      scale: { duration: 0.6 }
    } 
  },
};

// Floating elements for background
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-gradient-to-r from-primary/10 to-accent/10"
        style={{
          width: Math.random() * 120 + 40,
          height: Math.random() * 120 + 40,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, Math.random() * 20 - 10, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: Math.random() * 4 + 3,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

export default function ServiceDetailsSection() {
  const navigate = useNavigate();
  const prefersReduced = useReducedMotion();
  const cardRefs = useRef({});
  const [hoveredCard, setHoveredCard] = useState(null);

  // Enhanced sample picks with fallbacks
  const domesticSample = packages.find(p => p.category === 'Domestic' && p.id === 1) || packages.find(p => p.category === 'Domestic') || {};
  const internationalSample = packages.find(p => p.category === 'International' && p.id === 13) || packages.find(p => p.category === 'International') || {};
  const spiritualSample = packages.find(p => p.category === 'Spiritual' && p.id === 19) || packages.find(p => p.category === 'Spiritual') || {};

  const services = useMemo(() => ([
    {
      id: 1,
      title: domesticSample?.name || 'Domestic Tours',
      eyebrow: 'Popular Package',
      description: domesticSample?.description || 'Discover the hidden gems of India with expertly crafted domestic tours',
      highlights: domesticSample?.includes?.slice(0, 6) || ['Luxury accommodations', 'Expert local guides', 'Cultural immersion', 'Adventure activities', 'Family-friendly options', 'Gourmet local cuisine'],
      image: domesticSample?.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80',
      icon: '🏔️',
      gradient: 'from-blue-500 to-cyan-600',
      glow: 'rgba(59, 130, 246, 0.15)',
      cta: 'Explore Domestic',
      packageId: domesticSample?.id,
      price: domesticSample?.priceLabel,
      duration: domesticSample?.duration,
      rating: domesticSample?.rating,
      featured: true
    },
    {
      id: 2,
      title: internationalSample?.name || 'International Tours',
      eyebrow: 'Luxury Experience',
      description: internationalSample?.description || 'Embark on extraordinary global adventures with our premium international packages',
      highlights: internationalSample?.includes?.slice(0, 6) || ['5-star accommodations', 'Curated itineraries', 'Visa assistance', 'Private transfers', 'Personal concierge', 'Exclusive experiences'],
      image: internationalSample?.image || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=80',
      icon: '🌍',
      gradient: 'from-purple-500 to-pink-600',
      glow: 'rgba(168, 85, 247, 0.15)',
      cta: 'Discover Global',
      packageId: internationalSample?.id,
      price: internationalSample?.priceLabel,
      duration: internationalSample?.duration,
      rating: internationalSample?.rating,
      featured: true
    },
    {
      id: 3,
      title: spiritualSample?.name || 'Spiritual Tours',
      eyebrow: 'Sacred Journey',
      description: spiritualSample?.description || 'Connect with your inner self through transformative spiritual journeys',
      highlights: spiritualSample?.includes?.slice(0, 6) || ['Sacred temple visits', 'Peaceful accommodations', 'Ayurvedic meals', 'Guided meditation', 'Small intimate groups', 'Spiritual ceremonies'],
      image: spiritualSample?.image || 'https://images.unsplash.com/photo-1545043666-a70bdf26b84f?auto=format&fit=crop&w=1400&q=80',
      icon: '🙏',
      gradient: 'from-amber-500 to-orange-600',
      glow: 'rgba(245, 158, 11, 0.15)',
      cta: 'Begin Journey',
      packageId: spiritualSample?.id,
      price: spiritualSample?.priceLabel,
      duration: spiritualSample?.duration,
      rating: spiritualSample?.rating,
      featured: false
    },
  ]), [domesticSample, internationalSample, spiritualSample]);

  // Enhanced tilt handlers with glow effects
  const handlePointerMove = (e, id) => {
    if (prefersReduced) return;
    const el = cardRefs.current[id];
    if (!el) return;
    
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    
    const rotateY = (px - 0.5) * 10;
    const rotateX = -(py - 0.5) * 8;
    const translateX = (px - 0.5) * 8;
    const translateY = (py - 0.5) * 8;
    
    el.style.setProperty('--rx', `${rotateX}deg`);
    el.style.setProperty('--ry', `${rotateY}deg`);
    el.style.setProperty('--tx', `${translateX}px`);
    el.style.setProperty('--ty', `${translateY}px`);
    el.style.setProperty('--s', '1.03');
    el.style.setProperty('--glow', '8px');
    
    setHoveredCard(id);
  };

  const handlePointerLeave = (id) => {
    const el = cardRefs.current[id];
    if (!el) return;
    
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--tx', '0px');
    el.style.setProperty('--ty', '0px');
    el.style.setProperty('--s', '1');
    el.style.setProperty('--glow', '0px');
    
    setHoveredCard(null);
  };

  return (
    <Container id="service-details" className="py-6 lg:py-10 relative overflow-hidden">
      <FloatingOrbs />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pointer-events-none" />
      
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeading
          eyeline="Premium Services"
          title={
            <>
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Curated Travel
              </span>{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Experiences
              </span>
            </>
          }
          subtitle="Immerse yourself in meticulously crafted journeys that blend luxury, adventure, and cultural authenticity for unforgettable memories."
          tone="dark"
          alignment="center"
        />
      </motion.div>

      <motion.div
        className="mt-16 grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={prefersReduced ? {} : GRID_VARIANTS}
      >
        {services.map((service, index) => (
          <motion.article
            key={service.id}
            variants={prefersReduced ? {} : CARD_VARIANTS}
            ref={(el) => (cardRefs.current[service.id] = el)}
            onPointerMove={(e) => handlePointerMove(e, service.id)}
            onPointerLeave={() => handlePointerLeave(service.id)}
            onFocus={() => setHoveredCard(service.id)}
            onBlur={() => setHoveredCard(null)}
            className="group relative flex flex-col rounded-3xl border border-gray-700 bg-white/80 shadow-2xl overflow-hidden will-change-transform transform-gpu backdrop-blur-sm hover:backdrop-blur-md transition-all duration-500"
            style={{
              transform: `
                perspective(1200px) 
                translateX(var(--tx, 0)) 
                translateY(var(--ty, 0)) 
                rotateX(var(--rx, 0)) 
                rotateY(var(--ry, 0)) 
                scale(var(--s, 1))
              `,
              boxShadow: `
                0 25px 50px -12px rgba(0, 0, 0, 0.1),
                0 0 0 1px rgba(255, 255, 255, 0.8),
                0 0 var(--glow, 0) ${service.glow}
              `,
            }}
            tabIndex={0}
            aria-labelledby={`service-${service.id}-title`}
          >
            {/* Enhanced gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            
            {/* Image Container with Enhanced Effects */}
            <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                draggable={false}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />

              {/* Enhanced glass badge */}
              <motion.div 
                className="absolute top-5 left-5 inline-flex items-center gap-3 rounded-2xl bg-white/85 px-4 py-2.5 backdrop-blur-md shadow-lg border border-gray-700"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <span className="text-xl">{service.icon}</span>
                <span className="text-sm font-semibold text-slate-700 tracking-wide">{service.eyebrow}</span>
              </motion.div>

              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

              {/* Featured ribbon */}
              {service.featured && (
                <div className="absolute top-5 right-5">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    Featured
                  </div>
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-1 p-7 gap-5 relative z-10">
              {/* Header with enhanced info */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <motion.p 
                    className="text-xs uppercase tracking-widest font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {service.eyebrow}
                  </motion.p>
                  <motion.h3 
                    id={`service-${service.id}-title`}
                    className="mt-3 text-2xl font-display font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {service.title}
                  </motion.h3>
                </div>

                <motion.div 
                  className="hidden sm:flex sm:flex-col sm:items-end sm:gap-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                >
                  {service.duration && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-50/80 px-3 py-1.5 text-sm font-medium text-slate-700 border border-gray-700 backdrop-blur-sm">
                      <span className="text-lg">📅</span>
                      {service.duration}
                    </span>
                  )}
                  {service.price && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 px-3 py-1.5 text-sm font-bold text-amber-700 border border-gray-700">
                      <span className="text-lg">💰</span>
                      {service.price}
                    </span>
                  )}
                </motion.div>
              </div>

              {/* Description */}
              <motion.p 
                className="text-slate-600 leading-relaxed text-[15px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.6 }}
              >
                {service.description}
              </motion.p>

              {/* Enhanced Highlights */}
              <motion.div 
                className="pt-4 border-t border-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.7 }}
              >
                <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full" />
                  Package Highlights
                </p>
                <ul className="grid grid-cols-1 gap-2.5">
                  {service.highlights.slice(0, 4).map((highlight, idx) => (
                    <motion.li 
                      key={highlight}
                      className="flex items-center gap-3 text-sm text-slate-700 p-2 rounded-xl border border-gray-700 hover:bg-slate-50/50 transition-colors duration-200"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.7 + idx * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="font-medium">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Enhanced Footer with CTA */}
              <div className="mt-6 flex items-center justify-between gap-4 pt-4 border-t border-gray-700">
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.9 }}
                >
                  {service.rating && (
                    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-2xl px-3 py-1.5 border border-gray-700 shadow-sm">
                      <div className="flex items-center gap-1">
                        {[1,2,3,4,5].map((star) => (
                          <span 
                            key={star}
                            className={`text-sm ${star <= Math.floor(service.rating) ? 'text-amber-400' : 'text-slate-300'}`}
                          >
                            ⭐
                          </span>
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-slate-800">{service.rating}</span>
                    </div>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 1.0, type: "spring", stiffness: 400 }}
                  className="flex-shrink-0"
                >
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      background: `linear-gradient(135deg, var(--primary), var(--accent))`
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    onClick={() => service.packageId && navigate(`/package/${service.packageId}`)}
                    className="inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-3.5 bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 group/btn border border-gray-700"
                  >
                    <span>{service.cta}</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                      className="group-hover/btn:translate-x-1 transition-transform duration-200"
                    >
                      →
                    </motion.span>
                  </motion.button>
                </motion.div>
              </div>
            </div>

            {/* Enhanced hover glow effect */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${service.glow}, transparent 40%)`,
              }}
            />
          </motion.article>
        ))}
      </motion.div>

      {/* View All CTA */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <Button
          variant="outline"
          size="lg"
          onClick={() => navigate('/packages')}
          className="rounded-2xl border-2 border-gray-700 bg-white/80 backdrop-blur-sm hover:bg-primary/5 hover:border-gray-700 transition-all duration-300 px-8 py-4"
        >
          <span className="flex items-center gap-3 text-lg font-semibold">
            View All Packages
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </span>
        </Button>
      </motion.div>
    </Container>
  );
}