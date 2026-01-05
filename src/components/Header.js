import React from 'react';
import { motion } from 'framer-motion';
import Avatar from './Avatar';

const Header = ({ darkMode, toggleDarkMode }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.nav 
      className="fixed w-full z-50 top-0 left-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 px-6 py-4 transition-all duration-300"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo with Avatar */}
        <motion.div 
          className="flex items-center space-x-3 cursor-pointer group"
          variants={logoVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Circular Avatar with Glow */}
          <Avatar 
            size="medium"
            showGlow={true}
            showBorder={true}
            className="group-hover:rotate-3 transition-transform duration-300"
          />
          
          {/* Brand Text */}
          <motion.div 
            className="font-display font-bold text-xl text-primary neon-text tracking-wider group-hover:text-secondary transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
          >
            SOUROV DASH
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hidden md:flex space-x-8 text-sm font-medium"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          {['about', 'skills', 'projects', 'contact'].map((section, index) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className="hover:text-primary transition-colors hover:scale-105 transform duration-200 capitalize"
              variants={navItemVariants}
              whileHover={{ scale: 1.1, color: "#06b6d4" }}
              whileTap={{ scale: 0.95 }}
            >
              {section}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 transform relative group"
          variants={navItemVariants}
          whileHover={{ scale: 1.2, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        >
          <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          
          {/* Tooltip */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </div>
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Header;