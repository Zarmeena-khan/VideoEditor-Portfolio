'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let ringRadius = 16;
    let targetRadius = 16;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    };

    const handleMouseEnter = (e) => {
      if (e.target && e.target.classList && e.target.classList.contains('video-card')) {
        targetRadius = 30;
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target && e.target.classList && e.target.classList.contains('video-card')) {
        targetRadius = 16;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      ringRadius += (targetRadius - ringRadius) * 0.1;

      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      ring.style.width = ringRadius * 2 + 'px';
      ring.style.height = ringRadius * 2 + 'px';

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    const animationId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-crimson-glow rounded-full pointer-events-none z-[9999]"
        style={{
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 8px rgba(224, 82, 82, 0.6)',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed border-2 border-crimson-glow rounded-full pointer-events-none z-[9999]"
        style={{
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 16px rgba(224, 82, 82, 0.3)',
        }}
      />
    </>
  );
}
