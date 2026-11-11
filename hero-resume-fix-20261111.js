/* Standalone fix for the public portfolio hero CTA. No external libraries.
 * Defer-loaded after app.js so it cannot be overwritten by the normal renderer.
 * Static page only; no backend, storage, telemetry, or credentials.
 */
(function () {
  'use strict';
  function validResumePath(value) {
    if (typeof value !== 'string' || !value.trim()) return '';
    const path = value.trim();
    if (/[\\\x00-\x20<>'"]/u.test(path)) return '';
    try {
      const url = new URL(path, window.location.href);
      if (!['http:', 'https:', 'file:'].includes(url.protocol)) return '';
      if (url.username || url.password) return '';
      return path;
    } catch (_e) { return ''; }
  }
  function install() {
    const actions = document.querySelector('#home .hero-actions');
    const primary = document.getElementById('primary-cta');
    const contact = document.getElementById('secondary-cta');
    if (!actions || !primary || !contact) return;
    const resumeUrl = validResumePath(window.PORTFOLIO?.profile?.resumeUrl)
                      || 'Mohammed_Suhail_CS_CV.pdf';
    let resume = document.getElementById('hero-resume-cta');
    if (!resume) {
      resume = document.createElement('a');
      resume.id = 'hero-resume-cta';
      contact.before(resume);
    }
    resume.className = 'button button-outline hero-resume-cta';
    resume.href = resumeUrl;
    resume.target = '_blank';
    resume.rel = 'noopener noreferrer';
    resume.setAttribute('aria-label', 'View Resume PDF (opens in a new tab)');
    resume.innerHTML = '<svg class="resume-cta-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h9l4 4v14H6zM15 3v5h4M9 13h7M9 17h7"/></svg><span>View Resume</span><span aria-hidden="true">&#8599;</span>';

    // Prior site-config versions could accidentally convert the original
    // contact button to a second resume link. Always restore it here.
    contact.className = 'button button-outline hero-contact-cta';
    contact.href = '#contact';
    contact.removeAttribute('target');
    contact.removeAttribute('rel');
    contact.setAttribute('aria-label', 'Jump to the contact section');
    contact.innerHTML = '<span>Let\'s talk</span><span aria-hidden="true">&#8594;</span>';

    // The hero is the primary resume link; avoid an unnecessary tiny duplicate.
    const about = document.getElementById('resume-link');
    if (about) about.hidden = true;
  }
  const css = `
    #home .hero-actions { gap: 10px; align-items: center; }
    #home .hero-actions #primary-cta { padding-left: 18px; padding-right: 18px; gap: 13px; }
    #home .hero-actions .hero-resume-cta {
      background: color-mix(in srgb, var(--surface) 82%, var(--accent-soft) 18%);
      color: var(--text); border: 1px solid var(--accent);
      min-height: 49px; padding: 12px 16px; gap: 9px;
      font-weight: 750; box-shadow: 0 6px 21px rgba(195, 27, 63, .12);
    }
    #home .hero-actions .hero-resume-cta:hover {
      background: var(--accent-soft);
      box-shadow: 0 8px 25px rgba(195, 27, 63, .22);
    }
    #home .hero-actions .resume-cta-icon {
      width: 18px; height: 18px; stroke: currentColor; stroke-width: 1.7;
      stroke-linecap: round; stroke-linejoin: round; fill: none; flex: none;
    }
    #home .hero-actions .hero-contact-cta {
      min-height: 48px; border-color: transparent; background: transparent;
      box-shadow: none; padding: 12px 8px; gap: 9px; color: var(--muted);
    }
    #home .hero-actions .hero-contact-cta:hover {
      color: var(--accent); border-color: transparent; background: transparent;
      box-shadow: none;
    }
    @media (max-width: 480px) {
      #home .hero-actions { display: flex; flex-wrap: wrap; gap: 9px; }
      #home .hero-actions #primary-cta,
      #home .hero-actions .hero-resume-cta {
        flex: 1 1 140px; min-width: 0; justify-content: center;
        padding: 12px 10px; font-size: 11px; gap: 7px;
      }
      #home .hero-actions .hero-contact-cta {
        flex: 0 0 100%; justify-content: flex-start; padding: 6px 2px;
        min-height: 32px; font-size: 12px;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      #home .hero-actions .hero-resume-cta,
      #home .hero-actions .hero-contact-cta { transition: none; }
    }
  `;
  const style = document.createElement('style');
  style.id = 'hero-resume-three-buttons-style';
  style.textContent = css;
  document.head.appendChild(style);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', install, {once: true});
  } else {
    install();
  }
})();
