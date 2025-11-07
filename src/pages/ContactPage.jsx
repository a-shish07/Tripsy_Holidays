import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

function ContactPage() {
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
            eyeline="Get in Touch"
            title={
              <>
                Let's craft your <span className="text-ocean">perfect escape</span>
              </>
            }
            subtitle="Our travel artists are here to answer questions and help you design the journey of a lifetime"
          />
        </motion.div>
      </Container>

      <div className="border-t border-white/10" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {[
            { icon: '📞', label: 'Phone', value: '096674 93957', desc: 'Available Mon-Sat, 9AM-7PM' },
            { icon: '✉️', label: 'Email', value: 'hello@trisyholidays.com', desc: 'We respond within 24 hours' },
            { icon: '📍', label: 'Visit Us', value: ': L block, Gaur City 1, Sector 4, Noida, Ghaziabad, Uttar Pradesh 201318', desc: 'Schedule an in-person meeting' },
          ].map((contact) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
            >
              <p className="text-4xl mb-4">{contact.icon}</p>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-2">{contact.label}</p>
              <p className="font-display text-xl text-white mb-2">{contact.value}</p>
              <p className="text-sm text-white/60">{contact.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <Container className="bg-gradient-to-b from-transparent to-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <h3 className="font-display text-2xl text-white mb-8 text-center">Send us a message</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.3em] text-white/60 mb-3">Full Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 transition-colors hover:border-white/20 focus:border-white/40 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.3em] text-white/60 mb-3">Email Address</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 transition-colors hover:border-white/20 focus:border-white/40 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.3em] text-white/60 mb-3">Travel Interests</label>
              <input
                type="text"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 transition-colors hover:border-white/20 focus:border-white/40 focus:outline-none"
                placeholder="e.g., Adventure, Spiritual, Luxury, Family..."
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.3em] text-white/60 mb-3">Message</label>
              <textarea
                rows="6"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 transition-colors hover:border-white/20 focus:border-white/40 focus:outline-none resize-none"
                placeholder="Tell us about your travel dreams and what you're looking for..."
              />
            </div>
            <Button variant="glow" className="w-full uppercase tracking-[0.3em]">
              Send Message
            </Button>
          </form>
          <p className="text-xs text-white/50 text-center mt-6">
            We respect your privacy. Your information will only be used to respond to your inquiry.
          </p>
        </motion.div>
      </Container>
    </div>
  );
}

export default ContactPage;
