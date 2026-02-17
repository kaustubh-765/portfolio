'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface DoodleImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  float?: boolean;
  delay?: number;
}

export function DoodleImage({
  src,
  alt,
  className = '',
  width = 300,
  height = 300,
  float = true,
  delay = 0,
}: DoodleImageProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <motion.div
        animate={float ? { y: [0, -15, 0] } : undefined}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
          style={{ filter: 'brightness(0) invert(1) opacity(0.9)' }}
        />
      </motion.div>
    </motion.div>
  );
}