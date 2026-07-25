'use client';

import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'Premiere Pro', level: 'Expert', percentage: 95 },
  { name: 'After Effects', level: 'Advanced', percentage: 88 },
  { name: 'DaVinci Resolve', level: 'Advanced', percentage: 85 },
  { name: 'Photoshop', level: 'Proficient', percentage: 72 },
];

const FILM_STRIP_TOOLS =
  'Premiere Pro · After Effects · DaVinci Resolve · Adobe Creative Suite';

function FilmStripHoles() {
  return (
    <div
      className="flex flex-col justify-center gap-1.5 px-2.5 py-4 shrink-0"
      style={{ backgroundColor: '#160A0B' }}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="w-2 h-2"
          style={{
            backgroundColor: '#160A0B',
            boxShadow: 'inset 0 0 0 1px rgba(107, 30, 35, 0.6)',
          }}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-6 md:px-8">
      <div
        ref={sectionRef}
        className="max-w-6xl mx-auto transition-all duration-600 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        }}
      >
        <p className="text-sm uppercase tracking-widest text-muted mb-3 flex items-center gap-3">
          <span className="w-8 h-px bg-gradient-to-r from-crimson-accent to-transparent" />
          SKILLS
        </p>
        <h2 className="font-bebas text-5xl md:text-6xl text-cream mb-10">
          TOOLS OF THE CRAFT
        </h2>

        {/* Film strip bar */}
        <div
          className="flex items-stretch mb-14 rounded-sm overflow-hidden border"
          style={{
            backgroundColor: '#1E0C0E',
            borderColor: 'rgba(107, 30, 35, 0.35)',
          }}
        >
          <FilmStripHoles />
          <div
            className="flex-1 flex items-center justify-center px-4 py-4 border-x"
            style={{ borderColor: 'rgba(107, 30, 35, 0.35)' }}
          >
            <p className="text-muted font-barlow text-xs sm:text-sm text-center tracking-wide">
              {FILM_STRIP_TOOLS}
            </p>
          </div>
          <FilmStripHoles />
        </div>

        {/* Skill cards grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="w-full max-w-[320px] group relative overflow-hidden rounded-lg border p-6 min-h-[150px] flex flex-col justify-between"
              style={{
                backgroundColor: '#1E0C0E',
                borderColor: 'rgba(107, 30, 35, 0.35)',
              }}
            >
              {/* Hover: crimson gradient top border slides in from left */}
              <div
                className="absolute top-0 left-0 w-0 group-hover:w-full transition-all duration-500 ease-out"
                style={{
                  height: '2px',
                  background: 'linear-gradient(to right, #6B1E23, #E05252, #C0392B)',
                }}
              />

              <div>
                <h3 className="text-cream font-barlow font-semibold text-lg mb-1">
                  {skill.name}
                </h3>
                <p className="text-muted font-barlow text-sm mb-6">{skill.level}</p>
              </div>

              {/* Progress bar - using inline styles */}
              <div
                className="w-full rounded-full overflow-hidden"
                style={{ height: '3px', backgroundColor: '#240F11' }}
              >
                <div
                  style={{
                    width: `${skill.percentage}%`,
                    height: '3px',
                    background: 'linear-gradient(90deg, #6B1E23, #E05252)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
