import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({
  theme,
  toggleTheme
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-2xl ${
          scrolled
            ? 'glass-header shadow-card py-2.5 px-4 sm:px-6'
            : 'bg-white/70 dark:bg-plum-950/70 backdrop-blur-md border border-plum-900/10 dark:border-white/10 py-3 px-4 sm:px-6'
        } flex items-center justify-between gap-3`}
      >
        {/* Brand / Logo */}
        <a href="#hero" className="flex-shrink-0" aria-label="Meliza Mariya Byiju Homepage">
          <Logo className="w-8 h-8 sm:w-9 sm:h-9" withText={true} />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium tracking-wider text-plum-900/80 dark:text-ice-100 hover:text-plum-900 dark:hover:text-gold-400 hover:bg-plum-900/5 dark:hover:bg-white/5 transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Theme Toggle (Light / Dark) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-plum-900/15 dark:border-white/15 bg-white/60 dark:bg-plum-900/40 text-plum-900 dark:text-ice-200 hover:border-gold-500 hover:text-gold-600 dark:hover:text-gold-400 transition-all"
            title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            aria-label="Toggle visual theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-gold-400" />
            ) : (
              <Moon className="w-4 h-4 text-plum-800" />
            )}
          </button>

          {/* Direct CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-plum-800 hover:bg-plum-900 text-white dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-plum-950 font-mono text-xs font-semibold tracking-wider transition-all shadow-sm hover:shadow-gold-glow uppercase"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-plum-900/15 dark:border-white/15 bg-white/60 dark:bg-plum-900/40 text-plum-900 dark:text-ice-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto fixed inset-x-4 top-20 bg-white dark:bg-plum-950 rounded-2xl shadow-xl border border-plum-900/15 dark:border-gold-500/20 p-5 z-50 flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-plum-900/10 dark:border-white/10">
            <span className="font-mono text-xs text-gold-600 dark:text-gold-400 font-semibold tracking-widest uppercase">
              Navigation Menu
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-medium text-plum-900 dark:text-ice-100 hover:bg-gold-50 dark:hover:bg-plum-900/60 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3 h-3 text-gold-600 dark:text-gold-400 opacity-60" />
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-plum-900/10 dark:border-white/10 flex items-center justify-between text-xs font-mono text-plum-700 dark:text-ice-300">
            <span>Amal Jyothi • 10.0 CGPA</span>
            <span className="text-gold-600 dark:text-gold-400 font-semibold">NIT Calicut</span>
          </div>
        </div>
      )}
    </header>
  );
}
