import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const nameVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  const subtitleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.3,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const backgroundVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          variants={backgroundVariants}
          animate={{
            y: [0, -20, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          variants={backgroundVariants}
          animate={{
            y: [0, 20, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent-cyan/30 rounded-full blur-2xl"
          variants={backgroundVariants}
          animate={{
            scale: [1, 1.2, 1],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.div className="mb-8" variants={containerVariants}>
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
            variants={titleVariants}
          >
            <motion.span 
              className="text-white neon-text block"
              variants={titleVariants}
            >
              Hello, I'm
            </motion.span>
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent-pink text-6xl md:text-8xl block"
              variants={nameVariants}
              whileHover={{ scale: 1.05 }}
            >
              SOUROV DASH
            </motion.span>
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-2xl text-white/90 mb-8 font-medium"
            variants={subtitleVariants}
          >
            <motion.span 
              className="inline-block"
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              Full Stack
            </motion.span>
            <span className="text-primary mx-2">•</span>
            <motion.span 
              className="inline-block"
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }
              }}
            >
              MERN Developer
            </motion.span>
            <span className="text-secondary mx-2">•</span>
            <motion.span 
              className="inline-block"
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }
              }}
            >
              Problem Solver
            </motion.span>
          </motion.div>
          
          <motion.p 
            className="text-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed"
            variants={subtitleVariants}
          >
            Passionate developer crafting modern web experiences with React, Node.js, and MongoDB. 
            Currently mastering the MERN stack and building amazing projects every day.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={containerVariants}
          >
            <motion.button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg"
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(6, 182, 212, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-rocket mr-2"></i>
              View My Work
            </motion.button>
            <motion.button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transform transition-all duration-300"
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "white",
                color: "#1f2937"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-envelope mr-2"></i>
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { icon: "fab fa-html5", color: "text-orange-500/30", position: "top-20 left-10", delay: 0 },
            { icon: "fab fa-css3-alt", color: "text-blue-500/30", position: "top-32 right-16", delay: 1 },
            { icon: "fab fa-js", color: "text-yellow-400/30", position: "bottom-32 left-20", delay: 2 },
            { icon: "fab fa-react", color: "text-cyan-400/30", position: "bottom-20 right-10", delay: 3 },
            { icon: "fab fa-node", color: "text-green-500/30", position: "top-1/2 left-8", delay: 4 }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`absolute ${item.position} text-4xl ${item.color}`}
              variants={floatingIconVariants}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 4 + item.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay
                }
              }}
            >
              <i className={item.icon}></i>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 2, duration: 0.8 }
        }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <motion.div 
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{
              opacity: [0.3, 1, 0.3],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;