import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { BookingContext } from '../App';
import { imageAssets } from '../data/images';
import { FaCheckCircle, FaUsers, FaGlobe, FaHeart } from 'react-icons/fa';

function AboutPage() {
  const { openBookingForm } = useContext(BookingContext);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const team = [
    {
      name: 'Aria Sharma',
      role: 'Founder & Chief Travel Curator',
      image: imageAssets.team.member1,
      bio: 'With 15+ years of luxury travel expertise, Aria founded Tripsy Holidays to reimagine how travelers experience the world.',
    },
    {
      name: 'Marcus Johnson',
      role: 'Experience Designer',
      image: imageAssets.team.member2,
      bio: 'A creative visionary who crafts immersive experiences blending culture, comfort, and adventure.',
    },
    {
      name: 'Priya Desai',
      role: 'Destination Specialist',
      image: imageAssets.team.member3,
      bio: 'Expert navigator of hidden gems and iconic destinations across Asia, Europe, and beyond.',
    },
    {
      name: 'David Chen',
      role: 'Guest Relations Manager',
      image: imageAssets.team.member4,
      bio: 'Dedicated to ensuring every guest receives personalized attention and unforgettable service.',
    },
  ];

  const values = [
    {
      icon: '🌍',
      title: 'Responsible Exploration',
      description: 'We partner with local communities to create sustainable travel that respects cultures and environments.',
    },
    {
      icon: '✨',
      title: 'Authentic Experiences',
      description: 'Every journey is curated to offer genuine cultural immersion and meaningful connections.',
    },
    {
      icon: '🎯',
      title: 'Personalized Service',
      description: 'Your preferences shape every detail. We listen, adapt, and deliver your perfect journey.',
    },
    {
      icon: '🛡️',
      title: 'Trust & Transparency',
      description: 'Complete honesty about costs, experiences, and logistics from start to finish.',
    },
  ];

  const milestones = [
    { year: '2015', title: 'Founded', desc: 'Tripsy Holidays begins with a vision for personalized luxury travel' },
    { year: '2018', title: '10,000+ Journeys', desc: 'Reach milestone of happy travelers across Asia' },
    { year: '2021', title: 'Global Expansion', desc: 'Launch international packages to Europe and beyond' },
    { year: '2025', title: 'Industry Leaders', desc: 'Recognized as one of Asia\'s most trusted travel curators' },
  ];

  return (
    <div className="bg-night">
      <section className="relative min-h-[80vh] overflow-hidden pt-20 md:pt-32 pb-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-[-5%] top-20 h-[600px] w-[600px] rounded-full bg-ocean/15 blur-3xl animate-pulse" />
          <div className="absolute left-[-15%] top-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute right-[5%] bottom-0 h-[400px] w-[400px] rounded-full bg-ocean/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative text-center space-y-10 max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-2"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-ocean/80 font-semibold">About Tripsy Holidays</p>
              <motion.h1 
                className="text-5xl md:text-7xl font-display font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We Create <span className="bg-gradient-to-r from-ocean via-primary to-ocean bg-clip-text text-transparent animate-pulse">Unforgettable Journeys</span>
              </motion.h1>
            </motion.div>

            <motion.p 
              className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              At Tripsy Holidays, we believe travel is more than just visiting places—it's about transforming perspectives, 
              building meaningful connections, and creating memories that last a lifetime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden border border-ocean/30 bg-white/5 group perspective mt-12"
            >
              <img
                src={imageAssets.about.hero}
                alt="Travel Experience"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent" />
              <motion.div
                className="absolute inset-0 border-2 border-ocean/0 group-hover:border-ocean/50 rounded-2xl transition-colors duration-300"
              />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="relative py-24 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>
        <Container>
          <div className="grid md:grid-cols-2 gap-20 items-center">
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
                className="space-y-3"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-ocean/80 font-semibold">Our Story</p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white">From Passion to <span className="text-ocean">Purpose</span></h2>
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
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="text-lg text-white/70 leading-relaxed font-light"
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button 
                  variant="glow" 
                  size="lg" 
                  className="w-fit uppercase tracking-[0.2em] mt-4"
                  onClick={openBookingForm}
                >
                  Start Your Journey
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, rotateY: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ocean/20 to-primary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300" />
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden border border-ocean/30 group-hover:border-ocean/60 transition-colors duration-300">
                <img
                  src={imageAssets.about.story}
                  alt="Team at Work"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/40 via-transparent to-transparent group-hover:from-night/20 transition-all duration-300" />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="relative py-24 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-ocean/5 blur-3xl" />
          <div className="absolute left-1/2 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>
        <Container>
          <SectionHeading
            eyeline="Our Values"
            title="What Drives Us"
            subtitle="Our core principles guide every decision we make and every journey we curate."
          />

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true, margin: '-50px' }}
                className="group relative rounded-2xl border border-ocean/20 hover:border-ocean/50 bg-gradient-to-br from-white/8 to-white/3 p-8 backdrop-blur-md hover:bg-gradient-to-br hover:from-white/12 hover:to-white/6 transition-all duration-300 hover:shadow-xl hover:shadow-ocean/10"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ocean/0 to-primary/0 group-hover:from-ocean/10 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                <div className="relative space-y-4">
                  <motion.div 
                    className="text-6xl mb-4 inline-block p-3 rounded-xl bg-ocean/10 group-hover:bg-ocean/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="font-display text-2xl text-white group-hover:text-ocean transition-colors">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* <section className="relative py-20 border-t border-white/10">
        <Container>
          <SectionHeading
            eyeline="Our Team"
            title="Meet the Visionaries"
            subtitle="Passionate travel experts dedicated to creating your perfect journey."
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-display text-xl text-white">{member.name}</h3>
                  <p className="text-sm uppercase tracking-[0.2em] text-ocean">{member.role}</p>
                  <p className="text-sm text-white/70 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section> */}

      <section className="relative py-24 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute left-1/2 bottom-0 h-96 w-96 rounded-full bg-ocean/5 blur-3xl" />
        </div>
        <Container>
          <div className="space-y-16">
            <SectionHeading
              eyeline="Our Journey"
              title="Milestones & Achievements"
              subtitle="A decade of creating extraordinary travel experiences."
            />

            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-ocean via-ocean/40 to-transparent hidden md:block rounded-full" />

              <div className="space-y-12 md:space-y-20">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-100px' }}
                    className={`flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-0`}
                  >
                    <div className="hidden md:flex w-1/2" />
                    
                    <motion.div 
                      className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-ocean to-primary border-4 border-night/80 flex items-center justify-center hidden md:flex shadow-lg shadow-ocean/20 z-10"
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <motion.div 
                        className="w-4 h-4 rounded-full bg-white"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    <motion.div 
                      className="w-full md:w-1/2 rounded-2xl border border-ocean/30 hover:border-ocean/60 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-10 backdrop-blur-md group hover:bg-gradient-to-br hover:from-white/15 hover:to-white/8 transition-all duration-300 hover:shadow-xl hover:shadow-ocean/20"
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative space-y-3">
                        <motion.p 
                          className="text-lg uppercase tracking-[0.3em] bg-gradient-to-r from-ocean to-primary bg-clip-text text-transparent font-display font-bold"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          {milestone.year}
                        </motion.p>
                        <h3 className="font-display text-2xl md:text-3xl text-white group-hover:text-ocean transition-colors">{milestone.title}</h3>
                        <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">{milestone.desc}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-24 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-ocean/5 via-transparent to-primary/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/4 h-96 w-96 rounded-full bg-ocean/10 blur-3xl" />
          <div className="absolute top-1/2 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl border border-ocean/40 hover:border-ocean/70 bg-gradient-to-br from-white/12 via-white/5 to-primary/10 p-12 md:p-20 text-center space-y-8 backdrop-blur-xl hover:bg-gradient-to-br hover:from-white/16 hover:via-white/8 hover:to-primary/15 transition-all duration-300 hover:shadow-2xl hover:shadow-ocean/20 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-ocean/10 to-transparent rounded-full -top-48 -left-48" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/10 to-transparent rounded-full -bottom-48 -right-48" />
            </div>

            <div className="relative space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-xs uppercase tracking-[0.4em] text-ocean/80 font-semibold"
              >
                Your Next Adventure
              </motion.p>
              <motion.h2 
                className="font-display text-3xl md:text-5xl xl:text-6xl text-white font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your <span className="bg-gradient-to-r from-ocean via-primary to-ocean bg-clip-text text-transparent">Travel Journey?</span>
              </motion.h2>
            </div>

            <motion.p 
              className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
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
              <Button 
                variant="glow" 
                size="lg" 
                className="uppercase tracking-[0.2em] px-10"
                onClick={openBookingForm}
              >
                Book Your Consultation
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="uppercase tracking-[0.2em] px-10"
                onClick={openBookingForm}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

export default AboutPage;
