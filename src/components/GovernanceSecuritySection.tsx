import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Clock, 
  Cpu, 
  FileCheck, 
  CheckCircle2, 
  Award, 
  Server, 
  KeyRound, 
  RefreshCw,
  TrendingUp,
  HeartHandshake
} from 'lucide-react';

interface GovernanceSecuritySectionProps {
  onOpenRfp: (category?: string) => void;
}

export const GovernanceSecuritySection: React.FC<GovernanceSecuritySectionProps> = ({ onOpenRfp }) => {
  const securityPillars = [
    {
      icon: <Lock className="w-6 h-6 text-cyan-400" />,
      title: '100% Data Secured & Zero-Trust',
      badge: 'Uncompromising Fortress',
      description: 'End-to-end cryptographic isolation with AES-256 at rest and TLS 1.3 in flight. Role-based least-privilege policies, quantum-resistant hash algorithms, and hardware security modules (HSM) safeguard your mission-critical ERP, HR, and Financial data.',
      checks: [
        'SOC 2 Type II and ISO 27001 audited architecture',
        'Zero-Trust network segmentation & automated credential rotation',
        'GDPR, HIPAA, and statutory data privacy compliance guaranteed'
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: '24*7 Global Mission-Critical Support',
      badge: 'Follow-The-Sun Coverage',
      description: 'Never face operational downtime alone. Varaxis Global provides round-the-clock enterprise Level 1 to Level 4 specialized support engineers across India, APAC, EMEA, and Americas time zones.',
      checks: [
        '15-minute response SLA for Critical P1 enterprise disruptions',
        'Continuous 24/7 automated synthetic transaction & health monitoring',
        'Direct hotline to certified Principal Solution Architects'
      ]
    },
    {
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      title: 'Everything AI-Enabled & Autonomous',
      badge: 'Cognitive Optimization',
      description: 'Eliminate manual bottlenecks with embedded machine learning models, autonomous RPA software bots, predictive demand forecasting, and natural language sentiment analytics across every operational workflow.',
      checks: [
        'Self-healing automated data reconciliations & anomaly alarms',
        'Predictive risk modeling mitigating supply chain & audit failures',
        'Intelligent document processing (OCR) for 100% paperless ops'
      ]
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-teal-400" />,
      title: '100% Data Accuracy & Productivity Gain',
      badge: 'Flawless Precision',
      description: 'Manual spreadsheet errors and mismatched ledgers devastate enterprise valuation. We engineer unified single-source-of-truth architectures ensuring 100% reconciliation accuracy between operational and financial records.',
      checks: [
        '99.99% ledger and inventory count accuracy guarantee',
        'Average 45% measurable boost in workforce productivity',
        'Immediate reduction in month-end financial closing cycle'
      ]
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-purple-400" />,
      title: 'Elevated Customer Experience & Trust',
      badge: 'Long-Term Value',
      description: 'Build enduring market prestige through transparent audit readiness, 24/7 self-service portals, omnichannel customer intelligence, and zero-defect SLA deliveries.',
      checks: [
        '+45 point average boost in Customer Satisfaction (CSAT)',
        'Immutable blockchain evidence logs eliminating audit disputes',
        'Rapid time-to-market accelerating revenue and valuation'
      ]
    }
  ];

  return (
    <section id="governance-section" className="py-20 relative bg-slate-950/90 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Uncompromising Trust Guarantees</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
            Engineered for 100% Data Security, 24*7 Support &amp; Audit Immortality
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            At Varaxis Global, governance and compliance are not afterthoughts—they are the foundational bedrock of every digital transformation we execute.
          </p>
        </div>

        {/* Security Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityPillars.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 transition">
                    {item.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-800 text-slate-300">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-['Outfit'] mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-800">
                  {item.checks.map((chk, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{chk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Row (Productivity & Trust) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {securityPillars.slice(3, 5).map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 transition">
                    {item.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-800 text-slate-300">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-['Outfit'] mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-800">
                  {item.checks.map((chk, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{chk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Compliance Certifications Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base font-['Outfit']">
                Statutory &amp; Global Compliance Framework Readiness
              </h4>
              <p className="text-xs text-slate-400">
                Audited against Big-4 and international statutory benchmarks
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono text-slate-300">
            <span className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-300">ISO 27001 Certified</span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-300">SOC 2 Type II</span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-300">GDPR &amp; DPDP Compliant</span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-300">SOX 404 Automated Controls</span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-300">SAP GRC &amp; SoD Verified</span>
          </div>

          <button
            onClick={() => onOpenRfp('Governance, Compliance & Audit Support')}
            className="w-full lg:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white text-xs font-semibold transition border border-slate-700"
          >
            Request Audit Readiness Brief
          </button>
        </div>

      </div>
    </section>
  );
};
