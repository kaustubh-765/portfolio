'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Mail, Github, Linkedin, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      username: '@johndoe',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      username: '/in/johndoe',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:hello@johndoe.dev',
      username: 'hello@johndoe.dev',
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
          <p className="text-gray-400 mb-12 max-w-2xl">
            I&apos;m always interested in hearing about new opportunities, collaborations, 
            or just having a chat about technology. Feel free to reach out!
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <ScrollReveal className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none"
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
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.2} className="space-y-6">
            {/* Doodle */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-48 h-48 mx-auto"
            >
              <Image
                src="/doodles/loving.svg"
                alt="Love illustration"
                fill
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1) opacity(0.8)' }}
              />
            </motion.div>

            <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-400 text-sm">Bangalore, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a
                      href="mailto:hello@johndoe.dev"
                      className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
                    >
                      hello@johndoe.dev
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Social Profiles</h3>
              
              <div className="space-y-3">
                {socialLinks.map(({ icon: Icon, label, href, username }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/30 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    <div>
                      <p className="text-white text-sm font-medium">{label}</p>
                      <p className="text-gray-500 text-xs">{username}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
              <p className="text-gray-300 text-sm">
                <span className="text-white font-medium">Currently available</span> for
                full-time opportunities and freelance projects.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}