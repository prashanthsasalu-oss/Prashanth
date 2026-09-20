import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  BellRing,
  Layers,
  Database,
  Bot,
  Zap,
  Network,
  Activity
} from 'lucide-react';
import { useNotifications } from '../context/NotificationContext';
import digitalTwinImg from '../assets/images/enterprise_digital_twin_1789938221813.jpg';

interface HeroProps {
  onOpenRfp: (category?: string) => void;
  onExploreServices: () => void;
  onExploreEndToEnd?: () => void;
  onExploreFuturePerspective?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenRfp, 
  onExploreServices,
  onExploreEndToEnd,
  onExploreFuturePerspective 
}) => {
  const { addPartnerRequest, setIsDrawerOpen } = useNotifications();

  const handleQuickDemoAlert = () => {
    addPartnerRequest({
      companyName: 'Vertex Global Corp',
      contactPerson: 'Elena Rostova (CTO)',
      email: 'elena.r@vertexglobal.com',
      phone: '+91 97429 69995',
      serviceCategory: 'ERP Excellence',
      priority: 'Strategic RFP',
      requirements: 'Enterprise S/4HANA migration with SAP FICO, MM, SD & Kinaxis RapidResponse synchronization. Requires 100% data accuracy and 24/7 hyper-care support.',
      attachments: [
        { name: 'Vertex_ERP_Target_Architecture_2026.pdf', size: 4890000, type: 'application/pdf' },
        { name: 'Compliance_Audit_Readiness_Checklist.xlsx', size: 1420000, type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
      ]
    });
    setIsDrawerOpen(true);
  };

  return (
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Startup Identity & Strategic Focus Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold shadow-lg shadow-cyan-950/50 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Completely AI-Enabled • Total End-to-End Digital Transformation</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 text-xs font-semibold">
            <Bot className="w-3.5 h-3.5 text-purple-400" />
            <span>Future-Perspective Results Engine</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Data Secured &amp; Zero-Trust</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-300 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span>24*7 Global Mission-Critical Support</span>
          </div>
        </div>

        {/* Hero Headline & Positioning */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-['Outfit'] leading-[1.08]">
            Not Just Process Automation—<br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Complete End-to-End Digital Transformation
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            <strong className="text-white font-semibold">Varaxis Global</strong> is a <span className="text-cyan-400 font-semibold">completely AI-enabled</span> digital service provider. We transcend isolated automation to deliver holistic enterprise transformation—unifying SAP all modules, Blue Yonder, Kinaxis, TMS/WMS, Autonomous Finance, and 100% secure Governance &amp; Audit Immortality.
          </p>

          <p className="text-sm sm:text-base text-cyan-200/90 font-medium">
            Delivering results based on a <span className="text-purple-300 underline decoration-purple-400/50 decoration-2 underline-offset-4">Future-Perspective Horizon</span>: maximizing <span className="text-cyan-400 font-bold">100% Data Accuracy</span>, expanding workforce productivity, accelerating corporate valuation, and eliminating operational risk.
          </p>
        </div>

        {/* Core Action CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <button
            id="hero-submit-rfp-button"
            onClick={() => onOpenRfp()}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-base shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-5 h-5" />
            <span>Submit Partner RFP</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {onExploreEndToEnd && (
            <button
              id="hero-explore-e2e-button"
              onClick={onExploreEndToEnd}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-white font-semibold text-sm sm:text-base transition flex items-center justify-center gap-2 shadow-lg shadow-cyan-950/40"
            >
              <Network className="w-5 h-5 text-cyan-400" />
              <span>End-to-End Transformation</span>
            </button>
          )}

          <button
            id="hero-explore-services-button"
            onClick={onExploreServices}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition flex items-center justify-center gap-2"
          >
            <Layers className="w-5 h-5 text-slate-300" />
            <span>7 Core Pillars</span>
          </button>
        </div>

        {/* Live In-Portal Notification Trigger Test */}
        <div className="mt-5 text-center">
          <button
            id="hero-test-portal-alert-button"
            onClick={handleQuickDemoAlert}
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-cyan-300 transition py-1.5 px-4 rounded-full bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 shadow-sm"
          >
            <BellRing className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
            <span>Test In-Portal Live Alert System (Instant Dispatch &amp; Chime)</span>
          </button>
        </div>

        {/* HERO IMAGE SHOWCASE: Futuristic Command Console & Digital Twin */}
        <div className="mt-12 relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-slate-950/90 max-w-5xl mx-auto group">
          {/* Top terminal bar */}
          <div className="px-5 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="font-mono text-slate-300 text-[11px] ml-2">varaxis-global://command-mesh/autonomous-ops</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[11px]">
              <span className="text-emerald-400 flex items-center gap-1">
                <Activity className="w-3 h-3 animate-pulse" />
                Completely AI-Enabled
              </span>
              <span className="text-cyan-400">Neural Sync: 100%</span>
            </div>
          </div>

          {/* Futuristic Hero Visual */}
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={digitalTwinImg}
              alt="Varaxis Global Autonomous Digital Transformation Command Center"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Luminous overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

            {/* Futuristic Live Telemetry Badges Floating on Image */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-col gap-2">
              <div className="px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold flex items-center gap-2 shadow-lg">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Autonomous AI Neural Core: Online</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-purple-500/40 text-purple-300 text-xs font-mono font-semibold flex items-center gap-2 shadow-lg">
                <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                <span>Future-Perspective Modeling: Horizon 2026-2030+</span>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 hidden sm:flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs font-mono font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Data Accuracy Verified</span>
              </div>
            </div>
          </div>

          {/* Under-Image Synopsis Strip */}
          <div className="p-5 sm:p-6 bg-slate-900/80 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                The Autonomous Enterprise Digital Twin
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-snug">
                Simulating, predicting, and optimizing global supply chains, financial reconciliations, and ERP operations in real-time.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              {onExploreFuturePerspective && (
                <button
                  onClick={onExploreFuturePerspective}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition border border-slate-700"
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Inspect Future Horizon Impact</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Value Matrix - 5 High-Impact Pillars */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/50 transition backdrop-blur-sm group">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] flex items-baseline gap-1">
              <span className="text-cyan-400">100</span>%
            </div>
            <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wider">
              Data Accuracy
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Zero tolerance for reconciliation delta across ledgers &amp; SCM
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-emerald-500/50 transition backdrop-blur-sm group">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] flex items-baseline gap-1">
              <span className="text-emerald-400">100</span>%
            </div>
            <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wider">
              Data Secured
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Zero-Trust, ISO 27001, SOC 2 &amp; End-to-End military grade encryption
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-blue-500/50 transition backdrop-blur-sm group">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] flex items-baseline gap-1">
              <span className="text-blue-400">24*7</span>
            </div>
            <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wider">
              Follow-the-Sun SLA
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Continuous L1–L4 emergency incident response &amp; NOC coverage
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-purple-500/50 transition backdrop-blur-sm group">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] flex items-baseline gap-1">
              <span className="text-purple-400">AI</span>-Native
            </div>
            <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wider">
              Autonomous RPA
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Process mining, predictive forecasting, &amp; smart digital twins
            </p>
          </div>

          <div className="col-span-2 md:col-span-1 p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-amber-500/50 transition backdrop-blur-sm group">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] flex items-baseline gap-1">
              <span className="text-amber-400">+45</span>%
            </div>
            <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wider">
              Productivity Gain
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Measurable acceleration in cycle time, market value &amp; revenue
            </p>
          </div>

        </div>

        {/* Global ERP Tech Stack Ribbon */}
        <div className="mt-10 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-xs">
          <span className="text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-2">
            <Database className="w-4 h-4 text-cyan-400" />
            Enterprise Platforms Supported:
          </span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono font-medium text-slate-300">
            <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-cyan-300">SAP S/4HANA (All Modules)</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-cyan-300">Blue Yonder</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-cyan-300">Kinaxis RapidResponse</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-cyan-300">SAP Ariba &amp; EWM/TM</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-cyan-300">Celonis / UiPath RPA</span>
          </div>
        </div>

      </div>
    </section>
  );
};

