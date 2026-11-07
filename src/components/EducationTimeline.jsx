import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export default function EducationTimeline() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-plum-900/10 dark:border-white/10 mb-12 sm:mb-16">
        <div>
          <div className="font-mono text-xs font-bold tracking-widest text-gold-600 dark:text-gold-400 uppercase mb-2">
            05 / ACADEMIC EXCELLENCE & PEDIGREE
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-plum-950 dark:text-white tracking-tight">
            EDUCATION & HONORS
          </h2>
        </div>
        <div className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
          [05 / 07] • 10.0 CGPA • RANK 1
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl border-2 border-plum-900/15 dark:border-white/10 bg-white dark:bg-plum-950 p-6 sm:p-8 flex flex-col justify-between shadow-card hover:border-gold-500 transition-colors relative overflow-hidden"
          >
            {/* Top highlight bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500"></div>

            <div>
              <div className="flex items-center justify-between font-mono text-xs text-slate-500 dark:text-slate-400 mb-2">
                <span className="font-bold text-gold-600 dark:text-gold-400">{item.period}</span>
                <span>{item.board}</span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-plum-950 dark:text-white mb-1">
                {item.degree}
              </h3>

              <div className="font-sans text-sm font-semibold text-plum-800 dark:text-gold-300 mb-4">
                {item.institution}
              </div>

              {/* Big Score Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gold-100 dark:bg-plum-900 border border-gold-300 dark:border-gold-500/30 text-plum-950 dark:text-gold-300 font-mono text-xs font-bold mb-6">
                <Award className="w-4 h-4 text-gold-600 dark:text-gold-400" />
                <span>{item.grade} — {item.status}</span>
              </div>

              {/* Bullet highlights */}
              <ul className="space-y-2 pt-4 border-t border-plum-900/10 dark:border-white/10">
                {item.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-plum-900/10 dark:border-white/10 font-mono text-[11px] text-slate-500 dark:text-slate-400">
              Verified Academic Credential
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
