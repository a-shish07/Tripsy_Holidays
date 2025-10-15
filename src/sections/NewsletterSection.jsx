import { motion } from 'framer-motion';
import Container from '../components/Container';

function NewsletterSection() {
  return (
    <Container className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/10 bg-white/10 px-8 py-12 text-center shadow-glow backdrop-blur md:px-16"
      >
        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/60">
          Stay Inspired
        </span>
        <h3 className="mt-6 font-display text-3xl text-white">
          Monthly travel mood boards, destination highlights, and secret openings.
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-white/70">
          Subscribe to Tripsy Chronicles and be the first to receive curated stories, seasonal collections, and
          early-access experiences.
        </p>
        <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <input
            type="email"
            placeholder="your.email@example.com"
            className="w-full rounded-full border border-white/20 bg-night/60 px-6 py-3 text-base text-white outline-none transition focus:border-ocean focus:ring focus:ring-ocean/40 sm:max-w-md"
          />
          <button
            type="submit"
            className="rounded-full bg-ocean px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-night transition hover:bg-primary"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-xs text-white/40">
          We promise thoughtful updates only. Unsubscribe anytime.
        </p>
      </motion.div>
    </Container>
  );
}

export default NewsletterSection;