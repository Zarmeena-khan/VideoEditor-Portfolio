'use client';

export default function Navbar() {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 pointer-events-none">
      <div
        className="pointer-events-auto"
        style={{
          background: 'linear-gradient(to bottom, rgba(22,10,11,0.97), transparent)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-cream font-bebas text-2xl">[ </span>
            <span className="text-crimson-glow font-bebas text-2xl">CV</span>
            <span className="text-cream font-bebas text-2xl"> ]</span>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-cream hover:text-crimson-glow transition-colors duration-300 relative group text-sm font-barlow font-medium"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-crimson-glow to-transparent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
