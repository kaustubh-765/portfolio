'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Calendar, MapPin, Rocket } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/lib/ThemeContext';

const experiences = [
  {
    role: 'Associate Software Engineer',
    company: 'E2E Networks',
    period: 'Jan 2025 - Present',
    location: 'New Delhi',
    description: 'Architecting and deploying microservice-based backend systems using Python, Django, Celery, and Ansible to power high-availability cloud solutions.',
    achievements: [
      'Leveraged AI orchestration tools (Claude Code, Kilo Code) to reduce development time by 10x',
      'Implemented Multi-Master Kubernetes architecture for K8s-as-a-Service with multi-node redundancy',
      'Engineered secure multi-cloud VPC peering for data platforms with encrypted, low-latency communication',
      'Developed automated snapshot shipping to S3-compatible storage using Linstor for disaster recovery',
      'Enhanced DBaaS APIs, reducing response latency by 35% through query optimization',
      'Optimized HAProxy load balancing, increasing throughput by 40% and decreasing latency by 25%',
    ],
    tech: ['Python', 'Django', 'Kubernetes', 'Ansible', 'HAProxy', 'PostgreSQL', 'AWS'],
  },
  {
    role: 'Software Developer Intern',
    company: 'Quickdesk Academy',
    period: 'May 2024 - Nov 2024',
    location: 'Remote (Singapore)',
    description: 'Delivered full-stack modules using Nest.js, React, TypeORM, and Docker for campaign management and AI-powered lead engagement.',
    achievements: [
      'Improved campaign performance by 40% and cut deployment cycles by 50%',
      'Developed conversational-AI flows using Rasa intent models and OpenAI GPTs for Engages.ai',
      'Reduced lead response time by 30% through AI automation',
      'Integrated analytics pipelines for behavior-based tracking, increasing client acquisition by 10%',
      'Built automated engagement dashboards for customer lifecycle metrics',
    ],
    tech: ['Nest.js', 'React', 'TypeORM', 'Docker', 'Rasa', 'OpenAI GPT', 'PostgreSQL'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'OneInfinity Labs',
    period: 'Jan 2024 - May 2024',
    location: 'Remote (India)',
    description: 'Developed LLM-powered content automation pipelines and architected scalable datastores for personalized content delivery.',
    achievements: [
      'Built LLM-powered content automation using LangChain, reducing manual effort by 50%',
      'Architected scalable datastore using Supabase, improving data retrieval speeds by 30%',
      'Integrated AI content delivery pipelines into internal dashboards',
      'Enabled personalized content delivery at scale through automation',
    ],
    tech: ['LangChain', 'Python', 'Supabase', 'React', 'Node.js', 'OpenAI GPT'],
  },
];

export function Experience() {
  const { isDark } = useTheme();

  return (
    <section id="experience" className={`relative py-24 px-6 overflow-hidden ${
      isDark ? 'bg-slate-900/50' : 'bg-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <ScrollReveal>
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Work{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </ScrollReveal>

          {/* Doodle */}
          <ScrollReveal delay={0.3} className="hidden md:block">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-40 h-32"
            >
              <Image
                src="/doodles/strolling.svg"
                alt="Strolling illustration"
                fill
                className="object-contain"
                style={{ filter: isDark ? 'brightness(0) invert(1) opacity(0.7)' : 'opacity(0.9)' }}
              />
            </motion.div>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.role + exp.company} delay={index * 0.1}>
                <motion.div
                  className={`relative pl-8 border-l-2 transition-colors ${
                    isDark ? 'border-slate-700 hover:border-blue-500' : 'border-gray-300 hover:border-blue-500'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-transparent" />
                  
                  <div className={`rounded-xl border p-6 transition-all ${
                    isDark 
                      ? 'bg-slate-800/30 border-slate-700/50 hover:border-blue-500/50' 
                      : 'bg-white border-gray-200 hover:border-blue-500'
                  }`}>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className={`text-xl font-semibold mb-1 ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                          {exp.role}
                        </h3>
                        <p className="text-blue-500 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} /> {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className={`mb-4 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-sm ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
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
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Side Doodle */}
          <ScrollReveal delay={0.4} className="hidden lg:flex flex-col justify-center items-center">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-56 h-56"
            >
              <Image
                src="/doodles/chilling.svg"
                alt="Chilling illustration"
                fill
                className="object-contain"
                style={{ filter: isDark ? 'brightness(0) invert(1) opacity(0.75)' : 'opacity(0.9)' }}
              />
            </motion.div>
            <div className={`mt-6 p-4 rounded-xl border text-center ${
              isDark 
                ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20' 
                : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'
            }`}>
              <Rocket className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className={`font-medium ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>Always Growing</p>
              <p className={`text-sm mt-1 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                On a journey of continuous learning
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}