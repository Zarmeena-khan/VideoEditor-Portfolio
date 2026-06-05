'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-crimson-mid py-8 px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-barlow">
        {/* Left */}
        <div className="text-muted">© {currentYear} Creative Video Editor. All rights reserved.</div>

        {/* Center */}
        <div className="flex items-center gap-3">
          <span className="text-muted">Open for freelance ·</span>
          <span className="text-crimson-glow font-semibold">Available now</span>
        </div>

        {/* Right */}
        <div className="text-muted">Karachi, Pakistan</div>
      </div>
    </footer>
  );
}
