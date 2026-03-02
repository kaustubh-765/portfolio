'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '../animations/ScrollReveal';
import { TypewriterText } from '../animations/TextAnimator';
import { Code, Briefcase, GraduationCap, Heart } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/lib/ThemeContext';

const highlights = [
  { icon: Briefcase, title: 'Experience', value: '1+ Years', description: 'Professional Development' },
  { icon: Code, title: 'Projects', value: '10+', description: 'Completed Projects' },
  { icon: GraduationCap, title: 'Education', value: 'B.Tech', description: 'Computer Science' },
  { icon: Heart, title: 'Passion', value: '100%', description: 'AI & Cloud Tech' },
];

export function About() {
  const { isDark } = useTheme();

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            About{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-12" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal delay={0.2}>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <TypewriterText
                  text="Hello! I'm Kaustubh Mishra, an Associate Software Engineer passionate about building scalable cloud infrastructure and AI-powered solutions."
                  speed={20}
                  delay={200}
                />
              </p>
              
              <p className={`leading-relaxed mt-4 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                I specialize in microservices architecture, Kubernetes orchestration, and AI orchestration using tools like Claude Code and Kilo Code. 
                My experience spans from developing full-stack applications to architecting multi-region cloud solutions at E2E Networks.
              </p>

              <p className={`leading-relaxed mt-4 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                I'm passionate about reducing development cycles through strategic AI orchestration and automation. 
                When I'm not coding, you'll find me exploring new AI frameworks, contributing to open-source projects, 
                or hosting the CMLBDA Podcast where I discuss technology and innovation.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['Problem Solver', 'Cloud Architect', 'AI Enthusiast', 'Open Source Contributor'].map((trait) => (
                  <span
                    key={trait}
                    className={`px-4 py-2 border rounded-full text-sm ${
                      isDark 
                        ? 'bg-slate-800/50 border-slate-700/50 text-gray-300' 
                        : 'bg-white border-gray-200 text-gray-700'
                    }`}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className={`p-4 rounded-xl border transition-all group text-center ${
                      isDark 
                        ? 'bg-slate-800/30 border-slate-700/50 hover:border-blue-500/50' 
                        : 'bg-white border-gray-200 hover:border-blue-500'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <item.icon className="w-8 h-8 text-blue-500 mb-3 mx-auto group-hover:text-purple-500 transition-colors" />
                    <h3 className={`text-2xl font-bold mb-1 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>{item.value}</h3>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>{item.title}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Doodle Illustration */}
          <ScrollReveal delay={0.3} className="hidden lg:block">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full h-80"
            >
              <Image
                src="/doodles/reading.svg"
                alt="Reading illustration"
                fill
                className="object-contain"
                style={{ filter: isDark ? 'brightness(0) invert(1) opacity(0.8)' : 'opacity(0.9)' }}
              />
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}