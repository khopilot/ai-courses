'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import PhaseContent from './PhaseContent';
import { courseData } from '../data/courseData';

// Phase background images mapping
const phaseBackgrounds = {
  1: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074', // HTML, CSS basics
  2: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070', // JavaScript
  3: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070', // React
  4: 'https://images.unsplash.com/photo-1672907273632-57e05d56d53f?q=80&w=2070', // Backend
  5: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070', // Database
  6: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2074', // APIs
  7: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070', // Testing
  8: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070', // Deployment
};

export default function ProgramDetails() {
  const [selectedPhase, setSelectedPhase] = useState(1);
  const totalPhases = courseData.phases.length;

  // Helper function to clean phase titles
  const cleanPhaseTitle = (title: string) => {
    return title.includes(':') ? title.split(':')[1].trim() : title;
  };

  return (
    <section 
      className="relative min-h-screen flex flex-col overflow-hidden"
      role="region"
      aria-label="Program Details Section"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#12131A]" style={{ zIndex: 1 }}>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_1000px_at_50%_-40%,#4f46e580,transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem]" />
      </div>

      <div className="relative flex-1 flex flex-col" style={{ zIndex: 2 }}>
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Left Side - Phase Navigation */}
          <div className="w-full lg:w-[320px] p-2 sm:p-4 lg:p-8 flex flex-row lg:flex-col gap-2 sm:gap-3 overflow-x-auto lg:overflow-y-auto custom-scrollbar" style={{ zIndex: 3 }}>
            {courseData.phases.map((phase, index) => {
              const phaseNumber = index + 1;
              const isSelected = selectedPhase === phaseNumber;
              return (
                <motion.button
                  key={phaseNumber}
                  onClick={() => setSelectedPhase(phaseNumber)}
                  className={`flex-shrink-0 w-[280px] sm:w-[300px] lg:w-full relative rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4 p-3 sm:p-4 transition-all duration-300 group ${
                    isSelected 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                      : 'bg-[#1a1b23] hover:bg-[#1e1f28]'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Number Circle */}
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-base sm:text-lg font-bold ${
                    isSelected 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  }`}>
                    {phaseNumber}
                  </div>

                  {/* Phase Title */}
                  <div className="flex-1 text-left">
                    <p className={`text-xs sm:text-sm font-medium line-clamp-2 ${
                      isSelected ? 'text-white' : 'text-white/70 group-hover:text-white/90'
                    }`}>
                      {cleanPhaseTitle(phase.title)}
                    </p>
                  </div>

                  {/* Selected Indicator */}
                  {isSelected && (
                    <motion.div
                      layoutId="phaseHighlight"
                      className="absolute left-0 top-0 w-1 h-full bg-white rounded-l-lg"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right Side - Phase Content */}
          <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto custom-scrollbar relative">
            {/* Background Image */}
            <motion.div 
              className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat pointer-events-none"
              style={{
                backgroundImage: `url("${phaseBackgrounds[selectedPhase as keyof typeof phaseBackgrounds]}")`,
                backgroundBlendMode: 'overlay'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 0.5 }}
            />
            {/* Content Overlay */}
            <div className="relative z-10">
              <PhaseContent 
                phase={courseData.phases[selectedPhase - 1]}
                phaseNumber={selectedPhase}
              />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="sticky bottom-0 left-0 right-0 p-4 bg-[#12131A]/80 backdrop-blur-sm border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between text-sm text-white/50 mb-2">
              <span>Progress</span>
              <span>Phase {selectedPhase} of {totalPhases}</span>
            </div>
            <div className="h-1 bg-white/10 rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                style={{ width: `${(selectedPhase / totalPhases) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 