/* Rendering and interaction. Your personal content lives in content.js. */
(() => {
  'use strict';
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const list = (value) => Array.isArray(value) ? value : [];
  const lines = (value) => escapeHTML(value).replace(/\n/g, '<br>');
  const paths = {
    arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
    moon: '<path d="M21 13A9 9 0 0 1 11 3a9 9 0 1 0 10 10Z"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 1v4m0 14v4M1 12h4m14 0h4"/>',
    code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18"/>',
    layers: '<path d="m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5"/>',
    pulse: '<path d="M2 12h4l3-8 6 16 3-8h4"/>',
    shield: '<path d="m12 2 8 3v7c0 5-8 10-8 10S4 17 4 12V5l8-3Z"/><path d="m8 12 3 3 5-6"/>',
    server: '<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M6 6.5h1m3 0h8M6 17.5h1m3 0h8"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/>',
    globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
    terminal: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m6 8 4 4-4 4m7 0h5"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 21v-3c0-7 12-7 12 0v3M16 5c5 0 5 6 0 6m2 3c3 1 3 4 3 7"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
    book: '<path d="M3 3h6c2 0 3 1 3 3v15c0-2-1-3-3-3H3V3Zm18 0h-6c-2 0-3 1-3 3v15c0-2 1-3 3-3h6V3Z"/>',
    award: '<circle cx="12" cy="8" r="5"/><path d="m8 12-2 10 6-3 6 3-2-10"/>',
    graduation: '<path d="m1 9 11-6 11 6-11 6L1 9ZM5 11v7c5 4 9 4 14 0v-7M23 9v9"/>'
  };
  const icon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.code}</svg>`;
  function webURL(value) {
    if (!value || typeof value !== 'string') return '';
    try { const url = new URL(value.trim()); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; } catch { return ''; }
  }
  function assetURL(value) {
    const web = webURL(value);
    if (web) return web;
    if (typeof value !== 'string' || !value.trim()) return '';
    const path = value.trim();
    return /^[a-zA-Z0-9_./-]+$/.test(path) && !path.startsWith('/') && !path.includes('..') ? path : '';
  }
  const tags = (values) => `<div class="tag-list">${list(values).map(value => `<span class="tag">${escapeHTML(value)}</span>`).join('')}</div>`;
  let data;
  let activeCategory = 'All';
  let projectOpener = null;
  let toastTimer;
  function graphic(type, index) {
    let content = '';
    if (type === 'lab') content = `<div class="lab-graphic"><div class="graphic-column"><div class="graphic-node">${icon('globe')}Application</div><div class="graphic-node">${icon('database')}Data layer</div></div><div class="graphic-connector"></div><div class="graphic-column"><div class="graphic-node highlight">${icon('target')}Research</div><div class="graphic-node">${icon('code')}Lab scenario</div></div></div>`;
    else if (type === 'app') content = `<div class="app-graphic"><div class="app-bar"><i></i><i></i><i></i><span>APPLICATION / WORKFLOWS</span></div><div class="app-screen"><div class="app-sidebar"><i></i><i></i><i></i><i></i></div><div><div class="app-main-title">Built for real work.</div><div class="app-modules"><div class="app-module">${icon('users')}CRM</div><div class="app-module">${icon('clock')}Attendance</div><div class="app-module">${icon('book')}Exams</div></div><div class="app-integration">FRONTEND &gt; API &gt; DATA &gt; WEBHOOKS</div></div></div></div>`;
    else if (type === 'infra') content = `<div class="infra-graphic"><div class="infra-top">DNS / REVERSE PROXY</div><div class="infra-trunk"></div><div class="infra-branches"></div><div class="infra-servers"><div class="server">${icon('server')}PHYSICAL<small>Proxmox / VMs</small></div><div class="server">${icon('terminal')}VPS<small>Linux / Hosting</small></div><div class="server">${icon('layers')}CLOUD<small>AWS services</small></div></div></div>`;
    else content = `<div class="report-graphic"><div class="report-symbol">${icon('shield')}</div><div class="report-stages"><div class="report-stage"><span>01</span>Understand the scope</div><div class="report-stage"><span>02</span>Investigate & validate</div><div class="report-stage"><span>03</span>Document the findings</div></div></div>`;
    return `<div class="project-visual" aria-hidden="true"><span class="project-visual-label">CONCEPT / ILLUSTRATIVE VIEW</span>${content}<span class="project-visual-number">WORK ${String(index + 1).padStart(2,'0')}</span></div>`;
  }
  function renderProjects() {
    const projects = list(data.projects);
    const filtered = projects.filter(project => activeCategory === 'All' || project.category === activeCategory);
    $('#projects-grid').innerHTML = filtered.map(project => {
      const index = projects.indexOf(project);
      const image = assetURL(project.image);
      const visual = image ? `<div class="project-visual"><img src="${escapeHTML(image)}" alt="${escapeHTML(project.imageAlt || project.title)}" loading="lazy" width="600" height="300"></div>` : graphic(project.visual,index);
      return `<article class="project-card">${visual}<div class="project-card-body"><p class="eyebrow">${escapeHTML(project.eyebrow)}</p><h3>${escapeHTML(project.title)}</h3><p>${escapeHTML(project.summary)}</p>${tags(project.tags)}<div class="project-card-footer"><span class="mono">${escapeHTML(project.category)}</span><button class="text-button project-open" type="button" data-project-id="${escapeHTML(project.id)}" aria-label="Explore work: ${escapeHTML(project.title)}">Explore work <span aria-hidden="true">&#8599;</span></button></div></div></article>`;
    }).join('');
    $('#work-count').textContent = `${String(filtered.length).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')} WORK SUMMARIES`;
    document.querySelectorAll('.filter-button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === activeCategory)));
    document.dispatchEvent(new CustomEvent('portfolio:projects'));
  }
  function render() {
    data = window.PORTFOLIO;
    if (!data || !data.profile) throw new Error('Portfolio content is missing. Check content.js.');
    const profile = data.profile;
    $('#brand-name').textContent = profile.brand;
    $('.brand').setAttribute('aria-label', `${profile.name}, home`);
    $('#full-name').textContent = `${profile.name} / ${profile.role}`.toUpperCase();
    $('#availability').innerHTML = `<span class="status-dot" aria-hidden="true"></span>${escapeHTML(profile.availability)}`;
    const hero = data.hero || {};
    const headline = list(hero.lines);
    const resume = assetURL(profile.resumeUrl);
    $('#hero-copy').innerHTML = `<p class="eyebrow">${escapeHTML(hero.eyebrow)}</p><h1 id="hero-title">${headline.map((line,index) => index === headline.length-1 ? `<span>${escapeHTML(line)}</span>` : escapeHTML(line)).join('<br>')}</h1><p class="hero-description">${escapeHTML(hero.description)}</p><div class="hero-buttons"><a class="button button-primary" href="#work">${escapeHTML(hero.primaryButton)} <span aria-hidden="true">&#8599;</span></a><a class="button button-secondary" href="#contact">${escapeHTML(hero.secondaryButton)}</a>${resume ? `<a class="button resume-button" href="${escapeHTML(resume)}" target="_blank" rel="noopener noreferrer">View CV <span aria-hidden="true">&#8599;</span></a>` : ''}</div>`;
    $('#hero-footnote').textContent = hero.footnote;
    $('#stats').innerHTML = list(data.stats).map(stat => `<div class="stat"><span class="stat-value">${escapeHTML(stat.value)}</span><div><p class="stat-label">${escapeHTML(stat.label)}</p><p class="stat-note">${escapeHTML(stat.note)}</p></div></div>`).join('');
    const about = data.about || {};
    $('#about-content').innerHTML = `<h2 id="about-title">${lines(about.title)}</h2><div class="about-copy">${list(about.paragraphs).map(text => `<p>${escapeHTML(text)}</p>`).join('')}<div class="principles">${list(about.principles).map(text => `<span class="principle"><span aria-hidden="true">+</span>${escapeHTML(text)}</span>`).join('')}</div></div>`;
    $('#expertise-grid').innerHTML = list(data.expertise).map(item => `<article class="expertise-card"><div class="expertise-icon-row">${icon(item.icon)}<span class="mono">${escapeHTML(item.number)}</span></div><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.description)}</p>${tags(item.tags)}</article>`).join('');
    const categories = ['All', ...new Set(list(data.projects).map(project => project.category).filter(Boolean))];
    if (!categories.includes(activeCategory)) activeCategory = 'All';
    $('#project-filters').innerHTML = categories.map(category => `<button type="button" class="filter-button" data-filter="${escapeHTML(category)}" aria-pressed="${category === activeCategory}">${escapeHTML(category)}</button>`).join('');
    renderProjects();
    $('#skills-grid').innerHTML = list(data.skills).map(group => `<div class="skill-group"><h3>${escapeHTML(group.label)}</h3><div class="skill-items">${list(group.items).map(value => `<span>${escapeHTML(value)}</span>`).join('')}</div></div>`).join('');
    const experience = data.experience || {};
    $('#experience-intro').textContent = experience.intro;
    $('#experience-content').innerHTML = `<div class="employer-card"><p class="eyebrow">${escapeHTML(experience.department)}</p><h3>${escapeHTML(experience.company)}</h3><p>Previous employer<span class="mono">${escapeHTML(experience.period)}</span></p><div class="tenure-contributions"><h4>${escapeHTML(experience.sharedTitle)}</h4><ul>${list(experience.shared).map(value => `<li>${escapeHTML(value)}</li>`).join('')}</ul></div></div><ol class="timeline" aria-label="Career progression, most recent first">${list(experience.roles).map(role => `<li class="timeline-item"><p class="timeline-date">${escapeHTML(role.dates)}</p><h3>${escapeHTML(role.title)}</h3><span class="timeline-label">${escapeHTML(role.label)}</span></li>`).join('')}</ol>`;
    $('#credentials-grid').innerHTML = list(data.certifications).map(cert => {
      const url = webURL(cert.url);
      return `<article class="credential-card"><div class="credential-badge" aria-hidden="true">${icon('award')}<span>${escapeHTML(cert.badge)}</span></div><div><h3>${escapeHTML(cert.name)}</h3><p>${escapeHTML(cert.issuer)}<br><span class="mono">${escapeHTML(cert.date)}</span></p>${url ? `<a class="verify-link" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">View credential &#8599;</a>` : ''}</div></article>`;
    }).join('');
    const education = data.education || {};
    $('#education-content').innerHTML = `<div class="education-row"><div class="education-left">${icon('graduation')}<div><h3>${escapeHTML(education.degree)}</h3><p>${escapeHTML(education.subject)}</p></div></div><div class="education-right">${escapeHTML(education.university)}<span>Awarded ${escapeHTML(education.year)}</span></div></div>`;
    const contact = data.contact || {};
    const email = String(profile.email || '').trim();
    const emailHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(contact.emailSubject || '')}`;
    const socialLabels = {linkedin:'LinkedIn',github:'GitHub',tryhackme:'TryHackMe',hackthebox:'Hack The Box',portswigger:'PortSwigger'};
    const socials = Object.entries(data.links || {}).filter(([,value]) => webURL(value)).map(([key,value]) => `<a href="${escapeHTML(webURL(value))}" target="_blank" rel="noopener noreferrer">${escapeHTML(socialLabels[key] || key)} <span aria-hidden="true">&#8599;</span></a>`).join('');
    const phone = String(profile.phone || '').trim();
    const phoneHref = phone.replace(/[^+\d]/g,'');
    $('#contact-content').innerHTML = `<p class="eyebrow">${escapeHTML(contact.eyebrow)}</p><div class="contact-main"><h2 id="contact-title">${lines(contact.title)}</h2><div class="contact-details"><p>${escapeHTML(contact.description)}</p><div class="contact-links"><a class="contact-email" href="${escapeHTML(emailHref)}">${escapeHTML(email)} <span aria-hidden="true">&#8599;</span></a><button type="button" class="copy-email" aria-label="Copy email address">Copy email</button></div>${phone && phoneHref ? `<a class="contact-phone" href="tel:${escapeHTML(phoneHref)}">${escapeHTML(phone)}</a>` : ''}</div></div><div class="contact-bottom"><p class="contact-location">${escapeHTML(profile.location)}<span>${escapeHTML(profile.locationNote)}</span></p>${socials ? `<nav class="social-links" aria-label="Professional profiles">${socials}</nav>` : `<p class="contact-note">${escapeHTML(contact.note)}</p>`}</div>`;
    $('#footer-name').textContent = `${profile.name} / ${new Date().getFullYear()}`;
    updateMetadata();
  }
  function updateMetadata() {
    const profile = data.profile;
    const title = `${profile.name} | Cybersecurity & Security Research`;
    document.title = title;
    [['description',profile.seoDescription],['og:title',title],['og:description',profile.seoDescription]].forEach(([name,value]) => {
      const node = document.querySelector(`meta[name="${name}"],meta[property="${name}"]`);
      if (node) node.setAttribute('content', String(value || ''));
    });
    const url = webURL(profile.siteUrl);
    let canonical = $('link[rel="canonical"]');
    if (url) {
      if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical); }
      canonical.href = url;
    } else if (canonical) canonical.remove();
  }
  function openProject(id, opener) {
    const project = list(data.projects).find(item => item.id === id);
    if (!project) return;
    const repo = webURL(project.repoUrl);
    const demo = webURL(project.demoUrl);
    $('#dialog-content').innerHTML = `<p class="eyebrow dialog-eyebrow">${escapeHTML(project.eyebrow)}</p><h2 id="dialog-title">${escapeHTML(project.title)}</h2><p>${escapeHTML(project.scope)}</p>${tags(project.tags)}<h3>My contribution</h3><ul>${list(project.contributions).map(text => `<li>${escapeHTML(text)}</li>`).join('')}</ul><h3>Delivered work</h3><p>${escapeHTML(project.outcome)}</p>${project.confidentiality ? `<div class="dialog-notice"><p>${escapeHTML(project.confidentiality)}</p></div>` : ''}${repo || demo ? `<div class="dialog-actions">${repo ? `<a class="button button-secondary" href="${escapeHTML(repo)}" target="_blank" rel="noopener noreferrer">View repository &#8599;</a>` : ''}${demo ? `<a class="button button-primary" href="${escapeHTML(demo)}" target="_blank" rel="noopener noreferrer">View project &#8599;</a>` : ''}</div>` : ''}`;
    projectOpener = opener;
    $('#project-dialog').showModal();
    $('#project-dialog').scrollTop = 0;
    document.body.classList.add('modal-open');
  }
  function toast(message) {
    clearTimeout(toastTimer);
    $('#toast').textContent = message;
    $('#toast').hidden = false;
    toastTimer = setTimeout(() => { $('#toast').hidden = true; }, 4500);
  }
  async function copyEmail() {
    const email = String(data.profile.email || '');
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(email);
      toast('Email address copied.');
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      textarea.setAttribute('aria-label', 'Email address to copy');
      document.body.append(textarea);
      textarea.select();
      let copied = false;
      try { copied = document.execCommand('copy'); } catch { /* Show the address instead. */ }
      textarea.remove();
      toast(copied ? 'Email address copied.' : `Copy this address: ${email}`);
      $('.copy-email')?.focus({preventScroll:true});
    }
  }
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const light = theme === 'light';
    $('.theme-toggle').innerHTML = icon(light ? 'moon' : 'sun');
    $('.theme-toggle').setAttribute('aria-label', `Switch to ${light ? 'dark' : 'light'} theme`);
    $('meta[name="theme-color"]').content = light ? '#f5f8fc' : '#090f1d';
    try { localStorage.setItem('suhail-portfolio-theme',theme); } catch { /* Storage may be blocked in private/local contexts. */ }
  }
  function setMenu(open) {
    $('#mobile-nav').hidden = !open;
    $('.menu-toggle').setAttribute('aria-expanded',String(open));
    $('.menu-toggle').setAttribute('aria-label',open ? 'Close navigation' : 'Open navigation');
  }
  function initialize() {
    let initialTheme = 'dark';
    try { if (localStorage.getItem('suhail-portfolio-theme') === 'light') initialTheme = 'light'; } catch { /* Default theme is dark. */ }
    setTheme(initialTheme);
    render();
    $('.theme-toggle').addEventListener('click',() => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
    $('.menu-toggle').addEventListener('click',() => setMenu($('#mobile-nav').hidden));
    $('#mobile-nav').addEventListener('click',event => { if (event.target.closest('a')) setMenu(false); });
    document.addEventListener('click',event => {
      if (!(event.target instanceof Element)) return;
      const filter = event.target.closest('.filter-button');
      if (filter) { activeCategory = filter.dataset.filter; renderProjects(); }
      const opener = event.target.closest('.project-open');
      if (opener) openProject(opener.dataset.projectId,opener);
      if (event.target.closest('.copy-email')) copyEmail();
      if (!event.target.closest('.site-header')) setMenu(false);
    });
    document.addEventListener('keydown',event => { if (event.key === 'Escape' && !$('#mobile-nav').hidden) { setMenu(false); $('.menu-toggle').focus(); } });
    window.addEventListener('resize',() => { if (window.innerWidth > 800) setMenu(false); },{passive:true});
    const dialog = $('#project-dialog');
    $('.dialog-close').addEventListener('click',() => dialog.close());
    // Keep keyboard navigation inside the open modal, including a close-only panel.
    dialog.addEventListener('keydown', event => {
      if (event.key !== 'Tab' || event.ctrlKey || event.metaKey || event.altKey || !dialog.open) return;
      const controls = Array.from(dialog.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])'))
        .filter(element => element.getClientRects().length > 0);
      if (!controls.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      const active = document.activeElement;
      if (controls.length === 1 || (!event.shiftKey && (active === last || !dialog.contains(active)))) {
        event.preventDefault(); first.focus({preventScroll:true});
      } else if (event.shiftKey && (active === first || !dialog.contains(active))) {
        event.preventDefault(); last.focus({preventScroll:true});
      }
    });
    dialog.addEventListener('click',event => {
      const rect = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
    });
    dialog.addEventListener('close',() => { document.body.classList.remove('modal-open'); if (projectOpener?.isConnected) projectOpener.focus({preventScroll:true}); });
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) if (entry.isIntersecting) {
          document.querySelectorAll('.desktop-nav a').forEach(link => link.classList.toggle('active',link.getAttribute('href') === `#${entry.target.id}`));
        }
      },{rootMargin:'-12% 0px -60% 0px',threshold:0});
      document.querySelectorAll('#work,#expertise,#experience,#credentials').forEach(section => observer.observe(section));
    }
  }
  // Useful for local preview/testing; it does not save or publish changes.
  window.renderPortfolio = render;
  try { initialize(); } catch (error) {
    console.error('Portfolio initialization failed:',error);
    const notice = document.createElement('p');
    notice.className = 'error-notice';
    notice.textContent = 'Some portfolio content could not load. Please check content.js or contact cssuhailmohammed@gmail.com.';
    $('#main').prepend(notice);
  }
})();
