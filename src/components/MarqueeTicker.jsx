import React from 'react';

export default function MarqueeTicker() {
  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "WORK", href: "#projects" },
    { label: "RESEARCH", href: "#research" },
    { label: "SKILLS", href: "#skills" },
    { label: "EDUCATION", href: "#education" },
    { label: "LEADERSHIP", href: "#leadership" },
    { label: "CONTACT", href: "#contact" },
  ];

  // Repeat for continuous smooth marquee track
  const loopItems = [...navItems, ...navItems, ...navItems, ...navItems];

  return (
    <nav
      aria-label="Section Navigation Marquee"
      className="relative w-full overflow-hidden bg-plum-900 text-white dark:bg-gold-500 dark:text-plum-950 py-3 border-y border-gold-400/30 select-none z-10"
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {loopItems.map((item, index) => (
          <div key={index} className="inline-flex items-center gap-5 mx-5">
            <a
              href={item.href}
              className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase hover:text-gold-400 dark:hover:text-white hover:underline underline-offset-4 transition-colors duration-200 cursor-pointer"
            >
              {item.label}
            </a>
            <span className="text-gold-400 dark:text-plum-900 text-sm opacity-80" aria-hidden="true">
              ✦
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
}
