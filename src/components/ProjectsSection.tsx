"use client";

import { useEffect, useRef } from "react";
import {
  ExternalLink,
  Star,
  Coffee,
  ShoppingCart,
  BarChart3,
  Wifi,
} from "lucide-react";

// Inline SVG — Github was removed from lucide-react
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);


const projects = [
  {
    id: "project-warkop-modern",
    featured: true,
    status: "Live",
    statusColor: "bg-emerald-500",
    category: "Single-Page Application",
    title: "Sistem Reservasi & Menu Digital Warkop Modern",
    problem:
      "Kasir kedai kopi sering kewalahan mencatat reservasi meja secara manual via WhatsApp, dan pelanggan kesulitan melihat menu terbaru karena foto menu di Instagram sering tertumpuk.",
    solution:
      "Membangun Single-Page Application (SPA) dengan Next.js yang memiliki katalog menu interaktif dengan filter kategori instan, serta formulir reservasi meja real-time yang langsung memberikan notifikasi konfirmasi ke pelanggan.",
    result:
      "Aplikasi selesai dikembangkan dan live dalam waktu kurang dari 48 jam. Pelanggan kini bisa melihat menu dan booking meja langsung dari smartphone tanpa harus antre chat, membuat operasional warkop menjadi jauh lebih efisien.",
    highlights: [
      { icon: ShoppingCart, text: "Katalog menu interaktif + filter kategori" },
      { icon: BarChart3, text: "Reservasi meja real-time" },
      { icon: Wifi, text: "Live dalam < 48 jam" },
    ],
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    techColors: {
      "Next.js": "bg-white/10 text-white",
      "Tailwind CSS": "bg-cyan-500/15 text-cyan-300",
      Vercel: "bg-slate-500/15 text-slate-300",
    },
    demoUrl: "#",
    codeUrl: "#",
    gradient: "from-cyan-500/20 via-indigo-500/10 to-violet-500/20",
    accentColor: "text-cyan-400",
    borderColor: "rgba(6, 182, 212, 0.2)",
  },
];

