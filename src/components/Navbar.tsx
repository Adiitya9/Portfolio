import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { navLinks } from '../data/data';

const sectionIds = navLinks.map(link => link.href.replace('#', ''));

export default function Navbar() {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const activeId = useScrollSpy(sectionIds, 150);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    const timer = setTimeout(() => setNavVisible(true), 100);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
      style={{
        transform: navVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.5s ease, background-color 0.3s, box-shadow 0.3s',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="text-xl md:text-2xl font-bold font-[family-name:var(--font-heading)] transition-transform duration-200 hover:scale-105 active:scale-95 block"
          >
            <span className="gradient-text">Aditya</span>
            <span className={isDark ? 'text-white' : 'text-gray-800'}> Anant</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeId === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? `${isDark ? 'text-white bg-primary-500/20' : 'text-primary-600 bg-primary-50'}`
                      : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-800 hover:text-black'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-transform active:scale-95 ${isDark ? 'text-white' : 'text-gray-800'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden glass border-t border-white/10 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? isDark ? 'bg-primary-500/20 text-white' : 'bg-primary-50 text-primary-600'
                    : isDark ? 'text-gray-400 hover:text-white hover:bg-white/5' : 'text-gray-800 hover:text-black hover:bg-gray-50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
