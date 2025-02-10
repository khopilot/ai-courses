'use client';

import { motion } from 'framer-motion';

interface ProgramDetailsProps {
  learningOutcomes: string[];
  assessmentMethods: string[];
}

export default function ProgramDetails({
  learningOutcomes,
  assessmentMethods,
}: ProgramDetailsProps) {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#12131A]">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_1000px_at_50%_-40%,#4f46e580,transparent)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient-x">
            Program Details
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Learning Outcomes Card */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Card border gradient */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-600/50 via-pink-500/50 to-blue-600/50 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500"></div>

              {/* Card content */}
              <div className="relative bg-[#1a1b23] p-8 rounded-2xl backdrop-blur-xl">
                {/* Card header */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div 
                    className="relative w-12 h-12"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                      </svg>
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">Learning Outcomes</h3>
                </div>

                {/* Outcomes list */}
                <ul className="space-y-4">
                  {learningOutcomes.map((outcome, index) => (
                    <motion.li 
                      key={`outcome-${index}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="group/item flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover/item:scale-150 transition-transform"></span>
                      <p className="text-white/70 group-hover/item:text-white/90 transition-colors">
                        {outcome}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Assessment Methods Card */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Card border gradient */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-600/50 via-purple-500/50 to-pink-600/50 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500"></div>

              {/* Card content */}
              <div className="relative bg-[#1a1b23] p-8 rounded-2xl backdrop-blur-xl">
                {/* Card header */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div 
                    className="relative w-12 h-12"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">Assessment Methods</h3>
                </div>

                {/* Methods list */}
                <ul className="space-y-4">
                  {assessmentMethods.map((method, index) => (
                    <motion.li 
                      key={`method-${index}`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="group/item flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover/item:scale-150 transition-transform"></span>
                      <p className="text-white/70 group-hover/item:text-white/90 transition-colors">
                        {method}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 