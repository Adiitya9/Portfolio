import { Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { certifications } from '../data/data';
import AnimatedSection from './AnimatedSection';

export default function Certifications() {
  const { isDark } = useTheme();

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${isDark ? 'bg-primary-500/15 text-primary-300' : 'bg-primary-50 text-primary-600'}`}>
              Achievements
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">
              Certifications & <span className="gradient-text">Achievements</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedSection key={cert.title} delay={index}>
              <div className="glass-card rounded-2xl p-6 h-full group transition-transform duration-200 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20 shrink-0">
                    <Award size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 font-[family-name:var(--font-heading)]">{cert.title}</h3>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{cert.issuer}</p>
                      {cert.date && (
                        <span className={`text-xs px-2.5 py-0.5 rounded-full ${isDark ? 'bg-white/10 text-gray-300' : 'bg-white text-gray-600 border border-gray-200 shadow-xs'}`}>
                          {cert.date}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className={`mt-5 pt-4 border-t border-dashed ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                  <div className="h-1 w-full rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
