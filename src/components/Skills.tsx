import { useTheme } from '../context/ThemeContext';
import { skillCategories } from '../data/data';
import AnimatedSection from './AnimatedSection';

export default function Skills() {
  const { isDark } = useTheme();

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${isDark ? 'bg-primary-500/15 text-primary-300' : 'bg-primary-50 text-primary-600'}`}>
              Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">
              My <span className="gradient-text">technical toolkit</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((category, catIndex) => (
            <AnimatedSection key={category.title} delay={catIndex}>
              <div className="glass-card rounded-2xl p-6 h-full group transition-transform duration-200 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-md transition-transform duration-200 group-hover:rotate-6 group-hover:scale-110`}>
                    <category.icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-base">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-150 ${
                        isDark ? 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
