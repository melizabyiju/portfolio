// ==========================================================================
// JavaScript for Meliza Mariya Byiju Portfolio
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
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

  // 2. Project Accordion Expansion (Expand content on click only)
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // If user clicked an external link or anchor inside the card, do not toggle accordion
      if (e.target.closest('a') || e.target.closest('button.external-action')) {
        return;
      }

      const isExpanded = card.classList.contains('is-expanded');
      
      // Optional: If you want accordion to close others, uncomment:
      // projectCards.forEach(c => c.classList.remove('is-expanded'));

      if (isExpanded) {
        card.classList.remove('is-expanded');
        const triggerText = card.querySelector('.expand-text');
        if (triggerText) triggerText.textContent = 'View Details';
      } else {
        card.classList.add('is-expanded');
        const triggerText = card.querySelector('.expand-text');
        if (triggerText) triggerText.textContent = 'Collapse Details';
      }

      // Re-trigger icon updates if needed
      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  });

  // 3. Project Filter Buttons
  const filterButtons = document.querySelectorAll('.project-filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();

      // Remove active class from all buttons
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.classList.remove('bg-aubergine', 'text-white');
        b.classList.add('bg-white', 'text-slate-600');
      });

      // Add active state to clicked button
      btn.classList.add('active');
      btn.classList.remove('bg-white', 'text-slate-600');
      btn.classList.add('bg-aubergine', 'text-white');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('hidden-card');
          card.style.display = 'flex';
        } else {
          card.classList.add('hidden-card');
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Contact Form Submission (Mailto Handler)
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

      showToast('Opening your mail client to reach Meliza...');
    });
  }

  // 5. Toast Notification Helper
  function showToast(text) {
    const existing = document.querySelector('.portfolio-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'portfolio-toast fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-aubergine text-white text-xs font-semibold shadow-2xl border border-marigold/40 flex items-center gap-3 transition-opacity duration-300';
    toast.innerHTML = `<span class="w-2 h-2 rounded-full bg-marigold animate-ping"></span><span>${text}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
