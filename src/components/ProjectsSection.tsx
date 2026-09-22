"use client";

import { useEffect, useRef } from "react";
import {
  ExternalLink,
  Star,
  Coffee,
  ShoppingCart,
  BarChart3,
  Wifi,
  LayoutDashboard,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
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
    category: "Web Application",
    title: "Warkop Modern App",
    icon: Coffee,
    iconColor: "text-amber-400",
    description:
      "Aplikasi manajemen warkop (warung kopi) modern berbasis web dengan fitur pemesanan digital, manajemen menu real-time, dashboard analitik penjualan, dan sistem loyalty pelanggan. Dibangun untuk meningkatkan efisiensi operasional dan pengalaman pelanggan.",
    highlights: [
      { icon: ShoppingCart, text: "Sistem order digital" },
      { icon: BarChart3, text: "Dashboard analitik real-time" },
      { icon: Wifi, text: "Mode offline-first PWA" },
    ],
    tech: ["Next.js", "Tailwind CSS", "Supabase", "Vercel", "TypeScript"],
    techColors: {
      "Next.js": "bg-white/10 text-white",
      "Tailwind CSS": "bg-cyan-500/15 text-cyan-300",
      Supabase: "bg-emerald-500/15 text-emerald-300",
      Vercel: "bg-slate-500/15 text-slate-300",
      TypeScript: "bg-blue-500/15 text-blue-300",
    },
    demoUrl: "#",
    codeUrl: "#",
    gradient: "from-cyan-500/20 via-indigo-500/10 to-violet-500/20",
    accentColor: "text-cyan-400",
    highlightIconBg: "bg-cyan-500/15",
    highlightIconColor: "text-cyan-400",
    borderColor: "rgba(6, 182, 212, 0.2)",
    topBorderGlow: "via-cyan-400",
    domain: "warkop-modern.vercel.app",
    mockupBorder: "border-cyan-500/20",
    mockupShadow: "shadow-cyan-500/10 group-hover:shadow-cyan-500/20",
    buttonGradient: "from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500",
    buttonShadow: "shadow-cyan-500/25",
    floatingBadgeBg: "bg-gradient-to-r from-cyan-500 to-indigo-600",
    floatingBadgeShadow: "shadow-cyan-500/30",
    mockupType: "warkop" as const,
  },
  {
    id: "project-dashboard-admin",
    featured: true,
    status: "Live",
    statusColor: "bg-emerald-500",
    category: "Web Application",
    title: "Dashboard Admin Penjualan Interaktif",
    icon: LayoutDashboard,
    iconColor: "text-indigo-400",
    description:
      "Membangun antarmuka Dasbor Admin responsif berbasis Next.js untuk memantau metrik penjualan real-time. Mencakup ringkasan statistik dan tabel manajemen pesanan dengan identifikasi status visual.",
    highlights: [
      { icon: BarChart3, text: "Pemantauan metrik penjualan real-time" },
      { icon: LayoutDashboard, text: "Ringkasan statistik performa bisnis responsif" },
      { icon: CheckCircle2, text: "Tabel manajemen pesanan dengan identifikasi status visual" },
    ],
    tech: ["Next.js", "Tailwind CSS", "Lucide Icons"],
    techColors: {
      "Next.js": "bg-white/10 text-white",
      "Tailwind CSS": "bg-cyan-500/15 text-cyan-300",
      "Lucide Icons": "bg-purple-500/15 text-purple-300",
    },
    demoUrl: "https://dashboard-admin-app-nine.vercel.app/",
    codeUrl: "#",
    gradient: "from-indigo-500/20 via-purple-500/10 to-pink-500/20",
    accentColor: "text-indigo-400",
    highlightIconBg: "bg-indigo-500/15",
    highlightIconColor: "text-indigo-400",
    borderColor: "rgba(99, 102, 241, 0.25)",
    topBorderGlow: "via-indigo-400",
    domain: "dashboard-admin-app-nine.vercel.app",
    mockupBorder: "border-indigo-500/25",
    mockupShadow: "shadow-indigo-500/15 group-hover:shadow-indigo-500/25",
    buttonGradient: "from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500",
    buttonShadow: "shadow-indigo-500/25",
    floatingBadgeBg: "bg-gradient-to-r from-indigo-500 to-violet-600",
    floatingBadgeShadow: "shadow-indigo-500/30",
    mockupType: "dashboard-admin" as const,
  },
];

function WarkopMockup() {
  return (
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
  );
}

