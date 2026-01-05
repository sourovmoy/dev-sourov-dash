import React from 'react';
import { motion } from 'framer-motion';
import sourovDashImage from '../assets/sourov-dash.png';

const Avatar = ({ 
  size = 'medium', 
  showGlow = true, 
  showBorder = true, 
  className = '',
  onClick = null,
  ...props 
}) => {
  // Size configurations
  const sizeConfig = {
    small: {
      container: 'w-8 h-8',
      image: 'w-8 h-8',
      border: 'border-2',
      glow: 'blur-sm'
    },
    medium: {
      container: 'w-12 h-12',
      image: 'w-12 h-12',
      border: 'border-2',
      glow: 'blur-md'
    },
    large: {
      container: 'w-16 h-16',
      image: 'w-16 h-16',
      border: 'border-3',
      glow: 'blur-lg'
    },
    xlarge: {
      container: 'w-24 h-24',
      image: 'w-24 h-24',
      border: 'border-4',
      glow: 'blur-xl'
    }
  };

  const config = sizeConfig[size];

  return (
    <motion.div 
      className={`relative group ${config.container} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      {...props}
    >
      {/* Glow Effect */}
      {showGlow && (
        <div className={`absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full ${config.glow} opacity-0 group-hover:opacity-75 transition-opacity duration-300`}></div>
      )}
      
      {/* Avatar Image */}
      <motion.img
        src={sourovDashImage}
        alt="Sourov Dash"
        className={`
          ${config.image} 
          rounded-full 
          object-cover 
          ${showBorder ? `${config.border} border-primary/30 group-hover:border-primary` : ''} 
          transition-all 
          duration-300 
          relative 
          z-10 
          shadow-lg
        `}
        whileHover={showGlow ? { 
          boxShadow: "0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.4)",
          rotate: [0, 2, -2, 0]
        } : {}}
        transition={{ duration: 0.3 }}
      />
      
      {/* Optional Status Indicator */}
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default Avatar;