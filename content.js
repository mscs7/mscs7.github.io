/* Portfolio content. Public data only; no secrets. */
window.PORTFOLIO = {
  "profile": {
    "name": "Mohammed Suhail C S",
    "shortName": "Suhail",
    "brand": "Mohammed_Suhail_CS",
    "role": "Cyber Security Analyst",
    "email": "cssuhailmohammed@gmail.com",
    "phone": "+971 588 692310",
    "location": "Abu Dhabi, United Arab Emirates",
    "availability": "Open to opportunities",
    "locationNote": "Exploring opportunities in Dubai & beyond",
    "siteUrl": "",
    "resumeUrl": "https://mscs7.github.io/Mohammed_Suhail_CS_CV.pdf",
    "seoDescription": "Mohammed Suhail C S is a cybersecurity professional with experience in penetration testing, security research, realistic vulnerable labs, cloud infrastructure and full-stack development.",
    "portraitUrl": "assets/suhail-portrait.jpg",
    "portraitAlt": "Portrait of Mohammed Suhail C S"
  },
  "links": {
    "linkedin": "www.linkedin.com/in/cssuhailmohammed",
    "github": "https://github.com/mscs7",
    "tryhackme": "https://tryhackme.com/p/ms070",
    "hackthebox": "https://profile.hackthebox.com/profile/01a1a7b3-5ec7-70bf-a21f-87d231b8d333",
    "portswigger": ""
  },
  "hero": {
    "eyebrow": "RESEARCHER. BUILDER. PROBLEM SOLVER.",
    "lines": [
      "I build systems.",
      "Then challenge",
      "their security."
    ],
    "description": "I'm Mohammed Suhail, a cybersecurity professional working across offensive security, research and infrastructure. I build real applications, investigate their weaknesses, and turn that understanding into practical security work.",
    "primaryButton": "Explore my work",
    "secondaryButton": "Let's connect",
    "footnote": "Former Senior Security Analyst at Hackware Security Solutions"
  },
  "stats": [
    {
      "value": "~10",
      "label": "Realistic vulnerable labs",
      "note": "Developed from scratch"
    },
    {
      "value": "06",
      "label": "Assessment domains",
      "note": "Web, API, network, internal, AD & cloud"
    },
    {
      "value": "03",
      "label": "Career stages",
      "note": "Intern to Senior Security Analyst"
    }
  ],
  "about": {
    "title": "A builder's perspective.\nA researcher's curiosity.",
    "paragraphs": [
      "My work sits where security research meets real-world engineering. At Hackware Security Solutions, I moved from a research internship to a senior analyst role while working across penetration testing, application development and infrastructure.",
      "Building realistic applications has shaped the way I approach security: understand the system, question its assumptions, and investigate what happens at the boundaries. When a technology is unfamiliar, I research it, experiment, and work towards a practical solution."
    ],
    "principles": [
      "Research before assumptions",
      "Build to understand",
      "Document what matters"
    ]
  },
  "expertise": [
    {
      "icon": "target",
      "number": "01",
      "title": "Offensive security",
      "description": "Vulnerability assessment and penetration testing across applications and infrastructure, with technical reporting and confidential client work.",
      "tags": [
        "Web & API",
        "Network",
        "Active Directory",
        "Cloud"
      ]
    },
    {
      "icon": "code",
      "number": "02",
      "title": "Research & lab engineering",
      "description": "Real-world CVE research, CTF challenges and intentionally vulnerable applications that recreate realistic business workflows.",
      "tags": [
        "CVE research",
        "OWASP",
        "CTF development",
        "Lab design"
      ]
    },
    {
      "icon": "layers",
      "number": "03",
      "title": "Infrastructure & cloud",
      "description": "Hands-on hosting, virtualization and networking, from physical servers and client VPS environments to AWS services.",
      "tags": [
        "AWS",
        "Proxmox",
        "Linux",
        "Network security"
      ]
    },
    {
      "icon": "pulse",
      "number": "04",
      "title": "Incident investigation",
      "description": "Direct involvement in ransomware investigations, including malware analysis, root-cause analysis and containment.",
      "tags": [
        "Ransomware",
        "Malware analysis",
        "Root cause",
        "Containment"
      ]
    }
  ],
  "projects": [
    {
      "id": "security-assessments",
      "category": "Security",
      "eyebrow": "ASSESSMENTS / INCIDENT INVESTIGATION",
      "title": "Investigate. Validate. Document.",
      "summary": "Multi-domain VAPT and direct involvement in ransomware investigations, backed by research and technical reporting.",
      "visual": "security",
      "image": "",
      "imageAlt": "",
      "tags": [
        "VAPT",
        "Malware analysis",
        "Technical reporting"
      ],
      "scope": "A summary of security work across separate assessments and incident investigations, not a claim that every activity occurred in one engagement.",
      "contributions": [
        "Performed VAPT on web applications, APIs, networks, internal infrastructure, Active Directory and cloud environments.",
        "Used Burp Suite, Nmap, Metasploit, Nessus, Wireshark, SQLmap, Nuclei and ffuf.",
        "Prepared professional VAPT reports and identified confidential security findings.",
        "Participated directly in ransomware investigation, malware analysis, root-cause analysis and containment."
      ],
      "outcome": "Produced security assessment reports and contributed directly to investigation and containment activities.",
      "confidentiality": "Client findings and incident details remain confidential. Ransomware recovery is not included in my stated experience.",
      "repoUrl": "",
      "demoUrl": "",
      "caseStudy": {
        "kicker": "Assess. Validate. Explain.",
        "lede": "I approached assessments from both sides of the system: the application layer and the networks, hosts and controls supporting it.",
        "approach": [
          [
            "01 / Scope",
            "Understand the allowed assets and business workflows before beginning testing."
          ],
          [
            "02 / Validate",
            "Combine scanners with manual testing, source-code context and evidence collection."
          ],
          [
            "03 / Communicate",
            "Write clear reports and return for remediation retests where applicable."
          ]
        ],
        "notes": "Working with real application code and infrastructure made it easier to distinguish weak indicators from issues worth verifying.",
        "learning": "A useful finding should explain the condition, the impact, the evidence and the next action - not just repeat a tool output.",
        "highlights": [
          [
            "Coverage",
            "Web / API / Android"
          ],
          [
            "Also assessed",
            "Networks / AD / Cloud"
          ],
          [
            "Verification",
            "Code review + retesting"
          ]
        ],
        "stack": [
          "Burp Suite",
          "Nmap",
          "Nessus",
          "Metasploit",
          "SQLmap",
          "Wireshark",
          "Nuclei",
          "ffuf",
          "Linux",
          "Windows Server"
        ],
        "status": "Selected professional work"
      }
    },
    {
      "id": "vulnerable-labs",
      "category": "Research",
      "eyebrow": "SECURITY RESEARCH / TRAINING ENVIRONMENTS",
      "title": "Real applications. Intentional vulnerabilities.",
      "summary": "Nearly 10 realistic labs built from scratch, spanning e-commerce, CRM, HRM, banking and university application scenarios.",
      "visual": "lab",
      "image": "",
      "imageAlt": "",
      "tags": [
        "CVE research",
        "React / Node.js",
        "Docker / VMs"
      ],
      "scope": "Intentionally vulnerable environments developed for cybersecurity learning and exploration. These are realistic simulations, not live customer applications.",
      "contributions": [
        "Developed functioning applications from scratch using React, Node.js, Python, MongoDB and MySQL.",
        "Researched real-world CVEs and OWASP-related vulnerabilities to inform lab scenarios.",
        "Recreated business workflows, including mocked payment gateway interactions.",
        "Deployed training environments using Docker and virtual machines.",
        "Created additional CTF challenges and participated in external CTF events."
      ],
      "outcome": "A body of nearly 10 realistic lab environments combining application development with vulnerability research.",
      "confidentiality": "The architecture visual is illustrative. No live vulnerable deployment or exploitation details are published here.",
      "repoUrl": "",
      "demoUrl": "",
      "caseStudy": {
        "kicker": "Real workflows. Intentional weaknesses.",
        "lede": "Building a convincing lab means first understanding what a legitimate application must do. Its data, roles and business flows determine where meaningful weaknesses may be introduced.",
        "approach": [
          [
            "01 / Research",
            "Review public vulnerability research and map the weakness to a believable business feature."
          ],
          [
            "02 / Engineer",
            "Build the application, data layer and workflows - including simulated payment integrations when needed."
          ],
          [
            "03 / Deploy & learn",
            "Package the environment for training and revisit it as techniques and vulnerability classes evolve."
          ]
        ],
        "notes": "The research behind these applications strengthened my ability to recognize likely problem areas when approaching unfamiliar web systems.",
        "learning": "I learned more by building complete functionality and studying why vulnerabilities appear than by reproducing a one-line demonstration.",
        "highlights": [
          [
            "Lab portfolio",
            "Approximately 10"
          ],
          [
            "Scenarios",
            "Banking / commerce / university"
          ],
          [
            "Approach",
            "Build → research → validate"
          ]
        ],
        "stack": [
          "React",
          "Node.js",
          "Python",
          "MongoDB",
          "MySQL",
          "Docker",
          "VMs",
          "CVE research",
          "OWASP"
        ],
        "status": "Selected professional work"
      }
    },
    {
      "id": "hosting-infrastructure",
      "category": "Infrastructure",
      "eyebrow": "HOSTING / CLOUD / NETWORK OPERATIONS",
      "title": "The infrastructure behind the application.",
      "summary": "Client VPS environments, physical-server hosting and website migrations, supported by practical network and cloud administration.",
      "visual": "infra",
      "image": "",
      "imageAlt": "",
      "tags": [
        "Linux / Proxmox",
        "AWS",
        "VPS / DNS"
      ],
      "scope": "Infrastructure and hosting work across company-owned servers, external client environments and cloud services.",
      "contributions": [
        "Handled physical servers, VPS hosting, Proxmox, Linux distributions and Windows Server.",
        "Migrated websites from shared hosting plans to VPS environments without data loss.",
        "Troubleshot website, hosting and network issues, including WordPress-related security work.",
        "Worked with Cloudflare, DNS, Nginx Proxy Manager and Pritunl VPN.",
        "Configured VLANs, access controls, firewalls and application blocking using Omada, ER8411 and network switches.",
        "Worked with AWS EC2, S3, IAM, CloudWatch, Lambda and CloudTrail."
      ],
      "outcome": "Supported hosted client services and completed shared-hosting-to-VPS migrations without data loss.",
      "confidentiality": "The infrastructure visual is conceptual. It does not expose an actual client topology, IP addresses or service configuration.",
      "repoUrl": "",
      "demoUrl": "",
      "caseStudy": {
        "kicker": "From rack hardware to running workloads.",
        "lede": "Lab engineering required more than writing applications. We also had to provide physical compute, virtualization and the services those applications depended on.",
        "approach": [
          [
            "01 / Hardware",
            "Assemble and maintain physical servers and use iDRAC for out-of-band visibility."
          ],
          [
            "02 / Virtualization",
            "Build and administer Proxmox nodes and virtual machines for distinct workloads."
          ],
          [
            "03 / Delivery",
            "Host training and client environments and troubleshoot issues across layers."
          ]
        ],
        "notes": "This work built a practical understanding of hardware, virtualization, operating systems and service dependencies.",
        "learning": "I learned that infrastructure reliability comes from understanding the whole chain - from disks and management interfaces to the application.",
        "highlights": [
          [
            "Deployment",
            "3 Proxmox nodes"
          ],
          [
            "Hardware",
            "Dell 730 / 840"
          ],
          [
            "Services",
            "Labs + client VPS"
          ]
        ],
        "stack": [
          "Dell servers",
          "iDRAC",
          "Proxmox",
          "Linux",
          "Windows Server",
          "Virtual machines",
          "VPS hosting"
        ],
        "status": "Selected professional work"
      }
    },
    {
      "id": "networking-operations",
      "category": "Networking",
      "eyebrow": "LAN / WLAN / NETWORK SECURITY",
      "title": "Connectivity is part of security.",
      "summary": "Network support for approximately 400 users with managed switches, Omada wireless, VLAN segmentation, captive portals and access controls.",
      "visual": "infra",
      "image": "",
      "imageAlt": "",
      "tags": [
        "~400 users",
        "Omada / ER8411",
        "VLANs"
      ],
      "scope": "Hands-on enterprise-style network support in an environment with a single WAN link; not a claim of multi-site carrier networking.",
      "contributions": [
        "Worked with the TP-Link Omada Controller, ER8411 gateway, managed switches, wireless access points and VPN-capable routers.",
        "Configured VLANs, firewall policies, network access controls and application restrictions.",
        "Configured wireless captive-portal access and DPI-related policies where applicable.",
        "Troubleshot network reachability, DNS, access-point behaviour and connectivity for an approximately 400-user environment."
      ],
      "outcome": "Supported day-to-day network connectivity and related security controls for approximately 400 users.",
      "confidentiality": "No production network diagram, vendor access, secrets or unsupported multi-WAN high-availability claims are shared.",
      "repoUrl": "",
      "demoUrl": "",
      "caseStudy": {
        "kicker": "Segmentation, wireless access and visibility.",
        "lede": "Supporting users involves keeping everyday connectivity practical while applying sensible controls to services, groups and devices.",
        "approach": [
          [
            "01 / Plan",
            "Understand device groups, access needs, network segments and wireless coverage."
          ],
          [
            "02 / Configure",
            "Use Omada, ER8411, switches and AP settings for VLANs, policies, captive portals and access controls."
          ],
          [
            "03 / Support",
            "Investigate device and connectivity problems with a view of both routing and endpoint behaviour."
          ]
        ],
        "notes": "Hands-on network operations reinforced my security assessments by making VLANs, gateways and wireless policy more than abstract concepts.",
        "learning": "The best control is one that can be understood, monitored and supported - not simply enabled and forgotten.",
        "highlights": [
          [
            "Supported users",
            "~400"
          ],
          [
            "Environment",
            "LAN + WLAN"
          ],
          [
            "Key controls",
            "VLANs / firewall / captive portal"
          ]
        ],
        "stack": [
          "TP-Link Omada",
          "ER8411",
          "Managed switches",
          "Wireless APs",
          "VLANs",
          "Firewall policies",
          "DPI",
          "Captive portal",
          "DNS",
          "Wireshark"
        ],
        "status": "Selected professional work"
      }
    },
    {
      "id": "client-vps-cloudflare",
      "category": "Infrastructure",
      "eyebrow": "DNS / VPS / CUSTOMER SERVICES",
      "title": "Keeping client platforms online.",
      "summary": "VPS hosting, Cloudflare DNS and custom rules, reverse proxies, migrations and web-platform security across client environments.",
      "visual": "infra",
      "image": "",
      "imageAlt": "",
      "tags": [
        "Cloudflare",
        "VPS hosting",
        "Nginx"
      ],
      "scope": "Infrastructure service delivery and troubleshooting for real company and client websites.",
      "contributions": [
        "Hosted client websites and services on shared hosting plans, VPS and company-owned physical servers.",
        "Managed Cloudflare DNS entries for different clients and configured custom Cloudflare rules.",
        "Configured Nginx Proxy Manager, reverse proxies, VPN services and WordPress website security.",
        "Migrated websites from hosting plans to VPS without data loss and troubleshot hosting/network issues."
      ],
      "outcome": "Delivered and maintained hosted services while completing hosting-to-VPS migrations without data loss.",
      "confidentiality": "Client domains, IP addresses and traffic rules are deliberately not reproduced.",
      "repoUrl": "",
      "demoUrl": "",
      "caseStudy": {
        "kicker": "The internet-facing edge matters.",
        "lede": "A hosted application depends on more than the application code. DNS, proxies, TLS termination, network access and the VPS all affect security and availability.",
        "approach": [
          [
            "01 / Route",
            "Maintain DNS, proxy configuration and public-facing entry points for client services."
          ],
          [
            "02 / Protect",
            "Apply suitable website security, Cloudflare custom rules and network controls."
          ],
          [
            "03 / Migrate",
            "Move sites between hosting products while preserving content and checking service continuity."
          ]
        ],
        "notes": "Working on real customer services taught me to consider safe changes, data preservation and troubleshooting just as carefully as configurations.",
        "learning": "A migration is only successful when the application, DNS and dependent services work together afterwards.",
        "highlights": [
          [
            "Hosting",
            "Shared → VPS → physical"
          ],
          [
            "Web edge",
            "Cloudflare / DNS"
          ],
          [
            "Migration",
            "No data loss reported"
          ]
        ],
        "stack": [
          "Cloudflare",
          "DNS",
          "Nginx Proxy Manager",
          "WordPress",
          "Linux",
          "VPS",
          "Pritunl VPN",
          "Hostinger"
        ],
        "status": "Selected professional work"
      }
    },
    {
      "id": "ctf-operations",
      "category": "Research",
      "eyebrow": "CTF / CHALLENGE DESIGN",
      "title": "Challenges that teach investigation.",
      "summary": "Created CTF challenges, supported competition infrastructure and participated in external security competitions.",
      "visual": "lab",
      "image": "",
      "imageAlt": "",
      "tags": [
        "CTF design",
        "Research",
        "Challenge hosting"
      ],
      "scope": "Security training and event activity; not a claim of specific competition rankings.",
      "contributions": [
        "Designed challenge objectives and built vulnerable scenarios for cybersecurity students.",
        "Created and hosted CTF-related infrastructure using servers, VPS, VMs or containers as appropriate.",
        "Participated in outside CTF events to practice investigation and discover unfamiliar techniques.",
        "Updated challenge ideas by researching new weaknesses and practical attack surfaces."
      ],
      "outcome": "Created numerous cybersecurity challenges and contributed to CTF events and hosting.",
      "confidentiality": "No private event material, credentials, vulnerable live deployments or unverified rankings are displayed.",
      "repoUrl": "",
      "demoUrl": "",
      "caseStudy": {
        "kicker": "Make the challenge rewarding, not arbitrary.",
        "lede": "A good training challenge teaches a participant to investigate an application or service, form hypotheses and validate evidence.",
        "approach": [
          [
            "01 / Design",
            "Pick the concept and plan a believable service or workflow."
          ],
          [
            "02 / Build",
            "Implement the scenario and isolate it for controlled training."
          ],
          [
            "03 / Improve",
            "Use participant feedback and new research to refine clarity and difficulty."
          ]
        ],
        "notes": "Creating challenges strengthened my ability to explain security concepts and reason about unexpected system behaviour.",
        "learning": "When a lab feels like a real application, it can develop investigation skill beyond memorizing a payload.",
        "highlights": [
          [
            "Format",
            "CTF challenges"
          ],
          [
            "Work",
            "Design + hosting"
          ],
          [
            "Learning",
            "Research-led practice"
          ]
        ],
        "stack": [
          "CTF",
          "Docker",
          "Linux",
          "VPS",
          "Web security",
          "Python",
          "Network services"
        ],
        "status": "Selected professional work"
      }
    },
    {
      "id": "malware-response",
      "category": "Security",
      "eyebrow": "INCIDENT RESPONSE / MALWARE",
      "title": "From symptoms to root cause.",
      "summary": "Direct involvement in ransomware investigations, malware analysis, root-cause investigation and containment.",
      "visual": "security",
      "image": "",
      "imageAlt": "",
      "tags": [
        "Ransomware",
        "Malware analysis",
        "Containment"
      ],
      "scope": "Participation in real incident investigations; recovery leadership and individual incident details are not claimed.",
      "contributions": [
        "Investigated suspicious files and ransomware-related activity as part of incident response.",
        "Supported malware behaviour analysis and reconstruction of likely execution or entry paths.",
        "Participated in root-cause investigation and containment activities.",
        "Documented investigation observations and worked with affected system context."
      ],
      "outcome": "Contributed directly to malware investigations and containment efforts.",
      "confidentiality": "Client-specific incident details, samples, indicators and company systems remain confidential. No claim of recovery ownership is made.",
      "repoUrl": "",
      "demoUrl": "",
      "caseStudy": {
        "kicker": "Evidence before assumptions.",
        "lede": "Incident response demands careful handling of observations, system behaviour, application context and containment decisions.",
        "approach": [
          [
            "01 / Investigate",
            "Review the available execution evidence, persistence clues and affected environment."
          ],
          [
            "02 / Correlate",
            "Use system and malware analysis to build a grounded explanation of the incident."
          ],
          [
            "03 / Contain",
            "Support actions intended to limit further impact and document the basis for follow-up."
          ]
        ],
        "notes": "Real incidents demonstrated the importance of precise notes, disciplined hypotheses and understanding Windows/server behaviour.",
        "learning": "It is better to establish what the evidence shows than to label a suspicious artifact without investigating its behaviour.",
        "highlights": [
          [
            "Experience",
            "Real investigations"
          ],
          [
            "Focus",
            "Root cause + containment"
          ],
          [
            "Disclosure",
            "Client-confidential"
          ]
        ],
        "stack": [
          "Windows security",
          "Malware analysis",
          "Incident investigation",
          "Containment",
          "Technical reporting"
        ],
        "status": "Selected professional work"
      }
    },
    {
      "id": "business-applications",
      "category": "Engineering",
      "eyebrow": "FULL-STACK ENGINEERING / COMPANY SYSTEMS",
      "title": "From requirements to a hosted application.",
      "summary": "CRM, employee attendance and examination portals developed and hosted for real organizational use.",
      "visual": "app",
      "image": "",
      "imageAlt": "",
      "tags": [
        "React",
        "Node.js",
        "Webhooks"
      ],
      "scope": "Production applications built for company requirements, with end-to-end development and deployment responsibilities.",
      "contributions": [
        "Developed frontend and backend functionality for CRM, attendance and examination portals.",
        "Worked with React, Node.js and database-backed application workflows.",
        "Connected webhook-based integrations as required by project workflows.",
        "Hosted and deployed the applications, and handled associated technical troubleshooting."
      ],
      "outcome": "Delivered and hosted working systems for real company use.",
      "confidentiality": "The visual is a conceptual application diagram, not a screenshot of a client system. Client names, source code and production URLs are not disclosed.",
      "repoUrl": "",
      "demoUrl": "",
      "caseStudy": {
        "kicker": "Security gets easier to understand when you build.",
        "lede": "Working through requirements, features and deployment provides a developer-side perspective on security risks and technical trade-offs.",
        "approach": [
          [
            "01 / Model",
            "Translate attendance, customer or examination workflows into practical application features."
          ],
          [
            "02 / Develop",
            "Build connected frontend, backend, data and webhook components."
          ],
          [
            "03 / Deploy",
            "Host the service and troubleshoot it across the application and server stack."
          ]
        ],
        "notes": "Building working systems made security testing more meaningful by exposing the reasons developers choose specific designs.",
        "learning": "Developing and assessing applications reinforce each other - particularly for authentication, authorization and business logic.",
        "highlights": [
          [
            "Delivery",
            "Real company use"
          ],
          [
            "Products",
            "CRM / attendance / exams"
          ],
          [
            "Approach",
            "Full stack + hosting"
          ]
        ],
        "stack": [
          "React",
          "Node.js",
          "Python",
          "MongoDB",
          "MySQL",
          "Webhooks",
          "Docker",
          "Linux"
        ],
        "status": "Selected professional work"
      }
    },
    {
      "id": "identity-mfa",
      "category": "Networking",
      "eyebrow": "IDENTITY / AUTHENTIK / MFA",
      "title": "Make access intentional.",
      "summary": "Applied identity-centric and multi-factor authentication controls, including Authentik, to business-application access.",
      "visual": "security",
      "image": "",
      "imageAlt": "",
      "tags": [
        "Authentik",
        "MFA",
        "Access policy"
      ],
      "scope": "Identity and access control integrations for attendance and CRM systems; not a claim of an enterprise-wide zero-trust rollout.",
      "contributions": [
        "Configured multi-factor authentication and identity access options for attendance and CRM portals.",
        "Worked with Authentik for identity-related integration and access-control workflows.",
        "Applied a zero-trust-oriented mindset to who can access what, instead of assuming all internal users are trusted.",
        "Considered the relationship between application roles, authentication and infrastructure access."
      ],
      "outcome": "Added practical authentication and access-control features to business-application environments.",
      "confidentiality": "Authentication secrets, client configurations and production identity topology are not published.",
      "repoUrl": "",
      "demoUrl": "",
      "caseStudy": {
        "kicker": "Identity is part of the architecture.",
        "lede": "A useful application needs more than a login screen. Identity flow, permissions and second factors affect what users can safely do.",
        "approach": [
          [
            "01 / Identify",
            "Understand which roles and services need access to sensitive application functions."
          ],
          [
            "02 / Integrate",
            "Configure identity and MFA options, including Authentik where appropriate."
          ],
          [
            "03 / Review",
            "Check how identity controls interact with application endpoints and network boundaries."
          ]
        ],
        "notes": "Implementing MFA and access controls deepened my understanding of application security from the operational side.",
        "learning": "Zero trust is a set of practices - the work presented here is specific identity and MFA integration, not certification of a whole architecture.",
        "highlights": [
          [
            "Security layer",
            "MFA"
          ],
          [
            "Identity stack",
            "Authentik"
          ],
          [
            "Systems",
            "CRM / attendance"
          ]
        ],
        "stack": [
          "Authentik",
          "MFA",
          "Authentication",
          "Authorization",
          "Access controls",
          "Web applications"
        ],
        "status": "Selected professional work"
      }
    },
    {
      "id": "siem-automation",
      "category": "Security",
      "eyebrow": "MONITORING LAB / SIEM + AUTOMATION",
      "title": "Signals that reach the right place.",
      "summary": "Connected vulnerable applications to Splunk and Wazuh, created custom detections and routed severity-based Discord alerts with n8n.",
      "visual": "security",
      "image": "",
      "imageAlt": "",
      "tags": [
        "Splunk",
        "Wazuh",
        "n8n"
      ],
      "scope": "Hands-on security-monitoring lab using self-developed applications; not presented as a production enterprise SOC.",
      "contributions": [
        "Integrated application events from intentionally vulnerable web applications into Splunk and Wazuh.",
        "Created custom detection rules tied to selected endpoints and attack activity.",
        "Built n8n automation to evaluate alert severity/priority and send notifications to Discord.",
        "Iterated on rules by generating and reviewing controlled test events."
      ],
      "outcome": "Produced working application detection and alert-notification workflows in lab environments.",
      "confidentiality": "Synthetic/lab activity only; no customer event data, production alert statistics or unverified SOAR-platform claims.",
      "repoUrl": "",
      "demoUrl": "",
      "caseStudy": {
        "kicker": "Detection is useful only when it is actionable.",
        "lede": "Creating a vulnerable endpoint was only half the exercise. I also wanted to see whether activity around it could be surfaced and sent to an appropriate channel.",
        "approach": [
          [
            "01 / Connect",
            "Forward application events into Splunk and Wazuh for analysis."
          ],
          [
            "02 / Detect",
            "Write tailored rules for conditions observed at selected endpoints."
          ],
          [
            "03 / Route",
            "Use n8n conditions to forward priority and severity-related notifications to Discord."
          ]
        ],
        "notes": "The work connected offensive testing to defensive visibility without claiming it discovered every vulnerability automatically.",
        "learning": "A meaningful alert needs a clear condition and useful context - not just a high-severity label.",
        "highlights": [
          [
            "Platforms",
            "Splunk + Wazuh"
          ],
          [
            "Logic",
            "Custom detection rules"
          ],
          [
            "Automation",
            "n8n → Discord"
          ]
        ],
        "stack": [
          "Splunk",
          "Wazuh",
          "n8n",
          "Discord",
          "Webhooks",
          "Log monitoring",
          "Custom detection rules"
        ],
        "status": "Lab implementation"
      }
    },
    {
      "id": "hardware-research",
      "category": "Research",
      "eyebrow": "SECURITY HARDWARE / RF + WIRELESS LABS",
      "title": "Hands-on experimentation.",
      "summary": "Explored Flipper devices, Pwnagotchi, Wi-Fi Ducky/BadUSB concepts and Raspberry Pi-based security projects in labs.",
      "visual": "lab",
      "image": "",
      "imageAlt": "",
      "tags": [
        "Flipper",
        "Pwnagotchi",
        "Raspberry Pi"
      ],
      "scope": "Authorized experimentation and learning with physical security-research hardware.",
      "contributions": [
        "Set up Pwnagotchi and experimented with Flipper devices and wireless/security testing hardware.",
        "Built or configured Raspberry Pi-based security projects and worked with Wi-Fi Ducky and BadUSB-style hardware concepts.",
        "Combined device setup, wireless concepts and troubleshooting in isolated learning environments.",
        "Used the hands-on experience to build familiarity with different interfaces and testing workflows."
      ],
      "outcome": "Developed practical familiarity with physical security-research hardware and its setup.",
      "confidentiality": "No credential collection, unauthorized wireless testing or device-attack instructions are demonstrated.",
      "repoUrl": "",
      "demoUrl": "",
      "caseStudy": {
        "kicker": "Learn the interface, understand the boundary.",
        "lede": "Research hardware lets me explore how software, radios, USB interfaces and embedded operating systems behave in practical environments.",
        "approach": [
          [
            "01 / Set up",
            "Prepare device firmware, supported hardware and lab connectivity."
          ],
          [
            "02 / Explore",
            "Study device capabilities, interfaces and security concepts within permission boundaries."
          ],
          [
            "03 / Document",
            "Record practical takeaways about setup, troubleshooting and controls."
          ]
        ],
        "notes": "This work gave me useful hardware troubleshooting habits and a broader view of the endpoint and wireless attack surface.",
        "learning": "Useful hardware research starts with safe scope, repeatable testing and understanding the device - not sensational demonstrations.",
        "highlights": [
          [
            "Devices",
            "Flipper / Pwnagotchi"
          ],
          [
            "Platforms",
            "Raspberry Pi"
          ],
          [
            "Context",
            "Lab research"
          ]
        ],
        "stack": [
          "Raspberry Pi",
          "Pwnagotchi",
          "Flipper",
          "Wi-Fi Ducky",
          "BadUSB concepts",
          "Linux"
        ],
        "status": "Hands-on lab exploration"
      }
    },
    {
      "id": "scopeforge",
      "category": "Tools",
      "eyebrow": "WEB / NETWORK / ACTIVE DIRECTORY REVIEW",
      "title": "ScopeForge",
      "summary": "A Python assessment workbench combining web discovery, network inventory, technology identification and read-only Active Directory export analysis.",
      "visual": "security",
      "image": "projects/scopeforge/preview.png",
      "imageAlt": "ScopeForge project overview showing web, network and Active Directory review capabilities.",
      "tags": [
        "Python",
        "Web and network security",
        "AD audit"
      ],
      "scope": "An assessment prototype for authorized web and network environments, with offline analysis of read-only Active Directory exports. Includes technology and login-page discovery, API inventory, selected input diagnostics, optional scanner adapters and structured reporting. It is not a complete automated penetration test. Personal lab testing, external scanner execution and live AD collection still require validation.",
      "contributions": [
        "Defined requirements for a combined web, network and Active Directory assessment workbench.",
        "Used AI-assisted development to create the initial Python implementation, reporting workflow and demonstration assets.",
        "Prioritized evidence tracking, explicit coverage limitations and separation of observations from unverified vulnerability candidates."
      ],
      "outcome": "Packaged a prototype with web, network and AD-export analysis modes, synthetic demonstrations, automated tests and multi-format reports. Personal validation of the complete workflow and optional integrations is pending.",
      "confidentiality": "Public reports use synthetic examples only. No real directory exports, client infrastructure details or confidential findings are published. Third-party tools and vulnerability databases retain their original attribution.",
      "repoUrl": "",
      "demoUrl": "https://mscs7.github.io/projects/scopeforge/",
      "caseStudy": {
        "kicker": "Organize evidence, do not exaggerate certainty.",
        "lede": "ScopeForge began as a way to make several bounded assessment steps easier to coordinate and explain. It is a prototype rather than an autonomous pentest product.",
        "approach": [
          [
            "01 / Define",
            "Choose a controlled assessment workflow with explicit scope boundaries."
          ],
          [
            "02 / Integrate",
            "Bring structured results from selected native checks and optional external tools into one evidence model."
          ],
          [
            "03 / Report",
            "Produce readable reports with clear coverage and validation limitations."
          ]
        ],
        "notes": "The project pushed me to think about testability, false positives, and what a report can actually prove.",
        "learning": "An orchestrator is only as credible as its evidence and documented limitations.",
        "highlights": [
          [
            "Status",
            "Prototype"
          ],
          [
            "Modes",
            "Web / network / AD export"
          ],
          [
            "Output",
            "Evidence-based reports"
          ]
        ],
        "stack": [
          "Python",
          "Nmap adapter",
          "ffuf adapter",
          "Wazuh-independent",
          "HTML / DOCX / TXT / JSON"
        ],
        "status": "Personal prototype - validation in progress"
      }
    },
    {
      "id": "wp-scope-workbench",
      "category": "Tools",
      "eyebrow": "WORDPRESS / SECURITY AUTOMATION",
      "title": "WP Scope Workbench",
      "summary": "A WordPress-focused Python assessment prototype combining scoped discovery, optional scanner integrations and evidence-based reporting.",
      "visual": "security",
      "image": "projects/wpscope/preview.png",
      "imageAlt": "WP Scope Workbench project overview and synthetic assessment report preview.",
      "tags": [
        "Python",
        "WordPress",
        "Security automation"
      ],
      "scope": "A standalone assessment prototype for authorized WordPress environments, not a WordPress plugin. Combines bounded discovery, selected configuration checks, optional external scanner adapters and report generation. Demonstration reports use synthetic local data. Personal lab testing and external scanner validation are pending.",
      "contributions": [
        "Defined a unified WordPress assessment workflow based on practical VAPT requirements.",
        "Used AI-assisted development to create the initial Python prototype, scanner adapters and reporting workflow.",
        "Specified consolidated evidence reporting to reduce the need to review separate tool outputs manually."
      ],
      "outcome": "Packaged a command-line prototype with a reproducible local demonstration and TXT, JSON, HTML and DOCX reporting. Ready for personal lab evaluation; not yet validated for client assessments.",
      "confidentiality": "Public examples contain synthetic demonstration data only. No client targets, credentials or confidential findings are included. Integrated third-party scanners retain their original authorship.",
      "repoUrl": "",
      "demoUrl": "https://mscs7.github.io/projects/wpscope/",
      "caseStudy": {
        "kicker": "Make the process repeatable, keep judgment human.",
        "lede": "I wanted a WordPress-focused workflow that gathers useful context and produces consistent evidence instead of leaving separate scanner outputs disconnected.",
        "approach": [
          [
            "01 / Discover",
            "Inventory WordPress indicators and selected exposed configuration details within scope."
          ],
          [
            "02 / Collect",
            "Optionally run separately installed discovery/scanner tools under engagement constraints."
          ],
          [
            "03 / Explain",
            "Generate evidence-led findings and clear coverage limitations."
          ]
        ],
        "notes": "Building the tool reinforced the difference between discovering an endpoint and proving the endpoint is vulnerable.",
        "learning": "Automation helps collect evidence; assessment quality still depends on understanding the application and validating results.",
        "highlights": [
          [
            "Status",
            "Prototype"
          ],
          [
            "Focus",
            "WordPress"
          ],
          [
            "Outputs",
            "TXT / JSON / HTML / DOCX"
          ]
        ],
        "stack": [
          "Python",
          "WordPress",
          "WPScan adapter",
          "ffuf adapter",
          "Nmap adapter",
          "DOCX reports"
        ],
        "status": "Personal prototype - validation in progress"
      }
    }
  ],
  "skills": [
    {
      "label": "Assess & investigate",
      "items": [
        "Burp Suite",
        "Nmap",
        "Metasploit",
        "Nessus",
        "Wireshark",
        "SQLmap",
        "Nuclei",
        "ffuf"
      ]
    },
    {
      "label": "Build & automate",
      "items": [
        "React",
        "Node.js",
        "Python",
        "Bash",
        "PowerShell",
        "MongoDB",
        "MySQL",
        "Webhooks"
      ]
    },
    {
      "label": "Cloud & hosting",
      "items": [
        "EC2",
        "S3",
        "IAM",
        "CloudWatch",
        "Lambda",
        "CloudTrail",
        "VPS",
        "Physical servers"
      ]
    },
    {
      "label": "Systems & networking",
      "items": [
        "Linux",
        "Windows Server",
        "Proxmox",
        "Docker",
        "VLANs",
        "Firewalls",
        "Cloudflare",
        "DNS",
        "Nginx Proxy Manager",
        "Pritunl",
        "Omada"
      ]
    }
  ],
  "experience": {
    "company": "Hackware Security Solutions",
    "department": "Research & Development",
    "period": "April 2024 - October 2026",
    "intro": "One R&D environment. Increasing responsibility across research, security assessments, infrastructure and technical delivery.",
    "roles": [
      {
        "title": "Senior Security Analyst",
        "dates": "May 2026 - October 2026",
        "label": "Most recent role"
      },
      {
        "title": "Junior Security Analyst",
        "dates": "July 2025 - April 2026",
        "label": "Security analysis"
      },
      {
        "title": "Junior Cybersecurity Researcher",
        "dates": "Started April 2024",
        "label": "Internship"
      }
    ],
    "sharedTitle": "Leadership & contributions across my tenure",
    "shared": [
      "Mentored interns, guided team members and reviewed technical work.",
      "Assigned tasks, conducted monthly report assessments and led technical projects.",
      "Delivered cybersecurity workshops, classes and knowledge-sharing sessions."
    ]
  },
  "certifications": [
    {
      "name": "CompTIA PenTest+",
      "issuer": "CompTIA",
      "date": "31 October 2026",
      "badge": "PenTest+",
      "url": "https://www.credly.com/badges/e7563eca-26c8-40ff-861c-41caa7342ba2/public_url"
    },
    {
      "name": "Certified Network Security Practitioner",
      "issuer": "The SecOps Group",
      "date": "January 2025",
      "badge": "CNSP",
      "url": "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXf3p6zidQ8nfw3ALHWi8GMikmnCFaifUMwPbuAE6cB02Xl/5CC7w3ccC8GvBljbfh1F6NpKJ1pZy2zH86hMN/do="
    }
  ],
  "education": {
    "degree": "Bachelor of Technology",
    "subject": "Computer Science and Engineering",
    "university": "Bir Tikendrajit University",
    "year": "2025"
  },
  "contact": {
    "eyebrow": "THE NEXT CHAPTER",
    "title": "Let's build something\nharder to break.",
    "description": "Have a cybersecurity role or a technical challenge in mind? Let's talk about where my research, engineering and security experience can contribute.",
    "emailSubject": "Cybersecurity opportunity - Mohammed Suhail",
    "note": "Security research. Practical engineering. Continuous learning."
  }
};
