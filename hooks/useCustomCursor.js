'use client';

import { useEffect } from 'react';

export function useCustomCursor(dotRef, ringRef) {
  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let ringSize = 18;
    let targetSize = 18;

    const updatePosition = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const updateHover = (event) => {
      const interactive = event.target.closest('a, button, .interactive');
      if (interactive) {
        targetSize = 36;
        ring.style.borderColor = 'rgba(255, 30, 39, 0.95)';
      } else {
        targetSize = 18;
        ring.style.borderColor = 'rgba(255, 30, 39, 0.75)';
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ringSize += (targetSize - ringSize) * 0.16;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      ring.style.width = `${ringSize * 2}px`;
      ring.style.height = `${ringSize * 2}px`;

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousemove', updateHover);
    document.addEventListener('mouseenter', updateHover, true);
    document.addEventListener('mouseleave', updateHover, true);

    const animationId = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousemove', updateHover);
      document.removeEventListener('mouseenter', updateHover, true);
      document.removeEventListener('mouseleave', updateHover, true);
      cancelAnimationFrame(animationId);
    };
  }, [dotRef, ringRef]);
}
