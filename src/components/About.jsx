import React from 'react';

export default function About() {

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
                src={`${(import.meta.env.BASE_URL || '/').endsWith('/') ? (import.meta.env.BASE_URL || '/') : `${import.meta.env.BASE_URL}/`}Images/about.jpeg`}
                alt="Meliza Mariya Byiju"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const base = (import.meta.env.BASE_URL || '/').endsWith('/') ? (import.meta.env.BASE_URL || '/') : `${import.meta.env.BASE_URL}/`;
                  e.currentTarget.src = `${base}Images/hero.jpeg`;
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
        </div>
      </div>
    </section>
  );
}
