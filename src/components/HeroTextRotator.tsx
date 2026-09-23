import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const WORDS = [
  'cumpleaños',
  'bautismos y comuniones',
  'reuniones familiares',
  'celebraciones únicas',
];

export const HeroTextRotator: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-block relative overflow-visible px-1 min-w-[200px] sm:min-w-[280px] text-center sm:text-left align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[index]}
          initial={{ opacity: 0, y: 18, filter: 'blur(6px)', scale: 0.97 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          exit={{ opacity: 0, y: -18, filter: 'blur(6px)', scale: 0.97 }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block bg-gradient-to-r from-emerald-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent italic font-normal animate-gradient-text"
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
