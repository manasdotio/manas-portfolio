"use client";

import { useState } from "react";
import { playClickSound } from "../ui/sound";

export default function QuickContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setFeedbackMessage("Please fill in all fields.");
      return;
    }

    setStatus("submitting");
    setFeedbackMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFeedbackMessage("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setFeedbackMessage(
        err.message || "Something went wrong. Please email directly at manasdotio@gmail.com."
      );
    }
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=manasdotio@gmail.com&su=${encodeURIComponent(
    formData.name ? `Project inquiry from ${formData.name}` : "Portfolio Inquiry — Manas Singh"
  )}&body=${encodeURIComponent(formData.message)}`;

  return (
    <div className="w-full max-w-xl rounded-xl border border-[#202534] bg-[#0c0e16]/80 p-5 sm:p-6 backdrop-blur-md shadow-xl shadow-black/60">
      <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#1b202d]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          <h3 className="font-mono text-xs font-semibold tracking-wider text-[#d1d5db] uppercase">
            Quick Message
          </h3>
        </div>
        <a
          href={gmailComposeUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playClickSound()}
          className="inline-flex items-center gap-1 font-mono text-[11px] text-[#60a5fa] hover:text-blue-300 transition-colors"
          title="Compose in Gmail Web"
        >
          <span>Open in Gmail</span>
          <span>↗</span>
        </a>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="block font-mono text-[11px] text-[#9ca3af] mb-1">
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="e.g. Sarah Connor"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg border border-[#232838] bg-[#121520] px-3.5 py-2 text-xs text-white placeholder-[#4b5563] outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block font-mono text-[11px] text-[#9ca3af] mb-1">
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="sarah@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-lg border border-[#232838] bg-[#121520] px-3.5 py-2 text-xs text-white placeholder-[#4b5563] outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="block font-mono text-[11px] text-[#9ca3af] mb-1">
            Message
          </label>
          <textarea
            id="contact-message"
            required
            rows={3}
            placeholder="Tell me about your team, role, or project..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full resize-none rounded-lg border border-[#232838] bg-[#121520] px-3.5 py-2 text-xs text-white placeholder-[#4b5563] outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
          />
        </div>

        <div className="flex items-center justify-between gap-3 pt-1">
          {feedbackMessage ? (
            <p
              className={`text-xs font-mono ${
                status === "success" ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {feedbackMessage}
            </p>
          ) : (
            <span className="text-[11px] font-mono text-[#6b7280]">Replies within 24 hours</span>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center gap-2 rounded-lg border border-blue-500/50 bg-blue-600/90 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:bg-blue-500 hover:shadow-[0_0_16px_rgba(59,130,246,0.4)] disabled:opacity-50 cursor-pointer shrink-0"
          >
            {status === "submitting" ? (
              <>
                <span className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
                <span>Sending...</span>
              </>
            ) : status === "success" ? (
              <span>Sent! ✓</span>
            ) : (
              <>
                <span>Send Message</span>
                <span>→</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