function AdminDashboardMockup() {
  return (
    <div className="p-5 sm:p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 min-h-[300px]">
      {/* Mini Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <LayoutDashboard className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white text-xs sm:text-sm">KICKSMATE POS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-[10px] text-slate-400">Dasbor Pantauan Penjualan</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/50 text-[10px] text-slate-400 font-mono">
            <span>Live Kasir</span>
          </div>
          <div className="px-2.5 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-[10px] font-semibold">
            Sync 98%
          </div>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-4">
        <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] text-slate-400">Total Omset</span>
            <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded flex items-center gap-0.5">
              <TrendingUp className="w-2.5 h-2.5" /> +16.8%
            </span>
          </div>
          <p className="text-white font-black text-xs sm:text-sm">Rp 148,6 Jt</p>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] text-slate-400">Pesanan</span>
            <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded flex items-center gap-0.5">
              <TrendingUp className="w-2.5 h-2.5" /> +9.4%
            </span>
          </div>
          <p className="text-white font-black text-xs sm:text-sm">382 Order</p>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] text-slate-400">Stok Kritis</span>
            <span className="text-[9px] font-bold text-rose-400 bg-rose-500/10 px-1 py-0.5 rounded flex items-center gap-0.5">
              <AlertTriangle className="w-2.5 h-2.5" /> Alert
            </span>
          </div>
          <p className="text-rose-300 font-black text-xs sm:text-sm">8 Varian</p>
        </div>
      </div>

      {/* Mini Orders Table */}
      <div className="rounded-xl bg-slate-950/70 border border-slate-800 overflow-hidden">
        <div className="px-3 py-2 bg-slate-800/50 border-b border-slate-800 flex items-center justify-between text-[11px]">
          <span className="font-semibold text-slate-300">Tabel Manajemen Pesanan</span>
          <span className="text-[10px] text-slate-400 font-mono">3 Transaksi Terbaru</span>
        </div>
        <div className="divide-y divide-slate-800/70 text-[11px]">
          <div className="px-3 py-2 flex items-center justify-between hover:bg-slate-800/30 transition-colors">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-mono text-indigo-400 font-bold text-[10px]">ORD-9821</span>
              <span className="text-slate-300 font-medium truncate text-xs">Dimas P. · NB 550</span>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <span className="text-slate-200 font-bold text-xs">Rp 1.299.000</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30">
                <span className="w-1 h-1 rounded-full bg-emerald-400" />
                Lunas
              </span>
            </div>
          </div>

          <div className="px-3 py-2 flex items-center justify-between hover:bg-slate-800/30 transition-colors">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-mono text-indigo-400 font-bold text-[10px]">ORD-9820</span>
              <span className="text-slate-300 font-medium truncate text-xs">Siti R. · Compass</span>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <span className="text-slate-200 font-bold text-xs">Rp 489.000</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30">
                <span className="w-1 h-1 rounded-full bg-emerald-400" />
                Lunas
              </span>
            </div>
          </div>

          <div className="px-3 py-2 flex items-center justify-between hover:bg-slate-800/30 transition-colors">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-mono text-indigo-400 font-bold text-[10px]">ORD-9819</span>
              <span className="text-slate-300 font-medium truncate text-xs">Reza F. · AJ 1 Low</span>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <span className="text-slate-200 font-bold text-xs">Rp 2.450.000</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300 text-[10px] font-semibold border border-blue-500/30">
                <span className="w-1 h-1 rounded-full bg-blue-400" />
                Diproses
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
        {projects.map((project) => {
          const ProjectIcon = project.icon;
          return (
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
              <div
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${project.topBorderGlow} to-transparent opacity-60`}
              />

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

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 flex items-center gap-3">
                      <ProjectIcon className={`w-8 h-8 ${project.iconColor} shrink-0`} />
                      <span>{project.title}</span>
                    </h3>

                    <p className="text-slate-300 text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3 mb-8">
                      {project.highlights.map((h) => {
                        const HIcon = h.icon;
                        return (
                          <div
                            key={h.text}
                            className="flex items-center gap-3 text-sm text-slate-300"
                          >
                            <div
                              className={`w-8 h-8 rounded-lg ${project.highlightIconBg} flex items-center justify-center flex-shrink-0`}
                            >
                              <HIcon className={`w-4 h-4 ${project.highlightIconColor}`} />
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
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${project.buttonGradient} text-white text-sm font-bold transition-all duration-300 shadow-lg ${project.buttonShadow} hover:-translate-y-0.5`}
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
                    <div
                      className={`relative rounded-2xl overflow-hidden glass-card border ${project.mockupBorder} shadow-2xl ${project.mockupShadow} transition-shadow duration-500`}
                    >
                      {/* Browser Chrome */}
                      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-700/50">
                        <div className="w-3 h-3 rounded-full bg-red-500/70" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                        <div className="flex-1 mx-4 h-6 rounded-md bg-slate-700/50 flex items-center px-3">
                          <span className="text-[10px] text-slate-400 font-mono truncate">
                            {project.domain}
                          </span>
                        </div>
                      </div>

                      {/* App Preview */}
                      {project.mockupType === "warkop" ? (
                        <WarkopMockup />
                      ) : (
                        <AdminDashboardMockup />
                      )}
                    </div>

                    {/* Floating badge */}
                    <div
                      className={`absolute -top-3 -right-3 px-3 py-1.5 rounded-full ${project.floatingBadgeBg} text-white text-xs font-bold shadow-lg ${project.floatingBadgeShadow} animate-pulse-glow`}
                    >
                      ⚡ Deployed on Vercel
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

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
