// ==========================================================================
// Interactive Logic for Meliza Byiju Portfolio
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
      themeIcon.className = theme === 'dark' ? 'ph ph-sun' : 'ph ph-moon';
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
  // 2. Mobile Navigation Toggle
  // --------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
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

      // Calculate progress between entering viewport bottom and center
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
      // Ignore if clicking link or external action
      if (e.target.closest('a') || e.target.closest('button')) {
        return;
      }

      const isExpanded = card.classList.contains('is-expanded');
      
      // Close other cards for clean accordion behaviour
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
  // 7. SWARM REBUILD EXTENSION (Autonomous Agent Multi-Cursor Simulation)
  // --------------------------------------------------------------------------
  const swarmContainer = document.getElementById('swarm-canvas-container');
  const inspectBox = document.getElementById('swarmInspectBox');
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
    // 6 Autonomous AI Agents with distinct roles
    const agentsData = [
      { id: 'agent-01', name: 'Agent 01', role: 'SE4AI Parser', color: '#EAAA00', action: 'parsing 2,500 reqs' },
      { id: 'agent-02', name: 'Agent 02', role: 'YOLOv8 Tracker', color: '#EC4899', action: 'evaluating mAP@0.5' },
      { id: 'agent-03', name: 'Agent 03', role: 'Vector Search', color: '#06B6D4', action: 'reranking Jina embeddings' },
      { id: 'agent-04', name: 'Agent 04', role: 'Merit Auditor', color: '#10B981', action: 'validating 10.0 CGPA' },
      { id: 'agent-05', name: 'Agent 05', role: 'RAISE 2026 Scout', color: '#F59E0B', action: 'calculating ₹5L grant track' },
      { id: 'agent-06', name: 'Agent 06', role: 'DOM Rebuilder', color: '#8B5CF6', action: 'optimizing layout layers' }
    ];

    let agents = [];
    let isSwarmRunning = true;
    let speedMultiplier = 1;
    let currentLayers = 142;
    const totalLayers = 364;

    // Create Agent DOM Elements
    agentsData.forEach((data, index) => {
      const el = document.createElement('div');
      el.className = 'swarm-agent-cursor';
      el.innerHTML = `
        <svg class="swarm-cursor-arrow" viewBox="0 0 24 24" fill="${data.color}">
          <path d="M4 2l16 11.5-7.5 1.5-4 7.5L4 2z" stroke="#FFFFFF" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>
        <div class="swarm-agent-badge" style="background: ${data.color}">
          <span>${data.role}</span>
          <span class="swarm-agent-action">${data.action}</span>
        </div>
      `;
      swarmContainer.appendChild(el);

      agents.push({
        ...data,
        el,
        x: Math.random() * (window.innerWidth - 200) + 50,
        y: Math.random() * (window.innerHeight - 200) + 50,
        targetX: Math.random() * (window.innerWidth - 200) + 50,
        targetY: Math.random() * (window.innerHeight - 200) + 50,
        dwellTimer: Math.floor(Math.random() * 80) + 20,
        currentTargetElement: null
      });
    });

    // Selectable inspection targets across the page
    function getTargets() {
      return document.querySelectorAll('h1, h2, .project-card, .service-card, .metric-box, .corner-tag, .tagline-word');
    }

    // Animation Loop
    function updateSwarm() {
      if (!isSwarmRunning) {
        requestAnimationFrame(updateSwarm);
        return;
      }

      const targets = getTargets();

      agents.forEach((agent, i) => {
        // Distance to target
        const dx = agent.targetX - agent.x;
        const dy = agent.targetY - agent.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 8) {
          // Move towards target smoothly
          const speed = (2.4 + (i * 0.3)) * speedMultiplier;
          agent.x += (dx / dist) * Math.min(dist, speed);
          agent.y += (dy / dist) * Math.min(dist, speed);
        } else {
          // Arrived at target, dwell and inspect
          agent.dwellTimer--;
          if (agent.dwellTimer <= 0) {
            // Pick a new random target from visible elements
            if (targets.length > 0) {
              const randomTarget = targets[Math.floor(Math.random() * targets.length)];
              const rect = randomTarget.getBoundingClientRect();
              agent.targetX = rect.left + (Math.random() * rect.width);
              agent.targetY = rect.top + (Math.random() * rect.height);
              agent.currentTargetElement = randomTarget;

              // Lead agent triggers visual inspection bounding box and laser guidelines
              if (i === 0 && inspectBox && laserH && laserV) {
                inspectBox.style.top = `${rect.top - 4}px`;
                inspectBox.style.left = `${rect.left - 4}px`;
                inspectBox.style.width = `${rect.width + 8}px`;
                inspectBox.style.height = `${rect.height + 8}px`;
                inspectBox.classList.add('is-active');

                laserH.style.top = `${rect.top + (rect.height / 2)}px`;
                laserV.style.left = `${rect.left + (rect.width / 2)}px`;
                laserH.classList.add('is-active');
                laserV.classList.add('is-active');

                setTimeout(() => {
                  inspectBox.classList.remove('is-active');
                  laserH.classList.remove('is-active');
                  laserV.classList.remove('is-active');
                }, 1400);

                // Increment layer counter progressively
                if (currentLayers < totalLayers) {
                  currentLayers = Math.min(totalLayers, currentLayers + 1);
                  if (layerCounterEl) {
                    layerCounterEl.textContent = `${currentLayers} / ${totalLayers} layers`;
                  }
                }
              }
            } else {
              agent.targetX = Math.random() * (window.innerWidth - 100) + 50;
              agent.targetY = Math.random() * (window.innerHeight - 100) + 50;
            }
            agent.dwellTimer = Math.floor(Math.random() * 100) + 40;
          }
        }

        // Apply Position via hardware-accelerated transform
        agent.el.style.transform = `translate3d(${agent.x}px, ${agent.y}px, 0)`;
      });

      requestAnimationFrame(updateSwarm);
    }

    requestAnimationFrame(updateSwarm);

    // Dock Button: Toggle Pause / Resume
    if (swarmModeBtn) {
      swarmModeBtn.addEventListener('click', () => {
        isSwarmRunning = !isSwarmRunning;
        swarmModeBtn.textContent = isSwarmRunning ? 'Touring' : 'Paused';
        swarmModeBtn.style.color = isSwarmRunning ? '#EAAA00' : '#CBD5E1';
      });
    }

    // Dock Button: Toggle Speed (1x -> 2x -> 3x)
    if (swarmSpeedBtn) {
      swarmSpeedBtn.addEventListener('click', () => {
        if (speedMultiplier === 1) speedMultiplier = 2;
        else if (speedMultiplier === 2) speedMultiplier = 3;
        else speedMultiplier = 1;
        swarmSpeedBtn.textContent = `${speedMultiplier}x`;
      });
    }

    // Dock Button: Pulse Rebuild Cascade
    if (swarmRebuildBtn) {
      swarmRebuildBtn.addEventListener('click', () => {
        // Flash rebuild pulse across the page
        currentLayers = Math.min(totalLayers, currentLayers + 25);
        if (layerCounterEl) {
          layerCounterEl.textContent = `${currentLayers} / ${totalLayers} layers`;
        }
        
        // Converge agents towards center
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        agents.forEach((ag, idx) => {
          ag.targetX = centerX + ((idx - 2.5) * 60);
          ag.targetY = centerY + ((idx % 2 === 0 ? 1 : -1) * 40);
          ag.dwellTimer = 90;
        });

        showToast('Swarm Rebuild: Re-indexing 2,500 requirements and model layers...');
      });
    }

    // Dock Button: Minimize Dock
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
