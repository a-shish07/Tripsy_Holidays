import { motion } from 'framer-motion';
import BlogSection from '../sections/BlogSection';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

function BlogPage() {
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
            eyeline="Travel Insights"
            title={
              <>
                Stories, tips, and <span className="text-ocean">inspiration</span> for your journey
              </>
            }
            subtitle="Explore expert travel guides, destination highlights, and insider knowledge to make your next adventure unforgettable"
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {['Destination Guides', 'Travel Tips', 'Cultural Stories', 'Adventure'].map((tag) => (
              <button
                key={tag}
                className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.2em] text-white/70 hover:border-white/40 hover:text-white transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>
      </Container>

      <div className="border-t border-white/10" />

      <BlogSection />

      <div className="border-t border-white/10" />

      <Container className="bg-gradient-to-b from-transparent to-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12 text-center"
        >
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Stay Connected</p>
            <h3 className="font-display text-3xl md:text-4xl text-white">
              Never miss travel inspiration
            </h3>
            <p className="text-lg text-white/70">
              Subscribe to receive curated travel insights, exclusive destination guides, and special offers directly in your inbox.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-white/30 focus:outline-none"
            />
            <Button variant="glow" className="uppercase tracking-[0.25em] whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default BlogPage;
