"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";

const titles = [
  "Full-Stack Web Developer",
  "AI Integration Specialist",
  "Next.js Expert",
  "UI/UX Enthusiast",
];

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter effect
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentTitle.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((i) => (i + 1) % titles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }[] = [];

    const colors = ["#06b6d4", "#6366f1", "#8b5cf6", "#22d3ee"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.6 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg"
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Glow Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Announcement & Status Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-cyan-300 tracking-widest uppercase">
              Available for Projects
            </span>
          </div>

          <a
            href="https://warkop-modern-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group/pill inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 hover:text-white transition-all duration-300 text-xs font-bold"
          >
            <span>☕ Proyek Baru: Warkop Sentosa Live</span>
            <span className="group-hover/pill:translate-x-0.5 transition-transform duration-200">→</span>
          </a>
        </div>

        {/* Typewriter Role */}
        <div className="h-8 mb-4 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
          <p className="text-cyan-400 font-mono text-base sm:text-lg font-medium">
            &lt;{" "}
            <span className="text-white">{displayText}</span>
            <span className="animate-blink text-cyan-400">|</span>
            {" "}
            /&gt;
          </p>
        </div>

        {/* Main Headline */}
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          Membangun Web &amp;{" "}
          <br />
          <span className="gradient-text">Aplikasi Cepat</span>
          <br />
          untuk Mengembangkan
          <br />
          <span className="text-slate-300">Bisnis Anda</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fadeInUp"
          style={{ animationDelay: "0.3s" }}
        >
          Saya membuat landing page yang mengkonversi, web app yang intuitif,
          dan mengintegrasikan AI untuk memaksimalkan pertumbuhan bisnis Anda.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            id="hero-portfolio-btn"
            className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-base hover:from-cyan-400 hover:to-indigo-500 transition-all duration-300 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-1"
          >
            Lihat Karya &amp; Live Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            id="hero-contact-btn"
            className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-2xl glass neon-border text-white font-bold text-base hover:border-cyan-400/60 hover:-translate-y-1 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 text-cyan-400" />
            Mulai Diskusi Proyek
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-16 animate-fadeInUp"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { value: "50+", label: "Projects Selesai" },
            { value: "3+", label: "Tahun Pengalaman" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-3xl font-black gradient-text mb-1 group-hover:scale-110 transition-transform duration-200">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors duration-200 group"
        aria-label="Scroll to services"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
