'use client';

import { Phase } from '../data/courseData';
import { phaseImages } from '../data/phaseImages';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PhaseCardProps {
  phase: Phase;
  phaseIndex: number;
}

export default function PhaseCard({ phase, phaseIndex }: PhaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative h-full"
    >
      {/* Card border gradient */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-600/50 via-pink-500/50 to-blue-600/50 rounded-xl sm:rounded-2xl blur group-hover:blur-md transition-all duration-500"></div>
      
      {/* Card content */}
      <div className="relative bg-[#12131A]/80 backdrop-blur-xl p-5 sm:p-7 rounded-xl sm:rounded-2xl overflow-hidden h-full flex flex-col">
        {/* Phase image */}
        <div className="relative w-full h-40 mb-5 rounded-xl overflow-hidden">
          <Image
            src={phaseImages[phase.title]}
            alt={phase.title}
            fill
            className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#12131A]/50 to-[#12131A]"></div>
        </div>

        {/* Phase title */}
        <motion.h2 
          className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-5"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {phase.title}
        </motion.h2>

        {/* Weeks grid - Scrollable container */}
        <div className="flex-1 overflow-y-auto scrollbar-hide pr-2">
          <div className="space-y-4">
            {phase.weeks.map((week) => (
              <motion.div
                key={`phase-${phaseIndex}-week-${week.number}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.2 }}
                className="group/week relative bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
              >
                {/* Week header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-sm opacity-75 group-hover/week:opacity-100 transition-opacity"></div>
                    <div className="relative w-7 h-7 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{week.number}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-semibold text-white group-hover/week:text-purple-200 transition-colors">
                    {week.title}
                  </h3>
                </div>

                {/* Week content */}
                <div className="space-y-2.5 ml-10">
                  {week.content.map((item, itemIndex) => (
                    <motion.div
                      key={`phase-${phaseIndex}-week-${week.number}-item-${itemIndex}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover/item:scale-150 transition-transform"></span>
                      <p className="text-sm sm:text-base text-white/70 group-hover/item:text-white/90 transition-colors">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 