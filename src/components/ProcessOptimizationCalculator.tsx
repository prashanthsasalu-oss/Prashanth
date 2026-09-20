import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  DollarSign,
  Layers
} from 'lucide-react';

interface ProcessOptimizationCalculatorProps {
  onOpenRfpWithScope: (notes: string) => void;
}

export const ProcessOptimizationCalculator: React.FC<ProcessOptimizationCalculatorProps> = ({
  onOpenRfpWithScope
}) => {
  const [employees, setEmployees] = useState<number>(500);
  const [manualHoursPerMonth, setManualHoursPerMonth] = useState<number>(1200);
  const [currentErrorRate, setCurrentErrorRate] = useState<number>(6.5);
  const [industry, setIndustry] = useState<string>('Supply Chain & Manufacturing');

  // Calculation models
  const automatedHours = Math.round(manualHoursPerMonth * 0.72);
  const annualHoursSaved = automatedHours * 12;
  const avgHourlyCost = 45; // average blended enterprise operational cost/hr
  const directAnnualCostSavings = Math.round(annualHoursSaved * avgHourlyCost);
  const productivityLiftPercent = Math.min(Math.round((automatedHours / manualHoursPerMonth) * 62), 65);
  const valuationUplift = Math.round(directAnnualCostSavings * 3.8); // standard SaaS/EBITDA multiple

  const handleApplyToRfp = () => {
    const notes = `ROI Calculator Assessment: ${industry} with ${employees} employees. Targeting automation of ${manualHoursPerMonth} manual hours/month, reducing error rate from ${currentErrorRate}% to 0% (100% data accuracy). Projected annual cost savings: $${directAnnualCostSavings.toLocaleString()} and estimated enterprise valuation uplift: $${valuationUplift.toLocaleString()}.`;
    onOpenRfpWithScope(notes);
  };

  return (
    <section id="calculator-section" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span>Process Automation &amp; Optimization Impact Model</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
            Calculate Your Precision ROI &amp; Market Value Uplift
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            See how Varaxis Global transforms manual enterprise drag into 100% data accuracy, accelerated revenue, and exponential valuation expansion.
          </p>
        </div>

        {/* Interactive Calculator Bento Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h3 className="font-bold text-white text-lg font-['Outfit']">
                Enterprise Parameters
              </h3>
              <span className="text-xs text-cyan-400 font-mono">Live Simulation</span>
            </div>

            {/* Industry Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Primary Industry Sector
              </label>
              <select
                value={industry}
                onChange={e => setIndustry(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500 transition"
              >
                <option value="Supply Chain & Manufacturing">Supply Chain &amp; Manufacturing</option>
                <option value="ERP & Global Operations">ERP &amp; Global Operations</option>
                <option value="Banking, Finance & FinTech">Banking, Finance &amp; FinTech</option>
                <option value="Healthcare & Life Sciences">Healthcare &amp; Life Sciences</option>
                <option value="Logistics, TMS & Warehousing">Logistics, TMS &amp; Warehousing</option>
                <option value="Retail & Omnichannel CX">Retail &amp; Omnichannel CX</option>
              </select>
            </div>

            {/* Organization Headcount Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Enterprise Headcount:</span>
                <span className="text-cyan-400 font-bold font-mono">{employees.toLocaleString()} Team Members</span>
              </div>
              <input
                type="range"
                min="50"
                max="10000"
                step="50"
                value={employees}
                onChange={e => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>50</span>
                <span>2,500</span>
                <span>5,000</span>
                <span>10,000+</span>
              </div>
            </div>

            {/* Monthly Manual Process Hours */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Manual Process Drag (Hours/Month):</span>
                <span className="text-cyan-400 font-bold font-mono">{manualHoursPerMonth.toLocaleString()} hrs/mo</span>
              </div>
              <input
                type="range"
                min="200"
                max="8000"
                step="100"
                value={manualHoursPerMonth}
                onChange={e => setManualHoursPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>200 hrs</span>
                <span>2,000 hrs</span>
                <span>4,000 hrs</span>
                <span>8,000+ hrs</span>
              </div>
            </div>

            {/* Current Reconciliation Error Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Current Manual Error / Delta Rate:</span>
                <span className="text-rose-400 font-bold font-mono">{currentErrorRate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="0.5"
                value={currentErrorRate}
                onChange={e => setCurrentErrorRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>1% (Minor)</span>
                <span>7.5% (Average)</span>
                <span>15% (Critical)</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Varaxis guarantee: Achieves 100% data accuracy through AI-native reconciliations.</span>
            </div>
          </div>

          {/* Results Display Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-cyan-500/40 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Stat Badge */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                  Projected Annual Enterprise Value Creation
                </span>
                <div className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] mt-1 flex items-baseline gap-1">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                    ${directAnnualCostSavings.toLocaleString()}
                  </span>
                  <span className="text-sm font-semibold text-slate-400">/ Year</span>
                </div>
              </div>

              <div className="hidden sm:block text-right">
                <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block">
                  Productivity Boost
                </span>
                <span className="text-2xl font-extrabold text-emerald-400 font-['Outfit']">
                  +{productivityLiftPercent}%
                </span>
              </div>
            </div>

            {/* Core Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-6">
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">Target Data Accuracy</span>
                <div className="text-2xl font-bold text-cyan-400 font-['Outfit'] flex items-center gap-1">
                  100%
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-[10px] text-slate-500 mt-1 block">From {currentErrorRate}% delta</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">Automated Hours/Yr</span>
                <div className="text-2xl font-bold text-white font-['Outfit']">
                  {annualHoursSaved.toLocaleString()}
                </div>
                <span className="text-[10px] text-slate-500 mt-1 block">Autonomous bots &amp; AI</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 col-span-2 sm:col-span-1">
                <span className="text-[11px] text-slate-400 block mb-1">Est. Enterprise Valuation Lift</span>
                <div className="text-2xl font-bold text-purple-400 font-['Outfit']">
                  +${(valuationUplift / 1000000).toFixed(1)}M
                </div>
                <span className="text-[10px] text-slate-500 mt-1 block">Based on 3.8x EBITDA multiple</span>
              </div>
            </div>

            {/* Explanatory Note */}
            <p className="text-xs text-slate-300 leading-relaxed">
              By replacing fragmented manual spreadsheets with automated SAP/ERP synchronization, continuous audit trails, and predictive machine learning models, Varaxis Global drives compounding efficiency gains, eliminates audit penalty exposure, and directly bolsters corporate balance sheets.
            </p>

            {/* Action Button */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Custom benchmarks configured for {industry}</span>
              </div>

              <button
                id="apply-calculator-benchmarks-btn"
                onClick={handleApplyToRfp}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition"
              >
                <span>Include Benchmarks in Partner RFP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
