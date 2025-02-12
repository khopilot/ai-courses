'use client';

import { motion } from 'framer-motion';

interface PhaseContentProps {
  phase: {
    title: string;
    weeks: {
      number: number;
      title: string;
      content: string[];
    }[];
  };
  phaseNumber: number;
}

export default function PhaseContent({ phase, phaseNumber }: PhaseContentProps) {
  // Clean up the title by removing the "Phase X:" prefix if it exists
  const cleanTitle = phase.title.includes(':') ? phase.title.split(':')[1].trim() : phase.title;

  return (
    <div className="w-full flex flex-col" style={{ zIndex: 3 }}>
      {/* Phase Title */}
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold text-white mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Phase {phaseNumber}: {cleanTitle}
      </motion.h2>

      {/* Weeks List */}
      <div className="space-y-6">
        {phase.weeks.map((week, index) => (
          <motion.div 
            key={week.number}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Week Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/20">
                {week.number}
              </div>
              <h3 className="text-xl font-semibold text-white">{week.title}</h3>
            </div>

            {/* Week Content */}
            <div className="ml-14">
              <ul className="space-y-3">
                {week.content.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3 text-white/70 hover:text-white/90 transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Vertical line connecting to next item */}
            {index < phase.weeks.length - 1 && (
              <div className="absolute left-5 top-14 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
} 