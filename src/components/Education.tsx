import { GraduationCap, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { education } from '../data/data';
import AnimatedSection from './AnimatedSection';

export default function Education() {
  const { isDark } = useTheme();

  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${isDark ? 'bg-primary-500/15 text-primary-300' : 'bg-primary-50 text-primary-600'}`}>
              Education
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">
              Academic <span className="gradient-text">journey</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="relative">
          <div className={`absolute left-6 md:left-8 top-0 bottom-0 w-px ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />
          <div className="space-y-8">
            {education.map((item, index) => (
              <AnimatedSection key={item.degree} delay={index}>
                <div className="relative flex gap-6 md:gap-8">
                  <div className="relative z-10 shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center shadow-lg shadow-primary-500/20 transition-transform duration-200 hover:scale-105">
                      <GraduationCap size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="glass-card rounded-2xl p-6 flex-1 transition-transform duration-200 hover:-translate-y-0.5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold font-[family-name:var(--font-heading)]">{item.degree}</h3>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-primary-500/15 text-primary-300' : 'bg-white text-primary-600 border border-primary-200 shadow-xs'}`}>
                        <Calendar size={12} /> {item.year}
                      </span>
                    </div>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>{item.institution}</p>
                    {item.description && <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>{item.description}</p>}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
