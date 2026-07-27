'use client';

import { useEffect, useState } from 'react';

const rayStyles = [
  { top: '24%', left: '30%', width: '240%', height: '1px', angle: -18, opacity: 0.04 },
  { top: '33%', left: '26%', width: '220%', height: '1px', angle: -14, opacity: 0.03 },
  { top: '42%', left: '32%', width: '260%', height: '1px', angle: -20, opacity: 0.035 },
  { top: '52%', left: '28%', width: '250%', height: '1px', angle: -16, opacity: 0.028 },
  { top: '62%', left: '34%', width: '230%', height: '1px', angle: -12, opacity: 0.03 },
];

export default function Hero() {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showRole, setShowRole] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setShowTitle(true), 120),
      window.setTimeout(() => setShowSubtitle(true), 260),
      window.setTimeout(() => setShowRole(true), 420),
      window.setTimeout(() => setShowButtons(true), 580),
    ];

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .hero-title { font-size: clamp(2.2rem, 11vw, 3rem) !important; }
          .hero-subtitle { font-size: 0.95rem !important; }
          .hero-role { font-size: 0.7rem !important; }
          .hero-section { padding-top: 5.25rem !important; padding-bottom: 3rem !important; min-height: 90vh !important; }
          .hero-content-wrapper { min-height: 80vh !important; justify-content: center !important; }
          .hero-buttons { gap: 0.6rem !important; }
          .hero-button { padding: 0.6rem 1.2rem !important; font-size: 0.75rem !important; }
        }
      `}</style>
      <section
        id="home"
        className="hero-section relative overflow-hidden bg-[#160A0B] text-white"
      style={{
        paddingTop: '10rem',
        paddingBottom: '6rem',
        minHeight: '100vh',
      }}
    >
      <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1400&q=80')",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#160A0B] to-transparent opacity-90" />
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#160A0B] to-transparent opacity-90" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(107,30,35,0.2),transparent_28%)] opacity-80" />

        {rayStyles.map((ray, index) => (
          <div
            key={index}
            className="absolute bg-white/5"
            style={{
              top: ray.top,
              left: ray.left,
              width: ray.width,
              height: ray.height,
              transform: `rotate(${ray.angle}deg)`,
              opacity: ray.opacity,
            }}
          />
        ))}

        <div className="absolute left-[70%] top-[50%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.03)_0%,transparent_65%)] opacity-20" />
      </div>

      <div className="hero-content-wrapper relative mx-auto flex min-h-auto max-w-5xl flex-col items-center justify-center gap-4 px-6 text-center sm:px-8">
        <h1
          className={`hero-title inline-block whitespace-nowrap leading-[0.95] tracking-[-0.04em] uppercase font-medium transition-all duration-700 ${
            showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
        >
          <span className="text-[var(--accent)]">CRIMSON</span>{' '}
          <span
            className="text-white"
            style={{ WebkitTextStroke: '2px #ffffff', textStroke: '2px #ffffff' }}
          >
            STUDIO
          </span>
        </h1>

        <p
          className={`hero-subtitle m-0 italic font-semibold transition-all duration-700 ${
            showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1rem, 3vw, 1.3rem)', transitionDelay: showSubtitle ? '0.18s' : '0s' }}
        >
          Crafting stories, frame by frame.
        </p>

        <p
          className={`hero-role m-0 text-slate-300 tracking-[0.03em] transition-all duration-700 ${
            showRole ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ fontFamily: 'Barlow, sans-serif', fontSize: 'clamp(0.7rem, 2vw, 0.875rem)', transitionDelay: showRole ? '0.34s' : '0s' }}
        >
          Cinematic Editing · Motion Graphics · Color Grading
        </p>

        <div
          className={`hero-buttons flex flex-wrap justify-center gap-3 transition-all duration-700 ${
            showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: showButtons ? '0.5s' : '0s' }}
        >
          <a
            href="#work"
            className="hero-button inline-flex items-center justify-center rounded-md border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.02em] text-white transition duration-300 hover:border-[var(--accent)]/80"
          >
            View Reel →
          </a>

          <a
            href="#contact"
            className="hero-button inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.02em] text-[#0a0a0a] transition duration-300 hover:bg-[var(--mid)]"
          >
            Let&apos;s Work Together
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
