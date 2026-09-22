"use client";

import { useEffect, useRef } from "react";
import { Rocket, AppWindow, Wrench, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    id: "service-landing-page",
    icon: Rocket,
    iconColor: "text-cyan-400",
    glowColor: "rgba(6, 182, 212, 0.15)",
    borderColor: "rgba(6, 182, 212, 0.25)",
    badge: "Most Popular",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
    title: "Landing Page High-Converting",
    description:
      "Landing page yang dirancang untuk mengkonversi pengunjung menjadi pelanggan. Dioptimalkan untuk kecepatan, SEO, dan konversi maksimal.",
    features: [
      "Desain custom & responsif",
      "Optimasi SEO on-page",
      "Loading < 2 detik (Core Web Vitals)",
      "Integrasi form & analytics",
      "A/B testing ready",
    ],
    cta: "Mulai Proyek",
  },
  {
    id: "service-web-app",
    icon: AppWindow,
    iconColor: "text-indigo-400",
    glowColor: "rgba(99, 102, 241, 0.15)",
    borderColor: "rgba(99, 102, 241, 0.25)",
    badge: "AI-Powered",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",
    title: "Interactive Web App",
    description:
      "Aplikasi web full-stack modern dengan fitur real-time, autentikasi, dan integrasi AI. Skalabel dan mudah dikelola.",
    features: [
      "Next.js App Router",
      "Database Supabase / Firebase",
      "AI Integration (OpenAI, Gemini)",
      "Real-time updates",
      "Dashboard admin",
    ],
    cta: "Diskusikan Kebutuhan",
  },
  {
    id: "service-code-modernization",
    icon: Wrench,
    iconColor: "text-violet-400",
    glowColor: "rgba(139, 92, 246, 0.15)",
    borderColor: "rgba(139, 92, 246, 0.25)",
    badge: "Quick Fix",
    badgeColor: "bg-violet-500/20 text-violet-300 border border-violet-500/30",
    title: "Code Modernization & Bug Fixing",
    description:
      "Refaktor kode lama, fix bug kritis, migrasi ke teknologi terbaru, dan optimasi performa aplikasi yang sudah ada.",
    features: [
      "Audit kode & laporan detail",
      "Migrasi framework",
      "Fix bug kritis",
      "Peningkatan performa",
      "Code review & best practices",
    ],
    cta: "Audit Kode Saya",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;
  return (
    <div
      className="glass-card rounded-2xl p-7 group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
      style={{
        border: `1px solid ${service.borderColor}`,
        animationDelay: `${index * 0.15}s`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: `radial-gradient(circle at top left, ${service.glowColor} 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10">
        {/* Badge */}
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${service.badgeColor}`}
        >
          {service.badge}
        </span>

        {/* Icon */}
        <div className="mb-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
            style={{ background: service.glowColor }}
          >
            <Icon className={`w-7 h-7 ${service.iconColor}`} />
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feat) => (
            <li key={feat} className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              {feat}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          id={service.id}
          className={`group/btn flex items-center gap-2 text-sm font-semibold ${service.iconColor} hover:gap-3 transition-all duration-200`}
        >
          {service.cta}
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
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

  return (
    <section id="services" className="py-24 relative" ref={sectionRef}>
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.05) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-widest uppercase border border-cyan-500/20 mb-4">
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Layanan yang Saya{" "}
            <span className="gradient-text">Tawarkan</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Solusi web end-to-end yang dirancang untuk pertumbuhan bisnis Anda,
            dari desain hingga deployment.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 section-reveal">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
