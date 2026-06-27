import { motion } from 'framer-motion';
import { ArrowDown, Download, FolderOpen, MessageSquare } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, socialLinks } from '../data/data';

function FloatingOrbs() {
  const { isDark } = useTheme();
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className={`absolute -top-20 -right-20 w-[450px] h-[450px] rounded-full blur-[100px] ${
          isDark ? 'bg-primary-500/[0.12]' : 'bg-primary-500/[0.03]'
        }`}
      />
      <div
        className={`absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] ${
          isDark ? 'bg-cyan-500/[0.10]' : 'bg-cyan-500/[0.03]'
        }`}
      />
      <div
        className={`absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full blur-[140px] ${
          isDark ? 'bg-violet-500/[0.08]' : 'bg-violet-500/[0.02]'
        }`}
      />
      <div
        className={`absolute inset-0 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.012]'}`}
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingOrbs />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
              isDark
                ? 'bg-primary-500/15 text-primary-300 border border-primary-500/20'
                : 'bg-primary-50 text-primary-600 border border-primary-200'
            }`}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-bold font-[family-name:var(--font-heading)] mb-4 tracking-tight"
        >
          Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className={`text-lg sm:text-xl md:text-2xl font-medium mb-6 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className={`text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}
        >
          {personalInfo.intro}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <motion.a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-shadow"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} /> Download Resume
          </motion.a>
          <motion.a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${
              isDark ? 'bg-white/10 hover:bg-white/15 text-white border border-white/10' : 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-200'
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FolderOpen size={18} /> View Projects
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${
              isDark ? 'text-primary-300 hover:bg-primary-500/10 border border-primary-500/20' : 'text-primary-600 hover:bg-primary-50/50 border border-primary-200'
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageSquare size={18} /> Contact Me
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-xl transition-colors ${
                isDark ? 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5' : 'bg-white hover:bg-gray-50 text-gray-500 hover:text-gray-800 border border-gray-200'
              }`}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label={link.name}
            >
              <link.icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className={`flex flex-col items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
