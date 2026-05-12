/**
 * CodyMaster — Component Injection
 * Fetches header.html + footer.html and injects them into mount points.
 * Active nav state is driven by <body data-page="...">
 */
(function () {
  'use strict';

  const BASE = (function () {
    const scripts = document.querySelectorAll('script[src]');
    for (const s of scripts) {
      const m = s.src.match(/(.*\/assets\/js\/)/);
      if (m) return m[1].replace('/js/', '/');
    }
    return '/assets/';
  })();

  const PAGE = document.body.dataset.page || '';

  // Maps page IDs to data-nav values for active highlighting
  const PAGE_NAV_MAP = {
    why:        'why',
    what:       'what',
    who:        'who',
    when:       'when',
    where:      'where',
    how:        'how',
    home:       '',
    story:      'story',
    vibe:       'vibe',
    skills:     'skills',
    methodology:'methodology',
    compare:    'compare',
  };

  function applyActiveNav(root) {
    const active = PAGE_NAV_MAP[PAGE];
    if (!active) return;
    root.querySelectorAll('[data-nav]').forEach(function (el) {
      if (el.dataset.nav === active) el.classList.add('active');
    });
  }

  function initHamburger() {
    const btn = document.querySelector('[data-hamburger]');
    const menu = document.querySelector('[data-mobile-menu]');
    if (!btn || !menu) return;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.toggle('open');
    });
    document.addEventListener('click', function () {
      menu.classList.remove('open');
    });
  }

  function initMobileAccordion() {
    document.querySelectorAll('[data-mobile-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var sub = btn.nextElementSibling;
        if (!sub) return;
        btn.classList.toggle('open');
        sub.classList.toggle('open');
      });
    });
  }

  function initScrollProgress() {
    const bar = document.getElementById('cm-progress-bar');
    if (!bar) return;
    window.addEventListener('scroll', function () {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop || document.body.scrollTop;
      const total = doc.scrollHeight - doc.clientHeight;
      bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
    }, { passive: true });
  }

  async function injectPartial(mountId, partialPath) {
    const mount = document.getElementById(mountId);
    if (!mount) return;
    try {
      const res = await fetch(BASE + 'partials/' + partialPath);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const html = await res.text();
      mount.outerHTML = html;
    } catch (e) {
      console.warn('[CodyMaster] Could not load partial:', partialPath, e);
    }
  }

  function initTracking() {
    const TRACKING_ID = 'G-JCHYEW645C';
    // Inject the script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + TRACKING_ID;
    document.head.appendChild(script);

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    window.gtag = gtag; // Expose globally
    gtag('js', new Date());
    gtag('config', TRACKING_ID);
  }

  async function init() {
    initTracking();
    await Promise.all([
      injectPartial('cm-header-mount', 'header.html'),
      injectPartial('cm-footer-mount', 'footer.html'),
    ]);

    // Apply active nav after header is in DOM
    applyActiveNav(document);
    initHamburger();
    initMobileAccordion();
    initScrollProgress();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
