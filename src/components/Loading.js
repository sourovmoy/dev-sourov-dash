import React, { useState, useEffect } from 'react';

/**
 * Full-Page Landing Loader Component
 * A modern, animated progress bar loader that covers the entire viewport
 * 
 * @param {boolean} loading - Whether to show the loader (default: true)
 * @param {number} duration - Total time to reach 100% in milliseconds (default: 3000)
 * @param {string} backgroundColor - Background color of the loader page (default: '#ffffff')
 * @param {string} progressBg - Background color of the progress bar (default: '#e5e7eb')
 * @param {string} progressFill - Fill color of the progress bar (default: '#3b82f6')
 * @param {string} textColor - Color of the percentage text (default: '#374151')
 * @param {boolean} gradient - Use gradient fill instead of solid color (default: false)
 * @param {string} gradientFrom - Gradient start color (default: '#3b82f6')
 * @param {string} gradientTo - Gradient end color (default: '#1d4ed8')
 * @param {function} onComplete - Callback function when loading reaches 100%
 * @param {string} title - Title text to display (default: 'Loading...')
 * @param {string} subtitle - Subtitle text to display (optional)
 */
const Loading = ({
  loading = true,
  duration = 3000,
  backgroundColor = '#ffffff',
  progressBg = '#e5e7eb',
  progressFill = '#3b82f6',
  textColor = '#374151',
  gradient = false,
  gradientFrom = '#3b82f6',
  gradientTo = '#1d4ed8',
  onComplete = null,
  title = 'Loading...',
  subtitle = ''
}) => {
  // State to track current progress percentage (0-100)
  const [progress, setProgress] = useState(0);
  
  // State to control fade out animation
  const [isVisible, setIsVisible] = useState(true);
  
  // State to track if loading is complete
  const [isComplete, setIsComplete] = useState(false);

  /**
   * Effect to animate progress from 0% to 100%
   * Uses requestAnimationFrame for smooth 60fps animation
   */
  useEffect(() => {
    if (!loading) {
      return;
    }

    let startTime = null;
    let animationFrame = null;

    /**
     * Animation function that updates progress based on elapsed time
     * Uses easeOutQuart for smooth deceleration towards the end
     */
    const animate = (currentTime) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      // Calculate elapsed time as a percentage of total duration
      const elapsed = currentTime - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);

      // Apply easing function for smooth animation (easeOutQuart)
      const easedProgress = 1 - Math.pow(1 - progressRatio, 4);
      
      // Calculate current percentage (0% to 100%)
      const currentProgress = Math.round(easedProgress * 100);
      
      setProgress(currentProgress);

      // Continue animation if not complete
      if (progressRatio < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Animation complete
        setIsComplete(true);
        
        // Start fade out after a brief delay
        setTimeout(() => {
          setIsVisible(false);
          
          // Call onComplete callback
          if (onComplete && typeof onComplete === 'function') {
            onComplete();
          }
        }, 500); // Brief pause at 100% before calling onComplete
      }
    };

    // Start the animation
    animationFrame = requestAnimationFrame(animate);

    // Cleanup function to cancel animation on unmount or loading change
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [loading, duration, onComplete]);

  // Don't render anything if not loading and fade out is complete
  if (!loading && !isVisible) return null;
  
  // Also don't render if loading is false initially
  if (!loading) return null;

  /**
   * Dynamic styles for the loader
   */
  const loaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.5s ease-out',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
  };

  const contentStyle = {
    textAlign: 'center',
    width: '100%',
    maxWidth: '500px'
  };

  const titleStyle = {
    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
    fontWeight: '700',
    color: textColor,
    marginBottom: '0.5rem',
    letterSpacing: '-0.025em'
  };

  const subtitleStyle = {
    fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
    color: textColor,
    opacity: 0.7,
    marginBottom: '3rem',
    fontWeight: '400'
  };

  const progressContainerStyle = {
    width: '100%',
    marginBottom: '1.5rem'
  };

  const progressBarBgStyle = {
    width: '100%',
    height: '8px',
    backgroundColor: progressBg,
    borderRadius: '9999px',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
  };

  const progressBarFillStyle = {
    height: '100%',
    width: `${progress}%`,
    background: gradient 
      ? `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`
      : progressFill,
    borderRadius: '9999px',
    transition: 'width 0.1s ease-out',
    position: 'relative',
    boxShadow: gradient 
      ? `0 0 20px ${gradientFrom}40`
      : `0 0 20px ${progressFill}40`
  };

  const percentageStyle = {
    fontSize: 'clamp(2rem, 6vw, 4rem)',
    fontWeight: '800',
    color: gradient ? gradientTo : progressFill,
    marginBottom: '1rem',
    letterSpacing: '-0.05em',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const statusStyle = {
    fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
    color: textColor,
    opacity: 0.6,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.1em'
  };

  // Shimmer effect for the progress bar
  const shimmerStyle = {
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
    animation: 'shimmer 2s infinite'
  };

  return (
    <>
      <div style={loaderStyle}>
        <div style={contentStyle}>
          {/* Title */}
          <h1 style={titleStyle}>
            {title}
          </h1>
          
          {/* Subtitle (if provided) */}
          {subtitle && (
            <p style={subtitleStyle}>
              {subtitle}
            </p>
          )}
          
          {/* Percentage Display */}
          <div style={percentageStyle}>
            {progress}%
          </div>
          
          {/* Progress Bar Container */}
          <div style={progressContainerStyle}>
            <div style={progressBarBgStyle}>
              <div style={progressBarFillStyle}>
                {/* Shimmer Effect */}
                <div style={shimmerStyle}></div>
              </div>
            </div>
          </div>
          
          {/* Status Text */}
          <div style={statusStyle}>
            {isComplete ? 'Complete!' : 'Please wait...'}
          </div>
        </div>
      </div>

      {/* CSS Animation for Shimmer Effect */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .loader-content {
            padding: 1rem;
          }
        }
        
        /* Smooth animations */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </>
  );
};

export default Loading;