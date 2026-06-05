'use client';

import { useRef, useEffect } from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      cat: 'Property Video',
      name: 'Luxury Estate Tour',
      videoSrc: '/videos/project-1.mp4',
      bgGradient: 'linear-gradient(145deg,#1a0810,#2C0F12)',
    },
    {
      id: 2,
      cat: 'Brand Film',
      name: 'Urban Pulse',
      videoSrc: '/videos/project-2.mp4',
      bgGradient: 'linear-gradient(145deg,#0e0f18,#1a1028)',
    },
    {
      id: 3,
      cat: 'Social Media',
      name: 'Trending Reels',
      videoSrc: '/videos/project-3.mp4',
      bgGradient: 'linear-gradient(145deg,#0a1410,#0f1e18)',
    },
    {
      id: 4,
      cat: 'Promo Ad',
      name: 'Product Launch',
      videoSrc: '/videos/project-4.mp4',
      bgGradient: 'linear-gradient(145deg,#100a0e,#2C0F12)',
    },
    {
      id: 5,
      cat: 'Documentary',
      name: 'Roots — Short Doc',
      videoSrc: '/videos/project-5.mp4',
      bgGradient: 'linear-gradient(145deg,#0e1014,#0a0e20)',
    },
    {
      id: 6,
      cat: 'Fashion',
      name: 'Editorial Cut',
      videoSrc: '/videos/project-6.mp4',
      bgGradient: 'linear-gradient(145deg,#160a0b,#2a1010)',
    },
    {
      id: 7,
      cat: 'Event',
      name: 'Live Event Recap',
      videoSrc: '/videos/project-7.mp4',
      bgGradient: 'linear-gradient(145deg,#0c0e14,#181028)',
    },
    {
      id: 8,
      cat: 'Motion Design',
      name: 'Title Sequence',
      videoSrc: '/videos/project-8.mp4',
      bgGradient: 'linear-gradient(145deg,#0a140c,#0f1e14)',
    },
    {
      id: 9,
      cat: 'Brand Identity',
      name: 'Inferno Series',
      videoSrc: '/videos/project-9.mp4',
      bgGradient: 'linear-gradient(145deg,#14100a,#221810)',
    },
    {
      id: 10,
      cat: 'Music Video',
      name: 'Neon Nights',
      videoSrc: '/videos/project-10.mp4',
      bgGradient: 'linear-gradient(145deg,#0a0a14,#10102C)',
    },
  ];

  return (
    <section id="work" className="py-20 px-6 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="font-bebas text-5xl md:text-6xl text-cream">WORK</h2>
      </div>

      {/* Row 1 - Scrolling Left */}
      <div className="mb-8 overflow-hidden">
        <div className="flex animate-scroll-left" style={{ width: 'max-content' }}>
          {[...projects, ...projects].map((project, idx) => (
            <VideoCard key={`row1-${idx}`} project={project} />
          ))}
        </div>
      </div>

      {/* Row 2 - Scrolling Right */}
      <div className="overflow-hidden">
        <div className="flex animate-scroll-right" style={{ width: 'max-content' }}>
          {[...projects, ...projects].map((project, idx) => (
            <VideoCard key={`row2-${idx}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ project }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current && !videoRef.current.src) {
      videoRef.current.src = project.videoSrc;
    }
    if (videoRef.current) {
      videoRef.current.play();
    }
    if (containerRef.current) {
      const label = containerRef.current.querySelector('[data-label]');
      const thumb = containerRef.current.querySelector('[data-thumb]');
      if (label) label.style.opacity = '0';
      if (thumb) thumb.style.opacity = '0';
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (containerRef.current) {
      const label = containerRef.current.querySelector('[data-label]');
      const thumb = containerRef.current.querySelector('[data-thumb]');
      if (label) label.style.opacity = '1';
      if (thumb) thumb.style.opacity = '1';
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex-shrink-0 w-44 h-72 rounded-lg overflow-hidden cursor-pointer group video-card mx-2 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail background */}
      <div
        data-thumb="true"
        className="absolute inset-0 transition-opacity duration-300"
        style={{ background: project.bgGradient }}
      />

      {/* Play button - Default state */}
      <div
        data-thumb="true"
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none"
      >
        <div className="w-12 h-12 border-2 border-crimson-glow rounded-full flex items-center justify-center">
          <div className="w-0 h-0 border-l-6 border-l-crimson-glow border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
        </div>
      </div>

      {/* Video element - Hidden by default */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover opacity-0 transition-opacity duration-300"
        loop
        muted
        onPlay={() => {
          if (videoRef.current) videoRef.current.style.opacity = '1';
        }}
      />

      {/* Label */}
      <div
        data-label="true"
        className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-velvet-bg to-transparent transition-opacity duration-300"
      >
        <p className="text-xs text-muted font-barlow uppercase tracking-widest">{project.cat}</p>
        <p className="text-sm text-cream font-barlow font-semibold mt-1">{project.name}</p>
      </div>

      {/* Progress bar - appears on video play */}
      <div
        ref={progressRef}
        className="absolute bottom-0 left-0 h-1 bg-crimson-glow opacity-0 transition-opacity duration-300"
        style={{ width: '0%' }}
      />
    </div>
  );
}
