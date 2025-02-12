'use client';

import { courseData } from './data/courseData';
import Header from './components/Header';
import ProgramDetails from './components/ProgramDetails';
import BackgroundEffects from './components/BackgroundEffects';
import { motion } from 'framer-motion';

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
        style={{ zIndex: 20 }}
      >
        <div className="relative">
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
                <div className="relative p-6 bg-[#12131A]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Program Details Section */}
      <ProgramDetails />
    </main>
  );
}
