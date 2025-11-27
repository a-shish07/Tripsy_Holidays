import { useContext } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { BookingContext } from '../App';
import { imageAssets } from '../data/images';

// Enhanced pillars data with gradients and icons
const pillars = [
  {
    icon: '🎯',
    title: 'Personalized Experiences',
    description: 'Every itinerary is uniquely crafted for you, blending your preferences, passions, and travel pace into one seamless narrative.',
    stats: '98% repeat travelers',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'from-blue-50/80 to-blue-100/40',
    accent: 'text-blue-600',
    borderAccent: 'hover:border-blue-300/60',
    gradient: 'bg-gradient-to-br from-blue-500/5 to-cyan-500/10',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
  },
  {
    icon: '🌐',
    title: 'Trusted Global Network',
    description: 'We partner with handpicked hotels, local guides, and experience creators who share our commitment to excellence.',
    stats: '120+ verified partners',
    color: 'from-emerald-500 to-green-600',
    bgColor: 'from-emerald-50/80 to-emerald-100/40',
    accent: 'text-emerald-600',
    borderAccent: 'hover:border-emerald-300/60',
    gradient: 'bg-gradient-to-br from-emerald-500/5 to-green-500/10',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-green-600',
  },
  {
    icon: '✨',
    title: 'Expert Curation',
    description: 'Our award-winning travel team obsesses over every detail, from local dining to hidden cultural gems, ensuring perfection.',
    stats: 'Award-winning curators',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'from-amber-50/80 to-amber-100/40',
    accent: 'text-amber-600',
    borderAccent: 'hover:border-amber-300/60',
    gradient: 'bg-gradient-to-br from-amber-500/5 to-orange-500/10',
    iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
  },
];

