'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';

interface DoodleNavigationProps {
  items: { label: string; href: string }[];
  className?: string;
}

export function DoodleNavigation({ items, className = '' }: DoodleNavigationProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${className} ${
        scrolled 
          ? isDark 
            ? 'bg-slate-900/80 backdrop-blur-md py-4' 
            : 'bg-white/80 backdrop-blur-md py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
        >
          <span className="relative">
            KM
            <svg
              ref={svgRef}
              className="absolute -bottom-1 left-0 w-full h-2"
              viewBox="0 0 40 10"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,5 Q10,0 20,5 T40,5"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {items.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className={`relative text-sm transition-colors ${
                isDark 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-600 hover:text-slate-900'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredItem(item.href)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.label}
              {hoveredItem === item.href && (
                <motion.svg
                  className="absolute -bottom-1 left-0 w-full h-2"
                  viewBox="0 0 80 10"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.path
                    d="M0,5 Q20,0 40,5 T80,5"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </motion.svg>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
}