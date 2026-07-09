/* =========================================================
   DeepAtom — Scroll reveal, counters & hero background
   ========================================================= */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length) {
    if (prefersReducedMotion) {
      revealEls.forEach((el) => el.classList.add('in-view'));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
      );

      revealEls.forEach((el) => revealObserver.observe(el));
    }
  }

  /* ---------- Animated stat counters ---------- */
  const counters = document.querySelectorAll('[data-count]');

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals, 10) : 0;
    const duration = 1400;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString('en-US');
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = decimals ? target.toFixed(decimals) : target.toLocaleString('en-US');
    };

    requestAnimationFrame(step);
  };

  if (counters.length) {
    if (prefersReducedMotion) {
      counters.forEach((el) => {
        const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals, 10) : 0;
        el.textContent = decimals ? parseFloat(el.dataset.count).toFixed(decimals) : el.dataset.count;
      });
    } else {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      counters.forEach((el) => counterObserver.observe(el));
    }
  }

  /* ---------- Hero background: connected node grid ---------- */
  const canvas = document.querySelector('.hero-canvas');
  if (!canvas || prefersReducedMotion) return;

  const ctx = canvas.getContext('2d');
  let width, height, nodes, animationFrame;
  const NODE_COUNT_DIVISOR = 14000; // higher = fewer nodes

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = canvas.width = rect.width * window.devicePixelRatio;
    height = canvas.height = rect.height * window.devicePixelRatio;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    initNodes();
  }

  function initNodes() {
    const count = Math.min(90, Math.floor((width * height) / (NODE_COUNT_DIVISOR * window.devicePixelRatio * window.devicePixelRatio)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35 * window.devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.35 * window.devicePixelRatio,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const maxDist = 160 * window.devicePixelRatio;

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;

      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;

      for (let j = i + 1; j < nodes.length; j++) {
        const o = nodes[j];
        const dx = n.x - o.x;
        const dy = n.y - o.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const opacity = (1 - dist / maxDist) * 0.35;
          ctx.strokeStyle = 'rgba(46, 160, 67, ' + opacity + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(o.x, o.y);
          ctx.stroke();
        }
      }

      ctx.fillStyle = 'rgba(88, 166, 255, 0.65)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, 1.6 * window.devicePixelRatio, 0, Math.PI * 2);
      ctx.fill();
    }

    animationFrame = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animationFrame);
    resize();
    draw();
  });

  resize();
  draw();
})();
