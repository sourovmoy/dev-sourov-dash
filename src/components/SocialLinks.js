import React from 'react';
import { motion } from 'framer-motion';

const SocialLinks = ({ size = 'medium', layout = 'horizontal', showLabels = false }) => {
  const socialLinks = [
    { 
      name: 'GitHub',
      icon: 'fab fa-github', 
      href: 'https://github.com/sourovmoy', 
      color: 'hover:bg-gray-800 dark:hover:bg-gray-600',
      textColor: 'hover:text-gray-800 dark:hover:text-gray-300'
    },
    { 
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in', 
      href: 'https://www.linkedin.com/in/sourov-dash/', 
      color: 'hover:bg-blue-600',
      textColor: 'hover:text-blue-600'
    },
    { 
      name: 'Facebook',
      icon: 'fab fa-facebook-f', 
      href: 'https://www.facebook.com/sourovmmoysanju', 
      color: 'hover:bg-blue-700',
      textColor: 'hover:text-blue-700'
    }
  ];

  // Size configurations
  const sizeConfig = {
    small: {
      container: 'w-8 h-8',
      icon: 'text-sm',
      spacing: 'space-x-2'
    },
    medium: {
      container: 'w-12 h-12',
      icon: 'text-lg',
      spacing: 'space-x-4'
    },
    large: {
      container: 'w-16 h-16',
      icon: 'text-xl',
      spacing: 'space-x-6'
    }
  };

  const config = sizeConfig[size];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div 
      className={`flex ${layout === 'vertical' ? 'flex-col space-y-4' : `flex-row ${config.spacing}`} items-center justify-center`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.name}
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
          className="relative group"
        >
          <motion.a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Sourov Dash's ${social.name} profile`}
            className={`
              ${config.container} 
              rounded-full 
              bg-gray-100 dark:bg-gray-800 
              border border-gray-200 dark:border-gray-700
              flex items-center justify-center 
              text-gray-600 dark:text-gray-400 
              ${social.color} 
              hover:text-white 
              transition-all duration-300 
              ${config.icon}
              hover:shadow-lg
              hover:border-transparent
            `}
            variants={hoverVariants}
          >
            <i className={social.icon}></i>
          </motion.a>
          
          {/* Tooltip */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            {social.name}
          </div>
          
          {/* Label (if enabled) */}
          {showLabels && (
            <motion.span 
              className="text-sm text-gray-600 dark:text-gray-400 mt-2 block text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {social.name}
            </motion.span>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SocialLinks;