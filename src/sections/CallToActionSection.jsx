import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

function CallToActionSection() {
  return (
    <Container id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-4xl"
      >
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 to-white/5 p-14 md:p-20 backdrop-blur overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-ocean/15 to-primary/10 opacity-50" />
          <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-ocean/20 blur-3xl opacity-30" />
          <div className="absolute -left-32 -bottom-32 h-72 w-72 rounded-full bg-primary/15 blur-3xl opacity-30" />
          
          <div className="relative space-y-14">
            <SectionHeading
              alignment="center"
              eyeline="Let's Plan Your Adventure"
              title={
                <>
                  Start Your <span className="text-ocean">Perfect Journey</span>
                </>
              }
              subtitle="Tell us about your travel dreams and let our expert team create a bespoke itinerary just for you."
            />

            <form className="space-y-7">
              <div className="grid gap-7 md:grid-cols-2">
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-[0.3em] text-ocean font-bold block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full rounded-2xl border border-white/20 bg-white/12 px-6 py-3.5 text-white placeholder:text-white/40 outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/50 backdrop-blur font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-[0.3em] text-ocean font-bold block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="w-full rounded-2xl border border-white/20 bg-white/12 px-6 py-3.5 text-white placeholder:text-white/40 outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/50 backdrop-blur font-medium"
                  />
                </div>
              </div>

              <div className="grid gap-7 md:grid-cols-2">
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-[0.3em] text-ocean font-bold block">
                    Preferred Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    placeholder="e.g., Maldives, Switzerland, Japan..."
                    className="w-full rounded-2xl border border-white/20 bg-white/12 px-6 py-3.5 text-white placeholder:text-white/40 outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/50 backdrop-blur font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-[0.3em] text-ocean font-bold block">
                    Travel Type *
                  </label>
                  <select className="w-full rounded-2xl border border-white/20 bg-white/12 px-6 py-3.5 text-white outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/50 backdrop-blur font-medium" required>
                    <option value="" className="bg-night">Select travel type</option>
                    <option value="honeymoon" className="bg-night">Honeymoon</option>
                    <option value="family" className="bg-night">Family Trip</option>
                    <option value="adventure" className="bg-night">Adventure</option>
                    <option value="cultural" className="bg-night">Cultural Tour</option>
                    <option value="corporate" className="bg-night">Corporate Travel</option>
                    <option value="other" className="bg-night">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs uppercase tracking-[0.3em] text-ocean font-bold block">
                  Tell Us Your Travel Dreams
                </label>
                <textarea
                  name="details"
                  placeholder="Share your preferences, budget range, travel dates, and any special requirements..."
                  rows={4}
                  className="w-full rounded-2xl border border-white/20 bg-white/12 px-6 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/50 backdrop-blur resize-none font-medium"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-white/10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <p className="text-sm text-white/75 font-medium">
                    ✓ <span className="text-ocean">24 Hour</span> Response Time
                  </p>
                  <p className="text-sm text-white/75 font-medium">
                    ✓ <span className="text-ocean">No Obligation</span> Consultation
                  </p>
                </motion.div>
                <Button size="lg" className="uppercase tracking-[0.3em] font-bold text-base whitespace-nowrap">
                  Plan My Journey
                </Button>
              </div>
            </form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-12 pt-10 border-t border-white/15"
            >
              {[
                { icon: '📞', label: 'Call Us', value: '+91 98765 43210' },
                { icon: '📧', label: 'Email', value: 'info@tripsyholidays.com' },
                { icon: '⏰', label: 'Available', value: '24/7 Open' },
              ].map((contact) => (
                <motion.div 
                  key={contact.label} 
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-3">{contact.icon}</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-semibold mb-1">{contact.label}</p>
                  <p className="text-base text-ocean font-bold">{contact.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}

export default CallToActionSection;
