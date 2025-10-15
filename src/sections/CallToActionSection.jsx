import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

function CallToActionSection() {
  return (
    <Container id="contact" className="bg-ocean/20 text-night">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-3xl rounded-[3rem] bg-white/80 p-12 text-center shadow-glow backdrop-blur"
      >
        <SectionHeading
          alignment="center"
          eyeline="Plan Your Next Escape"
          title={
            <>
              Let’s co-create your next <span className="text-ocean">signature journey</span>.
            </>
          }
          subtitle="Share your vision, and our travel designers will craft a bespoke itinerary with handpicked experiences and personal touches."
        />
        <form className="mt-10 space-y-6 text-left text-night">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm uppercase tracking-[0.3em] text-night/70">
              Full Name
              <input
                type="text"
                name="name"
                placeholder="Alex Morgan"
                className="w-full rounded-full border border-night/10 bg-white/70 px-5 py-3 text-base text-night outline-none transition focus:border-ocean focus:ring focus:ring-ocean/40"
              />
            </label>
            <label className="space-y-2 text-sm uppercase tracking-[0.3em] text-night/70">
              Email
              <input
                type="email"
                name="email"
                placeholder="alex@example.com"
                className="w-full rounded-full border border-night/10 bg-white/70 px-5 py-3 text-base text-night outline-none transition focus:border-ocean focus:ring focus:ring-ocean/40"
              />
            </label>
          </div>
          <label className="space-y-2 text-sm uppercase tracking-[0.3em] text-night/70">
            Preferred Destination
            <input
              type="text"
              name="destination"
              placeholder="Where do you dream of going?"
              className="w-full rounded-full border border-night/10 bg-white/70 px-5 py-3 text-base text-night outline-none transition focus:border-ocean focus:ring focus:ring-ocean/40"
            />
          </label>
          <label className="space-y-2 text-sm uppercase tracking-[0.3em] text-night/70">
            Travel Details
            <textarea
              name="details"
              placeholder="Tell us about your travel style, celebration, or special requests."
              rows={4}
              className="w-full rounded-3xl border border-night/10 bg-white/70 px-5 py-3 text-base text-night outline-none transition focus:border-ocean focus:ring focus:ring-ocean/40"
            />
          </label>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-night/60">
              Average response time under 24 hours. Our travel artists will reach out with ideas tailored to
              you.
            </p>
            <Button size="lg" className="uppercase tracking-[0.35em]">
              Submit Inquiry
            </Button>
          </div>
        </form>
      </motion.div>
    </Container>
  );
}

export default CallToActionSection;