import React from 'react';
import Logo from './Logo';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-plum-900/10 dark:border-white/10 bg-white dark:bg-plum-950 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-500 dark:text-slate-400">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Logo className="w-6 h-6" withText={false} />
          <div>
            <span className="font-bold text-plum-950 dark:text-white">
              MELIZA MARIYA BYIJU
            </span>
            <span className="mx-2 text-gold-500">•</span>
            <span>PORTFOLIO © {new Date().getFullYear()}</span>
          </div>
        </div>

        {/* Palette & Academic Badge */}
        <div className="text-center font-medium">
          <span className="text-plum-900 dark:text-gold-400 font-bold">10.0 CGPA</span> • AMAL JYOTHI & NIT CALICUT
          <span className="hidden sm:inline text-slate-400 dark:text-slate-600 mx-2">|</span>
          <span className="hidden sm:inline text-[11px] text-slate-400">PLUM, GOLD & ICE SYSTEM</span>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-plum-900/10 dark:border-white/10 text-plum-900 dark:text-ice-100 hover:border-gold-500 hover:text-gold-600 transition-colors"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
