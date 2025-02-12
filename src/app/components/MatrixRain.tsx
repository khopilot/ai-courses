'use client';

import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (mix of Latin and Khmer characters for Cambodia theme)
    const characters = 'អបគឃងចឆជឈញដឋឌឍណតថទធនបផពភមយរលវសហឡអាឥឦឧឨឩឪឫឬឭឮឯឰឱឲឳ៘៙៚៛ៜ៝០១២៣៤៥៦៧៨៩';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    
    // Array to track the y position of each column
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    // Drawing animation
    const draw = () => {
      // Semi-transparent black to create fade effect (reduced transparency)
      ctx.fillStyle = 'rgba(10, 11, 16, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.font = `${fontSize}px 'Khmer OS System'`;

      // Draw characters
      drops.forEach((y, i) => {
        // Random character
        const char = characters[Math.floor(Math.random() * characters.length)];
        
        // Calculate x position
        const x = i * fontSize;
        
        // Draw the character with purple gradient (increased opacity)
        const gradient = ctx.createLinearGradient(x, y * fontSize - fontSize, x, y * fontSize);
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.8)');  // Purple-500 with higher opacity
        gradient.addColorStop(1, 'rgba(236, 72, 153, 0.8)');  // Pink-500 with higher opacity
        ctx.fillStyle = gradient;
        ctx.fillText(char, x, y * fontSize);

        // Reset when off screen or randomly
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move drop down
        drops[i]++;
      });
    };

    // Animation loop
    const interval = setInterval(draw, 50);  // Slightly slower animation

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default MatrixRain; 