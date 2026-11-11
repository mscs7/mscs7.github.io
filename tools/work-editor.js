/* Browser-only editor for published case-study data. No uploads/network writes. */
(()=>{
 'use strict';
 const $=s=>document.querySelector(s);
 const arr=x=>Array.isArray(x)?x:[];
 if(!window.PORTFOLIO||!Array.isArray(window.PORTFOLIO.projects)){
   $('#selected-title').textContent='Missing content.js. Keep this editor inside the tools/ folder of your portfolio.';return;
 }
 const data=structuredClone(window.PORTFOLIO);
 let selected=-1,dirty=false,statusTimer;
 function notify(message){const n=$('#status');n.textContent=message;n.classList.add('visible');clearTimeout(statusTimer);statusTimer=setTimeout(()=>n.classList.remove('visible'),3500);}
 function field(parent,label,value,callback,{wide=false,lines=false,hint='',multi=false}={}){
   const wrapper=document.createElement('label');wrapper.className='field'+(wide?' wide':'');
   const title=document.createElement('span');title.textContent=label;wrapper.append(title);
   const input=document.createElement(multi||lines?'textarea':'input');
   if(!(multi||lines))input.type='text';input.value=lines?arr(value).join('\n'):String(value??'');
   input.addEventListener('input',()=>{callback(lines?input.value.split('\n').map(v=>v.trim()).filter(Boolean):input.value);dirty=true;});
   wrapper.append(input);if(hint){const small=document.createElement('small');small.textContent=hint;wrapper.append(small);}parent.append(wrapper);
 }
 function section(name){const box=document.createElement('section');box.className='form-section';const title=document.createElement('h3');title.textContent=name;box.append(title);const grid=document.createElement('div');grid.className='form-grid';box.append(grid);$('#fields').append(box);return grid;}
 function renderList(){const q=$('#search').value.trim().toLowerCase();const list=$('#project-list');list.replaceChildren();data.projects.forEach((x,i)=>{if(q&&!`${x.title} ${x.category} ${x.id}`.toLowerCase().includes(q))return;const btn=document.createElement('button');btn.type='button';btn.className='project-choice';btn.setAttribute('aria-pressed',String(i===selected));const name=document.createElement('strong');name.textContent=x.title;const cat=document.createElement('small');cat.textContent=x.category+' / '+x.id;btn.append(name,cat);btn.addEventListener('click',()=>{selected=i;renderList();renderEditor();});list.append(btn);});}
 function renderEditor(){const x=data.projects[selected];if(!x)return;$('#selected-category').textContent=x.category.toUpperCase()+' / CASE STUDY';$('#selected-title').textContent=x.title;$('#selected-id').textContent='Permanent page ID: '+x.id;$('#fields').replaceChildren();
   const one=section('Homepage card');
   field(one,'Title',x.title,v=>{x.title=v;$('#selected-title').textContent=v;});
   field(one,'Category / filter',x.category,v=>x.category=v);
   field(one,'Eyebrow',x.eyebrow,v=>x.eyebrow=v);
   field(one,'Summary',x.summary,v=>x.summary=v,{wide:true,multi:true});
   field(one,'Tags (one per line)',x.tags,v=>x.tags=v,{wide:true,lines:true});
   const two=section('Work page: my contribution');
   field(two,'Scope / context',x.scope,v=>x.scope=v,{wide:true,multi:true});
   field(two,'Contributions (one per line)',x.contributions,v=>x.contributions=v,{wide:true,lines:true});
   field(two,'Outcome',x.outcome,v=>x.outcome=v,{wide:true,multi:true});
   field(two,'Confidentiality / disclosure',x.confidentiality,v=>x.confidentiality=v,{wide:true,multi:true});
   x.caseStudy=x.caseStudy||{};const c=x.caseStudy;const three=section('Work page: story details');
   for(const [label,key] of [['Intro / lede','lede'],['Section heading','kicker'],['What I noticed','notes'],['What I learned','learning']])field(three,label,c[key]||'',v=>c[key]=v,{wide:true,multi:true});
   const steps=arr(c.approach).map(row=>arr(row).join(' | '));
   field(three,'Approach steps (title | description; one per line)',steps,v=>{c.approach=v.map(row=>{const n=row.indexOf(' | ');return n>=0?[row.slice(0,n),row.slice(n+3)]:[row,''];});},{wide:true,lines:true,hint:'Example: 01 / Research | Review the relevant CVE and identify an appropriate lab scenario.'});
   const highs=arr(c.highlights).map(row=>arr(row).join(' | '));
   field(three,'Highlights (label | value; one per line)',highs,v=>{c.highlights=v.map(row=>{const n=row.indexOf(' | ');return n>=0?[row.slice(0,n),row.slice(n+3)]:[row,''];});},{wide:true,lines:true});
   field(three,'Technology stack (one per line)',c.stack||x.tags||[],v=>c.stack=v,{wide:true,lines:true});
   const four=section('Related project links');
   field(four,'Repository URL',x.repoUrl||'',v=>x.repoUrl=v,{wide:true});
   field(four,'Showcase / demo URL',x.demoUrl||'',v=>x.demoUrl=v,{wide:true});
   notify('Editing: '+x.id+' — export content.js when done.');
 }
 function exportFile(){if(!data.profile||!data.profile.name||!Array.isArray(data.projects))return notify('Cannot export: invalid data');
   const text='/* Portfolio public content — exported by the V3 work editor. */\nwindow.PORTFOLIO = '+JSON.stringify(data,null,2)+';\n';
   const blob=new Blob([text],{type:'text/javascript;charset=utf-8'}),uri=URL.createObjectURL(blob);
   const a=document.createElement('a');a.href=uri;a.download='content.js';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(uri),15000);dirty=false;notify('Downloaded content.js — replace the root file in your GitHub repository to publish.');
 }
 $('#search').addEventListener('input',renderList);$('#export').addEventListener('click',exportFile);
 addEventListener('beforeunload',e=>{if(!dirty)return;e.preventDefault();e.returnValue='';});
 selected=Math.max(0,data.projects.findIndex(p=>p.id==='security-assessments'));renderList();renderEditor();
})();
