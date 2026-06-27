import { useState, type FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { contactInfo } from '../data/data';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/adityaanant42@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        alert("Oops! Something went wrong while sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Failed to send message. Please verify your network connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `w-full px-4 py-3 rounded-xl text-sm transition-all outline-none ${
    isDark
      ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:bg-white/[0.08]'
      : 'bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:border-primary-400 focus:shadow-xs'
  }`;

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${isDark ? 'bg-primary-500/15 text-primary-300' : 'bg-primary-50 text-primary-600'}`}>
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">
              Let's <span className="gradient-text">connect</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <AnimatedSection className="h-full">
            <div className="space-y-4 h-full flex flex-col">
              <h3 className="text-xl font-bold mb-6 font-[family-name:var(--font-heading)]">Get in touch</h3>
              <div className="glass-card rounded-2xl p-6 md:p-8 flex-1 flex flex-col justify-center">
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4 group transition-transform duration-150 hover:translate-x-1">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center shrink-0">
                        <info.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className={`text-xs font-medium uppercase tracking-wider mb-0.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{info.label}</p>
                        {info.href ? (
                          <a href={info.href} target={info.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className={`text-sm font-medium hover:text-primary-400 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{info.value}</a>
                        ) : (
                          <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="h-full" delay={1}>
            <div className="space-y-4 h-full flex flex-col">
              <h3 className="text-xl font-bold mb-6 font-[family-name:var(--font-heading)]">Send a message</h3>
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-5 flex-1 flex flex-col justify-between">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} placeholder="Your name" className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} placeholder="your@email.com" className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                    <textarea id="message" name="message" required rows={5} value={formData.message} onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} placeholder="Your message..." className={`${inputClasses} resize-none`} />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] ${
                      isSubmitted ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40'
                    } disabled:opacity-70`}
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : isSubmitted ? (
                      <><CheckCircle size={18} /> Message Sent!</>
                    ) : (
                      <><Send size={18} /> Send Message</>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
