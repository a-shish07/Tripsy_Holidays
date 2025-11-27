import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { BookingContext } from '../App';
import { imageAssets } from '../data/images';

// Floating particles component
const FloatingParticles = ({ count = 15 }) => {
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
            y: [0, -25, 0],
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

function AboutPage() {
  const { openBookingForm } = useContext(BookingContext);
  const [activeValue, setActiveValue] = useState(0);

  const team = [
    {
      name: 'Aria Sharma',
      role: 'Founder & Chief Travel Curator',
      image: imageAssets.team.member1,
      bio: 'With 15+ years of luxury travel expertise, Aria founded Tripsy Holidays to reimagine how travelers experience the world.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Marcus Johnson',
      role: 'Experience Designer',
      image: imageAssets.team.member2,
      bio: 'A creative visionary who crafts immersive experiences blending culture, comfort, and adventure.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Priya Desai',
      role: 'Destination Specialist',
      image: imageAssets.team.member3,
      bio: 'Expert navigator of hidden gems and iconic destinations across Asia, Europe, and beyond.',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      name: 'David Chen',
      role: 'Guest Relations Manager',
      image: imageAssets.team.member4,
      bio: 'Dedicated to ensuring every guest receives personalized attention and unforgettable service.',
      gradient: 'from-emerald-500 to-green-600'
    },
  ];

  const values = [
    {
      icon: '🌍',
      title: 'Responsible Exploration',
      description: 'We partner with local communities to create sustainable travel that respects cultures and environments. Every destination benefits from our ethical tourism practices.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: '✨',
      title: 'Authentic Experiences',
      description: 'Every journey is curated to offer genuine cultural immersion and meaningful connections. No cookie-cutter tours—only bespoke adventures.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: '🎯',
      title: 'Personalized Service',
      description: 'Your preferences shape every detail. We listen, adapt, and deliver your perfect journey. Dedicated support from start to finish.',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: '🛡️',
      title: 'Trust & Transparency',
      description: 'Complete honesty about costs, experiences, and logistics. No hidden fees, no surprises—just straightforward, reliable travel planning.',
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      icon: '🚀',
      title: 'Expert Curation',
      description: 'Our team comprises seasoned travel professionals with deep local knowledge across 50+ destinations worldwide.',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: '❤️',
      title: 'Guest-Centric Approach',
      description: 'Your satisfaction is our priority. 24/7 support, flexible itineraries, and personalized adjustments to match your evolving preferences.',
      gradient: 'from-rose-500 to-pink-600'
    },
  ];

  const milestones = [
    { year: '2015', title: 'Founded', desc: 'Tripsy Holidays begins with a vision for personalized luxury travel', icon: '🚀' },
    { year: '2018', title: '10,000+ Journeys', desc: 'Reach milestone of happy travelers across Asia', icon: '🎯' },
    { year: '2021', title: 'Global Expansion', desc: 'Launch international packages to Europe and beyond', icon: '🌍' },
    { year: '2025', title: 'Industry Leaders', desc: 'Recognized as one of Asia\'s most trusted travel curators', icon: '⭐' },
  ];

  const stats = [
    { number: '25K+', label: 'Journeys Crafted', icon: '✈️' },
    { number: '50+', label: 'Destinations', icon: '🌎' },
    { number: '98%', label: 'Repeat Travelers', icon: '🔄' },
    { number: '4.9/5', label: 'Traveler Rating', icon: '⭐' },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden pt-28 pb-20">
        <FloatingParticles />
        
        {/* Background Blobs */}
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

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative text-center space-y-8 max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-accent px-6 py-3 shadow-lg"
              >
                <span className="text-white text-lg">✨</span>
                <span className="text-sm font-bold text-white tracking-widest">ABOUT TRIPSY HOLIDAYS</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-display font-black leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  We Create
                </span>{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Unforgettable Journeys
                </span>
              </motion.h1>
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At Tripsy Holidays, we believe travel is more than just visiting places—it's about transforming perspectives, 
              building meaningful connections, and creating memories that last a lifetime.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
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
                  <p className="font-display text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.number}
                  </p>
                  <p className="text-sm text-slate-600 font-semibold mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
              className="relative mt-12"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-black/60 shadow-2xl group">
                <img
                  src={imageAssets.about.hero}
                  alt="Travel Experience"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="relative py-20 overflow-hidden">
        <FloatingParticles count={8} />
        
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <motion.p 
                  className="text-sm uppercase tracking-widest font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Our Story
                </motion.p>
                <motion.h2 
                  className="text-4xl md:text-5xl font-display font-black leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    From Passion to
                  </span>{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Purpose
                  </span>
                </motion.h2>
              </motion.div>

              <div className="space-y-6">
                {[
                  "Founded in 2015, Tripsy Holidays emerged from a simple observation: travelers craved more than itineraries—they wanted stories, authenticity, and personalized attention.",
                  "What started as a small team of five passionate travel enthusiasts has grown into a team of industry experts dedicated to crafting bespoke experiences across 50+ destinations. We've curated over 25,000 journeys, and every single one has shaped who we are.",
                  "Today, we continue our mission: to be the bridge between travelers and the world, ensuring that every journey is not just a vacation, but a transformation."
                ].map((text, idx) => (
                  <motion.p 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="text-lg text-slate-600 leading-relaxed"
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="primary"
                    size="lg" 
                    className="rounded-2xl px-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={openBookingForm}
                  >
                    Start Your Journey
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline"
                    size="lg" 
                    className="rounded-2xl px-8 border-2 border-primary/20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    Our Packages
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-black/60 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <img
                  src={imageAssets.about.story}
                  alt="Team at Work"
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                
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
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-black/60">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                        <span className="text-white text-lg">⭐</span>
                      </div>
                      <div>
                        <p className="font-display text-lg font-black text-slate-900">15+ Years</p>
                        <p className="text-sm text-slate-600">Of Travel Excellence</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="relative py-20 overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <SectionHeading
              eyeline="Our Values"
              title={
                <>
                  <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    What
                  </span>{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Drives Us
                  </span>
                </>
              }
              subtitle="Our core principles guide every decision we make and every journey we curate."
              alignment="center"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02
                }}
                className="group relative rounded-3xl border border-black/50 bg-white/80 backdrop-blur-sm p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-black/80"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center shadow-lg mb-6`}
                >
                  <span className="text-2xl text-white">{value.icon}</span>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <motion.h3 
                    className="font-display text-2xl font-black text-slate-900 group-hover:text-slate-800 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {value.title}
                  </motion.h3>
                  <motion.p 
                    className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {value.description}
                  </motion.p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-3xl blur-xl opacity-10`} />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Milestones Section */}
      <section className="relative py-20 overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <SectionHeading
              eyeline="Our Journey"
              title={
                <>
                  <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Milestones &
                  </span>{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Achievements
                  </span>
                </>
              }
              subtitle="A decade of creating extraordinary travel experiences and memorable journeys."
              alignment="center"
            />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent hidden lg:block rounded-full" />

            <div className="space-y-12 lg:space-y-20">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className={`flex ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12`}
                >
                  <div className="hidden lg:flex lg:w-1/2" />
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-black shadow-2xl hidden lg:flex items-center justify-center z-10"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.div 
                      className="text-2xl text-white"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {milestone.icon}
                    </motion.div>
                  </motion.div>

                  {/* Milestone Card */}
                  <motion.div 
                    className="w-full lg:w-1/2 rounded-3xl border border-black/50 bg-white/80 backdrop-blur-sm p-8 transition-all duration-500 hover:shadow-2xl hover:border-black/80 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative space-y-4">
                      <motion.p 
                        className="text-lg uppercase tracking-widest font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {milestone.year}
                      </motion.p>
                      <motion.h3 
                        className="font-display text-2xl lg:text-3xl font-black text-slate-900 group-hover:text-slate-800 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {milestone.title}
                      </motion.h3>
                      <motion.p 
                        className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {milestone.desc}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-black/50 bg-white/80 backdrop-blur-sm p-12 md:p-16 text-center space-y-8 overflow-hidden group"
          >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full -top-48 -left-48" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full -bottom-48 -right-48" />
            </div>

            <div className="relative space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-sm uppercase tracking-widest font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              >
                Your Next Adventure
              </motion.p>
              <motion.h2 
                className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Ready to Transform
                </span>{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Your Travel Journey?
                </span>
              </motion.h2>
            </div>

            <motion.p 
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Start planning your next unforgettable journey with us today. Let our team of experts craft the perfect experience tailored to your dreams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="primary"
                  size="xl"
                  className="rounded-2xl px-12 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-2xl hover:shadow-3xl transition-all duration-300 uppercase tracking-widest font-bold text-lg"
                  onClick={openBookingForm}
                >
                  <span className="flex items-center gap-4">
                    Book Your Consultation
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline"
                  size="xl"
                  className="rounded-2xl px-12 py-6 border-2 border-primary/20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 uppercase tracking-widest font-bold text-lg"
                >
                  Explore Packages
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

export default AboutPage;