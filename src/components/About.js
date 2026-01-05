import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import portfolioImage from '../assets/sourov.png';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const stats = [
    { number: '20+', label: 'Projects Completed', icon: 'fas fa-code' },
    { number: '6+', label: 'Months Experience', icon: 'fas fa-calendar-alt' },
    { number: '100', label: 'Happy Clients', icon: 'fas fa-users' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { y: 30, opacity: 0 },
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
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-background-dark dark:to-gray-900" 
      id="about"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      />
      
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-4"
            variants={titleVariants}
          >
            <motion.span 
              className="text-primary neon-text"
              whileHover={{ scale: 1.05 }}
            >
              About
            </motion.span>{' '}
            <motion.span 
              className="text-secondary neon-text-pink"
              whileHover={{ scale: 1.05 }}
            >
              Me
            </motion.span>
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            variants={titleVariants}
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          />
          <motion.p 
            className="text-gray-500 dark:text-gray-400 mt-4 text-lg"
            variants={textVariants}
          >
            Passionate developer on a journey to master full-stack development
          </motion.p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-6"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-white/80 dark:bg-card-dark/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={textVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                Hello, I am <span className="text-primary font-semibold">Sourov Dash</span> – an enthusiastic developer, 
                currently mastering full-stack development and on my way to becoming an expert web developer. 
                I practice coding regularly every day, try to learn something new, and gradually improve my skills.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/80 dark:bg-card-dark/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={textVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                I am passionate about creating modern, responsive web applications and am more confident than ever. I believe that anything is 
                possible with hard work, patience and confidence. I know that one day in the future I will definitely 
                become a skilled and successful <span className="text-secondary font-semibold">MERN Stack Developer</span>. 
              </p>
            </motion.div>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-card-dark p-6 rounded-xl border border-gray-200 dark:border-white/10 text-center shadow-lg hover:border-primary/50 transition-all duration-300 group"
                  variants={statsVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 10px 25px rgba(6, 182, 212, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="text-primary mb-3 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <i className={`${stat.icon} text-2xl`}></i>
                  </motion.div>
                  <motion.h3 
                    className="text-3xl font-display font-bold text-primary mb-1 group-hover:text-secondary transition-colors"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Visual Element */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center relative"
            variants={imageVariants}
          >
            <div className="relative w-80 h-80">
              {/* Animated Rings */}
              <motion.div 
                className="absolute inset-0 border-2 border-primary/30 rounded-full transform rotate-45 scale-110"
                animate={{
                  rotate: [45, 405],
                  transition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              />
              <motion.div 
                className="absolute inset-0 border-2 border-secondary/30 rounded-full transform -rotate-12 scale-90"
                animate={{
                  rotate: [-12, -372],
                  transition: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              />
              <motion.div 
                className="absolute inset-0 border-2 border-purple-500/30 rounded-full transform rotate-12 scale-125"
                animate={{
                  rotate: [12, 372],
                  transition: {
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              />
              
              {/* Center Glow */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full blur-md opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              
              {/* Enhanced Profile Image with sourov.png */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10 group"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  alt="Sourov Dash - Full Stack Developer" 
                  className="w-full h-full object-cover object-center hover:scale-110 transition-all duration-500 group-hover:brightness-110" 
                  src={portfolioImage}
                  onError={(e) => {
                    console.log('Image failed to load:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                {/* Enhanced overlay with better visual integration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300"></div>
                
                {/* Animated border glow */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    rotate: 360,
                    transition: {
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                />
              </motion.div>
              
              {/* Floating Tech Icons */}
              {[
                { icon: "fab fa-react", color: "text-primary", position: "top-4 right-4", delay: 0 },
                { icon: "fab fa-node-js", color: "text-green-500", position: "bottom-4 left-4", delay: 1 },
                { icon: "fab fa-js", color: "text-yellow-400", position: "top-1/2 right-0", delay: 2 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} text-2xl ${item.color}`}
                  variants={floatingIconVariants}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, -10, 0],
                    transition: {
                      duration: 3 + item.delay,
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;