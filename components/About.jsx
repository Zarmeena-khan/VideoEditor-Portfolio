"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "18", label: "Years Old" },
  { value: "Fresh", label: "Experience" },
  { value: "CS", label: "Field" },
  { value: "AI", label: "Focus" },
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="section-shell"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-[rgba(0,212,212,0.2)] bg-panel p-10 shadow-glow">
        <h2 className="section-title text-center">About Me</h2>
        <div className="section-subtitle text-center mx-auto space-y-4 max-w-3xl">
          <p>
            Hello! I&apos;m Zarmeena Khan, an 18-year-old passionate learner transitioning from the
            medical field to computer science. My journey in tech began with curiosity and has
            evolved into a deep interest in artificial intelligence and robotics.
          </p>
          <p>
            Currently, I&apos;m pursuing an Agentic Robotic AI Engineer course, expanding my
            knowledge in cutting-edge technology. My background in medical studies has given me a
            unique perspective on problem-solving and analytical thinking.
          </p>
          <p>
            I believe in continuous learning and am excited about the possibilities that technology
            offers. My goal is to contribute to the field of AI and robotics, creating solutions
            that can make a positive impact.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glow-card p-6 text-center"
            >
              <p className="text-3xl font-bold text-accent">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
