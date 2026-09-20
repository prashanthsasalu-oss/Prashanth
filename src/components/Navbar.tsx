import React, { useState } from 'react';
import { VaraxisLogo } from './VaraxisLogo';
import { useNotifications } from '../context/NotificationContext';
import { 
  Bell, 
  Phone, 
  Mail, 
  FileText, 
  Menu, 
  X, 
  ShieldCheck, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  onOpenRfp: (category?: string) => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRfp, onNavigate }) => {
  const { unreadCount, setIsDrawerOpen } = useNotifications();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'End-to-End Transformation', id: 'end-to-end-section' },
    { label: 'Future-Perspective AI', id: 'future-perspective-section' },
    { label: '7 Core Pillars', id: 'services-section' },
    { label: 'Governance & Security', id: 'governance-section' },
    { label: 'ROI Calculator', id: 'calculator-section' },
    { label: 'Careers', id: 'careers-section' },
    { label: 'Contact', id: 'contact-section' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl transition-all">
      {/* Top micro-bar: Emergency lines & 100% Security SLA */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-slate-900/60 border-b border-slate-800/40 text-[11px] text-slate-400">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            24*7 Enterprise Support & Mission-Critical Operations
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            100% Data Secured • Zero-Trust Cloud Architecture
          </span>
          <span className="text-cyan-300">
            Bangalore Tech HQ: Tata New Haven, Tower 27, Huskur Main Rd
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a 
            href="tel:+919742969995" 
            className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition"
          >
            <Phone className="w-3 h-3 text-cyan-400" />
            +91 9742969995
          </a>
          <span className="text-slate-700">|</span>
          <a 
            href="mailto:partner.desk@varaxisglobal.com?subject=Business%20Partnership%20Inquiry" 
            className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition font-mono"
          >
            <Mail className="w-3 h-3 text-cyan-400" />
            partner.desk@varaxisglobal.com
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand */}
        <VaraxisLogo 
          size="md" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        />

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="hover:text-cyan-400 transition-colors py-1 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Real-time In-Portal Alerts Console Bell */}
          <button
            id="open-in-portal-alerts-btn"
            onClick={() => setIsDrawerOpen(true)}
            className="relative p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-700/70 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition group"
            title="Open Live In-Portal Partner Alert Console"
          >
            <Bell className="w-5 h-5 transition-transform group-hover:scale-110" />
            {unreadCount > 0 ? (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow-lg shadow-rose-500/50 animate-bounce">
                {unreadCount}
              </span>
            ) : (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-400" />
            )}
          </button>

          {/* Direct Email Button */}
          <a
            id="nav-quick-email-btn"
            href="mailto:partner.desk@varaxisglobal.com?subject=Strategic%20Inquiry%20to%20Varaxis%20Global"
            className="hidden sm:flex items-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyan-500/60 text-slate-200 text-xs font-medium hover:text-white transition"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Email Desk</span>
          </a>

          {/* Submit Partner RFP Primary CTA */}
          <button
            id="nav-submit-rfp-button"
            onClick={() => onOpenRfp()}
            className="flex items-center gap-2 py-2.5 px-4.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition transform active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>Submit Partner RFP</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-slate-800 bg-slate-950/95 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-base font-medium text-slate-300 hover:text-cyan-400 py-2 border-b border-slate-900 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-800/80 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsDrawerOpen(true);
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 text-cyan-300 text-sm font-medium flex items-center justify-center gap-2"
            >
              <Bell className="w-4 h-4" />
              Open In-Portal Alert Console ({unreadCount} Alerts)
            </button>

            <a
              href="tel:+919742969995"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm font-medium flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              Call Bangalore Desk: +91 9742969995
            </a>

            <a
              href="mailto:partner.desk@varaxisglobal.com"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm font-medium flex items-center justify-center gap-2 font-mono"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              partner.desk@varaxisglobal.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
