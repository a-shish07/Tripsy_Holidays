import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import Policies from '../components/Policies';
import { packages } from '../data/packages';
import { getPackageImage } from '../data/images';

function PackageDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const pkg = packages.find(p => p.id === parseInt(id));

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display text-white mb-4">Package Not Found</h1>
          <Button onClick={() => navigate('/packages/domestic')} variant="glow">
            Back to Packages
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-0">
      <section className="relative min-h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${getPackageImage(pkg.subcategory)})` }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 z-20">
          <div className="absolute right-[-10%] top-20 h-[350px] w-[350px] rounded-full bg-ocean/10 blur-3xl animate-pulse" />
          <div className="absolute left-[-15%] top-40 h-[300px] w-[300px] rounded-full bg-primary/8 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <Container className="pt-12 md:pt-16 pb-10 relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate(-1)}
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-ocean hover:text-primary transition-colors text-base font-semibold uppercase tracking-[0.2em]"
            >
              <span>←</span>
              <span>Back</span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-1.5"
            >
              <p className="text-base uppercase tracking-[0.3em] bg-gradient-to-r from-ocean to-primary bg-clip-text text-transparent font-bold">{pkg.category} Package</p>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-white leading-snug">
                {pkg.name}
              </h1>
              <p className="text-base text-white/70 font-light">{pkg.description}</p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <Container className="pt-8">

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={pkg.images[selectedImage]}
                alt={pkg.name}
                className="w-full h-96 object-cover"
              />
            </div>
            {pkg.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {pkg.images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    whileHover={{ scale: 1.05 }}
                    className={`rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-ocean'
                        : 'border-white/20 hover:border-ocean/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${pkg.name} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              {pkg.badge && (
                <span className="inline-block bg-ocean/20 text-ocean px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
                  ⭐ {pkg.badge}
                </span>
              )}
              <h1 className="font-display text-4xl md:text-5xl text-white mb-3">{pkg.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-white font-semibold">{pkg.rating}</span>
                  <span className="text-white/50">({pkg.reviewCount} reviews)</span>
                </div>
              </div>
              <p className="text-white/70 text-lg leading-relaxed">{pkg.fullDescription}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase text-white/50 font-bold mb-1">Duration</p>
                  <p className="text-2xl font-display text-ocean font-bold">{pkg.duration}</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-white/50 font-bold mb-1">Group Size</p>
                  <p className="text-2xl font-display text-ocean font-bold">{pkg.groupSize}</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-white/50 font-bold mb-1">Best Time</p>
                  <p className="font-semibold text-white">{pkg.bestTime}</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-white/50 font-bold mb-1">Price Per Person</p>
                  <p className="text-2xl font-display text-primary font-bold">{pkg.priceLabel}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase text-white/50 font-bold tracking-wide">What's Included</p>
              <div className="grid grid-cols-2 gap-2">
                {pkg.includes.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-ocean flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="glow" size="lg" className="flex-1 uppercase tracking-wide">
                Book Now
              </Button>
              <Button variant="secondary" size="lg" className="flex-1 uppercase tracking-wide">
                Ask Questions
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-3xl text-white mb-6">Day-by-Day Itinerary</h2>
                <div className="space-y-4">
                  {pkg.itinerary.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-ocean/50 transition-all"
                    >
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ocean to-primary flex items-center justify-center">
                            <span className="font-bold text-white">D{item.day}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display text-xl text-white mb-2">{item.title}</h3>
                          <p className="text-white/70">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl text-white mb-6">Activities</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {pkg.activities.map((activity) => (
                    <div key={activity} className="rounded-lg border border-ocean/50 bg-ocean/10 px-4 py-3">
                      <p className="text-sm text-ocean font-semibold">{activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-4 sticky top-32">
                <h3 className="font-display text-xl text-white">Highlights</h3>
                <div className="space-y-2">
                  {pkg.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="text-ocean text-lg">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4 space-y-3">
                  <p className="text-xs uppercase text-white/50 font-bold">Questions?</p>
                  <Button variant="secondary" className="w-full" size="sm">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Policies />
      </Container>
    </div>
  );
}

export default PackageDetailsPage;
