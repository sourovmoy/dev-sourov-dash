import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Loading from './Loading';

const LoadingExample = () => {
  const [loadingStates, setLoadingStates] = useState({
    spinner: false,
    dots: false,
    pulse: false,
    bars: false,
    ripple: false,
    code: false,
    overlay: false
  });

  const toggleLoading = (type) => {
    setLoadingStates(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const loadingTypes = [
    { key: 'spinner', label: 'Enhanced Spinner', description: 'Gradient spinner with glow effects' },
    { key: 'dots', label: 'Wave Dots', description: 'Five bouncing dots with wave animation' },
    { key: 'pulse', label: 'Multi Pulse', description: 'Multiple pulsing rings with gradients' },
    { key: 'bars', label: 'Gradient Bars', description: 'Seven animated bars with gradients' },
    { key: 'ripple', label: 'Ripple Effect', description: 'Expanding ripple circles' },
    { key: 'code', label: 'Code Orbital', description: 'Developer-themed with floating symbols' },
    { key: 'orbital', label: 'Orbital Rings', description: 'Beautiful orbital animation with rings' },
    { key: 'overlay', label: 'Overlay Demo', description: 'Full-screen overlay with backdrop' }
  ];

  const colorOptions = [
    { key: 'primary', label: 'Primary', description: 'Cyan to blue gradient' },
    { key: 'secondary', label: 'Secondary', description: 'Pink to purple gradient' },
    { key: 'rainbow', label: 'Rainbow', description: 'Multi-color rainbow gradient' },
    { key: 'neon', label: 'Neon', description: 'Bright neon cyan to lime' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-display font-bold text-primary mb-4">
          Loading Component Demo
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Click the buttons below to test different loading animations
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {loadingTypes.map((type, index) => (
          <motion.div
            key={type.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {type.label}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {type.description}
            </p>
            
            <div className="space-y-4">
              <button
                onClick={() => toggleLoading(type.key)}
                className={`w-full px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
                  loadingStates[type.key]
                    ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg'
                    : 'bg-gradient-to-r from-primary to-cyan-500 hover:from-cyan-500 hover:to-primary text-white shadow-lg'
                }`}
              >
                {loadingStates[type.key] ? 'Stop Loading' : 'Start Loading'}
              </button>
              
              <div className="h-24 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 shadow-inner">
                <Loading
                  loading={loadingStates[type.key]}
                  type={type.key === 'overlay' ? 'orbital' : type.key}
                  size="medium"
                  color="primary"
                  text={loadingStates[type.key] ? 'Loading...' : ''}
                  overlay={type.key === 'overlay'}
                />
                {!loadingStates[type.key] && (
                  <span className="text-gray-400 text-sm">Click to test</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Color Options Demo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mb-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
      >
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
          Color Themes Demo
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colorOptions.map((colorOption) => (
            <div key={colorOption.key} className="text-center">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {colorOption.label}
              </h4>
              <div className="h-20 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
                <Loading
                  loading={true}
                  type="orbital"
                  size="small"
                  color={colorOption.key}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">{colorOption.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Examples */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
      >
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Usage Examples
        </h3>
        
        <div className="space-y-4 text-sm">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-medium text-gray-800 dark:text-white mb-2">Basic Usage:</h4>
            <pre className="text-gray-600 dark:text-gray-400 overflow-x-auto">
{`import Loading from './components/Loading';

// Simple loading spinner
<Loading loading={isLoading} />

// With custom text
<Loading 
  loading={isLoading} 
  text="Please wait..." 
/>`}
            </pre>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-medium text-gray-800 dark:text-white mb-2">Advanced Usage:</h4>
            <pre className="text-gray-600 dark:text-gray-400 overflow-x-auto">
{`// Full-screen overlay
<Loading 
  loading={isLoading}
  type="code"
  size="large"
  color="primary"
  text="Loading your data..."
  overlay={true}
/>

// Different animations
<Loading loading={isLoading} type="dots" />
<Loading loading={isLoading} type="pulse" />
<Loading loading={isLoading} type="bars" />`}
            </pre>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingExample;