
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

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark">
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
