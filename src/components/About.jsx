import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  const { personal, pillars } = portfolioData;

  const pillarIcons = [
    <ShieldCheck className="w-5 h-5 text-gold-500" />,
    <Sparkles className="w-5 h-5 text-gold-500" />,
    <Zap className="w-5 h-5 text-gold-500" />,
    <CheckCircle2 className="w-5 h-5 text-gold-500" />
  ];

  return (
    <section id="about" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-plum-900/10 dark:border-white/10 mb-12 sm:mb-16">
        <div>
          <div className="font-mono text-xs font-bold tracking-widest text-gold-600 dark:text-gold-400 uppercase mb-2">
            01 / BIOGRAPHY & RESEARCH INCLINATION
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-plum-950 dark:text-white tracking-tight">
            ABOUT MELIZA
          </h2>
        </div>
        <div className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
          [01 / 07] • CSE SCHOLAR • SE4AI
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Portrait Frame */}
        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-plum-900/15 dark:border-gold-500/30 shadow-lg bg-plum-900">
              <img
                src="Images/about.jpeg"
                alt="Meliza Mariya Byiju"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src = "Images/hero.jpeg";
                }}
              />
            </div>

            {/* Quick Credentials Card */}
            <div className="mt-4 p-4 rounded-xl border border-plum-900/10 dark:border-white/10 bg-white/70 dark:bg-plum-900/40 text-xs font-mono">
              <div className="flex justify-between py-1.5 border-b border-plum-900/10 dark:border-white/5">
                <span className="text-slate-500 dark:text-slate-400">INSTITUTION</span>
                <span className="font-bold text-plum-900 dark:text-ice-100">Amal Jyothi College</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-plum-900/10 dark:border-white/5">
                <span className="text-slate-500 dark:text-slate-400">ACADEMIC STANDING</span>
                <span className="font-bold text-gold-600 dark:text-gold-400">10.0 CGPA • Rank 1</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500 dark:text-slate-400">RESEARCH LAB</span>
                <span className="font-bold text-plum-900 dark:text-ice-100">SE4AI, NIT Calicut</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & 4 Engineering Pillars */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="font-sans text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
            <p>
              I am <strong className="text-plum-950 dark:text-white font-bold">Meliza Mariya Byiju</strong>, a Computer Science Engineering scholar at <strong className="text-plum-900 dark:text-gold-400 font-semibold">Amal Jyothi College of Engineering</strong> with an unblemished academic track record, maintaining a perfect <strong className="text-gold-600 dark:text-gold-400 font-bold">10.0 CGPA</strong> and ranking first across the entire department.
            </p>
            <p>
              My research operates at the nexus of <strong className="text-plum-950 dark:text-white font-semibold">Software Engineering for Artificial Intelligence (SE4AI)</strong> and empirical machine learning. As a Research Scholar at <strong className="text-plum-900 dark:text-white font-semibold">NIT Calicut</strong> under Dr. Pournami P. N., I curated and classified a benchmark taxonomy dataset of over <strong className="text-gold-600 dark:text-gold-400 font-bold">2,500 software requirements</strong> across 15+ machine learning systems spanning five sustainability dimensions.
            </p>
            <p>
              Simultaneously, as co-founder of <strong className="text-plum-950 dark:text-white font-semibold">KAYORA</strong>, I engineer automated computer vision algorithms for aquatic biomass recovery, selected for Stage 2 of Kerala Agricultural University’s <strong className="text-gold-600 dark:text-gold-400 font-semibold">RAISE 2026 Student Startup Programme</strong> with potential grant funding of ₹5 Lakh.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="mt-6 pt-6 border-t border-plum-900/10 dark:border-white/10">
            <h3 className="font-display font-bold text-lg text-plum-950 dark:text-white mb-4">
              Core Engineering Pillars
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.num}
                  className="p-4 rounded-xl border border-plum-900/10 dark:border-white/10 bg-white/60 dark:bg-plum-900/30 hover:border-gold-500 hover:shadow-subtle transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-gold-600 dark:text-gold-400 font-bold">
                      [{pillar.num}]
                    </span>
                    {pillarIcons[index]}
                  </div>
                  <h4 className="font-display font-bold text-sm text-plum-950 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
