import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Award, ArrowUpRight } from 'lucide-react';

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-plum-900/10 dark:border-white/10 mb-12 sm:mb-16">
        <div>
          <div className="font-mono text-xs font-bold tracking-widest text-gold-600 dark:text-gold-400 uppercase mb-2">
            06 / COMPETITIVE MERIT & GRANTS
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-plum-950 dark:text-white tracking-tight">
            ACHIEVEMENTS & HACKATHONS
          </h2>
        </div>
        <div className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
          [06 / 07] • NATIONAL RECOGNITION
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl border border-plum-900/10 dark:border-white/10 bg-white dark:bg-plum-950 flex flex-col justify-between hover:border-gold-500 transition-colors shadow-sm group"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-slate-500 dark:text-slate-400 mb-3">
                <span className="font-bold text-gold-600 dark:text-gold-400">{item.year}</span>
                <span className="px-2 py-0.5 rounded bg-gold-50 dark:bg-plum-900 text-plum-900 dark:text-gold-300 font-semibold text-[10px]">
                  {item.badge}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-plum-950 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors mb-1">
                {item.title}
              </h3>

              <div className="font-mono text-xs text-plum-800 dark:text-gold-300 font-semibold mb-3">
                {item.org}
              </div>

              <p className="font-sans text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-plum-900/10 dark:border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>National Honors</span>
              <Award className="w-4 h-4 text-gold-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
