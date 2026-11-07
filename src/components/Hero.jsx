import React from 'react';
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, stats } = portfolioData;

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Background Subtle Geometric Vector Linework */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-15 flex items-center justify-center -z-10">
        <svg
          viewBox="0 0 1000 600"
          className="w-full max-w-5xl h-auto text-plum-900 dark:text-gold-400"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="500" cy="300" r="140" strokeWidth="1" strokeDasharray="3 4" />
          <circle cx="500" cy="300" r="260" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="500" cy="300" r="380" strokeWidth="0.75" strokeDasharray="6 8" strokeOpacity="0.3" />
          <line x1="0" y1="300" x2="1000" y2="300" strokeWidth="0.75" strokeDasharray="4 6" strokeOpacity="0.3" />
          <line x1="500" y1="0" x2="500" y2="600" strokeWidth="0.75" strokeDasharray="4 6" strokeOpacity="0.3" />
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
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: "Hello There!" Bounding Box, Headline & Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Interactive Design Anchor Box: "Hello There!" (from Image Reference) */}
            <div className="inline-block relative mb-4">
              <div className="relative inline-flex items-center px-4 py-1.5 border border-slate-400 dark:border-plum-600 bg-white dark:bg-plum-900/70 shadow-sm select-none">
                {/* 4 Corner Anchor Handles (Golden-Yellow Squares) */}
                <span className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 bg-gold-500 border border-slate-900 dark:border-white rounded-[1px]"></span>
                <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-gold-500 border border-slate-900 dark:border-white rounded-[1px]"></span>
                <span className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 bg-gold-500 border border-slate-900 dark:border-white rounded-[1px]"></span>
                <span className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 bg-gold-500 border border-slate-900 dark:border-white rounded-[1px]"></span>
                
                <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide text-slate-800 dark:text-slate-100">
                  Hello There!
                </span>
              </div>
            </div>

            {/* Headline: "I’m Meliza Byiju," with golden name and golden underline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-plum-950 dark:text-white leading-[1.08] mb-3">
              I’m <span className="relative inline-block text-gold-500 dark:text-gold-400 font-bold">
                Meliza Byiju,
                <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gold-500 rounded-full"></span>
              </span>
            </h1>

            {/* Sub-heading role */}
            <h2 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-plum-900 dark:text-ice-100 tracking-tight mb-4">
              AI & SE4AI Researcher • CSE Scholar
            </h2>

            {/* Academic highlights badges */}
            <div className="inline-flex flex-wrap items-center gap-2 mb-5">
              <span className="px-2.5 py-1 rounded-md bg-plum-800 text-white dark:bg-gold-500 dark:text-plum-950 font-mono text-xs font-bold uppercase tracking-wider">
                Rank 1 • 10.0 CGPA
              </span>
              <span className="px-2.5 py-1 rounded-md bg-gold-100 dark:bg-plum-900 border border-gold-300 dark:border-gold-600/30 text-plum-900 dark:text-gold-300 font-mono text-xs font-semibold">
                NIT Calicut SE4AI Scholar
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-plum-900/60 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-ice-200 font-mono text-xs font-medium">
                KAU RAISE 2026 Stage 2
              </span>
            </div>

            <p className="font-sans text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6 max-w-xl">
              Computer Science scholar at Amal Jyothi with a perfect 10.0 CGPA and SE4AI Research Scholar at <strong className="text-plum-900 dark:text-gold-400 font-semibold">NIT Calicut</strong>. I build autonomous computer vision algorithms, benchmark machine learning requirements, and create verified sustainability tech.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap gap-3 items-center pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-plum-800 hover:bg-plum-900 text-white dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-plum-950 font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-gold-glow hover:-translate-y-0.5"
              >
                <span>Explore Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-plum-900/20 dark:border-gold-500/30 bg-white/80 dark:bg-plum-900/40 text-plum-900 dark:text-ice-100 font-mono text-xs font-semibold tracking-wider hover:border-gold-500 hover:bg-gold-50/50 dark:hover:bg-plum-900/80 transition-all hover:-translate-y-0.5"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-plum-900/10 dark:border-white/10">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
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
                <LinkedinIcon className="w-4 h-4" />
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

          {/* Right Column: Inspired directly by reference image with golden-yellow organic blob backdrop, arc accent line, and clean portrait (zero attached badges/stickers) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md flex items-center justify-center py-4">
              
              {/* Golden-Yellow Organic Fluid Backdrop (Matching Reference Image) */}
              <div 
                className="absolute w-[300px] h-[360px] sm:w-[350px] sm:h-[420px] bg-gold-500 rounded-[55%_45%_52%_48%/48%_54%_46%_52%] -z-10 transform -rotate-3 transition-transform duration-700 hover:rotate-0 shadow-xl shadow-gold-500/25"
                style={{
                  clipPath: 'none'
                }}
              />

              {/* Minimal Curved Accent Arc Line (Matching Reference Image Arc) */}
              <svg
                className="absolute -left-2 sm:-left-6 top-1/4 w-8 sm:w-10 h-24 text-slate-800 dark:text-slate-200 pointer-events-none -z-5"
                viewBox="0 0 40 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M 32 10 Q 8 50 32 90" />
              </svg>

              {/* Clean Framed Portrait: Overlapping the golden backdrop, zero attached badges/stickers */}
              <div className="relative w-[270px] sm:w-[320px] aspect-[3/4] rounded-[36px] overflow-hidden border-4 border-white dark:border-plum-950 shadow-2xl bg-plum-900 group">
                <img
                  src="Images/hero.jpeg"
                  alt="Meliza Mariya Byiju"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "Images/about.jpeg";
                  }}
                />
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
