'use client';

import { useRef, useEffect, useState } from 'react';

type ToolCard = {
  label: string;
  name: string;
  level: string;
  accent: string;
};

const tools: ToolCard[] = [
  { label: 'Pr', name: 'Premiere Pro', level: 'Expert', accent: '#0066CC' },
  { label: 'Ae', name: 'After Effects', level: 'Advanced', accent: '#9B59B6' },
  { label: 'Da', name: 'DaVinci Resolve', level: 'Advanced', accent: '#C0392B' },
  { label: 'Ps', name: 'Photoshop', level: 'Proficient', accent: '#2980B9' },
];

export default function Tools() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @media (min-width: 769px) {
          .tools-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
      <section
      id="tools"
      ref={sectionRef}
      className={`pt-20 pb-20 bg-[#060405] transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-slate-300">
              SKILLS
            </span>
            <span className="block flex-1 h-px rounded-full bg-red-500/30" />
          </div>

          <h2 style={{ margin: 0, color: '#FFFFFF', fontFamily: '"Bebas Neue", sans-serif', fontSize: '3.4rem', lineHeight: 1, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            TOOLS OF THE CRAFT
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 tools-grid">
          {tools.map((tool, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <article
                key={tool.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`mx-auto w-full max-w-[260px] rounded-[1rem] border p-6 text-center transition duration-300 ease-out tool-card ${
                  isHovered
                    ? 'border-red-500/70 shadow-[0_0_18px_rgba(192,57,43,0.25)] -translate-y-1'
                    : 'border-red-500/40 shadow-[0_0_12px_rgba(192,57,43,0.15)]'
                } bg-[#140808D9]`}
              >
                <div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-[0.75rem] tool-label"
                  style={{ background: tool.accent, boxShadow: `0 0 18px ${tool.accent}40` }}
                >
                  <span className="text-base font-bold leading-none text-white">{tool.label}</span>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-semibold leading-snug text-white tool-name">{tool.name}</div>
                  <div className="text-xs italic text-slate-300 tool-level">{tool.level}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
}
