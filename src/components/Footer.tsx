import { ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { socialLinks } from '../data/data';

export default function Footer() {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative py-12 px-6 ${isDark ? 'bg-black/30' : 'bg-gray-50/80'}`}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {'\u00a9'} 2026 <span className="font-semibold gradient-text">Aditya Anant</span>. All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className={`p-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${isDark ? 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800'}`} aria-label={link.name}>
                <link.icon size={18} />
              </a>
            ))}
          </div>
          <button onClick={scrollToTop} className={`p-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${isDark ? 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5' : 'bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 border border-gray-100'}`} aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
