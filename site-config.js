/* Public portfolio settings and accessible hero resume call-to-action.
   Keep this file on GitHub Pages; it contains no secrets.
   Resume file: Mohammed_Suhail_CS_CV.pdf (in repository root).
*/
(function () {
  'use strict';
  const portfolio = window.PORTFOLIO;
  if (!portfolio || !portfolio.profile) return;

  // Contact/profile settings. Adjust these if your details change.
  portfolio.profile.location = 'Dubai, United Arab Emirates';
  portfolio.profile.locationNote = 'Dubai, United Arab Emirates';
  portfolio.links = portfolio.links || {};
  portfolio.links.linkedin = 'https://www.linkedin.com/in/cssuhailmohammed/';
  portfolio.links.github = portfolio.links.github || 'https://github.com/mscs7';

  // Respect any resume URL already configured in your main content.js.
  // If it is blank, use the public PDF alongside index.html.
  const defaultResume = 'Mohammed_Suhail_CS_CV.pdf';
  const configured = String(portfolio.profile.resumeUrl || '').trim();
  function safeResumeURL(value) {
    if (!value || /[\x00-\x20<>"'\\]/.test(value)) return '';
    try {
      const url = new URL(value, document.baseURI || location.href);
      if (!['http:', 'https:', 'file:'].includes(url.protocol) || url.username || url.password) return '';
      if (url.protocol === 'file:' && /^[a-z][a-z\d+.-]*:/i.test(value)) return '';
      return value;
    } catch { return ''; }
  }
  const resume = safeResumeURL(configured) || defaultResume;
  portfolio.profile.resumeUrl = resume;

  // The original 'Let's connect' hero action becomes a clearly visible CV button.
  // Contact remains accessible in the navigation and the contact section.
  const css = `
    .hero-actions a#secondary-cta.hero-resume-link {
      min-height: 58px;
      padding: 14px 22px;
      gap: 10px;
      border: 1px solid var(--accent);
      border-radius: 7px;
      background: color-mix(in srgb, var(--accent-soft) 35%, var(--surface));
      color: var(--text);
      font-size: 13px;
      font-weight: 750;
      letter-spacing: .006em;
      box-shadow: 0 10px 28px rgba(196,22,61,.09);
      transition: transform .2s ease, background .2s ease, box-shadow .2s ease;
    }
    .hero-actions a#secondary-cta.hero-resume-link:hover {
      transform: translateY(-2px);
      background: var(--accent-soft);
      box-shadow: 0 12px 28px rgba(196,22,61,.2);
    }
    .hero-actions a#secondary-cta.hero-resume-link svg {
      flex-shrink: 0;
      width: 19px;
      height: 19px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.8;
      stroke-linejoin: round;
      stroke-linecap: round;
    }
    .hero-actions a#secondary-cta.hero-resume-link .hero-resume-arrow {
      color: var(--accent);
      margin-left: 10px;
      font-size: 18px;
      line-height: 1;
    }
    @media(max-width:680px) {
      .hero-actions a#secondary-cta.hero-resume-link {
        min-height: 54px;
        justify-content: center;
        padding: 14px 18px;
        font-size: 12px;
      }
    }
    @media(prefers-reduced-motion:reduce) {
      .hero-actions a#secondary-cta.hero-resume-link { transition: none; }
    }
  `;
  if (!document.getElementById('hero-resume-style')) {
    const el = document.createElement('style');
    el.id = 'hero-resume-style';
    el.textContent = css;
    document.head.appendChild(el);
  }

  function setupHeroResume() {
    const button = document.getElementById('secondary-cta');
    if (!button) return;
    button.classList.add('hero-resume-link');
    button.href = resume;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.setAttribute('aria-label', 'View resume PDF (opens in a new tab)');
    button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6zM14 3v5h5M9 13h6M9 17h6"/></svg><span>View Resume</span><span class="hero-resume-arrow" aria-hidden="true">&#8599;</span>';

    // Hero is now the only Resume call-to-action on the homepage.
    const oldAboutResume = document.getElementById('resume-link');
    if (oldAboutResume) oldAboutResume.hidden = true;
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupHeroResume, { once: true });
  } else {
    setupHeroResume();
  }
})();
