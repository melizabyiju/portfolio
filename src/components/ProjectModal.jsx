import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Layers, Cpu, Award } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-plum-950/70 backdrop-blur-md animate-in fade-in duration-200"
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
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Index Header */}
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-gold-600 dark:text-gold-400 font-bold uppercase tracking-widest">
          <span>[{project.index}]</span>
          <span>•</span>
          <span>{project.category}</span>
          <span>•</span>
          <span className="text-slate-500 dark:text-slate-400">{project.domain}</span>
        </div>

        {/* Title & Subtitle */}
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-plum-950 dark:text-white leading-tight">
          {project.title}
        </h2>
        <p className="font-mono text-sm text-gold-700 dark:text-gold-400 font-semibold mt-1 mb-4">
          {project.subtitle}
        </p>

        {/* Featured Badge */}
        {project.featuredBadge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-100 dark:bg-plum-900 border border-gold-300 dark:border-gold-500/30 text-plum-950 dark:text-gold-300 font-mono text-xs font-bold mb-6">
            <Award className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
            <span>{project.featuredBadge}</span>
          </div>
        )}

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-plum-900/40 border border-plum-900/10 dark:border-white/10 mb-6">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <span className="font-mono text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                {m.label}
              </span>
              <span className="font-display font-bold text-base sm:text-xl text-plum-950 dark:text-gold-300">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Overview Narrative */}
        <div className="mb-6">
          <h3 className="font-mono text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-2">
            System Overview & Objective
          </h3>
          <p className="font-sans text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Innovations / Architecture */}
        <div className="mb-6 pt-6 border-t border-plum-900/10 dark:border-white/10">
          <h3 className="font-mono text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-3 flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-gold-500" />
            <span>Engineering Architecture & Innovations</span>
          </h3>
          <ul className="space-y-2.5">
            {project.innovations.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8 pt-6 border-t border-plum-900/10 dark:border-white/10">
          <h3 className="font-mono text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-3 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-gold-500" />
            <span>Technology Stack</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg border border-plum-900/15 dark:border-white/15 bg-white dark:bg-plum-900 text-xs font-mono font-medium text-plum-900 dark:text-ice-100 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-plum-900/10 dark:border-white/10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-plum-800 hover:bg-plum-900 text-white dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-plum-950 font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-sm hover:shadow-gold-glow"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View GitHub Source</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-plum-900/20 dark:border-white/20 font-mono text-xs text-slate-700 dark:text-ice-200 hover:bg-slate-100 dark:hover:bg-plum-900 transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
