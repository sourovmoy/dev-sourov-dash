import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const ThemeIndicator = ({ position = 'bottom-right' }) => {
  const { darkMode, currentTheme } = useTheme();

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4'
  };

  return (
    <motion.div
      className={`fixed ${positionClasses[position]} z-30 pointer-events-none`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div
        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full px-3 py-2 shadow-lg"
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center space-x-2 text-xs">
          <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-yellow-500'}`} />
          <span className="text-gray-700 dark:text-gray-300 font-medium capitalize">
            {currentTheme} Mode
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ThemeIndicator;