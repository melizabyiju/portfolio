// ==========================================================================
// Interactive Logic & Swarm Rebuild for Meliza Byiju Portfolio
// Conforms strictly to landing-page-design specifications
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Theme Toggle (Light / Dark Mode)
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const storedTheme = localStorage.getItem('meliza_portfolio_theme') || 'light';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('meliza_portfolio_theme', theme);
    if (themeIcon) {
      themeIcon.className = theme === 'dark' ? 'ph ph-sun text-base' : 'ph ph-moon text-base';
    }
  }

  applyTheme(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  // --------------------------------------------------------------------------
  // 2. Mobile Navigation Toggle & Drawer Dismissal
  // --------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. Tagline Word-by-Word Scroll Reveal (Mandatory B11)
  // --------------------------------------------------------------------------
  const taglineEl = document.getElementById('taglineReveal');
  if (taglineEl) {
    const rawText = taglineEl.textContent.trim();
    const words = rawText.split(/\s+/);
    taglineEl.innerHTML = words.map(w => `<span class="tagline-word">${w}</span>`).join(' ');

    const wordSpans = taglineEl.querySelectorAll('.tagline-word');
    let ticking = false;

    function checkTaglineScroll() {
      const rect = taglineEl.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.9;
      const end = windowHeight * 0.3;
      const total = start - end;
      const current = start - rect.top;
      const progress = Math.min(Math.max(current / total, 0), 1);

      const wordsToLight = Math.floor(progress * wordSpans.length);
      wordSpans.forEach((span, idx) => {
        if (idx <= wordsToLight) {
          span.classList.add('is-active');
        } else {
          span.classList.remove('is-active');
        }
      });

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(checkTaglineScroll);
        ticking = true;
      }
    }, { passive: true });

    checkTaglineScroll();
  }

  // --------------------------------------------------------------------------
  // 4. Project Accordion Cards (Click to Expand / Collapse)
  // --------------------------------------------------------------------------
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a') || e.target.closest('button')) {
        return;
      }

      const isExpanded = card.classList.contains('is-expanded');
      projectCards.forEach(c => {
        c.classList.remove('is-expanded');
        const txt = c.querySelector('.expand-text');
        if (txt) txt.textContent = 'View Details';
      });

      if (!isExpanded) {
        card.classList.add('is-expanded');
        const txt = card.querySelector('.expand-text');
        if (txt) txt.textContent = 'Collapse Details';
      }
    });
  });

  // Project Category Filters
  const filterButtons = document.querySelectorAll('.project-filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      filterButtons.forEach(b => {
        b.classList.remove('active', 'bg-aubergine', 'text-white');
        b.classList.add('bg-white', 'text-slate-600');
      });

      btn.classList.add('active', 'bg-aubergine', 'text-white');
      btn.classList.remove('bg-white', 'text-slate-600');

      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category') || '';
        if (filter === 'all' || cat.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 5. FAQ Accordions
  // --------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        faqItems.forEach(f => f.classList.remove('is-open'));
        if (!isOpen) {
          item.classList.add('is-open');
        }
      });
    }
  });

  // --------------------------------------------------------------------------
  // 6. Contact Form Submission
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName')?.value.trim() || 'Visitor';
      const email = document.getElementById('senderEmail')?.value.trim() || '';
      const message = document.getElementById('senderMessage')?.value.trim() || '';

      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

      window.location.href = `mailto:melizabyiju@gmail.com?subject=${subject}&body=${body}`;
      showToast('Opening your email client to reach Meliza...');
    });
  }

  function showToast(text) {
    const existing = document.querySelector('.portfolio-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'portfolio-toast fixed bottom-20 right-6 z-50 px-5 py-3 rounded-2xl bg-aubergine text-white text-xs font-semibold shadow-2xl border border-marigold/40 flex items-center gap-3 transition-opacity duration-300';
    toast.innerHTML = `<span class="w-2 h-2 rounded-full bg-marigold"></span><span>${text}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  // --------------------------------------------------------------------------
  // 7. SWARM REBUILD EXTENSION (Figma / Autonomous Cursor Rebuild Engine)
  // --------------------------------------------------------------------------
  const swarmContainer = document.getElementById('swarm-canvas-container');
  const selectionBox = document.getElementById('editorSelectionBox');
  const laserH = document.getElementById('swarmLaserH');
  const laserV = document.getElementById('swarmLaserV');
  const layerCounterEl = document.getElementById('swarmLayerCounter');
  const swarmModeBtn = document.getElementById('swarmModeBtn');
  const swarmSpeedBtn = document.getElementById('swarmSpeedBtn');
  const swarmRebuildBtn = document.getElementById('swarmRebuildBtn');
  const swarmCloseBtn = document.getElementById('swarmCloseBtn');
  const swarmDock = document.getElementById('swarmDock');
  const swarmRestorePill = document.getElementById('swarmRestorePill');

  if (swarmContainer) {
    // 5 Sleek Figma-style Cursors
    const agentsData = [
      { id: 'agent-01', name: 'Dev', color: '#06B6D4' },
      { id: 'agent-02', name: 'Lorna', color: '#EC4899' },
      { id: 'agent-03', name: 'AI-1', color: '#EAAA00' },
      { id: 'agent-04', name: 'AI-2', color: '#10B981' },
      { id: 'agent-05', name: 'Arch', color: '#8B5CF6' }
    ];

    let agents = [];
    let isSwarmRunning = true;
    let speedMultiplier = 1;
    let currentLayers = 364;
    const totalLayers = 364;
    let isBuilding = false;

    // Create Agent DOM Elements (Sleek Figma style with tiny name badge)
    agentsData.forEach((data, index) => {
      const el = document.createElement('div');
      el.className = 'swarm-agent-cursor';
      el.innerHTML = `
        <svg class="swarm-cursor-arrow" viewBox="0 0 24 24" fill="${data.color}">
          <path d="M4 2l16 11.5-7.5 1.5-4 7.5L4 2z" stroke="#FFFFFF" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>
        <div class="swarm-agent-badge" style="background: ${data.color}">
          <span>${data.name}</span>
        </div>
      `;
      swarmContainer.appendChild(el);

      agents.push({
        ...data,
        el,
        x: Math.random() * (window.innerWidth - 100) + 50,
        y: Math.random() * (window.innerHeight - 100) + 50,
        targetX: Math.random() * (window.innerWidth - 100) + 50,
        targetY: Math.random() * (window.innerHeight - 100) + 50,
        dwellTimer: Math.floor(Math.random() * 80) + 20
      });
    });

    // Target elements to inspect in Touring mode
    function getTargets() {
      return document.querySelectorAll('.hero-headline, .hero-portrait-frame, .service-card, .project-card, .corner-tag, .stat-counter');
    }

    // High-fidelity "Cursor Build" Sequence (Matches Video frame-by-frame)
    function triggerCursorBuild() {
      if (isBuilding) return;
      isBuilding = true;
      document.body.classList.add('is-building');
      if (swarmModeBtn) swarmModeBtn.textContent = 'Building...';

      let layerCount = 12;
      if (layerCounterEl) layerCounterEl.textContent = `${layerCount} / ${totalLayers} layers`;

      const heroText = document.querySelector('.hero-headline');
      const heroFrame = document.querySelector('.hero-portrait-frame');
      const ctaRow = document.querySelector('.hero-cta-row');
      const badgeStamp = document.querySelector('.hero-rotating-stamp');

      // Step 1: Center convergence
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      agents.forEach((ag, idx) => {
        ag.targetX = cx + ((idx - 2) * 40);
        ag.targetY = cy + (Math.sin(idx) * 30);
      });

      // Step 2: Agent 1 & Agent 2 fly to assemble Hero Headline (at 600ms)
      setTimeout(() => {
        if (heroText) {
          const rect = heroText.getBoundingClientRect();
          agents[0].targetX = rect.left + 20;
          agents[0].targetY = rect.top + 30;
          agents[1].targetX = rect.right - 20;
          agents[1].targetY = rect.bottom - 10;

          snapSelectionBox(rect);
          showLasers(rect.left + rect.width / 2, rect.top + rect.height / 2);
          
          layerCount = 94;
          if (layerCounterEl) layerCounterEl.textContent = `${layerCount} / ${totalLayers} layers`;
        }
      }, 600);

      // Step 3: Agent 3 & Agent 4 fly to drag & position Portrait Frame (at 1600ms)
      setTimeout(() => {
        if (heroFrame) {
          const rect = heroFrame.getBoundingClientRect();
          agents[2].targetX = rect.left + 15;
          agents[2].targetY = rect.top + 25;
          agents[3].targetX = rect.right - 10;
          agents[3].targetY = rect.bottom - 15;

          snapSelectionBox(rect);
          showLasers(rect.left + rect.width / 2, rect.top + rect.height / 2);

          layerCount = 210;
          if (layerCounterEl) layerCounterEl.textContent = `${layerCount} / ${totalLayers} layers`;
        }
      }, 1600);

      // Step 4: Agent 5 snaps the CTAs and Stamp Badge (at 2600ms)
      setTimeout(() => {
        if (badgeStamp) {
          const rect = badgeStamp.getBoundingClientRect();
          agents[4].targetX = rect.left + 20;
          agents[4].targetY = rect.top + 20;
          snapSelectionBox(rect);
          showLasers(rect.left + rect.width / 2, rect.top + rect.height / 2);
        }
        layerCount = 312;
        if (layerCounterEl) layerCounterEl.textContent = `${layerCount} / ${totalLayers} layers`;
      }, 2600);

      // Step 5: Final Lock & Reveal (at 3600ms)
      setTimeout(() => {
        layerCount = 364;
        if (layerCounterEl) layerCounterEl.textContent = `${layerCount} / ${totalLayers} layers`;
        if (selectionBox) selectionBox.classList.remove('is-active');
        if (laserH) laserH.classList.remove('is-active');
        if (laserV) laserV.classList.remove('is-active');

        document.body.classList.remove('is-building');
        isBuilding = false;
        if (swarmModeBtn) swarmModeBtn.textContent = 'Touring';

        showToast('Swarm Rebuild Complete: All 364 layers compiled and locked.');
      }, 3600);
    }

    function snapSelectionBox(rect) {
      if (!selectionBox) return;
      selectionBox.style.top = `${rect.top - 4}px`;
      selectionBox.style.left = `${rect.left - 4}px`;
      selectionBox.style.width = `${rect.width + 8}px`;
      selectionBox.style.height = `${rect.height + 8}px`;
      selectionBox.classList.add('is-active');
    }

    function showLasers(x, y) {
      if (laserH && laserV) {
        laserH.style.top = `${y}px`;
        laserV.style.left = `${x}px`;
        laserH.classList.add('is-active');
        laserV.classList.add('is-active');
      }
    }

    // Main Swarm Animation Loop
    function updateSwarm() {
      if (!isSwarmRunning) {
        requestAnimationFrame(updateSwarm);
        return;
      }

      const targets = getTargets();

      agents.forEach((agent, i) => {
        const dx = agent.targetX - agent.x;
        const dy = agent.targetY - agent.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 6) {
          const speed = (2.6 + (i * 0.25)) * speedMultiplier;
          agent.x += (dx / dist) * Math.min(dist, speed);
          agent.y += (dy / dist) * Math.min(dist, speed);
        } else if (!isBuilding) {
          // Autonomous roaming when not building
          agent.dwellTimer--;
          if (agent.dwellTimer <= 0) {
            if (targets.length > 0 && Math.random() > 0.4) {
              const randomTarget = targets[Math.floor(Math.random() * targets.length)];
              const rect = randomTarget.getBoundingClientRect();
              agent.targetX = rect.left + (Math.random() * rect.width);
              agent.targetY = rect.top + (Math.random() * rect.height);

              // Lead agent 0 occasionally highlights element with selection box
              if (i === 0 && selectionBox) {
                snapSelectionBox(rect);
                setTimeout(() => selectionBox.classList.remove('is-active'), 1200);
              }
            } else {
              agent.targetX = Math.random() * (window.innerWidth - 100) + 50;
              agent.targetY = Math.random() * (window.innerHeight - 100) + 50;
            }
            agent.dwellTimer = Math.floor(Math.random() * 90) + 40;
          }
        }

        agent.el.style.transform = `translate3d(${agent.x}px, ${agent.y}px, 0)`;
      });

      requestAnimationFrame(updateSwarm);
    }

    requestAnimationFrame(updateSwarm);

    // Initial build trigger on first load
    setTimeout(triggerCursorBuild, 400);

    // Dock Controls
    if (swarmRebuildBtn) {
      swarmRebuildBtn.addEventListener('click', triggerCursorBuild);
    }

    if (swarmModeBtn) {
      swarmModeBtn.addEventListener('click', () => {
        if (isBuilding) return;
        isSwarmRunning = !isSwarmRunning;
        swarmModeBtn.textContent = isSwarmRunning ? 'Touring' : 'Paused';
        swarmModeBtn.style.color = isSwarmRunning ? '#EAAA00' : '#CBD5E1';
      });
    }

    if (swarmSpeedBtn) {
      swarmSpeedBtn.addEventListener('click', () => {
        if (speedMultiplier === 1) speedMultiplier = 2;
        else if (speedMultiplier === 2) speedMultiplier = 3;
        else speedMultiplier = 1;
        swarmSpeedBtn.textContent = `${speedMultiplier}x`;
      });
    }

    if (swarmCloseBtn && swarmDock && swarmRestorePill) {
      swarmCloseBtn.addEventListener('click', () => {
        swarmDock.classList.add('is-minimized');
        swarmRestorePill.style.display = 'inline-flex';
      });

      swarmRestorePill.addEventListener('click', () => {
        swarmDock.classList.remove('is-minimized');
        swarmRestorePill.style.display = 'none';
      });
    }
  }
});
