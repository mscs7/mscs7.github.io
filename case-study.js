/* Detail pages: all content comes from content.js and work-content.js. */
(() => {
 'use strict';
 const $=sel=>document.querySelector(sel);
 const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const arr=x=>Array.isArray(x)?x:[];
 const slug=$('body').dataset.project||new URLSearchParams(location.search).get('project');
 const root=$('body').dataset.root||'../../';
 const portfolio=window.PORTFOLIO||{};
 const project=arr(portfolio.projects).find(p=>p.id===slug);
 if(!project){$('#case-title').textContent='Project not found';$('#case-intro').textContent='Return to the portfolio and open a project from Selected Work.';return;}
 const detail=project.caseStudy||{},profile=portfolio.profile||{};
 const name=profile.name||'Mohammed Suhail C S';
 const meta=$('meta[name="description"]');if(meta)meta.content=project.summary||name;
 document.title=`${project.title} | ${name}`;
 const text=(sel,val)=>{const node=$(sel);if(node)node.textContent=val??'';};
 text('#case-breadcrumb',project.category||'Selected Work');
 text('#case-eyebrow',project.eyebrow||project.category);
 text('#case-title',project.title);
 text('#case-intro',detail.lede||project.summary);
 text('#case-kicker',detail.kicker||'Behind the work.');
 text('#case-status',detail.status||'Selected experience');
 text('#case-scoping',project.scope||project.summary);
 text('#case-outcome',project.outcome);
 text('#case-insight',detail.notes||'');
 text('#case-lesson',detail.learning||'');
 text('#case-disclosure',project.confidentiality||'Sensitive details and identities are not published.');
 $('#case-tags').innerHTML=arr(project.tags).map(x=>`<span class="case-chip">${esc(x)}</span>`).join('');
 $('#case-metrics').innerHTML=arr(detail.highlights).slice(0,3).map(pair=>`<div class="case-metric"><small>${esc(pair[0])}</small><strong>${esc(pair[1])}</strong></div>`).join('');
 $('#case-contributions').innerHTML=arr(project.contributions).map(x=>`<li>${esc(x)}</li>`).join('');
 const steps=arr(detail.approach).length?detail.approach:[['01 / Understand',project.scope||project.summary],['02 / Deliver',arr(project.contributions)[0]||'Worked on the project scope.'],['03 / Reflect',project.outcome||'Documented the results.']];
 $('#case-steps').innerHTML=arr(steps).map(([title,body])=>{const label=title.split('/');return `<article class="case-step"><b>${esc(label[0])}</b><h3>${esc(label.slice(1).join('/').trim()||title)}</h3><p>${esc(body)}</p></article>`;}).join('');
 $('#case-stack').innerHTML=arr(detail.stack||project.tags).map(x=>`<span>${esc(x)}</span>`).join('');
 // Only publish trusted local or HTTPS links, never script URLs.
 function url(input){if(typeof input!=='string'||!input.trim()||/[\x00-\x20\\]/.test(input))return '';try{const resolved=new URL(input,location.href);return ['https:','http:','file:'].includes(resolved.protocol)&&!resolved.username&&!resolved.password?input:'';}catch{return '';}}
 const links=[];
 if(url(project.demoUrl))links.push(`<a href="${esc(/^https?:/i.test(project.demoUrl)?project.demoUrl:root+project.demoUrl)}" target="_blank" rel="noopener noreferrer">View related showcase ↗</a>`);
 if(url(project.repoUrl))links.push(`<a href="${esc(project.repoUrl)}" target="_blank" rel="noopener noreferrer">Explore source repository ↗</a>`);
 $('#case-links').innerHTML=links.join('');
 $('#case-links').hidden=!links.length;
 // Diagram is original vector/CSS; never a representation of a client's actual network.
 const labels=arr(detail.stack).filter(s=>s.length<20).slice(0,3);
 while(labels.length<3) labels.push(['SYSTEM','RESEARCH','SECURITY'][labels.length]);
 $('#case-art-nodes').innerHTML=labels.map(l=>`<span class="case-art-node">${esc(l)}</span>`).join('');
 text('#case-art-focus',({lab:'RESEARCH / BUILD / VALIDATE',app:'APP / DATA / WORKFLOW',infra:'SYSTEM / NETWORK / SERVICE',security:'FIND / VERIFY / IMPROVE'})[project.visual]||'SECURITY / ENGINEERING');
 text('#case-art-bottom',project.category.toUpperCase()+' / CONCEPTUAL VIEW');
 const all=arr(portfolio.projects),rank=all.findIndex(p=>p.id===slug);
 const related=all.filter(p=>p.id!==slug && (p.category===project.category)).slice(0,2);
 if(related.length<2){for(const candidate of all){if(candidate.id!==slug && !related.some(x=>x.id===candidate.id)){related.push(candidate);if(related.length===2)break;}}}
 $('#case-related').innerHTML=related.map(x=>`<a class="case-related" href="${esc(root)}work/${(window.WORK_LIBRARY||[]).some(c=>c.id===x.id)?esc(x.id)+'/':'index.html?project='+encodeURIComponent(x.id)}"><small>${esc(x.category)} / CASE STUDY</small><h3>${esc(x.title)}</h3><span>Explore this story →</span></a>`).join('');
 text('#case-footer-name',name);
 // Accessible theme and motion toggles, respecting user device preferences.
 const store={get(k){try{return localStorage.getItem(k)}catch{return null}},set(k,v){try{localStorage.setItem(k,v)}catch{}}};
 const themeButton=$('#case-theme'),motionButton=$('#case-motion');
 function theme(value){document.documentElement.dataset.theme=value;themeButton.textContent=value==='dark'?'☀':'☾';themeButton.setAttribute('aria-label',`Switch to ${value==='dark'?'light':'dark'} theme`);store.set('suhail-crimson-theme',value);}
 theme(store.get('suhail-crimson-theme')==='light'?'light':'dark');themeButton.addEventListener('click',()=>theme(document.documentElement.dataset.theme==='dark'?'light':'dark'));
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');let motionPref=store.get('suhail-crimson-motion')!=='off';let observer;
 function applyMotion(){const enable=motionPref&&!reduced.matches;document.documentElement.dataset.motion=enable?'on':'off';motionButton.textContent=enable?'Ⅱ':'▶';motionButton.setAttribute('aria-label',enable?'Pause animations':'Enable animations');document.body.classList.toggle('case-js-motion',enable);document.querySelectorAll('.case-fade').forEach(n=>{n.removeAttribute('data-case-hidden');n.classList.add('case-visible');});if(observer){observer.disconnect();observer=null;}if(enable&&'IntersectionObserver'in window){observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.removeAttribute('data-case-hidden');e.target.classList.add('case-visible');observer.unobserve(e.target);}}),{threshold:.05});document.querySelectorAll('.case-fade').forEach(n=>{if(n.getBoundingClientRect().top>innerHeight*.92){n.dataset.caseHidden='true';n.classList.remove('case-visible');observer.observe(n);}});}}
 motionButton.addEventListener('click',()=>{if(reduced.matches)return;motionPref=!motionPref;store.set('suhail-crimson-motion',motionPref?'on':'off');applyMotion();});reduced.addEventListener('change',applyMotion);applyMotion();
 let pending=false;function progress(){const max=document.documentElement.scrollHeight-innerHeight;$('#case-progress').style.transform=`scaleX(${max>0?Math.min(scrollY/max,1):0})`;pending=false;}
 addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(progress);}},{passive:true});progress();
})();
