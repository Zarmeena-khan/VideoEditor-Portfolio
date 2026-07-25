'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const stats = [
  { num: '2.5+', label: 'Years Experience' },
  { num: '50+', label: 'Projects Delivered' },
  { num: '20+', label: 'Happy Clients' },
  { num: '5M+', label: 'Views Generated' },
];

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
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
        @media (max-width: 768px) {
          .about-container { flex-direction: column !important; gap: 1.2rem !important; }
          .about-image { max-width: 100% !important; width: 100% !important; }
          .about-image-container { max-height: 180px !important; padding-bottom: 50% !important; max-width: 100% !important; }
          .about-text { min-width: unset !important; }
          .stats-grid { gap: 0.6rem !important; }
          .stat-item { min-width: calc(50% - 0.3rem) !important; }
          .stat-number { font-size: 1.8rem !important; }
          .about-section { padding: 3rem 1rem !important; }
          .about-heading { font-size: clamp(1.8rem, 7vw, 2.4rem) !important; }
          .about-bold-text { font-size: 1.1rem !important; }
          .about-para { font-size: 0.85rem !important; line-height: 1.6 !important; }
        }
      `}</style>
      <section
        id="about"
        className="about-section"
        style={{
          padding: '5rem 1.5rem',
          background: 'var(--bg)',
          color: 'var(--text)',
        }}
      >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div style={{ marginBottom: '2rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1rem',
            }}
          >
            <span
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontFamily: '"Barlow", sans-serif',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}
            >
              ABOUT
            </span>
            <span
              style={{
                display: 'block',
                flex: '1 1 auto',
                height: '1px',
                background: 'rgba(224,82,82,0.45)',
                borderRadius: '999px',
              }}
            />
          </div>

          <h2
            className="about-heading"
            style={{
              margin: 0,
              fontFamily: 'var(--font-bebas),"Bebas Neue",sans-serif',
              fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)',
              color: 'var(--text)',
              letterSpacing: '0.02em',
            }}
          >
            THE STORY BEHIND THE EDIT
          </h2>
        </div>

        <div
          ref={ref}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
          className="about-container"
        >
          <div
            className="about-image"
            style={{
              flex: '0 0 auto',
              width: '100%',
              maxWidth: '280px',
              maxHeight: '320px',
            }}
          >
            <div
              className="about-image-container"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '280px',
                paddingBottom: '110%',
                maxHeight: '320px',
                background: '#1a1a1a',
                borderRadius: '28px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '1.2rem',
                  left: '1.2rem',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderLeft: '1.5px solid rgba(255,255,255,0.35)',
                  borderTop: '1.5px solid rgba(255,255,255,0.35)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  right: '1.2rem',
                  bottom: '1.2rem',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRight: '1.5px solid rgba(255,255,255,0.35)',
                  borderBottom: '1.5px solid rgba(255,255,255,0.35)',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.55rem',
                  borderRadius: '999px',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  style={{
                    width: '0.65rem',
                    height: '0.65rem',
                    borderRadius: '50%',
                    background: '#ff5959',
                  }}
                />
                <div
                  style={{
                    width: '0.9rem',
                    height: '0.55rem',
                    borderRadius: '0.18rem',
                    border: '1px solid rgba(255,255,255,0.7)',
                  }}
                />
              </div>

              <Image
                src="/crimson-small.jpeg"
                alt="Crimson Studio"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                quality={60}
                priority={false}
              />
            </div>
          </div>

          <div
            className="about-text"
            style={{
              flex: '1 1 520px',
              minWidth: '300px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.5rem 0.9rem',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                maxWidth: 'fit-content',
              }}
            >
              <span
                style={{
                  width: '0.65rem',
                  height: '0.65rem',
                  borderRadius: '50%',
                  background: '#F5A623',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontFamily: '"Barlow", sans-serif',
                  fontSize: '0.8rem',
                  color: 'var(--muted)',
                }}
              >
                Available for freelance work
              </span>
            </div>

            <div
              className="about-bold-text"
              style={{
                fontFamily: '"Barlow", sans-serif',
                fontSize: '1.4rem',
                lineHeight: 1.4,
                fontWeight: 700,
                color: '#ffffff',
              }}
            >
              A{' '}
              <span style={{ color: '#FF1E27' }}>
                Creative Video Editor
              </span>{' '}
              with{' '}
              <span style={{ color: '#FF1E27' }}>
                2.5+ years
              </span>{' '}
              of experience crafting high-quality and engaging visual content...
            </div>

            <p
              className="about-para"
              style={{
                margin: 0,
                fontFamily: '"Barlow", sans-serif',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                color: 'var(--muted)',
                maxWidth: '780px',
              }}
            >
              A Creative Video Editor with 2.5+ years of experience crafting high-quality and
              engaging visual content, innovative video graphics and improved creative storytelling.
            </p>

            <div
              className="stats-grid"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginTop: '0.5rem',
              }}
            >
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="stat-item"
                  style={{
                    minWidth: '150px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                  }}
                >
                  <div
                    className="stat-number"
                    style={{
                      fontFamily: '"Bebas Neue", sans-serif',
                      fontSize: '2.5rem',
                      lineHeight: 1,
                      color: '#FF1E27',
                    }}
                  >
                    {item.num}
                  </div>
                  <div
                    style={{
                      fontFamily: '"Barlow", sans-serif',
                      fontSize: '0.75rem',
                      color: 'var(--muted)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
