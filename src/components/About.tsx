import { GraduationCap, Cpu, Code2, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/data';
import AnimatedSection from './AnimatedSection';

const highlights = [
  { icon: GraduationCap, label: 'Final Year', sublabel: 'B.Tech CS (AI & ML)', color: 'from-blue-500 to-cyan-400' },
  { icon: Code2, label: 'Full Stack', sublabel: 'Java & React', color: 'from-violet-500 to-purple-400' },
  { icon: Cpu, label: 'AI & ML', sublabel: 'TensorFlow & LLMs', color: 'from-emerald-500 to-teal-400' },
  { icon: Sparkles, label: 'Problem Solver', sublabel: 'Scalable Solutions', color: 'from-orange-500 to-amber-400' },
];

export default function About() {
  const { isDark } = useTheme();

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${isDark ? 'bg-primary-500/15 text-primary-300' : 'bg-primary-50 text-primary-600'}`}>
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">
              Get to know <span className="gradient-text">who I am</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <div>
              <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                {personalInfo.about}
              </p>
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-gradient-to-r from-primary-500/10 to-violet-500/10 border border-primary-500/10' : 'bg-white border border-gray-200 shadow-sm'}`}>
                <p className={`text-sm italic leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  "I believe in the power of technology to solve real-world problems. Every line of code is an opportunity to create something meaningful."
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-2xl p-6 text-center group cursor-default transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>{item.sublabel}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
