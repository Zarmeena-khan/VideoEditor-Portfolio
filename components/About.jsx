'use client';

const stats = [
  { number: '2.5+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Delivered' },
  { number: '20+', label: 'Happy Clients' },
  { number: '5M+', label: 'Views Generated' },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: profile photo placeholder */}
          <div>
            <div
              className="aspect-[3/4] rounded-lg border flex items-center justify-center"
              style={{
                backgroundColor: '#240F11',
                borderColor: 'rgba(107, 30, 35, 0.35)',
              }}
            >
              <span className="text-muted font-barlow text-lg">Your Photo Here</span>
            </div>
          </div>

          {/* Right: story, badge, bio, stats */}
          <div className="space-y-6">
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-wide">
              THE STORY BEHIND THE EDIT
            </h2>

            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-crimson-mid bg-velvet-bg2"
              style={{ borderColor: 'rgba(107, 30, 35, 0.35)' }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0" />
              <span className="text-cream font-barlow text-sm">Available for freelance work</span>
            </div>

            <div className="space-y-4">
              <p className="text-cream font-barlow leading-relaxed text-lg">
                A Creative Video Editor with 2.5+ years of experience crafting high-quality and
                engaging visual content. Skilled in cinematic editing, motion graphics, animations,
                and modern social media content styles.
              </p>
              <p className="text-cream font-barlow leading-relaxed text-lg">
                Experienced in editing property videos, promotional ads, reels, and brand-focused
                content with clean storytelling. Passionate about creating visually strong edits
                that capture attention and increase audience engagement.
              </p>
            </div>

            <div
              className="grid grid-cols-2 gap-6 pt-8 border-t"
              style={{ borderColor: 'rgba(107, 30, 35, 0.35)' }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-crimson-glow pl-4">
                  <div className="text-crimson-glow font-bebas text-3xl mb-1">{stat.number}</div>
                  <div className="text-muted font-barlow text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
