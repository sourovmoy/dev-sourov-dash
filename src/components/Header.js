import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Avatar from './Avatar';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Account for navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
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
      className="fixed w-full z-50 top-0 left-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 transition-all duration-300"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center min-h-[60px]">
        {/* Enhanced Logo with Avatar */}
        <motion.div 
          className="flex items-center space-x-3 sm:space-x-4 cursor-pointer group"
          variants={logoVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Circular Avatar with Enhanced Glow */}
          <div className="relative">
            <Avatar 
              size="medium"
              showGlow={true}
              showBorder={true}
              className="group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-primary/30"
            />
            {/* Additional glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>
          
          {/* Enhanced Brand Text with Logo Icon */}
          <motion.div 
            className="flex flex-col"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-2">
              {/* Code Icon */}
              <i className="fas fa-code text-primary text-base sm:text-lg group-hover:text-secondary transition-colors duration-300"></i>
              
              {/* Brand Name */}
              <span className="font-display font-bold text-lg sm:text-xl text-primary neon-text tracking-wider group-hover:text-secondary transition-colors duration-300">
                SOUROV DASH
              </span>
            </div>
            
            {/* Subtitle */}
            <motion.span 
              className="text-xs text-gray-600 dark:text-gray-400 font-mono tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-6"
              initial={{ opacity: 0, y: -5 }}
              whileHover={{ opacity: 1, y: 0 }}
            >
              MERN Stack Developer
            </motion.span>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-medium"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          {['about', 'skills', 'projects', 'contact'].map((section, index) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className="hover:text-primary transition-colors hover:scale-105 transform duration-200 capitalize px-2 py-1 rounded-md hover:bg-primary/10"
              variants={navItemVariants}
              whileHover={{ scale: 1.1, color: "#06b6d4" }}
              whileTap={{ scale: 0.95 }}
            >
              {section}
            </motion.button>
          ))}
        </motion.div>

        {/* Right side buttons */}
        <div className="flex items-center space-x-3">
          {/* Mobile menu button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white transition-all duration-300"
            variants={navItemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-sm`}></i>
          </motion.button>

          {/* Theme toggle button */}
          <motion.button 
            onClick={toggleDarkMode}
            className="p-2.5 sm:p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 transform relative group"
            variants={navItemVariants}
            whileHover={{ scale: 1.2, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-sm`}></i>
            
            {/* Tooltip */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-white/5 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-4 space-y-2">
              {['about', 'skills', 'projects', 'contact'].map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium capitalize hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className={`fas fa-${section === 'about' ? 'user' : section === 'skills' ? 'code' : section === 'projects' ? 'folder-open' : 'envelope'} mr-3 text-primary`}></i>
                  {section}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;