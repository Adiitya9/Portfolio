import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0f] text-white"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Monogram A */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg shadow-indigo-500/20"
        >
          <span className="text-3xl font-extrabold font-[family-name:var(--font-heading)]">A</span>
        </motion.div>

        {/* Aditya Anant */}
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl font-bold tracking-widest font-[family-name:var(--font-heading)]"
        >
          ADITYA ANANT
        </motion.h2>

        {/* Subtle loading bar */}
        <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut"
            }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    const timer = setTimeout(() => setIsLoading(false), 1400);
    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, [isLoading]);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="loader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="min-h-screen transition-colors duration-300 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark"
      >
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Banner Section */}
        <Hero />

        {/* Main Content Sections Container */}
        <main className="max-w-7xl mx-auto relative z-10">
          {/* About Me Section */}
          <About />

          {/* Technical Skills Section */}
          <Skills />

          {/* Featured & Other Projects Section */}
          <Projects />

          {/* Education Timeline Section */}
          <Education />

          {/* Professional Certifications Section */}
          <Certifications />

          {/* Contact Details & Message Form Section */}
          <Contact />
        </main>

        {/* Footer with Copyright and Social Links */}
        <Footer />
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
