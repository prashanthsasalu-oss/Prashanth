import React from 'react';
import { useNotifications } from '../context/NotificationContext';
import { 
  Bell, 
  X, 
  FileText, 
  Download, 
  CheckCircle2, 
  Clock, 
  Volume2, 
  VolumeX, 
  Building2, 
  Mail, 
  Phone, 
  Tag, 
  ShieldCheck, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

export const InPortalNotificationDrawer: React.FC = () => {
  const {
    requests,
    unreadCount,
    isDrawerOpen,
    setIsDrawerOpen,
    activeRequestDetail,
    setActiveRequestDetail,
    markAsRead,
    markAllAsRead,
    soundEnabled,
    setSoundEnabled
  } = useNotifications();

  if (!isDrawerOpen) return null;

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div 
      id="in-portal-notification-modal" 
      className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        className="w-full max-w-xl h-full bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-300"
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative p-2 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white animate-pulse">
                  {unreadCount}
                </span>
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-white text-lg font-['Outfit']">
                  Partner RFP & Alert Console
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Live Dispatch
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Real-time partner requirement alerts & attached specifications
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <button
              id="toggle-alert-sound-btn"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              title={soundEnabled ? 'Mute alert chime' : 'Enable alert chime'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>

            {/* Mark All Read */}
            {unreadCount > 0 && (
              <button
                id="mark-all-read-btn"
                onClick={markAllAsRead}
                className="text-xs px-2.5 py-1.5 rounded-lg bg-slate-800 text-cyan-300 hover:bg-slate-700 border border-slate-700 transition"
              >
                Mark Read
              </button>
            )}

            {/* Close Drawer */}
            <button
              id="close-notification-drawer-btn"
              onClick={() => {
                setIsDrawerOpen(false);
                setActiveRequestDetail(null);
              }}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* System Trust & Security Banner */}
        <div className="bg-gradient-to-r from-cyan-950/60 to-slate-900 border-b border-cyan-900/30 px-5 py-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-cyan-300">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>100% Encrypted Tunnel • Zero-Trust PII Protection</span>
          </div>
          <span className="text-emerald-400 font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            24/7 Portal Active
          </span>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {requests.length === 0 ? (
            <div className="text-center py-16 text-slate-500 space-y-3">
              <Bell className="w-12 h-12 mx-auto text-slate-600 stroke-[1.5]" />
              <p className="text-sm">No incoming partner requests yet.</p>
              <p className="text-xs text-slate-600">
                Submit a test request via the RFP Portal form to view instant live notifications!
              </p>
            </div>
          ) : activeRequestDetail ? (
            /* Active Detail Inspection View */
            <div className="space-y-5">
              <button
                id="back-to-notifications-list"
                onClick={() => setActiveRequestDetail(null)}
                className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 mb-2"
              >
                ← Back to all incoming partner requests
              </button>

              <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/60 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        {activeRequestDetail.id}
                      </span>
                      <span className={`px-2 py-0.5 text-[10px] font-semibold uppercase rounded ${
                        activeRequestDetail.priority === 'Strategic RFP'
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                          : activeRequestDetail.priority === 'Urgent'
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      }`}>
                        {activeRequestDetail.priority}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mt-1">
                      {activeRequestDetail.companyName}
                    </h4>
                  </div>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {activeRequestDetail.submittedAt}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs border-t border-slate-700/50">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    <span>{activeRequestDetail.contactPerson}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <a href={`mailto:${activeRequestDetail.email}`} className="text-cyan-300 hover:underline truncate">
                      {activeRequestDetail.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>{activeRequestDetail.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Tag className="w-4 h-4 text-cyan-400" />
                    <span className="font-semibold text-emerald-400">{activeRequestDetail.serviceCategory}</span>
                  </div>
                </div>
              </div>

              {/* Requirement Scope Description */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Submitted Business & Technical Requirements:
                </label>
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-slate-200 leading-relaxed font-mono whitespace-pre-wrap">
                  {activeRequestDetail.requirements}
                </div>
              </div>

              {/* Attached Documents */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Attached Requirement & Scope Documents ({activeRequestDetail.attachments.length}):
                  </label>
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Antivirus & Hash Scanned
                  </span>
                </div>

                {activeRequestDetail.attachments.length === 0 ? (
                  <p className="text-xs text-slate-500 italic p-3 bg-slate-950/40 rounded-lg">
                    No physical attachments uploaded with this inquiry.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {activeRequestDetail.attachments.map((file, idx) => (
                      <div 
                        key={idx}
                        className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between hover:border-cyan-500/50 transition group"
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="p-2 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div className="truncate">
                            <p className="text-xs font-medium text-white group-hover:text-cyan-300 transition truncate">
                              {file.name}
                            </p>
                            <p className="text-[10px] text-slate-400">
                              {formatFileSize(file.size)} • {file.type || 'Document File'}
                            </p>
                          </div>
                        </div>

                        <button
                          id={`download-attachment-${idx}`}
                          onClick={() => {
                            alert(`Downloading simulated attachment package: ${file.name} (${formatFileSize(file.size)})`);
                          }}
                          className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg bg-slate-700/80 text-cyan-300 hover:bg-cyan-500 hover:text-white transition"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Download</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-2">
                <a
                  href={`mailto:${activeRequestDetail.email}?subject=Varaxis%20Global%20RFP%20Response%20-%20${encodeURIComponent(activeRequestDetail.id)}&body=Dear%20${encodeURIComponent(activeRequestDetail.contactPerson)},%0A%0AThank%20you%20for%20submitting%20your%20business%20requirements%20to%20Varaxis%20Global%20for%20${encodeURIComponent(activeRequestDetail.serviceCategory)}.%0A%0AOur%20Executive%20Solution%20Architects%20have%20reviewed%20your%20specifications...`}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-xs flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-cyan-500/20"
                >
                  <Mail className="w-4 h-4" />
                  Direct Email Response to Partner
                </a>
                <button
                  onClick={() => {
                    markAsRead(activeRequestDetail.id);
                    setActiveRequestDetail(null);
                  }}
                  className="py-2.5 px-4 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 text-xs font-medium"
                >
                  Close Detail
                </button>
              </div>
            </div>
          ) : (
            /* Notifications List */
            <div className="space-y-3">
              {requests.map(req => (
                <div
                  key={req.id}
                  id={`notification-card-${req.id}`}
                  onClick={() => {
                    markAsRead(req.id);
                    setActiveRequestDetail(req);
                  }}
                  className={`p-4 rounded-xl border transition cursor-pointer relative overflow-hidden ${
                    req.status === 'New'
                      ? 'bg-slate-800/90 border-cyan-500/50 shadow-lg shadow-cyan-950/40 hover:border-cyan-400'
                      : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/70'
                  }`}
                >
                  {req.status === 'New' && (
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500" />
                  )}

                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold tracking-wider text-cyan-400 font-mono">
                          {req.id}
                        </span>
                        {req.status === 'New' && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-cyan-500 text-slate-950 uppercase tracking-wider">
                            NEW ALERT
                          </span>
                        )}
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">
                          {req.serviceCategory}
                        </span>
                      </div>
                      <h5 className="font-semibold text-white text-sm mt-1">
                        {req.companyName}
                      </h5>
                    </div>

                    <span className="text-[11px] text-slate-400 whitespace-nowrap flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {req.submittedAt}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {req.requirements}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-slate-700/40 flex items-center justify-between text-xs text-slate-400">
                    <span className="truncate max-w-[200px]">
                      {req.contactPerson}
                    </span>

                    <div className="flex items-center gap-3">
                      {req.attachments.length > 0 && (
                        <span className="flex items-center gap-1 text-cyan-400 text-[11px]">
                          <FileText className="w-3.5 h-3.5" />
                          {req.attachments.length} file{req.attachments.length > 1 ? 's' : ''}
                        </span>
                      )}
                      <span className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-medium text-[11px]">
                        Inspect Scope <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 text-xs text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Varaxis Global AI Automated Routing</span>
          </div>
          <span>Bangalore Hub: +91 9742969995</span>
        </div>
      </div>
    </div>
  );
};
