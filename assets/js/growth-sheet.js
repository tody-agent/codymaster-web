/**
 * CodyMaster — Growth Hacking: Exit Intent Bottom Sheet
 * cm-growth-hacking pattern: exit-intent + timer trigger
 * Tracks: dataLayer events for GTM compatibility
 */
(function () {
  'use strict';

  const DISMISS_KEY = 'cm_exit_dismissed';
  const TIMER_MS = 45000; // 45 seconds fallback trigger

  function isDismissed() {
    return sessionStorage.getItem(DISMISS_KEY) === '1';
  }
  function setDismissed() {
    sessionStorage.setItem(DISMISS_KEY, '1');
  }

  function track(event, extra) {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(Object.assign({ event: event }, extra));
    } catch (e) { /* silent */ }
  }

  function buildSheet() {
    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'cm-sheet-overlay';
    overlay.id = 'cm-sheet-overlay';

    // Sheet
    const sheet = document.createElement('div');
    sheet.className = 'cm-sheet';
    sheet.id = 'cm-growth-sheet';
    sheet.setAttribute('role', 'dialog');
    sheet.setAttribute('aria-modal', 'true');
    sheet.setAttribute('aria-label', 'Get CodyMaster free');

    sheet.innerHTML = `
      <div class="cm-sheet-handle"></div>
      <div class="cm-sheet-body">
        <div class="cm-sheet-eyebrow">Before you leave</div>
        <div class="cm-sheet-title">Get your AI a full&nbsp;senior team — free.</div>
        <p class="cm-sheet-sub">One install. 50+ skills. Works with Claude Code, Cursor, Gemini, and 11 more AI agents.</p>
        
        <div class="cm-sheet-prompt-card">
          <div class="cm-sheet-prompt-header">
            <span class="cm-sheet-prompt-badge">Universal Prompt</span>
            <span class="cm-sheet-prompt-works">Works with Claude, Codex, Cursor, Gemini, and 10+ more</span>
          </div>
          <button class="cm-sheet-install" id="cm-sheet-copy-prompt" aria-label="Copy universal prompt" style="margin-bottom: 0;">
            <span>Fetch and follow instructions from https://raw.githubusercontent.com/tody-agent/codymaster/main/INSTALL.md</span>
            <span class="cm-copy-hint">Copy</span>
          </button>
        </div>

        <div class="cm-sheet-or">
          <span>OR INSTALL DIRECTLY</span>
        </div>

        <button class="cm-sheet-install" id="cm-sheet-copy" aria-label="Copy install command">
          <span>npm install -g codymaster && cm</span>
          <span class="cm-copy-hint">Copy</span>
        </button>

        <div class="cm-sheet-ctas">
          <a href="/get-started.html" class="cm-sheet-btn-primary" id="cm-sheet-cta">Get Free →</a>
          <button class="cm-sheet-btn-ghost" id="cm-sheet-dismiss" aria-label="Close">Maybe later</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(sheet);

    return { overlay, sheet };
  }

  function openSheet(trigger) {
    if (isDismissed()) return;
    const { overlay, sheet } = buildSheet();

    track('cro_sheet_shown', { trigger: trigger, page: document.title });

    // Animate in
    requestAnimationFrame(function () {
      overlay.classList.add('open');
      sheet.classList.add('open');
    });

    function closeSheet() {
      overlay.classList.remove('open');
      sheet.classList.remove('open');
      setDismissed();
      track('cro_sheet_dismissed', { trigger: trigger });
      setTimeout(function () {
        overlay.remove();
        sheet.remove();
      }, 400);
    }

    // Close triggers
    document.getElementById('cm-sheet-dismiss').addEventListener('click', closeSheet);
    overlay.addEventListener('click', closeSheet);
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape') { closeSheet(); document.removeEventListener('keydown', esc); }
    });

    // Swipe-to-dismiss
    let startY = 0;
    sheet.addEventListener('touchstart', function (e) { startY = e.touches[0].clientY; }, { passive: true });
    sheet.addEventListener('touchend', function (e) {
      if (e.changedTouches[0].clientY - startY > 60) closeSheet();
    }, { passive: true });

    // Copy install command (Direct)
    document.getElementById('cm-sheet-copy').addEventListener('click', function (e) {
      navigator.clipboard.writeText('npm install -g codymaster && cm').catch(function () {});
      const hint = e.currentTarget.querySelector('.cm-copy-hint');
      if (hint) { hint.textContent = 'Copied!'; setTimeout(() => hint.textContent = 'Copy', 2000); }
      track('cro_sheet_copy', { trigger: trigger, type: 'direct' });
    });

    // Copy install command (Prompt)
    const promptBtn = document.getElementById('cm-sheet-copy-prompt');
    if (promptBtn) {
      promptBtn.addEventListener('click', function (e) {
        navigator.clipboard.writeText('Fetch and follow instructions from https://raw.githubusercontent.com/tody-agent/codymaster/main/INSTALL.md').catch(function () {});
        const hint = e.currentTarget.querySelector('.cm-copy-hint');
        if (hint) { hint.textContent = 'Copied!'; setTimeout(() => hint.textContent = 'Copy', 2000); }
        track('cro_sheet_copy', { trigger: trigger, type: 'prompt' });
      });
    }

    // CTA click tracking
    document.getElementById('cm-sheet-cta').addEventListener('click', function () {
      track('cro_sheet_cta_click', { trigger: trigger });
    });
  }

  function init() {
    if (isDismissed()) return;
    // Ignore Install/GetFree pages
    if (window.location.pathname.includes('get-started')) return;

    let triggered = false;

    function trigger(src) {
      if (triggered || isDismissed()) return;
      triggered = true;
      // Small delay so it feels natural
      setTimeout(function () { openSheet(src); }, 400);
    }

    // Exit intent: mouse leaves viewport at top
    document.addEventListener('mouseleave', function (e) {
      if (e.clientY < 10) trigger('exit_intent');
    });

    // Fallback: 45 second timer
    const timer = setTimeout(function () { trigger('timer_45s'); }, TIMER_MS);

    // Cancel timer if user has already triggered
    document.addEventListener('mouseleave', function () { clearTimeout(timer); }, { once: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