const otherProjects = [
  {
    id: "project-ai-content",
    title: "AI Content Generator",
    description: "Tool berbasis Gemini API untuk generate konten marketing otomatis.",
    tech: ["Next.js", "Gemini API", "Tailwind"],
    stars: 48,
    codeUrl: "#",
  },
  {
    id: "project-saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description: "Dashboard analitik untuk platform SaaS dengan visualisasi data interaktif.",
    tech: ["React", "Recharts", "Supabase"],
    stars: 32,
    codeUrl: "#",
  },
  {
    id: "project-ecommerce",
    title: "E-Commerce Minimalist",
    description: "Toko online modern dengan cart, checkout, dan payment gateway.",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    stars: 61,
    codeUrl: "#",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="projects" className="py-24 relative" ref={sectionRef}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(99,102,241,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 section-reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold tracking-widest uppercase border border-indigo-500/20 mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Proyek{" "}
            <span className="gradient-text">Unggulan</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Beberapa karya terbaik yang pernah saya bangun untuk klien dan
            project pribadi.
          </p>
        </div>

        {/* Featured Project Card */}
        {projects.map((project) => (
          <div
            key={project.id}
            id={project.id}
            className="relative rounded-3xl overflow-hidden mb-12 section-reveal group"
            style={{ border: `1px solid ${project.borderColor}` }}
          >
            {/* Background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}
            />
            <div className="absolute inset-0 glass-card" />

            {/* Animated top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />

            <div className="relative z-10 p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Left: Content */}
                <div>
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-semibold border border-emerald-500/25">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {project.status}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-xs font-semibold border border-amber-500/25">
                      ⭐ Featured
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-400 text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white mb-5 flex items-start gap-3">
                    <Coffee className="w-7 h-7 text-amber-400 flex-shrink-0 mt-1" />
                    {project.title}
                  </h3>

                  {/* Problem / Solution / Result blocks */}
                  <div className="space-y-3 mb-6">
                    {project.problem && (
                      <div className="rounded-xl p-4 bg-red-500/8 border border-red-500/20">
                        <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1.5">🔴 Masalah</p>
                        <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
                      </div>
                    )}
                    {project.solution && (
                      <div className="rounded-xl p-4 bg-cyan-500/8 border border-cyan-500/20">
                        <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-1.5">💡 Solusi</p>
                        <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
                      </div>
                    )}
                    {project.result && (
                      <div className="rounded-xl p-4 bg-emerald-500/8 border border-emerald-500/20">
                        <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1.5">✅ Hasil</p>
                        <p className="text-slate-300 text-sm leading-relaxed">{project.result}</p>
                      </div>
                    )}
                    {/* Fallback for projects without structured content */}
                    {!project.problem && project.description && (
                      <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 mb-8">
                    {project.highlights.map((h) => {
                      const HIcon = h.icon;
                      return (
                        <div
                          key={h.text}
                          className="flex items-center gap-3 text-sm text-slate-300"
                        >
                          <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center flex-shrink-0">
                            <HIcon className="w-4 h-4 text-cyan-400" />
                          </div>
                          {h.text}
                        </div>
                      );
                    })}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                          project.techColors[t as keyof typeof project.techColors] ||
                          "bg-slate-700/50 text-slate-300"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.demoUrl}
                      id={`${project.id}-demo-btn`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-sm font-bold hover:from-cyan-400 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      id={`${project.id}-code-btn`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl glass neon-border text-white text-sm font-bold hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <GithubIcon className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>

                {/* Right: App Mockup */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden glass-card border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 group-hover:shadow-cyan-500/20 transition-shadow duration-500">
                    {/* Browser Chrome */}
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-700/50">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                      <div className="flex-1 mx-4 h-6 rounded-md bg-slate-700/50 flex items-center px-3">
                        <span className="text-[10px] text-slate-500 font-mono">
                          warkop-modern.vercel.app
                        </span>
                      </div>
                    </div>

                    {/* App Preview */}
                    <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 min-h-[280px]">
                      {/* Nav */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <Coffee className="w-5 h-5 text-amber-400" />
                          <span className="font-bold text-white text-sm">Warkop Modern</span>
                        </div>
                        <div className="flex gap-2">
                          <div className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-medium">Menu</div>
                          <div className="px-3 py-1 rounded-lg bg-slate-700 text-slate-400 text-xs">Order</div>
                        </div>
                      </div>

                      {/* Menu Cards */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {[
                          { name: "Kopi Susu", price: "Rp 15.000", emoji: "☕", color: "from-amber-900/40 to-amber-800/20" },
                          { name: "Matcha Latte", price: "Rp 22.000", emoji: "🍵", color: "from-emerald-900/40 to-emerald-800/20" },
                          { name: "Americano", price: "Rp 18.000", emoji: "🖤", color: "from-slate-700/60 to-slate-600/30" },
                          { name: "Caramel Frap", price: "Rp 28.000", emoji: "🥤", color: "from-orange-900/40 to-orange-800/20" },
                        ].map((item) => (
                          <div
                            key={item.name}
                            className={`bg-gradient-to-br ${item.color} border border-white/5 rounded-xl p-3 cursor-pointer hover:border-amber-500/30 transition-colors`}
                          >
                            <span className="text-2xl block mb-1">{item.emoji}</span>
                            <p className="text-white text-xs font-semibold">{item.name}</p>
                            <p className="text-amber-300 text-xs font-bold">{item.price}</p>
                          </div>
                        ))}
                      </div>

                      {/* Order Summary Bar */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-amber-600/80 to-orange-600/80">
                        <div className="text-xs text-white">
                          <span className="font-bold">3 item</span> · Total{" "}
                          <span className="font-black">Rp 55.000</span>
                        </div>
                        <button className="px-3 py-1.5 rounded-lg bg-white text-amber-700 text-xs font-black">
                          Pesan Sekarang →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-bold shadow-lg shadow-cyan-500/30 animate-pulse-glow">
                    ⚡ Deployed on Vercel
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Projects Grid */}
        <div className="section-reveal">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <GithubIcon className="w-5 h-5 text-slate-400" />
            Proyek Lainnya
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {otherProjects.map((proj) => (
              <div
                key={proj.id}
                id={proj.id}
                className="glass-card rounded-2xl p-6 neon-border group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h4>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    {proj.stars}
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-700/60 text-slate-300 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.codeUrl}
                  id={`${proj.id}-code-btn`}
                  className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium"
                >
                  <GithubIcon className="w-4 h-4" />
                  View Code
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
