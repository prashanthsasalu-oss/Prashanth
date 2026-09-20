import React from 'react';
import { VaraxisLogo } from './VaraxisLogo';
import { 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Award, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { SERVICE_PILLARS } from '../data/servicesData';

interface FooterProps {
  onOpenRfp: (category?: string) => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRfp, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs relative overflow-hidden">
      {/* Top Banner: Core Guarantees Summary */}
      <div className="border-b border-slate-800/80 bg-slate-900/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-white font-bold text-sm block font-['Outfit']">
              100% Data Security
            </span>
            <p className="text-[11px] text-slate-400">
              Zero-Trust architecture &amp; AES-256 cloud encryption
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-white font-bold text-sm block font-['Outfit']">
              24*7 Global Support
            </span>
            <p className="text-[11px] text-slate-400">
              Follow-the-Sun SLA &amp; dedicated L1–L4 engineers
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-white font-bold text-sm block font-['Outfit']">
              Everything AI-Enabled
            </span>
            <p className="text-[11px] text-slate-400">
              Autonomous RPA, process mining &amp; predictive models
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-white font-bold text-sm block font-['Outfit']">
              100% Data Accuracy
            </span>
            <p className="text-[11px] text-slate-400">
              Productivity gain &amp; enterprise market value expansion
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <VaraxisLogo size="lg" />
            
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Varaxis Global is an enterprise digital service provider engineered for autonomous process automation, digital transformation, and precision governance, compliance &amp; audit support.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Tata New Haven, Tower 27, Huskur Main Road, Bangalore 562162, India</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href="tel:+919742969995" className="hover:text-cyan-300 transition font-mono">
                  +91 9742969995
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href="mailto:partner.desk@varaxisglobal.com" className="hover:text-cyan-300 transition font-mono text-cyan-300">
                  partner.desk@varaxisglobal.com
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => onOpenRfp()}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs hover:opacity-95 shadow-md shadow-cyan-500/20"
              >
                Submit Partner RFP
              </button>
              <a
                href="mailto:partner.desk@varaxisglobal.com?subject=Strategic%20Inquiry"
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs hover:text-white"
              >
                Send Direct Email
              </a>
            </div>
          </div>

          {/* 7 Core Pillars Column */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-['Outfit']">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-slate-400">
              {SERVICE_PILLARS.map(p => (
                <li key={p.id}>
                  <button
                    onClick={() => {
                      onNavigate('services-section');
                      const tab = document.getElementById(`tab-pillar-${p.id}`);
                      if (tab) tab.click();
                    }}
                    className="hover:text-cyan-400 transition text-left text-xs"
                  >
                    {p.shortTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ERP Specialization Column */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-['Outfit']">
              ERP Ecosystem
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li className="text-slate-300 font-medium">SAP S/4HANA (All Modules):</li>
              <li className="pl-2">• FICO &amp; Treasury Automation</li>
              <li className="pl-2">• MM, SD &amp; Order-To-Cash</li>
              <li className="pl-2">• PP, QM &amp; Plant Maintenance</li>
              <li className="pl-2">• HCM &amp; SuccessFactors</li>
              <li className="pl-2">• SAP Ariba &amp; Sourcing</li>
              <li className="pl-2">• SAP EWM &amp; TM Execution</li>
              <li className="text-slate-300 font-medium pt-1">Supply Chain Engines:</li>
              <li className="pl-2">• Blue Yonder Luminate</li>
              <li className="pl-2">• Kinaxis RapidResponse</li>
            </ul>
          </div>

          {/* Governance & Portal Console */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-['Outfit']">
              Transformation &amp; Portal
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <button onClick={() => onNavigate('end-to-end-section')} className="hover:text-cyan-400 transition text-left">
                  End-to-End Transformation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('future-perspective-section')} className="hover:text-cyan-400 transition text-left">
                  Future-Perspective AI Horizon
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('governance-section')} className="hover:text-cyan-400 transition text-left">
                  100% Security Architecture
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('calculator-section')} className="hover:text-cyan-400 transition text-left">
                  Transformation ROI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('careers-section')} className="hover:text-cyan-400 transition text-left">
                  Careers at Varaxis Global
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact-section')} className="hover:text-cyan-400 transition text-left">
                  Bangalore Global Hub Contact
                </button>
              </li>
              <li className="pt-2">
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-[10px] font-mono">
                  ISO 27001 • SOC 2 Ready
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Varaxis Global. All rights reserved. 100% AI-Enabled End-to-End Digital Transformation &amp; Precision Optimization.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Bangalore, Karnataka, India</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition flex items-center gap-1"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
