import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import PackagesSection from '../sections/PackagesSection';

const packageDetails = {
  // Domestic Tours
  'uttarakhand': { name: 'Uttarakhand Packages', category: 'Domestic Tours', description: 'Experience the spiritual and natural beauty of Uttarakhand with adventure and pilgrimage sites.' },
  'himachal': { name: 'Himachal Pradesh Packages', category: 'Domestic Tours', description: 'Explore the pristine valleys and stunning hills of Himachal Pradesh.' },
  'kashmir': { name: 'Kashmir Packages', category: 'Domestic Tours', description: 'Paradise on Earth - experience the breathtaking beauty of Kashmir.' },
  'rajasthan': { name: 'Rajasthan Packages', category: 'Domestic Tours', description: 'Discover the royal heritage and desert beauty of Rajasthan.' },
  'kerala': { name: 'Kerala Packages', category: 'Domestic Tours', description: 'Experience the serene backwaters and tropical charm of Kerala.' },
  'ladakh': { name: 'Ladakh Packages', category: 'Domestic Tours', description: 'Adventure awaits in the high altitude deserts of Ladakh.' },
  'gujarat': { name: 'Gujarat Packages', category: 'Domestic Tours', description: 'Explore the cultural and heritage sites of Gujarat.' },
  'northeast': { name: 'Northeast India Packages', category: 'Domestic Tours', description: 'Discover the untouched beauty of Northeast India.' },
  'goa': { name: 'Goa Packages', category: 'Domestic Tours', description: 'Relax on pristine beaches and enjoy the vibrant culture of Goa.' },
  'lakshadweep': { name: 'Lakshadweep Packages', category: 'Domestic Tours', description: 'Island paradise with crystal clear waters and coral reefs.' },
  'uttar-pradesh': { name: 'Uttar Pradesh Packages', category: 'Domestic Tours', description: 'Spiritual and historical tours including Taj Mahal and sacred sites.' },

  // International Tours
  'bali': { name: 'Bali Packages', category: 'International Tours', description: 'Tropical paradise with temples, beaches, and rich culture.' },
  'andaman': { name: 'Andaman Packages', category: 'International Tours', description: 'Island getaway with pristine beaches and water sports.' },
  'maldives': { name: 'Maldives Packages', category: 'International Tours', description: 'Luxury overwater bungalows and crystal blue waters.' },
  'thailand': { name: 'Thailand Packages', category: 'International Tours', description: 'Land of smiles with temples, beaches, and vibrant nightlife.' },
  'malaysia': { name: 'Malaysia Packages', category: 'International Tours', description: 'Modern cities and natural wonders in Southeast Asia.' },
  'dubai': { name: 'Dubai Packages', category: 'International Tours', description: 'Luxury shopping and desert adventures in the UAE.' },
  'sri-lanka': { name: 'Sri Lanka Packages', category: 'International Tours', description: 'Pearl of the Indian Ocean with tea plantations and beaches.' },
  'bhutan': { name: 'Bhutan Packages', category: 'International Tours', description: 'The land of happiness with stunning monasteries and mountains.' },
  'nepal': { name: 'Nepal Packages', category: 'International Tours', description: 'Adventure and spirituality in the Himalayan kingdom.' },

  // Spiritual Tours
  'kashi': { name: 'Kashi Tour Packages', category: 'Spiritual Tours', description: 'Holy pilgrimage to the sacred city of Varanasi.' },
  'chardham': { name: 'Chardham Yatra', category: 'Spiritual Tours', description: 'The four sacred pilgrimage destinations of Uttarakhand.' },
  'chardham-haridwar': { name: 'Chardham Yatra from Haridwar', category: 'Spiritual Tours', description: 'Sacred pilgrimage starting from the holy city of Haridwar.' },
  'chardham-delhi': { name: 'Chardham Yatra from Delhi', category: 'Spiritual Tours', description: 'Complete pilgrimage package departing from Delhi.' },
  'do-dhaam': { name: 'Do Dhaam Yatra', category: 'Spiritual Tours', description: 'Visit two of the four sacred pilgrimage sites.' },
  'do-dhaam-haridwar': { name: 'Do Dhaam Yatra from Haridwar', category: 'Spiritual Tours', description: 'Two sacred sites pilgrimage from Haridwar.' },
  'do-dhaam-delhi': { name: 'Do Dhaam Yatra from Delhi', category: 'Spiritual Tours', description: 'Two sacred sites pilgrimage from Delhi.' },
  'kedarnath': { name: 'Kedarnath Yatra', category: 'Spiritual Tours', description: 'Sacred pilgrimage to the shrine of Lord Shiva.' },
  'kedarnath-haridwar': { name: 'Kedarnath Yatra from Haridwar', category: 'Spiritual Tours', description: 'Kedarnath pilgrimage starting from Haridwar.' },
  'kedarnath-delhi': { name: 'Kedarnath Yatra from Delhi', category: 'Spiritual Tours', description: 'Kedarnath pilgrimage from Delhi.' },
  'amarnath': { name: 'Amarnath Yatra', category: 'Spiritual Tours', description: 'Famous pilgrimage to the Amarnath cave in Kashmir.' },
  'kailash-mansarovar': { name: 'Kailash Mansarovar Packages', category: 'Spiritual Tours', description: 'Ultimate pilgrimage to Mount Kailash and Lake Mansarovar.' },

  // Helicopter Tours
  'chardham-helicopter': { name: 'Chardham Yatra by Helicopter', category: 'Yatra by Helicopter', description: 'Experience the four sacred sites with helicopter comfort.' },
  'do-dhaam-helicopter': { name: 'Do Dhaam Yatra by Helicopter', category: 'Yatra by Helicopter', description: 'Visit two sacred sites with helicopter convenience.' },
  'amarnath-helicopter': { name: 'Amarnath Yatra by Helicopter', category: 'Yatra by Helicopter', description: 'Amarnath pilgrimage by helicopter for easy accessibility.' },
  'kailash-helicopter': { name: 'Kailash Mansarovar Yatra by Helicopter', category: 'Yatra by Helicopter', description: 'The ultimate pilgrimage experience by helicopter.' },
};

function PackageDetailPage() {
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
            eyeline="Signature Collections"
            title={
              <>
                Curated <span className="text-ocean">travel packages</span> for every journey
              </>
            }
            subtitle="From spiritual pilgrimages to international adventures—each collection is thoughtfully designed to blend immersion, comfort, and unforgettable moments"
          />
        </motion.div>
      </Container>

      <div className="border-t border-black/10" />

      <PackagesSection />

      <div className="border-t border-black/10" />

      <Container className="bg-gradient-to-b from-transparent to-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Customizable', value: 'Every journey tailored to your vision' },
              { label: 'All-Inclusive', value: 'Accommodations, meals, and experiences' },
              { label: 'Expert Curation', value: 'Handpicked stays and exclusive access' },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-black/10 bg-white/5 p-8 text-center"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-3">{item.label}</p>
                <p className="font-display text-xl text-white">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/5 p-12 text-center space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Ready to Plan?</p>
            <h3 className="font-display text-3xl md:text-4xl text-white">
              Craft Your Perfect Escape
            </h3>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our travel artists are ready to transform your dreams into reality. Begin your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="glow" size="lg" className="px-10 uppercase tracking-[0.25em]">
                Start Consultation
              </Button>
              <Button variant="secondary" size="lg" className="px-10 uppercase tracking-[0.25em]">
                View Testimonials
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default PackageDetailPage;
