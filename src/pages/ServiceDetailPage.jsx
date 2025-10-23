import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import ServicesSection from '../sections/ServicesSection';
import CallToActionSection from '../sections/CallToActionSection';

const serviceDetails = {
  'domestic-tours': {
    title: 'Domestic Tours',
    icon: '🇮🇳',
    description: 'Explore the rich heritage and diverse landscapes of India with our curated domestic tour packages.',
    features: [
      'Customized itineraries tailored to your preferences',
      'Expert local guides with deep knowledge',
      'Comfortable accommodations in handpicked locations',
      'All transportation and logistics arranged',
      'Exclusive access to hidden gems',
      '24/7 customer support',
    ],
  },
  'international-tours': {
    title: 'International Tours',
    icon: '✈️',
    description: 'Experience the wonders of the world with our carefully curated international travel packages.',
    features: [
      'Visa assistance and travel documentation',
      'Multi-country itineraries available',
      'Premium hotel accommodations',
      'International flight bookings',
      'Multilingual guides',
      'Travel insurance included',
    ],
  },
  'spiritual-tours': {
    title: 'Spiritual Tours',
    icon: '🙏',
    description: 'Connect with your inner self through our sacred spiritual journey packages.',
    features: [
      'Guided pilgrimage experiences',
      'Meditation and yoga sessions',
      'Sacred site visits',
      'Spiritual guidance and support',
      'Holistic wellness programs',
      'Accommodation near holy places',
    ],
  },
  'corporate-travels': {
    title: 'Corporate Travels',
    icon: '💼',
    description: 'Seamless corporate travel solutions for your business needs and team outings.',
    features: [
      'Group travel arrangements',
      'Team building experiences',
      'Business meeting facilities',
      'Flexible scheduling',
      'Cost-effective packages',
      'Dedicated corporate support',
    ],
  },
  'fixed-departure': {
    title: 'Fixed Departure Tours',
    icon: '📅',
    description: 'Join scheduled group tours departing on fixed dates with like-minded travelers.',
    features: [
      'Guaranteed departures',
      'Group discounts',
      'Social travel experience',
      'Predetermined itineraries',
      'Budget-friendly pricing',
      'Meet fellow travelers',
    ],
  },
  'hotel-booking': {
    title: 'Hotel Booking',
    icon: '🏨',
    description: 'Book premium accommodations worldwide with exclusive rates and deals.',
    features: [
      'Wide range of hotels',
      'Best price guarantee',
      'Instant confirmation',
      'Free cancellation',
      'Loyalty rewards',
      'Special packages available',
    ],
  },
  'air-ticketing': {
    title: 'Air Ticketing',
    icon: '🎫',
    description: 'Convenient flight bookings with competitive fares and flexible options.',
    features: [
      'Domestic and international flights',
      'Competitive pricing',
      'Multiple airlines',
      'Flexible booking options',
      'Last-minute deals',
      'Travel insurance add-ons',
    ],
  },
  'adventure-tours': {
    title: 'Adventure Tours',
    icon: '🏔️',
    description: 'Thrilling adventures for adrenaline seekers and outdoor enthusiasts.',
    features: [
      'Trekking expeditions',
      'Water sports activities',
      'Mountain climbing',
      'Safety equipment provided',
      'Expert adventure guides',
      'All-inclusive packages',
    ],
  },
  'honeymoon-packages': {
    title: 'Honeymoon Packages',
    icon: '💑',
    description: 'Romantic getaways designed for couples to create unforgettable memories.',
    features: [
      'Romantic destinations',
      'Couples spa treatments',
      'Private dinners',
      'Luxury accommodations',
      'Personalized itineraries',
      'Special honeymoon amenities',
    ],
  },
};

function ServiceDetailPage() {
  return (
    <div className="space-y-0">
      <Container className="bg-gradient-to-b from-white/5 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <SectionHeading
            eyeline="Our Expertise"
            title={
              <>
                Services designed for <span className="text-ocean">every traveler</span>
              </>
            }
            subtitle="From meticulous domestic explorations to international adventures, spiritual journeys, and specialized travel needs—we've crafted services that transcend ordinary tourism"
          />
        </motion.div>
      </Container>

      <div className="border-t border-white/10" />

      <ServicesSection />

      <div className="border-t border-white/10" />

      <Container className="bg-gradient-to-b from-transparent to-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Why Choose Tripsy?</p>
            <h3 className="font-display text-3xl md:text-4xl text-white">
              Your complete travel partner
            </h3>
            <p className="text-lg text-white/70">
              Whether you need comprehensive package tours, specialized services, or bespoke experiences, our team handles every detail with precision and care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'End-to-End Support', desc: 'From planning to post-trip, we\'re with you every step' },
              { title: 'Expert Guides', desc: 'Local knowledge combined with international standards' },
              { title: 'Seamless Experience', desc: 'All logistics handled so you can focus on memories' },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
              >
                <h4 className="font-display text-xl text-white mb-3">{item.title}</h4>
                <p className="text-sm text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>

      <div className="border-t border-white/10" />

      <CallToActionSection />
    </div>
  );
}

export default ServiceDetailPage;
