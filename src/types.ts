export interface ServiceSubmodule {
  title: string;
  description: string;
  capabilities: string[];
  metrics?: string;
  iconName?: string;
}

export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  badge: string;
  description: string;
  submodules: ServiceSubmodule[];
  accentColor: string;
  icon: string;
  keyHighlights: string[];
}

export interface AttachedFile {
  name: string;
  size: number;
  type: string;
  lastModified?: number;
  previewUrl?: string;
}

export interface PartnerRequest {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  serviceCategory: string;
  priority: 'Standard' | 'Urgent' | 'Strategic RFP';
  requirements: string;
  attachments: AttachedFile[];
  submittedAt: string;
  status: 'New' | 'Reviewing' | 'Proposal Ready';
  estimatedTimeline?: string;
}

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  requirements: string[];
  isOpen: boolean;
}
