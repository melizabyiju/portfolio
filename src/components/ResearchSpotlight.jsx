import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { BookOpen, Layers, Sparkles, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';

export default function ResearchSpotlight() {
  const { featured, fellowship } = portfolioData.research;
  const [selectedDimension, setSelectedDimension] = useState(0);

  return (
    <section id="research" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-plum-900/10 dark:border-white/10 mb-12 sm:mb-16">
        <div>
          <div className="font-mono text-xs font-bold tracking-widest text-gold-600 dark:text-gold-400 uppercase mb-2">
            02 / EMPIRICAL INVESTIGATION & FELLOWSHIPS
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-plum-950 dark:text-white tracking-tight">
            RESEARCH SPOTLIGHT
          </h2>
        </div>
        <div className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
          [02 / 07] • NIT CALICUT • AICTE APF
        </div>
      </div>

      {/* Main Research Card: NIT Calicut SE4AI */}
      <div className="rounded-2xl border-2 border-plum-900/15 dark:border-gold-500/30 bg-white dark:bg-plum-950 p-6 sm:p-8 md:p-10 shadow-card relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Card Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-plum-900/10 dark:border-white/10">
          <div>
            <span className="inline-block px-3 py-1 rounded-md bg-plum-800 text-white dark:bg-gold-500 dark:text-plum-950 font-mono text-xs font-bold tracking-wider uppercase mb-2">
              Featured Research Residency
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-plum-950 dark:text-white">
              {featured.institution}
            </h3>
            <p className="font-mono text-xs text-gold-700 dark:text-gold-400 font-semibold mt-1">
              {featured.department} • Mentor: {featured.mentor}
            </p>
          </div>
          <div className="text-right">
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400 block">
              RESEARCH PERIOD
            </span>
            <span className="font-mono text-sm font-bold text-plum-900 dark:text-ice-100">
              {featured.period}
            </span>
          </div>
        </div>

        {/* Abstract / Problem Statement */}
        <div className="mt-6">
          <h4 className="font-mono text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-2">
            Investigative Focus
          </h4>
          <h5 className="font-display font-bold text-xl text-plum-900 dark:text-gold-300 mb-3">
            {featured.title}
          </h5>
          <p className="font-sans text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
            {featured.abstract}
          </p>
        </div>

        {/* Interactive Sustainability Dimensions Explorer */}
        <div className="mt-8 pt-6 border-t border-plum-900/10 dark:border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-mono text-xs font-bold tracking-widest text-gold-600 dark:text-gold-400 uppercase flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>Taxonomy: 5 Sustainability Dimensions (2,500+ Req Annotated)</span>
            </h4>
            <span className="font-mono text-xs text-slate-400 hidden sm:inline">
              Click tabs to inspect
            </span>
          </div>

          {/* Dimension Tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            {featured.dimensions.map((dim, idx) => (
              <button
                key={dim.name}
                onClick={() => setSelectedDimension(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 ${
                  selectedDimension === idx
                    ? 'bg-plum-800 text-white dark:bg-gold-500 dark:text-plum-950 shadow-sm font-bold'
                    : 'bg-slate-100 dark:bg-plum-900/60 text-slate-700 dark:text-ice-200 hover:bg-gold-50 dark:hover:bg-plum-900'
                }`}
              >
                <span>{dim.name}</span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                  selectedDimension === idx
                    ? 'bg-plum-900/40 text-gold-300 dark:bg-plum-900 dark:text-gold-300'
                    : 'bg-white dark:bg-plum-950 text-slate-600 dark:text-slate-400'
                }`}>
                  {dim.count}
                </span>
              </button>
            ))}
          </div>

          {/* Active Dimension Details Box */}
          <div className="p-4 rounded-xl border border-plum-900/10 dark:border-white/10 bg-slate-50 dark:bg-plum-900/30 flex items-center justify-between flex-wrap gap-3">
            <div>
              <div className="font-display font-bold text-sm text-plum-950 dark:text-white">
                {featured.dimensions[selectedDimension].name} Sustainability Dimension
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                {featured.dimensions[selectedDimension].description}
              </div>
            </div>
            <div className="font-mono text-xs px-2.5 py-1 rounded-lg bg-gold-100 dark:bg-plum-800 text-plum-900 dark:text-gold-300 font-bold">
              {featured.dimensions[selectedDimension].count} Verified Specifications
            </div>
          </div>
        </div>

        {/* Key Technical Highlights */}
        <div className="mt-8 pt-6 border-t border-plum-900/10 dark:border-white/10">
          <h4 className="font-mono text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4">
            Key Research Deliverables
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {featured.highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl border border-plum-900/5 dark:border-white/5 bg-white/60 dark:bg-plum-900/20 text-xs text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {featured.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg border border-plum-900/10 dark:border-white/10 text-[11px] font-mono text-plum-800 dark:text-gold-400 bg-plum-50 dark:bg-plum-900/40"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Secondary Fellowship Card: AICTE APF */}
      <div className="mt-6 rounded-2xl border border-plum-900/10 dark:border-white/10 bg-white/70 dark:bg-plum-900/30 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-gold-600 dark:text-gold-400 font-bold uppercase tracking-wider">
              National Fellowship
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
              {fellowship.period}
            </span>
          </div>
          <h3 className="font-display font-bold text-xl text-plum-950 dark:text-white">
            {fellowship.title}
          </h3>
          <p className="font-mono text-xs text-plum-800 dark:text-gold-300 font-semibold mt-1">
            Role: {fellowship.role}
          </p>
          <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2 max-w-3xl">
            {fellowship.description}
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold-50 dark:bg-plum-800 text-plum-900 dark:text-gold-300 font-mono text-xs font-bold border border-gold-300 dark:border-gold-500/30">
            <Award className="w-4 h-4 text-gold-500" />
            <span>National Recognition</span>
          </span>
        </div>
      </div>
    </section>
  );
}
