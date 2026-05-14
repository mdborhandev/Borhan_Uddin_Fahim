(function () {
  const { animate, scroll, inView, stagger, hover, press } = Motion;

  function addHidden() {
    document.querySelectorAll('.hero-greeting, .hero-name, .hero-title, .hero-tagline, .hero-cta-group, .hero-img-wrapper, .hero-social-links, .hero-info-grid, .hero-tech-stack, .service-card, .project-item, .resume-card, .cert-card, .blog-card, .skill-category-box, .section-header h2, .section-header p')
      .forEach(el => el.classList.add('motion-hidden'));
    document.querySelectorAll('.skill-tag')
      .forEach(el => el.classList.add('motion-hidden-left'));
    document.querySelectorAll('.floating-nav .nav-icon')
      .forEach(el => el.classList.add('motion-hidden-left'));
  }

  // Hero entrance timeline
  function initHeroEntrance() {
    animate([
      ['.hero-greeting', { opacity: 1, y: 0 }, { duration: 0.5, easing: 'easeOut' }],
      ['.hero-name', { opacity: 1, y: 0 }, { duration: 0.6, at: '-0.35', easing: 'easeOut' }],
      ['.hero-title', { opacity: 1, y: 0 }, { duration: 0.6, at: '-0.4', easing: 'easeOut' }],
      ['.hero-tagline', { opacity: 1, y: 0 }, { duration: 0.6, at: '-0.4', easing: 'easeOut' }],
      ['.hero-cta-group', { opacity: 1, y: 0 }, { duration: 0.5, at: '-0.3', easing: 'easeOut' }],
      ['.hero-img-wrapper', { opacity: 1, scale: 1 }, { duration: 0.8, at: '-0.5', easing: 'easeOut' }],
      ['.hero-social-links', { opacity: 1, y: 0 }, { duration: 0.5, at: '-0.3', easing: 'easeOut' }],
      ['.hero-info-grid', { opacity: 1, y: 0 }, { duration: 0.6, at: '-0.3', easing: 'easeOut' }],
      ['.hero-tech-stack', { opacity: 1, y: 0 }, { duration: 0.6, at: '-0.3', easing: 'easeOut' }],
    ]);
  }

  // Nav stagger entrance
  function initNavStagger() {
    animate('.floating-nav .nav-icon', { opacity: 1, x: 0 }, {
      delay: stagger(0.06), duration: 0.4, easing: 'easeOut'
    });
  }

  // Continuous orb floating animation
  function initOrbAnimation() {
    document.querySelectorAll('.orb').forEach(orb => {
      const driftX = orb.classList.contains('orb-one') ? 30 : -20;
      const driftY = orb.classList.contains('orb-one') ? -25 : 20;
      animate(orb, { y: [0, driftY, 0], x: [0, driftX, 0] }, {
        duration: 5 + Math.random() * 3,
        repeat: Infinity,
        easing: 'easeInOut',
        direction: 'alternate'
      });
    });
  }

  // Hero image ring continuous rotation
  function initHeroRing() {
    const ring = document.querySelector('.hero-img-ring');
    if (ring) {
      animate(ring, { rotate: 360 }, {
        duration: 12,
        repeat: Infinity,
        easing: 'linear'
      });
    }
  }

  // Section header reveal animation
  function initSectionHeaders() {
    inView('.section-header', (el) => {
      const h2 = el.querySelector('h2');
      const p = el.querySelector('p');
      if (h2) {
        animate(h2, { opacity: 1, y: 0 }, { duration: 0.5, easing: 'easeOut' });
        el.classList.add('reveal');
      }
      if (p) animate(p, { opacity: 1, y: 0 }, { duration: 0.5, delay: 0.15, easing: 'easeOut' });
      return () => { };
    }, { amount: 0.3 });
  }

  // inView scroll-triggered animations
  function initScrollAnimations() {
    inView('#services .row', () => {
      animate('.service-card', { opacity: 1, y: 0 }, {
        delay: stagger(0.12), duration: 0.6, easing: 'easeOut'
      });
      return () => { };
    }, { amount: 0.3 });

    inView('.skill-tag', (el) => {
      animate(el, { opacity: 1, x: 0 }, { duration: 0.4, easing: 'easeOut' });
      return () => { };
    }, { amount: 0.5 });

    inView('.project-item', (el) => {
      animate(el, { opacity: 1, y: 0 }, { duration: 0.5, easing: 'easeOut' });
      return () => { };
    }, { amount: 0.3 });

    inView('.resume-card', (el) => {
      animate(el, { opacity: 1, y: 0 }, { duration: 0.5, easing: 'easeOut' });
      return () => { };
    }, { amount: 0.3 });

    inView('.cert-card', (el) => {
      animate(el, { opacity: 1, y: 0 }, { duration: 0.5, easing: 'easeOut' });
      return () => { };
    }, { amount: 0.3 });

    inView('.blog-card', (el) => {
      animate(el, { opacity: 1, y: 0 }, { duration: 0.5, easing: 'easeOut' });
      return () => { };
    }, { amount: 0.3 });

    inView('.skill-category-box', (el) => {
      animate(el, { opacity: 1, y: 0 }, {
        delay: stagger(0.08), duration: 0.5, easing: 'easeOut'
      });
      return () => { };
    }, { amount: 0.2 });
  }

  // Smooth stat counter with animate()
  function initStatCounters() {
    inView('.project-stat-num', (el) => {
      const target = parseFloat(el.dataset.count);
      const isDecimal = target % 1 !== 0;
      const suffix = el.closest('.project-stats-grid') ? '+' : '';
      animate(0, target, {
        duration: 2,
        easing: 'easeOut',
        onUpdate(latest) {
          el.textContent = isDecimal ? latest.toFixed(1) + suffix : Math.floor(latest) + suffix;
        }
      });
      return () => { };
    }, { amount: 0.5 });
  }

  // Scroll-linked progress
  function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    const backToTopBtn = document.getElementById('backToTop');
    const progressCircle = document.querySelector('.back-to-top-progress');

    scroll(progress => {
      if (progressBar) progressBar.style.width = `${progress * 100}%`;
      if (backToTopBtn) {
        backToTopBtn.classList.toggle('show', window.scrollY > 300);
      }
      if (progressCircle) {
        progressCircle.style.strokeDashoffset = 144.5 - (progress * 144.5);
      }
    });
  }

  // Floating nav highlight with scroll info
  function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    scroll((_, info) => {
      const scrollY = info.y.current;
      let current = '';
      sections.forEach(sec => {
        if (scrollY >= sec.offsetTop - 200) {
          current = sec.getAttribute('id');
        }
      });
      document.querySelectorAll('.floating-nav a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });
    });
  }

  // Hover animations
  function initHoverAnimations() {
    hover('.project-card, .service-card', (el) => {
      const anim = animate(el, { y: -6, scale: 1.02 }, { duration: 0.3, easing: 'easeOut' });
      return () => anim.stop();
    });

    hover('.social-icon', (el) => {
      const anim = animate(el, { scale: 1.2 }, { duration: 0.2, easing: 'easeOut' });
      return () => anim.stop();
    });

    hover('.skill-tag', (el) => {
      const anim = animate(el, { scale: 1.08 }, { duration: 0.2, easing: 'easeOut' });
      return () => anim.stop();
    });

    hover('.btn', (el) => {
      const anim = animate(el, { scale: 1.05 }, { duration: 0.2, easing: 'easeOut' });
      return () => anim.stop();
    });

    hover('.cert-card', (el) => {
      const anim = animate(el, { y: -4 }, { duration: 0.25, easing: 'easeOut' });
      return () => anim.stop();
    });

    hover('.blog-card', (el) => {
      const anim = animate(el, { y: -4 }, { duration: 0.25, easing: 'easeOut' });
      return () => anim.stop();
    });

    hover('.info-card', (el) => {
      const anim = animate(el, { y: -3, scale: 1.02 }, { duration: 0.25, easing: 'easeOut' });
      return () => anim.stop();
    });
  }

  // Press/tap feedback
  function initPressAnimations() {
    press('.btn', (el) => {
      animate(el, { scale: 0.95 }, { duration: 0.1, easing: 'easeOut' });
      return () => animate(el, { scale: 1 }, { duration: 0.15, easing: 'easeOut' });
    });

    press('.project-card, .service-card, .cert-card', (el) => {
      animate(el, { scale: 0.98 }, { duration: 0.1, easing: 'easeOut' });
      return () => animate(el, { scale: 1 }, { duration: 0.15, easing: 'easeOut' });
    });

    press('.social-icon', (el) => {
      animate(el, { scale: 0.9 }, { duration: 0.1 });
      return () => animate(el, { scale: 1 }, { duration: 0.15 });
    });
  }

  // Form input focus animations
  function initFormAnimations() {
    document.querySelectorAll('.contact-form .form-control').forEach(input => {
      input.addEventListener('focus', () => {
        animate(input, { scale: 1.02, boxShadow: '0 0 0 3px var(--accent-glow)' }, { duration: 0.2, easing: 'easeOut' });
      });
      input.addEventListener('blur', () => {
        animate(input, { scale: 1, boxShadow: 'none' }, { duration: 0.2, easing: 'easeOut' });
      });
    });
  }

  // Scroll-driven opacity for hero section background
  function initHeroParallax() {
    const heroBg = document.querySelector('.hero-bg');
    if (!heroBg) return;
    scroll(progress => {
      heroBg.style.transform = `translateY(${progress * 40}px)`;
      heroBg.style.opacity = 0.08 - progress * 0.05;
    });
  }

  addHidden();

  document.addEventListener('DOMContentLoaded', () => {
    initHeroEntrance();
    initNavStagger();
    initOrbAnimation();
    initHeroRing();
    initSectionHeaders();
    initScrollAnimations();
    initStatCounters();
    initScrollProgress();
    initHoverAnimations();
    initPressAnimations();
    initFormAnimations();
  });

  window.addEventListener('load', () => {
    initNavHighlight();
    initHeroParallax();
  });
})();