'use client';

import { motion } from 'framer-motion';
import { TextAnimator } from '../animations/TextAnimator';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/lib/ThemeContext';

export function Hero() {
  const { isDark } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-500 border border-blue-500/20">
              Associate Software Engineer
            </span>
          </motion.div>

          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            <TextAnimator
              text="Kaustubh"
              className="block"
              delay={0.2}
            />
            <TextAnimator
              text="Mishra"
              className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              delay={0.4}
            />
          </h1>

          <ScrollReveal delay={0.6}>
            <p className={`text-lg md:text-xl mb-8 max-w-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Reducing Development Cycles by 10x using Strategic AI Orchestration. 
              Specializing in cloud infrastructure, microservices, and AI-powered solutions.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.8}>
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <span className="relative z-10">Get in touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#projects"
                className={`px-6 py-3 border text-sm font-medium rounded-lg transition-all hover:scale-105 ${
                  isDark 
                    ? 'border-gray-700 text-gray-300 hover:border-blue-500 hover:text-white' 
                    : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-slate-900'
                }`}
              >
                View projects
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: Github, href: 'https://github.com/kaustubh-765', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/mishra-kaustubh765', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:kaustubhmishy@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className={`p-3 rounded-lg transition-all border ${
                    isDark 
                      ? 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50 border-slate-700/50 hover:border-blue-500/50' 
                      : 'bg-white/50 text-gray-600 hover:text-slate-900 hover:bg-white border-gray-200 hover:border-blue-500'
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Doodle Illustration */}
        <motion.div
          className="hidden lg:flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-80 h-80"
          >
            <Image
              src="/doodles/levitate.svg"
              alt="Developer illustration"
              fill
              className="object-contain"
              style={{ filter: isDark ? 'brightness(0) invert(1) opacity(0.85)' : 'opacity(0.9)' }}
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className={`transition-colors ${
          isDark ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-slate-900'
        }`}>
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}