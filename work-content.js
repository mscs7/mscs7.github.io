/* Add detailed project stories without replacing a person's existing content.js.
   Existing project summaries and real links win; this file only fills missing project IDs and detailed sections.
   Editing tip: the local editor loads this file so all work items can be edited and exported together. */
window.WORK_LIBRARY = [
  {
    "id": "security-assessments",
    "category": "Security",
    "eyebrow": "CLIENT VAPT / APPSEC + NETSEC",
    "title": "Finding what scanners miss.",
    "summary": "Web, API, Android, limited desktop, network and infrastructure assessments - with manual review and retesting.",
    "visual": "security",
    "image": "",
    "imageAlt": "",
    "tags": [
      "VAPT",
      "AppSec / NetSec",
      "Reporting"
    ],
    "scope": "Authorized assessment work across different client engagements, not a single disclosed project.",
    "contributions": [
      "Performed web and API testing, Android assessments and a limited number of desktop/thick-client assessments.",
      "Assessed networks, internal infrastructure, Active Directory and cloud environments.",
      "Performed security-focused source-code reviews, wrote VAPT reports and retested fixes after remediation.",
      "Investigated authentication, authorization, business logic and configuration weaknesses where relevant to scope."
    ],
    "outcome": "Produced professional assessment deliverables and performed follow-up retesting of remediated vulnerabilities.",
    "confidentiality": "Client identities, vulnerability details and exploitable proof-of-concept material are not disclosed.",
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
    "eyebrow": "R&D / VULNERABLE ENVIRONMENTS",
    "title": "Build it to understand how it breaks.",
    "summary": "Approximately ten realistic university, banking, e-commerce, CRM and HRM labs built around real-world vulnerability research.",
    "visual": "lab",
    "image": "",
    "imageAlt": "",
    "tags": [
      "CVE research",
      "Full-stack labs",
      "OWASP"
    ],
    "scope": "Purpose-built, intentionally vulnerable training environments; not exposed client services.",
    "contributions": [
      "Built end-to-end university, e-commerce, banking, CRM and HRM application scenarios.",
      "Researched current CVEs and OWASP-related issues, then incorporated suitable patterns into lab exercises.",
      "Mocked payment gateway flows and other business processes to make testing realistic.",
      "Developed with React, Node.js, Python, MongoDB and MySQL; deployed with Docker and virtual machines."
    ],
    "outcome": "Approximately ten functional application labs that connect software development with practical security research.",
    "confidentiality": "Only conceptual architecture is shown. Live vulnerable endpoints and lab exploitation instructions are excluded.",
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
    "eyebrow": "DELL SERVERS / VIRTUALIZATION",
    "title": "The physical layer behind the labs.",
    "summary": "Dell 730/840 servers, server assembly, iDRAC administration and a three-node Proxmox setup for hosted services and training.",
    "visual": "infra",
    "image": "",
    "imageAlt": "",
    "tags": [
      "Dell servers",
      "Proxmox",
      "iDRAC"
    ],
    "scope": "Company-owned physical-server environments supporting labs, hosted services and client workloads.",
    "contributions": [
      "Worked with Dell 730/840 servers, server hardware assembly and out-of-band iDRAC interfaces.",
      "Configured a three-node Proxmox environment and managed VMs and client VPS instances.",
      "Hosted cybersecurity labs, CTF environments and services for external companies.",
      "Handled server, virtualization and hosting troubleshooting alongside Linux and Windows administration."
    ],
    "outcome": "Operated a physical and virtual hosting foundation for multiple training and client services.",
    "confidentiality": "No actual client topology, credentials, IP addresses or availability guarantee is published.",
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
    "eyebrow": "FULL-STACK / BUSINESS SYSTEMS",
    "title": "Build products, not just demos.",
    "summary": "Developed and hosted attendance, CRM and examination portals with business workflows, database layers and webhooks.",
    "visual": "app",
    "image": "",
    "imageAlt": "",
    "tags": [
      "CRM",
      "Attendance",
      "Full-stack"
    ],
    "scope": "Applications developed for company and client needs, with public screenshots omitted to protect internal information.",
    "contributions": [
      "Built functional CRM, attendance and examination portals, including frontend, backend and persistence layers.",
      "Used React, Node.js, Python and relational/document databases according to project needs.",
      "Integrated webhooks and hosted the applications on managed infrastructure.",
      "Combined hands-on development with awareness of authentication, access controls and application security."
    ],
    "outcome": "Delivered hosted business applications for actual organisational use.",
    "confidentiality": "No client records, internal screenshots, proprietary code or confidential application URLs are shared.",
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
    "eyebrow": "WEB / NETWORK / AD ASSESSMENT PROTOTYPE",
    "title": "ScopeForge: evidence-driven assessment.",
    "summary": "A Python assessment workflow prototype with web discovery, network inventory, AD-export review and reporting.",
    "visual": "security",
    "image": "projects/scopeforge/preview.png",
    "imageAlt": "",
    "tags": [
      "Python",
      "Assessment workflow",
      "Reporting"
    ],
    "scope": "Personal prototype in development, built with AI assistance. Core local demo is not a substitute for validation against client systems.",
    "contributions": [
      "Defined workbench requirements covering scope limits, discovery, evidence and report generation.",
      "Used AI-assisted development to create initial tool adapters and structured reporting.",
      "Created synthetic demonstrations and a public technical showcase.",
      "Tracked integration limitations instead of claiming complete autonomous penetration testing."
    ],
    "outcome": "Initial local prototype and synthetic reports; further personal lab validation remains necessary.",
    "confidentiality": "Demonstrations are synthetic. Third-party scanners remain credited; no client findings are exposed.",
    "repoUrl": "",
    "demoUrl": "projects/scopeforge/index.html",
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
    "eyebrow": "WORDPRESS / ASSESSMENT PROTOTYPE",
    "title": "WP Scope Workbench: WordPress in focus.",
    "summary": "An assessment-workflow prototype combining WordPress discovery, optional scanner adapters and multiple report formats.",
    "visual": "security",
    "image": "projects/wpscope/preview.png",
    "imageAlt": "",
    "tags": [
      "WordPress",
      "Python",
      "Reporting"
    ],
    "scope": "Personal prototype in development. Not a live public scanning service or independently validated turnkey VAPT.",
    "contributions": [
      "Defined a unified WordPress testing and evidence-reporting workflow.",
      "Used AI-assisted coding to create native checks and optional WPScan/ffuf/Nmap-related adapters.",
      "Prepared a local synthetic demo and multi-format reports.",
      "Documented coverage and external integration limitations."
    ],
    "outcome": "A locally demonstrable WordPress assessment prototype, still awaiting broad personal integration testing.",
    "confidentiality": "Only synthetic reports; no public client hosts, exploit details or customer data are exposed.",
    "repoUrl": "",
    "demoUrl": "projects/wpscope/index.html",
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
];

(() => {
  'use strict';
  const portfolio = window.PORTFOLIO;
  if (!portfolio || !Array.isArray(portfolio.projects)) return;
  const byId = new Map(portfolio.projects.map(p => [p.id, p]));
  for (const example of window.WORK_LIBRARY) {
    const existing = byId.get(example.id);
    if (existing) {
      // caseStudy is the only enriched field supplied for the existing work;
      // keep user-written titles, categories, URLs, summaries and contributions.
      if (!existing.caseStudy) existing.caseStudy = structuredClone(example.caseStudy);
    } else {
      const added = structuredClone(example);
      portfolio.projects.push(added);
      byId.set(added.id, added);
    }
  }
  const rank = new Map(window.WORK_LIBRARY.map((work, i) => [work.id, i]));
  portfolio.projects.sort((a,b) => (rank.get(a.id) ?? 999) - (rank.get(b.id) ?? 999));
  if (portfolio.profile && !portfolio.profile.portraitUrl) {
    portfolio.profile.portraitUrl = 'assets/suhail-portrait.jpg';
    portfolio.profile.portraitAlt = 'Portrait of Mohammed Suhail C S';
  }
})();
