// ==========================================================================
// Editorial Swiss-Brutalist Portfolio Scripts for Meliza Mariya Byiju
// Data strictly verified against official resume
// Inspired by joyelshaji.pages.dev
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Theme Management (Light / Dark Canvas Mode)
  // --------------------------------------------------------------------------
  const themeToggle = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('meliza_portfolio_theme') || 'light';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('meliza_portfolio_theme', theme);
    if (themeToggle) {
      themeToggle.innerHTML = theme === 'dark' 
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
  }

  applyTheme(storedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // --------------------------------------------------------------------------
  // 2. Minimal Custom Cursor (Dot & Smooth Ring)
  // --------------------------------------------------------------------------
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');

  if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    });

    function renderCursorRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(renderCursorRing);
    }
    requestAnimationFrame(renderCursorRing);

    document.querySelectorAll('a, button, .project-row').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorRing.style.width = '48px';
        cursorRing.style.height = '48px';
        cursorRing.style.borderColor = 'var(--c-marigold)';
      });
      el.addEventListener('mouseleave', () => {
        cursorRing.style.width = '32px';
        cursorRing.style.height = '32px';
        cursorRing.style.borderColor = '';
      });
    });
  }

  // --------------------------------------------------------------------------
  // 3. Project Detail Inspection Drawer (Exact Resume Data)
  // --------------------------------------------------------------------------
  const projectData = {
    'kayora': {
      index: '01',
      period: '2025 — PRESENT',
      category: 'AI SUSTAINABILITY & CLEAN TECH',
      title: 'KAYORA — AI-Assisted Aquatic Biomass Recovery',
      lead: 'Selected for the second stage of Kerala Agricultural University’s RAISE 2026 Student Startup Programme (funding support up to Rs. 5 lakh).',
      description: 'Worked on an AI-based approach to identify and recover aquatic biomass, with a focus on environmental sustainability and aquatic resource management. Protects freshwater ecosystems from invasive aquatic weed infestation through automated tracking and organized biomass recovery cycles.',
      highlights: [
        'AI-based methodology to identify, monitor, and recover aquatic biomass',
        'Focused on environmental sustainability and aquatic resource management',
        'Selected for Stage 2 of KAU RAISE 2026 Student Startup Programme',
        'Eligible for government prototype funding support up to Rs. 5 Lakh'
      ],
      technologies: ['Python', 'Computer Vision', 'PyTorch', 'IoT', 'Environmental Tech'],
      github: 'https://github.com/melizabyiju'
    },
    'refind': {
      index: '02',
      period: '2026',
      category: 'SEMANTIC RETRIEVAL & NLP',
      title: 'ReFind — AI-Powered Semantic Search & Information Retrieval',
      lead: 'Presented at the AI Bhoomi Startup Weekend, a 20-hour startup sprint.',
      description: 'Developed an AI-based retrieval system using EmbeddingGemma 2, Jina reranking, and Gemini 2.5 Flash Lite to improve search relevance and generate contextual explanations.',
      highlights: [
        'Built an AI retrieval pipeline using Google EmbeddingGemma 2 for dense vector space mapping',
        'Integrated cross-encoder reranking via Jina to maximize search result relevance',
        'Synthesized coherent contextual explanations using Gemini 2.5 Flash Lite',
        'Pitched and demoed the system live at the AI Bhoomi 20-hour startup sprint'
      ],
      technologies: ['EmbeddingGemma 2', 'Jina Reranker', 'Gemini 2.5 Flash Lite', 'Python', 'Vector Search'],
      github: 'https://github.com/melizabyiju'
    },
    'riverclean': {
      index: '03',
      period: '2025 — PRESENT',
      category: 'COMPUTER VISION & ENVIRONMENTAL ML',
      title: 'RiverClean — ML Engineer — AI River Pollution Detection System',
      lead: 'Achieved a national Round 1 shortlist in the AICTE Production Fellowship (APF), validating real-world impact and technical merit nationwide.',
      description: 'Built a multi-class image classification pipeline using TensorFlow CNNs to detect river pollution severity from environmental imagery, training on a labeled visual dataset with multi-class output. Designed a Python/Flask inference API to serve model predictions in real time, incorporating NumPy-based preprocessing and feature normalization end-to-end.',
      highlights: [
        'Multi-class image classification pipeline built with TensorFlow CNNs',
        'Trained on labeled environmental imagery for multi-class river pollution severity detection',
        'Engineered Python/Flask inference REST API serving predictions in real time',
        'End-to-end NumPy-based image preprocessing and input normalization',
        'Shortlisted nationally for Round 1 of the AICTE Production Fellowship (APF)'
      ],
      technologies: ['TensorFlow', 'CNNs', 'Python', 'Flask', 'NumPy', 'Computer Vision'],
      github: 'https://github.com/melizabyiju'
    },
    'restyle': {
      index: '04',
      period: '2025 — PRESENT',
      category: 'ML BACKEND & SUSTAINABLE FASHION',
      title: 'ReStyle — ML Developer — Sustainable Fashion AI Platform',
      lead: 'Engineered a Python/Flask REST backend for an AI-driven clothing redesign engine.',
      description: 'Designed the data pipeline to preprocess user-uploaded images and route them through an ML inference module for category-based recommendation generation. Applied NumPy-based image transformations for input standardization and integrated model outputs into a structured recommendation response layer.',
      highlights: [
        'Engineered Python/Flask REST backend for AI clothing redesign platform',
        'Constructed data pipeline preprocessing user images for inference routing',
        'Category-based recommendation generation based on clothing visual attributes',
        'NumPy-based image transformations for input normalization and standardized response layer'
      ],
      technologies: ['Python', 'Flask', 'NumPy', 'REST API', 'Machine Learning'],
      github: 'https://github.com/melizabyiju'
    },
    'internmatch': {
      index: '05',
      period: '2025 — PRESENT',
      category: 'ALGORITHMIC MATCHING & PIPELINES',
      title: 'InternMatch — Algorithm Developer — Skill-Based Recommendation System',
      lead: 'Designed a skill-vector matching algorithm in SQL with Oracle Database triggers for automated deadline validation.',
      description: 'Integrated BeautifulSoup and APScheduler for real-time opportunity scraping and personalized student alerts. Built a 3-stage candidate tracking pipeline (applied → interview → offer) reducing manual internship search effort through automated matching logic.',
      highlights: [
        'Skill-vector matching algorithm developed in SQL with Oracle triggers',
        'Automated deadline validation and real-time opportunity scraping via BeautifulSoup',
        'Automated cron alert scheduling powered by APScheduler',
        '3-stage candidate tracking pipeline (applied → interview → offer) automating student workflows'
      ],
      technologies: ['SQL', 'Oracle Database', 'Python', 'BeautifulSoup', 'APScheduler'],
      github: 'https://github.com/melizabyiju'
    }
  };

  const detailBackdrop = document.getElementById('detail-overlay');
  const detailContent = document.getElementById('detail-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openProjectDetail(projectId) {
    const data = projectData[projectId];
    if (!data || !detailContent) return;

    detailContent.innerHTML = `
      <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--c-marigold); letter-spacing: 0.14em; font-weight: 600; text-transform: uppercase;">
        [${data.index}] ${data.category} • ${data.period}
      </div>

      <h2 style="font-family: var(--font-heading); font-size: 2rem; font-weight: 700; color: var(--text-heading); margin: 12px 0 16px; line-height: 1.2;">
        ${data.title}
      </h2>

      <p style="font-size: 1.05rem; font-weight: 600; color: var(--c-marigold); margin-bottom: 24px; line-height: 1.6;">
        ${data.lead}
      </p>

      <div style="border-top: 1px solid var(--border-main); padding-top: 24px; margin-bottom: 24px;">
        <h4 style="font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.12em; color: var(--text-muted); text-transform: uppercase; margin-bottom: 12px;">Resume Technical Overview</h4>
        <p style="font-size: 0.9375rem; line-height: 1.8; color: var(--text-main);">
          ${data.description}
        </p>
      </div>

      <div style="border-top: 1px solid var(--border-main); padding-top: 24px; margin-bottom: 24px;">
        <h4 style="font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.12em; color: var(--text-muted); text-transform: uppercase; margin-bottom: 12px;">Verified Engineering Highlights</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 0.9375rem;">
          ${data.highlights.map(h => `
            <li style="position: relative; padding-left: 20px;">
              <span style="position: absolute; left: 0; color: var(--c-marigold);">✦</span>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div style="border-top: 1px solid var(--border-main); padding-top: 24px; margin-bottom: 32px;">
        <h4 style="font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.12em; color: var(--text-muted); text-transform: uppercase; margin-bottom: 12px;">Technologies</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${data.technologies.map(t => `<span class="tech-tag" style="padding: 4px 10px; font-size: 0.75rem;">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 16px; border-top: 1px solid var(--border-main); padding-top: 28px;">
        <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn-header-contact" style="padding: 12px 24px; font-size: 0.8125rem;">
          <span>VIEW REPOSITORY ON GITHUB</span>
          <span>↗</span>
        </a>
      </div>
    `;

    detailBackdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectDetail() {
    if (detailBackdrop) {
      detailBackdrop.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('.project-row').forEach(row => {
    row.addEventListener('click', () => {
      const pid = row.getAttribute('data-project-id');
      if (pid) openProjectDetail(pid);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectDetail);
  }

  // --------------------------------------------------------------------------
  // 4. Side Navigation Drawer
  // --------------------------------------------------------------------------
  const sidePanelToggle = document.getElementById('side-panel-toggle');
  const sidePanelClose = document.getElementById('side-panel-close');

  function openSidePanel() {
    if (detailBackdrop) {
      detailBackdrop.classList.add('drawer-open', 'is-active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeSidePanel() {
    if (detailBackdrop) {
      detailBackdrop.classList.remove('drawer-open', 'is-active');
      document.body.style.overflow = '';
    }
  }

  if (sidePanelToggle) {
    sidePanelToggle.addEventListener('click', openSidePanel);
  }

  if (sidePanelClose) {
    sidePanelClose.addEventListener('click', closeSidePanel);
  }

  if (detailBackdrop) {
    detailBackdrop.addEventListener('click', (e) => {
      if (e.target === detailBackdrop) {
        closeProjectDetail();
        closeSidePanel();
      }
    });
  }

  document.querySelectorAll('.side-nav-link').forEach(link => {
    link.addEventListener('click', closeSidePanel);
  });
});
