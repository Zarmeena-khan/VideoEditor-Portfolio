"use client";

import { Code2, LayoutGrid, Monitor, Palette, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const filters = ["All", "Web Design", "Development", "AI", "Branding"];
const projects = [
  {
    title: "BeanScene",
    category: ["Web Design", "Development", "AI"],
    imageUrl: "/beanscene.png.png",
    description:
      "AI-powered coffee ordering website with Bean Buddy chatbot (Urdu-English), cart, favorites, and multiple categories.",
    tech: ["Next.js 14", "Tailwind CSS", "Groq API", "LLaMA 3.3"],
    live: "https://beanscene-project.vercel.app",
    github: "https://github.com/Zarmeena-khan/BeanScene-Project",
  },
  {
    title: "StudyMind",
    category: ["Development", "AI"],
    imageUrl: "/studymind.png.png",
    description:
      "AI-powered EdTech app that generates summaries, 3D flashcards, and MCQ quizzes from text, PDFs, and images using Google Gemini.",
    tech: ["React", "Vite", "Node.js", "Gemini API"],
    live: "https://study-mind-chi.vercel.app",
    github: "https://github.com/Zarmeena-khan/StudyMind",
  },
];

const icons = {
  "Web Design": Palette,
  Development: Code2,
  AI: Sparkles,
  Branding: Monitor,
  All: LayoutGrid,
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  return (
    <motion.section
      id="portfolio"
      className="section-shell"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mb-10 text-center">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle mx-auto">
          Filter through categories while I prepare new AI and frontend projects for release.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="glow-card space-y-4 p-6">
          <h3 className="text-lg font-semibold text-white">Filter Projects</h3>
          <div className="space-y-3">
            {filters.map((filter) => {
              const Icon = icons[filter] || LayoutGrid;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                    activeFilter === filter
                      ? "border-accent bg-[rgba(0,212,212,0.15)] text-accent"
                      : "border-[rgba(255,255,255,0.08)] text-slate-300 hover:border-accent hover:text-accent"
                  }`}
                >
                  <Icon size={18} />
                  {filter}
                </button>
              );
            })}
          </div>
        </aside>

        <div className="glow-card p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            {filtered.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.35)]"
              >
                <div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-xl mb-2"
                  />
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 sm:justify-end">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/20"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-accent hover:text-accent"
                  >
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
