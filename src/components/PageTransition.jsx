import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function PageTransition({ children }) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [previousPath, setPreviousPath] = useState('');

  useEffect(() => {
    // Simulate loading delay for demonstration
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    setPreviousPath(location.pathname);
  }, [location.pathname]);

  const getTransitionDirection = () => {
    const paths = ['/', '/domestic', '/international', '/packages', '/about', '/contact'];
    const currentIndex = paths.indexOf(location.pathname);
    const previousIndex = paths.indexOf(previousPath);
    
    return currentIndex > previousIndex ? 1 : -1;
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(10px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(10px)',
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const fadeVariants = {
    enter: {
      opacity: 0,
      y: 40,
      scale: 0.98
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -40,
      scale: 0.98,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  const creativeVariants = {
    enter: {
      opacity: 0,
      y: 60,
      rotateX: 10,
      scale: 0.9
    },
    center: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.34, 1.56, 0.64, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -60,
      rotateX: -10,
      scale: 0.9,
      transition: {
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  const travelVariants = {
    enter: {
      opacity: 0,
      x: 400,
      rotateY: 15,
      scale: 0.8
    },
    center: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    exit: {
      opacity: 0,
      x: -400,
      rotateY: -15,
      scale: 0.8,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  // Choose animation style based on path or random selection
  const getAnimationStyle = () => {
    const styles = ['slide', 'fade', 'creative', 'travel'];
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    
    // Use specific styles for certain pages
    if (location.pathname === '/') return 'creative';
    if (location.pathname.includes('/packages')) return 'travel';
    if (location.pathname.includes('/about')) return 'fade';
    
    return randomStyle;
  };

  const animationStyle = getAnimationStyle();
  const direction = getTransitionDirection();

  const getVariants = () => {
    switch (animationStyle) {
      case 'slide':
        return slideVariants;
      case 'fade':
        return fadeVariants;
      case 'creative':
        return creativeVariants;
      case 'travel':
        return travelVariants;
      default:
        return fadeVariants;
    }
  };

  return (
    <>
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-night via-purple-900/80 to-ocean/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-8"
            >
              {/* Animated Plane */}
              <motion.div
                animate={{ 
                  x: [-100, 100, -100],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  x: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="text-6xl"
              >
                ✈️
              </motion.div>
              
              {/* Loading Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-display font-bold text-white">
                  Preparing Your Journey
                </h3>
                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-white/70 text-lg"
                >
                  Discovering amazing destinations...
                </motion.p>
              </motion.div>

              {/* Loading Dots */}
              <motion.div className="flex justify-center gap-2">
                {[0, 1, 2].map((dot) => (
                  <motion.div
                    key={dot}
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: dot * 0.2
                    }}
                    className="w-3 h-3 bg-ocean rounded-full"
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content with Transition */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={location.pathname}
          custom={direction}
          variants={getVariants()}
          initial="enter"
          animate="center"
          exit="exit"
          className="min-h-screen"
        >
          {/* Background Transition Elements */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-gradient-to-br from-night via-purple-900/10 to-ocean/20"
            />
            
            {/* Floating Elements */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-ocean/30 to-primary/30 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full blur-3xl"
            />
          </div>

          {/* Page Content */}
          {children}

          {/* Navigation Progress Indicator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-ocean via-primary to-purple-500 origin-left z-50"
            style={{
              transformOrigin: direction > 0 ? 'left' : 'right'
            }}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default PageTransition;