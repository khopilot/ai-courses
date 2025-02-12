'use client';

import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size with pixel ratio consideration
    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(pixelRatio, pixelRatio);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Khmer characters grouped by frequency
    const primaryChars = 'កខគឃងចឆជឈញដឋឌឍណតថទធនបផពភមយរលវសហឡអ';
    const secondaryChars = 'ាិីឹឺុូួើឿៀេែៃោៅំះៈ់៍៌៎';
    const numberChars = '០១២៣៤៥៦៧៨៩';
    
    // Add meaningful Khmer words
    const khmerWords = [
      'សន្តិភាព',      // Peace
      'ស្នេហា',        // Love
      'សុភមង្គល',      // Happiness
      'ប្រាជ្ញា',      // Wisdom
      'មេត្តា',        // Kindness
      'ការអប់រំ',      // Education
      'វប្បធម៌',       // Culture
      'កម្ពុជា',       // Cambodia
      'ជោគជ័យ',       // Success
      'សាមគ្គី',      // Unity
    ];
    
    // Combine characters with weighted distribution
    const characters = primaryChars.repeat(3) + secondaryChars.repeat(2) + numberChars;
    
    const fontSize = 28; // Base size for matrix rain
    const columns = Math.floor(canvas.width / fontSize);
    
    // Track time for word spawning
    let lastWordSpawnTime = 0;
    const wordSpawnInterval = 5000; // Spawn a word every 5 seconds
    
    // Enhanced drops array with additional properties
    interface Drop {
      y: number;
      speed: number;
      char: string;
      opacity: number;
      hue: number;
      size: number;
    }

    // Enhanced word popup interface
    interface WordPopup {
      word: string;
      x: number;
      y: number;
      scale: number;
      opacity: number;
      growing: boolean;
      rotation: number;
      hue: number;
      age: number;
      maxAge: number;
    }

    const wordPopups = new Map<string, WordPopup>();

    const drops: Drop[] = Array(columns).fill(null).map(() => ({
      y: Math.random() * -100,
      speed: 0.5 + Math.random() * 1.5,
      char: characters[Math.floor(Math.random() * characters.length)],
      opacity: 0.8 + Math.random() * 0.2,
      hue: Math.random() * 60 - 30,
      size: fontSize * (0.9 + Math.random() * 0.3)
    }));

    // Function to spawn a new word
    const spawnWord = () => {
      const word = khmerWords[Math.floor(Math.random() * khmerWords.length)];
      const x = Math.random() * (canvas.width - 200) + 100; // Keep away from edges
      const y = Math.random() * (canvas.height - 200) + 100; // Keep away from edges
      const id = `word-${Date.now()}`;
      
      wordPopups.set(id, {
        word,
        x,
        y,
        scale: 100, // Start with massive scale
        opacity: 0.9,
        growing: false, // Start shrinking immediately
        rotation: (Math.random() - 0.5) * 0.2,
        hue: 270 + Math.random() * 60,
        age: 0,
        maxAge: 7000 // Increased to account for dramatic animation
      });
    };

    // Drawing animation
    const draw = (timestamp: number) => {
      // Check if it's time to spawn a new word
      if (timestamp - lastWordSpawnTime > wordSpawnInterval) {
        spawnWord();
        lastWordSpawnTime = timestamp;
      }

      // Improved fade effect with slight color tint
      ctx.fillStyle = 'rgba(10, 11, 16, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw regular falling characters
      drops.forEach((drop, i) => {
        // Update character occasionally
        if (Math.random() < 0.02) {
          drop.char = characters[Math.floor(Math.random() * characters.length)];
        }

        const x = i * fontSize;
        
        // Create more vibrant gradient with color variation
        const gradient = ctx.createLinearGradient(x, drop.y - fontSize, x, drop.y);
        const baseHue = 270 + drop.hue; // Purple base
        gradient.addColorStop(0, `hsla(${baseHue}, 80%, 65%, ${drop.opacity})`);
        gradient.addColorStop(1, `hsla(${baseHue - 30}, 90%, 60%, ${drop.opacity})`);
        
        // Add glow effect
        ctx.shadowColor = `hsla(${baseHue}, 80%, 65%, 0.8)`;
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        // Draw with varying size
        ctx.font = `bold ${drop.size}px 'Khmer OS System'`;
        ctx.fillStyle = gradient;
        ctx.fillText(drop.char, x, drop.y);
        
        // Reset shadow for next character
        ctx.shadowBlur = 0;

        // Create popping effect with lower frequency
        if (Math.random() < 0.002) {
          const id = `${x}-${drop.y}`;
          wordPopups.set(id, {
            word: drop.char,
            x,
            y: drop.y,
            scale: 1,
            opacity: 1,
            growing: true,
            rotation: (Math.random() - 0.5) * 0.5,
            hue: baseHue,
            age: 0,
            maxAge: 5000 // Word stays visible for 5 seconds
          });
        }

        // Update position with variable speed
        drop.y += drop.speed;

        // Reset with varied starting positions
        if (drop.y * fontSize > canvas.height) {
          drop.y = -10 - Math.random() * 50;
          drop.speed = 0.5 + Math.random() * 1.5;
          drop.opacity = 0.8 + Math.random() * 0.2;
          drop.size = fontSize * (0.9 + Math.random() * 0.3);
        }
      });

      // Draw word popups
      wordPopups.forEach((word, id) => {
        // Only draw if scale is reasonable to prevent performance issues
        if (word.scale <= 100) {
          ctx.save();
          
          // Center of word for rotation
          const centerX = word.x;
          const centerY = word.y;
          
          ctx.translate(centerX, centerY);
          ctx.rotate(word.rotation);
          ctx.scale(word.scale, word.scale);
          ctx.translate(-centerX, -centerY);

          // Enhanced glow effect for words
          ctx.shadowColor = `hsla(${word.hue}, 90%, 70%, ${word.opacity})`;
          ctx.shadowBlur = 30 * Math.min(word.scale, 1); // Scale blur with size
          
          // Gradient with hue variation
          const gradient = ctx.createLinearGradient(word.x, word.y - fontSize * 2, word.x, word.y);
          gradient.addColorStop(0, `hsla(${word.hue}, 90%, 70%, ${word.opacity})`);
          gradient.addColorStop(1, `hsla(${word.hue - 30}, 95%, 65%, ${word.opacity})`);
          
          ctx.fillStyle = gradient;
          // Adjust base font size based on scale
          const baseFontSize = fontSize * (word.scale > 2 ? 1 : 3);
          ctx.font = `bold ${baseFontSize}px 'Khmer OS System'`;
          
          // Center align text
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(word.word, word.x, word.y);
          
          // Add subtle outline
          ctx.strokeStyle = `hsla(${word.hue}, 90%, 85%, ${word.opacity * 0.3})`;
          ctx.lineWidth = 2 / Math.max(word.scale, 1); // Adjust line width based on scale
          ctx.strokeText(word.word, word.x, word.y);
          
          ctx.restore();
        }

        // Update word animation with dramatic shrinking
        if (word.age < 500) { // First 500ms: dramatic shrinking
          word.scale = Math.max(100 * (1 - word.age / 500), 1); // Shrink from 100x to 1x
          word.rotation *= 0.9; // Gradually stabilize rotation
        } else if (word.age >= word.maxAge - 1000) { // Last second: fade out
          word.opacity -= 0.02;
          if (word.opacity <= 0) {
            wordPopups.delete(id);
          }
        }
        
        word.age += 16; // Approximate time between frames
      });

      requestAnimationFrame(draw);
    };

    // Start animation with requestAnimationFrame for smoother performance
    const animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-80"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default MatrixRain; 