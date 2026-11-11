/* SUHAIL.CS / V3 VISUAL LAB
   Original, static visual demonstrations. No network calls, no collection,
   no live scans, no remote shell or device access. Safe for GitHub Pages. */
(() => {
  'use strict';
  const titles = {
    'security-assessments':['ATTACK SURFACE','ASSESSMENT PIPELINE'],
    'vulnerable-labs':['RESEARCH LAB','REALISTIC APP ENVIRONMENTS'],
    'hosting-infrastructure':['COMPUTE LAYER','DELL / PROXMOX / VMS'],
    'networking-operations':['NETWORK MAP','VLAN SEGMENTATION'],
    'client-vps-cloudflare':['EDGE TO ORIGIN','DNS / WAF / REVERSE PROXY'],
    'ctf-operations':['CHALLENGE ARENA','BUILD / HOST / LEARN'],
    'malware-response':['INCIDENT TIMELINE','INVESTIGATE / CONTAIN'],
    'business-applications':['APPLICATION STUDIO','CRM / ATTENDANCE / EXAMS'],
    'identity-mfa':['IDENTITY FLOW','SSO / MFA / ACCESS'],
    'siem-automation':['DETECTION PIPELINE','LOGS / RULES / ROUTING'],
    'hardware-research':['HARDWARE LAB','RF / USB / RASPBERRY PI'],
    'scopeforge':['SCOPEFORGE','ASSESSMENT PROTOTYPE'],
    'wp-scope-workbench':['WP SCOPE WORKBENCH','WORDPRESS ASSESSMENT PROTOTYPE']
  };
  const tag = (id, text) => `<span class="v3-lab-tag">${text}</span>`;
  const wave = '<span class="v3-wave" aria-hidden="true"></span>';
  const dots = n => Array.from({length:n},(_,i)=>`<i style="--n:${i}"></i>`).join('');
  const rack = `<div class="v3-rack"><div class="v3-rack-hd"><i></i><span>ON-PREM / RACK 01</span><i></i></div>${['R730 · HYPERVISOR','R840 · COMPUTE','NODE 03 · VMS','STORAGE · VOLUMES'].map((name,i)=>`<div class="v3-rack-unit"><span class="v3-bay">${String(i+1).padStart(2,'0')}</span><b>${name}</b><span class="v3-leds"><i></i><i></i><i></i></span></div>`).join('')}<div class="v3-rack-foot">iDRAC / PROXMOX / LINUX</div></div>`;
  const terminalStatic = `<div class="v3-mini-console"><div class="v3-console-hd"><span>node01 / proxmox</span><span>SIMULATED</span></div><p><em>root@node01</em>:~# pveversion</p><p>pve-manager / demo</p><p><em>root@node01</em>:~# qm list</p><p>VMID NAME STATUS</p><p>101 lab-web <strong>running</strong></p><p>102 client-vps <strong>running</strong></p><span class="v3-cursor" aria-hidden="true">▌</span></div>`;
  function infra(mode) {
    return `<div class="v3-infra-layout">${rack}<div class="v3-infra-right">${mode==='detail'?`<div class="v3-terminal"><div class="v3-console-hd"><span>● ● ● &nbsp; LAB TERMINAL</span><span>NOT CONNECTED</span></div><div class="v3-term-rows" aria-live="polite"><p>Proxmox-style demo. Type <strong>help</strong> to explore.</p></div><form class="v3-term-form"><label for="v3-term-input"><span>root@node01:~#</span></label><input id="v3-term-input" name="command" aria-label="Simulated terminal command" autocomplete="off" spellcheck="false" placeholder="help" maxlength="60"/><button type="submit">RUN ↵</button></form></div>`:terminalStatic}<div class="v3-infra-foot"><span class="v3-online"></span> 3-NODE LAB MODEL <small>illustrative, not live infrastructure</small></div></div></div>`;
  }
  function assess() {
    return `<div class="v3-assess"><div class="v3-assess-rows">${['SCOPE','ENUMERATE','VALIDATE','REPORT','RETEST'].map((step,i)=>`<div class="v3-assess-row" style="--n:${i}"><span class="v3-step-num">0${i+1}</span><span>${step}</span><span class="v3-assess-meter"><i></i></span><span class="v3-step-mark">✓</span></div>`).join('')}</div><div class="v3-assess-plate"><span>ASSESSMENT / METHODOLOGY</span><strong>Evidence before conclusions.</strong><div class="v3-signal-grid">${dots(15)}</div><small>WEB · API · NETWORK · AD · CLOUD</small></div></div>`;
  }
  function labs() {
    return `<div class="v3-labs"><div class="v3-lab-cards">${[
      ['BANKING','Accounts / roles','01'],['COMMERCE','Cart / checkout','02'],['UNIVERSITY','Portal / records','03'],['HRM / CRM','People / workflow','04']
    ].map(([title,subtitle,num],i)=>`<div class="v3-lab-tile" style="--n:${i}"><small>${num} / ENVIRONMENT</small><b>${title}</b><span>${subtitle}</span><i class="v3-lab-tile-dot"></i></div>`).join('')}</div><div class="v3-lab-flow"><span>CVE RESEARCH</span><i></i><span>BUILD</span><i></i><span>DEPLOY</span><i></i><span>TEACH</span></div></div>`;
  }
  function networking(mode) {
    return `<div class="v3-net"><svg class="v3-net-lines" viewBox="0 0 500 240" preserveAspectRatio="none" aria-hidden="true"><path d="M250 33 V79 M250 89 V130 M250 137 L77 177 M250 137 L249 177 M250 137 L421 177"/><path class="v3-net-packets" d="M250 33 V79 M250 89 V130 M250 137 L77 177 M250 137 L249 177 M250 137 L421 177"/></svg><div class="v3-net-node v3-net-isp">ISP / SINGLE WAN</div><div class="v3-net-node v3-net-router">TP-LINK ER8411 <i class="v3-green-light"></i></div><div class="v3-net-node v3-net-switch">MANAGED SWITCH</div><div class="v3-net-node v3-net-a">VLAN 10<br><b>STAFF</b></div><div class="v3-net-node v3-net-b">VLAN 20<br><b>GUEST</b></div><div class="v3-net-node v3-net-c">VLAN 30<br><b>LAB</b></div><div class="v3-net-bottom">${mode==='detail'?`<span>HIGHLIGHT A SEGMENT</span><div class="v3-net-filters">${['ALL','STAFF','GUEST','LAB'].map((x,i)=>`<button type="button" data-vlan="${x}" aria-pressed="${i===0?'true':'false'}">${x}</button>`).join('')}</div>`:'<span>SEGMENTATION / ACCESS CONTROL / WIRELESS</span>'}</div></div>`;
  }
  function cloud() {
    return `<div class="v3-cloud"><div class="v3-cloud-path"><div class="v3-cloud-node"><small>CLIENT</small><strong>example.test</strong></div><div class="v3-cloud-connector">${wave}</div><div class="v3-cloud-node v3-cloud-edge"><small>EDGE</small><strong>CLOUDFLARE</strong><span>DNS + RULES</span></div><div class="v3-cloud-connector">${wave}</div><div class="v3-cloud-node"><small>ORIGIN</small><strong>NGINX → VPS</strong><span>PROXMOX / LINUX</span></div></div><div class="v3-cloud-chart"><div><span>REQUEST FLOW</span><b>EDGE → ORIGIN</b></div><div class="v3-bars">${Array.from({length:20},(_,i)=>`<i style="--n:${i};--h:${30+((i*47)%57)}%"></i>`).join('')}</div></div></div>`;
  }
  function ctf() {
    return `<div class="v3-ctf"><div class="v3-ctf-top"><span>TRAINING ARENA</span><strong>CHALLENGE BOARD</strong><i class="v3-green-light"></i></div><div class="v3-ctf-cards">${[['WEB','Auth logic'],['FORENSICS','Artifact trail'],['SYSTEM','Service config'],['CRYPTO','Pattern analysis']].map(([title,desc],i)=>`<div class="v3-ctf-card" style="--n:${i}"><span>${String(i+1).padStart(2,'0')}</span><b>${title}</b><small>${desc}</small><div class="v3-ctf-progress"><i></i></div></div>`).join('')}</div><div class="v3-ctf-foot">CAPTURE THE FLAG / RESEARCH / LAB DEVELOPMENT</div></div>`;
  }
  function malware() {
    const steps=[['FILE RECEIVED','Origin / execution path'],['ANALYSIS','Behaviour / persistence'],['ROOT CAUSE','Affected systems'],['CONTAINMENT','Isolate / restrict']];
    return `<div class="v3-mal"><div class="v3-mal-case"><small>INCIDENT / INVESTIGATION MODEL</small><strong>Suspicious execution</strong><span><i class="v3-warning-dot"></i> CASE UNDER REVIEW</span></div><div class="v3-mal-path">${steps.map(([a,b],i)=>`<div class="v3-mal-step" style="--n:${i}"><i></i><b>${a}</b><small>${b}</small></div>`).join('')}</div><div class="v3-mal-footer">SYNTHETIC VISUAL / NO CLIENT ARTIFACTS</div></div>`;
  }
  function apps(mode) {
    return `<div class="v3-app"><div class="v3-app-browser"><div class="v3-browser-bar"><span>○ ○ ○</span><b>APPLICATION / CONCEPTUAL UI</b></div><div class="v3-app-nav">${['CRM','ATTENDANCE','EXAMS'].map((n,i)=>`<button type="button" data-app-tab="${n}" aria-pressed="${i===0?'true':'false'}">${n}</button>`).join('')}</div><div class="v3-app-body"><aside><i></i><i></i><i></i><i></i></aside><div class="v3-app-data"><small>DEMO / <span data-app-heading>CRM</span></small><strong data-app-main>Customer workflow</strong><div class="v3-app-charts"><i></i><i></i><i></i><i></i></div><div class="v3-app-table"><i></i><i></i><i></i></div></div></div></div><div class="v3-app-bottom">REACT + NODE.JS / WEBHOOKS / DATABASE</div></div>`;
  }
  function identity(mode) {
    return `<div class="v3-id"><div class="v3-id-steps"><div class="v3-id-box"><small>01 / USER</small><strong>Sign in</strong></div><div class="v3-id-arrow">→</div><div class="v3-id-box v3-id-focus"><small>02 / SSO</small><strong>Authentik</strong></div><div class="v3-id-arrow">→</div><div class="v3-id-box"><small>03 / CHECK</small><strong>MFA</strong></div></div><div class="v3-id-status"><span class="v3-id-badge">ACCESS GATE</span><strong data-id-result>Waiting for verification</strong><p data-id-text>Illustrative multi-factor flow; not connected to a real identity provider.</p>${mode==='detail'?'<button type="button" class="v3-action" data-id-simulate>Simulate MFA verification ↗</button>':'<span class="v3-id-lines">IDENTITY → CHALLENGE → RESOURCE</span>'}</div></div>`;
  }
  function siem(mode) {
    return `<div class="v3-siem"><div class="v3-siem-track">${[['APP','EVENT'],['WAZUH','SPLUNK'],['RULES','PRIORITY'],['N8N','DISCORD']].map(([a,b],i)=>`<div class="v3-siem-node" style="--n:${i}"><small>${a}</small><strong>${b}</strong><span class="v3-siem-pulse"></span></div>`).join('')}</div><div class="v3-siem-alert"><div><small>DETECTION / SANDBOX</small><strong data-siem-alert>Alert routed: medium severity</strong></div>${mode==='detail'?`<div class="v3-siem-controls">${['LOW','MEDIUM','HIGH'].map((x,i)=>`<button type="button" data-siem-level="${x}" aria-pressed="${i===1?'true':'false'}">${x}</button>`).join('')}</div>`:'<div class="v3-siem-spectrum"><i></i><i></i><i></i><i></i></div>'}</div></div>`;
  }
  function hardware() {
    return `<div class="v3-hardware"><div class="v3-hardware-board"><div class="v3-pcb-lines"></div><div class="v3-hardware-chip">RASPBERRY PI<br><small>LAB CONTROLLER</small></div>${['USB','RF','WIFI','GPIO'].map((x,i)=>`<span class="v3-pcb-pin" style="--n:${i}">${x}</span>`).join('')}</div><div class="v3-hardware-set"><div class="v3-hardware-device"><strong>FLIPPER</strong><small>CONTROLLED DEMOS</small><span>▥ ▥ ▥</span></div><div class="v3-hardware-device"><strong>PWNAGOTCHI</strong><small>LOCAL RESEARCH</small><span>( • ◡ • )</span></div><div class="v3-hardware-note">AUTHORIZED HARDWARE LABS ONLY</div></div></div>`;
  }
  function scopeforge(mode) {
    return `<div class="v3-tool"><div class="v3-tool-top"><span>SF / SCOPEFORGE</span><span>PROTOTYPE</span></div><div class="v3-tool-tabs">${['WEB','NETWORK','AD EXPORT'].map((x,i)=>`<button type="button" data-scope-tab="${x}" aria-pressed="${i===0?'true':'false'}">${x}</button>`).join('')}</div><div class="v3-tool-flow"><div class="v3-tool-node"><small>01</small><strong>Scoped input</strong></div><i class="v3-tool-line"></i><div class="v3-tool-node v3-tool-node-active"><small>02</small><strong data-scope-center>Web inventory</strong></div><i class="v3-tool-line"></i><div class="v3-tool-node"><small>03</small><strong>Evidence report</strong></div></div><div class="v3-tool-report"><span>REPORT / DEMONSTRATION</span><div class="v3-report-bars"><i></i><i></i><i></i></div><small data-scope-note>Discovery & inventory / no live scanning from this website</small></div></div>`;
  }
  function wpscope(mode) {
    return `<div class="v3-wp"><div class="v3-wp-head"><span class="v3-wp-mark">W</span><div><strong>WP Scope Workbench</strong><small>LOCAL PROTOTYPE / WORDPRESS</small></div><span class="v3-wp-status">DEMO</span></div><div class="v3-wp-modules">${[['CORE','Discovery'],['THEMES','Inventory'],['PLUGINS','Inventory'],['REPORT','Evidence']].map(([a,b],i)=>`<div class="v3-wp-row" style="--n:${i}"><span>0${i+1}</span><b>${a}</b><small>${b}</small><i></i></div>`).join('')}</div><div class="v3-wp-foot">TXT <span>·</span> JSON <span>·</span> HTML <span>·</span> DOCX <small>VALIDATION IN PROGRESS</small></div></div>`;
  }
  const draw = {
    'security-assessments':assess,
    'vulnerable-labs':labs,
    'hosting-infrastructure':infra,
    'networking-operations':networking,
    'client-vps-cloudflare':cloud,
    'ctf-operations':ctf,
    'malware-response':malware,
    'business-applications':apps,
    'identity-mfa':identity,
    'siem-automation':siem,
    'hardware-research':hardware,
    'scopeforge':scopeforge,
    'wp-scope-workbench':wpscope
  };
  function render(id, mode='card') {
    if (!draw[id]) return '';
    const [label,subtitle]=titles[id];
    const content=draw[id](mode);
    return `<div class="v3-stage v3-${mode} v3-kind-${id}" data-v3-visual="${id}"><div class="v3-stage-head"><span class="v3-stage-name">${label}</span><span class="v3-stage-status"><i></i>${mode==='detail'?'INTERACTIVE ILLUSTRATION':subtitle}</span></div><div class="v3-stage-canvas">${content}</div><div class="v3-stage-foot"><span>${subtitle}</span><span>${mode==='detail'?'SIMULATED / NO LIVE SYSTEMS':'VIEW STORY ↗'}</span></div></div>`;
  }
  function activate(parent=document) {
    // Listeners attach only to demonstration instances. No data is transmitted.
    parent.querySelectorAll('.v3-stage').forEach(stage=>{
      if(stage.dataset.v3Ready)return;
      stage.dataset.v3Ready='1';
      const terminal=stage.querySelector('.v3-term-form');
      if(terminal){
        const input=terminal.querySelector('input');const log=stage.querySelector('.v3-term-rows');
        const help='help · ls · pwd · whoami · uptime · pveversion · qm list · ip a · ipconfig · clear';
        const outputs={
          help:help, ls:'backups/   config/   labs/   reports/   vm-images/',
          pwd:'/root (simulated environment)', whoami:'root (demo persona)',
          uptime:'up 14 days, 02:18 — simulated',pveversion:'pve-manager/8.x (illustrative; not a real host)',
          'qm list':'VMID   NAME            STATUS\n101    lab-web         running\n102    training-ctf    running\n103    client-vps      running',
          'ip a':'eth0: 192.0.2.10/24 — documentation-only address\nThis is not your browser IP.',
          ipconfig:'IPv4 address: 192.0.2.10 (simulated)\nGateway: 192.0.2.1 (simulated)'
        };
        terminal.addEventListener('submit',e=>{
          e.preventDefault();const cmd=input.value.trim().toLowerCase().replace(/\s+/g,' ');if(!cmd)return;
          if(cmd==='clear'){log.replaceChildren();input.value='';return;}
          const line=document.createElement('p');line.className='v3-terminal-command';line.textContent='root@node01:~# '+cmd;
          const result=document.createElement('p');result.className='v3-terminal-output';result.textContent=outputs[cmd]||'Unknown demo command. Type help to list supported commands.';
          log.append(line,result);while(log.children.length>16)log.firstElementChild.remove();log.scrollTop=log.scrollHeight;input.value='';
        });
      }
      const vlan=stage.querySelectorAll('[data-vlan]');
      vlan.forEach(btn=>btn.addEventListener('click',()=>{
        vlan.forEach(x=>x.setAttribute('aria-pressed',String(x===btn)));
        stage.querySelector('.v3-net').dataset.highlight=btn.dataset.vlan.toLowerCase();
      }));
      const apps=stage.querySelectorAll('[data-app-tab]');
      apps.forEach(btn=>btn.addEventListener('click',()=>{
        apps.forEach(x=>x.setAttribute('aria-pressed',String(x===btn)));
        const info={CRM:'Customer workflow',ATTENDANCE:'Employee check-in',EXAMS:'Assessment portal'};
        const title=stage.querySelector('[data-app-heading]');const main=stage.querySelector('[data-app-main]');
        if(title)title.textContent=btn.dataset.appTab;if(main)main.textContent=info[btn.dataset.appTab];
      }));
      const idBtn=stage.querySelector('[data-id-simulate]');
      if(idBtn)idBtn.addEventListener('click',()=>{
        const active=stage.classList.toggle('v3-id-verified');
        stage.querySelector('[data-id-result]').textContent=active?'Demo MFA: verified':'Waiting for verification';
        stage.querySelector('[data-id-text]').textContent=active?'Simulated success. No credentials or user accounts are involved.':'Illustrative multi-factor flow; not connected to a real identity provider.';
        idBtn.textContent=active?'Reset demo ↻':'Simulate MFA verification ↗';
      });
      const severity=stage.querySelectorAll('[data-siem-level]');
      severity.forEach(btn=>btn.addEventListener('click',()=>{
        severity.forEach(x=>x.setAttribute('aria-pressed',String(x===btn)));
        const alert=stage.querySelector('[data-siem-alert]');if(alert)alert.textContent='Demo alert routed: '+btn.dataset.siemLevel.toLowerCase()+' severity';
      }));
      const scopes=stage.querySelectorAll('[data-scope-tab]');
      scopes.forEach(btn=>btn.addEventListener('click',()=>{
        scopes.forEach(x=>x.setAttribute('aria-pressed',String(x===btn)));
        const info={WEB:['Web inventory','Web endpoint inventory / illustrative'],NETWORK:['Network inventory','Network asset discovery / illustrative'],'AD EXPORT':['Read-only AD review','Offline AD export analysis / illustrative']};
        const [title,desc]=info[btn.dataset.scopeTab];
        stage.querySelector('[data-scope-center]').textContent=title;
        stage.querySelector('[data-scope-note]').textContent=desc;
      }));
    });
  }
  window.CYBER_VISUALS={render,activate,ids:Object.keys(draw)};
})();
