import { useState, useEffect } from 'react';
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
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const timer = setTimeout(() => setFadeOut(true), isMobile ? 400 : 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0f] text-white transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <span className="text-3xl font-extrabold font-[family-name:var(--font-heading)]">A</span>
        </div>
        <h2 className="text-xl font-bold tracking-widest font-[family-name:var(--font-heading)]">
          ADITYA ANANT
        </h2>
        <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <div className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-slide" />
        </div>
      </div>
    </div>
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
    const isMobile = window.innerWidth < 768;
    const timer = setTimeout(() => setIsLoading(false), isMobile ? 500 : 1000);
    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, [isLoading]);

  return (
    <ThemeProvider>
      {isLoading && <Preloader />}

      <div
        className="min-h-screen bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark"
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
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
      </div>
    </ThemeProvider>
  );
}

export default App;