// Floating particles component
const FloatingParticles = ({ count = 12 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-primary/20 to-accent/20"
          style={{
            width: Math.random() * 100 + 30,
            height: Math.random() * 100 + 30,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};

// Animated counter component
const AnimatedCounter = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  const spring = useSpring(rounded, { duration: duration * 1000 });

  React.useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{spring}</motion.span>;
};

function WhyChooseUsSection() {
  const { openBookingForm } = useContext(BookingContext);

  return (
    <Container className="relative overflow-hidden py-2 lg:py-4">
      {/* Background Elements */}
      <FloatingParticles />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pointer-events-none" />
      
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
        className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-200/30 to-cyan-200/20 blur-3xl pointer-events-none"
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

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-20 text-center"
      >
        <SectionHeading
          alignment="center"
          eyeline="Why Choose Tripsy"
          title={
            <>
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                The Tripsy
              </span>{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Difference
              </span>
            </>
          }
          subtitle="Where exceptional service meets unforgettable adventures. Discover why thousands of travelers trust us to transform their travel dreams into reality."
        />
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid gap-16 lg:grid-cols-2 items-center mb-24">
        {/* Enhanced Pillars Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8 relative z-10"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
              className={`group relative rounded-3xl border border-black/50 bg-white/80 backdrop-blur-sm p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-black/80 ${pillar.borderAccent}`}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Floating Blob */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
                className={`absolute -right-8 -top-8 w-32 h-32 rounded-full ${pillar.gradient} blur-xl`}
              />

              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  {/* Enhanced Icon */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0]
                    }}
                    transition={{ 
                      scale: { duration: 0.2 },
                      rotate: { duration: 0.5 }
                    }}
                    className={`flex-shrink-0 w-16 h-16 rounded-2xl ${pillar.iconBg} flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-2xl text-white">{pillar.icon}</span>
                  </motion.div>

                  <div className="flex-1">
                    <motion.p 
                      className={`text-xs uppercase tracking-widest font-bold ${pillar.accent} mb-2`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    >
                      {pillar.stats}
                    </motion.p>
                    <motion.h3 
                      className={`font-display text-2xl font-bold text-slate-900 mb-3 group-hover:${pillar.accent} transition-colors duration-300`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.4 }}
                    >
                      {pillar.title}
                    </motion.h3>
                    <motion.p 
                      className="text-slate-600 leading-relaxed text-[15px]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.5 }}
                    >
                      {pillar.description}
                    </motion.p>
                  </div>
                </div>

                {/* Enhanced Progress Indicator */}
                <motion.div 
                  className="w-full h-1 bg-slate-200 rounded-full overflow-hidden"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.15 + 0.6, duration: 0.8 }}
                >
                  <motion.div
                    className={`h-full bg-gradient-to-r ${pillar.color} rounded-full`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.15 + 0.8, duration: 1 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          {/* Main Image Container */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-black/60 shadow-2xl group">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            <motion.img
              src={imageAssets.whyChooseUs}
              alt="Why Choose Tripsy - Premium Travel Experiences"
              className="w-full h-[500px] object-cover relative z-10 group-hover:scale-105 transition-transform duration-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.2 }}
            />
            
            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent z-20" />

            {/* Floating Info Card */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, -1, 1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-8 right-8 z-30"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-black/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <span className="text-white text-lg">⭐</span>
                  </div>
                  <div>
                    <p className="font-display text-lg font-black text-slate-900">4.9/5</p>
                    <p className="text-xs text-slate-600">Traveler Rating</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Bottom Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-8 left-8 right-8 z-30"
            >
              <div className="rounded-2xl border border-black/40 bg-white/95 backdrop-blur-md p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <span className="text-white text-lg">✨</span>
                  </div>
                  <p className="text-sm uppercase tracking-widest font-bold text-primary">Our Promise</p>
                </div>
                <p className="font-display text-lg text-slate-900 leading-relaxed">
                  Every journey is crafted with passion, executed with precision, and cherished forever.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl"
          />
        </motion.div>
      </div>

      {/* Enhanced Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative mb-16"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl blur-2xl" />
        <div className="relative rounded-3xl border border-black/50 bg-white/80 backdrop-blur-sm p-12 shadow-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { 
                icon: '📞', 
                label: '24/7 Support', 
                desc: 'Always available when you need us', 
                color: 'from-blue-500 to-cyan-600',
                stat: '24/7'
              },
              { 
                icon: '💰', 
                label: 'Best Price Guarantee', 
                desc: 'Transparent pricing with no hidden fees', 
                color: 'from-emerald-500 to-green-600',
                stat: '100%'
              },
              { 
                icon: '🔐', 
                label: '100% Secure', 
                desc: 'Verified and protected bookings', 
                color: 'from-purple-500 to-pink-600',
                stat: 'Secure'
              },
              { 
                icon: '⭐', 
                label: '5-Star Rated', 
                desc: 'Trusted by 4,000+ travelers', 
                color: 'from-amber-500 to-orange-600',
                stat: '4.9/5'
              },
            ].map((feature, idx) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.05
                }}
                className="group relative text-center"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative rounded-2xl border border-black/60 bg-white/90 p-8 backdrop-blur-sm transition-all duration-500 group-hover:shadow-2xl group-hover:border-black/80">
                  {/* Animated Icon */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ 
                      scale: { duration: 0.2 },
                      rotate: { duration: 0.5 }
                    }}
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-2xl text-white">{feature.icon}</span>
                  </motion.div>

                  {/* Stat Number */}
                  <motion.p 
                    className={`text-2xl font-black bg-gradient-to-br ${feature.color} bg-clip-text text-transparent mb-2`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                  >
                    {feature.stat}
                  </motion.p>

                  <p className="font-display text-lg font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                    {feature.label}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button 
            variant="glow" 
            size="xl"
            className="rounded-2xl px-12 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-2xl hover:shadow-3xl transition-all duration-300 uppercase tracking-widest font-bold text-lg"
            onClick={openBookingForm}
          >
            <span className="flex items-center gap-4">
              Start Your Journey
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl"
              >
                ✈️
              </motion.span>
            </span>
          </Button>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-slate-600 text-sm"
        >
          Join 25,000+ satisfied travelers who've experienced the Tripsy difference
        </motion.p>
      </motion.div>
    </Container>
  );
}

export default WhyChooseUsSection;