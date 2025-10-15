import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { blogPosts } from '../data/blogPosts';
import Button from '../components/Button';

function BlogSection() {
  return (
    <Container id="blog">
      <SectionHeading
        eyeline="Travel Journals"
        title={
          <>
            Insights and stories from our <span className="text-ocean">travel atelier</span>.
          </>
        }
        subtitle="Peek behind the scenes of our signature journeys and discover tips, trends, and destinations curated by our travel artists."
      />
      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-night/70 p-6 backdrop-blur"
          >
            <div className="relative h-48 overflow-hidden rounded-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="mt-6 flex flex-1 flex-col space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {post.date} • {post.readTime}
              </p>
              <h3 className="font-display text-xl text-white">{post.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{post.excerpt}</p>
            </div>
            <Button variant="secondary" className="mt-6 uppercase tracking-[0.35em]">
              Read More
            </Button>
          </motion.article>
        ))}
      </div>
    </Container>
  );
}

export default BlogSection;