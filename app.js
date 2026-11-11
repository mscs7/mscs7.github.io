/* Crimson portfolio - vanilla JavaScript, compatible with window.PORTFOLIO. */
(() => {
  'use strict';
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));
  const arr = value => Array.isArray(value) ? value : [];
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const text = (selector, value) => { const node = $(selector); if (node) node.textContent = value ?? ''; };
  const store = {get: key => {try {return localStorage.getItem(key);} catch {return null;}}, set: (key, value) => {try {localStorage.setItem(key,value);} catch { /* Optional persistence. */ }}};
  const paths = {
    'arrow-up-right':'M7 17 17 7M7 7h10v10', 'arrow-right':'M5 12h14m-6-6 6 6-6 6',
    shield:'M12 3 3.5 6.5V12c0 5 8.5 9 8.5 9s8.5-4 8.5-9V6.5L12 3Z M8.5 12l2.5 2.5 4.5-5',
    target:'M21 12a9 9 0 1 1-9-9 M16 12a4 4 0 1 1-4-4 M12 12 21 3M17 3h4v4',
    code:'m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16',
    layers:'m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5',
    pulse:'M2 12h5l3-8 4 16 3-8h5',pin:'M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z M14.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0',
    sun:'M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5',
    moon:'M20 14A8.5 8.5 0 0 1 10 3a9 9 0 1 0 10 11Z',
    pause:'M8 5v14M16 5v14',play:'m8 4 12 8-12 8V4Z',menu:'M4 7h16M4 12h16M4 17h16',x:'m6 6 12 12M6 18 18 6',
    copy:'M9 9h11v12H9V9Z M5 16H2V3h12v3',lock:'M5 10h14v11H5V10Zm3 0V7a4 4 0 0 1 8 0v3M12 14v3',
    check:'m5 12 4 4L19 6',server:'M3 3h18v7H3V3Zm0 11h18v7H3v-7ZM7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6',
    terminal:'m4 6 6 6-6 6m9 0h7',book:'M3 4h7l2 2 2-2h7v16h-7l-2 1-2-1H3V4Zm9 2v15',
    globe:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18',
    award:'M17 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM8 12 6 22l6-3 6 3-2-10'
  };
  const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[name] || paths.shield}"/></svg>`;
  const hydrateIcons = (parent=document) => $$('[data-icon]',parent).forEach(node => {node.innerHTML=icon(node.dataset.icon);});
  function linkURL(value) {
    if (typeof value !== 'string' || !value.trim()) return '';
    const s=value.trim();
    if (/[\x00-\x20\\]/.test(s)) return '';
    const relative=!/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(s) && !s.startsWith('//');
    try {
      const u=new URL(s,document.baseURI || location.href);
      if (u.username || u.password) return '';
      if (['http:','https:'].includes(u.protocol)) return s;
      if (u.protocol==='file:' && relative && !s.startsWith('/')) return s;
    } catch {return '';}
    return '';
  }
  const linkAttrs = url => /^https?:/i.test(url) ? ' target="_blank" rel="noopener noreferrer"' : '';
  const tags = values => `<div class="tags">${arr(values).map(value=>`<span class="tag">${esc(value)}</span>`).join('')}</div>`;
  let toastTimer;
  function notify(message) {const node=$('#toast');node.textContent=message;node.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove('show'),3500);}
  const data=window.PORTFOLIO;
  if (!data || !data.profile) {
    text('#hero-description','Your content file could not be loaded. Keep content.js beside index.html and reload.');
    hydrateIcons(); return;
  }
  const p=data.profile, h=data.hero || {}, about=data.about || {}, experience=data.experience || {}, contact=data.contact || {};
  const email=String(p.email || '').replace(/[\r\n]/g,'');
  const safeEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : '';
  const emailURL='mailto:'+encodeURIComponent(safeEmail);
  document.title=`${p.name || 'Portfolio'} | Cybersecurity & Security Research`;
  if(p.seoDescription) $('meta[name="description"]').content=p.seoDescription;
  if(linkURL(p.siteUrl)) { $('link[rel="canonical"]').href=p.siteUrl; $('meta[property="og:url"]').content=p.siteUrl; }
  text('#brand-text',p.brand || 'SUHAIL.CS');text('#footer-brand',p.brand || 'SUHAIL.CS');
  text('#availability',p.availability || 'Open to opportunities');text('#hero-eyebrow',h.eyebrow || 'CYBERSECURITY / RESEARCH / ENGINEERING');
  const name=String(p.name || 'Mohammed Suhail C S').trim();
  const words=name.split(/\s+/);const first=words.shift();
  $('#hero-title').innerHTML=`${esc(first)}<br><span>${esc(words.join(' ') || first)}<span class="accent">.</span></span>`;
  const lines=arr(h.lines);
  if(lines.length) $('#hero-statement').innerHTML=`${esc(lines[0])}<br><span>${esc(lines.slice(1).join(' '))}</span>`;
  text('#hero-description',h.description);text('#hero-footnote',h.footnote);
  text('#hero-location',p.location);text('#about-location',String(p.location||'').toUpperCase());text('#contact-location',p.location);
  $('#primary-cta').innerHTML=`${esc(h.primaryButton||'Explore my work')} <span aria-hidden="true">&#8599;</span>`;
  $('#secondary-cta').innerHTML=`${esc(h.secondaryButton||"Let's connect")} <span aria-hidden="true">&#8594;</span>`;
  const portrait=linkURL(p.portraitUrl);
  if(portrait){const img=$('#hero-portrait');img.src=portrait;img.alt=p.portraitAlt||`Portrait of ${name}`;$('#hero-art').classList.add('has-portrait');$('#art-caption').hidden=true;img.addEventListener('error',()=>{img.src='assets/cyber-avatar.svg';img.alt='Abstract cyber illustration, not a portrait';$('#hero-art').classList.remove('has-portrait');$('#art-caption').hidden=false;},{once:true});}
  const socialLabels={linkedin:'LinkedIn',github:'GitHub',tryhackme:'TryHackMe',hackthebox:'Hack The Box',portswigger:'PortSwigger'};
  const socialLinks=Object.entries(data.links||{}).map(([key,value])=>({key,label:socialLabels[key]||key,url:linkURL(value)})).filter(l=>l.url);
  $('#hero-socials').innerHTML=socialLinks.slice(0,2).map(l=>`<a href="${esc(l.url)}"${linkAttrs(l.url)}>${esc(l.label)} <span aria-hidden="true">&#8599;</span></a>`).join('');
  $('#hero-socials').hidden=!socialLinks.length;
  $('#contact-socials').innerHTML=socialLinks.map(l=>`<a href="${esc(l.url)}"${linkAttrs(l.url)}>${esc(l.label)} <span aria-hidden="true">&#8599;</span></a>`).join('');
  $('#stats').innerHTML=arr(data.stats).map(stat=>`<div class="stat"><span class="stat-value">${esc(stat.value)}</span><span class="stat-label">${esc(stat.label)}</span><span class="stat-note">${esc(stat.note)}</span></div>`).join('');
  $('#stats').style.gridTemplateColumns=`repeat(${Math.max(1,Math.min(arr(data.stats).length,4))},1fr)`;
  $('#about-title').innerHTML=esc(about.title||"A builder's perspective.\nA researcher's curiosity.").replace(/\n/g,'<br>');
  $('#about-paragraphs').innerHTML=arr(about.paragraphs).map(s=>`<p>${esc(s)}</p>`).join('');
  $('#principles').innerHTML=arr(about.principles).map(s=>`<span class="principle">${icon('check')}${esc(s)}</span>`).join('');
  const resume=linkURL(p.resumeUrl);if(resume){$('#resume-link').href=resume;$('#resume-link').hidden=false;$('#resume-link').target='_blank';$('#resume-link').rel='noopener noreferrer';}
  $('#expertise-grid').innerHTML=arr(data.expertise).map((e,i)=>`<article class="expertise-card reveal"><div class="expertise-top">${icon(e.icon)}<span class="mono">${esc(e.number||String(i+1).padStart(2,'0'))}</span></div><h3>${esc(e.title)}</h3><p>${esc(e.description)}</p>${tags(e.tags)}</article>`).join('');
  $('#toolkit').innerHTML=arr(data.skills).map(g=>`<div class="skill-group reveal"><h4>${esc(g.label)}</h4><div class="skill-items">${arr(g.items).map(s=>`<span class="skill-item">${esc(s)}</span>`).join('')}</div></div>`).join('');
  text('#experience-intro',experience.intro);text('#company-name',experience.company);text('#company-department',experience.department);text('#company-period',experience.period);
  $('#timeline').innerHTML=arr(experience.roles).map(r=>`<article class="timeline-item reveal"><p class="mono">${esc(r.dates)}</p><h3>${esc(r.title)}</h3><p>${esc(r.label)}</p></article>`).join('');
  text('#leadership-title',experience.sharedTitle || 'Leadership & knowledge sharing');
  $('#leadership-items').innerHTML=arr(experience.shared).map(s=>`<p>${icon('check')}<span>${esc(s)}</span></p>`).join('');
  const education=data.education||{};
  $('#credentials').innerHTML=arr(data.certifications).map(c=>{const url=linkURL(c.url);return `<article class="credential reveal"><div class="credential-top">${icon('award')}<span class="mono">${esc(c.date)}</span></div><h4>${esc(c.name)}</h4><p>${esc(c.issuer)}</p>${url?`<a class="text-link" href="${esc(url)}"${linkAttrs(url)}>Verify credential &#8599;</a>`:''}</article>`;}).join('')+`<article class="credential reveal"><div class="credential-top">${icon('book')}<span class="mono">${esc(education.year)}</span></div><h4>${esc(education.degree)}</h4><p>${esc(education.subject)}<br>${esc(education.university)}</p></article>`;
  text('#contact-description',contact.description || 'Have a cybersecurity role or a technical challenge in mind? Let\'s connect.');
  if(contact.title) $('#contact-title').innerHTML=esc(contact.title).replace(/\n/g,'<br>');
  text('#contact-email',email);$('#contact-email').href=safeEmail?'https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(safeEmail):'#contact';$('#contact-email').target='_blank';$('#contact-email').rel='noopener noreferrer';
  if(p.phone){text('#contact-phone',p.phone);$('#contact-phone').href='tel:'+String(p.phone).replace(/[^+\d]/g,'');$('#contact-phone').hidden=false;}
  text('#footer-note',contact.note||'Security research. Practical engineering. Continuous learning.');
  text('#copyright',`${new Date().getFullYear()} ${name}.`);
  function diagram(type) {
    let content='';
    if(type==='lab') content=`<div class="diagram-lab"><span class="diagram-node">${icon('globe')}Application</span><span class="diagram-node">${icon('target')}Research</span><span class="diagram-node">${icon('layers')}Data layer</span><span class="diagram-node">${icon('code')}Lab scenario</span></div>`;
    else if(type==='app') content='<div class="diagram-window"><div class="window-top"><i></i><i></i><i></i></div><div class="window-body"><div class="window-sidebar"><i></i><i></i><i></i><i></i></div><div class="window-content"><b>Built for real work.</b><div class="window-boxes"><span>CRM</span><span>ATTENDANCE</span><span>EXAMS</span></div></div></div></div>';
    else if(type==='infra') content=`<div class="diagram-network"><div class="network-head">DNS / REVERSE PROXY</div><div class="network-wire"></div><div class="network-row"><span>${icon('server')}PHYSICAL</span><span>${icon('terminal')}VPS</span><span>${icon('layers')}CLOUD</span></div></div>`;
    else content=`<div class="diagram-security">${icon('shield')}<div class="security-lines"><span><b>01</b>Define the scope</span><span><b>02</b>Investigate & validate</span><span><b>03</b>Document findings</span></div></div>`;
    return `<div class="diagram" aria-hidden="true"><span class="diagram-label">CONCEPT / ILLUSTRATIVE VIEW</span>${content}</div>`;
  }
  const projects=arr(data.projects);let activeFilter='All';
  const categoryOrder=['Security','Research','Infrastructure','Networking','Engineering','Tools'];
  const categories=['All',...categoryOrder.filter(c=>projects.some(p=>p.category===c)),...new Set(projects.map(item=>item.category||'Projects').filter(c=>!categoryOrder.includes(c)))];
  $('#project-filters').innerHTML=categories.map(c=>`<button type="button" class="filter-button" data-category="${esc(c)}" aria-pressed="${c==='All'}">${esc(c)}</button>`).join('');
  function caseURL(project) { const slug=String(project.id||'').trim(); return /^[a-z0-9][a-z0-9-]{0,72}$/.test(slug) ? ((window.WORK_LIBRARY||[]).some(p=>p.id===slug) ? 'work/'+slug+'/' : 'work/index.html?project='+encodeURIComponent(slug)) : ''; }
  function renderProjects(){
    const selected=projects.map((project,index)=>({project,index})).filter(({project})=>activeFilter==='All'||(project.category||'Projects')===activeFilter);
    $('#projects-grid').innerHTML=selected.map(({project:c,index})=>{
      const previewImage=window.PORTFOLIO_PREVIEW_ASSETS?.[c.image];
      const image=(typeof previewImage==='string' && /^data:image\/(png|jpeg|webp);base64,/.test(previewImage))?previewImage:linkURL(c.image);
      const href=caseURL(c);
      const isTool=c.category==='Tools';
      return `<article class="project-card"><div class="project-image">${image?`<img src="${esc(image)}" alt="${esc(c.imageAlt||c.title)}" loading="lazy" width="640" height="360" data-fallback="${esc(c.visual||'security')}">`:diagram(c.visual)}<span class="project-number">${String(index+1).padStart(2,'0')} / ${esc(c.category||'PROJECT')}</span></div><div class="project-content"><p class="project-eyebrow">${esc(c.eyebrow)}</p><h3>${esc(c.title)}</h3><p class="project-summary">${esc(c.summary)}</p>${tags(c.tags)}<div class="project-footer"><span class="project-status">${isTool?'PROTOTYPE / IN DEVELOPMENT':'CASE STUDY / SELECTED WORK'}</span><a class="project-open" href="${esc(href||'#work')}" aria-label="Read case study: ${esc(c.title)}">Read story ${icon('arrow-up-right')}</a></div></div></article>`;
    }).join('');
    text('#work-count',`${String(selected.length).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')} PROJECTS`);
    $$('.project-image img').forEach(img=>img.addEventListener('error',()=>{img.outerHTML=diagram(img.dataset.fallback);},{once:true}));
  }
  $('#project-filters').addEventListener('click',e=>{const btn=e.target.closest('[data-category]');if(!btn)return;activeFilter=btn.dataset.category;$$('[data-category]',$('#project-filters')).forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));renderProjects();});
  renderProjects();
  const menu=$('#menu-toggle'),nav=$('#navigation');
  function closeMenu(){nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');menu.innerHTML=icon('menu');}
  menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('is-open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');menu.innerHTML=icon(open?'x':'menu');});
  $$('a[href^="#"]',nav).forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('is-open')){closeMenu();menu.focus();}});
  document.addEventListener('click',e=>{if(!e.composedPath().includes($('#header')))closeMenu();});
  // Resolve in-page links locally, including in the downloadable standalone preview.
  document.addEventListener('click',e=>{
    const a=e.target.closest('a[href^="#"]');if(!a)return;
    const hash=a.getAttribute('href');if(!hash||hash==='#')return;
    const target=document.getElementById(hash.slice(1));if(!target)return;
    e.preventDefault();target.scrollIntoView({behavior:motion?'smooth':'auto',block:'start'});
    if(a.classList.contains('skip-link')){target.tabIndex=-1;target.focus({preventScroll:true});}
    try{history.replaceState(null,'',hash);}catch{/* Local preview may not permit history changes. */}
  });
  $('#copy-email').addEventListener('click',async()=>{
    try {if(!navigator.clipboard?.writeText)throw new Error('Fallback');await navigator.clipboard.writeText(email);notify('Email copied to clipboard.');}
    catch {const input=document.createElement('textarea');input.value=email;input.style.cssText='position:fixed;top:0;left:-10000px';document.body.append(input);input.select();let copied=false;try{copied=document.execCommand('copy');}catch{}input.remove();notify(copied?'Email copied to clipboard.':`Copy this address: ${email}`);}
  });
  // Browser-based email draft links are explicit, not claimed as sent messages.
  const nameForContact=encodeURIComponent(p.name || 'Mohammed Suhail C S');
  const draftSubject=encodeURIComponent(contact.emailSubject||'Cybersecurity opportunity - Mohammed Suhail C S');
  const gmailURL=`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(safeEmail)}&su=${draftSubject}`;
  const outlookURL=`https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(safeEmail)}&subject=${draftSubject}`;
  const linkedInURL=linkURL(data.links?.linkedin);
  const githubURL=linkURL(data.links?.github);
  const channels=[
    {key:'gmail',label:'Gmail',hint:'Compose in Gmail',url:gmailURL},
    {key:'outlook',label:'Outlook',hint:'Compose in Outlook',url:outlookURL},
    {key:'linkedin',label:'LinkedIn',hint:'Connect professionally',url:linkedInURL},
    {key:'github',label:'GitHub',hint:'View source & projects',url:githubURL}
  ].filter(channel=>channel.url && (channel.key==='gmail'||channel.key==='outlook'?!!safeEmail:true));
  const channelIcon=key=>({
    gmail:'<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="#4285F4" d="M3 26V8l6 4.5V26H3z"/><path fill="#34A853" d="M23 12.5 29 8v18h-6z"/><path fill="#EA4335" d="M3 8 7 5l9 7 9-7 4 3-13 10z"/><path fill="#FBBC04" d="M23 12.5 29 8V5l-4-1-2 2z"/></svg>',
    outlook:'<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="8" y="5" width="22" height="22" rx="3" fill="#0078D4"/><path d="M9 9h19v15H9z" fill="#2b88d8"/><path d="m10 12 9 7 9-7" fill="none" stroke="#d9f0ff" stroke-width="2"/><rect x="2" y="8" width="15" height="18" rx="2" fill="#0365aa"/><text x="9.5" y="21.2" text-anchor="middle" fill="white" font-size="12" font-weight="bold">O</text></svg>',
    linkedin:'<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="6" fill="#0A66C2"/><path fill="white" d="M7 12h4v13H7zm2-6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm6 6h4v2c.7-1.3 2-2.4 4-2.4 4.4 0 5 2.8 5 6.4v7h-4v-6.6c0-1.6-.1-3.4-2.2-3.4s-2.8 1.6-2.8 3.2V25h-4z"/></svg>',
    github:'<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="15" fill="#22252d" stroke="#686a75"/><path d="M11 24c-5 1-5-3-7-3m23-7a9 9 0 0 0-2.5-6.2c.1-2.2-.4-3.1-.4-3.1s-1.5 0-3.4 1.4a17 17 0 0 0-9.4 0C9.4 4.7 7.9 4.7 7.9 4.7s-.5.9-.4 3.1A9 9 0 0 0 5 14c0 4.7 3.1 7.2 7.2 7.6-.7.6-1 1.3-1 2.4v2.3h10v-2.3c0-1.1-.3-1.8-1-2.4C24.3 21.2 27 18.7 27 14Z" fill="none" stroke="white" stroke-width="1.55"/></svg>'}[key]||icon('globe'));
  const channelMarkup=channels.map(c=>`<a class="contact-channel" href="${esc(c.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(c.label)} - ${esc(c.hint)}"><span class="channel-icon channel-${esc(c.key)}">${channelIcon(c.key)}</span><strong>${esc(c.label)}</strong><small>${esc(c.hint)}</small><span class="channel-arrow" aria-hidden="true">&#8599;</span></a>`).join('');
  $('#contact-icon-grid').innerHTML=channelMarkup;
  $('#contact-socials').hidden=true; // The icon cards are the primary contact links.
  hydrateIcons();
  // Theme, motion preferences and progressive reveal. No content is hidden without JS.
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  let motionChoice=store.get('suhail-crimson-motion')!=='off';let motion=motionChoice&&!reduced.matches;
  const themeButton=$('#theme-toggle'),motionButton=$('#motion-toggle');
  function applyTheme(theme){document.documentElement.dataset.theme=theme;themeButton.innerHTML=icon(theme==='dark'?'sun':'moon');themeButton.setAttribute('aria-label',`Switch to ${theme==='dark'?'light':'dark'} theme`);themeButton.title=themeButton.getAttribute('aria-label');$('meta[name="theme-color"]').content=theme==='dark'?'#09090e':'#f7f5f5';}
  applyTheme(store.get('suhail-crimson-theme')==='light'?'light':'dark');
  themeButton.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';applyTheme(next);store.set('suhail-crimson-theme',next);drawParticles(0,true);});
  let revealObserver=null;
  function setupReveal(){
    if(!('IntersectionObserver' in window))return;
    revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('is-pending');entry.target.classList.add('is-shown');revealObserver.unobserve(entry.target);}}),{threshold:.04});
    $$('.reveal').forEach(node=>{if(motion && node.getBoundingClientRect().top>innerHeight*.9){node.classList.add('is-pending');revealObserver.observe(node);}else node.classList.add('is-shown');});
  }
  let frameId=0;
  function applyMotion(){
    motion=motionChoice&&!reduced.matches;document.documentElement.dataset.motion=motion?'on':'off';document.documentElement.classList.toggle('motion-enabled',motion);
    motionButton.innerHTML=icon(motion?'pause':'play');motionButton.setAttribute('aria-pressed',String(!motion));motionButton.setAttribute('aria-label',motion?'Pause animations':'Enable animations');motionButton.title=motionButton.getAttribute('aria-label');
    if(!motion){$$('.reveal').forEach(n=>n.classList.remove('is-pending'));$('#hero-art').style.removeProperty('--art-x');$('#hero-art').style.removeProperty('--art-y');cancelAnimationFrame(frameId);drawParticles(0,true);}else if(!document.hidden){cancelAnimationFrame(frameId);frameId=requestAnimationFrame(drawParticles);}
  }
  motionButton.addEventListener('click',()=>{if(reduced.matches){notify('Reduced motion is enabled in your device settings.');return;}motionChoice=!motionChoice;store.set('suhail-crimson-motion',motionChoice?'on':'off');applyMotion();});
  reduced.addEventListener('change',applyMotion);
  const canvas=$('#ambient'),ctx=canvas.getContext('2d');let cw=0,ch=0,particles=[],lastFrame=0;
  function resizeCanvas(){const dpr=Math.min(devicePixelRatio||1,1.5);cw=innerWidth;ch=innerHeight;canvas.width=cw*dpr;canvas.height=ch*dpr;if(ctx)ctx.setTransform(dpr,0,0,dpr,0,0);particles=Array.from({length:cw<680?18:42},(_,i)=>({x:((i*179+61)%997)/997*cw,y:((i*83+91)%991)/991*ch,r:.5+(i%4)*.45,s:.08+(i%5)*.04,alpha:.15+(i%6)*.07}));drawParticles(0,true);}
  function drawParticles(t,staticOnly=false){
    if(!ctx)return;
    if(!staticOnly && t-lastFrame<32){if(motion&&!document.hidden)frameId=requestAnimationFrame(drawParticles);return;}
    const delta=staticOnly?0:Math.min((t-lastFrame)/16.67,3);lastFrame=t;
    ctx.clearRect(0,0,cw,ch);const light=document.documentElement.dataset.theme==='light';
    particles.forEach(particle=>{if(motion&&!staticOnly){particle.y-=particle.s*delta;if(particle.y<0)particle.y=ch;}ctx.beginPath();ctx.fillStyle=`rgba(${light?'158,20,48':'255,53,82'},${particle.alpha})`;ctx.arc(particle.x,particle.y,particle.r,0,Math.PI*2);ctx.fill();});
    if(!staticOnly&&motion&&!document.hidden)frameId=requestAnimationFrame(drawParticles);
  }
  let resizeTimer;window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(resizeCanvas,130);if(innerWidth>680)closeMenu();});
  document.addEventListener('visibilitychange',()=>{cancelAnimationFrame(frameId);if(!document.hidden&&motion){lastFrame=0;frameId=requestAnimationFrame(drawParticles);}});
  resizeCanvas();applyMotion();setupReveal();
  const heroArt=$('#hero-art');
  heroArt.addEventListener('pointermove',e=>{if(!motion||!matchMedia('(hover:hover) and (pointer:fine)').matches)return;const r=heroArt.getBoundingClientRect();heroArt.style.setProperty('--art-y',`${(e.clientX-r.left-r.width/2)/r.width*5}deg`);heroArt.style.setProperty('--art-x',`${-(e.clientY-r.top-r.height/2)/r.height*4}deg`);});
  heroArt.addEventListener('pointerleave',()=>{heroArt.style.setProperty('--art-x','0deg');heroArt.style.setProperty('--art-y','0deg');});
  document.addEventListener('pointerdown',e=>{if(!motion)return;const button=e.target.closest('.button');if(!button)return;const r=button.getBoundingClientRect(),size=Math.max(r.width,r.height);const dot=document.createElement('span');dot.className='ripple';dot.setAttribute('aria-hidden','true');dot.style.cssText=`width:${size}px;height:${size}px;left:${e.clientX-r.left-size/2}px;top:${e.clientY-r.top-size/2}px`;button.append(dot);setTimeout(()=>dot.remove(),600);});
  // Section-aware vertical navigation. Keep native scrollbar usable for mouse, touch and keyboard.
  let scrollPending=false;
  const sectionIds=['home','work','about','expertise','journey','contact'];
  const railLinks=$$('.rail-stop', $('#section-rail'));
  function onScroll(){
    const max=document.documentElement.scrollHeight-innerHeight;
    $('#progress').style.transform=`scaleX(${max>0?Math.min(scrollY/max,1):0})`;
    const anchor=scrollY+innerHeight*.40;
    const tops=sectionIds.map(id=>{const el=$('#'+id);return el?el.getBoundingClientRect().top+scrollY:0;});
    let activeIndex=0;
    tops.forEach((top,i)=>{if(anchor>=top)activeIndex=i;});
    const next=Math.min(activeIndex+1,sectionIds.length-1);
    const between=next===activeIndex?0:Math.max(0,Math.min(1,(anchor-tops[activeIndex])/Math.max(1,tops[next]-tops[activeIndex])));
    const percent=next===activeIndex?100:((activeIndex+between)/(sectionIds.length-1))*100;
    const railFill=$('#section-rail-fill');if(railFill)railFill.style.height=`calc((100% - 68px) * ${percent/100})`;
    railLinks.forEach((a,i)=>{
      const active=i===activeIndex;
      a.classList.toggle('active',active);
      if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');
    });
    const active=sectionIds[activeIndex];
    $$('a',nav).forEach(a=>{
      const current=a.getAttribute('href')==='#'+active;
      a.classList.toggle('active',current);
      if(current)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');
    });
    scrollPending=false;
  }
  addEventListener('scroll',()=>{if(!scrollPending){scrollPending=true;requestAnimationFrame(onScroll);}},{passive:true});
  addEventListener('resize',()=>{if(!scrollPending){scrollPending=true;requestAnimationFrame(onScroll);}},{passive:true});
  onScroll();
})();
