"use client";

import { useEffect, useRef } from "react";
import { Star, Quote, CheckCircle2, Coffee, LayoutDashboard, Sparkles } from "lucide-react";

const testimonials = [
  {
    id: "testi-warkop",
    name: "Mas Rian",
    role: "Owner & Pengelola",
    company: "Warkop Sentosa Senopati",
    project: "Warkop Modern App (Live on Vercel)",
    projectIcon: Coffee,
    projectIconColor: "text-amber-400",
    rating: 5,
    text: "Traffic anak muda yang datang buat nugas dan mabar naik signifikan sejak website kami rilis. Pengunjung senang karena sebelum datang bisa cek menu lengkap, kecepatan WiFi 150 Mbps, dan pesan via WhatsApp tanpa ribet.",
    impactMetric: "+40% Kunjungan Pelanggan Baru",
    metricBg: "bg-amber-500/10 text-amber-300 border-amber-500/25",
    accentGlow: "from-amber-500/10 to-transparent",
    borderGlow: "group-hover:border-amber-500/40",
    avatarBg: "from-amber-500 to-orange-600",
    initials: "MR",
  },
  {
    id: "testi-dashboard",
    name: "Dimas Hendrawan",
    role: "Head of Sales & Retail Ops",
    company: "PT Distribusi Niaga Jaya",
    project: "Dashboard Admin Penjualan Interaktif",
    projectIcon: LayoutDashboard,
    projectIconColor: "text-indigo-400",
    rating: 5,
    text: "Dasbor admin penjualannya sangat responsif dan mudah dipahami oleh tim kasir dan manajer. Pemantauan omset real-time dan status order berjalan mulus di tablet maupun laptop tanpa lag.",
    impactMetric: "Waktu Rekap Terpangkas 65%",
    metricBg: "bg-indigo-500/10 text-indigo-300 border-indigo-500/25",
    accentGlow: "from-indigo-500/10 to-transparent",
    borderGlow: "group-hover:border-indigo-500/40",
    avatarBg: "from-indigo-500 to-violet-600",
    initials: "DH",
  },
  {
    id: "testi-partner",
    name: "Sarah L.",
    role: "Product Lead & Partner",
    company: "Creative Digital Syndicate",
    project: "Kolaborasi Next.js & AI Web App",
    projectIcon: Sparkles,
    projectIconColor: "text-cyan-400",
    rating: 5,
    text: "Kualitas arsitektur kodenya luar biasa bersih, modular, dan mematuhi best practices Core Web Vitals. Komunikasinya sangat proaktif dan entrega tepat waktu. Pilihan utama untuk kolaborasi produk web!",
    impactMetric: "100% Score Best Practices",
    metricBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/25",
    accentGlow: "from-cyan-500/10 to-transparent",
    borderGlow: "group-hover:border-cyan-500/40",
    avatarBg: "from-cyan-500 to-blue-600",
    initials: "SL",
  },
];

export default function TestimonialsSection() {
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
      el.querySelectorAll(".section-reveal").forEach((item) => observer.observe(item));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background glow accents */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] opacity-15 blur-[120px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, #6366f1 50%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 section-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass neon-border mb-4">
            <Quote className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-semibold text-cyan-300 tracking-widest uppercase">
              Social Proof &amp; Testimoni
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Dipercaya Pemilik Bisnis &amp;{" "}
            <span className="gradient-text">Partner Produk</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Kemitraan berorientasi hasil nyata: dari landing page komersial F&amp;B yang ramai pengunjung hingga aplikasi dashboard operasional yang cepat dan andal.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 section-reveal">
          {testimonials.map((testi) => {
            const ProjectIcon = testi.projectIcon;
            return (
              <div
                key={testi.id}
                className={`glass-card rounded-2xl p-7 border border-slate-700/60 ${testi.borderGlow} transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden`}
              >
                {/* Subtle top gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testi.accentGlow}`}
                />

                <div>
                  {/* Rating Stars & Verified Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: testi.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" />
                      Terverifikasi
                    </span>
                  </div>

                  {/* Impact Metric Badge */}
                  <div className="mb-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-lg text-xs font-bold border ${testi.metricBg}`}
                    >
                      ⚡ {testi.impactMetric}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{testi.text}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${testi.avatarBg} flex items-center justify-center text-white font-bold text-xs shadow-md shrink-0`}
                    >
                      {testi.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {testi.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {testi.role}
                      </p>
                      <p className="text-[10px] text-cyan-400/90 font-medium">
                        {testi.company}
                      </p>
                    </div>
                  </div>

                  <div
                    className="w-7 h-7 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-center justify-center shrink-0"
                    title={testi.project}
                  >
                    <ProjectIcon className={`w-3.5 h-3.5 ${testi.projectIconColor}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
