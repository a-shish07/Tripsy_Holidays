import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { blogPosts } from '../data/blogPosts';
import Button from '../components/Button';

function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts.slice(0, 9)
    : blogPosts.filter(post => post.category === selectedCategory).slice(0, 9);

  return (
    <Container id="blog">
      <div className="mb-16 space-y-6">
        <SectionHeading
          eyeline="Travel Blog & Guides"
          title={
            <>
              Expert Tips, <span className="text-ocean">Destination Guides</span> & Travel Stories
            </>
          }
          subtitle="Discover insider knowledge, travel hacks, and inspiring stories from our curated travel experiences around the world."
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl space-y-4 rounded-2xl border border-white/10 bg-gradient-to-r from-ocean/5 via-primary/5 to-ocean/5 p-8 backdrop-blur"
        >
          <p className="text-lg leading-relaxed text-white/80">
            Welcome to the Tripsy Holidays Travel Blog—your ultimate resource for planning unforgettable journeys. Whether you're a seasoned explorer or planning your first adventure, our expertly curated articles cover everything you need to know about destinations, travel tips, cultural insights, and sustainable tourism.
          </p>
          <p className="text-base text-white/70">
            From budget-friendly travel hacks to luxury experiences, spiritual pilgrimages to thrilling adventures, discover real stories and practical advice from travelers who've explored the world's most remarkable destinations. Let our guides inspire your next journey.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 flex flex-wrap justify-center gap-3"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-ocean to-primary text-white shadow-lg shadow-ocean/40'
                : 'border border-white/20 text-white/70 hover:text-white hover:border-white/40 bg-white/5 hover:bg-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {filteredPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur hover:border-ocean/50 hover:from-white/15 hover:to-white/8 transition-all duration-300 shadow-lg hover:shadow-ocean/20 overflow-hidden"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-ocean to-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg">
                {post.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em]">
                  <span className="text-ocean/80 font-semibold">📅 {post.date}</span>
                  <span className="text-white/50">⏱️ {post.readTime}</span>
                </div>
                <h3 className="font-display text-xl text-white group-hover:text-ocean transition-colors leading-tight">
                  {post.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-white/70 flex-1">{post.excerpt}</p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-ocean/60 text-xs">★</span>
                  ))}
                </div>
                <a 
                  href={post.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="secondary" size="sm" className="uppercase tracking-[0.2em]">
                    Read Article
                  </Button>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-primary/10 via-ocean/10 to-primary/10 p-8 md:p-12 text-center backdrop-blur"
      >
        <h3 className="font-display text-2xl md:text-3xl text-white mb-3 font-bold">
          Explore More Travel Insights
        </h3>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto">
          Visit our full blog to discover destination guides, travel tips, visa information, food guides, and inspiring stories from our global community of travelers.
        </p>
        <Button variant="glow" size="lg" className="uppercase tracking-[0.25em] font-semibold">
          View Full Blog
        </Button>
      </motion.div>
    </Container>
  );
}

export default BlogSection;
