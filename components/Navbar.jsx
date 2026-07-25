'use client';

import { useState } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#tools' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <style>{`
        .hamburger-menu {
          display: none;
          flex-direction: column;
          gap: 0.35rem;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }
        .hamburger-menu span {
          display: block;
          width: 1.5rem;
          height: 2px;
          background: #fff;
          transition: all 0.3s ease;
        }
        .mobile-menu {
          display: none;
          flex-direction: column;
          background: rgba(0,0,0,0.95);
          backdrop-filter: blur(20px);
          padding: 1.5rem;
          gap: 1.2rem;
        }
        .mobile-menu a {
          color: #fff;
          font-family: 'Barlow', sans-serif;
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: color 0.3s;
        }
        .mobile-menu a:hover {
          color: #FF1E27;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .hamburger-menu {
            display: flex;
          }
          .mobile-menu.open {
            display: flex;
          }
        }
      `}</style>
      <nav className="fixed inset-x-0 top-0 z-50 bg-black/20 backdrop-blur-xl text-slate-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 md:px-8">
          {/* Logo stays on left always */}
          <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', gap: '0.3rem' }}>
            <span style={{ color: '#FF1E27' }}>CRIMSON</span>
            <span style={{ color: '#ffffff' }}>STUDIO</span>
          </div>

        {/* Desktop nav links */}
        <div className="nav-links flex flex-wrap items-center justify-end gap-6 text-sm uppercase tracking-[0.24em]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-slate-200 transition-colors duration-300 hover:text-[#FF2E2E]"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {link.label}
              <span className="absolute left-0 top-full mt-1 h-[1px] w-0 bg-[#FF2E2E] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Hamburger menu button */}
        <button
          className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
    </>
  );
}
