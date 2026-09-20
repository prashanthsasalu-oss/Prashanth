import React, { useState } from 'react';
import { NotificationProvider } from './context/NotificationContext';
import { GeometricBackground } from './components/GeometricBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EndToEndTransformationSection } from './components/EndToEndTransformationSection';
import { FuturePerspectiveResultsSection } from './components/FuturePerspectiveResultsSection';
import { ServicesSection } from './components/ServicesSection';
import { GovernanceSecuritySection } from './components/GovernanceSecuritySection';
import { ProcessOptimizationCalculator } from './components/ProcessOptimizationCalculator';
import { CareersSection } from './components/CareersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PartnerRfpModal } from './components/PartnerRfpModal';
import { InPortalNotificationDrawer } from './components/InPortalNotificationDrawer';
import { LiveAlertToast } from './components/LiveAlertToast';

export function AppContent() {
  const [rfpModalOpen, setRfpModalOpen] = useState(false);
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>('ERP Excellence');

  const handleOpenRfp = (category?: string) => {
    if (category) {
      setSelectedServiceCategory(category);
    }
    setRfpModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative selection:bg-cyan-500 selection:text-white">
      {/* Animated Geometric Canvas & Lattice */}
      <GeometricBackground />

      {/* Main Page Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar 
          onOpenRfp={handleOpenRfp} 
          onNavigate={handleNavigate} 
        />

        <main className="flex-1">
          <Hero 
            onOpenRfp={handleOpenRfp}
            onExploreServices={() => handleNavigate('services-section')}
            onExploreEndToEnd={() => handleNavigate('end-to-end-section')}
            onExploreFuturePerspective={() => handleNavigate('future-perspective-section')}
          />

          {/* Dedicated End-to-End Digital Transformation Section */}
          <EndToEndTransformationSection 
            onOpenRfp={handleOpenRfp}
          />

          {/* Completely AI-Enabled Future Perspective & Horizon Section */}
          <FuturePerspectiveResultsSection 
            onOpenRfp={handleOpenRfp}
          />

          {/* 7 Core Service Pillars */}
          <ServicesSection 
            onOpenRfp={handleOpenRfp}
          />

          {/* 100% Data Secured Governance & Compliance */}
          <GovernanceSecuritySection 
            onOpenRfp={handleOpenRfp}
          />

          {/* Interactive ROI & Transformation Calculator */}
          <ProcessOptimizationCalculator 
            onOpenRfpWithScope={(notes: string) => {
              setSelectedServiceCategory('Comprehensive Digital Transformation');
              setRfpModalOpen(true);
            }}
          />

          {/* Careers & Talent Portal */}
          <CareersSection />

          {/* Direct Bangalore HQ Contact & RFP Intake */}
          <ContactSection 
            onOpenRfp={handleOpenRfp}
          />
        </main>

        <Footer 
          onOpenRfp={handleOpenRfp}
          onNavigate={handleNavigate}
        />
      </div>

      {/* Interactive Partner RFP & Requirement Document Attachment Modal */}
      <PartnerRfpModal 
        isOpen={rfpModalOpen}
        onClose={() => setRfpModalOpen(false)}
        defaultServiceCategory={selectedServiceCategory}
      />

      {/* Real-time In-Portal Alerts Console & Requirement Reviewer */}
      <InPortalNotificationDrawer />

      {/* Live Alert Toast Pop-up */}
      <LiveAlertToast />
    </div>
  );
}

export default function App() {
  return (
    <NotificationProvider>
      <AppContent />
    </NotificationProvider>
  );
}
