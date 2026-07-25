'use client';

import { useState } from 'react';

const inputClassName =
  'w-full px-4 py-3 rounded font-barlow placeholder-muted focus:outline-none transition-colors border contact-input';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/mvzewnyw', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-muted mb-3 flex items-center gap-3">
          <span className="w-8 h-px bg-gradient-to-r from-crimson-accent to-transparent" />
          CONTACT
        </p>
        <h2 className="font-bebas text-5xl md:text-6xl text-cream mb-6">
          LET&apos;S CREATE TOGETHER
        </h2>

        <div
          className="relative p-8 md:p-12 rounded-lg border overflow-hidden contact-box"
          style={{
            backgroundColor: '#1E0C0E',
            borderColor: 'rgba(107, 30, 35, 0.35)',
          }}
        >
          {/* Top-left accent line */}
          <div
            className="absolute top-0 left-0"
            style={{
              width: '70px',
              height: '2px',
              background: 'linear-gradient(to right, #6B1E23, #E05252)',
            }}
          />
          {/* Bottom-right accent line */}
          <div
            className="absolute bottom-0 right-0"
            style={{
              width: '70px',
              height: '2px',
              background: 'linear-gradient(to right, #6B1E23, #E05252)',
            }}
          />

          <p className="text-muted font-barlow leading-relaxed mb-8 relative z-10">
            Have a project in mind? Let&apos;s talk about how we can bring your vision to life
            through the art of editing.
          </p>

          <form
            action="https://formspree.io/f/mvzewnyw"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6 relative z-10"
          >
            {submitted && (
              <div className="p-4 rounded border border-crimson-mid bg-velvet-bg3 text-cream text-center font-barlow text-sm">
                Message sent successfully!
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 contact-form-grid">
              <div>
                <label htmlFor="name" className="block text-cream font-barlow text-sm mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className={inputClassName}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-cream font-barlow text-sm mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className={inputClassName}
                  placeholder="hello@example.com"
                />
              </div>

              <div>
                <label htmlFor="project-type" className="block text-cream font-barlow text-sm mb-2">
                  Project Type
                </label>
                <input
                  id="project-type"
                  type="text"
                  name="project-type"
                  required
                  className={inputClassName}
                  placeholder="Reels / Brand Film / Property Video"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-cream font-barlow text-sm mb-2">
                  Budget Range
                </label>
                <input
                  id="budget"
                  type="text"
                  name="budget"
                  required
                  className={inputClassName}
                  placeholder="e.g. $200 - $500"
                />
              </div>

              <div className="md:col-span-2 contact-form-full">
                <label htmlFor="message" className="block text-cream font-barlow text-sm mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={`${inputClassName} resize-none`}
                  placeholder="Describe your vision, timeline, and any references..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="py-3 px-6 text-cream font-barlow font-semibold rounded transition-opacity duration-300 hover:opacity-90 contact-button"
              style={{
                background: 'linear-gradient(to right, #6B1E23, #C0392B)',
              }}
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-input {
          background-color: #240F11;
          border-color: rgba(107, 30, 35, 0.35);
          color: #F2ECE4;
        }
        .contact-input:focus {
          border-color: #6B1E23;
        }
      `}</style>
    </section>
  );
}
