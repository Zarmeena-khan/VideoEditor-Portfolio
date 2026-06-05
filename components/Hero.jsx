"use client";

import { GitFork, Link, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["AI Developer", "Frontend Developer", "Agentic AI Student"];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(120);

  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];
    const fullText = currentRole;

    const handleTyping = () => {
      setDisplayText((prev) => {
        const nextText = isDeleting
          ? fullText.slice(0, prev.length - 1)
          : fullText.slice(0, prev.length + 1);

        if (!isDeleting && nextText === fullText) {
          setIsDeleting(true);
          setDelay(1200);
        } else if (isDeleting && nextText === "") {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => prevIndex + 1);
          setDelay(160);
        } else {
          setDelay(isDeleting ? 60 : 120);
        }

        return nextText;
      });
    };

    const timer = setTimeout(handleTyping, delay);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, delay]);

  return (
    <section id="home" className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative flex justify-center"
      >
        <div className="relative flex h-96 w-96 items-center justify-center rounded-full">
          <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-[90px]" />
          <div className="absolute -inset-6 rounded-full bg-cyan-300/20 blur-[100px]" />
          <div className="relative flex h-full w-full items-center justify-center rounded-full border border-cyan-400/30 bg-[#07131f] shadow-glow">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,212,212,0.18),_transparent_55%)]" />
            <div className="relative h-[86%] w-[86%] overflow-hidden rounded-full border border-cyan-400/40 bg-[#081522] ring-2 ring-cyan-400/20 shadow-[0_0_40px_rgba(45,248,255,0.18)]">
              <img
                src="/my-picture.jpeg"
                alt="Profile picture"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">Hello, I&apos;m</p>
        <h1 className="mb-4 text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">
          Zarmeena <span className="text-accent">Khan</span>
        </h1>
        <div className="mb-8 text-2xl font-semibold text-slate-100">
          <span className="text-slate-400">And I&apos;m a </span>
          <span className="inline-flex items-center gap-2 text-accent">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted">
          Exploring the world of technology and artificial intelligence. Currently enrolled in
          Agentic Robotic AI Engineer course, passionate about creating innovative solutions.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="button-glow">
            Hire Me
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {[
            { label: "3+ Projects" },
            { label: "2+ Technologies" },
            { label: "100% Passion" },
          ].map((item) => (
            <div key={item.label} className="glass-panel max-w-xs">
              {item.label}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {[
            {
              href: "https://github.com/Zarmeena-khan",
              Icon: GitFork,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/zarmeena-khan-4b305438a",
              Icon: Link,
              label: "LinkedIn",
            },
            {
              href: "https://mail.google.com",
              Icon: Mail,
              label: "Email",
            },
            {
              href: "https://discord.com/users/zarmeenakhan_65331",
              Icon: MessageSquare,
              label: "Discord",
            },
          ].map(({ href, Icon, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(0,212,212,0.18)] bg-[#07111f] text-accent transition hover-glow"
              aria-label={label}
            >
              <Icon size={18} className="text-accent" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
