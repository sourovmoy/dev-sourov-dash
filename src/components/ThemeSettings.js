import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const ThemeSettings = () => {
  const { darkMode, toggleDarkMode, setTheme, currentTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeOptions = [
    {
      id: 'light',
      name: 'Light Mode',
      icon: 'fas fa-sun',
      description: 'Clean and bright interface'
    },
    {
      id: 'dark',
      name: 'Dark Mode',
      icon: 'fas fa-moon',
      description: 'Easy on the eyes'
    },
    {
      id: 'system',
      name: 'System',
      icon: 'fas fa-desktop',
      description: 'Follow system preference'
    }
  ];

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="relative">
      {/* Theme Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white transition-all duration-300 relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Theme settings"
      >
        <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        
        {/* Tooltip */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          Theme Settings
        </div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden"
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                  Theme Settings
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Choose your preferred theme
                </p>
              </div>
              
              <div className="p-2">
                {themeOptions.map((option, index) => (
                  <motion.button
                    key={option.id}
                    onClick={() => {
                      setTheme(option.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors duration-200 ${
                      currentTheme === option.id || (option.id === 'system' && !localStorage.getItem('portfolio-theme'))
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentTheme === option.id || (option.id === 'system' && !localStorage.getItem('portfolio-theme'))
                        ? 'bg-primary/20 text-primary'
                        : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                    }`}>
                      <i className={`${option.icon} text-sm`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{option.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {option.description}
                      </div>
                    </div>
                    {(currentTheme === option.id || (option.id === 'system' && !localStorage.getItem('portfolio-theme'))) && (
                      <i className="fas fa-check text-primary text-sm"></i>
                    )}
                  </motion.button>
                ))}
              </div>
              
              <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Your preference is saved automatically
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSettings;