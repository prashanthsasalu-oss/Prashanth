import React, { useState } from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  Cpu, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Compass, 
  Bot, 
  Zap, 
  BarChart, 
  Eye, 
  Layers
} from 'lucide-react';
import futureAiImg from '../assets/images/future_ai_transformation_1789938232295.jpg';
import smartLogisticsImg from '../assets/images/autonomous_smart_logistics_1789938259448.jpg';

interface FuturePerspectiveResultsSectionProps {
  onOpenRfp: (category?: string) => void;
}

export const FuturePerspectiveResultsSection: React.FC<FuturePerspectiveResultsSectionProps> = ({ onOpenRfp }) => {
  const [activeHorizon, setActiveHorizon] = useState<'h1' | 'h2' | 'h3'>('h1');

  const horizonData = {
    h1: {
      title: 'Horizon 2026–2027: Foundation of Autonomous Intelligence',
      badge: 'Immediate Operational Advantage',
      subtitle: 'Zero-Downtime Core Modernization & Self-Healing Workflows',
      image: futureAiImg,
      alt: 'Autonomous AI-Enabled Enterprise Future Horizon with Varaxis Global',
      summary: 'Establishing the unified AI neural backbone. Eliminates manual spreadsheet reconciliation, automates 3-way matching in finance, and establishes continuous predictive demand forecasting.',
      metrics: [
        { label: 'Forecast Precision Lift', value: '+38%', desc: 'Machine-learning demand sensing over seasonal variations' },
        { label: 'Immediate Labor Acceleration', value: '45%', desc: 'Reallocation from manual entry to strategic decision-making' },
        { label: 'Reconciliation Error Rate', value: '0.0%', desc: '100% data accuracy guaranteed across ERP ledgers' },
        { label: 'Audit Readiness Speed', value: '10x', desc: 'Continuous automated evidence harvesting' }
      ],
      capabilities: [
        'Celonis and UiPath process mining identifying all operational hidden friction',
        'SAP S/4HANA Clean-Core transition with automated regression testing',
        'Real-time automated financial closes eliminating 5-day month-end delays'
      ]
    },
    h2: {
      title: 'Horizon 2027–2028: Autonomous Operational Orchestration',
      badge: 'Cross-Echelon Synchronicity',
      subtitle: 'Self-Driving Supply Chains & Dynamic Autonomous Logistics',
      image: smartLogisticsImg,
      alt: 'Autonomous Smart Logistics and Digital Twin Operations by Varaxis Global',
      summary: 'Enterprise systems interact autonomously. Autonomous Mobile Robots (AMRs), digital twin warehouse routing, and algorithmic carrier tendering dynamically adjust to real-world disruptions without human bottlenecks.',
      metrics: [
        { label: 'Dynamic Route Optimization', value: '-28%', desc: 'Fuel and transit dwell time reduction via IoT sensors' },
        { label: 'Inventory Holding Efficiency', value: '+34%', desc: 'Kinaxis multi-echelon stock buffer minimization' },
        { label: 'Disruption Recovery SLA', value: '<15 min', desc: 'Autonomous re-routing around port or weather strikes' },
        { label: 'Total Cost of Ownership', value: '-32%', desc: 'Continuous cloud resource & transaction optimization' }
      ],
      capabilities: [
        'Digital Twin 3D warehouse simulations with predictive slotting algorithms',
        'Blockchain eBL container tracking with automated customs clearance bots',
        'Cognitive supplier risk modeling anticipating supplier bankruptcies months ahead'
      ]
    },
    h3: {
      title: 'Horizon 2029–2030+: The Cognitive Self-Optimizing Enterprise',
      badge: 'Exponential Valuation Creation',
      subtitle: 'Algorithmic Market Domination & Quantum-Resilient Trust',
      image: futureAiImg,
      alt: 'Cognitive Self-Optimizing Enterprise Future Horizon',
      summary: 'The enterprise operates as an adaptive organism. Generative AI agents simulate macroeconomic shifts, simulate boardroom M&A outcomes, and execute dynamic pricing and treasury hedges autonomously.',
      metrics: [
        { label: 'Enterprise Valuation Lift', value: '+4.2x', desc: 'Premium EBITDA multiple driven by autonomous agility' },
        { label: 'Autonomous Decision Rate', value: '88%', desc: 'Routine operational decisions executed with zero human drag' },
        { label: 'Statutory Compliance Index', value: '100%', desc: 'Quantum-safe cryptographic governance & continuous audit' },
        { label: 'Time-to-Market for New SKUs', value: '-65%', desc: 'Accelerated innovation and product deployment' }
      ],
      capabilities: [
        'Agentic AI decision swarms simulating complex market scenarios in real-time',
        'Quantum-resistant HSM cryptographic keys protecting mission-critical assets',
        'Continuous predictive ESG & statutory reporting satisfying international mandates'
      ]
    }
  };

  const currentHorizon = horizonData[activeHorizon];

  return (
    <section id="future-perspective-section" className="py-20 lg:py-28 relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Completely AI-Enabled • Horizon Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit'] leading-tight">
            Completely AI-Enabled Results Grounded in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400">
              Future Perspective &amp; Long-Term Horizon Impact
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Conventional consultancies optimize for yesterday's historical reports. At <strong className="text-white">Varaxis Global</strong>, our entire methodology is <span className="text-cyan-400 font-semibold">100% AI-Enabled</span> and engineered forward from a <span className="text-purple-400 font-semibold">Future-Perspective Benchmark</span>, preparing your enterprise for sustainable valuation expansion across 2026–2030+.
          </p>

          {/* Horizon Selection Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveHorizon('h1')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center gap-2 ${
                activeHorizon === 'h1'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Horizon 2026–2027: Foundation</span>
            </button>

            <button
              onClick={() => setActiveHorizon('h2')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center gap-2 ${
                activeHorizon === 'h2'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Horizon 2027–2028: Orchestration</span>
            </button>

            <button
              onClick={() => setActiveHorizon('h3')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center gap-2 ${
                activeHorizon === 'h3'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>Horizon 2029–2030+: Autonomous Enterprise</span>
            </button>
          </div>
        </div>

        {/* Dynamic Horizon Showcase Bento Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Visual Showcase Card */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden flex flex-col justify-between shadow-2xl relative group">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
              <img
                src={currentHorizon.image}
                alt={currentHorizon.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-950/85 backdrop-blur-md border border-cyan-500/50 text-cyan-300">
                  {currentHorizon.badge}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold block mb-1">
                  Strategic Horizon Roadmap
                </span>
                <h3 className="text-2xl font-bold text-white font-['Outfit']">
                  {currentHorizon.title}
                </h3>
                <p className="text-xs text-cyan-300 font-medium mt-1">
                  {currentHorizon.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentHorizon.summary}
              </p>

              {/* Horizon Capabilities */}
              <div className="pt-2 space-y-2 border-t border-slate-800">
                <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                  Core Architectural Milestones:
                </span>
                {currentHorizon.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics & Impact Panel */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* The "Completely AI-Enabled" Guarantee Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-950/40 via-slate-900 to-cyan-950/40 border border-purple-500/30 shadow-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-950 border border-purple-500/40 text-purple-300">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base font-['Outfit']">
                    100% Completely AI-Enabled Architecture
                  </h4>
                  <span className="text-xs text-slate-400">
                    Intelligence embedded natively across every operational node
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We do not treat Artificial Intelligence as a bolt-on feature. From machine learning models continuously learning your supply chain demand patterns to automated bot reconciliations and predictive cash flow algorithms, every solution we deploy is autonomous by design.
              </p>
            </div>

            {/* Projected Horizon Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {currentHorizon.metrics.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition shadow-lg"
                >
                  <span className="text-[11px] text-slate-400 block font-medium">
                    {m.label}
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-['Outfit'] my-1">
                    {m.value}
                  </div>
                  <span className="text-[10px] text-slate-400 block leading-tight">
                    {m.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Why Future-Perspective Matters Explanatory Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-cyan-300 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-cyan-400" />
                  Anticipatory Transformation vs. Reactive Fixing
                </span>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                  Methodology
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                By modeling future supply chain disruptions, changing statutory compliance laws, and inflationary currency volatility before they occur, Varaxis Global clients achieve continuous operational resilience and command superior enterprise valuation multiples.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-slate-400">
                  Explore tailored horizon scenarios for your enterprise:
                </span>
                <button
                  onClick={() => onOpenRfp('Strategic Future-Perspective Roadmap')}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition border border-slate-700"
                >
                  <span>Request Horizon Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
