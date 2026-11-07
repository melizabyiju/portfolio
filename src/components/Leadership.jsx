import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Users, Palette, DollarSign, TerminalSquare, Sparkles } from 'lucide-react';

export default function Leadership() {
  const { leadership } = portfolioData;

  const roleIcons = [
    <Palette className="w-4 h-4 text-gold-500" />,
    <DollarSign className="w-4 h-4 text-gold-500" />,
    <Users className="w-4 h-4 text-gold-500" />,
    <Sparkles className="w-4 h-4 text-gold-500" />
  ];

  return (
    <section id="leadership" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-plum-900/10 dark:border-white/10 mb-12 sm:mb-16">
        <div>
          <div className="font-mono text-xs font-bold tracking-widest text-gold-600 dark:text-gold-400 uppercase mb-2">
            07 / COMMUNITY INITIATIVES & GOVERNANCE
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-plum-950 dark:text-white tracking-tight">
            LEADERSHIP ROLES
          </h2>
        </div>
        <div className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
          [07 / 07] • INSTITUTIONAL MANDATES
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {leadership.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl border border-plum-900/10 dark:border-white/10 bg-white dark:bg-plum-950 flex flex-col justify-between hover:border-gold-500 transition-colors shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] text-slate-500 dark:text-slate-400 mb-3">
                <span className="font-bold text-gold-600 dark:text-gold-400">{item.period}</span>
                {roleIcons[idx]}
              </div>

              <h3 className="font-display font-bold text-lg text-plum-950 dark:text-white mb-1">
                {item.role}
              </h3>

              <div className="font-mono text-xs text-plum-850 dark:text-gold-300 font-semibold mb-3">
                {item.org}
              </div>

              <p className="font-sans text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-plum-900/10 dark:border-white/10 font-mono text-[10px] text-slate-400 uppercase tracking-widest">
              Community Mandate
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
