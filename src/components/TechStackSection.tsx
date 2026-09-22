"use client";

import { useEffect, useRef } from "react";
import { Cpu, GitBranch, Database, Globe, Layers, Zap } from "lucide-react";

const techStack = [
  {
    category: "Frontend",
    icon: Layers,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    items: [
      { name: "React", level: 95, emoji: "⚛️" },
      { name: "Next.js", level: 92, emoji: "▲" },
      { name: "TypeScript", level: 88, emoji: "🔷" },
      { name: "Tailwind CSS", level: 96, emoji: "💨" },
    ],
  },
  {
    category: "Backend & Database",
    icon: Database,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    items: [
      { name: "Node.js", level: 85, emoji: "🟢" },
      { name: "Supabase", level: 88, emoji: "⚡" },
      { name: "PostgreSQL", level: 80, emoji: "🐘" },
      { name: "Prisma ORM", level: 82, emoji: "△" },
    ],
  },
  {
    category: "AI & Tools",
    icon: Cpu,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    items: [
      { name: "Google Antigravity", level: 90, emoji: "🤖" },
      { name: "OpenAI API", level: 85, emoji: "🧠" },
      { name: "Gemini API", level: 87, emoji: "♊" },
      { name: "LangChain", level: 75, emoji: "🦜" },
    ],
  },
];

const tools = [
  { name: "Git", icon: GitBranch, color: "text-orange-400", bg: "bg-orange-500/10" },
  { name: "Vercel", icon: Globe, color: "text-white", bg: "bg-slate-700/50" },
  { name: "VS Code", icon: Zap, color: "text-blue-400", bg: "bg-blue-500/10" },
  { name: "Figma", icon: Layers, color: "text-pink-400", bg: "bg-pink-500/10" },
];

const workflow = [
  { step: "01", title: "Discovery", desc: "Analisis kebutuhan & riset kompetitor untuk strategi terbaik.", color: "from-cyan-500 to-cyan-700" },
  { step: "02", title: "Design", desc: "Wireframe, prototipe UI/UX yang berorientasi konversi.", color: "from-indigo-500 to-indigo-700" },
  { step: "03", title: "Development", desc: "Coding dengan standar tinggi, clean code & best practices.", color: "from-violet-500 to-violet-700" },
  { step: "04", title: "Deploy", desc: "Testing menyeluruh, optimasi, dan go-live yang mulus.", color: "from-emerald-500 to-emerald-700" },
];

export default function TechStackSection() {
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
    <section id="tech" className="py-24 relative" ref={sectionRef}>
      <div
        className="absolute inset-0 pointer-events-none grid-bg opacity-30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(139,92,246,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 section-reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-xs font-semibold tracking-widest uppercase border border-violet-500/20 mb-4">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Teknologi &{" "}
            <span className="gradient-text">Workflow</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Kombinasi teknologi modern yang saya gunakan untuk membangun produk
            digital yang handal dan skalabel.
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 section-reveal">
          {techStack.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <div
                key={cat.category}
                className={`glass-card rounded-2xl p-6 border ${cat.border} hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl ${cat.bg} flex items-center justify-center`}
                  >
                    <CatIcon className={`w-5 h-5 ${cat.color}`} />
                  </div>
                  <h3 className={`font-bold text-base ${cat.color}`}>
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-slate-300 font-medium flex items-center gap-2">
                          <span>{item.emoji}</span>
                          {item.name}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">
                          {item.level}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${
                            cat.color === "text-cyan-400"
                              ? "from-cyan-500 to-cyan-300"
                              : cat.color === "text-indigo-400"
                              ? "from-indigo-500 to-indigo-300"
                              : "from-violet-500 to-violet-300"
                          } transition-all duration-1000`}
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools Row */}
        <div className="mb-16 section-reveal">
          <h3 className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-6">
            Tools & Platform
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => {
              const TIcon = tool.icon;
              return (
                <div
                  key={tool.name}
                  id={`tech-${tool.name.toLowerCase().replace(/\s/g, "-")}`}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl ${tool.bg} border border-white/5 neon-border group hover:-translate-y-1 transition-all duration-300`}
                >
                  <TIcon className={`w-4 h-4 ${tool.color}`} />
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Workflow */}
        <div className="section-reveal">
          <h3 className="text-center text-xl font-bold text-white mb-8">
            My <span className="gradient-text">Workflow</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {workflow.map((step, idx) => (
              <div
                key={step.step}
                className="relative glass-card rounded-2xl p-5 text-center neon-border group hover:-translate-y-1 transition-all duration-300"
              >
                {/* Connector line */}
                {idx < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-cyan-500 to-transparent z-10" />
                )}
                <div
                  className={`text-2xl font-black gradient-text mb-3`}
                  style={{ fontFeatureSettings: '"tnum"' }}
                >
                  {step.step}
                </div>
                <h4 className="font-bold text-white text-sm mb-2">
                  {step.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
