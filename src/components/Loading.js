import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loading = ({ 
  loading = false, 
  type = 'spinner', 
  size = 'medium', 
  overlay = false,
  text = '',
  color = 'primary'
}) => {
  if (!loading) return null;

  // Size configurations
  const sizeConfig = {
    small: {
      spinner: 'w-6 h-6',
      dots: 'w-2 h-2',
      pulse: 'w-8 h-8',
      text: 'text-sm'
    },
    medium: {
      spinner: 'w-10 h-10',
      dots: 'w-3 h-3',
      pulse: 'w-12 h-12',
      text: 'text-base'
    },
    large: {
      spinner: 'w-16 h-16',
      dots: 'w-4 h-4',
      pulse: 'w-20 h-20',
      text: 'text-lg'
    }
  };

  // Color configurations
  const colorConfig = {
    primary: {
      spinner: 'border-primary',
      dots: 'bg-primary',
      pulse: 'bg-primary',
      text: 'text-primary'
    },
    secondary: {
      spinner: 'border-secondary',
      dots: 'bg-secondary',
      pulse: 'bg-secondary',
      text: 'text-secondary'
    },
    white: {
      spinner: 'border-white',
      dots: 'bg-white',
      pulse: 'bg-white',
      text: 'text-white'
    },
    gray: {
      spinner: 'border-gray-600',
      dots: 'bg-gray-600',
      pulse: 'bg-gray-600',
      text: 'text-gray-600'
    }
  };

  const config = sizeConfig[size];
  const colors = colorConfig[color];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const dotsVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 0.3, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Render different loading types
  const renderSpinner = () => (
    <motion.div
      className={`${config.spinner} border-4 ${colors.spinner} border-t-transparent rounded-full`}
      variants={spinnerVariants}
      animate="animate"
    />
  );

  const renderDots = () => (
    <div className="flex space-x-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${config.dots} ${colors.dots} rounded-full`}
          variants={dotsVariants}
          animate="animate"
          transition={{ delay: index * 0.2 }}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <motion.div
      className={`${config.pulse} ${colors.pulse} rounded-full`}
      variants={pulseVariants}
      animate="animate"
    />
  );

  const renderBars = () => (
    <div className="flex space-x-1">
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          className={`w-1 ${colors.dots} rounded-full`}
          style={{ height: '20px' }}
          animate={{
            scaleY: [1, 2, 1],
            transition: {
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1
            }
          }}
        />
      ))}
    </div>
  );

  const renderRipple = () => (
    <div className="relative">
      {[0, 1].map((index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 ${config.pulse} border-2 ${colors.spinner} rounded-full`}
          animate={{
            scale: [0, 1],
            opacity: [1, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: index * 1
            }
          }}
        />
      ))}
    </div>
  );

  const renderCodeLoader = () => (
    <div className="flex items-center space-x-2">
      <motion.div
        animate={{
          rotate: 360,
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        <i className={`fas fa-code text-2xl ${colors.text}`}></i>
      </motion.div>
      <motion.div
        className="flex space-x-1"
        animate={{
          opacity: [0.3, 1, 0.3],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {['<', '/', '>'].map((char, index) => (
          <motion.span
            key={index}
            className={`${colors.text} font-mono font-bold`}
            animate={{
              y: [0, -5, 0],
              transition: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2
              }
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );

  const getLoadingAnimation = () => {
    switch (type) {
      case 'spinner':
        return renderSpinner();
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'bars':
        return renderBars();
      case 'ripple':
        return renderRipple();
      case 'code':
        return renderCodeLoader();
      default:
        return renderSpinner();
    }
  };

  const containerClasses = overlay 
    ? "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
    : "flex items-center justify-center p-4";

  return (
    <AnimatePresence>
      <motion.div
        className={containerClasses}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex flex-col items-center space-y-4">
          {getLoadingAnimation()}
          
          {text && (
            <motion.p
              className={`${config.text} ${colors.text} font-medium text-center`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {text}
            </motion.p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;