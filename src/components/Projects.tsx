import { Github, ExternalLink, Star, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data/data';
import type { Project } from '../data/data';
import AnimatedSection from './AnimatedSection';

export default function Projects() {
  const { isDark } = useTheme();
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${isDark ? 'bg-primary-500/15 text-primary-300' : 'bg-primary-50 text-primary-600'}`}>
              Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">
              Featured <span className="gradient-text">work</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-16">
          {/* Featured Projects */}
          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <FeaturedProjectCard project={project} isDark={isDark} />
              </AnimatedSection>
            ))}
          </div>

          {/* Other Projects Grid */}
          {otherProjects.length > 0 && (
            <div className="space-y-8 pt-6">
              <AnimatedSection>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)]">Other Notable Projects</h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                {otherProjects.map((project, index) => (
                  <AnimatedSection key={project.title} delay={index * 0.08} className="h-full">
                    <ProjectCard project={project} isDark={isDark} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({ project, isDark }: { project: Project; isDark: boolean }) {
  return (
    <div
      className={`glass-card rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${isDark ? 'border-primary-500/20' : 'border-primary-200'}`}
    >
      <div className="bg-gradient-to-r from-primary-500 to-violet-500 px-6 py-3">
        <div className="flex items-center gap-2 text-white">
          <Star size={16} className="fill-current" />
          <span className="text-xs font-bold uppercase tracking-wider">Featured Project</span>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] mb-4">{project.title}</h3>
        <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
             <span key={tech} className={`px-3 py-1 rounded-lg text-xs font-semibold ${isDark ? 'bg-primary-500/15 text-primary-300 border border-primary-500/20' : 'bg-white text-primary-700 border border-primary-200 shadow-xs'}`}>{tech}</span>
          ))}
        </div>

        {project.features && (
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary-400">Key Features</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-primary-400 mt-1 shrink-0" />
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.role && project.roleDetails && (
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary-400">My Role: {project.role}</h4>
            <div className="space-y-1.5">
              {project.roleDetails.map((detail) => (
                <div key={detail} className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-primary-400 mt-1 shrink-0" />
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl text-sm font-semibold shadow-lg shadow-primary-500/20 transition-all duration-200 hover:-translate-y-0.5 active:scale-95">
            <Github size={16} /> View Code
          </a>
          {project.demo && (
             <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${isDark ? 'bg-white/10 hover:bg-white/15 text-white border border-white/10' : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-xs'}`}>
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, isDark }: { project: Project; isDark: boolean }) {
  return (
    <div
      className="glass-card rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
    >
      <div>
        <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-heading)] mb-3">{project.title}</h3>
        <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
      </div>
      <div>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech) => (
            <span key={tech} className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${isDark ? 'bg-white/5 text-gray-300 border border-white/5' : 'bg-white text-gray-600 border border-gray-200 shadow-xs'}`}>{tech}</span>
          ))}
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${isDark ? 'bg-white/10 hover:bg-white/15 text-white border border-white/10' : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-xs'}`}>
          <Github size={16} /> View Code
        </a>
      </div>
    </div>
  );
}
