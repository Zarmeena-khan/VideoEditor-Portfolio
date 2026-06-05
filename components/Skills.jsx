"use client";

import { Cpu, Code2, LayoutList, Database, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML", icon: Code2, level: 85 },
  { name: "CSS", icon: LayoutList, level: 80 },
  { name: "JavaScript", icon: Cpu, level: 70 },
  { name: "Python", icon: Database, level: 40 },
  { name: "React", icon: Sparkles, level: 40 },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      id="skills"
      ref={sectionRef}
      className="section-shell"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title text-center">Skills</h2>
      <p className="section-subtitle text-center mx-auto">
        A snapshot of my current core skills and tools that I continue to improve through hands-on
        projects.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="glow-card p-6"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(0,212,212,0.12)] text-accent">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <p className="text-sm uppercase tracking-[0.18em] text-muted">{skill.level}%</p>
                </div>
              </div>
              <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-[#00bcd4] shadow-[0_0_15px_rgba(0,188,212,0.35)]"
                  initial={{ width: 0 }}
                  animate={{ width: inView ? `${skill.level}%` : "0%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
