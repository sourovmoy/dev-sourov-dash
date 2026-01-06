import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const { darkMode, toggleDarkMode } = useTheme();
  
  // State to control the loading screen
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  /**
   * Handle loading completion
   * Called when the progress bar reaches 100%
   */
  const handleLoadingComplete = () => {
    // First hide the loader
    setIsLoading(false);
    // Then show the content after a brief delay
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <>
      {/* Full-Page Loading Screen */}
      {isLoading && (
        <Loading
          loading={true}
          duration={3000} // 3 seconds to reach 100%
          backgroundColor={darkMode ? '#1f2937' : '#ffffff'}
          progressBg={darkMode ? '#374151' : '#e5e7eb'}
          progressFill={darkMode ? '#60a5fa' : '#3b82f6'}
          textColor={darkMode ? '#f9fafb' : '#374151'}
          gradient={true}
          gradientFrom={darkMode ? '#3b82f6' : '#3b82f6'}
          gradientTo={darkMode ? '#1d4ed8' : '#1d4ed8'}
          title="Sourov Dash Portfolio"
          subtitle="Loading amazing projects and experiences..."
          onComplete={handleLoadingComplete}
        />
      )}

      {/* Main Portfolio Content */}
      {showContent && (
        <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-300 font-body transition-colors duration-300">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;