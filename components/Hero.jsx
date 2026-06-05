'use client';

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 pb-16 px-6 md:px-8"
      style={{
        background: `
          radial-gradient(circle at 30% 50%, rgba(192, 57, 43, 0.1) 0%, transparent 50%),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 40px,
            rgba(107, 30, 35, 0.05) 40px,
            rgba(107, 30, 35, 0.05) 41px
          )
        `,
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <p className="text-sm uppercase tracking-widest text-muted mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-gradient-to-r from-crimson-accent to-transparent"></span>
          Creative Video Editor
        </p>

        {/* Name - Three lines */}
        <h1 className="font-bebas text-7xl md:text-8xl leading-tight mb-6">
          <div className="text-cream">YOUR</div>
          <div
            className="text-transparent bg-clip-text text-cream"
            style={{
              WebkitTextStroke: '2px rgba(192, 57, 43, 0.6)',
              textStroke: '2px rgba(192, 57, 43, 0.6)',
            }}
          >
            NAME
          </div>
          <div className="text-cream">HERE</div>
        </h1>

        {/* Subtitle */}
        <p className="font-cormorant text-2xl md:text-3xl italic text-cream mb-4">
          Crafting stories, frame by frame.
        </p>

        {/* Role line */}
        <p className="text-muted text-base md:text-lg mb-8 font-barlow">
          Cinematic Editing · Motion Graphics · Color Grading
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-6 items-center">
          <a
            href="#work"
            className="px-8 py-4 bg-crimson-accent hover:bg-crimson-glow text-cream font-barlow font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
          >
            View Reel →
          </a>
          <a
            href="#contact"
            className="text-cream hover:text-crimson-glow font-barlow font-semibold transition-colors duration-300 relative group"
          >
            Let&apos;s Work Together
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-crimson-glow scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
