import React from 'react';
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative pt-20 sm:pt-28 pb-8 sm:pb-10 md:pb-14 lg:pb-16 overflow-hidden bg-[#FAF6F2] dark:bg-[#10030F] transition-colors duration-300">

      {/* ========================================================================
          HERO BACKGROUND COMPOSITION (WARM BLUSH, PEACH/GOLD GLOWS, CURVES & WAVES)
          ======================================================================== */}

      {/* 1. Subtle Peach and Golden Radial Glow behind Profile Photo */}
      <div
        className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 w-[420px] sm:w-[580px] lg:w-[720px] h-[420px] sm:h-[580px] lg:h-[720px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle at 55% 45%, rgba(254, 215, 170, 0.55) 0%, rgba(234, 170, 0, 0.22) 38%, rgba(243, 232, 255, 0.12) 58%, transparent 72%)',
        }}
      />

      {/* 2. Elegant Abstract Curves sweeping behind the photo (Inspired by Reference) */}
      <div className="absolute right-0 lg:right-6 top-1/2 -translate-y-1/2 w-[360px] sm:w-[480px] lg:w-[620px] h-[360px] sm:h-[480px] lg:h-[620px] pointer-events-none -z-10">
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full text-gold-500/60 dark:text-gold-400/40"
          fill="none"
        >
          {/* Outer sweeping ellipse */}
          <ellipse cx="320" cy="300" rx="265" ry="245" stroke="currentColor" strokeWidth="1.25" />
          {/* Inner sweeping curve */}
          <ellipse cx="300" cy="290" rx="205" ry="190" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" strokeOpacity="0.5" />
        </svg>
      </div>

      {/* 3. Layered Flowing Waves at the Bottom in Lavender, Plum, Burgundy, and Gold */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-20 md:h-24 lg:h-28"
          preserveAspectRatio="none"
        >
          {/* Wave 1: Soft Pale Lavender / Blush Wave (Back Layer) */}
          <path
            d="M 0,95 C 320,80 560,95 880,65 C 1120,45 1300,70 1440,55 L 1440,140 L 0,140 Z"
            fill="#F3EBF2"
            className="dark:fill-[#260A26] opacity-85"
          />

          {/* Wave 2: Deep Rich Plum Wave */}
          <path
            d="M 0,122 C 300,120 540,98 780,82 C 1020,70 1240,105 1440,95 L 1440,140 L 0,140 Z"
            fill="#461240"
            className="dark:fill-[#360833]"
          />

          {/* Wave 3: Dark Velvety Burgundy Wave */}
          <path
            d="M 0,140 L 0,132 C 320,125 600,110 900,115 C 1160,120 1330,136 1440,132 L 1440,140 Z"
            fill="#280825"
            className="dark:fill-[#1C041B]"
          />

          {/* Wave 4: Vibrant Warm Golden-Yellow Wave (Right side swoop from reference) */}
          <path
            d="M 1020,140 C 1120,105 1250,55 1440,50 L 1440,140 Z"
            fill="#EAAA00"
            className="dark:fill-[#D49900]"
          />
        </svg>
      </div>

      {/* ========================================================================
          PRESERVED HERO CONTENT, LAYOUT, TEXT, BADGES, BUTTONS & PROFILE IMAGE
          ======================================================================== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Hero Main Presentation Stage */}
        <div className="mt-2 sm:mt-4 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

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
              I'm a Computer Science undergraduate passionate about Artificial Intelligence, Machine Learning, and Software Engineering. I enjoy building intelligent systems, exploring innovative technologies, and transforming ideas into practical solutions that create meaningful real-world impact.            </p>

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
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-7 pt-5 border-t border-plum-900/15 dark:border-white/15 relative z-20">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4 flex-shrink-0" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 opacity-60 flex-shrink-0" />
              </a>
              <span className="text-slate-300 dark:text-slate-700 select-none">•</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 flex-shrink-0" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-60 flex-shrink-0" />
              </a>
              <span className="text-slate-300 dark:text-slate-700 select-none">•</span>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo Area with Soft Peach/Gold Gradient, Overlapping Circular Outlines & Radiating Plum Strokes */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative select-none">
            <div className="relative isolate w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] flex items-center justify-center pt-4 sm:pt-6 pb-2">

              {/* Three Accent Tick Marks Radiating Toward Top-Right (Matching Reference Image) */}
              <svg
                className="absolute -top-1 sm:top-1 right-12 sm:right-16 w-8 h-8 text-[#3A0F34] dark:text-gold-400/90 pointer-events-none z-20"
                viewBox="0 0 36 36"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="12" y1="17" x2="18" y2="6" />
                <line x1="16" y1="20" x2="27" y2="14" />
                <line x1="18" y1="26" x2="30" y2="24" />
              </svg>

              {/* Large Soft Peach and Golden Gradient Organic Shape Behind Portrait */}
              <div
                aria-hidden="true"
                className="profile-organic-shape absolute left-[36%] sm:left-[38%] top-[53%] -translate-x-1/2 -translate-y-1/2 w-[200px] h-[320px] sm:w-[240px] sm:h-[380px] md:w-[260px] md:h-[410px] blur-[0.5px] z-0"
              />

              {/* Thin Overlapping Golden Circular Outlines (Matching Reference) */}
              <svg
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[410px] md:w-[455px] h-[340px] sm:h-[410px] md:h-[455px] pointer-events-none z-0 text-gold-600/55 dark:text-gold-400/45"
                viewBox="0 0 500 500"
                fill="none"
              >
                {/* Primary thin golden circular curve sweeping around left side */}
                <ellipse cx="210" cy="224" rx="186" ry="178" stroke="currentColor" strokeWidth="1.1" />
                {/* Secondary overlapping thin circular outline sweeping rightward */}
                <ellipse cx="300" cy="300" rx="180" ry="172" stroke="currentColor" strokeWidth="0.85" strokeOpacity="0.62" />
              </svg>

              {/* Transparent Person Cutout with Natural Shadows & Smooth Image-Edge Blending */}
              <div className="relative z-10 w-full flex justify-center [mask-image:linear-gradient(to_bottom,black_0%,black_84%,rgba(0,0,0,0.82)_91%,transparent_100%)]">
                <img
                  src={`${(import.meta.env.BASE_URL || '/').endsWith('/') ? (import.meta.env.BASE_URL || '/') : `${import.meta.env.BASE_URL}/`}Images/hero_cutout.png`}
                  alt="Meliza Mariya Byiju"
                  className="profile-portrait-image w-[280px] sm:w-[340px] md:w-[380px] h-auto object-contain pointer-events-none transition-transform duration-700 hover:scale-[1.015] filter drop-shadow-[0_16px_28px_rgba(58,15,52,0.16)] dark:drop-shadow-[0_16px_28px_rgba(0,0,0,0.42)]"
                  onError={(e) => {
                    const base = (import.meta.env.BASE_URL || '/').endsWith('/') ? (import.meta.env.BASE_URL || '/') : `${import.meta.env.BASE_URL}/`;
                    e.currentTarget.src = `${base}Images/hero.jpeg`;
                    e.currentTarget.className = "w-[260px] sm:w-[300px] aspect-[4/5] object-cover object-top rounded-3xl shadow-xl";
                  }}
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
