import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { testimonials } from '../data/testimonials';

// Floating particles component
const FloatingParticles = ({ count = 12 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-primary/10 to-accent/10"
          style={{
            width: Math.random() * 60 + 20,
            height: Math.random() * 60 + 20,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 15 - 7.5, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

// Star rating component with animation
const AnimatedStars = ({ rating = 5, size = 'lg' }) => {
  const starSize = size === 'lg' ? 'text-xl' : 'text-lg';
  
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.span
          key={i}
          className={`text-amber-400 ${starSize}`}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: i * 0.1,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ scale: 1.2, rotate: 10 }}
        >
          ★
        </motion.span>
      ))}
      <motion.span 
        className="text-sm ml-2 font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        (5.0)
      </motion.span>
    </div>
  );
};

function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <Container id="testimonials" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Elements */}
      <FloatingParticles />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50/20 pointer-events-none" />
      
      {/* Animated Background Blobs */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-amber-200/30 to-orange-200/20 blur-3xl pointer-events-none"
      />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <SectionHeading
          eyeline="Traveler Stories"
          title={
            <>
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Voices of Our
              </span>{' '}
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                Happy Explorers
              </span>
            </>
          }
          subtitle="Discover why thousands of travelers trust us to create their most memorable journeys. Real stories from real adventurers."
          tone="dark"
          alignment="center"
        />
      </motion.div>

      

      {/* Testimonials Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {testimonials.map((testimonial, index) => (
          <motion.figure
            key={testimonial.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              y: -8,
              scale: 1.02
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative flex h-full flex-col rounded-3xl border border-black/50 bg-white/80 backdrop-blur-sm p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-black/80"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Floating Blob */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.5,
              }}
              className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br from-amber-500/10 to-orange-500/10 blur-xl"
            />

            {/* Header */}
            <div className="relative z-10 mb-6">
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative flex-shrink-0"
                >
                  {/* <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-16 w-16 rounded-2xl border-2 border-black shadow-lg object-cover group-hover:border-amber-300 transition-colors duration-300"
                  /> */}
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="text-white text-xs">⭐</span>
                  </motion.div>
                </motion.div>
                <div className="flex-1">
                  <motion.p 
                    className="font-display text-lg font-bold text-slate-900 group-hover:text-slate-800 transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                  >
                    {testimonial.name}
                  </motion.p>
                  <motion.p 
                    className="text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    📍 {testimonial.location}
                  </motion.p>
                </div>
              </div>
            </div>

            {/* Stars */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.15 + 0.4 }}
            >
              <AnimatedStars size="md" />
            </motion.div>

            {/* Quote */}
            <blockquote className="flex flex-1 flex-col justify-between space-y-6 relative z-10">
              <motion.p 
                className="text-sm leading-relaxed text-slate-600 font-light italic group-hover:text-slate-700 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 + 0.5 }}
              >
                "{testimonial.quote}"
              </motion.p>
              <motion.figcaption 
                className="text-xs uppercase tracking-widest font-semibold text-slate-500 border-t border-slate-200/60 pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.6 }}
              >
                <span className="flex items-center gap-2">
                  <span className="text-amber-500">✈️</span>
                  {testimonial.trip}
                </span>
              </motion.figcaption>
            </blockquote>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-3xl blur-xl" />
            </div>
          </motion.figure>
        ))}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 relative"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl blur-2xl" />
        <div className="relative rounded-3xl border border-black/50 bg-white/80 backdrop-blur-sm p-12 shadow-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm uppercase tracking-widest font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-4"
          >
            ⭐ Guest Satisfaction
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="font-display text-5xl md:text-6xl font-black mb-4"
          >
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              4.9
            </span>
            <span className="text-slate-400">/5</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mb-6"
          >
            <AnimatedStars size="lg" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Based on <span className="font-semibold text-slate-800">5,000+ verified reviews</span> from travelers who have experienced our personalized journeys across 50+ destinations worldwide.
          </motion.p>

          {/* Additional Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-slate-200/60"
          >
            {[
              { value: '98%', label: 'Repeat Travelers' },
              { value: '50+', label: 'Destinations' },
              { value: '24/7', label: 'Support' },
              { value: '4.9/5', label: 'Average Rating' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-600 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
}

export default TestimonialsSection;