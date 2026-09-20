import React, { useState, useRef } from 'react';
import { useNotifications } from '../context/NotificationContext';
import { 
  X, 
  Upload, 
  FileText, 
  Trash2, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Building, 
  Mail, 
  Phone, 
  Sparkles, 
  Lock
} from 'lucide-react';
import { AttachedFile } from '../types';

interface PartnerRfpModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceCategory?: string;
}

export const PartnerRfpModal: React.FC<PartnerRfpModalProps> = ({
  isOpen,
  onClose,
  defaultServiceCategory = 'ERP Excellence'
}) => {
  const { addPartnerRequest, setIsDrawerOpen } = useNotifications();

  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceCategory, setServiceCategory] = useState(defaultServiceCategory);
  const [priority, setPriority] = useState<'Standard' | 'Urgent' | 'Strategic RFP'>('Strategic RFP');
  const [requirements, setRequirements] = useState('');
  const [attachments, setAttachments] = useState<AttachedFile[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  if (!isOpen) return null;

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const newFiles: AttachedFile[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      newFiles.push({
        name: file.name,
        size: file.size,
        type: file.type || 'application/octet-stream',
        lastModified: file.lastModified
      });
    }
    setAttachments(prev => [...prev, ...newFiles]);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !email || !requirements) {
      alert('Please fill out Company Name, Work Email, and Requirements scope.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      // Trigger live in-portal alert notification
      addPartnerRequest({
        companyName,
        contactPerson: contactPerson || 'Corporate Representative',
        email,
        phone: phone || '+91 9742969995',
        serviceCategory,
        priority,
        requirements,
        attachments
      });

      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 600);
  };

  const handleViewAlertInConsole = () => {
    setSubmittedSuccess(false);
    onClose();
    setIsDrawerOpen(true);
  };

  const handleResetAndClose = () => {
    setSubmittedSuccess(false);
    setCompanyName('');
    setContactPerson('');
    setEmail('');
    setPhone('');
    setRequirements('');
    setAttachments([]);
    onClose();
  };

  return (
    <div 
      id="partner-rfp-portal-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in"
    >
      <div 
        className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-['Outfit']">
                Partner Business & RFP Submission Portal
              </h3>
              <p className="text-xs text-slate-400">
                Direct route to Varaxis Global Executive Solution Architects
              </p>
            </div>
          </div>
          <button
            id="close-rfp-modal-btn"
            onClick={handleResetAndClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {submittedSuccess ? (
            /* Instant Success & In-Portal Alert Confirmation */
            <div className="text-center py-8 px-4 space-y-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white font-['Outfit']">
                RFP Alert Dispatched to Portal!
              </h4>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Your business inquiry and <span className="text-cyan-400 font-semibold">{attachments.length} attachment(s)</span> have been successfully submitted. An instant audio-visual notification was recorded in the <strong className="text-white">Varaxis Global Live Portal Console</strong>.
              </p>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-left max-w-md mx-auto space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Partner Desk Email:</span>
                  <span className="text-cyan-400 font-mono">partner.desk@varaxisglobal.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Bangalore Emergency Line:</span>
                  <span className="text-white font-mono">+91 9742969995</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">SLA Response Guarantee:</span>
                  <span className="text-emerald-400 font-semibold">Under 4 Business Hours</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <button
                  id="open-in-portal-console-btn"
                  onClick={handleViewAlertInConsole}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:opacity-95 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  View Live Alert in Portal Console
                </button>
                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 text-sm font-medium"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Trust Badge */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs">
                <div className="flex items-center gap-2 text-cyan-300">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>100% Data Security • ISO 27001 & SOC 2 Encrypted</span>
                </div>
                <span className="text-slate-400 hidden sm:inline">24*7 Enterprise Support</span>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Organization / Company Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                    <input
                      id="rfp-company-name"
                      type="text"
                      required
                      value={companyName}
                      onChange={e => setCompanyName(e.target.value)}
                      placeholder="e.g., Global Retail Enterprises"
                      className="w-full bg-slate-950/70 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Contact Person Name
                  </label>
                  <input
                    id="rfp-contact-person"
                    type="text"
                    value={contactPerson}
                    onChange={e => setContactPerson(e.target.value)}
                    placeholder="e.g., Sarah Jenkins, VP Operations"
                    className="w-full bg-slate-950/70 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Corporate Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                    <input
                      id="rfp-partner-email"
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="business.partner@domain.com"
                      className="w-full bg-slate-950/70 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Contact Phone / WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                    <input
                      id="rfp-partner-phone"
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+91 97429 69995"
                      className="w-full bg-slate-950/70 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>
                </div>
              </div>

              {/* Service Pillar Selection & Priority */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Service Pillar of Interest *
                  </label>
                  <select
                    id="rfp-service-category"
                    value={serviceCategory}
                    onChange={e => setServiceCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                  >
                    <option value="ERP Excellence">01. ERP Excellence (SAP All Modules, Blue Yonder, Kinaxis)</option>
                    <option value="Human Resources">02. Human Resources & Talent AI Intelligence</option>
                    <option value="Supply Chain Management">03. Supply Chain Management & Smart S&OP</option>
                    <option value="TMS, WMS & Logistics">04. TMS, WMS & Logistics Engineering</option>
                    <option value="Finance Digital Transformation">05. Finance Digital Transformation & Autonomous FP&A</option>
                    <option value="Customer Experience">06. Customer Experience (CX) & Omnichannel AI</option>
                    <option value="Governance, Compliance & Audit Support">07. Governance, Compliance & Audit Support</option>
                    <option value="Comprehensive Digital Transformation">08. Full-Stack End-to-End Enterprise Transformation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Priority / Engagement Type
                  </label>
                  <select
                    id="rfp-priority"
                    value={priority}
                    onChange={e => setPriority(e.target.value as 'Standard' | 'Urgent' | 'Strategic RFP')}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                  >
                    <option value="Strategic RFP">Strategic RFP (Detailed Assessment & Proposal)</option>
                    <option value="Urgent">Urgent (Immediate Project Kickoff / L1-L4 Outage)</option>
                    <option value="Standard">Standard Evaluation / Consultation</option>
                  </select>
                </div>
              </div>

              {/* Requirement Details */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Business & Requirement Details *
                </label>
                <textarea
                  id="rfp-requirements-textarea"
                  required
                  rows={4}
                  value={requirements}
                  onChange={e => setRequirements(e.target.value)}
                  placeholder="Describe your project scope, ERP modules required, pain points, data accuracy objectives, timeline, or current bottlenecks..."
                  className="w-full bg-slate-950/70 border border-slate-700 rounded-xl p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              {/* File Attachment Drag & Drop Area */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5 text-cyan-400" />
                    Attach Business & Requirements Documents (RFP, Scope, BRD)
                  </label>
                  <span className="text-[11px] text-slate-400">
                    PDF, DOCX, XLSX, PPTX (Max 25MB)
                  </span>
                </div>

                <div
                  id="rfp-drag-drop-zone"
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition ${
                    dragActive
                      ? 'border-cyan-400 bg-cyan-950/40'
                      : 'border-slate-700 bg-slate-950/40 hover:border-slate-600 hover:bg-slate-950/60'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    className="hidden"
                    onChange={e => handleFiles(e.target.files)}
                  />
                  <div className="flex flex-col items-center justify-center gap-1">
                    <Upload className="w-6 h-6 text-cyan-400" />
                    <p className="text-xs text-slate-300">
                      <span className="font-semibold text-cyan-400">Click to upload</span> or drag and drop requirements files
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Protected with 100% end-to-end data encryption
                    </p>
                  </div>
                </div>

                {/* Attached Files List */}
                {attachments.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {attachments.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs"
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          <FileText className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-white truncate max-w-[280px] sm:max-w-md font-medium">
                            {file.name}
                          </span>
                          <span className="text-slate-400 text-[10px]">
                            ({formatFileSize(file.size)})
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={e => {
                            e.stopPropagation();
                            removeAttachment(idx);
                          }}
                          className="p-1 rounded text-slate-400 hover:text-rose-400 transition"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button & Direct Mail Option */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  id="submit-partner-rfp-button"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Dispatching to Portal...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Request & Trigger Portal Alert
                    </>
                  )}
                </button>

                <a
                  id="direct-email-partner-desk-btn"
                  href={`mailto:partner.desk@varaxisglobal.com?subject=Business%20Inquiry%20from%20Partner%20-${encodeURIComponent(companyName || 'Enterprise%20Client')}&body=Dear%20Varaxis%20Global%20Team,%0A%0AWe%20are%20reaching%20out%20regarding%20${encodeURIComponent(serviceCategory)}.%0A%0ACompany:%20${encodeURIComponent(companyName)}%0AContact:%20${encodeURIComponent(contactPerson)}%0APhone:%20${encodeURIComponent(phone)}%0A%0ARequirements:%0A${encodeURIComponent(requirements)}`}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-800 text-cyan-300 hover:text-white hover:bg-slate-700 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  Email to partner.desk@varaxisglobal.com
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
