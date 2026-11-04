/* Optional visual enhancements. Content and links work independently in app.js.
 * Motion respects device preferences and the visitor's saved in-page setting.
 * No scroll hijacking, cursor replacement, timers for text, or number inflation.
 */
(() => {
  'use strict';
  const root = document.documentElement;
  const motionButton = document.querySelector('.motion-toggle');
  const devicePreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const preferenceKey = 'suhail-portfolio-motion';
  const activeAnimations = new Set();
  const revealed = new WeakSet();
  const observedNodes = new Set();
  let revealObserver = null;
  let storedPreference = 'auto';
  let motionAllowed = false;
  let progressFrame = 0;
  let pointerFrame = 0;
  try { storedPreference = localStorage.getItem(preferenceKey) || 'auto'; } catch { /* Local/private browsing fallback. */ }

  const pauseIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true"><path d="M9 5v14M15 5v14"/></svg>';
  const playIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true"><path d="m9 5 11 7-11 7z"/></svg>';
  const easing = 'cubic-bezier(.2,.75,.2,1)';

  function animate(element, frames, options = {}) {
    if (!motionAllowed || !element || typeof element.animate !== 'function') return null;
    try {
      const animation = element.animate(frames, {duration: 420, easing, ...options});
      activeAnimations.add(animation);
      animation.finished.then(() => activeAnimations.delete(animation), () => activeAnimations.delete(animation));
      return animation;
    } catch { return null; } // An enhancement failure must never hide the content.
  }

  function watchSections() {
    if (!motionAllowed || !('IntersectionObserver' in window)) return;
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const element = entry.target;
          revealObserver.unobserve(element);
          observedNodes.delete(element);
          if (revealed.has(element)) return;
          revealed.add(element);
          element.dataset.revealDone = 'true';
          const siblings = Array.from(element.parentElement.children);
          const stagger = element.matches('.expertise-card,.project-card,.credential-card')
            ? Math.min(siblings.indexOf(element), 3) * 45 : 0;
          animate(element, [
            {opacity: 0, transform: 'translateY(16px)'},
            {opacity: 1, transform: 'translateY(0)'}
          ], {delay: stagger, fill: 'backwards'});
        });
      }, {threshold: 0.06, rootMargin: '0px 0px -30px 0px'});
    }
    // Remove detached cards after a filter or content refresh.
    observedNodes.forEach(node => {
      if (!node.isConnected) { revealObserver.unobserve(node); observedNodes.delete(node); }
    });
    document.querySelectorAll('.section-label,.section-heading,.about-grid>h2,.about-copy,.expertise-card,.project-card,.skill-group,.employer-card,.timeline-item,.credential-card,.education-row,.contact-panel').forEach(element => {
      if (!revealed.has(element) && !observedNodes.has(element)) {
        revealObserver.observe(element);
        observedNodes.add(element);
      }
    });
  }

  function updateProgress() {
    progressFrame = 0;
    const progress = document.querySelector('.reading-progress');
    if (!progress || !motionAllowed) return;
    const distance = root.scrollHeight - window.innerHeight;
    const fraction = distance > 0 ? Math.max(0, Math.min(1, window.scrollY / distance)) : 0;
    progress.style.transform = `scaleX(${fraction})`;
  }
  function scheduleProgress() {
    if (motionAllowed && !progressFrame) progressFrame = requestAnimationFrame(updateProgress);
  }

  function applyMotion() {
    motionAllowed = !devicePreference.matches && storedPreference !== 'reduce';
    root.dataset.motion = motionAllowed ? 'full' : 'reduced';
    if (motionButton) {
      motionButton.innerHTML = motionAllowed ? pauseIcon : playIcon;
      motionButton.setAttribute('aria-pressed', String(!motionAllowed));
      motionButton.title = devicePreference.matches
        ? 'Animations off: reduced motion is enabled on your device'
        : motionAllowed ? 'Pause animations' : 'Enable animations';
      motionButton.disabled = devicePreference.matches;
    }
    if (!motionAllowed) {
      activeAnimations.forEach(animation => animation.cancel());
      activeAnimations.clear();
      revealObserver?.disconnect();
      observedNodes.clear();
      document.querySelectorAll('.click-ripple').forEach(ripple => ripple.remove());
      document.querySelector('.security-visual')?.removeAttribute('data-spotlit');
    } else {
      watchSections();
      scheduleProgress();
    }
  }

  function ripple(button, clientX, clientY) {
    if (!motionAllowed || !button || button.disabled) return;
    const rect = button.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    // Restrict the effect to this control, never the entire page.
    button.querySelectorAll('.click-ripple').forEach(element => element.remove());
    const diameter = Math.hypot(rect.width, rect.height) * 2;
    const x = Number.isFinite(clientX) ? clientX - rect.left : rect.width / 2;
    const y = Number.isFinite(clientY) ? clientY - rect.top : rect.height / 2;
    const circle = document.createElement('span');
    circle.className = 'click-ripple';
    circle.setAttribute('aria-hidden', 'true');
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${x - diameter / 2}px`;
    circle.style.top = `${y - diameter / 2}px`;
    button.append(circle);
    const animation = animate(circle, [
      {transform: 'scale(0)', opacity: .18},
      {transform: 'scale(1)', opacity: 0}
    ], {duration: 480, easing: 'cubic-bezier(.2,.6,.2,1)'});
    if (animation) animation.finished.then(() => circle.remove(), () => circle.remove());
    else circle.remove();
  }

  function initialize() {
    applyMotion();
    motionButton?.addEventListener('click', () => {
      storedPreference = motionAllowed ? 'reduce' : 'auto';
      try { localStorage.setItem(preferenceKey, storedPreference); } catch { /* In-session setting still works. */ }
      applyMotion();
    });
    if (devicePreference.addEventListener) devicePreference.addEventListener('change', applyMotion);
    else devicePreference.addListener(applyMotion);

    // One-time entrance, no typewriter delay and no content initially hidden in CSS.
    if (window.scrollY < 100) {
      const elements = document.querySelectorAll('.hero-topline,.hero-copy>.eyebrow,.hero h1,.hero-description,.hero-buttons,.security-visual');
      elements.forEach((element, index) => animate(element, [
        {opacity: 0, transform: 'translateY(12px)'},
        {opacity: 1, transform: 'translateY(0)'}
      ], {duration: 520, delay: Math.min(index * 55, 240), fill: 'backwards'}));
    }
    document.addEventListener('portfolio:projects', watchSections);
    document.addEventListener('pointerdown', event => {
      if (event.button !== 0 || !(event.target instanceof Element)) return;
      ripple(event.target.closest('.button,.icon-button,.filter-button,.copy-email'), event.clientX, event.clientY);
    });
    document.addEventListener('click', event => {
      if (event.detail !== 0 || !(event.target instanceof Element)) return;
      ripple(event.target.closest('.button,.icon-button,.filter-button,.copy-email'));
    });
    window.addEventListener('scroll', scheduleProgress, {passive: true});
    window.addEventListener('resize', scheduleProgress, {passive: true});
    if ('ResizeObserver' in window) new ResizeObserver(scheduleProgress).observe(document.body);

    const visual = document.querySelector('.security-visual');
    if (visual) {
      visual.addEventListener('pointermove', event => {
        if (!motionAllowed || !finePointer.matches) return;
        const x = event.clientX;
        const y = event.clientY;
        if (pointerFrame) cancelAnimationFrame(pointerFrame);
        pointerFrame = requestAnimationFrame(() => {
          pointerFrame = 0;
          if (!motionAllowed) return;
          const rect = visual.getBoundingClientRect();
          visual.style.setProperty('--pointer-x', `${x - rect.left}px`);
          visual.style.setProperty('--pointer-y', `${y - rect.top}px`);
          visual.dataset.spotlit = 'true';
        });
      }, {passive: true});
      visual.addEventListener('pointerleave', () => {
        if (pointerFrame) cancelAnimationFrame(pointerFrame);
        pointerFrame = 0;
        visual.removeAttribute('data-spotlit');
      });
      if ('IntersectionObserver' in window) new IntersectionObserver(entries => {
        entries.forEach(entry => { visual.dataset.inView = String(entry.isIntersecting); });
      }).observe(visual);
    }
    document.addEventListener('visibilitychange', () => {
      root.dataset.pageHidden = String(document.hidden);
    });
    root.dataset.pageHidden = String(document.hidden);
    const dialog = document.querySelector('.project-dialog');
    if (dialog && 'MutationObserver' in window) new MutationObserver(() => {
      if (dialog.open) animate(dialog, [
        {opacity: 0, transform: 'translateY(10px) scale(.985)'},
        {opacity: 1, transform: 'translateY(0) scale(1)'}
      ], {duration: 230});
    }).observe(dialog, {attributes: true, attributeFilter: ['open']});
  }
  try { initialize(); } catch (error) {
    // Portfolio rendering, navigation and contact links remain independent.
    root.dataset.motion = 'reduced';
    if (motionButton) motionButton.hidden = true;
    console.warn('Optional motion enhancement unavailable:', error);
  }
})();
