import { motion } from 'framer-motion';
import { useState } from 'react';
import BlogSection from '../sections/BlogSection';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

// Floating particles component
const FloatingParticles = ({ count = 15 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-primary/10 to-accent/10"
          style={{
            width: Math.random() * 40 + 10,
            height: Math.random() * 40 + 10,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            delay: Math.random() * 1,
          }}
        />
      ))}
    </div>
  );
};

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Articles', icon: '📚' },
    { id: 'destination-guides', label: 'Destination Guides', icon: '🗺️' },
    { id: 'travel-tips', label: 'Travel Tips', icon: '💡' },
    { id: 'cultural-stories', label: 'Cultural Stories', icon: '🏛️' },
    { id: 'adventure', label: 'Adventure', icon: '⛰️' },
    { id: 'luxury', label: 'Luxury Travel', icon: '✨' },
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "The Ultimate Bali Travel Guide 2024",
      excerpt: "Discover hidden gems, cultural experiences, and luxury stays in the Island of Gods.",
      category: "destination-guides",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      id: 2,
      title: "10 Essential Travel Tips for First-Time International Travelers",
      excerpt: "Everything you need to know before embarking on your first global adventure.",
      category: "travel-tips",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "Exploring the Rich Cultural Heritage of Rajasthan",
      excerpt: "A journey through the royal palaces, vibrant festivals, and timeless traditions.",
      category: "cultural-stories",
      readTime: "10 min read",
      image: "/api/placeholder/400/250",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 min-h-screen">
      {/* Background Elements */}
      <FloatingParticles />
      
      {/* Animated Background Blobs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-200/30 to-cyan-200/20 blur-3xl pointer-events-none"
      />
      
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-200/30 to-green-200/20 blur-3xl pointer-events-none"
      />

      {/* Hero Section */}
      <Container className="pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-accent px-6 py-3 shadow-lg"
          >
            <span className="text-white text-lg">📝</span>
            <span className="text-sm font-bold text-white tracking-widest">TRAVEL INSIGHTS</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-display font-black leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Stories, Tips &
            </span>{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Inspiration
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore expert travel guides, destination highlights, and insider knowledge to make your next adventure truly unforgettable.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Search articles, destinations, tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white/80 px-6 py-4 pl-12 text-slate-900 placeholder-slate-400 transition-all duration-300 focus:border-primary/50 focus:ring-4 focus:ring-primary/20 focus:outline-none focus:bg-white shadow-lg"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <span className="text-slate-400 text-lg">🔍</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Categories Filter */}
      <Container className="pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-accent text-white border-transparent shadow-lg'
                  : 'border-slate-200 bg-white/80 text-slate-700 hover:border-primary/30 hover:shadow-md'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </motion.div>
      </Container>

      {/* Featured Posts */}
      <Container className="pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionHeading
            eyeline="Featured Stories"
            title={
              <>
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Editor's
                </span>{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Picks
                </span>
              </>
            }
            subtitle="Handpicked articles to inspire your next journey"
            alignment="center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -8,
                scale: 1.02
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 300
              }}
              viewport={{ once: true }}
              className="group relative rounded-3xl border border-black/50 bg-white/80 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-black/80 cursor-pointer"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="absolute top-4 left-4"
                >
                  <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-700">
                    {post.category.replace('-', ' ')}
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <motion.h3 
                  className="font-display text-xl font-black text-slate-900 group-hover:text-slate-800 transition-colors leading-tight"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {post.title}
                </motion.h3>

                <motion.p 
                  className="text-slate-600 leading-relaxed line-clamp-2 group-hover:text-slate-700 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {post.excerpt}
                </motion.p>

                <motion.div 
                  className="flex items-center justify-between pt-4 border-t border-slate-200/60"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <span className="text-sm text-slate-500 font-semibold">{post.readTime}</span>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-1"
                  >
                    Read More
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} rounded-3xl blur-xl opacity-10`} />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>

      {/* Main Blog Section */}
      <BlogSection />

      {/* Newsletter Section */}
      <Container className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl border border-black/50 bg-white/80 backdrop-blur-sm p-12 md:p-16 text-center space-y-8 overflow-hidden group">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full -top-48 -left-48" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full -bottom-48 -right-48" />
            </div>

            <div className="relative space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-accent px-6 py-3 shadow-lg"
              >
                <span className="text-white text-lg">💌</span>
                <span className="text-sm font-bold text-white tracking-widest">STAY CONNECTED</span>
              </motion.div>

              <motion.h3 
                className="font-display text-4xl md:text-5xl font-black leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Never Miss Travel
                </span>{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Inspiration
                </span>
              </motion.h3>

              <motion.p 
                className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Subscribe to receive curated travel insights, exclusive destination guides, and special offers directly in your inbox.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Enter your email address"
                className="flex-1 rounded-2xl border border-slate-200 bg-white/80 px-6 py-4 text-slate-900 placeholder-slate-400 transition-all duration-300 focus:border-primary/50 focus:ring-4 focus:ring-primary/20 focus:outline-none focus:bg-white"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="primary"
                  size="lg"
                  className="rounded-2xl px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-widest font-bold"
                >
                  <span className="flex items-center gap-3">
                    Subscribe
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ✨
                    </motion.span>
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.p 
              className="text-sm text-slate-500 pt-4 border-t border-slate-200/60 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              No spam, just pure travel inspiration. Unsubscribe at any time.
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default BlogPage;