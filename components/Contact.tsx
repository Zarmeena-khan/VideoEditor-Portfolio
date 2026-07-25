'use client';

import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: '5rem 1.5rem',
        background: 'transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              style={{
                display: 'block',
                width: '64px',
                height: '1px',
                background: 'var(--red)',
                opacity: 0.95,
              }}
            />
            <span
              style={{
                color: 'var(--muted)',
                fontFamily: 'var(--font-barlow)',
                fontSize: '0.75rem',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
              }}
            >
              CONTACT
            </span>
          </div>

          <h2
            style={{
              margin: 0,
              color: 'var(--cream)',
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(2.5rem, 4vw, 4rem)',
              lineHeight: 1.02,
            }}
          >
            LET&apos;S CREATE TOGETHER
          </h2>

          <p
            style={{
              margin: 0,
              color: 'var(--muted)',
              fontFamily: 'var(--font-barlow)',
              fontSize: '1rem',
              lineHeight: 1.8,
              maxWidth: '760px',
            }}
          >
            Have a project in mind? Let&apos;s talk...
          </p>

          <a
            href="https://www.instagram.com/crimsonstudios.llc/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              width: 'fit-content',
              marginTop: '-0.15rem',
              color: 'var(--muted)',
              fontFamily: 'var(--font-barlow)',
              fontSize: '0.86rem',
              letterSpacing: '0.04em',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
            </svg>
            <span>Or find me on Instagram</span>
          </a>
        </div>

        <form
          action="https://formspree.io/f/mvzewnyw"
          method="POST"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div
            style={{
              position: 'relative',
              border: '1px solid rgba(255,30,39,0.15)',
              borderRadius: '28px',
              background: 'rgba(255,255,255,0.02)',
              padding: '2rem',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '86px',
                height: '4px',
                background: 'var(--red)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '86px',
                height: '4px',
                background: 'var(--red)',
              }}
            />

            <div
              style={{
                display: 'grid',
                gap: '1.5rem',
              }}
            >
              <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--cream)', fontFamily: 'var(--font-barlow)', fontSize: '0.9rem' }}>
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '16px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      background: 'rgba(255,255,255,0.03)',
                      color: 'var(--cream)',
                      fontFamily: 'var(--font-barlow)',
                      outline: 'none',
                    }}
                  />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--cream)', fontFamily: 'var(--font-barlow)', fontSize: '0.9rem' }}>
                  <span>Email Address</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="youremail@example.com"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '16px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      background: 'rgba(255,255,255,0.03)',
                      color: 'var(--cream)',
                      fontFamily: 'var(--font-barlow)',
                      outline: 'none',
                    }}
                  />
                </label>
              </div>

              <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--cream)', fontFamily: 'var(--font-barlow)', fontSize: '0.9rem' }}>
                  <span>Project Type</span>
                  <input
                    type="text"
                    name="project-type"
                    required
                    placeholder="Reels / Brand Film / Property Video"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '16px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      background: 'rgba(255,255,255,0.03)',
                      color: 'var(--cream)',
                      fontFamily: 'var(--font-barlow)',
                      outline: 'none',
                    }}
                  />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--cream)', fontFamily: 'var(--font-barlow)', fontSize: '0.9rem' }}>
                  <span>Budget Range</span>
                  <input
                    type="text"
                    name="budget"
                    required
                    placeholder="e.g. $200 - $500"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '16px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      background: 'rgba(255,255,255,0.03)',
                      color: 'var(--cream)',
                      fontFamily: 'var(--font-barlow)',
                      outline: 'none',
                    }}
                  />
                </label>
              </div>

              <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--cream)', fontFamily: 'var(--font-barlow)', fontSize: '0.9rem' }}>
                <span>Project Details</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Describe your vision, timeline, and any references..."
                  style={{
                    width: '100%',
                    padding: '1rem',
                    minHeight: '180px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.03)',
                    color: 'var(--cream)',
                    fontFamily: 'var(--font-barlow)',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </label>

              <button
                type="submit"
                style={{
                  width: '100%',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '1rem 1.25rem',
                  background: 'linear-gradient(135deg, var(--red), #E05252)',
                  color: '#0B0607',
                  fontFamily: 'var(--font-barlow)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  letterSpacing: '0.02em',
                  cursor: 'pointer',
                  boxShadow: '0 18px 45px rgba(255,30,39,0.22)',
                }}
              >
                Send Message →
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
