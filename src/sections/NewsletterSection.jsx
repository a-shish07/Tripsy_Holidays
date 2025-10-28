import { motion } from 'framer-motion';
import Container from '../components/Container';
import Button from '../components/Button';

function NewsletterSection() {
  return (
    <Container className="relative py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 to-white/5 px-8 py-16 text-center shadow-lg backdrop-blur md:px-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ocean/5 to-primary/5 opacity-50" />
        
        <div className="relative space-y-8">
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-ocean/30 bg-ocean/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-ocean font-semibold"
          >
            <span className="text-lg">✉️</span> Stay Updated
          </motion.span>

          <div className="space-y-4">
            <h3 className="font-display text-4xl md:text-5xl text-white font-bold">
              Travel Tips & Exclusive Offers
            </h3>
            <p className="text-lg text-white/70 leading-relaxed">
              Subscribe to receive monthly travel guides, destination highlights, exclusive deals, and early access to special offers and new packages.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 sm:flex-row sm:gap-0 sm:items-center sm:justify-center max-w-2xl mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-l-2xl sm:rounded-l-2xl sm:rounded-r-none border border-white/20 border-r-0 sm:border-r-0 bg-white/10 px-6 py-4 text-base text-white placeholder:text-white/40 outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/40 backdrop-blur"
              required
            />
            <Button
              size="lg"
              className="rounded-r-none sm:rounded-l-none sm:rounded-r-2xl uppercase tracking-[0.3em] font-bold"
            >
              Subscribe
            </Button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xs text-white/50 font-medium"
          >
            ✓ Thoughtful content only  •  ✓ Unsubscribe anytime  •  ✓ No spam guaranteed
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10"
          >
            {[
              { icon: '📬', value: '50k+', label: 'Subscribers' },
              { icon: '⭐', value: '4.8★', label: 'Satisfaction' },
              { icon: '🎁', value: '30%', label: 'Exclusive Deals' },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="text-2xl">{stat.icon}</div>
                <p className="font-display text-xl text-ocean font-bold">{stat.value}</p>
                <p className="text-xs text-white/50 uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
}

export default NewsletterSection;
