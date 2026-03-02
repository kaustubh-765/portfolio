'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Mail, Github, Linkedin, MapPin, Send, Loader2, CheckCircle, Phone } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/lib/ThemeContext';

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isDark } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    // Update the logic to send me an Email for people trying to contact me. For now, it just simulates a submission.
    // Or fill the google form and submit the data there, and I can check it from there.
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/kaustubh-765', username: '@kaustubh-765' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/mishra-kaustubh765', username: '/in/mishra-kaustubh765' },
    { icon: Mail, label: 'Email', href: 'mailto:kaustubhmishy@gmail.com', username: 'kaustubhmishy@gmail.com' },
    { icon: Phone, label: 'Phone', href: 'tel:+919452911841', username: '+91 94529 11841' },
  ];

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
          <p className={`mb-12 max-w-2xl ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            I&apos;m always interested in hearing about new opportunities, collaborations, 
            or just having a chat about technology, AI, and cloud infrastructure. Feel free to reach out!
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <ScrollReveal className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block text-sm mb-2 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className={`w-full px-4 py-3 border rounded-lg placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all ${
                      isDark 
                        ? 'bg-slate-800/50 border-slate-700 text-white' 
                        : 'bg-white border-gray-300 text-slate-900'
                    }`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm mb-2 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className={`w-full px-4 py-3 border rounded-lg placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all ${
                      isDark 
                        ? 'bg-slate-800/50 border-slate-700 text-white' 
                        : 'bg-white border-gray-300 text-slate-900'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm mb-2 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  className={`w-full px-4 py-3 border rounded-lg placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none ${
                    isDark 
                      ? 'bg-slate-800/50 border-slate-700 text-white' 
                      : 'bg-white border-gray-300 text-slate-900'
                  }`}
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <><Loader2 className="animate-spin" size={18} /> Sending...</>
                ) : isSubmitted ? (
                  <><CheckCircle size={18} /> Message Sent!</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </motion.button>
            </form>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.2} className="space-y-6">
            {/* Doodle */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-48 h-48 mx-auto"
            >
              <Image
                src="/doodles/loving.svg"
                alt="Love illustration"
                fill
                className="object-contain"
                style={{ filter: isDark ? 'brightness(0) invert(1) opacity(0.8)' : 'opacity(0.9)' }}
              />
            </motion.div>

            <div className={`p-6 rounded-xl border ${
              isDark 
                ? 'bg-slate-800/30 border-slate-700/50' 
                : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className={`font-medium ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>Location</p>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>New Delhi / Jaipur, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className={`font-medium ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>Email</p>
                    <a
                      href="mailto:kaustubhmishy@gmail.com"
                      className="text-sm text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      kaustubhmishy@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className={`font-medium ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>Phone</p>
                    <a
                      href="tel:+919452911841"
                      className="text-sm text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      +91 94529 11841
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-xl border ${
              isDark 
                ? 'bg-slate-800/30 border-slate-700/50' 
                : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>Social Profiles</h3>
              
              <div className="space-y-3">
                {socialLinks.map(({ icon: Icon, label, href, username }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors group ${
                      isDark ? 'hover:bg-slate-700/30' : 'hover:bg-gray-50'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <Icon className={`w-5 h-5 transition-colors ${
                      isDark ? 'text-gray-400 group-hover:text-blue-400' : 'text-gray-500 group-hover:text-blue-500'
                    }`} />
                    <div>
                      <p className={`text-sm font-medium ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>{label}</p>
                      <p className={`text-xs ${
                        isDark ? 'text-gray-500' : 'text-gray-500'
                      }`}>{username}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className={`p-6 rounded-xl border ${
              isDark 
                ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20' 
                : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'
            }`}>
              <p className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <span className={`font-medium ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>Currently open</span> for
                new opportunities in AI, Cloud Infrastructure, and Full-Stack Development.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}