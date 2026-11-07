import React, { useState, useMemo } from 'react';
import { portfolioData } from '../data/portfolioData';
import { LayoutGrid, List, Award, Filter, ArrowUpRight } from 'lucide-react';

export default function ProjectExplorer({ onSelectProject }) {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'

  const categories = [
    'All',
    'AI/ML & Sustainability',
    'AI/ML & Semantic Search',
    'Computer Vision & Edge AI',
    'Healthcare AI & Deep Learning',
    'Full-Stack Systems & Databases'
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      return selectedCategory === 'All' || p.category === selectedCategory;
    });
  }, [projects, selectedCategory]);

  return (
    <section id="projects" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-plum-900/10 dark:border-white/10 mb-8 sm:mb-12">
        <div>
          <div className="font-mono text-xs font-bold tracking-widest text-gold-600 dark:text-gold-400 uppercase mb-2">
            03 / SELECTED WORK & CASE STUDIES
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-plum-950 dark:text-white tracking-tight">
            ENGINEERING INDEX
          </h2>
        </div>
        <div className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-2 sm:mt-0 flex items-center gap-2">
          <span>SHOWING {filteredProjects.length} OF {projects.length} PROJECTS</span>
        </div>
      </div>

      {/* Filter Category Pills & View Switcher Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full sm:w-auto">
          <Filter className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400 flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-plum-800 text-white dark:bg-gold-500 dark:text-plum-950 font-bold shadow-sm'
                  : 'bg-white dark:bg-plum-900/50 border border-plum-900/10 dark:border-white/10 text-slate-700 dark:text-ice-200 hover:border-gold-500'
              }`}
            >
              {cat === 'All' ? 'All Domains' : cat.split('&')[0]}
            </button>
          ))}
        </div>

        {/* View Switcher: Grid vs Table */}
        <div className="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
          <span className="font-mono text-xs text-slate-500 dark:text-slate-400 mr-1 hidden sm:inline">
            VIEW:
          </span>
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg border text-xs flex items-center gap-1.5 font-mono transition-colors ${
              viewMode === 'grid'
                ? 'bg-plum-800 text-white dark:bg-gold-500 dark:text-plum-950 border-transparent shadow-sm'
                : 'border-plum-900/15 dark:border-white/15 text-slate-600 dark:text-ice-200 hover:bg-slate-100 dark:hover:bg-plum-900'
            }`}
            title="Card Grid View"
          >
            <LayoutGrid className="w-4 h-4" />
            <span className="hidden sm:inline">Cards</span>
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`p-2 rounded-lg border text-xs flex items-center gap-1.5 font-mono transition-colors ${
              viewMode === 'table'
                ? 'bg-plum-800 text-white dark:bg-gold-500 dark:text-plum-950 border-transparent shadow-sm'
                : 'border-plum-900/15 dark:border-white/15 text-slate-600 dark:text-ice-200 hover:bg-slate-100 dark:hover:bg-plum-900'
            }`}
            title="Editorial Index Table View"
          >
            <List className="w-4 h-4" />
            <span className="hidden sm:inline">Index Table</span>
          </button>
        </div>
      </div>

      {/* VIEW MODE 1: Rich Cards Grid */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl border border-plum-900/10 dark:border-white/10 bg-white dark:bg-plum-950 p-6 flex flex-col justify-between hover:border-gold-500 dark:hover:border-gold-500 hover:shadow-hover hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Accent line on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-plum-800 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* Meta row */}
                <div className="flex items-center justify-between font-mono text-[11px] text-slate-500 dark:text-slate-400 mb-3">
                  <span className="font-bold text-gold-600 dark:text-gold-400">
                    [{project.index}]
                  </span>
                  <span>{project.category.split('&')[0]}</span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display font-bold text-xl text-plum-950 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-gold-700 dark:text-gold-400 font-semibold mt-0.5 mb-3">
                  {project.subtitle}
                </p>

                <p className="font-sans text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {project.shortDesc}
                </p>

                {/* Highlight Badge */}
                {project.featuredBadge && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gold-50 dark:bg-plum-900/80 border border-gold-300 dark:border-gold-500/30 text-plum-900 dark:text-gold-300 font-mono text-[11px] font-semibold mb-4">
                    <Award className="w-3 h-3 text-gold-600 dark:text-gold-400" />
                    <span>{project.featuredBadge}</span>
                  </div>
                )}
              </div>

              {/* Bottom Row: Tech Chips on Left, Circular Arrow Button on Right (Matching Reference Image) */}
              <div className="pt-4 border-t border-plum-900/10 dark:border-white/10 flex items-center justify-between gap-3">
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 flex-1">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-plum-900/60 text-slate-700 dark:text-ice-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Circular Inspector Arrow Button (Consistent small diagonal arrow ↗ across the site) */}
                <div
                  aria-label="Inspect project"
                  className="w-8 h-8 rounded-full bg-plum-800 dark:bg-plum-900 flex-shrink-0 flex items-center justify-center text-gold-400 shadow-sm group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-plum-950 dark:group-hover:bg-gold-400 dark:group-hover:text-plum-950 transition-all duration-300"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-400 group-hover:text-plum-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* VIEW MODE 2: Swiss-Brutalist Editorial Index Table */}
      {viewMode === 'table' && (
        <div className="border border-plum-900/15 dark:border-white/10 rounded-2xl overflow-hidden bg-white dark:bg-plum-950 divide-y divide-plum-900/10 dark:divide-white/10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="p-4 sm:p-6 hover:bg-gold-50/40 dark:hover:bg-plum-900/50 cursor-pointer transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-gold-600 dark:text-gold-400 pt-0.5">
                  [{project.index}]
                </span>
                <div>
                  <h3 className="font-display font-bold text-lg text-plum-950 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                    {project.title} — <span className="font-sans font-normal text-sm text-slate-600 dark:text-slate-400">{project.subtitle}</span>
                  </h3>
                  <p className="font-sans text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
                    {project.shortDesc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end md:self-auto flex-shrink-0">
                <div className="hidden lg:flex flex-wrap gap-1.5 max-w-xs">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-plum-900/60 text-slate-700 dark:text-ice-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Circular Inspector Arrow Button (Consistent small diagonal arrow ↗ across the site) */}
                <div
                  aria-label="Inspect project"
                  className="w-8 h-8 rounded-full bg-plum-800 dark:bg-plum-900 flex-shrink-0 flex items-center justify-center text-gold-400 shadow-sm group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-plum-950 dark:group-hover:bg-gold-400 dark:group-hover:text-plum-950 transition-all duration-300"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-400 group-hover:text-plum-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </section>
  );
}
