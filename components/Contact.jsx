"use client";

import { CheckCircle2, GitFork, Link, Loader2, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const initialForm = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFeedback("");
    setStatus("idle");

    if (!formData.fullName || !formData.email || !formData.message) {
      setStatus("error");
      setFeedback("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xwvydaze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFeedback("Message sent successfully!");
        setFormData(initialForm);
      } else {
        setStatus("error");
        setFeedback("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setFeedback("An error occurred. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="section-shell"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title text-center">Contact</h2>
      <p className="section-subtitle text-center mx-auto">
        Let us connect for learning, collaboration, and opportunities in AI and technology.
      </p>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glow-card space-y-6 p-8">
          <div>
            <h3 className="text-2xl font-semibold text-white">Reach Out</h3>
            <p className="mt-2 text-sm text-muted">
              I’m available for new projects, mentorship, and research collaboration.
            </p>
          </div>

          <div className="space-y-4 text-slate-300">
            <div className="flex items-center gap-3 rounded-3xl border border-[rgba(0,212,212,0.14)] bg-[#07111f] p-4">
              <Mail size={18} className="text-accent" />
              <span>zarmeenakhan370@gmail.com</span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <p className="text-sm uppercase tracking-[0.24em] text-muted">Socials</p>
            <div className="flex flex-wrap gap-3">
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
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glow-card space-y-4 p-8">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name *"
            required
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#07111f] px-5 py-4 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="yourEmail@gmail.com"
            required
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#07111f] px-5 py-4 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject (optional)"
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#07111f] px-5 py-4 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Message *"
            required
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#07111f] px-5 py-4 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent-soft"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>

          {feedback && (
            <p className={`flex items-center gap-2 text-sm ${status === "success" ? "text-green-400" : "text-red-400"}`}>
              {status === "success" && <CheckCircle2 className="animate-bounce" size={16} />}
              {feedback}
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
}
