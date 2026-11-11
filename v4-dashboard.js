/* SUHAIL.CS V4 / interactive case-study exhibits
 * Every panel uses synthetic, in-browser data. Nothing is sent over the network.
 * NO shell execution, real reconnaissance, authentication or external services.
 */
(() => {
  'use strict';
  const $ = (root, selector) => root.querySelector(selector);
  const $$ = (root, selector) => Array.from(root.querySelectorAll(selector));
  const el = (name, cls, text) => {const n=document.createElement(name);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
  const badge = label => `<span class="v4-badge">${label}</span>`;
  const button = (label, attr, active=false) => `<button type="button" class="v4-btn ${active?'is-selected':''}" ${attr} aria-pressed="${active}">${label}</button>`;
  const card = (label,value,desc='') => `<div class="v4-stat"><span>${label}</span><strong>${value}</strong><small>${desc}</small></div>`;
  const light = (active=true) => `<span class="v4-led ${active?'v4-led-live':'v4-led-idle'}"></span>`;
  const link = '<span class="v4-wire" aria-hidden="true"><i></i></span>';
  const tag = (a,b) => `<div class="v4-labelbox"><small>${a}</small><b>${b}</b></div>`;
  const lowerHint = '<p class="v4-demo-note">SIMULATED DEMONSTRATION · illustrative data only · no live connection, scans or credentials</p>';
  const exhibits = {
    'hosting-infrastructure': {
      heading:'From physical rack to hosted service.', intro:'Explore a miniature three-node Proxmox environment with a rack-to-network path. The terminal only accepts predefined demo commands.',
      render(){return `<div class="v4-infra">
      <div class="v4-route" aria-label="Illustrative network path from server rack through switch and gateway to ISP">${tag('COMPUTE','DELL RACK')}${link}${tag('LAN','MANAGED SWITCH')}${link}${tag('GATEWAY','ER8411')}${link}${tag('UPLINK','ISP / WAN')}</div>
      <div class="v4-duo v4-infra-duo"><div class="v4-rack"><div class="v4-rack-top"><span>RACK / COMPUTE</span>${light()}<span>LAB POWERED</span></div>
      ${[['01','R730','PVE-NODE-01'],['02','R840','PVE-NODE-02'],['03','NODE 03','VIRTUALIZATION'],['04','STORAGE','DATASETS / VOLUMES']].map(([n,model,service],i)=>`<div class="v4-server-unit"><span class="v4-server-no">${n}</span><div><b>${model}</b><small>${service}</small></div><div class="v4-server-vents">${Array.from({length:9},()=>'<i></i>').join('')}</div><div class="v4-led-pair">${light()}${light(i!==3)}</div></div>`).join('')}
      <div class="v4-rack-foot"><span>iDRAC</span><span>VIRTUAL MACHINES</span><span>VPS</span></div></div>
      <div class="v4-terminal"><div class="v4-window-title"><span><i class="v4-window-dot"></i> PROXMOX / LAB TERMINAL</span><span>OFFLINE MODE</span></div><div class="v4-terminal-log" role="log" aria-live="polite"><div><span class="v4-green">system</span> Welcome to the simulated Proxmox terminal.</div><div>Run <b>help</b>, <b>qm list</b>, <b>ip a</b>, or select a command below.</div></div><form class="v4-terminal-form"><label for="v4-cmd">root@pve-demo:~#</label><input id="v4-cmd" autocomplete="off" autocapitalize="off" spellcheck="false" maxlength="90" aria-label="Enter an allowed simulated terminal command" placeholder="help"/><button type="submit">RUN ↵</button></form><div class="v4-command-chips" aria-label="Command shortcuts">${['help','qm list','pct list','df -h','ip a','uptime'].map(x=>`<button type="button" data-cmd="${x}">${x}</button>`).join('')}</div></div></div>
      <div class="v4-bottom-grid">${card('PLATFORM','3 nodes','illustrative topology')}${card('COMPUTE','Dell 730 / 840','physical server work')}${card('WORKLOADS','VMs + VPS','labs and client services')}</div></div>${lowerHint}`;}
    },
    'networking-operations': {
      heading:'Follow a packet through the network.', intro:'Select a VLAN to highlight its path from the gateway through switching and wireless access. The labels are demonstrative, not a live client topology.',
      render(){return `<div class="v4-network"><div class="v4-controls"><span>SEGMENT</span>${['ALL','STAFF','GUEST','LAB'].map((x,i)=>button(x,`data-segment="${x}"`,i===0)).join('')}</div><div class="v4-net-topology">
      <div class="v4-net-row"><div class="v4-net-node v4-isp">${light()} ISP / SINGLE WAN</div></div><div class="v4-net-connector"></div><div class="v4-net-row"><div class="v4-net-node v4-gateway">${light()} ER8411 / GATEWAY</div></div><div class="v4-net-connector"></div><div class="v4-net-row"><div class="v4-net-node v4-switch">${light()} MANAGED SWITCH / AP CONTROLLER</div></div><div class="v4-net-fan" aria-hidden="true"><i></i><i></i><i></i></div><div class="v4-net-leaves">
      <button type="button" class="v4-net-endpoint" data-device="STAFF"><span>VLAN 10</span><strong>STAFF</strong><small>Workstations / access</small></button>
      <button type="button" class="v4-net-endpoint" data-device="GUEST"><span>VLAN 20</span><strong>GUEST</strong><small>Captive portal</small></button>
      <button type="button" class="v4-net-endpoint" data-device="LAB"><span>VLAN 30</span><strong>LAB / CTF</strong><small>Isolated services</small></button>
      </div></div><div class="v4-eventbar" aria-live="polite"><span>SEGMENT STATUS</span><strong data-network-status>All example segments visible</strong><small data-network-detail>Switch, gateway and wireless access paths are illustrative.</small></div></div>${lowerHint}`;}
    },
    'client-vps-cloudflare': {
      heading:'From DNS to origin—and beyond.', intro:'Step through a request from the browser to the DNS and edge layer, then inspect illustrative AWS/CloudWatch service telemetry.',
      render(){return `<div class="v4-cloud"><div class="v4-controls"><span>INSPECT LAYER</span>${['DNS','EDGE / WAF','REVERSE PROXY','AWS / CLOUDWATCH'].map((x,i)=>button(x,`data-cloud="${x}"`,i===0)).join('')}</div><div class="v4-route v4-cloud-route">${tag('REQUEST','BROWSER')}${link}${tag('LOOKUP','DNS')}${link}${tag('POLICY','CLOUDFLARE')}${link}${tag('ORIGIN','NGINX / VPS')}</div>
      <div class="v4-duo"><div class="v4-dash-info"><span class="v4-kicker">SELECTED LAYER</span><h3 data-cloud-title>DNS resolution</h3><p data-cloud-text>Maps a domain to the appropriate service. Client DNS records and origin addresses are never shown here.</p><div class="v4-dash-pills"><span>Cloudflare</span><span>Linux VPS</span><span>DNS records</span></div></div><div class="v4-telemetry"><div class="v4-telemetry-head"><span>TELEMETRY / DEMO</span><strong data-cloud-metric>DNS lookup · synthetic</strong></div><div class="v4-telemetry-bars">${Array.from({length:22},(_,i)=>`<i style="--v4-bar:${20+((i*43)%72)}%;--v4-delay:-${(i%7)*.21}s"></i>`).join('')}</div><div class="v4-metrics-bottom"><span>${light()} Demo status: online</span><span>not real CloudWatch data</span></div></div></div></div>${lowerHint}`;}
    },
    'business-applications': {
      heading:'Try the application workflow.', intro:'A small synthetic admin console demonstrates CRM, attendance and examination workflows. Buttons change local demo state only.',
      render(){return `<div class="v4-business"><div class="v4-browserbar"><span>● ● ● &nbsp; CLIENT PORTALS / LOCAL DEMO</span><span>TEST DATA ONLY</span></div><div class="v4-application-layout"><div class="v4-app-sidebar">${['CRM','ATTENDANCE','EXAMS'].map((x,i)=>button(x,`data-business-tab="${x}"`,i===0)).join('')}<div class="v4-app-sidebar-foot">React + Node.js<br>Webhooks + DB</div></div><div class="v4-app-view" data-business-view><div class="v4-app-subtitle">CRM / OVERVIEW</div><h3>Pipeline activity</h3><div class="v4-bottom-grid">${card('LEADS','12','demo records')}${card('IN REVIEW','4','qualification')}${card('COMPLETED','7','mock workflows')}</div><div class="v4-app-table"><div><span>Company</span><span>Status</span></div><div><b>Example Services</b><em data-deal-state>Qualification</em></div><div><b>Sample Retail</b><em>Contacted</em></div></div><button type="button" class="v4-action" data-demo-action="deal">Advance sample deal ↗</button></div></div></div>${lowerHint}`;}
    },
    'hardware-research': {
      heading:'Explore a contained hardware lab.', intro:'Tap a device to see an illustrative local interface. No real radio operations, credential capture or USB payloads are implemented.',
      render(){return `<div class="v4-hardware"><div class="v4-controls"><span>LAB DEVICE</span>${['FLIPPER','PWNAGOTCHI','RASPBERRY PI','USB LAB'].map((x,i)=>button(x,`data-device-tab="${x}"`,i===0)).join('')}</div><div class="v4-duo v4-hardware-grid"><div class="v4-device-frame"><div class="v4-device-shell"><div class="v4-device-screen"><span class="v4-screen-top">LAB / <span data-device-name>FLIPPER</span></span><div class="v4-device-face" data-device-face>◉ ◡ ◉</div><b data-device-mode>Device inventory</b><small data-device-state>AUTHORIZED LAB · IDLE</small></div><div class="v4-device-buttons"><button type="button" data-device-act="previous" aria-label="Previous demo screen">◀</button><button type="button" data-device-act="select" aria-label="Select demo screen">●</button><button type="button" data-device-act="next" aria-label="Next demo screen">▶</button></div></div></div><div class="v4-dash-info"><span class="v4-kicker">HARDWARE RESEARCH</span><h3 data-device-title>Flipper-style lab UI</h3><p data-device-description>Explore a local interface mock-up and safe device status checks. This panel cannot transmit, emulate credentials or control hardware.</p><div class="v4-eventbar"><span>LAB DISPLAY</span><strong data-hardware-output>Ready — demo menu</strong></div><div class="v4-dash-pills"><span>RF concepts</span><span>Raspberry Pi</span><span>USB research</span></div></div></div></div>${lowerHint}`;}
    },
    'identity-mfa': {
      heading:'See a policy decision unfold.', intro:'A simulated authentication flow shows identity verification and conditional access. No real account or credential is requested.',
      render(){return `<div class="v4-identity"><div class="v4-route">${tag('01','SIGN IN')}${link}${tag('02','AUTHENTIK')}${link}${tag('03','MFA')}${link}${tag('04','ACCESS')}</div><div class="v4-duo"><div class="v4-dash-info"><span class="v4-kicker">ACCESS POLICY</span><h3 data-id-heading>Verification pending</h3><p data-id-description>Choose a simulated outcome to see the access decision. Real logins and sessions are not created.</p><div class="v4-controls v4-id-controls">${button('PASS MFA','data-id-choice="PASS"')}${button('DENY MFA','data-id-choice="DENY"')}${button('RESET','data-id-choice="RESET"')}</div></div><div class="v4-id-gate"><div class="v4-id-key">◎</div><strong data-id-state>AWAITING VERIFICATION</strong><span data-id-substate>Not a real identity provider</span><div class="v4-id-line"></div></div></div></div>${lowerHint}`;}
    },
    'siem-automation': {
      heading:'From application event to alert route.', intro:'Generate a synthetic event to see how application logs, custom detection rules and n8n severity routing fit together.',
      render(){return `<div class="v4-siem"><div class="v4-route">${tag('EVENT','VULNERABLE APP')}${link}${tag('INGEST','SPLUNK / WAZUH')}${link}${tag('MATCH','RULE + SEVERITY')}${link}${tag('NOTIFY','N8N → DISCORD')}</div><div class="v4-controls"><span>DEMO SEVERITY</span>${['LOW','MEDIUM','HIGH','CRITICAL'].map((x,i)=>button(x,`data-siem-priority="${x}"`,i===1)).join('')}<button class="v4-action" type="button" data-siem-generate>Generate synthetic alert ↗</button></div><div class="v4-siem-log" role="status" aria-live="polite"><div class="v4-siem-log-line"><span class="v4-green">● READY</span><span>lab-app</span><span>custom-rule</span></div><pre data-siem-output>Awaiting demo event…</pre></div></div>${lowerHint}`;}
    },
    'security-assessments': {
      heading:'Walk through an authorised assessment.', intro:'Choose a phase to see what matters from scoping through evidence and remediation verification. This is a process demonstration, not a live scanner.',
      render(){return `<div class="v4-assessment"><div class="v4-assessment-phases">${['SCOPE','ENUMERATE','VALIDATE','REPORT','RETEST'].map((x,i)=>`<button type="button" data-assess-phase="${x}" aria-pressed="${i===0}"><span>0${i+1}</span><b>${x}</b><i></i></button>`).join('')}</div><div class="v4-duo"><div class="v4-dash-info"><span class="v4-kicker">ASSESSMENT METHOD</span><h3 data-assess-title>Define the scope</h3><p data-assess-desc>Confirm authorisation, test boundaries, asset owners and the applications or infrastructure in scope.</p><div class="v4-dash-pills" data-assess-tags><span>Rules of engagement</span><span>Asset inventory</span></div></div><div class="v4-proof"><span>EVIDENCE / SAMPLE</span><div class="v4-proof-progress"><i data-assess-meter style="width:20%"></i></div><strong data-assess-state>01 / 05</strong><small>Document the condition, impact and remediation—not just tool output.</small></div></div></div>${lowerHint}`;}
    },
    'vulnerable-labs': {
      heading:'Select a realistic training environment.', intro:'Each example represents research, engineering and training work—not a live vulnerable website or a functional exploit.',
      render(){return `<div class="v4-labs"><div class="v4-labs-grid">${['BANKING','COMMERCE','UNIVERSITY','CRM / HRM'].map((x,i)=>`<button type="button" class="v4-lab-choice" data-lab="${x}" aria-pressed="${i===0}"><small>0${i+1} / ENVIRONMENT</small><strong>${x}</strong><span>Explore focus ↗</span></button>`).join('')}</div><div class="v4-dash-info"><span class="v4-kicker">RESEARCH → IMPLEMENTATION</span><h3 data-lab-title>Banking workflows</h3><p data-lab-desc>Simulated roles, transaction histories and authorisation paths made for controlled security training.</p><div class="v4-lab-cycle"><span>CVE / OWASP STUDY</span>${link}<span>BUILD</span>${link}<span>DEPLOY</span>${link}<span>TEACH</span></div><div class="v4-dash-pills" data-lab-tags><span>Authorisation</span><span>Workflow security</span></div></div></div>${lowerHint}`;}
    },
    'malware-response': {
      heading:'Follow a structured investigation.', intro:'Select a stage in an illustrative incident timeline. No real malware samples or client indicators are embedded.',
      render(){return `<div class="v4-malware"><div class="v4-timeline">${['TRIAGE','ANALYSE','ROOT CAUSE','CONTAIN'].map((x,i)=>`<button type="button" data-mal-phase="${x}" aria-pressed="${i===0}"><small>0${i+1}</small><strong>${x}</strong>${light(i===0)}</button>`).join('')}</div><div class="v4-duo"><div class="v4-dash-info"><span class="v4-kicker">INCIDENT RESPONSE / CASE MODEL</span><h3 data-mal-title>Initial triage</h3><p data-mal-desc>Establish the timeline and affected endpoints from approved incident evidence.</p></div><div class="v4-evidence"><span>CASE NOTES · SYNTHETIC</span><code data-mal-artifact>event.type = suspicious_execution
asset = training-workstation
case.status = triage</code><small>No actual client artefacts are shown.</small></div></div></div>${lowerHint}`;}
    },
    'ctf-operations': {
      heading:'Explore a challenge-design board.', intro:'Choose a category to see how a learning objective becomes an authorised practice challenge.',
      render(){return `<div class="v4-ctf"><div class="v4-labs-grid">${['WEB','SYSTEM','FORENSICS','CRYPTO'].map((x,i)=>`<button type="button" class="v4-lab-choice" data-ctf-category="${x}" aria-pressed="${i===0}"><small>CHALLENGE 0${i+1}</small><strong>${x}</strong><span>View design brief ↗</span></button>`).join('')}</div><div class="v4-dash-info"><span class="v4-kicker">DESIGN / HOST / REVIEW</span><h3 data-ctf-title>Web application logic</h3><p data-ctf-desc>Teach learners to analyse authorisation checks using a deliberately isolated test portal.</p><div class="v4-dash-pills"><span>Learning objective</span><span>Hosted practice</span><span>Post-event review</span></div></div></div>${lowerHint}`;}
    },
    'scopeforge': {
      heading:'Inspect a prototype assessment workbench.', intro:'Switch between sample modules, then export a synthetic text report. This is a portfolio demonstration, not a live scan.',
      render(){return `<div class="v4-tool"><div class="v4-controls"><span>MODULE</span>${['WEB','NETWORK','AD EXPORT'].map((x,i)=>button(x,`data-tool-module="${x}"`,i===0)).join('')}</div><div class="v4-route">${tag('INPUT','AUTHORISATION')}${link}${tag('DISCOVER','READ-ONLY REVIEW')}${link}${tag('OUTPUT','EVIDENCE REPORT')}</div><div class="v4-duo"><div class="v4-dash-info"><span class="v4-kicker">SCOPEFORGE / CONCEPT DEMO</span><h3 data-tool-heading>Web inventory</h3><p data-tool-desc>Document technology and endpoint discovery within defined assessment scope.</p><button type="button" class="v4-action" data-report="scopeforge">Download example report ↗</button></div><div class="v4-sample-report"><span>LOCAL SAMPLE / NOT AN ACTUAL FINDING</span><pre data-tool-report>Module: WEB
Target: example.test
Status: illustrative
Findings: not evaluated</pre></div></div></div>${lowerHint}`;}
    },
    'wp-scope-workbench': {
      heading:'Preview an organised WordPress review.', intro:'Toggle assessment areas and download an example report. No remote WordPress site is contacted by this page.',
      render(){return `<div class="v4-tool"><div class="v4-controls"><span>INCLUDE IN SAMPLE</span>${['CORE','PLUGINS','THEMES','ENDPOINTS'].map(x=>button(x,`data-wp-module="${x}"`,true)).join('')}</div><div class="v4-duo"><div class="v4-dash-info"><span class="v4-kicker">WORDPRESS / LOCAL DEMONSTRATION</span><h3>From inventory to evidence</h3><p>Scope-first review of core, extensions and public surface. These controls only change the report preview.</p><button type="button" class="v4-action" data-report="wp">Download example report ↗</button></div><div class="v4-sample-report"><span>LOCAL SAMPLE / NOT AN ACTUAL SCAN</span><pre data-wp-report>WordPress Workbench · demo
CORE: selected
PLUGINS: selected
THEMES: selected
ENDPOINTS: selected</pre></div></div></div>${lowerHint}`;}
    }
  };
  function setText(root, selector, value){const n=$(root,selector);if(n)n.textContent=value;}
  function selectButtons(root, selector, chosen){$$(root,selector).forEach(btn=>{const yes=btn===chosen;btn.setAttribute('aria-pressed',String(yes));btn.classList.toggle('is-selected',yes);});}
  function createDownload(filename, data){
    const blob=new Blob([data],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=el('a');
    a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),250);
  }
  const terminalOutputs={
    help:'Available simulated commands:\nhelp | ls | pwd | whoami | uptime | pveversion | qm list | pct list | ip a | ipconfig | df -h | free -h | systemctl status nginx | cat hosts.txt | ping example.test | tree | history | clear',
    ls:'backups/  cluster/  config/  iso/  lab-images/  reports/',
    pwd:'/root [simulated filesystem]',
    whoami:'root [demo persona; no actual login]',
    uptime:'09:41:12 up 21 days, 4 hours [synthetic]',
    pveversion:'pve-manager/8.x — example version, not queried',
    'qm list':'VMID  NAME              STATUS\n101   training-web      running\n102   training-ctf      running\n103   client-demo-vps   running',
    'pct list':'VMID  STATUS   NAME\n201   running  proxy-demo\n202   running  monitor-demo',
    'ip a':'eth0  inet 192.0.2.10/24 [TEST-NET-1 documentation address]\nNo visitor IP is accessed.',
    ipconfig:'IPv4: 192.0.2.10 · Gateway: 192.0.2.1\nWindows-style alias, synthetic only.',
    'df -h':'Filesystem   Size  Used Avail Use% Mounted\n/dev/demo0   100G   28G   72G  28% /\nexample data only',
    'free -h':'Mem: total 32Gi used 9Gi free 23Gi [synthetic]',
    'systemctl status nginx':'● nginx.service - active (running) [synthetic]\nLoaded: demo configuration\nStatus: no real service queried',
    'cat hosts.txt':'pve-node01    192.0.2.10\npve-node02    192.0.2.11\npve-node03    192.0.2.12\n(TEST-NET addresses; not real machines)',
    'ping example.test':'PING example.test (192.0.2.20)\n64 bytes, time=4 ms [synthetic; no packets sent]',
    tree:'.\n├── backups/\n├── config/\n├── lab-images/\n└── reports/\n(all paths simulated)'
  };
  function activate(root, slug){
    const on = (selector, handler) => $$(root,selector).forEach(btn=>btn.addEventListener('click',()=>handler(btn)));
    if(slug==='hosting-infrastructure'){
      const form=$(root,'.v4-terminal-form'),input=$(root,'#v4-cmd'),log=$(root,'.v4-terminal-log');let hist=[];
      function exec(inputCmd){const cmd=String(inputCmd).toLowerCase().trim().replace(/\s+/g,' ').slice(0,90);if(!cmd)return;
        if(cmd==='clear'){log.replaceChildren();input.value='';return;}
        hist.push(cmd);if(hist.length>20)hist.shift();const prompt=el('div','v4-term-command','root@pve-demo:~# '+cmd),output=el('pre','v4-term-output',cmd==='history'?hist.map((x,i)=>`${i+1}  ${x}`).join('\n'):(terminalOutputs[cmd]||'Command not available in this simulated demo. Run help.'));
        log.append(prompt,output);while(log.children.length>24)log.firstChild.remove();log.scrollTop=log.scrollHeight;input.value='';}
      form.addEventListener('submit',e=>{e.preventDefault();exec(input.value);});on('[data-cmd]',b=>{exec(b.dataset.cmd);input.focus();});
    }
    if(slug==='networking-operations'){
      const update=(segment,clicked)=>{if(clicked)selectButtons(root,'[data-segment]',clicked);root.dataset.networkSegment=segment;
        const info={ALL:['All example segments visible','Traffic between protected segments is subject to policy.'],STAFF:['Staff VLAN selected','Managed endpoints / authorised service access.'],GUEST:['Guest VLAN selected','Illustrative captive portal and limited internal access.'],LAB:['Lab VLAN selected','Isolated training/CTF environments.']};
        setText(root,'[data-network-status]',info[segment][0]);setText(root,'[data-network-detail]',info[segment][1]);};
      on('[data-segment]',b=>update(b.dataset.segment,b));on('[data-device]',b=>{const matching=$(root,`[data-segment="${b.dataset.device}"]`);update(b.dataset.device,matching);});
    }
    if(slug==='client-vps-cloudflare'){
      const info={'DNS':['DNS resolution','Maps a domain name to the appropriate service, with careful record management.','DNS lookup · synthetic'],'EDGE / WAF':['Edge rules / Cloudflare','Edge policies and custom rules can filter or route requests before they reach hosted applications.','Edge checks · synthetic'],'REVERSE PROXY':['Nginx reverse proxy','Routes accepted requests to their correct virtual host or application service.','Origin routing · synthetic'],'AWS / CLOUDWATCH':['Cloud service observability','Illustrative EC2, IAM, S3 and CloudWatch service checks; no AWS account or live metrics.','CloudWatch telemetry · synthetic']};
      on('[data-cloud]',b=>{selectButtons(root,'[data-cloud]',b);const [h,d,m]=info[b.dataset.cloud];setText(root,'[data-cloud-title]',h);setText(root,'[data-cloud-text]',d);setText(root,'[data-cloud-metric]',m);root.dataset.cloudLayer=b.dataset.cloud.toLowerCase().replace(/\W/g,'-');});
    }
    if(slug==='business-applications'){
      let deal=0,attendance=0,exam=0;
      const views={
        CRM:()=>`<div class="v4-app-subtitle">CRM / OVERVIEW</div><h3>Pipeline activity</h3><div class="v4-bottom-grid">${card('LEADS','12','demo records')}${card('IN REVIEW','4','qualification')}${card('COMPLETED','7','mock workflows')}</div><div class="v4-app-table"><div><span>Company</span><span>Status</span></div><div><b>Example Services</b><em>${['Qualification','Proposal','Negotiation','Won'][deal]}</em></div><div><b>Sample Retail</b><em>Contacted</em></div></div><button type="button" class="v4-action" data-demo-action="deal">Advance sample deal ↗</button>`,
        ATTENDANCE:()=>`<div class="v4-app-subtitle">ATTENDANCE / PEOPLE</div><h3>Daily check-in</h3><div class="v4-bottom-grid">${card('TEAM','8','sample people')}${card('PRESENT',String(5+attendance),'local demo')}${card('PENDING',String(3-attendance),'awaiting check-in')}</div><div class="v4-app-table"><div><span>Person</span><span>Status</span></div><div><b>Demo Employee 01</b><em>Checked in</em></div><div><b>Demo Employee 08</b><em>${attendance?'Checked in':'Pending'}</em></div></div><button type="button" class="v4-action" data-demo-action="attendance">${attendance?'Reset sample check-in':'Check in sample employee'} ↗</button>`,
        EXAMS:()=>`<div class="v4-app-subtitle">EXAM / REVIEW</div><h3>Assessment portal</h3><div class="v4-bottom-grid">${card('SUBMISSIONS','24','sample records')}${card('REVIEWED',String(18+exam),'local demo')}${card('PENDING',String(6-exam),'mock queue')}</div><div class="v4-app-table"><div><span>Exam</span><span>Review status</span></div><div><b>Security Fundamentals</b><em>${exam?'Reviewed':'Pending'}</em></div><div><b>Networking Basics</b><em>Reviewed</em></div></div><button type="button" class="v4-action" data-demo-action="exam">${exam?'Reset sample review':'Mark sample reviewed'} ↗</button>`
      };
      const view=$(root,'[data-business-view]');let current='CRM';function show(){view.innerHTML=views[current]();}
      on('[data-business-tab]',b=>{selectButtons(root,'[data-business-tab]',b);current=b.dataset.businessTab;show();});
      view.addEventListener('click',e=>{const b=e.target.closest('[data-demo-action]');if(!b)return;const x=b.dataset.demoAction;if(x==='deal')deal=(deal+1)%4;if(x==='attendance')attendance=attendance?0:1;if(x==='exam')exam=exam?0:1;show();});
    }
    if(slug==='hardware-research'){
      const modes={'FLIPPER':['Flipper-style lab UI','Explore a local interface mock-up and safe device status checks. No radio, credentials or USB commands are executed.','◉ ◡ ◉','Inventory','System info','Lab-only diagnostics'],PWNAGOTCHI:['Pwnagotchi-style display','An offline pet/status concept inspired by research hardware; no nearby networks are enumerated.','( • ◡ • )','Idle face','Training mode','Power status'], 'RASPBERRY PI':['Raspberry Pi controller','Mock GPIO, device-status and build inventory checks, without connecting to a board.','▦ π ▦','Board status','GPIO model','Build inventory'],'USB LAB':['USB research concepts','Controlled USB interface research and training safety checks; no HID payloads or device commands.','↳ USB ↲','Interface check','Lab policy','Status summary']};
      let current='FLIPPER',ix=0;const render=()=>{const [h,d,face,...screens]=modes[current];setText(root,'[data-device-name]',current);setText(root,'[data-device-title]',h);setText(root,'[data-device-description]',d);setText(root,'[data-device-face]',face);setText(root,'[data-device-mode]',screens[ix]);setText(root,'[data-device-state]','AUTHORIZED LAB · '+String(ix+1).padStart(2,'0')+'/03');setText(root,'[data-hardware-output]',`${current} / ${screens[ix]} · synthetic`);};
      on('[data-device-tab]',b=>{selectButtons(root,'[data-device-tab]',b);current=b.dataset.deviceTab;ix=0;render();});on('[data-device-act]',b=>{ix=(ix+(b.dataset.deviceAct==='previous'?2:1))%3;render();});
    }
    if(slug==='identity-mfa'){
      const info={PASS:['Access approved','Example user met the MFA requirement. The mock session is shown as accepted.','POLICY SATISFIED','Granted · synthetic'],DENY:['Access denied','The MFA policy condition was not met. No account session is created.','MFA DENIED','Rejected · synthetic'],RESET:['Verification pending','Choose a simulated outcome to see the access decision. No login occurs.','AWAITING VERIFICATION','Not a real identity provider']};
      on('[data-id-choice]',b=>{const [h,d,s,sub]=info[b.dataset.idChoice];setText(root,'[data-id-heading]',h);setText(root,'[data-id-description]',d);setText(root,'[data-id-state]',s);setText(root,'[data-id-substate]',sub);root.dataset.mfa=b.dataset.idChoice;selectButtons(root,'[data-id-choice]',b);});
    }
    if(slug==='siem-automation'){
      let priority='MEDIUM',counter=0;
      on('[data-siem-priority]',b=>{priority=b.dataset.siemPriority;selectButtons(root,'[data-siem-priority]',b);});
      on('[data-siem-generate]',()=>{counter++;const timestamp=new Date().toLocaleTimeString('en-GB',{hour12:false});setText(root,'[data-siem-output]',`[${timestamp}] SYNTHETIC EVENT #${String(counter).padStart(3,'0')}\nsource: sample-web-app\nrule: endpoint-anomaly-demo\nseverity: ${priority}\nlog: sample request matched training rule\nworkflow: n8n → Discord (preview only)\nresult: notification displayed locally; nothing sent`);root.dataset.siemLast=priority;});
    }
    if(slug==='security-assessments'){
      const info={SCOPE:['Define the scope','Confirm authorisation, test boundaries, asset owners and the applications or infrastructure in scope.',['Rules of engagement','Asset inventory'],20],ENUMERATE:['Map the surface','Identify services, endpoints and application behaviours using agreed methods and safe tooling.',['Nmap','Burp Suite','Asset context'],40],VALIDATE:['Verify evidence','Manually review scanner indicators, reproduce authorised findings and record accurate impact.',['Manual review','Evidence','Code context'],60],REPORT:['Communicate clearly','Document conditions, risk, affected assets, remediation recommendations and supporting proof.',['Risk language','VAPT report'],80],RETEST:['Verify the fix','Recheck the affected condition following changes and document whether the issue remains reproducible.',['Remediation','Closure evidence'],100]};
      on('[data-assess-phase]',b=>{selectButtons(root,'[data-assess-phase]',b);const [h,d,tags,pct]=info[b.dataset.assessPhase];setText(root,'[data-assess-title]',h);setText(root,'[data-assess-desc]',d);setText(root,'[data-assess-state]',`${String(pct/20).padStart(2,'0')} / 05`);$(root,'[data-assess-meter]').style.width=pct+'%';const pills=$(root,'[data-assess-tags]');pills.replaceChildren(...tags.map(x=>el('span','',x)));});
    }
    if(slug==='vulnerable-labs'){
      const info={'BANKING':['Banking workflows','Simulated roles, transaction histories and authorisation paths made for controlled security training.',['Authorisation','Workflow security']],'COMMERCE':['E-commerce flows','Shopping baskets, checkout sequences and mocked payment-gateway states support application security research.',['Checkout logic','Session handling']],'UNIVERSITY':['University portals','Student records, role separation and enrolment workflows provide realistic access-control scenarios.',['RBAC','Data validation']],'CRM / HRM':['Business platforms','Employee records, workflows and administrative actions create enterprise-style research exercises.',['Role boundaries','Business logic']]};
      on('[data-lab]',b=>{selectButtons(root,'[data-lab]',b);const [h,d,tags]=info[b.dataset.lab];setText(root,'[data-lab-title]',h);setText(root,'[data-lab-desc]',d);$(root,'[data-lab-tags]').replaceChildren(...tags.map(t=>el('span','',t)));});
    }
    if(slug==='malware-response'){
      const info={TRIAGE:['Initial triage','Establish the timeline and affected endpoints from approved incident evidence.','event.type = suspicious_execution\nasset = training-workstation\ncase.status = triage'],ANALYSE:['Behaviour analysis','Review process execution, persistence indicators and relationships between observed events.','process.name = sample-process\nbehavior = investigation_required\nartifact = sample-only'], 'ROOT CAUSE':['Root-cause analysis','Correlate the delivery path, execution sequence and security-control context.','entry = received-file\nsequence = review_execution_path\nstatus = hypothesis_review'],CONTAIN:['Containment decisions','Document the affected scope and practical isolation or restriction steps. Recovery is not claimed.','action = isolate_affected_asset\nfollowup = verify_containment\nstatus = illustrative']};
      on('[data-mal-phase]',b=>{selectButtons(root,'[data-mal-phase]',b);const [h,d,a]=info[b.dataset.malPhase];setText(root,'[data-mal-title]',h);setText(root,'[data-mal-desc]',d);setText(root,'[data-mal-artifact]',a);});
    }
    if(slug==='ctf-operations'){
      const info={WEB:['Web application logic','Teach learners to analyse authorisation checks using a deliberately isolated test portal.'],SYSTEM:['Service configuration','Build a practice system where learners can inspect safe configuration examples and hardening goals.'],FORENSICS:['Evidence reconstruction','Prepare synthetic logs and files that reward careful timeline reconstruction.'],CRYPTO:['Pattern analysis','Design controlled cryptographic puzzles with explicit learning outcomes.']};
      on('[data-ctf-category]',b=>{selectButtons(root,'[data-ctf-category]',b);const [h,d]=info[b.dataset.ctfCategory];setText(root,'[data-ctf-title]',h);setText(root,'[data-ctf-desc]',d);});
    }
    if(slug==='scopeforge'){
      const info={WEB:['Web inventory','Document technology and endpoint discovery within defined assessment scope.'],NETWORK:['Network inventory','Structure an approved network inventory and associate services with assets.'],'AD EXPORT':['Read-only AD export review','Review supplied offline directory configuration exports; no AD connection is made.']};let current='WEB';
      on('[data-tool-module]',b=>{selectButtons(root,'[data-tool-module]',b);current=b.dataset.toolModule;const [h,d]=info[current];setText(root,'[data-tool-heading]',h);setText(root,'[data-tool-desc]',d);setText(root,'[data-tool-report]',`Module: ${current}\nTarget: example.test\nStatus: illustrative\nFindings: not evaluated`);});
      on('[data-report="scopeforge"]',()=>createDownload('scopeforge_example_report.txt',`ScopeForge | Example report (synthetic)\nModule: ${current}\nTarget: example.test\nNo scans were executed. No vulnerabilities were evaluated.\nGenerated only by the local portfolio demonstration.\n`));
    }
    if(slug==='wp-scope-workbench'){
      let selected=new Set(['CORE','PLUGINS','THEMES','ENDPOINTS']);const preview=()=>setText(root,'[data-wp-report]',`WordPress Workbench · local demo\n${['CORE','PLUGINS','THEMES','ENDPOINTS'].map(x=>`${x}: ${selected.has(x)?'selected':'excluded'}`).join('\n')}\nNo live assessment performed.`);
      on('[data-wp-module]',b=>{const x=b.dataset.wpModule;if(selected.has(x))selected.delete(x);else selected.add(x);const on=selected.has(x);b.setAttribute('aria-pressed',String(on));b.classList.toggle('is-selected',on);preview();});
      on('[data-report="wp"]',()=>createDownload('wp_scope_example_report.txt',`WP Scope Workbench | Example report (synthetic)\n${['CORE','PLUGINS','THEMES','ENDPOINTS'].map(x=>`${x}: ${selected.has(x)?'selected':'excluded'}`).join('\n')}\nNo WordPress target was contacted. No findings generated.\n`));
    }
  }
  function mount(){
    const slug=document.body.dataset.project||new URLSearchParams(location.search).get('project');if(!slug||!exhibits[slug])return;
    const approach=document.getElementById('approach');const outcome=document.getElementById('outcome');if(!approach||!outcome)return;
    const conf=exhibits[slug],section=el('section','case-fade case-visible v4-lab-section');section.id='interactive-lab';
    section.innerHTML=`<span class="case-section-num">04 / INTERACTIVE FIELD GUIDE</span><h2>${conf.heading}</h2><p class="v4-intro">${conf.intro}</p><div class="v4-exhibit" data-v4-exhibit="${slug}"><div class="v4-exhibit-header"><span><span class="v4-live-pip"></span> INTERACTIVE / LOCAL SIMULATION</span><small>NO REAL SYSTEM ACCESS</small></div><div class="v4-exhibit-body">${conf.render()}</div></div>`;
    approach.after(section);
    [['outcome','05 / RESULT'],['takeaways','06 / REFLECTION'],['stack','07 / TECHNICAL CONTEXT']].forEach(([id,label])=>{const heading=document.querySelector('#'+id+' .case-section-num');if(heading)heading.textContent=label;});
    const aside=document.querySelector('.case-contents');const outcomeLink=aside&&aside.querySelector('a[href="#outcome"]');if(outcomeLink){const nav=el('a','', 'Interactive demo');nav.href='#interactive-lab';outcomeLink.before(nav);}
    activate(section,slug);
    // Independent, circular navigation across the same 13 published work pages.
    const ordered=['security-assessments','vulnerable-labs','hosting-infrastructure','networking-operations','client-vps-cloudflare','ctf-operations','malware-response','business-applications','identity-mfa','siem-automation','hardware-research','scopeforge','wp-scope-workbench'];
    const idx=ordered.indexOf(slug);if(idx<0)return;
    const prev=ordered[(idx-1+ordered.length)%ordered.length],next=ordered[(idx+1)%ordered.length];
    const ref=new Map((window.PORTFOLIO?.projects||[]).map(x=>[x.id,x.title]));
    const name=x=>ref.get(x)||x.replaceAll('-',' ');
    const root=document.body.dataset.root||'../../';const href=x=>`${root}work/${encodeURIComponent(x)}/`;
    const nav=el('nav','v4-story-nav');nav.setAttribute('aria-label','Move between work case studies');
    nav.innerHTML=`<a class="v4-story-nav-prev" href="${href(prev)}"><small>← PREVIOUS WORK</small><strong>${String(name(prev)).replace(/[&<>"]/g,'')}</strong></a><a class="v4-story-nav-all" href="${root}index.html#work"><span>▦</span> All work</a><a class="v4-story-nav-next" href="${href(next)}"><small>NEXT WORK →</small><strong>${String(name(next)).replace(/[&<>"]/g,'')}</strong></a>`;
    const related=document.querySelector('.case-related-wrap');if(related)related.before(nav);
    const navLeft=document.querySelector('.case-nav-left');if(navLeft){const quick=el('a','v4-top-next','Next work →');quick.href=href(next);quick.title='Next: '+name(next);navLeft.append(quick);}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();
