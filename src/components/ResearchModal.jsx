import React, { useEffect, useState } from 'react';
import { X, Layers, CheckCircle2, Cpu, Award, BookOpen, Sparkles, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResearchModal({ isOpen, onClose }) {
  const { research } = portfolioData;
  const { featured } = research;
  const [selectedDimension, setSelectedDimension] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-plum-950/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-plum-950 border-2 border-plum-900/20 dark:border-gold-500/30 p-6 sm:p-8 md:p-10 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-plum-900 dark:hover:bg-plum-800 text-plum-900 dark:text-ice-100 transition-colors"
          aria-label="Close research inspector"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header Tag */}
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-gold-600 dark:text-gold-400 font-bold uppercase tracking-widest">
          <span>[RESEARCH RESIDENCY INSPECTOR]</span>
          <span>•</span>
          <span>NIT CALICUT</span>
          <span>•</span>
          <span className="text-slate-500 dark:text-slate-400">{featured.period}</span>
        </div>

        {/* Title & Institutional Details */}
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-plum-950 dark:text-white leading-tight">
          {research.role}
        </h2>
        <p className="font-mono text-sm text-gold-700 dark:text-gold-400 font-semibold mt-1 mb-1">
          {featured.institution}
        </p>
        <p className="font-mono text-xs text-slate-500 dark:text-slate-400 mb-6">
          {featured.department} • Mentor: {featured.mentor}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-plum-900/40 border border-plum-900/10 dark:border-white/10 mb-6">
          <div className="text-center sm:text-left">
            <span className="font-mono text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Requirements
            </span>
            <span className="font-display font-bold text-base sm:text-xl text-plum-950 dark:text-gold-300">
              2,500+ Annotated
            </span>
          </div>
          <div className="text-center sm:text-left">
            <span className="font-mono text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Sustainability
            </span>
            <span className="font-display font-bold text-base sm:text-xl text-plum-950 dark:text-gold-300">
              5 Dimensions
            </span>
          </div>
          <div className="text-center sm:text-left">
            <span className="font-mono text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Classifier
            </span>
            <span className="font-display font-bold text-base sm:text-xl text-plum-950 dark:text-gold-300">
              DeBERTa-v3
            </span>
          </div>
        </div>

        {/* Abstract / Focus */}
        <div className="mb-6">
          <h3 className="font-mono text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-2 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-gold-500" />
            <span>Investigative Focus & Scope</span>
          </h3>
          <h4 className="font-display font-bold text-base sm:text-lg text-plum-900 dark:text-gold-300 mb-2">
            {featured.title}
          </h4>
          <p className="font-sans text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {featured.abstract}
          </p>
        </div>

        {/* Interactive Sustainability Dimensions Explorer */}
        <div className="mb-6 pt-6 border-t border-plum-900/10 dark:border-white/10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-mono text-xs font-bold tracking-widest text-gold-600 dark:text-gold-400 uppercase flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>Taxonomy: 5 Sustainability Dimensions</span>
            </h3>
            <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">
              Click tabs to inspect
            </span>
          </div>

          {/* Dimension Tabs */}
          <div className="flex flex-wrap gap-2 mb-3">
            {featured.dimensions.map((dim, idx) => (
              <button
                key={dim.name}
                onClick={() => setSelectedDimension(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 ${
                  selectedDimension === idx
                    ? 'bg-plum-800 text-white dark:bg-gold-500 dark:text-plum-950 shadow-sm font-bold'
                    : 'bg-slate-100 dark:bg-plum-900/60 text-slate-700 dark:text-ice-200 hover:bg-gold-50 dark:hover:bg-plum-900'
                }`}
              >
                <span>{dim.name}</span>
                <span className={`px-1.5 py-0.2 rounded text-[10px] ${
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

        {/* Key Technical Highlights / Deliverables */}
        <div className="mb-6 pt-6 border-t border-plum-900/10 dark:border-white/10">
          <h3 className="font-mono text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-3 flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-gold-500" />
            <span>Research Deliverables & Methodological Findings</span>
          </h3>
          <ul className="space-y-2.5">
            {research.points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Tags */}
        <div className="pt-6 border-t border-plum-900/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {featured.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg border border-plum-900/10 dark:border-white/10 text-[11px] font-mono text-plum-800 dark:text-gold-400 bg-plum-50 dark:bg-plum-900/40"
              >
                #{tag}
              </span>
            ))}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-plum-800 hover:bg-plum-900 text-white dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-plum-950 font-mono text-xs font-bold uppercase transition-colors"
          >
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  );
}
