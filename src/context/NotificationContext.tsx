import React, { createContext, useContext, useState, useEffect } from 'react';
import { PartnerRequest } from '../types';

interface NotificationContextType {
  requests: PartnerRequest[];
  unreadCount: number;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  activeRequestDetail: PartnerRequest | null;
  setActiveRequestDetail: (req: PartnerRequest | null) => void;
  addPartnerRequest: (request: Omit<PartnerRequest, 'id' | 'submittedAt' | 'status'>) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  latestAlert: string | null;
  clearLatestAlert: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

// Web Audio API high-tech sound notification
const playHighTechChime = () => {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    // Two-tone harmonic chime
    const now = ctx.currentTime;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(587.33, now); // D5
    osc1.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(880, now + 0.1);
    osc2.frequency.exponentialRampToValueAtTime(1174.66, now + 0.28); // D6

    gainNode.gain.setValueAtTime(0.001, now);
    gainNode.gain.linearRampToValueAtTime(0.2, now + 0.04);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now + 0.08);
    osc1.stop(now + 0.45);
    osc2.stop(now + 0.45);
  } catch {
    // Silent fail if browser audio policy blocks
  }
};

const INITIAL_REQUESTS: PartnerRequest[] = [
  {
    id: 'REQ-2026-089',
    companyName: 'Apex Global Logistics & SCM',
    contactPerson: 'David Vance (VP Global Technology)',
    email: 'd.vance@apexlogistics-corp.com',
    phone: '+1 (415) 890-3421',
    serviceCategory: 'TMS, WMS & Logistics',
    priority: 'Strategic RFP',
    requirements: 'Seeking AI-powered route optimization and smart warehousing deployment across 14 distribution hubs in APAC and North America. Need automated carrier tendering and SAP EWM real-time sync.',
    attachments: [
      { name: 'Apex_SupplyChain_Modernization_RFP_v2.pdf', size: 3420000, type: 'application/pdf' },
      { name: 'Distribution_Centers_Telemetry_Spec.xlsx', size: 1250000, type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
    ],
    submittedAt: 'Just now',
    status: 'New'
  },
  {
    id: 'REQ-2026-088',
    companyName: 'Novis Health Group',
    contactPerson: 'Dr. Priya Ramaswamy (Chief Compliance Officer)',
    email: 'priya.r@novishealth.org',
    phone: '+91 98450 12890',
    serviceCategory: 'Governance, Compliance & Audit Support',
    priority: 'Urgent',
    requirements: 'Immediate requirement for automated healthcare regulatory monitoring and automated audit workpapers for ISO 27001 & SOC 2 Type II audit readiness.',
    attachments: [
      { name: 'Novis_Compliance_Audit_Scope_2026.pdf', size: 2100000, type: 'application/pdf' }
    ],
    submittedAt: '18 minutes ago',
    status: 'Reviewing'
  }
];

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [requests, setRequests] = useState<PartnerRequest[]>(() => {
    try {
      const saved = localStorage.getItem('varaxis_partner_requests');
      return saved ? JSON.parse(saved) : INITIAL_REQUESTS;
    } catch {
      return INITIAL_REQUESTS;
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [activeRequestDetail, setActiveRequestDetail] = useState<PartnerRequest | null>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [latestAlert, setLatestAlert] = useState<string | null>(null);

  const unreadCount = requests.filter(r => r.status === 'New').length;

  useEffect(() => {
    try {
      localStorage.setItem('varaxis_partner_requests', JSON.stringify(requests));
    } catch {
      // Ignore localStorage quotas
    }
  }, [requests]);

  const addPartnerRequest = (data: Omit<PartnerRequest, 'id' | 'submittedAt' | 'status'>) => {
    const newReq: PartnerRequest = {
      ...data,
      id: `REQ-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 900) + 100)}`,
      submittedAt: 'Just now',
      status: 'New'
    };

    setRequests(prev => [newReq, ...prev]);
    setLatestAlert(`New Business Request from ${newReq.companyName} (${newReq.serviceCategory}) with ${newReq.attachments.length} attachment(s)`);

    if (soundEnabled) {
      playHighTechChime();
    }
  };

  const markAsRead = (id: string) => {
    setRequests(prev =>
      prev.map(item => (item.id === id ? { ...item, status: 'Reviewing' } : item))
    );
  };

  const markAllAsRead = () => {
    setRequests(prev =>
      prev.map(item => (item.status === 'New' ? { ...item, status: 'Reviewing' } : item))
    );
  };

  const clearLatestAlert = () => setLatestAlert(null);

  return (
    <NotificationContext.Provider
      value={{
        requests,
        unreadCount,
        isDrawerOpen,
        setIsDrawerOpen,
        activeRequestDetail,
        setActiveRequestDetail,
        addPartnerRequest,
        markAsRead,
        markAllAsRead,
        soundEnabled,
        setSoundEnabled,
        latestAlert,
        clearLatestAlert
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};
