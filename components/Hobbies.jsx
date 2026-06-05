"use client";

import { BookOpen, Camera, Pencil } from "lucide-react";
import { motion } from "framer-motion";

const hobbies = [
  {
    title: "Sketching",
    description:
      "Expressing creativity through pencil sketches and digital art, exploring different artistic techniques.",
    icon: Pencil,
  },
  {
    title: "Photography",
    description:
      "Capturing moments and exploring the world through the lens, focusing on nature and portraits.",
    icon: Camera,
  },
  {
    title: "Reading Books",
    description:
      "Exploring various genres from science fiction to self-development, always learning something new.",
    icon: BookOpen,
  },
];

export default function Hobbies() {
  return (
    <motion.section
      id="hobbies"
      className="section-shell"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title text-center">Hobbies</h2>
      <p className="section-subtitle text-center mx-auto">
        Personal interests that keep me curious, creative, and inspired outside technical work.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          return (
            <motion.div
              key={hobby.title}
              className="glow-card p-6"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <Icon className="mb-4 text-accent" size={28} />
              <h3 className="mb-2 text-lg font-semibold text-white">{hobby.title}</h3>
              <p className="text-sm text-slate-300">{hobby.description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
