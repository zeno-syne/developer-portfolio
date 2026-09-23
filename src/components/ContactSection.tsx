"use client";

import { useEffect, useRef, useState } from "react";
import {
  Send,
  MessageCircle,
  Mail,
  MapPin,
  CheckCircle2,
  Loader2,
  Phone,
  Copy,
  Check,
} from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll(".section-reveal").forEach((el) =>
        observer.observe(el)
      );
    }
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((res) => setTimeout(res, 1800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Halo Agung! Saya ${formState.name || "[nama Anda]"} ingin mendiskusikan proyek web. Apakah Anda tersedia?`
  );

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("agung@devstudio.id");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+62 812-3456-7890",
      href: `https://wa.me/6281234567890?text=${whatsappMessage}`,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      badge: "Respon < 2 jam",
      id: "contact-whatsapp-link",
    },
    {
      icon: Mail,
      label: "Email",
      value: "agung@devstudio.id",
      href: "mailto:agung@devstudio.id",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      badge: "Respon 1-2 hari",
      id: "contact-email-link",
    },
    {
      icon: MapPin,
      label: "Lokasi",
      value: "Indonesia (Remote Worldwide)",
      href: "#",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
      badge: "GMT+8",
      id: "contact-location",
    },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={sectionRef}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(6,182,212,0.07) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 section-reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-widest uppercase border border-cyan-500/20 mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Siap Mulai{" "}
            <span className="gradient-text">Proyek Anda?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ceritakan kebutuhan Anda dan saya akan memberikan solusi terbaik
            dalam 24 jam.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-5 section-reveal">
            {/* Availability Card */}
            <div className="glass-card rounded-2xl p-6 border border-emerald-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-bold text-sm">
                  Tersedia untuk Proyek Baru
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Saat ini saya membuka slot untuk 2-3 klien baru per bulan.
                Hubungi saya sekarang untuk mendapatkan slot Anda!
              </p>
            </div>

            {/* Contact Cards */}
            {contactInfo.map((info) => {
              const CIcon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  id={info.id}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`flex items-center gap-4 p-5 glass-card rounded-2xl border ${info.border} hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${info.bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <CIcon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 mb-0.5 font-medium">
                      {info.label}
                    </p>
                    <p className="text-white font-semibold text-sm truncate group-hover:text-cyan-300 transition-colors">
                      {info.value}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {info.label === "Email" && (
                      <button
                        onClick={handleCopyEmail}
                        type="button"
                        className="px-2.5 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-[11px] font-semibold border border-cyan-500/30 flex items-center gap-1 transition-colors cursor-pointer"
                        title="Salin alamat email"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Tersalin!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Salin</span>
                          </>
                        )}
                      </button>
                    )}
                    <span
                      className={`text-[10px] font-semibold ${info.color} px-2 py-0.5 rounded-full ${info.bg} border ${info.border} whitespace-nowrap`}
                    >
                      {info.badge}
                    </span>
                  </div>
                </a>
              );
            })}

            {/* Quick WhatsApp */}
            <a
              href={`https://wa.me/6281234567890?text=${whatsappMessage}`}
              id="contact-whatsapp-quick-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-sm hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              Chat WhatsApp Sekarang
            </a>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3 section-reveal">
            <div className="glass-card rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6">
                Kirim Pesan 📩
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Pesan Terkirim! 🎉
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Terima kasih telah menghubungi saya. Saya akan membalas
                    dalam 24 jam.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl glass neon-border text-cyan-400 text-sm font-semibold hover:bg-cyan-500/10 transition-all"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  id="contact-form"
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-slate-400 mb-2"
                      >
                        Nama Lengkap *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl glass border border-slate-700/60 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-slate-400 mb-2"
                      >
                        Alamat Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl glass border border-slate-700/60 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-slate-400 mb-2"
                    >
                      Jenis Layanan
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass border border-slate-700/60 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all text-slate-300 bg-slate-900/50"
                    >
                      <option value="" className="bg-slate-900">Pilih layanan...</option>
                      <option value="landing-page" className="bg-slate-900">
                        Landing Page High-Converting
                      </option>
                      <option value="web-app" className="bg-slate-900">
                        Interactive Web App
                      </option>
                      <option value="modernization" className="bg-slate-900">
                        Code Modernization & Bug Fix
                      </option>
                      <option value="consultation" className="bg-slate-900">
                        Konsultasi / Diskusi
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-slate-400 mb-2"
                    >
                      Pesan / Deskripsi Proyek *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Ceritakan tentang proyek Anda, target audience, timeline, dan budget (opsional)..."
                      className="w-full px-4 py-3 rounded-xl glass border border-slate-700/60 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-sm hover:from-cyan-400 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Kirim Pesan
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-600">
                    Dengan mengirim form ini, Anda menyetujui untuk dihubungi
                    melalui email atau WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
