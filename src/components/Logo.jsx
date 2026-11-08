import React from 'react';

export default function Logo({ className = "w-8 h-8", withText = true }) {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className={`${className} relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          <rect width="64" height="64" rx="14" fill="#3A0F34" />
          {/* Subtle gold accent border */}
          <rect x="1" y="1" width="62" height="62" rx="13" stroke="#EAAA00" strokeWidth="1.5" strokeOpacity="0.4" />
          {/* Architectural 'M' geometry */}
          <rect x="14" y="18" width="9" height="28" rx="2" fill="#FFFFFF" />
          <polygon points="23,18 32,32 28,36 23,26" fill="#EAAA00" />
          <polygon points="41,18 32,32 36,36 41,26" fill="#EAAA00" />
          <rect x="41" y="18" width="9" height="28" rx="2" fill="#FFFFFF" />
        </svg>
      </div>
      {withText && (
        <div className="flex flex-col text-left">
          <span className="font-display font-bold text-sm sm:text-base tracking-tight text-plum-900 dark:text-white flex items-center gap-1.5">
            <span>MELIZA MARIYA BYIJU</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
          </span>
        </div>
      )}
    </div>
  );
}
