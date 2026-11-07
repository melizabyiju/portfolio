// ==========================================================================
// Editorial Swiss-Brutalist Portfolio Scripts for Meliza Mariya Byiju
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
  // 2. Minimal Custom Cursor (Dot & Ring)
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

    // Expand ring on interactive elements
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
  // 3. Project Detail Drawer Modal
  // --------------------------------------------------------------------------
  const projectData = {
    'kayora': {
      index: '01',
      category: 'STARTUP & SUSTAINABILITY',
      title: 'KAYORA — AI-Assisted Aquatic Biomass Recovery System',
      lead: 'Selected for Stage 2 of Kerala Agricultural University RAISE 2026 Student Startup Programme (Grant potential up to ₹5 Lakh).',
      description: 'KAYORA tackles invasive freshwater weed infestation through an autonomous computer vision and harvesting pipeline. Built to safeguard natural water bodies, it combines edge image classification on aquatic biomass density, tracking growth cycles, and directing harvesting without ecological disruption.',
      architecture: [
        'Computer vision classification of aquatic biomass coverage',
        'Autonomous monitoring to optimize biomass harvesting routes',
        'Ecological circular conversion roadmap into bio-products',
        'State board presentation and Stage 2 grant track'
      ],
      technologies: ['Python', 'Computer Vision', 'PyTorch', 'Robotics', 'Environmental IoT'],
      github: 'https://github.com/melizabyiju'
    },
    'refind': {
      index: '02',
      category: 'AI & SEMANTIC RETRIEVAL',
      title: 'ReFind — AI-Powered Semantic Search & Retrieval Engine',
      lead: 'Engineered and live demoed at the 20-hour AI Bhoomi Startup Weekend Hackathon Sprint.',
      description: 'ReFind is a high precision semantic information retrieval pipeline designed to connect associative human memory cues to deep document corpora. Combines Google EmbeddingGemma 2 for dense semantic vectors, cross encoder reranking via Jina, and Gemini 2.5 Flash Lite for context synthesis.',
      architecture: [
        'Dense vector space mapping using EmbeddingGemma 2',
        'High precision reranking layer powered by Jina Reranker',
        'Contextual grounded explanation generator via Gemini 2.5 Flash Lite',
        'Subsecond query latency on technical documentation sets'
      ],
      technologies: ['EmbeddingGemma 2', 'Jina Reranker', 'Gemini 2.5 Flash', 'FastAPI', 'Vector Search'],
      github: 'https://github.com/melizabyiju'
    },
    'riverclean': {
      index: '03',
      category: 'COMPUTER VISION & CIVIC GOVERNANCE',
      title: 'RiverClean — Real-Time River Pollution & Waste Detection',
      lead: 'National Fellowship tier Round 1 selection for the AICTE Anuvadini & Prajjawala Fellowship.',
      description: 'RiverClean applies object detection to surface waters, identifying plastic contaminants, industrial runoffs, and floating organic waste in real time. Designed for municipal civic bodies to receive instantaneous alerts and schedule remediation dispatch.',
      architecture: [
        'Custom YOLOv8 convolutional detector for aquatic debris',
        'Optimized for lightweight edge inference on drone and camera units',
        'REST telemetry API serving real time pollution alerts',
        'Civic sanitation dashboard integration'
      ],
      technologies: ['YOLOv8', 'Python', 'Flask REST API', 'OpenCV', 'Edge AI'],
      github: 'https://github.com/melizabyiju'
    },
    'd-detect': {
      index: '04',
      category: 'HEALTHCARE DEEP LEARNING',
      title: 'D-Detect — Dermatological Lesion Classifier with CNN',
      lead: 'Deep convolutional neural network trained on dermoscopic datasets for multi class skin lesion diagnosis.',
      description: 'D-Detect assists clinical practitioners in early screening of dermatological anomalies. Utilizing transfer learning on the HAM10000 dataset, the model classifies 7 distinct lesion classes, including melanoma and basal cell carcinoma, with risk confidence metrics.',
      architecture: [
        'Convolutional neural network architecture with transfer learning',
        'Balanced data augmentation addressing clinical class imbalances',
        'High validation sensitivity for early stage melanoma diagnosis',
        'Automated diagnostic triage and probability scoring'
      ],
      technologies: ['PyTorch', 'HAM10000', 'Medical AI', 'Computer Vision'],
      github: 'https://github.com/melizabyiju'
    },
    'kalyanam': {
      index: '05',
      category: 'FULL-STACK SYSTEMS',
      title: 'Kalyanam.com — Relational Matrimonial Web Platform',
      lead: 'Full-stack database portal featuring authenticated user profiles and criteria based matching.',
      description: 'A scalable web application designed with third normal form relational database schemas. Provides session authentication, fine grained privacy settings, dynamic profile query filtering, and automated compatibility scores.',
      architecture: [
        'Normalized relational database schema for scalable concurrency',
        'Encrypted credential storage with fine grained profile privacy',
        'Dynamic query matching algorithms on user compatibility preferences',
        'Responsive full stack interface with media asset management'
      ],
      technologies: ['Python Flask', 'MySQL Database', 'REST APIs', 'Full Stack'],
      github: 'https://github.com/melizabyiju'
    }
  };

  const detailBackdrop = document.getElementById('detail-overlay');
  const detailPanel = document.getElementById('detail-panel');
  const detailContent = document.getElementById('detail-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openProjectDetail(projectId) {
    const data = projectData[projectId];
    if (!data || !detailContent) return;

    detailContent.innerHTML = `
      <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--c-marigold); letter-spacing: 0.14em; font-weight: 600; text-transform: uppercase;">
        [${data.index}] ${data.category}
      </div>

      <h2 style="font-family: var(--font-heading); font-size: 2rem; font-weight: 700; color: var(--text-heading); margin: 12px 0 16px; line-height: 1.2;">
        ${data.title}
      </h2>

      <p style="font-size: 1.05rem; font-weight: 600; color: var(--c-marigold); margin-bottom: 24px; line-height: 1.6;">
        ${data.lead}
      </p>

      <div style="border-top: 1px solid var(--border-main); padding-top: 24px; margin-bottom: 24px;">
        <h4 style="font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.12em; color: var(--text-muted); text-transform: uppercase; margin-bottom: 12px;">Overview</h4>
        <p style="font-size: 0.9375rem; line-height: 1.8; color: var(--text-main);">
          ${data.description}
        </p>
      </div>

      <div style="border-top: 1px solid var(--border-main); padding-top: 24px; margin-bottom: 24px;">
        <h4 style="font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.12em; color: var(--text-muted); text-transform: uppercase; margin-bottom: 12px;">System Architecture</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 0.9375rem;">
          ${data.architecture.map(a => `
            <li style="position: relative; padding-left: 20px;">
              <span style="position: absolute; left: 0; color: var(--c-marigold);">✦</span>
              <span>${a}</span>
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
          <span>VIEW GITHUB REPOSITORY</span>
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

  // Close drawers when navigating via side links
  document.querySelectorAll('.side-nav-link').forEach(link => {
    link.addEventListener('click', closeSidePanel);
  });
});
