"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const updateActiveLink = () => {
      const scrollPosition = window.scrollY + 120;
      const currentSection = links
        .slice()
        .reverse()
        .find(({ id }) => {
          const element = document.getElementById(id);
          return element && element.offsetTop <= scrollPosition;
        });

      if (currentSection) {
        setActiveLink(currentSection.id);
      }
    };

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveLink);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(0,212,212,0.14)] bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#home" className="text-2xl font-bold tracking-[0.18em]">
          Port<span className="text-accent">folio</span>
        </a>

        <button
          className="text-text md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${activeLink === link.id ? "nav-link-active" : ""}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="/Zarmeena_Khan_CV_Done.pdf"
              download="Zarmeena_Khan_CV_Done.pdf"
              className="inline-flex items-center rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="space-y-3 border-t border-[rgba(0,212,212,0.14)] px-6 py-4 md:hidden">
          <div className="flex items-center justify-between">
            <a
              href="/Zarmeena_Khan_CV_Done.pdf"
              download="Zarmeena_Khan_CV_Done.pdf"
              className="inline-flex items-center rounded-2xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Download CV
            </a>
          </div>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="block text-sm font-medium text-slate-200 transition hover:text-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
