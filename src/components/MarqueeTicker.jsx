import React from 'react';

export default function MarqueeTicker() {
  const items = [
    "SE4AI Research @ NIT Calicut",
    "10.0 CGPA • Department Rank 1",
    "KAYORA — KAU RAISE 2026 Stage 2 (₹5L)",
    "DeBERTa-v3 Multi-Label Classification",
    "RiverClean — AICTE Production Fellowship Shortlist",
    "IIT Bombay e-Yantra Robotics Challenge",
    "ReFind Multimodal Semantic Retrieval",
    "EmbeddingGemma 2 & Jina Reranker",
    "2,500+ Requirements Classified across 5 Sustainability Dimensions",
    "TensorFlow CNN & Real-time Flask API",
    "Sacred Heart HSS (PCMB) — 98.9%",
    "Amal Jyothi College of Engineering"
  ];

  return (
    <div className="relative w-full overflow-hidden bg-plum-900 text-white dark:bg-gold-500 dark:text-plum-950 py-3 border-y border-gold-400/30">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {/* Render twice for continuous loop */}
        {[...items, ...items].map((text, index) => (
          <div key={index} className="inline-flex items-center gap-4 mx-4">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase">
              {text}
            </span>
            <span className="text-gold-400 dark:text-plum-900 text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
