import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const team = [
    {
      name: 'Aria Sharma',
      role: 'Founder & Chief Travel Curator',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
      bio: 'With 15+ years of luxury travel expertise, Aria founded Tripsy Holidays to reimagine how travelers experience the world.',
    },
    {
      name: 'Marcus Johnson',
      role: 'Experience Designer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'A creative visionary who crafts immersive experiences blending culture, comfort, and adventure.',
    },
    {
      name: 'Priya Desai',
      role: 'Destination Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
      bio: 'Expert navigator of hidden gems and iconic destinations across Asia, Europe, and beyond.',
    },
    {
      name: 'David Chen',
      role: 'Guest Relations Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
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
      <section className="relative min-h-[70vh] overflow-hidden pt-16 md:pt-24">
        <div className="absolute inset-0">
          <div className="absolute right-[-10%] top-14 h-[480px] w-[480px] rounded-full bg-ocean/20 blur-3xl" />
          <div className="absolute left-[-20%] bottom-[-15%] h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl" />
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center space-y-8 max-w-4xl mx-auto"
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-ocean">About Tripsy Holidays</p>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                We Create <span className="text-ocean">Unforgettable Journeys</span>
              </h1>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                At Tripsy Holidays, we believe travel is more than just visiting places—it's about transforming perspectives, 
                building connections, and creating memories that last a lifetime.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 rounded-3xl overflow-hidden border border-white/10 bg-white/5"
            >
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"
                alt="Travel Experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="relative py-20 border-t border-white/10">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-ocean">Our Story</p>
                <h2 className="text-4xl font-display font-bold text-white">From Passion to Purpose</h2>
              </div>
              <p className="text-lg text-white/70 leading-relaxed">
                Founded in 2015, Tripsy Holidays emerged from a simple observation: travelers craved more than itineraries—they 
                wanted stories, authenticity, and personalized attention.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                What started as a small team of five passionate travel enthusiasts has grown into a team of industry experts 
                dedicated to crafting bespoke experiences across 50+ destinations. We've curated over 25,000 journeys, and 
                every single one has shaped who we are.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Today, we continue our mission: to be the bridge between travelers and the world, ensuring that every journey 
                is not just a vacation, but a transformation.
              </p>
              <Button variant="glow" size="lg" className="w-fit uppercase tracking-[0.2em]">
                Start Your Journey
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-3xl overflow-hidden border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
                alt="Team at Work"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="relative py-20 border-t border-white/10">
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
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-display text-2xl text-white mb-3">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
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

      <section className="relative py-20 border-t border-white/10">
        <Container>
          <div className="space-y-12">
            <SectionHeading
              eyeline="Our Journey"
              title="Milestones & Achievements"
              subtitle="A decade of creating extraordinary travel experiences."
            />

            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-ocean via-ocean/50 to-transparent hidden md:block" />

              <div className="space-y-12 md:space-y-16">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}
                  >
                    <div className="hidden md:flex w-1/2" />
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ocean/20 border-2 border-ocean flex items-center justify-center hidden md:flex">
                      <div className="w-3 h-3 rounded-full bg-ocean" />
                    </div>
                    <div className="w-full md:w-1/2 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                      <p className="text-sm uppercase tracking-[0.3em] text-ocean font-bold">{milestone.year}</p>
                      <h3 className="font-display text-2xl text-white mt-2">{milestone.title}</h3>
                      <p className="text-white/70 mt-3">{milestone.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-20 border-t border-white/10">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-primary/20 to-ocean/20 p-12 md:p-20 text-center space-y-8 backdrop-blur">
            <h2 className="font-display text-3xl md:text-5xl text-white font-bold">
              Ready to Transform Your Travel?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Start planning your next unforgettable journey with us today.
            </p>
            <Button variant="glow" size="lg" className="uppercase tracking-[0.2em]">
              Book a Consultation
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default AboutPage;
