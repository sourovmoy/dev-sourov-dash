import { useState, useEffect } from 'react';

/**
 * Custom hook for managing dark/light theme with localStorage persistence
 * @returns {Object} { darkMode: boolean, toggleDarkMode: function, setTheme: function }
 */
export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      // Check localStorage first
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      
      // If no saved preference, check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return true;
      }
      
      // Default to dark mode (matches your portfolio design)
      return true;
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn('Error reading theme from localStorage:', error);
      }
      return true; // Default to dark mode
    }
  });

  // Apply theme changes to DOM and localStorage
  useEffect(() => {
    try {
      const root = document.documentElement;
      
      if (darkMode) {
        root.classList.add('dark');
        localStorage.setItem('portfolio-theme', 'dark');
        // Update meta theme-color for mobile browsers
        updateMetaThemeColor('#0a0a0f'); // dark background
      } else {
        root.classList.remove('dark');
        localStorage.setItem('portfolio-theme', 'light');
        // Update meta theme-color for mobile browsers
        updateMetaThemeColor('#f3f4f6'); // light background
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn('Error saving theme to localStorage:', error);
      }
    }
  }, [darkMode]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e) => {
      try {
        // Only auto-switch if user hasn't manually set a preference
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (!savedTheme) {
          setDarkMode(e.matches);
        }
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.warn('Error handling system theme change:', error);
        }
      }
    };

    // Add event listener for system theme changes
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemThemeChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleSystemThemeChange);
    }

    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
      } else {
        mediaQuery.removeListener(handleSystemThemeChange);
      }
    };
  }, []);

  // Toggle between dark and light mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Set specific theme
  const setTheme = (theme) => {
    if (theme === 'dark' || theme === 'light') {
      setDarkMode(theme === 'dark');
    } else if (theme === 'system') {
      // Follow system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(systemPrefersDark);
      // Remove saved preference to follow system
      localStorage.removeItem('portfolio-theme');
    }
  };

  return {
    darkMode,
    toggleDarkMode,
    setTheme,
    currentTheme: darkMode ? 'dark' : 'light'
  };
};

// Helper function to update meta theme-color
const updateMetaThemeColor = (color) => {
  try {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.name = 'theme-color';
      document.head.appendChild(metaThemeColor);
    }
    
    metaThemeColor.content = color;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn('Error updating meta theme-color:', error);
    }
  }
};

export default useTheme;