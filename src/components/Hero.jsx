import React from 'react';
import { ArrowDown, ArrowUpRight, Terminal, Sparkles, Award, BookOpen, Mail, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ openTerminal, openCommandPalette }) {
  const { personal, stats } = portfolioData;

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Background Subtle Geometric Vector Linework */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 flex items-center justify-center -z-10">
        <svg
          viewBox="0 0 1000 600"
          className="w-full max-w-5xl h-auto text-plum-900 dark:text-gold-400"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="500" cy="300" r="140" strokeWidth="1" strokeDasharray="3 4" />
          <circle cx="500" cy="300" r="240" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="500" cy="300" r="340" strokeWidth="0.75" strokeDasharray="6 8" strokeOpacity="0.3" />
          <line x1="0" y1="300" x2="1000" y2="300" strokeWidth="0.75" strokeDasharray="4 6" strokeOpacity="0.3" />
          <line x1="500" y1="0" x2="500" y2="600" strokeWidth="0.75" strokeDasharray="4 6" strokeOpacity="0.3" />
          <circle cx="500" cy="300" r="3.5" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Editorial Metadata Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-6 sm:pb-8 border-b border-plum-900/10 dark:border-white/10 text-xs font-mono">
          <div className="flex flex-col">
            <span className="text-gold-600 dark:text-gold-400 uppercase tracking-widest font-semibold text-[10px]">
              Domain Focus
            </span>
            <span className="text-plum-900 dark:text-ice-100 font-medium">
              SE4AI & Machine Learning Research
            </span>
          </div>
          <div className="flex flex-col sm:text-center">
            <span className="text-gold-600 dark:text-gold-400 uppercase tracking-widest font-semibold text-[10px]">
              Institutional Base
            </span>
            <span className="text-plum-900 dark:text-ice-100 font-medium">
              NIT Calicut • Amal Jyothi (10.0 CGPA)
            </span>
          </div>
          <div className="flex sm:justify-end items-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 dark:bg-plum-900/50 border border-gold-300/60 dark:border-gold-500/30 text-plum-900 dark:text-gold-300 font-mono text-[11px] font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              {personal.statusText}
            </span>
          </div>
        </div>

        {/* Hero Main Presentation Stage */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Typography & Engineering Pitch */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-md bg-plum-800 text-white dark:bg-gold-500 dark:text-plum-950 font-mono text-xs font-bold uppercase tracking-wider">
                Rank 1 • 10.0 CGPA
              </span>
              <span className="px-2.5 py-1 rounded-md bg-gold-100 dark:bg-plum-900 border border-gold-300 dark:border-gold-600/30 text-plum-900 dark:text-gold-300 font-mono text-xs font-semibold">
                SE4AI Researcher
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-plum-950 dark:text-white leading-[1.08] mb-5">
              Engineering <span className="text-plum-800 dark:text-gold-400 underline decoration-gold-400 decoration-wavy decoration-2">trustworthy</span> intelligence for empirical AI systems.
            </h1>

            <p className="font-sans text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6 max-w-xl">
              I am <strong className="text-plum-900 dark:text-white font-semibold">Meliza Mariya Byiju</strong>, a Computer Science scholar at Amal Jyothi with a perfect 10.0 CGPA and SE4AI Research Intern at <strong className="text-plum-900 dark:text-gold-400 font-semibold">NIT Calicut</strong>. I build autonomous computer vision algorithms, benchmark ML requirements, and create verified sustainability tech.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap gap-3 items-center pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-plum-800 hover:bg-plum-900 text-white dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-plum-950 font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-gold-glow hover:-translate-y-0.5"
              >
                <span>Explore Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={openTerminal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-plum-900/20 dark:border-gold-500/30 bg-white/80 dark:bg-plum-900/40 text-plum-900 dark:text-ice-100 font-mono text-xs font-semibold tracking-wider hover:border-gold-500 hover:bg-gold-50/50 dark:hover:bg-plum-900/80 transition-all hover:-translate-y-0.5"
              >
                <Terminal className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
                <span>Launch CLI Terminal</span>
              </button>

              <button
                onClick={openCommandPalette}
                className="inline-flex items-center gap-1.5 px-3 py-3 rounded-xl border border-plum-900/15 dark:border-white/10 text-slate-600 dark:text-slate-400 font-mono text-xs hover:text-plum-900 dark:hover:text-gold-400 transition-colors"
                title="Ctrl+K Command Menu"
              >
                <kbd className="px-1.5 py-0.5 bg-slate-100 dark:bg-plum-900 rounded border border-slate-300 dark:border-plum-800 text-[10px]">
                  ⌘K
                </kbd>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-plum-900/10 dark:border-white/10">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Refined Editorial Portrait & Floating Accolades */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative Frame Behind Portrait */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-plum-900/10 via-gold-500/20 to-transparent dark:from-plum-800/40 dark:via-gold-500/10 -z-10 transform rotate-1"></div>
              
              {/* Portrait Frame */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-plum-900/20 dark:border-gold-500/40 shadow-xl bg-plum-900">
                <img
                  src="Images/hero.jpeg"
                  alt="Meliza Mariya Byiju"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Fallback if image isn't available
                    e.currentTarget.src = "Images/about.jpeg";
                  }}
                />
                
                {/* Subtle Gradient Overlay at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950/80 via-transparent to-transparent"></div>

                {/* Overlaid Pill Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-card border border-white/20 text-xs">
                  <div className="flex items-center justify-between text-plum-950 dark:text-white font-mono font-bold">
                    <span className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-gold-500" />
                      10.0 CGPA • KTU Rank 1
                    </span>
                    <span className="text-[10px] text-gold-600 dark:text-gold-400">AMAL JYOTHI</span>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Badge: KAU RAISE 2026 */}
              <div className="hidden sm:block absolute -top-4 -right-4 px-3.5 py-2 rounded-xl bg-white dark:bg-plum-900 border border-gold-400 shadow-card text-xs font-mono">
                <span className="text-gold-600 dark:text-gold-400 font-bold">KAU RAISE 2026</span>
                <p className="text-[10px] text-slate-600 dark:text-ice-200">Stage 2 Finalist (₹5L Track)</p>
              </div>

              {/* Floating Highlight Badge: NIT Calicut */}
              <div className="hidden sm:block absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl bg-white dark:bg-plum-900 border border-plum-900/20 dark:border-white/20 shadow-card text-xs font-mono">
                <span className="text-plum-900 dark:text-gold-300 font-bold">NIT CALICUT SE4AI</span>
                <p className="text-[10px] text-slate-600 dark:text-ice-200">2,500+ Req Taxonomy</p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Academic Metrics Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-plum-900/10 dark:border-white/10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-plum-900/10 dark:border-white/10 bg-white/60 dark:bg-plum-900/30 hover:border-gold-500 transition-colors"
            >
              <div className="font-display font-bold text-2xl sm:text-3xl text-plum-950 dark:text-white flex items-baseline gap-1">
                <span>{stat.value}</span>
                {stat.highlight && <span className="text-gold-500 text-lg">✦</span>}
              </div>
              <div className="font-mono text-xs text-gold-700 dark:text-gold-400 font-semibold uppercase tracking-wider mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
