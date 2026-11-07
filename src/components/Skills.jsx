import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Cpu, Database, Server, Terminal, Sparkles, CheckCircle2, Flame, Eye, Layers } from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons = {
    "AI, ML & Deep Learning": <Flame className="w-4 h-4 text-gold-500" />,
    "SE4AI & Empirical Research": <Sparkles className="w-4 h-4 text-gold-500" />,
    "Backend & Systems Engineering": <Server className="w-4 h-4 text-gold-500" />,
    "Theoretical CS & Core": <Cpu className="w-4 h-4 text-gold-500" />
  };

  return (
    <section id="skills" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-plum-900/10 dark:border-white/10 mb-12 sm:mb-16">
        <div>
          <div className="font-mono text-xs font-bold tracking-widest text-gold-600 dark:text-gold-400 uppercase mb-2">
            04 / TECHNICAL ARSENAL & CAPABILITIES
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-plum-950 dark:text-white tracking-tight">
            CORE CAPABILITIES
          </h2>
        </div>
        <div className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
          [04 / 07] • EMPIRICAL STACK
        </div>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-2xl border border-plum-900/10 dark:border-white/10 bg-white dark:bg-plum-950 p-6 sm:p-7 shadow-sm hover:border-gold-500 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                {categoryIcons[category] || <Cpu className="w-4 h-4 text-gold-500" />}
                <h3 className="font-display font-bold text-lg text-plum-950 dark:text-white">
                  {category}
                </h3>
              </div>
              <p className="font-sans text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                Applied in peer-reviewed research, enterprise prototypes, and competitive robotics.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-plum-900/10 dark:border-white/10">
              {items.map((skill) => (
                <div
                  key={skill.name}
                  className="px-3 py-1.5 rounded-xl border border-plum-900/10 dark:border-white/10 bg-slate-50 dark:bg-plum-900/40 text-xs font-mono text-plum-900 dark:text-ice-100 flex items-center gap-2 hover:border-gold-400 transition-colors"
                >
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-[10px] text-gold-600 dark:text-gold-400 font-semibold px-1 py-0.2 rounded bg-gold-50 dark:bg-plum-800">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
