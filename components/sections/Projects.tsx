'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/lib/ThemeContext';

const projects = [
  {
    title: 'WhatsApp Translator',
    description: 'A browser extension that provides real-time translation for WhatsApp Web messages using AI-powered neural machine translation. Features seamless message translation with single-click activation, context-aware translation using conversation history, and outgoing message translation before sending.',
    tech: ['React 18', 'TypeScript', 'Fastify', 'DeepL API', 'OpenAI GPT-4o-mini', 'Supabase', 'Docker'],
    github: 'https://github.com/kaustubh-765/whatsapp-message-translator',
    featured: true,
  },
  {
    title: 'TaskRunner - CLI Tool',
    description: 'A lightweight CLI tool in Python that enables users to define, run, and monitor background tasks with automatic restart capabilities. Ensures workflows keep running reliably without manual intervention.',
    tech: ['Python', 'subprocess', 'signal', 'filelock', 'argparse', 'CLI'],
    github: 'https://github.com/kaustubh-765/threads-run-manager',
    featured: true,
  },
  {
    title: 'JLox Interpreter',
    description: 'An interpreter supporting dynamic typing, control flow, OOP features, garbage collection, and error handling using Java & Parsing Theory. Based on the "Crafting Interpreters" book by Bob Nystrom.',
    tech: ['Java', 'Parsing', 'Scanning', 'OOP', 'AST', 'Lexing', 'Interpreting'],
    github: 'https://github.com/kaustubh-765/Interpreter',
    featured: true,
  },
  {
    title: 'Intent Classification',
    description: 'Built a multi-class (60) multilingual (52 languages) LLM-based classifier using Transformers, HuggingFace, TensorFlow & PyTorch. Achieved 85% accuracy and F1 score of 80.05%.',
    tech: ['Python', 'Transformers', 'HuggingFace', 'TensorFlow', 'PyTorch', 'Docker'],
    github: 'https://github.com',
    featured: false,
  },
];

export function Projects() {
  const { isDark } = useTheme();

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <ScrollReveal>
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Featured{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
            <p className={`max-w-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              A selection of projects I&apos;ve built, showcasing my skills in AI integration, 
              full-stack development, cloud infrastructure, and system design.
            </p>
          </ScrollReveal>

          {/* Coffee Doodle */}
          <ScrollReveal delay={0.3} className="hidden md:block">
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-32 h-32"
            >
              <Image
                src="/doodles/coffee.svg"
                alt="Coffee illustration"
                fill
                className="object-contain"
                style={{ filter: isDark ? 'brightness(0) invert(1) opacity(0.7)' : 'opacity(0.9)' }}
              />
            </motion.div>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <motion.div
                className={`group relative rounded-xl border overflow-hidden transition-all ${
                  isDark 
                    ? 'bg-slate-800/30 border-slate-700/50 hover:border-blue-500/50' 
                    : 'bg-white border-gray-200 hover:border-blue-500'
                }`}
                whileHover={{ y: -5 }}
              >
                {/* Project Image Placeholder */}
                <div className={`relative h-48 overflow-hidden ${
                  isDark ? 'bg-gradient-to-br from-slate-700 to-slate-800' : 'bg-gradient-to-br from-gray-100 to-gray-200'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`text-6xl font-bold ${
                      isDark ? 'text-slate-600/20' : 'text-gray-300/40'
                    }`}>
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className={`absolute inset-0 ${
                    isDark ? 'bg-gradient-to-t from-slate-800/80 to-transparent' : 'bg-gradient-to-t from-white/80 to-transparent'
                  }`} />
                  
                  {project.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-sm mb-4 line-clamp-3 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-2 py-1 rounded text-xs ${
                          isDark ? 'bg-slate-700/50 text-gray-300' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className={`flex items-center justify-between pt-4 border-t ${
                    isDark ? 'border-slate-700/50' : 'border-gray-200'
                  }`}>
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isDark 
                            ? 'bg-slate-700 text-white hover:bg-blue-600' 
                            : 'bg-gray-100 text-slate-700 hover:bg-blue-500 hover:text-white'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        View Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="text-center mt-12">
            <a
              href="https://github.com/kaustubh-765"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 border rounded-lg transition-all ${
                isDark 
                  ? 'border-slate-700 text-gray-300 hover:border-blue-500 hover:text-white' 
                  : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-slate-900'
              }`}
            >
              <Github size={18} />
              View All Projects on GitHub
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}