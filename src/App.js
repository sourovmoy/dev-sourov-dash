import React, { useState, useEffect } from 'react';
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
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Simulate initial app loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-300 font-body transition-colors duration-300">
      {/* Initial Loading Screen */}
      <Loading 
        loading={isInitialLoading}
        overlay={true}
        type="code"
        size="large"
        color="primary"
        text="Welcome to Sourov Dash Portfolio"
      />
      
      {/* Main App Content */}
      {!isInitialLoading && (
        <>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;