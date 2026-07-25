'use client';

import { useEffect, useRef, useState } from 'react';

type Project = {
  title: string;
  category: string;
  gradient: string;
  videoSrc: string;
};

const portraitProjects: Project[] = [
  { title: 'Cinematic Reel', category: 'Fashion Film', gradient: 'linear-gradient(180deg, rgba(18,10,12,0.96), rgba(26,14,16,0.98))', videoSrc: '/videos/project-10.mp4' },
  { title: 'Property Tour', category: 'Real Estate', gradient: 'linear-gradient(180deg, rgba(16,8,11,0.95), rgba(29,12,14,0.99))', videoSrc: '/videos/project-11.mp4' },
  { title: 'Brand Campaign', category: 'Commercial', gradient: 'linear-gradient(180deg, rgba(14,8,12,0.96), rgba(34,15,18,0.99))', videoSrc: '/videos/project-12.mp4' },
  { title: 'Event Recap', category: 'Live Event', gradient: 'linear-gradient(180deg, rgba(12,8,12,0.96), rgba(22,12,15,0.99))', videoSrc: '/videos/project-13.mp4' },
  { title: 'Social Reels', category: 'Content Series', gradient: 'linear-gradient(180deg, rgba(17,9,12,0.95), rgba(25,13,15,0.99))', videoSrc: '/videos/project-15.mp4' },
];

const landscapeProjects: Project[] = [
  { title: 'Color Story', category: 'Color Grading', gradient: 'linear-gradient(180deg, rgba(16,9,12,0.96), rgba(23,11,14,0.99))', videoSrc: '/videos/project-6.mp4' },
  { title: 'Motion Edit', category: 'Title Sequence', gradient: 'linear-gradient(180deg, rgba(16,8,12,0.96), rgba(21,10,14,0.99))', videoSrc: '/videos/project-7.mp4' },
  { title: 'Promo Cut', category: 'Ad Spot', gradient: 'linear-gradient(180deg, rgba(15,8,12,0.96), rgba(24,11,14,0.99))', videoSrc: '/videos/project-8.mp4' },
  { title: 'Short Film', category: 'Narrative', gradient: 'linear-gradient(180deg, rgba(15,8,12,0.96), rgba(22,10,14,0.99))', videoSrc: '/videos/project-9.mp4' },
  { title: 'Documentary', category: 'Storytelling', gradient: 'linear-gradient(180deg, rgba(14,7,11,0.96), rgba(21,10,14,0.99))', videoSrc: '/videos/project-17.mp4' },
];

// Capture first frame of a video as a data URL
function captureFirstFrame(src: string): Promise<string> {
  return new Promise((resolve) => {
    const video = document.createElement('video');
    video.crossOrigin = 'anonymous';
    video.muted = true;
    video.preload = 'metadata';
    video.src = src;

    const cleanup = () => {
      video.pause();
      video.removeAttribute('src');
      video.load();
    };

    video.addEventListener('loadeddata', () => {
      video.currentTime = 0.1;
    });

    video.addEventListener('seeked', () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth || 480;
        canvas.height = video.videoHeight || 270;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
          cleanup();
          resolve(dataUrl);
        } else {
          cleanup();
          resolve('');
        }
      } catch {
        cleanup();
        resolve('');
      }
    });

    video.addEventListener('error', () => {
      cleanup();
      resolve('');
    });

    video.load();
  });
}

