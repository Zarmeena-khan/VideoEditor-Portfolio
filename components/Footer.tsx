'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const categoryItems = ['Fashion Film', 'Commercial', 'Social Reels'];
  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#tools' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      style={{
        background: '#0a0a0a',
        color: '#F2ECE4',
        padding: '3rem 1.5rem 2.25rem',
        borderTop: '1px solid rgba(192, 57, 43, 0.2)',
      }}
    >
      <style>{`
        .footer-brand {
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 0.12em;
        }
        .footer-categories {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.2rem;
        }
        .footer-links {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem 1.5rem;
        }
        .footer-link {
          text-decoration: none;
          color: #F2ECE4;
          font-family: var(--font-barlow), Arial, Helvetica, sans-serif;
          font-size: 0.86rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          transition: color 0.25s ease;
        }
        .footer-link:hover {
          color: #E05252;
        }
        .footer-icon {
          width: 2.35rem;
          height: 2.35rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.02);
          color: #9A837F;
          transition: color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
        }
        .footer-icon:hover {
          color: #C0392B;
          border-color: rgba(192, 57, 43, 0.45);
          box-shadow: 0 0 18px rgba(224, 82, 82, 0.22);
          transform: translateY(-1px);
        }
        @media (max-width: 768px) {
          .footer-links {
            flex-direction: column;
            gap: 0.8rem;
          }
          .footer-categories {
            row-gap: 0.35rem;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          textAlign: 'center',
        }}
      >
        <div className="footer-brand" style={{ color: '#F2ECE4', fontSize: '2rem', lineHeight: 1 }}>CRIMSON STUDIO</div>

        <div className="footer-categories" style={{ color: '#9A837F', fontFamily: 'var(--font-barlow), Arial, Helvetica, sans-serif', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.18em' }}>
          {categoryItems.map((item, index) => (
            <span key={item} style={{ display: 'inline-flex', alignItems: 'center' }}>
              {item}
              {index < categoryItems.length - 1 && (
                <span style={{ margin: '0 0.5rem', color: '#C0392B' }}>•</span>
              )}
            </span>
          ))}
        </div>

        <div style={{ width: '100%', maxWidth: '560px', height: '1px', background: 'rgba(192, 57, 43, 0.35)' }} />

        <nav className="footer-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="footer-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
          <a
            href="https://www.instagram.com/crimsonstudios.llc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer-icon"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.256 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428-.05-1.066-.06-1.405-.06-4.122 0-2.717.01-3.056.06-4.122.05-1.065.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.01 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.566.683-.747 1.15-.137.353-.3.882-.344 1.857-.05 1.055-.06 1.37-.06 4.04 0 2.67.01 2.986.06 4.04.045.976.207 1.505.344 1.858.181.466.399.8.748 1.15.35.35.683.566 1.15.747.353.137.882.3 1.857.344 1.054.05 1.37.06 4.04.06 2.67 0 2.987-.01 4.04-.06.976-.045 1.505-.207 1.858-.344.466-.181.8-.398 1.15-.748.35-.35.566-.683.747-1.15.137-.353.3-.882.344-1.857.05-1.054.06-1.37.06-4.04 0-2.67-.01-2.986-.06-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.747c-.353-.137-.882-.3-1.857-.344-1.054-.05-1.37-.06-4.04-.06zm0 4.594a5.604 5.604 0 110 11.208 5.604 5.604 0 010-11.208zM12 16a4 4 0 100-8 4 4 0 000 8zm5.845-10.405a1.31 1.31 0 11-2.62 0 1.31 1.31 0 012.62 0z" />
            </svg>
          </a>

          <a
            href="mailto:hello@example.com"
            aria-label="Email"
            className="footer-icon"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" rx="2" />
              <path d="M4.5 7.5 12 13l7.5-5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div style={{ width: '100%', maxWidth: '560px', height: '1px', background: 'rgba(192, 57, 43, 0.35)' }} />

        <div style={{ color: '#9A837F', fontFamily: 'var(--font-barlow), Arial, Helvetica, sans-serif', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
          © {currentYear} Crimson Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
