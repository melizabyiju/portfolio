// ==========================================================================
// JavaScript for Meliza Mariya Byiju Portfolio
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
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

  // 2. Project Filtering
  const filterButtons = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
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

  // 3. Contact Form Submission handling (Opens mail client with populated content)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const message = document.getElementById('senderMessage').value.trim();

      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

      // Open mail client
      window.location.href = `mailto:melizabyiju@gmail.com?subject=${subject}&body=${body}`;

      // Show confirmation toast
      showToast('Opening your email client to send message to Meliza...');
    });
  }

  // 4. Toast Notification helper
  function showToast(text) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-aubergine text-white text-xs font-semibold shadow-2xl border border-marigold/30 flex items-center gap-3 animate-fade-in';
    toast.innerHTML = `<span class="w-2 h-2 rounded-full bg-marigold"></span><span>${text}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.4s ease';
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  // Re-run Lucide icon parser
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
