'use client';

import { courseData } from './data/courseData';
import Header from './components/Header';
import PhaseCard from './components/PhaseCard';
import ProgramDetails from './components/ProgramDetails';
import BackgroundEffects from './components/BackgroundEffects';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const features = [
  {
    title: "Hands-on Learning",
    description: "Real-world projects and practical exercises in every phase",
    icon: "🛠️"
  },
  {
    title: "AI Integration",
    description: "Learn to combine web development with cutting-edge AI",
    icon: "🤖"
  },
  {
    title: "Industry Ready",
    description: "Technology watch to stay up-to-date with the latest trends",
    icon: "🏢"
  }
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrollProgress(latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActivePhase(prev => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight') {
        setActivePhase(prev => Math.min(courseData.phases.length - 1, prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const nextPhase = () => setActivePhase(prev => Math.min(courseData.phases.length - 1, prev + 1));
  const prevPhase = () => setActivePhase(prev => Math.max(0, prev - 1));

  return (
    <main className="relative min-h-screen bg-[#0A0B10] overflow-x-hidden">
      <BackgroundEffects />

      <Header
        title={courseData.title}
        subtitle={courseData.subtitle}
        author={courseData.author}
        objective={courseData.objective}
        targetAudience={courseData.targetAudience}
      />

      {/* Course Features Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto py-16 px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:opacity-100 transition-opacity opacity-0"></div>
              <div className="relative p-6 bg-[#12131A]/80 backdrop-blur-xl rounded-2xl border border-white/10">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Phases Section */}
      <section className="relative py-16">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-4">
            Course Journey
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A comprehensive 8-phase program designed to take you from basics to advanced implementation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Main container */}
        <div className="max-w-[1400px] mx-auto px-4 relative">
          {/* Navigation buttons */}
          <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10">
            <button
              onClick={prevPhase}
              disabled={activePhase === 0}
              className={`pointer-events-auto transform transition-all duration-300 ${
                activePhase === 0 
                  ? 'opacity-50 cursor-not-allowed -translate-x-4' 
                  : 'hover:scale-110 hover:-translate-x-2'
              }`}
              aria-label="Previous phase"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/70 group-hover:text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>
            
            <button
              onClick={nextPhase}
              disabled={activePhase === courseData.phases.length - 1}
              className={`pointer-events-auto transform transition-all duration-300 ${
                activePhase === courseData.phases.length - 1 
                  ? 'opacity-50 cursor-not-allowed translate-x-4' 
                  : 'hover:scale-110 hover:translate-x-2'
              }`}
              aria-label="Next phase"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/70 group-hover:text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

          {/* Featured Phase */}
          <motion.div 
            key={activePhase}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="mb-12"
          >
            <PhaseCard phase={courseData.phases[activePhase]} phaseIndex={activePhase} />
          </motion.div>

          {/* Phase Navigation */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-8">
            {courseData.phases.map((phase, index) => (
              <motion.button
                key={`nav-${index}`}
                onClick={() => setActivePhase(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative group p-3 rounded-xl transition-all ${
                  activePhase === index 
                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 ring-2 ring-purple-500/50' 
                    : 'hover:bg-white/5'
                }`}
              >
                <div className="text-center">
                  <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2 transition-all ${
                    activePhase === index
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                      : 'bg-white/10 group-hover:bg-white/20'
                  }`}>
                    <span className="font-bold text-white">{index + 1}</span>
                  </div>
                  <p className={`text-xs leading-tight transition-colors ${
                    activePhase === index ? 'text-white' : 'text-white/60 group-hover:text-white/80'
                  }`}>
                    Phase {index + 1}
                  </p>
                </div>
                {activePhase === index && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              style={{
                width: `${((activePhase + 1) / courseData.phases.length) * 100}%`,
              }}
              initial={{ width: 0 }}
              animate={{ width: `${((activePhase + 1) / courseData.phases.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Phase title */}
          <div className="text-center mt-4">
            <p className="text-white/60">
              Phase {activePhase + 1} of {courseData.phases.length}
            </p>
          </div>
        </div>
      </section>

      {/* Program Details with Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24"
      >
        <ProgramDetails
          learningOutcomes={courseData.learningOutcomes}
          assessmentMethods={courseData.assessmentMethods}
        />
      </motion.div>

      {/* Scroll Progress Indicator */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 w-1 h-48 bg-white/10 rounded-full hidden md:block">
        <motion.div
          className="w-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full origin-top"
          style={{
            scaleY: scrollProgress
          }}
        />
      </div>
    </main>
  );
}
