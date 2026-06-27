/* ============================================================
   AGRO PROCESSOR WEBSITE — MAIN JAVASCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ——— NAVBAR SCROLL EFFECT ——— */
  const navbar = document.querySelector('.navbar');
  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
    backToTop.classList.toggle('visible', window.scrollY > 400);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ——— HAMBURGER MENU ——— */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav  = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
    // Close on link click
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }

  /* ——— ACTIVE NAV LINK ——— */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  /* ——— REVEAL ON SCROLL (Intersection Observer) ——— */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  /* ——— ANIMATED COUNTERS ——— */
  const counterEls = document.querySelectorAll('[data-count]');
  if (counterEls.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counterEls.forEach(el => counterObserver.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const start = performance.now();
    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.floor(ease * target) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  /* ——— HERO BACKGROUND ——— */
  // Crossfading fixed-background layers: transitions without removing fixed parallax.
  const heroLayers = document.querySelectorAll('.hero-bg-layer');
  if (heroLayers.length >= 2) {
    const images = [
      'images/hero-bg.jpg',
      'images/Hero-bg 2.jpg',
      'images/Hero-bg 3.jpg',
      'images/Hero-bg 4.jpg'
    ];
    let idx = 0;
    let active = 0;

    heroLayers[0].style.backgroundImage = `url('${images[0]}')`;
    heroLayers[0].classList.add('visible');
    heroLayers[1].style.backgroundImage = `url('${images[1 % images.length]}')`;

    setInterval(() => {
      const nextIdx = (idx + 1) % images.length;
      const nextLayer = heroLayers[(active + 1) % heroLayers.length];
      nextLayer.style.backgroundImage = `url('${images[nextIdx]}')`;
      heroLayers[active].classList.remove('visible');
      nextLayer.classList.add('visible');
      active = (active + 1) % heroLayers.length;
      idx = nextIdx;
    }, 4000);
  } else {
    const hb = document.querySelector('.hero-bg');
    if (hb) hb.classList.add('loaded');
  }

  /* ——— BACK TO TOP BUTTON ——— */
  const backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.setAttribute('aria-label', 'Back to top');
  backToTop.innerHTML = `<svg viewBox="0 0 24 24" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`;
  document.body.appendChild(backToTop);
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ——— CONTACT FORM SUBMISSION ——— */
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      const successMsg = document.querySelector('.form-success');
      const originalText = btn.textContent;

      btn.textContent = 'Sending…';
      btn.disabled = true;

      try {
        const response = await fetch(contactForm.action, {
          method: contactForm.method,
          body: new FormData(contactForm),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          contactForm.reset();
          contactForm.style.display = 'none';
          if (successMsg) successMsg.style.display = 'block';
        } else {
          throw new Error('Submission failed');
        }
      } catch (error) {
        btn.textContent = originalText;
        btn.disabled = false;
        alert('Sorry, your message could not be sent right now. Please try again later.');
      }
    });
  }

  /* ——— NEWSLETTER FORM ——— */
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      const btn   = form.querySelector('button');
      if (!input.value.trim()) return;
      btn.textContent = '✓';
      btn.style.background = '#40916c';
      input.value = '';
      setTimeout(() => {
        btn.textContent = 'Subscribe';
        btn.style.background = '';
      }, 2500);
    });
  });

  /* ——— PRODUCTS FILTER (products page) ——— */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card, .product-full-card');
  const productsGrid = document.querySelector('.products-grid, .products-full-grid');
  if (filterBtns.length && productCards.length) {
    const updateProducts = (filter) => {
      const targetCard = filter === 'all'
        ? null
        : Array.from(productCards).find(card => card.getAttribute('data-category') === filter);

      productCards.forEach(card => {
        const match = filter === 'all' || card.getAttribute('data-category') === filter;
        card.style.display = match ? '' : 'none';
      });

      const scrollTarget = filter === 'all' ? productsGrid || productCards[0].parentElement : targetCard;
      if (scrollTarget) {
        scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        updateProducts(filter);
      });
    });
  }

  /* ——— TICKER DUPLICATION (seamless loop) ——— */
  const ticker = document.querySelector('.ticker-track');
  if (ticker) {
    const clone = ticker.cloneNode(true);
    ticker.parentNode.appendChild(clone);
  }

  /* ——— SMOOTH ANCHOR LINKS ——— */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ——— ADD REVEAL CLASS TO ELEMENTS ——— */
  // Auto-add reveal class to key elements if not already applied
  const autoReveal = [
    '.product-card', '.impact-card',
    '.mvv-card', '.benefit-card', '.process-step',
    '.product-full-card', '.contact-detail', '.footer-col'
  ];
  autoReveal.forEach((selector, sIndex) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
        el.style.transitionDelay = `${(i % 4) * 0.1}s`;
      }
    });
  });

  // Re-observe after auto-adding
  const newRevealEls = document.querySelectorAll('.reveal:not(.visible)');
  if (newRevealEls.length) {
    const obs2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs2.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    newRevealEls.forEach(el => obs2.observe(el));
  }

});
