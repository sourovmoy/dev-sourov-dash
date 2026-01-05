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
    { key: 'spinner', label: 'Spinner', description: 'Classic rotating spinner' },
    { key: 'dots', label: 'Dots', description: 'Three bouncing dots' },
    { key: 'pulse', label: 'Pulse', description: 'Pulsing circle animation' },
    { key: 'bars', label: 'Bars', description: 'Animated bars loader' },
    { key: 'ripple', label: 'Ripple', description: 'Ripple effect animation' },
    { key: 'code', label: 'Code', description: 'Developer-themed loader' },
    { key: 'overlay', label: 'Overlay', description: 'Full-screen overlay loader' }
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loadingTypes.map((type, index) => (
          <motion.div
            key={type.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
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
                className={`w-full px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  loadingStates[type.key]
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-primary hover:bg-primary/80 text-white'
                }`}
              >
                {loadingStates[type.key] ? 'Stop Loading' : 'Start Loading'}
              </button>
              
              <div className="h-20 flex items-center justify-center bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-600">
                <Loading
                  loading={loadingStates[type.key]}
                  type={type.key === 'overlay' ? 'spinner' : type.key}
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