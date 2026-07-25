'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let ringSize = 18;
    let targetSize = 18;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const handleHover = (e) => {
      const interactive = e.target && e.target.closest && e.target.closest('a,button,.interactive');
      if (interactive) {
        targetSize = 36;
        ring.style.borderColor = 'rgba(255,30,39,0.95)';
      } else {
        targetSize = 18;
        ring.style.borderColor = 'rgba(255,30,39,0.75)';
      }
    };

    let rafId = 0;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ringSize += (targetSize - ringSize) * 0.12;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      ring.style.width = `${ringSize * 2}px`;
      ring.style.height = `${ringSize * 2}px`;

      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mousemove', handleHover);
    document.addEventListener('mouseenter', handleHover, true);
    document.addEventListener('mouseleave', handleHover, true);

    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mousemove', handleHover);
      document.removeEventListener('mouseenter', handleHover, true);
      document.removeEventListener('mouseleave', handleHover, true);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed z-[9999] pointer-events-none rounded-full"
        style={{
          width: '10px',
          height: '10px',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'var(--red)',
          boxShadow: '0 0 12px rgba(255,30,39,0.9)',
        }}
      />

      <div
        ref={ringRef}
        className="fixed z-[9998] pointer-events-none rounded-full"
        style={{
          transform: 'translate(-50%, -50%)',
          border: '2px solid rgba(255,30,39,0.75)',
          boxShadow: '0 0 28px rgba(255,30,39,0.22)',
          width: '36px',
          height: '36px',
        }}
      />
    </>
  );
}