export default function Work() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [thumbnails, setThumbnails] = useState<Record<string, string>>({});
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const allProjects = [...portraitProjects, ...landscapeProjects];
  const rowOneItems = [...portraitProjects, ...portraitProjects];
  const rowTwoItems = [...landscapeProjects, ...landscapeProjects];

  // Capture thumbnails for all unique videos on mount
  useEffect(() => {
    allProjects.forEach((project) => {
      captureFirstFrame(project.videoSrc).then((dataUrl) => {
        if (dataUrl) {
          setThumbnails((prev) => ({ ...prev, [project.videoSrc]: dataUrl }));
        }
      });
    });
  }, []);

  // Scroll reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Pause all videos except the active one
  const pauseAllExcept = (exceptId: string | null) => {
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (!video || id === exceptId) return;
      video.pause();
      try { video.currentTime = 0; } catch { /* ignore */ }
    });
  };

  const handleCardMouseEnter = (cardId: string, project: Project) => {
    pauseAllExcept(cardId);
    setHoveredCard(cardId);
    const video = videoRefs.current[cardId];
    if (!video) return;
    if (!video.src || video.src === window.location.href) {
      video.src = project.videoSrc;
    }
    video.currentTime = 0;
    video.play().catch(() => { /* ignore */ });
  };

  const handleCardMouseLeave = (cardId: string) => {
    setHoveredCard((curr) => (curr === cardId ? null : curr));
    const video = videoRefs.current[cardId];
    if (!video) return;
    video.pause();
    try { video.currentTime = 0; } catch { /* ignore */ }
  };

  const renderCard = (project: Project, cardId: string, isPortrait: boolean) => {
    const isHovered = hoveredCard === cardId;
    const cardWidth = isPortrait ? 160 : 280;
    const cardHeight = isPortrait ? 280 : 160;
    const thumbnail = thumbnails[project.videoSrc];

    return (
      <div
        key={cardId}
        className={`video-card ${isPortrait ? '' : 'landscape'}`}
        onMouseEnter={() => handleCardMouseEnter(cardId, project)}
        onMouseLeave={() => handleCardMouseLeave(cardId)}
        style={{
          width: `${cardWidth}px`,
          height: `${cardHeight}px`,
          flex: '0 0 auto',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '24px',
          background: project.gradient,
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: '0 0 24px rgba(0,0,0,0.35)',
          cursor: 'pointer',
        }}
      >
        {/* Thumbnail image — shown when not hovered */}
        {thumbnail && (
          <img
            src={thumbnail}
            alt={project.title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              zIndex: 0,
              opacity: isHovered ? 0 : 1,
              transition: 'opacity 0.3s ease',
            }}
          />
        )}

        {/* Dark fallback when thumbnail not yet loaded */}
        {!thumbnail && (
          <div style={{ position: 'absolute', inset: 0, background: '#0d0505', zIndex: 0 }} />
        )}

        {/* Video — fades in on hover */}
        <video
          ref={(el) => { videoRefs.current[cardId] = el; }}
          preload="none"
          playsInline
          loop
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            zIndex: 1,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(4,3,3,0.05), rgba(4,3,3,0.55) 45%, rgba(4,3,3,0.95))',
            zIndex: 2,
          }}
        />

        {/* Play button — hidden on hover */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            zIndex: 3,
            opacity: isHovered ? 0 : 1,
            transition: 'opacity 0.25s ease',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              border: '2px solid rgba(255,30,39,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.45)',
              boxShadow: '0 0 24px rgba(255,30,39,0.18)',
            }}
          >
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
              <path d="M2 1.5L14 10L2 18.5V1.5Z" fill="#FF1E27" />
            </svg>
          </div>
        </div>

        {/* Title + Category — hidden on hover */}
        <div
          style={{
            position: 'absolute',
            left: '1rem',
            right: '1rem',
            bottom: '1rem',
            zIndex: 4,
            opacity: isHovered ? 0 : 1,
            transition: 'opacity 0.25s ease',
          }}
        >
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.62)', fontFamily: '"Barlow", sans-serif', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.16em' }}>
            {project.category}
          </p>
          <h3 style={{ margin: '0.35rem 0 0', color: '#FFFFFF', fontFamily: '"Bebas Neue", sans-serif', fontSize: isPortrait ? '1.05rem' : '1.1rem', lineHeight: 1.1, letterSpacing: '0.02em' }}>
            {project.title}
          </h3>
        </div>
      </div>
    );
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      style={{ position: 'relative', overflow: 'hidden', paddingTop: '5rem', paddingBottom: '5rem', background: 'rgba(5,4,5,1)' }}
    >
      <div
        style={{
          maxWidth: '1240px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.75s ease-out, transform 0.75s ease-out',
        }}
      >
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ color: 'rgba(255,255,255,0.65)', fontFamily: '"Barlow", sans-serif', fontSize: '0.75rem', letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: '0.9rem' }}>
            WORK
          </div>
          <h2 style={{ margin: 0, color: '#FFFFFF', fontFamily: '"Bebas Neue", sans-serif', fontSize: '3.4rem', lineHeight: 1, letterSpacing: '0.06em' }}>
            Project Highlights
          </h2>
        </div>

        {/* Row 1 — scroll left */}
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          <div style={{ overflow: 'hidden', borderRadius: '28px', padding: '0.5rem 0' }}>
            <div className="scroll-left" style={{ display: 'flex', gap: '1rem', alignItems: 'center', width: 'max-content' }}>
              {rowOneItems.map((project, index) => renderCard(project, `row1-${index}`, true))}
            </div>
          </div>
        </div>

        {/* Row 2 — scroll right */}
        <div style={{ position: 'relative', marginTop: '1rem' }}>
          <div style={{ overflow: 'hidden', borderRadius: '28px', padding: '0.5rem 0' }}>
            <div className="scroll-right" style={{ display: 'flex', gap: '1rem', alignItems: 'center', width: 'max-content' }}>
              {rowTwoItems.map((project, index) => renderCard(project, `row2-${index}`, false))}
            </div>
          </div>
        </div>
      </div>

      {/* Fade edges */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '90px', pointerEvents: 'none', background: 'linear-gradient(90deg, var(--bg) 0%, transparent 100%)' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '90px', pointerEvents: 'none', background: 'linear-gradient(270deg, var(--bg) 0%, transparent 100%)' }} />
    </section>
  );
}