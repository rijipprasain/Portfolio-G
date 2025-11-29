import React, { useEffect, useRef } from 'react';

const BinaryRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const fontSize = 14;
    const columns = Math.ceil(width / fontSize);
    const drops: number[] = new Array(columns).fill(0); // Y-coordinate of the drop

    const chars = "10"; // Binary

    const resizeHandler = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      // Re-initialize drops on resize to avoid gaps
      const newColumns = Math.ceil(width / fontSize);
      if (newColumns > drops.length) {
         while (drops.length < newColumns) drops.push(0);
      }
    };

    window.addEventListener('resize', resizeHandler);

    let animationFrameId: number;

    const draw = () => {
      // Semi-transparent black to create fade effect
      // Matches slate-950 (#020617)
      ctx.fillStyle = 'rgba(2, 6, 23, 0.05)'; 
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        
        // Random opacity for depth effect, but keep minimum visibility higher
        const opacity = Math.random() * 0.5 + 0.25; 
        ctx.fillStyle = `rgba(34, 211, 238, ${opacity})`; // Cyan-400

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Reset drop to top randomly or if it's off screen
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full block pointer-events-none"
    />
  );
};

export default BinaryRain;