import { motion } from 'framer-motion';
import { useState } from 'react';
import TestimonialsSection from '../sections/TestimonialsSection';
import VideoTestimonialsSection from '../sections/VideoTestimonialsSection';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

// Floating particles component
const FloatingParticles = ({ count = 12 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-primary/10 to-accent/10"
          style={{
            width: Math.random() * 40 + 10,
            height: Math.random() * 40 + 10,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            delay: Math.random() * 1,
          }}
        />
      ))}
    </div>
  );
};

// Animated stats counter
const AnimatedCounter = ({ value, duration = 2 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
      viewport={{ once: true }}
    >
      {value}
    </motion.span>
  );
};

function TestimonialsPage() {
  const [activeTab, setActiveTab] = useState('written');

  const stats = [
    { number: '4.9/5', label: 'Average Rating', icon: '⭐' },
    { number: '2,500+', label: 'Verified Travelers', icon: '👥' },
    { number: '50+', label: 'Destinations Covered', icon: '🌍' },
    { number: '98%', label: 'Would Recommend', icon: '💫' },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-amber-50/20 min-h-screen">
      {/* Background Elements */}
      <FloatingParticles />
      
      {/* Animated Background Blobs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-amber-200/30 to-orange-200/20 blur-3xl pointer-events-none"
      />
      
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-200/30 to-green-200/20 blur-3xl pointer-events-none"
      />

      {/* Hero Section */}
      <Container className="pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-accent px-6 py-3 shadow-lg"
          >
            <span className="text-white text-lg">💫</span>
            <span className="text-sm font-bold text-white tracking-widest">GUEST STORIES</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-display font-black leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Journeys That
            </span>{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Transformed Lives
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the authentic experiences and heartfelt stories from travelers who've explored the world with Tripsy Holidays. 
            Real journeys, real transformations.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/60 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <motion.p 
                  className="font-display text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <AnimatedCounter value={stat.number} />
                </motion.p>
                <p className="text-sm text-slate-600 font-semibold mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Testimonial Type Tabs */}
      <Container className="pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="inline-flex rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-2 shadow-lg">
            {[
              { id: 'written', label: 'Written Testimonials', icon: '📝' },
              { id: 'video', label: 'Video Stories', icon: '🎥' },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 rounded-xl px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </Container>

      {/* Testimonials Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {activeTab === 'written' ? <TestimonialsSection /> : <VideoTestimonialsSection />}
      </motion.div>

      {/* CTA Section */}
      <Container className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl border border-black/50 bg-white/80 backdrop-blur-sm p-12 md:p-16 text-center space-y-8 overflow-hidden group">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full -top-48 -left-48" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full -bottom-48 -right-48" />
            </div>

            <div className="relative space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-accent px-6 py-3 shadow-lg"
              >
                <span className="text-white text-lg">✨</span>
                <span className="text-sm font-bold text-white tracking-widest">YOUR STORY MATTERS</span>
              </motion.div>

              <motion.h3 
                className="font-display text-4xl md:text-5xl font-black leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Ready to Create Your
                </span>{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Unforgettable Memory?
                </span>
              </motion.h3>

              <motion.p 
                className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Join thousands of travelers who've discovered the Tripsy difference. Let's craft your next adventure together 
                and create memories that will last a lifetime.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="primary"
                  size="xl"
                  className="rounded-2xl px-12 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-2xl hover:shadow-3xl transition-all duration-300 uppercase tracking-widest font-bold text-lg"
                >
                  <span className="flex items-center gap-4">
                    Plan Your Journey
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ✈️
                    </motion.span>
                  </span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline"
                  size="xl"
                  className="rounded-2xl px-12 py-6 border-2 border-primary/20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 uppercase tracking-widest font-bold text-lg"
                >
                  Schedule Consultation
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-8 pt-8 border-t border-slate-200/60"
            >
              {[
                { icon: '🔒', text: 'Secure Booking' },
                { icon: '⭐', text: '5-Star Service' },
                { icon: '💫', text: 'Personalized Itineraries' },
                { icon: '🌍', text: '50+ Destinations' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold text-sm">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Social Proof Banner */}
      <Container className="pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-black/50 bg-white/80 backdrop-blur-sm p-8 text-center overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative space-y-4">
            <motion.h4 
              className="font-display text-2xl font-black text-slate-900"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Trusted by Travelers Worldwide
            </motion.h4>
            
            <motion.p 
              className="text-slate-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              "Tripsy Holidays turned our dream vacation into reality. The attention to detail and personalized service was beyond our expectations!" 
              <br />
              <span className="font-semibold text-slate-800">- The Sharma Family, Bali 2024</span>
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default TestimonialsPage;