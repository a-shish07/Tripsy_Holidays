import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

function VideoTestimonialsSection() {
  const videoFiles = [
    'VID-20250620-WA0007.mp4',
    'VID-20250620-WA0009.mp4',
    'VID-20250620-WA0011.mp4',
    'VID-20250620-WA0015.mp4',
    'VID-20250925-WA0018.mp4',
    'VID-20251028-WA0031.mp4',
    'VID-20251028-WA0042.mp4',
    'VID-20251028-WA0043.mp4',
  ];

  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const mainVideoRef = useRef(null);

  const handlePlayPause = () => {
    if (mainVideoRef.current) {
      if (isPlaying) {
        mainVideoRef.current.pause();
      } else {
        mainVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoSelect = (index) => {
    setSelectedVideoIndex(index);
    setIsPlaying(true);
    if (mainVideoRef.current) {
      mainVideoRef.current.play();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <Container id="video-testimonials">
      <SectionHeading
        eyeline="Guest Video Stories"
        title={
          <>
            Real Stories from Our <span className="text-ocean">Happy Travelers</span>
          </>
        }
        subtitle="Watch authentic testimonials from travelers who've experienced unforgettable journeys with Tripsy Holidays."
        tone="dark"
      />

      <div className="mt-16 space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className="group relative rounded-3xl overflow-hidden border border-ocean/30 hover:border-ocean/60 transition-all duration-300"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-ocean/10 to-primary/10 blur-2xl" />
          </div>

          <div className="relative w-full aspect-video bg-night rounded-3xl overflow-hidden">
            <video
              ref={mainVideoRef}
              src={`/Testimonial/${videoFiles[selectedVideoIndex]}`}
              autoPlay
              muted={isMuted}
              className="w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent pointer-events-none" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="pointer-events-auto"
              >
                <button
                  onClick={handlePlayPause}
                  className="p-6 rounded-full bg-ocean/20 hover:bg-ocean/40 border-2 border-ocean/60 text-white transition-all duration-300 hover:scale-110 pointer-events-auto"
                >
                  {isPlaying ? (
                    <FaPause className="w-8 h-8" />
                  ) : (
                    <FaPlay className="w-8 h-8 ml-1" />
                  )}
                </button>
              </motion.div>
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center">
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePlayPause}
                  className="p-3 rounded-full bg-ocean/30 hover:bg-ocean/50 border border-ocean/60 text-white transition-all duration-300"
                >
                  {isPlaying ? (
                    <FaPause className="w-5 h-5" />
                  ) : (
                    <FaPlay className="w-5 h-5 ml-0.5" />
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleMute}
                  className="p-3 rounded-full bg-ocean/30 hover:bg-ocean/50 border border-ocean/60 text-white transition-all duration-300"
                >
                  {isMuted ? (
                    <FaVolumeMute className="w-5 h-5" />
                  ) : (
                    <FaVolumeUp className="w-5 h-5" />
                  )}
                </motion.button>
              </div>

              <div className="text-white text-sm font-medium">
                <span className="text-ocean">{selectedVideoIndex + 1}</span> / {videoFiles.length}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {videoFiles.map((video, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              onClick={() => handleVideoSelect(index)}
              className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 aspect-video ${
                selectedVideoIndex === index
                  ? 'ring-2 ring-ocean border-ocean/60 scale-105'
                  : 'border border-ocean/20 hover:border-ocean/50 hover:scale-105'
              }`}
            >
              <video
                src={`/Testimonial/${video}`}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-ocean/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="p-2 rounded-full bg-ocean/40 hover:bg-ocean/60 border border-ocean/60">
                  <FaPlay className="w-3 h-3 text-white ml-0.5" />
                </div>
              </motion.div>

              <div className="absolute top-2 right-2 bg-night/70 backdrop-blur px-2 py-1 rounded text-xs text-white font-medium">
                {index + 1}
              </div>

              {selectedVideoIndex === index && (
                <motion.div
                  layoutId="selectedVideoRing"
                  className="absolute inset-0 border-2 border-ocean rounded-xl"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-50px' }}
          className="rounded-2xl border border-ocean/20 hover:border-ocean/50 bg-gradient-to-r from-white/8 to-white/3 p-8 md:p-12 text-center backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-ocean/10"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-ocean font-bold mb-3">⭐ Authentic Experiences</p>
          <p className="font-display text-2xl md:text-3xl text-white mb-4">
            Join <span className="text-ocean">2,500+</span> verified travelers
          </p>
          <p className="text-white/70 max-w-2xl mx-auto">
            These are real stories from real travelers. Watch their journeys and get inspired for your next adventure with Tripsy Holidays.
          </p>
        </motion.div>
      </div>
    </Container>
  );
}

export default VideoTestimonialsSection;
