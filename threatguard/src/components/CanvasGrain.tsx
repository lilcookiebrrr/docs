'use client';

import { useEffect, useRef } from 'react';

export default function CanvasGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      if (!canvas || !ctx) return;
      
      const w = canvas.width;
      const h = canvas.height;
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const grain = Math.random() * 30;
        data[i] = grain;     // R
        data[i + 1] = grain; // G
        data[i + 2] = grain; // B
        data[i + 3] = 15;    // A
      }

      ctx.putImageData(imageData, 0, 0);
      requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 50,
        mixBlendMode: 'screen',
        opacity: 1,
      }}
    />
  );
}