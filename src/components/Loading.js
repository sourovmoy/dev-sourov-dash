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
      spinner: 'w-8 h-8',
      dots: 'w-2 h-2',
      pulse: 'w-10 h-10',
      text: 'text-sm',
      container: 'p-4'
    },
    medium: {
      spinner: 'w-12 h-12',
      dots: 'w-3 h-3',
      pulse: 'w-16 h-16',
      text: 'text-base',
      container: 'p-6'
    },
    large: {
      spinner: 'w-20 h-20',
      dots: 'w-4 h-4',
      pulse: 'w-24 h-24',
      text: 'text-lg',
      container: 'p-8'
    }
  };

  // Enhanced color configurations with gradients
  const colorConfig = {
    primary: {
      gradient: 'from-primary via-cyan-400 to-blue-500',
      glow: 'shadow-primary/50',
      text: 'text-primary',
      bg: 'bg-primary'
    },
    secondary: {
      gradient: 'from-secondary via-pink-400 to-purple-500',
      glow: 'shadow-secondary/50',
      text: 'text-secondary',
      bg: 'bg-secondary'
    },
    rainbow: {
      gradient: 'from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400',
      glow: 'shadow-purple-500/50',
      text: 'text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400',
      bg: 'bg-gradient-to-r from-red-400 to-purple-400'
    },
    neon: {
      gradient: 'from-cyan-400 via-green-400 to-lime-400',
      glow: 'shadow-cyan-400/50',
      text: 'text-cyan-400',
      bg: 'bg-cyan-400'
    }
  };

  const config = sizeConfig[size];
  const colors = colorConfig[color];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  // Enhanced spinner with gradient and glow
  const renderSpinner = () => (
    <div className="relative">
      {/* Outer glow ring */}
      <motion.div
        className={`absolute inset-0 ${config.spinner} rounded-full bg-gradient-to-r ${colors.gradient} opacity-20 blur-md`}
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
          transition: {
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
        }}
      />
      
      {/* Main spinner */}
      <motion.div
        className={`${config.spinner} border-4 border-transparent bg-gradient-to-r ${colors.gradient} rounded-full p-1`}
        animate={{
          rotate: 360,
          transition: { duration: 1, repeat: Infinity, ease: "linear" }
        }}
      >
        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full"></div>
      </motion.div>
      
      {/* Inner spinning dot */}
      <motion.div
        className={`absolute top-1 left-1/2 w-2 h-2 ${colors.bg} rounded-full transform -translate-x-1/2`}
        animate={{
          rotate: 360,
          transition: { duration: 1, repeat: Infinity, ease: "linear" }
        }}
      />
    </div>
  );

  // Enhanced dots with wave effect
  const renderDots = () => (
    <div className="flex space-x-2">
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          className={`${config.dots} rounded-full bg-gradient-to-r ${colors.gradient} shadow-lg ${colors.glow}`}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2
            }
          }}
        />
      ))}
    </div>
  );

  // Enhanced pulse with multiple rings
  const renderPulse = () => (
    <div className="relative flex items-center justify-center">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`absolute ${config.pulse} rounded-full bg-gradient-to-r ${colors.gradient} opacity-30`}
          animate={{
            scale: [0, 2],
            opacity: [0.6, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: index * 0.6
            }
          }}
        />
      ))}
      <motion.div
        className={`${config.pulse} rounded-full bg-gradient-to-r ${colors.gradient} shadow-2xl ${colors.glow}`}
        animate={{
          scale: [1, 1.1, 1],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
    </div>
  );

  // Enhanced bars with gradient
  const renderBars = () => (
    <div className="flex items-end space-x-1">
      {[0, 1, 2, 3, 4, 5, 6].map((index) => (
        <motion.div
          key={index}
          className={`w-2 bg-gradient-to-t ${colors.gradient} rounded-full shadow-lg`}
          style={{ height: '8px' }}
          animate={{
            scaleY: [1, 3, 1],
            opacity: [0.5, 1, 0.5],
            transition: {
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1
            }
          }}
        />
      ))}
    </div>
  );

  // Enhanced ripple with gradient
  const renderRipple = () => (
    <div className="relative">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 ${config.pulse} border-4 border-gradient-to-r ${colors.gradient} rounded-full opacity-60`}
          style={{
            borderImage: `linear-gradient(45deg, #06b6d4, #d946ef) 1`
          }}
          animate={{
            scale: [0, 2],
            opacity: [0.8, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: index * 1
            }
          }}
        />
      ))}
    </div>
  );

  // Enhanced code loader with floating elements
  const renderCodeLoader = () => (
    <div className="relative flex flex-col items-center space-y-4">
      {/* Floating code symbols */}
      <div className="relative">
        {['<', '>', '{', '}', '/', '*'].map((symbol, index) => (
          <motion.span
            key={index}
            className={`absolute text-2xl font-mono font-bold ${colors.text} opacity-30`}
            style={{
              left: `${Math.cos(index * 60 * Math.PI / 180) * 40}px`,
              top: `${Math.sin(index * 60 * Math.PI / 180) * 40}px`
            }}
            animate={{
              rotate: 360,
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.8, 0.3],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }
            }}
          >
            {symbol}
          </motion.span>
        ))}
        
        {/* Central code icon */}
        <motion.div
          className="relative z-10"
          animate={{
            rotate: [0, 360],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          <motion.i 
            className={`fas fa-code text-4xl ${colors.text} drop-shadow-lg`}
            animate={{
              scale: [1, 1.2, 1],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        </motion.div>
      </div>
      
      {/* Animated brackets */}
      <motion.div
        className="flex items-center space-x-2"
        animate={{
          opacity: [0.5, 1, 0.5],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {['<', 'dev', '/>'].map((char, index) => (
          <motion.span
            key={index}
            className={`${colors.text} font-mono font-bold text-lg`}
            animate={{
              y: [0, -8, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3
              }
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );

  // New beautiful orbital loader
  const renderOrbital = () => (
    <div className="relative">
      {/* Orbital rings */}
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={ring}
          className={`absolute border-2 border-dashed rounded-full opacity-30`}
          style={{
            width: `${60 + ring * 20}px`,
            height: `${60 + ring * 20}px`,
            left: `${-10 - ring * 10}px`,
            top: `${-10 - ring * 10}px`,
            borderColor: ring === 0 ? '#06b6d4' : ring === 1 ? '#d946ef' : '#10b981'
          }}
          animate={{
            rotate: ring % 2 === 0 ? 360 : -360,
            transition: {
              duration: 4 + ring,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />
      ))}
      
      {/* Orbiting dots */}
      {[0, 1, 2].map((dot) => (
        <motion.div
          key={dot}
          className="absolute w-3 h-3 rounded-full shadow-lg"
          style={{
            background: dot === 0 ? '#06b6d4' : dot === 1 ? '#d946ef' : '#10b981'
          }}
          animate={{
            rotate: dot % 2 === 0 ? 360 : -360,
            transition: {
              duration: 3 + dot,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: `${25 + dot * 15}px`,
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          />
        </motion.div>
      ))}
      
      {/* Center core */}
      <motion.div
        className={`w-8 h-8 rounded-full bg-gradient-to-r ${colors.gradient} shadow-xl ${colors.glow} mx-auto`}
        animate={{
          scale: [1, 1.3, 1],
          boxShadow: [
            '0 0 20px rgba(6, 182, 212, 0.5)',
            '0 0 40px rgba(217, 70, 239, 0.8)',
            '0 0 20px rgba(6, 182, 212, 0.5)'
          ],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
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
      case 'orbital':
        return renderOrbital();
      default:
        return renderSpinner();
    }
  };

  const containerClasses = overlay 
    ? "fixed inset-0 bg-gradient-to-br from-black/60 via-gray-900/50 to-black/60 backdrop-blur-md z-50 flex items-center justify-center"
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
        <motion.div 
          className={`flex flex-col items-center space-y-6 ${config.container} rounded-2xl ${overlay ? 'bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm border border-white/20' : ''}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Loading animation */}
          <div className="relative">
            {getLoadingAnimation()}
          </div>
          
          {/* Enhanced text with gradient */}
          {text && (
            <motion.div
              className="text-center space-y-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.p
                className={`${config.text} font-semibold ${colors.text} drop-shadow-sm`}
                animate={{
                  opacity: [0.7, 1, 0.7],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                {text}
              </motion.p>
              
              {/* Animated dots after text */}
              <motion.div className="flex justify-center space-x-1">
                {[0, 1, 2].map((dot) => (
                  <motion.div
                    key={dot}
                    className={`w-1 h-1 ${colors.bg} rounded-full`}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.5, 1],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: dot * 0.2
                      }
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;