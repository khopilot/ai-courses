import Image from 'next/image';
import MatrixRain from './MatrixRain';
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';

interface HeaderProps {
  title: string;
  subtitle: string;
  author: string;
  objective: string;
  targetAudience: string;
}

export default function Header({ title, subtitle, author, objective, targetAudience }: HeaderProps) {
  return (
    <header className="relative min-h-screen overflow-hidden perspective-2000">
      {/* Social Media Links */}
      <div className="absolute top-6 right-6 z-50">
        {/* Glass container for icons */}
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/20">
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nicolas-delrieu-a61a60224"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="LinkedIn"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative transform transition-all duration-300 hover:scale-110">
                <FaLinkedin className="w-6 h-6 text-white/90 group-hover:text-white" />
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/khopilot"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="GitHub"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative transform transition-all duration-300 hover:scale-110">
                <FaGithub className="w-6 h-6 text-white/90 group-hover:text-white" />
              </div>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/+85592332554"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="Telegram"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-600 to-sky-400 rounded-lg blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative transform transition-all duration-300 hover:scale-110">
                <FaTelegram className="w-6 h-6 text-white/90 group-hover:text-white" />
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/85592332554"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="WhatsApp"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-green-400 rounded-lg blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative transform transition-all duration-300 hover:scale-110">
                <FaWhatsapp className="w-6 h-6 text-white/90 group-hover:text-white" />
              </div>
            </a>
          </div>

          {/* Decorative elements */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 rounded-2xl pointer-events-none"></div>
          <div className="absolute -inset-[1px] bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
        </div>

        {/* Animated glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/30 via-transparent to-blue-600/30 rounded-3xl blur-xl opacity-50 animate-pulse-slow pointer-events-none"></div>
      </div>

      {/* Animated background with advanced effects */}
      <div className="absolute inset-0">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#12131A] via-[#171923] to-[#1A1B26]"></div>
        
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <MatrixRain />
        </div>
        
        {/* Cambodia SVG Background */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
          <div className="relative w-[1200px] h-[1200px] transform -rotate-12">
            <Image
              src="/cambodia.svg"
              alt=""
              fill
              priority
              className="object-contain opacity-[0.15] animate-float-slow"
              style={{ filter: 'brightness(1.2) contrast(1.1)' }}
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 mix-blend-overlay filter blur-3xl"></div>
          </div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0" style={{ zIndex: 3 }}>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem] opacity-20"></div>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 py-12 sm:py-20">
          {/* Animated subtitle pill */}
          <div className="text-center mb-6 sm:mb-8 animate-slide-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
            <div className="inline-block">
              <div className="relative px-6 py-2 rounded-full overflow-hidden bg-gradient-to-r from-purple-800/80 via-purple-700/80 to-blue-800/80 backdrop-blur-xl shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1),transparent)] animate-shimmer"></div>
                <p className="relative text-base sm:text-xl text-white/90 font-medium tracking-wide">
                  {subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Animated title */}
          <div className="text-center mb-8 sm:mb-12 animate-slide-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
            <h1 className="relative text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold px-2">
              <span className="inline-block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient-x">
                {title}
              </span>
            </h1>
          </div>

          {/* Animated author */}
          <div className="text-center mb-12 sm:mb-20 animate-slide-up [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
            <p className="text-xl sm:text-2xl text-white/80 italic font-light">
              <span className="relative inline-block group">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">{author}</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent group-hover:h-1 transition-all duration-300"></span>
              </span>
            </p>
          </div>

          {/* Info cards container */}
          <div className="grid gap-6 sm:gap-8 max-w-5xl mx-auto perspective-1000 px-2">
            {/* Objective Card */}
            <div className="group animate-scale-up [animation-delay:0.8s] opacity-0 [animation-fill-mode:forwards]">
              <div className="relative transform transition-all duration-700 hover:scale-[1.02] hover:-rotate-1">
                {/* Card border gradient */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-600/50 via-pink-500/50 to-blue-600/50 rounded-xl sm:rounded-2xl blur group-hover:blur-md transition-all duration-500"></div>
                
                {/* Card content */}
                <div className="relative bg-[#12131A]/80 backdrop-blur-xl p-6 sm:p-8 rounded-xl sm:rounded-2xl overflow-hidden">
                  {/* Content */}
                  <div className="relative">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                      <span className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 sm:mr-4"></span>
                      Objective
                    </h2>
                    <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                      {objective}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Audience Card */}
            <div className="group animate-scale-up [animation-delay:1s] opacity-0 [animation-fill-mode:forwards]">
              <div className="relative transform transition-all duration-700 hover:scale-[1.02] hover:rotate-1">
                {/* Card border gradient */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-600/50 via-purple-500/50 to-pink-600/50 rounded-xl sm:rounded-2xl blur group-hover:blur-md transition-all duration-500"></div>
                
                {/* Card content */}
                <div className="relative bg-[#12131A]/80 backdrop-blur-xl p-6 sm:p-8 rounded-xl sm:rounded-2xl overflow-hidden">
                  {/* Content */}
                  <div className="relative">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                      <span className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 sm:mr-4"></span>
                      Target Audience
                    </h2>
                    <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                      {targetAudience}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 