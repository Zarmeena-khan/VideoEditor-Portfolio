'use client';

import { useRef, useState } from 'react';

const projects = [
  { title: 'Porsche GT3RS Cut', subtitle: 'Automotive Edit', src: '/videos/project-1.mp4', bgGradient: 'linear-gradient(145deg,#1a0810,#2C0F12)' },
  { title: 'Instagram Story Algorithm', subtitle: 'Social Media', src: '/videos/project-2.mp4', bgGradient: 'linear-gradient(145deg,#0e0f18,#1a1028)' },
  { title: 'Real Estate Showcase', subtitle: 'Property Promo', src: '/videos/project-3.mp4', bgGradient: 'linear-gradient(145deg,#0a1410,#0f1e18)' },
  { title: 'Visual Editing Mastery', subtitle: 'Brand Film', src: '/videos/project-4.mp4', bgGradient: 'linear-gradient(145deg,#100a0e,#2C0F12)' },
  { title: 'Follow & Comment Promo', subtitle: 'SaaS Launch', src: '/videos/project-5.mp4', bgGradient: 'linear-gradient(145deg,#0e1014,#0a0e20)' },
  { title: 'SaaS Workflow', subtitle: 'Explainer Video', src: '/videos/project-6.mp4', bgGradient: 'linear-gradient(145deg,#160a0b,#2a1010)' },
  { title: 'Pricing Strategy', subtitle: 'Business Content', src: '/videos/project-7.mp4', bgGradient: 'linear-gradient(145deg,#0c0e14,#181028)' },
  { title: 'Closing Day Showcase', subtitle: 'Agent Promo', src: '/videos/project-8.mp4', bgGradient: 'linear-gradient(145deg,#0a140c,#0f1e14)' },
];

const marqueeItems = [...projects, ...projects];

export default function Projects() {
  return (
    <section id="work" className="relative py-20 px-6 md:px-8 overflow-hidden bg-[#0d070a]">
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="font-bebas text-5xl md:text-6xl text-cream">WORK</h2>
      </div>

      <div className="mb-8 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0d070a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0d070a] to-transparent" />

        <div className="flex gap-5 animate-scroll-left" style={{ width: 'max-content' }}>
          {marqueeItems.map((project, index) => (
            <VideoCard key={`row1-${project.src}-${index}`} project={project} />
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0d070a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0d070a] to-transparent" />

        <div className="flex gap-5 animate-scroll-right" style={{ width: 'max-content' }}>
          {marqueeItems.map((project, index) => (
            <VideoCard key={`row2-${project.src}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ project }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!video.src) {
      video.src = project.src;
      video.preload = 'none';
    }

    setIsHovered(true);
    const playPromise = video.play();
    if (playPromise && playPromise.catch) {
      playPromise.catch(() => null);
    }
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    setIsHovered(false);
  };

  return (
    <div
      className="interactive video-card custom-cursor relative flex-shrink-0 w-[180px] h-[300px] rounded-[1.25rem] overflow-hidden border border-[color:var(--accent)]/20 bg-[#12060a] shadow-[0_0_35px_var(--glow)] transition-transform duration-300 hover:-translate-y-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: project.bgGradient,
          opacity: isHovered ? 0 : 1,
        }}
      />

      <div
        className="absolute inset-0 bg-black/55 transition-opacity duration-300"
        style={{ opacity: isHovered ? 0 : 0.62 }}
      />

      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
        style={{ opacity: isHovered ? 0 : 1 }}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--accent)]/80 bg-black/25 backdrop-blur-sm">
          <div className="ml-1 h-0 w-0 border-l-5 border-l-[color:var(--accent)] border-t-4 border-t-transparent border-b-4 border-b-transparent" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0d070a]/95 to-transparent">
        <p className="text-[11px] uppercase tracking-[0.32em] text-slate-400">{project.subtitle}</p>
        <p className="mt-2 text-sm font-semibold uppercase leading-tight text-cream">{project.title}</p>
      </div>
    </div>
  );
}
