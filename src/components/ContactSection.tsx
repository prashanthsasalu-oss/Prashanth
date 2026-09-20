import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  MessageSquare,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { useNotifications } from '../context/NotificationContext';

interface ContactSectionProps {
  onOpenRfp: (category?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenRfp }) => {
  const { addPartnerRequest, setIsDrawerOpen } = useNotifications();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [quickName, setQuickName] = useState('');
  const [quickEmail, setQuickEmail] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickMessage, setQuickMessage] = useState('');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const partnerEmail = 'partner.desk@varaxisglobal.com';
  const phoneNumber = '+91 9742969995';
  const officeAddress = 'Tata New Haven, Tower 27, Huskur Main Road, Bangalore 562162, Karnataka, India';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(partnerEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleQuickContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName || !quickEmail || !quickMessage) return;

    addPartnerRequest({
      companyName: `${quickName} (Direct Contact)`,
      contactPerson: quickName,
      email: quickEmail,
      phone: quickPhone || '+91 9742969995',
      serviceCategory: 'Direct Business Inquiry',
      priority: 'Standard',
      requirements: quickMessage,
      attachments: []
    });

    setQuickSubmitted(true);
    setTimeout(() => {
      setQuickSubmitted(false);
      setQuickName('');
      setQuickEmail('');
      setQuickPhone('');
      setQuickMessage('');
      setIsDrawerOpen(true);
    }, 1200);
  };

  return (
    <section id="contact-section" className="py-20 relative bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Connect with Varaxis Global</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
            Ready to Accelerate Your Enterprise Transformation?
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Reach out directly to our Partner Desk or dispatch an RFP with requirement documents. We guarantee a response from certified solution architects within 4 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Company Details & Interactive Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Address Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="p-3 rounded-2xl bg-cyan-950 border border-cyan-500/30 text-cyan-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg font-['Outfit']">
                    Varaxis Global Corporate HQ
                  </h3>
                  <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Operational 24/7 • Bangalore Tech Corridor
                  </span>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5 text-slate-300 text-sm leading-relaxed">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Registered Office:</strong>
                  <p className="text-slate-300">
                    Tata New Haven, Tower 27, Huskur Main Road,<br />
                    Bangalore 562162, Karnataka, India
                  </p>
                </div>
              </div>

              {/* Contact Phone */}
              <div className="flex items-start gap-3.5 text-slate-300 text-sm">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <strong className="text-white block font-semibold">Direct Executive Line:</strong>
                  <div className="flex items-center justify-between mt-1">
                    <a 
                      href="tel:+919742969995"
                      className="text-base font-bold text-cyan-300 hover:text-white transition font-mono"
                    >
                      {phoneNumber}
                    </a>
                    <a
                      href="tel:+919742969995"
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-cyan-300 hover:bg-cyan-500 hover:text-white transition"
                    >
                      Click to Call
                    </a>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-0.5 block">24/7 Global Incident &amp; RFP Desk</span>
                </div>
              </div>

              {/* Partner Email Desk */}
              <div className="flex items-start gap-3.5 text-slate-300 text-sm">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <strong className="text-white block font-semibold">Partner Business Request Desk:</strong>
                  <div className="flex items-center justify-between mt-1">
                    <a
                      href={`mailto:${partnerEmail}?subject=Strategic%20Partnership%20Request%20-%20Varaxis%20Global`}
                      className="text-xs sm:text-sm font-semibold text-cyan-300 hover:underline font-mono truncate"
                    >
                      {partnerEmail}
                    </a>
                    <button
                      onClick={copyEmailToClipboard}
                      className="text-xs p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition flex items-center gap-1"
                      title="Copy Email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-0.5 block">Dedicated portal for enterprise proposals &amp; RFPs</span>
                </div>
              </div>

              {/* Direct Mail Buttons for Viewers */}
              <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row gap-2">
                <a
                  id="direct-send-email-viewer-btn"
                  href={`mailto:${partnerEmail}?subject=Business%20Partnership%20Inquiry%20from%20Viewer&body=Hello%20Varaxis%20Global%20Team,%0A%0AWe%20would%20like%20to%20discuss%20our%20enterprise%20digital%20transformation%20and%20governance%20requirements.%0A%0AOrganization:%0AContact:%0ARequirements:`}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition"
                >
                  <Send className="w-3.5 h-3.5" />
                  Launch Email Client (Viewer Action)
                </a>

                <button
                  onClick={() => onOpenRfp()}
                  className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition border border-slate-700"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Attach BRD &amp; RFP Files
                </button>
              </div>

            </div>

            {/* Security Guarantee Strip */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <span>
                All partner communications and attached requirement documents are protected by <strong className="text-white">100% end-to-end zero-trust encryption</strong>.
              </span>
            </div>

          </div>

          {/* Quick Contact & Message Dispatch Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="font-bold text-white text-lg font-['Outfit']">
                    Direct Inquiry &amp; Rapid Engagement
                  </h3>
                  <p className="text-xs text-slate-400">
                    Submitting here instantly dispatches a notification to the in-portal console
                  </p>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-lg border border-cyan-800">
                  Instant Portal Alert
                </span>
              </div>

              {quickSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-['Outfit']">
                    Alert Generated in Live Portal!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Your direct message has been logged. Opening in-portal notification console now...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuickContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Your Name / Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={quickName}
                        onChange={e => setQuickName(e.target.value)}
                        placeholder="e.g. Alex Morgan, Director of IT"
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={quickEmail}
                        onChange={e => setQuickEmail(e.target.value)}
                        placeholder="alex@enterprise.com"
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={quickPhone}
                      onChange={e => setQuickPhone(e.target.value)}
                      placeholder="+91 9742969995"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Business Requirements or Project Summary *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={quickMessage}
                      onChange={e => setQuickMessage(e.target.value)}
                      placeholder="Specify your needs across ERP Excellence (SAP S/4HANA, Blue Yonder, Kinaxis), SCM, TMS/WMS, Finance Transformation, HR Tech, or Governance & Audit..."
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onOpenRfp()}
                      className="text-xs text-cyan-400 hover:text-cyan-300 underline font-medium"
                    >
                      Need to attach RFP documents &amp; specs? Open Full Portal
                    </button>

                    <button
                      id="submit-quick-contact-btn"
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Dispatch Direct Message &amp; Alert
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Bangalore Location Visual Reference */}
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2">
              <span>Geo-Coordinates: 13.0645° N, 77.4982° E (Bangalore North)</span>
              <span className="text-emerald-400 font-mono">Status: Connected to Global Operations</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
