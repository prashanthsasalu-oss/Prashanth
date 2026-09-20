import { ServicePillar } from '../types';

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'erp-excellence',
    number: '01',
    title: 'ERP Excellence & Enterprise Core',
    shortTitle: 'ERP Excellence',
    tagline: 'End-to-End Global Rollouts, Module Specialization & Autonomous Support',
    badge: 'Mission-Critical Core',
    description: 'Comprehensive enterprise system implementations, rollouts, functional & technical consulting, and 24/7 hyper-care support across global tier-1 ERP ecosystems.',
    accentColor: 'from-cyan-500 to-blue-600',
    icon: 'Database',
    keyHighlights: [
      'SAP Full-Stack Coverage (All Modules)',
      'Blue Yonder Supply Chain Planning & Execution',
      'Kinaxis RapidResponse Concurrent Planning',
      'Global Multi-Country Template Rollouts',
      '24/7 L1–L4 SLA Guaranteed Support'
    ],
    submodules: [
      {
        title: 'ERP System End-to-End Implementations & Rollouts',
        description: 'Greenfield and Brownfield S/4HANA migrations, global multi-entity template rollouts, and localization across Americas, EMEA, and APAC.',
        capabilities: [
          'Full lifecycle waterfall and agile/activate implementations',
          'Global rollouts with localized statutory taxation & compliance',
          'Legacy system data extraction, cleansing, and automated migration',
          'Zero-downtime cutover strategies with continuous testing'
        ],
        metrics: '99.9% Go-live stability & zero cutover data loss'
      },
      {
        title: 'SAP Ecosystem (All Modules Covered)',
        description: 'Deep functional architects and technical engineers certified across the complete SAP landscape.',
        capabilities: [
          'SAP S/4HANA Finance (FI/CO) – General Ledger, AP/AR, Asset Accounting, Profitability (CO-PA), Treasury',
          'SAP Materials Management (MM) – Automated procurement, inventory valuation, MRP',
          'SAP Sales & Distribution (SD) – Order-to-cash, pricing procedures, billing, international trade',
          'SAP Production Planning (PP) – Discrete & repetitive manufacturing, capacity leveling, shop floor control',
          'SAP Quality Management (QM) & Plant Maintenance (PM) – Preventative calibration, asset lifecycle',
          'SAP Human Capital (HCM / SuccessFactors) – Global payroll, core HR, talent intelligence',
          'SAP Ariba & Sourcing – Strategic supplier lifecycle and contract procurement',
          'SAP EWM (Extended Warehouse) & TM (Transportation Management) – Yard mgmt, RF scanning, freight rating',
          'Technical Core: SAP ABAP Cloud, CDS Views, Fiori UX, BTP (Business Technology Platform) & Basis Administration'
        ],
        metrics: '100% module coverage with certified senior architects'
      },
      {
        title: 'Blue Yonder Planning & Execution',
        description: 'Deploying cutting-edge supply chain planning, demand sensing, and warehouse execution platforms.',
        capabilities: [
          'Blue Yonder Luminate Planning & Demand Forecasting',
          'Category Management & Space Planning automation',
          'Transportation Management System (TMS) & Dispatch optimization',
          'Integration with enterprise SAP/Oracle cores via real-time APIs'
        ],
        metrics: '35% improvement in forecast accuracy'
      },
      {
        title: 'Kinaxis RapidResponse',
        description: 'Empowering supply chains with concurrent planning, real-time what-if simulations, and resilient digital threads.',
        capabilities: [
          'S&OP and Integrated Business Planning (IBP) configuration',
          'Multi-echelon inventory optimization & supply network orchestration',
          'Live scenario modeling for instant disruption mitigation',
          'Automated data ingestion pipelines with enterprise ERP systems'
        ],
        metrics: 'Sub-minute scenario calculations across millions of SKUs'
      },
      {
        title: 'Technical & Functional Consulting & 24/7 Support',
        description: 'Round-the-clock incident management, performance tuning, enhancement developments, and strategic advisory.',
        capabilities: [
          'Dedicated 24/7 follow-the-sun L1, L2, L3 & L4 technical support',
          'Code refactoring, custom BAPI/API microservices, and ABAP optimization',
          'Continuous governance, compliance patch deployment, and audit defense',
          'Quarterly upgrade roadmaps and process automation health checks'
        ],
        metrics: '15-min emergency response SLA for P1 enterprise outages'
      }
    ]
  },
  {
    id: 'human-resources',
    number: '02',
    title: 'Human Resources & Workforce Intelligence',
    shortTitle: 'Human Resources',
    tagline: 'AI Recruitment, Automated Compliance & Next-Gen Employee Experience',
    badge: 'Talent & Culture AI',
    description: 'Transforming HR operations into high-velocity, automated engines with predictive hiring, personalized journeys, and real-time workforce analytics.',
    accentColor: 'from-emerald-500 to-teal-600',
    icon: 'Users',
    keyHighlights: [
      'AI-Powered Predictive Recruitment',
      'Frictionless 100% Paperless Onboarding',
      'Continuous Sentiment & Attrition Analytics',
      'Automated Labor Law & Statutory Governance',
      'Immersive VR/AR Learning & Development'
    ],
    submodules: [
      {
        title: 'AI Recruitment & Automated Screening',
        description: 'Intelligent resume parsing, automated candidate screening chatbots, and predictive hiring algorithms to eliminate hiring bias and latency.',
        capabilities: [
          'Multilingual conversational AI chatbots for pre-screening and scheduling',
          'Skill-matrix matching algorithms with predictive candidate success scoring',
          'Automated background verification pipelines and credential checks'
        ],
        metrics: '70% reduction in time-to-hire with enhanced candidate quality'
      },
      {
        title: 'Digital Onboarding & Paperless Workflows',
        description: 'Delivering tailored digital journeys from offer acceptance to day one productivity without physical paperwork.',
        capabilities: [
          'E-signatures, automated digital locker verification, and I-9/tax forms',
          'Interactive onboarding roadmaps with buddy allocation and automated provisioning',
          'Micro-learning prompts for role readiness in week one'
        ],
        metrics: '100% paperless onboarding completed in under 20 minutes'
      },
      {
        title: 'HR Analytics & Real-Time Dashboards',
        description: 'Executive dashboards tracking workforce attrition risks, flight risk probability, pay parity, and productivity insights.',
        capabilities: [
          'Predictive attrition alerts powered by machine learning sentiment models',
          'Real-time headcount, turnover, span-of-control, and diversity telemetry',
          'Total workforce cost modeling and forecasting integration with FP&A'
        ],
        metrics: 'Predicts retention risks 60 days before critical resignation'
      },
      {
        title: 'Self-Service Portals & Mobile Apps',
        description: 'Unified employee and manager portals for seamless payroll access, leave management, claims, and flex benefits.',
        capabilities: [
          'Mobile-first responsive self-service apps with biometric auth',
          'Instant payslip generation, tax deductions, and expense claims automation',
          'Conversational AI helpdesk answering policy and benefits queries 24/7'
        ],
        metrics: '85% routine HR query deflection without human agent intervention'
      },
      {
        title: 'Learning & Development with VR/AR Simulations',
        description: 'AI-personalized upskilling paths, adaptive micro-learning modules, and virtual reality training environments for complex operations.',
        capabilities: [
          'Adaptive skill path recommendations tailored to individual career milestones',
          'Immersive VR/AR simulations for industrial safety, shop-floor ops, and customer service',
          'Automated certification tracking and compliance training records'
        ],
        metrics: '4x faster knowledge retention through interactive VR simulations'
      },
      {
        title: 'Performance Management & AI Career Pathing',
        description: 'Shifting from annual reviews to continuous 360 feedback loops, objective key results (OKRs), and AI-recommended career development steps.',
        capabilities: [
          'Continuous real-time feedback with sentiment and recognition telemetry',
          'AI-driven internal talent mobility matching open projects with employee skills',
          'Transparent goal tracking aligned with business unit revenue targets'
        ],
        metrics: '30% increase in internal employee mobility and project staffing speed'
      },
      {
        title: 'Compliance & Governance (Labor Law & HRIS)',
        description: 'Automated monitoring of international and local labor codes, statutory compliance, wage rules, and military-grade HRIS security.',
        capabilities: [
          'Automated statutory compliance alerts (provident fund, ESI, gratuity, overtime limits)',
          'Role-based granular access control protecting sensitive employee PII',
          'Immutable digital audit logs for labor inspection readiness'
        ],
        metrics: '100% audit-readiness and zero statutory penalty violations'
      },
      {
        title: 'Employee Engagement, Sentiment & Hybrid Tools',
        description: 'Pulse sentiment analytics, anonymous employee wellness platforms, and integrated collaboration toolkits for distributed hybrid workforces.',
        capabilities: [
          'Natural language sentiment analysis on pulse feedback and engagement channels',
          'Proactive burnout alerts and personalized workplace wellness suggestions',
          'Desk-booking, hybrid schedule coordination, and asynchronous work suites'
        ],
        metrics: '+28 Net Promoter Score (eNPS) improvement across enterprise teams'
      }
    ]
  },
  {
    id: 'supply-chain-management',
    number: '03',
    title: 'Supply Chain Management & Smart Operations',
    shortTitle: 'Supply Chain Management',
    tagline: 'Predictive Demand, Autonomous Sourcing & Digital Twins',
    badge: 'Resilient Agility',
    description: 'Engineering resilient, transparent, and cognitive supply chains that self-adjust to disruptions, optimize working capital, and guarantee delivery precision.',
    accentColor: 'from-blue-500 to-indigo-600',
    icon: 'Cpu',
    keyHighlights: [
      'AI Demand Sensing & Predictive S&OP',
      'Autonomous Sourcing & Digital Contracts',
      'IoT Real-Time Inventory Visibility',
      'Smart Factory Robotics & Digital Twins',
      'Supply Disruption Early-Warning Radar'
    ],
    submodules: [
      {
        title: 'Procurement & Sourcing',
        description: 'AI-driven supplier discovery, automated digital contract negotiation, vendor risk scoring, and spend classification.',
        capabilities: [
          'Machine learning algorithms analyzing global commodity prices for optimal procurement timing',
          'Digital contract lifecycle management with automated clause compliance audits',
          'Automated e-RFX generation, bid comparisons, and supplier evaluation scorecards'
        ],
        metrics: '12-18% direct procurement savings across enterprise categories'
      },
      {
        title: 'Planning & Predictive S&OP',
        description: 'Demand forecasting utilizing external market signals, seasonal trends, and AI-powered scenario modeling for Sales & Operations Planning.',
        capabilities: [
          'Multi-tier collaborative planning across suppliers, plants, and distribution centers',
          'Predictive demand sensing integrating weather, inflation, and macro-economic signals',
          'Automated consensus forecasting uniting Sales, Operations, and Finance'
        ],
        metrics: '40% reduction in forecasting errors and stockout incidents'
      },
      {
        title: 'Inventory Management & IoT Visibility',
        description: 'Real-time telemetry across multi-echelon networks, IoT RFID tracking, automated replenishment, and buffer stock optimization.',
        capabilities: [
          'Dynamic safety stock recalculation based on lead-time volatility and service targets',
          'Connected IoT sensor hubs monitoring cold-chain temperature, humidity, and location',
          'Automated reorder triggers directly executing purchase requisitions in ERP'
        ],
        metrics: '25% reduction in carrying inventory holding costs'
      },
      {
        title: 'Logistics, Distribution & Blockchain Traceability',
        description: 'Dynamic multi-modal route optimization, carrier bidding platforms, and tamper-proof blockchain ledgers tracking chain-of-custody.',
        capabilities: [
          'Cross-border digital freight coordination with automated customs documentation',
          'Immutable blockchain smart contracts for instant proof-of-delivery payment release',
          'Carbon-optimized routing algorithms reducing fleet emissions'
        ],
        metrics: '100% end-to-end traceability from raw material supplier to retail shelf'
      },
      {
        title: 'Manufacturing & Production (Smart Factories & Digital Twins)',
        description: 'Industry 4.0 deployments combining robotics, real-time line telemetry, predictive maintenance, and virtual digital twin simulations.',
        capabilities: [
          'Real-time Overall Equipment Effectiveness (OEE) telemetry on shop-floor machinery',
          'Acoustic and vibration AI sensors predicting component failures before downtime',
          'Digital twins simulating layout re-configurations to eliminate production bottlenecks'
        ],
        metrics: '30% decrease in unplanned machine downtime'
      },
      {
        title: 'Supplier Collaboration & Sustainability Portals',
        description: 'Cloud-based vendor collaboration workspaces, ESG sustainability compliance scorecards, and supplier performance scorecards.',
        capabilities: [
          'Real-time purchase order confirmation, delivery schedule changes, and ASN tracking',
          'Automated Scope 3 carbon footprint calculation and supplier audit submissions',
          'Collaborative root-cause analysis for quality rejections and dispute resolution'
        ],
        metrics: '80% faster supplier cycle turnaround on change orders'
      },
      {
        title: 'Risk & Resilience Modeling',
        description: 'AI-driven monitoring of geopolitical events, port congestions, weather anomalies, and financial stability of tier-1 to tier-3 suppliers.',
        capabilities: [
          '24/7 global disruption radar scraping satellite, port, and news feeds',
          'Automated contingency routing shifting volume to qualified secondary suppliers',
          'Supply chain stress testing under severe disruption scenarios'
        ],
        metrics: 'Averts up to 90% of critical assembly line stoppages'
      },
      {
        title: 'Finance Integration (FP&A) & Total Cost of Ownership',
        description: 'Bridging operational supply chain metrics directly into executive financial models to maximize working capital and cash conversion cycles.',
        capabilities: [
          'Live TCO (Total Cost of Ownership) comparison factoring freight, duties, and lead times',
          'Working capital optimization tracking Days Sales of Inventory (DSI)',
          'Automated landed-cost calculations fed continuously into ERP general ledgers'
        ],
        metrics: 'Up to 22-day acceleration in Cash-to-Cash conversion cycle'
      },
      {
        title: 'Customer Fulfillment & Continuous Improvement',
        description: 'Digital order orchestration, dynamic last-mile fulfillment, real-time SLA trackers, and Kaizen continuous improvement workflows.',
        capabilities: [
          'Intelligent order routing to the optimal fulfillment node minimizing split shipments',
          'Live SMS/WhatsApp customer delivery tracking with ETA precision',
          'Automated post-mortem analytics flagging root causes of delayed shipments'
        ],
        metrics: '99.4% On-Time In-Full (OTIF) order fulfillment benchmark'
      }
    ]
  },
  {
    id: 'tms-wms-logistics',
    number: '04',
    title: 'TMS, WMS & Logistics Engineering',
    shortTitle: 'TMS, WMS & Logistics',
    tagline: 'Autonomous Freight, Robotics Warehousing & Process Mining',
    badge: 'Precision Fulfillment',
    description: 'Transforming transportation, storage, and material handling with AI route intelligence, robotics picking, digital freight auctions, and process mining.',
    accentColor: 'from-amber-500 to-orange-600',
    icon: 'Truck',
    keyHighlights: [
      'AI Route Optimization & Dynamic Fuel Efficiency',
      'Automated Carrier Bidding & Digital Freight',
      'Smart Robotics WMS & RFID Inventory Accuracy',
      'Simulated Warehouse Digital Twins',
      'Process Mining for Bottleneck Elimination'
    ],
    submodules: [
      {
        title: 'Transportation Management (TMS)',
        description: 'Intelligent fleet routing, dynamic carrier tendering, live GPS/telematics tracking, and freight spend analytics.',
        capabilities: [
          'AI Route Optimization: Real-time traffic, elevation, payload weight, and fuel efficiency modeling',
          'Digital Freight Platforms: Automated carrier selection, spot-rate bidding, and tender execution',
          'Visibility & Tracking: IoT-enabled container sensors monitoring shock, tilt, temperature, and GPS coordinates',
          'Cost Optimization: Dynamic freight pricing, automated invoice reconciliation, and fuel surcharge audits'
        ],
        metrics: '18% reduction in total freight spend & 22% lower fuel burn'
      },
      {
        title: 'Warehouse Management (WMS)',
        description: 'High-throughput fulfillment centers powered by autonomous mobile robots (AMRs), RFID scanning, and predictive slotting.',
        capabilities: [
          'Smart Warehousing: Robotics integration, pick-to-light, automated storage and retrieval systems (ASRS)',
          'Inventory Accuracy: RFID gates, IoT drone counting, and instant cycle-count reconciliations',
          'Digital Twins: 3D interactive simulated warehouse layouts maximizing cubic space utilization',
          'Labor Optimization: AI-driven workforce shift scheduling and intelligent task interleaving'
        ],
        metrics: '99.98% inventory accuracy and 45% increase in pick rates'
      },
      {
        title: 'Logistics & Process Optimization',
        description: 'End-to-end multi-tier logistics orchestration, last-mile precision routing, and enterprise process mining.',
        capabilities: [
          'End-to-End Visibility: Blockchain-backed digital bill of lading (eBL) and unbroken audit chains',
          'Last-Mile Delivery: Hyper-local routing, doorstep time-window guarantees, and automated customer dispatch alerts',
          'Process Mining: Deep event-log extraction from ERP/TMS to identify bottlenecks and automate repetitive workflows',
          'Risk & Resilience: Automated rerouting during border delays or carrier capacity crunches'
        ],
        metrics: '35% reduction in order-to-delivery lead times'
      }
    ]
  },
  {
    id: 'finance-digital-transformation',
    number: '05',
    title: 'Finance Digital Transformation & Autonomous FP&A',
    shortTitle: 'Finance Transformation',
    tagline: 'Predictive Treasury, RPA Accounting & Immutable Blockchain Audits',
    badge: 'Fiscal Accuracy',
    description: 'Empowering the Office of the CFO with cognitive forecasting, automated invoice processing, smart contract settlement, and continuous audit readiness.',
    accentColor: 'from-violet-500 to-purple-600',
    icon: 'TrendingUp',
    keyHighlights: [
      'AI Predictive Revenue & Cash Flow Forecasting',
      'RPA for Automated Invoice Reconciliation',
      'Blockchain & Smart Contract Audit Trails',
      'Real-Time Working Capital & KPI Dashboards',
      'Digital Treasury & Dynamic Currency Hedging'
    ],
    submodules: [
      {
        title: 'AI-Driven Forecasting & Digital FP&A',
        description: 'Advanced machine learning models generating rolling revenue forecasts, scenario modeling, and automated capital allocation.',
        capabilities: [
          'Predictive analytics analyzing customer payment behaviors, historical sales, and macro trends',
          'Real-time scenario modeling simulating interest rate shifts, inflation spikes, and supply shocks',
          'Automated bottom-up and top-down budgeting synchronizing global business units'
        ],
        metrics: '98% forecast accuracy across 12-month rolling cash horizons'
      },
      {
        title: 'Robotic Process Automation (RPA) in Accounting',
        description: 'Software bots handling high-volume invoice processing, three-way matching, bank reconciliations, and close management.',
        capabilities: [
          'Intelligent OCR extracting line-item details from multi-format vendor invoices',
          'Automated 3-way matching between PO, receiving document, and vendor invoice',
          'Sub-ledger to general ledger reconciliation with automated journal voucher postings'
        ],
        metrics: '80% faster month-end financial closing cycle'
      },
      {
        title: 'Blockchain & Smart Contracts',
        description: 'Tamper-proof distributed ledgers preventing financial fraud, automating milestone disbursements, and ensuring transparent audits.',
        capabilities: [
          'Self-executing smart contracts releasing funds upon verified digital receipt of goods',
          'Cryptographic immutability preventing double-invoicing and fraudulent vendor modifications',
          'Instant read-access nodes for internal auditors and external regulatory bodies'
        ],
        metrics: '100% elimination of payment fraud and reconciliation discrepancies'
      },
      {
        title: 'Cloud ERP & Finance Systems Modernization',
        description: 'Migrating legacy on-premise accounting databases to secure cloud-native architectures with real-time consolidations.',
        capabilities: [
          'Unified multi-currency, multi-GAAP, and IFRS compliant global chart of accounts',
          'Scalable microservice APIs connecting billing, CRM, and banking gateways',
          'High-availability disaster recovery with RPO/RTO measured in seconds'
        ],
        metrics: '60% reduction in finance IT maintenance and infrastructure cost'
      },
      {
        title: 'Data Visualization, KPIs & Profitability Dashboards',
        description: 'Executive command centers tracking EBITDA, Days Sales Outstanding (DSO), gross margins, and customer unit economics.',
        capabilities: [
          'Interactive drill-downs from high-level balance sheets down to single line-item journal entries',
          'Working capital telemetry alerting cash bottlenecks before payroll or supplier dues',
          'Automated executive slide-deck generation for board meetings'
        ],
        metrics: 'Real-time visibility replacing delayed 30-day reporting lag'
      },
      {
        title: 'Compliance, Governance & Treasury Automation',
        description: 'Digital audit trails, automated tax filings (GST, VAT, Transfer Pricing), liquidity tracking, and FinTech integrations.',
        capabilities: [
          'Continuous automated monitoring of internal controls (SOX 404 compliance)',
          'AI-powered expense policy audits flagging duplicate or suspicious expense claims',
          'Treasury management with dynamic hedging algorithms and cross-border payment rails'
        ],
        metrics: '100% compliance adherence with zero regulatory audit penalties'
      }
    ]
  },
  {
    id: 'customer-experience',
    number: '06',
    title: 'Customer Experience (CX) & Omnichannel AI',
    shortTitle: 'Customer Experience',
    tagline: '24/7 AI Concierge, Unified CDP & Hyper-Personalized Journeys',
    badge: 'Brand Loyalty',
    description: 'Elevating customer lifetime value through unified data platforms, intelligent 24/7 conversational agents, sentiment analysis, and self-service portals.',
    accentColor: 'from-pink-500 to-rose-600',
    icon: 'Sparkles',
    keyHighlights: [
      'AI Customer Insights & Predictive Churn Alerts',
      'Omnichannel Engagement (Web, App, WhatsApp, Email)',
      '24/7 Generative AI Chatbots & Virtual Assistants',
      'Unified 360° Customer Data Platform (CDP)',
      'Voice of Customer (VoC) Sentiment Analytics'
    ],
    submodules: [
      {
        title: 'AI-Driven Customer Insights & CDP',
        description: 'Unified 360-degree customer data platform aggregating web sessions, purchase histories, support tickets, and predictive lifetime value.',
        capabilities: [
          'Machine learning models identifying churn risk signals 45 days in advance',
          'Unified profile resolution merging anonymous cookies with authenticated CRM IDs',
          'Algorithmic customer segmentation based on engagement velocity and purchasing power'
        ],
        metrics: '3.2x increase in repeat purchase conversion'
      },
      {
        title: 'Omnichannel Engagement & 24/7 Chatbots',
        description: 'Cohesive customer communications across WhatsApp, mobile app, live chat, SMS, and email with contextual AI agents.',
        capabilities: [
          'Generative AI virtual assistants resolving complex technical queries and order modifications',
          'Seamless human handoff with full conversational transcript and sentiment summary',
          'Multilingual support across 40+ global languages with localized phrasing'
        ],
        metrics: '82% of customer inquiries resolved on first touch without human intervention'
      },
      {
        title: 'Personalized Marketing & Digital Portals',
        description: 'Dynamic recommendation engines, automated trigger-based nurturing campaigns, and self-service customer hubs.',
        capabilities: [
          'Self-service portals enabling customers to track shipments, initiate returns, and edit subscriptions',
          'AI recommendation widgets generating personalized product bundles in real time',
          'Automated case escalation workflows prioritizing high-value enterprise accounts'
        ],
        metrics: '+45 points jump in Customer Satisfaction (CSAT)'
      },
      {
        title: 'Voice of Customer (VoC) & Loyalty Digitization',
        description: 'Continuous sentiment analysis across phone calls, reviews, and surveys combined with gamified loyalty programs.',
        capabilities: [
          'Speech-to-text NLP sentiment tagging on recorded customer care interactions',
          'Gamified mobile-first rewards tracking with instant tier upgrades and redeemable tokens',
          'Executive CX dashboards tracking Net Promoter Score (NPS) and customer effort score'
        ],
        metrics: '50% reduction in customer support resolution turnaround time'
      }
    ]
  },
  {
    id: 'governance-compliance-audit',
    number: '07',
    title: 'Governance, Compliance & Audit Support',
    shortTitle: 'Governance & Compliance',
    tagline: 'Automated Regulatory Tracking, RPA Evidence & 100% Secure Architecture',
    badge: 'Uncompromising Trust',
    description: 'Shielding enterprises with continuous regulatory tracking, automated audit evidence harvesting, digital policy enforcement, and zero-trust cloud security.',
    accentColor: 'from-emerald-600 to-cyan-600',
    icon: 'ShieldCheck',
    keyHighlights: [
      'Automated Regulatory Change Monitoring',
      'Continuous Risk & Control Anomaly Alerts',
      'RPA for Audit Evidence & Reconciliations',
      'Immutable Blockchain Compliance Logging',
      '100% Data Secured & Zero-Trust Cloud Architecture'
    ],
    submodules: [
      {
        title: 'Automated Compliance Monitoring & Policy Management',
        description: 'Continuous AI tracking of changes in global regulatory statutes (SOX, GDPR, HIPAA, ISO 27001, SOC 2, statutory tax laws).',
        capabilities: [
          'Natural language parsers scanning regulatory gazettes and publishing instant compliance impact briefs',
          'Centralized, paperless digital policy distribution with employee sign-off tracking and version history',
          'Automated policy delta mapping identifying which standard operating procedures need updates'
        ],
        metrics: '100% regulatory coverage with zero missed statutory updates'
      },
      {
        title: 'Risk & Control Automation & Anomaly Detection',
        description: 'Real-time telemetry continuously auditing enterprise transactions for internal control failures, fraudulent behavior, and segregation of duties (SoD) conflicts.',
        capabilities: [
          'Autonomous machine learning algorithms flagging unusual approval amounts or anomalous vendor accounts',
          'Segregation of Duties (SoD) real-time conflict prevention inside SAP and enterprise systems',
          'Automated risk scorecards updated continuously for enterprise risk management (ERM) committees'
        ],
        metrics: '99.9% fraud and unauthorized transaction prevention'
      },
      {
        title: 'Audit Process Optimization & RPA Evidence Harvesting',
        description: 'Liberating internal and external audit teams from manual sampling by using RPA bots to collect evidence, reconcile ledgers, and build audit trails.',
        capabilities: [
          'Automated extraction of screenshots, system logs, approval emails, and bank records for test of controls',
          '100% population testing replacing traditional 5% manual statistical sampling',
          'Digital audit workpapers formatted to Big-4 and statutory auditor specifications'
        ],
        metrics: '75% reduction in audit prep cycle time and external auditor billable hours'
      },
      {
        title: 'Blockchain for Transparency & Data Governance',
        description: 'Leveraging immutable cryptographic ledgers for compliance logs, supplier certifications, and master data quality.',
        capabilities: [
          'Tamper-proof record keeping of all system access logs, master data changes, and compliance certifications',
          'Data governance dashboards tracking data lineage, ownership, and semantic data quality scores',
          'Automated regulatory filing generation with digital cryptographically signed audit stamps'
        ],
        metrics: 'Zero-dispute audit trail verification recognized by international regulators'
      },
      {
        title: 'Inspection & Readiness Tools (CAPA & Secure Cloud)',
        description: 'Digital checklists, automated Corrective and Preventive Actions (CAPA) tracking, and zero-trust cloud encryption.',
        capabilities: [
          'Digital readiness inspection checklists for ISO, FDA, and environmental safety audits',
          'Automated CAPA assignment, milestone tracking, and root-cause verification workflows',
          '100% data security: AES-256 encryption at rest, TLS 1.3 in transit, and role-based zero-trust isolation'
        ],
        metrics: '100% first-pass rate for international certification inspections'
      }
    ]
  }
];
