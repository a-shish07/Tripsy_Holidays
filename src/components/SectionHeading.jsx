import { motion } from 'framer-motion';
import clsx from 'classnames';

function SectionHeading({
  eyeline,
  title,
  subtitle,
  alignment = 'center',
  className,
  tone = 'light',
  animationDelay = 0,
  showAnimation = true,
}) {
  const isLight = tone === 'light';

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: animationDelay
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={showAnimation ? containerVariants : {}}
      initial={showAnimation ? "hidden" : false}
      whileInView={showAnimation ? "visible" : false}
      viewport={{ once: true, margin: "-50px" }}
      className={clsx(
        'mx-auto max-w-6xl space-y-8 relative',
        alignment === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {/* Animated background elements */}
      {alignment === 'center' && (
        <>
          <motion.div
            variants={floatingAnimation}
            animate="animate"
            className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-ocean/20 to-primary/20 rounded-full blur-xl opacity-60 -z-10"
          />
          <motion.div
            variants={floatingAnimation}
            animate="animate"
            transition={{ delay: 2 }}
            className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-xl opacity-60 -z-10"
          />
        </>
      )}

      {eyeline && (
        <motion.span
          variants={showAnimation ? itemVariants : {}}
          className={clsx(
            'inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-sm font-display font-bold uppercase tracking-[0.3em] relative overflow-hidden group backdrop-blur-sm border',
            isLight
              ? 'border-black/30 bg-gradient-to-r from-white/10 to-white/5 text-ocean shadow-lg shadow-ocean/20'
              : 'border-ocean/30 bg-gradient-to-r from-ocean/10 to-primary/10 text-ocean shadow-lg'
          )}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          
          {/* Animated icon */}
          <motion.span
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="text-lg"
          >
            ✦
          </motion.span>
          
          {eyeline}
          
          <motion.span
            animate={{ 
              rotate: [0, -10, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1 
            }}
            className="text-lg"
          >
            ✦
          </motion.span>
        </motion.span>
      )}

      <motion.h2
        variants={showAnimation ? itemVariants : {}}
        className={clsx(
          'font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight tracking-tight font-bold relative',
          isLight 
            ? 'text-transparent bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text' 
            : 'text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text'
        )}
      >
        {typeof title === 'string' ? (
          <motion.span className="inline-block">
            {title.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={showAnimation ? { opacity: 0, y: 50 } : false}
                animate={showAnimation ? { opacity: 1, y: 0 } : false}
                transition={showAnimation ? { 
                  duration: 0.5, 
                  delay: animationDelay + index * 0.03,
                  ease: "easeOut" 
                } : {}}
                className="inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.span>
        ) : (
          title
        )}
        
        {/* Gradient underline effect */}
        <motion.div
          initial={showAnimation ? { scaleX: 0 } : false}
          animate={showAnimation ? { scaleX: 1 } : false}
          transition={{ duration: 1, delay: animationDelay + 0.5, ease: "easeOut" }}
          className={clsx(
            'h-1 mt-4 rounded-full bg-gradient-to-r',
            isLight 
              ? 'from-ocean via-primary to-purple-500' 
              : 'from-ocean via-primary to-purple-500'
          )}
        />
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={showAnimation ? itemVariants : {}}
          className={clsx(
            'text-xl md:text-2xl lg:text-3xl leading-relaxed font-light max-w-4xl mx-auto',
            isLight 
              ? 'text-slate-700' 
              : 'text-slate-900',
            alignment === 'center' ? 'text-center' : 'text-left'
          )}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative elements for center alignment */}
      {alignment === 'center' && (
        <motion.div
          initial={showAnimation ? { opacity: 0, scale: 0 } : false}
          animate={showAnimation ? { opacity: 1, scale: 1 } : false}
          transition={{ duration: 0.6, delay: animationDelay + 0.8 }}
          className="flex justify-center items-center gap-4 pt-8"
        >
          {[1, 2, 3].map((dot) => (
            <motion.div
              key={dot}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: dot * 0.3,
                ease: "easeInOut"
              }}
              className={clsx(
                'w-2 h-2 rounded-full',
                isLight ? 'bg-ocean/50' : 'bg-ocean'
              )}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export default SectionHeading;