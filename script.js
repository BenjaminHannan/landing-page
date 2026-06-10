// Scroll glue, kept deliberately light:
//   - reading progress bar
//   - gentle scene reveals on scroll
//   - stat counters that animate up when their scene reveals
//   - chapter rail + nav active-section highlighting
//   - live-measured header height for the sticky chapter heads
// Honors prefers-reduced-motion: everything degrades to instant-on.

(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ----- 1. Live-measure header height so the sticky section heads sit flush
  // against the bottom of the site-header (no visible slit).
  const header = document.querySelector('.site-header');
  function syncHeaderHeight() {
    if (!header) return;
    const h = header.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--header-h', Math.floor(h) + 'px');
  }
  if (header) {
    syncHeaderHeight();
    if ('ResizeObserver' in window) {
      new ResizeObserver(syncHeaderHeight).observe(header);
    }
    window.addEventListener('load', syncHeaderHeight);
  }

  // ----- 2. Reading progress bar -----
  const progressFill = document.querySelector('.progress-fill');
  function updateProgress() {
    if (!progressFill) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    progressFill.style.width = pct.toFixed(2) + '%';
  }

  // ----- 3. Scene reveals on scroll -----
  // Each .scene gets `.is-revealed` when it enters the viewport.
  const scenes = Array.from(document.querySelectorAll('.scene, .section-heading'));
  if ('IntersectionObserver' in window && !prefersReduced) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            // Trigger counters inside this scene if any
            entry.target.querySelectorAll('.stat-num[data-count]').forEach(startCounter);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );
    scenes.forEach((s) => io.observe(s));
  } else {
    // Reduced motion or no IO: everything visible, counters set to final values.
    scenes.forEach((s) => s.classList.add('is-revealed'));
    document.querySelectorAll('.stat-num[data-count]').forEach((el) => {
      finalizeCounter(el);
    });
  }

  // ----- 4. Stat counters -----
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function formatNumber(value, decimals, suffix) {
    const fixed = value.toFixed(decimals);
    // For integers >= 1000, add comma separator.
    if (decimals === 0 && Math.abs(value) >= 1000) {
      const parts = fixed.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.') + (suffix || '');
    }
    return fixed + (suffix || '');
  }

  function startCounter(el) {
    if (el.dataset.counted === '1') return;
    el.dataset.counted = '1';
    const target = parseFloat(el.getAttribute('data-count'));
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1400;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const value = target * eased;
      el.textContent = formatNumber(value, decimals, suffix);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = formatNumber(target, decimals, suffix);
    }
    requestAnimationFrame(step);
  }

  function finalizeCounter(el) {
    if (el.dataset.counted === '1') return;
    el.dataset.counted = '1';
    const target = parseFloat(el.getAttribute('data-count'));
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    const suffix = el.getAttribute('data-suffix') || '';
    el.textContent = formatNumber(target, decimals, suffix);
  }

  // ----- 5. Chapter rail + nav active-section -----
  const railItems = Array.from(document.querySelectorAll('.chapter-rail li'));
  const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
  const sections = railItems
    .map((li) => {
      const id = li.getAttribute('data-target');
      const el = id === 'top' ? document.querySelector('main#top .hero') : document.getElementById(id);
      return el ? { id, el, li } : null;
    })
    .filter(Boolean);

  function updateActiveSection() {
    const mid = window.scrollY + window.innerHeight * 0.35;
    let active = sections[0];
    for (const s of sections) {
      const top = s.el.getBoundingClientRect().top + window.scrollY;
      if (mid >= top) active = s;
    }
    if (!active) return;
    railItems.forEach((li) => li.classList.toggle('is-active', li === active.li));
    navLinks.forEach((a) => {
      const href = a.getAttribute('href') || '';
      a.classList.toggle('is-active', href === '#' + active.id);
    });
  }

  // ----- 6. Scroll handler (throttled via rAF) -----
  let scrollScheduled = false;
  function onScroll() {
    if (scrollScheduled) return;
    scrollScheduled = true;
    requestAnimationFrame(() => {
      updateProgress();
      updateActiveSection();
      scrollScheduled = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  // Initial paint
  updateProgress();
  updateActiveSection();
})();
