import React, { useState } from 'react';
import { 
  Network, 
  Layers, 
  Workflow, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  BarChart3, 
  ExternalLink,
  Zap,
  Globe2,
  RefreshCw
} from 'lucide-react';
import endToEndImg from '../assets/images/end_to_end_transformation_1789938244647.jpg';

interface EndToEndTransformationSectionProps {
  onOpenRfp: (category?: string) => void;
}

export const EndToEndTransformationSection: React.FC<EndToEndTransformationSectionProps> = ({ onOpenRfp }) => {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'architecture' | 'comparison'>('architecture');

  const transformationLayers = [
    {
      id: 'core-cloud',
      name: 'Layer 1: Enterprise Core Modernization',
      badge: 'Foundation',
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      tagline: 'Legacy De-risking & Unified ERP Cloud Stacks',
      description: 'End-to-end transformation begins by retiring fragmented legacy monoliths. We migrate and harmonize mission-critical ERP backbones across SAP S/4HANA (all functional and technical modules), Blue Yonder Luminate, and Kinaxis RapidResponse into a unified cloud backbone.',
      deliverables: [
        'Clean-Core SAP S/4HANA brownfield and greenfield transitions',
        'Kinaxis concurrent planning & multi-echelon inventory orchestration',
        'Zero-downtime cutovers with 100% data preservation guarantees'
      ]
    },
    {
      id: 'autonomous-workflows',
      name: 'Layer 2: Autonomous Neural Workflows',
      badge: 'Orchestration',
      icon: <Workflow className="w-5 h-5 text-emerald-400" />,
      tagline: 'Autonomous RPA & Continuous Process Mining',
      description: 'Beyond isolated automation scripts, our neural bots connect cross-departmental operations. Embedded process mining (Celonis/UiPath) continuously identifies bottlenecks, autonomously re-routing purchase orders, invoices, and logistics dispatches without human drag.',
      deliverables: [
        'End-to-end Order-to-Cash (O2C) and Procure-to-Pay (P2P) automation',
        'Self-healing software bots with automated exception remediation',
        'Direct 70%+ reduction in manual processing cycle times'
      ]
    },
    {
      id: 'data-mesh',
      name: 'Layer 3: Cognitive Data Mesh & FP&A',
      badge: 'Intelligence',
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      tagline: '100% Accurate Single-Source-of-Truth Data Fabric',
      description: 'We dismantle siloed data lakes into a high-speed federated data mesh. Financial records, warehouse sensor telemetry, and HR workforce metrics are reconciled in real-time, feeding continuous predictive FP&A and algorithmic boardroom decision models.',
      deliverables: [
        '100% reconciliation accuracy between operational and financial ledgers',
        'Automated real-time cash flow, treasury hedging, and working capital modeling',
        'Executive telemetry dashboards updating in sub-second intervals'
      ]
    },
    {
      id: 'people-cx',
      name: 'Layer 4: Human-Centric AI & Omnichannel CX',
      badge: 'Experience',
      icon: <Users className="w-5 h-5 text-amber-400" />,
      tagline: 'Supercharged Workforce & Frictionless Customer Journeys',
      description: 'Transforming technology without transforming the human experience fails. We empower global workforces with AI talent copilots and self-service portals while deploying omnichannel customer intelligence across web, WhatsApp, and enterprise portals.',
      deliverables: [
        'AI recruitment, skills ontologies, and automated HR compliance',
        'Hyper-personalized 24/7 customer engagement and predictive churn defense',
        '+45 point average boost in enterprise CSAT and employee retention'
      ]
    },
    {
      id: 'governance-shield',
      name: 'Layer 5: Continuous Audit & Zero-Trust Shield',
      badge: 'Trust & Resilience',
      icon: <ShieldCheck className="w-5 h-5 text-teal-400" />,
      tagline: 'Audit Immortality, Statutory Compliance & Zero-Trust',
      description: 'Every interaction across the digital thread is cryptographically logged. Automated SOX 404 controls, ISO 27001 policies, and statutory compliance checks run autonomously, delivering effortless audit readiness and quantum-resistant security.',
      deliverables: [
        'Immutable audit logs eliminating manual audit preparation stress',
        'Continuous Segregation of Duties (SoD) and SAP GRC enforcement',
        'SOC 2 Type II, GDPR, and DPDP certified cloud architecture'
      ]
    }
  ];

  return (
    <section id="end-to-end-section" className="py-20 lg:py-28 relative bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Network className="w-4 h-4 text-cyan-400" />
            <span>Holistic Strategic Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit'] leading-tight">
            Not Only Process Automation &amp; Optimization—<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Total End-to-End Digital Transformation
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Process automation solves isolated friction; true enterprise resilience requires a synchronized digital nervous system. Varaxis Global transforms the entire corporate lifecycle—from core cloud infrastructure and AI operational bots to financial predictive modeling and boardroom governance.
          </p>

          {/* Toggle between Architecture & Comparison */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={() => setViewMode('architecture')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                viewMode === 'architecture'
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              5-Layer End-to-End Stack
            </button>
            <button
              onClick={() => setViewMode('comparison')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                viewMode === 'comparison'
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Point Automation vs. Varaxis Transformation
            </button>
          </div>
        </div>

        {viewMode === 'architecture' ? (
          /* Visual Ecosystem with Generated Architectural Asset */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Art Box */}
            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-slate-950 group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={endToEndImg}
                  alt="End-to-End Digital Transformation Architecture by Varaxis Global"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>

              {/* Floating Hologram Badges on Image */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-950/85 backdrop-blur-md border border-cyan-500/50 text-cyan-300 flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-cyan-400" />
                  Synchronized Digital Thread
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-950/85 backdrop-blur-md border border-emerald-500/50 text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  100% Data Accuracy
                </span>
              </div>

              <div className="p-6 sm:p-8 bg-slate-950/95 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider">
                    Full Spectrum Coverage
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Zero Operational Blind Spots
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-['Outfit']">
                  The Varaxis Unified Digital Nervous System
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every layer interacts through low-latency event brokers and quantum-safe APIs. When a supply chain shipment is delayed or a currency fluctuates, autonomous algorithms instantly adjust production schedules, treasury hedges, and customer delivery estimates simultaneously.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onOpenRfp('Comprehensive Digital Transformation')}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 text-white text-xs font-semibold flex items-center gap-2 transition"
                  >
                    <span>Request Full Architecture Assessment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Layer Explorer */}
            <div className="lg:col-span-6 space-y-3">
              {transformationLayers.map((layer, idx) => (
                <div
                  key={layer.id}
                  onClick={() => setActiveLayer(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    activeLayer === idx
                      ? 'bg-slate-900 border-cyan-500/60 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-500/30'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border ${
                        activeLayer === idx 
                          ? 'bg-cyan-950 border-cyan-500/40 text-cyan-300' 
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}>
                        {layer.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                            {layer.badge}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white font-['Outfit']">
                          {layer.name}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {layer.description}
                  </p>

                  {activeLayer === idx && (
                    <div className="mt-4 pt-3 border-t border-slate-800 space-y-2 animate-in fade-in duration-200">
                      <span className="text-[11px] font-semibold text-cyan-300 uppercase tracking-wider block font-mono">
                        Key Transformation Deliverables:
                      </span>
                      {layer.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        ) : (
          /* Comparison Table: Point Automation vs. Varaxis Total Transformation */
          <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl font-bold text-white font-['Outfit']">
                Why Isolated Automation Stalls — And Why End-to-End Transformation Wins
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Deploying stand-alone automation without addressing foundational ERP systems and enterprise data flows creates fragile tech debt. Here is how Varaxis transforms your enterprise holistically:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Isolated Point Automation Flaws */}
              <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-900/40 text-rose-400 flex items-center justify-center font-bold text-xs">
                    ✕
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base font-['Outfit']">
                      Isolated Point Automation
                    </h4>
                    <span className="text-[11px] text-rose-300 font-mono">Fragmented, high-maintenance patches</span>
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>Siloed RPA scripts that break whenever UI or ERP versions update.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>Leaves legacy ERP debt untouched, trapping data in disjointed department databases.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>Manual spreadsheet reconciliations still required at month-end closing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>No holistic audit trail, leading to high compliance stress and audit risk.</span>
                  </li>
                </ul>
              </div>

              {/* Varaxis Total End-to-End Transformation */}
              <div className="p-6 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 space-y-4 shadow-xl shadow-cyan-950/40">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500 text-white flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base font-['Outfit']">
                      Varaxis End-to-End Digital Transformation
                    </h4>
                    <span className="text-[11px] text-cyan-300 font-mono">Unified, autonomous, future-proof</span>
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Synchronized core ERP (SAP, Blue Yonder, Kinaxis) with seamless cloud data flows.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Autonomous neural agents with continuous self-healing and automated exception handling.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Guaranteed 100% reconciliation accuracy and continuous real-time financial close.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Embedded Zero-Trust security and immutable compliance ready for Big-4 audits 24/7.</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => onOpenRfp('Comprehensive Digital Transformation')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition"
              >
                Schedule an End-to-End Transformation Workshop
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
