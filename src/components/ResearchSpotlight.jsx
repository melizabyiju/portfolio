import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Layers, ArrowUpRight, Award, Sparkles, Cpu, BookOpen } from 'lucide-react';
import ResearchModal from './ResearchModal';

export default function ResearchSpotlight() {
  const { research } = portfolioData;
  const { featured, fellowship } = research;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="research" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-plum-900/10 dark:border-white/10 mb-8 sm:mb-12">
        <div>
          <div className="font-mono text-xs font-bold tracking-widest text-gold-600 dark:text-gold-400 uppercase mb-2">
            02 / EMPIRICAL INVESTIGATION & FELLOWSHIPS
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-plum-950 dark:text-white tracking-tight">
            RESEARCH & EXPERIENCE
          </h2>
        </div>
        <div className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
          [02 / 07] • NIT CALICUT • SE4AI
        </div>
      </div>

      {/* Brief NIT Calicut Experience Card */}
      <div 
        onClick={() => setIsModalOpen(true)}
        className="group cursor-pointer rounded-2xl border-2 border-plum-900/15 dark:border-white/10 bg-white dark:bg-plum-950 p-6 sm:p-8 md:p-10 shadow-card hover:border-gold-500 dark:hover:border-gold-500 hover:shadow-hover transition-all duration-300 relative overflow-hidden"
      >
        {/* Subtle accent line on hover */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-plum-800 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

        {/* Top Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-plum-900/10 dark:border-white/10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-plum-800 text-white dark:bg-gold-500 dark:text-plum-950 font-mono text-xs font-bold tracking-wider uppercase">
              Research Residency
            </span>
            <span className="font-mono text-xs text-gold-600 dark:text-gold-400 font-bold">
              NIT CALICUT
            </span>
          </div>
          <div className="font-mono text-xs text-slate-500 dark:text-slate-400 font-semibold">
            {featured.period}
          </div>
        </div>

        {/* Content Body */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-plum-950 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
              {research.role}
            </h3>
            <p className="font-mono text-xs text-gold-700 dark:text-gold-400 font-semibold mt-1 mb-3">
              {featured.institution} • {featured.department}
            </p>
            <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
              Investigating empirical SE4AI lifecycles, classifying a benchmark taxonomy of 2,500+ requirements across five sustainability dimensions, and fine-tuning DeBERTa-v3 multi-label classifiers with code smell mitigation.
            </p>

            {/* Quick Stat Chips */}
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-gold-50 dark:bg-plum-900/60 border border-gold-300/60 dark:border-gold-500/20 text-xs font-mono font-medium text-plum-900 dark:text-gold-300">
                ✦ 2,500+ Requirements
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-gold-50 dark:bg-plum-900/60 border border-gold-300/60 dark:border-gold-500/20 text-xs font-mono font-medium text-plum-900 dark:text-gold-300">
                ✦ 5 Sustainability Dimensions
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-gold-50 dark:bg-plum-900/60 border border-gold-300/60 dark:border-gold-500/20 text-xs font-mono font-medium text-plum-900 dark:text-gold-300">
                ✦ DeBERTa-v3 Fine-Tuning
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-gold-50 dark:bg-plum-900/60 border border-gold-300/60 dark:border-gold-500/20 text-xs font-mono font-medium text-plum-900 dark:text-gold-300">
                ✦ Code Smell Detection
              </span>
            </div>
          </div>

          {/* Action Trigger Button */}
          <div className="lg:col-span-4 flex lg:justify-end items-center">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-plum-800 hover:bg-plum-900 text-white dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-plum-950 font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-sm group-hover:shadow-gold-glow"
            >
              <Layers className="w-4 h-4 text-gold-400 dark:text-plum-950" />
              <span>Inspect Findings & Taxonomy</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Fellowship Card: AICTE APF */}
      <div className="mt-4 rounded-2xl border border-plum-900/10 dark:border-white/10 bg-white/70 dark:bg-plum-900/30 p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 mb-1.5">
            <span className="font-mono text-[11px] text-gold-600 dark:text-gold-400 font-bold uppercase tracking-wider">
              National Fellowship
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
              {fellowship.period}
            </span>
          </div>
          <h4 className="font-display font-bold text-lg text-plum-950 dark:text-white">
            {fellowship.title}
          </h4>
          <p className="font-sans text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
            {fellowship.description}
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-100 dark:bg-plum-800 text-plum-900 dark:text-gold-300 font-mono text-xs font-bold border border-gold-300 dark:border-gold-500/30">
            <Award className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
            <span>National Shortlist</span>
          </span>
        </div>
      </div>

      {/* Dedicated Research Inspector Modal */}
      <ResearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
