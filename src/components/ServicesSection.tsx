import React, { useState } from 'react';
import { SERVICE_PILLARS } from '../data/servicesData';
import { ServicePillar, ServiceSubmodule } from '../types';
import { 
  Database, 
  Users, 
  Cpu, 
  Truck, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  Search, 
  ArrowUpRight,
  X,
  FileCheck,
  Layers
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenRfp: (category?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenRfp }) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('erp-excellence');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSubmoduleDetail, setActiveSubmoduleDetail] = useState<{
    pillarTitle: string;
    submodule: ServiceSubmodule;
  } | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Users': return <Users className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Truck': return <Truck className="w-5 h-5 text-amber-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-purple-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-pink-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-teal-400" />;
      default: return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  const currentPillar = SERVICE_PILLARS.find(p => p.id === selectedPillarId) || SERVICE_PILLARS[0];

  // Filtered submodules for search
  const filteredSubmodules = currentPillar.submodules.filter(sub => 
    sub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sub.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sub.capabilities.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="services-section" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>100% AI-Enabled Enterprise Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
            End-to-End Digital Transformation Across All Industries
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Varaxis Global empowers global enterprises with deep technical consulting, AI-driven automation, and future-perspective optimization across 7 mission-critical pillars.
          </p>
        </div>

        {/* 7 Pillars Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-10">
          {SERVICE_PILLARS.map(pillar => {
            const isSelected = pillar.id === selectedPillarId;
            return (
              <button
                key={pillar.id}
                id={`tab-pillar-${pillar.id}`}
                onClick={() => {
                  setSelectedPillarId(pillar.id);
                  setSearchQuery('');
                }}
                className={`p-3 sm:p-4 rounded-xl text-left border transition-all flex flex-col justify-between group cursor-pointer ${
                  isSelected
                    ? 'bg-slate-850 border-cyan-500 shadow-lg shadow-cyan-950/50 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:bg-slate-850/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-[11px] font-mono font-bold ${
                    isSelected ? 'text-cyan-400' : 'text-slate-500'
                  }`}>
                    {pillar.number}
                  </span>
                  {getIcon(pillar.icon)}
                </div>

                <div>
                  <h3 className={`font-semibold text-xs sm:text-sm leading-snug font-['Outfit'] ${
                    isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                  }`}>
                    {pillar.shortTitle}
                  </h3>
                  <span className="text-[10px] text-slate-400 block mt-1 truncate">
                    {pillar.submodules.length} Capabilities
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Current Pillar Showcase Box */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm relative overflow-hidden">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Pillar Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Pillar {currentPillar.number}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300">
                  {currentPillar.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit']">
                {currentPillar.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentPillar.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                id={`request-rfp-for-${currentPillar.id}`}
                onClick={() => onOpenRfp(currentPillar.shortTitle)}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition"
              >
                <span>Request Scope &amp; RFP</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Key Strategic Highlights Bar */}
          <div className="py-4 border-b border-slate-800/80 flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
            <span className="text-slate-400 font-medium">Domain Standards:</span>
            {currentPillar.keyHighlights.map((hl, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-200 flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>{hl}</span>
              </span>
            ))}
          </div>

          {/* Search Filter for Submodules */}
          <div className="pt-6 pb-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <h4 className="text-base sm:text-lg font-bold text-white font-['Outfit'] flex items-center gap-2">
              <span>Detailed Service Capabilities</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
                {filteredSubmodules.length} Modules
              </span>
            </h4>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search capabilities, modules..."
                className="w-full bg-slate-950/80 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
              />
            </div>
          </div>

          {/* Submodules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {filteredSubmodules.map((sub, idx) => (
              <div
                key={idx}
                id={`submodule-card-${idx}`}
                onClick={() => setActiveSubmoduleDetail({ pillarTitle: currentPillar.title, submodule: sub })}
                className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/50 transition duration-200 flex flex-col justify-between cursor-pointer group hover:bg-slate-950/80"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h5 className="font-bold text-white text-sm font-['Outfit'] group-hover:text-cyan-300 transition">
                      {sub.title}
                    </h5>
                    <span className="p-1.5 rounded-lg bg-slate-900 text-slate-500 group-hover:text-cyan-400 transition flex-shrink-0">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {sub.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-900">
                    {sub.capabilities.slice(0, 3).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                        <span className="text-cyan-400 font-mono mt-0.5">•</span>
                        <span className="line-clamp-1">{cap}</span>
                      </div>
                    ))}
                    {sub.capabilities.length > 3 && (
                      <span className="text-[10px] text-cyan-400/80 pl-3 block">
                        +{sub.capabilities.length - 3} more technical capabilities
                      </span>
                    )}
                  </div>
                </div>

                {sub.metrics && (
                  <div className="mt-4 pt-3 border-t border-slate-900/80 flex items-center justify-between text-[11px]">
                    <span className="text-emerald-400 font-medium">
                      {sub.metrics}
                    </span>
                    <span className="text-slate-500 group-hover:text-cyan-400 text-[10px] font-semibold uppercase tracking-wider">
                      Inspect
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredSubmodules.length === 0 && (
            <div className="text-center py-12 text-slate-500 space-y-2">
              <Search className="w-8 h-8 mx-auto text-slate-600" />
              <p className="text-sm">No capabilities matching "{searchQuery}".</p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-cyan-400 hover:underline"
              >
                Clear search query
              </button>
            </div>
          )}

        </div>

      </div>

      {/* Submodule Detailed Architecture Modal */}
      {activeSubmoduleDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 space-y-5 animate-in zoom-in-95">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {activeSubmoduleDetail.pillarTitle}
                </span>
                <h4 className="text-xl font-bold text-white font-['Outfit'] mt-0.5">
                  {activeSubmoduleDetail.submodule.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveSubmoduleDetail(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {activeSubmoduleDetail.submodule.description}
            </p>

            <div className="space-y-2">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                All Engineered Capabilities:
              </h5>
              <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                {activeSubmoduleDetail.submodule.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {activeSubmoduleDetail.submodule.metrics && (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between text-xs">
                <span className="text-slate-300">Guaranteed Benchmark:</span>
                <span className="text-emerald-400 font-bold">{activeSubmoduleDetail.submodule.metrics}</span>
              </div>
            )}

            <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveSubmoduleDetail(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-medium"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = activeSubmoduleDetail.submodule.title;
                  setActiveSubmoduleDetail(null);
                  onOpenRfp(title);
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold flex items-center gap-2 hover:opacity-95 shadow-lg shadow-cyan-500/25"
              >
                <span>Request RFP for This Module</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
