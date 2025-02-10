'use client';

import { motion } from 'framer-motion';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[128px] animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[128px] animate-float-medium"></div>
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[128px] animate-float-fast"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
    </div>
  );
} 