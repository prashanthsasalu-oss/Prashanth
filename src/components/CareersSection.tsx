import React, { useState } from 'react';
import { CAREER_POSITIONS } from '../data/careersData';
import { CareerPosition } from '../types';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ChevronRight, 
  X, 
  Upload, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Send 
} from 'lucide-react';
import { useNotifications } from '../context/NotificationContext';

export const CareersSection: React.FC = () => {
  const { addPartnerRequest } = useNotifications();
  const [selectedRole, setSelectedRole] = useState<CareerPosition | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [resumeFileName, setResumeFileName] = useState('');
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole || !applicantName || !applicantEmail) return;

    // Trigger notification in portal
    addPartnerRequest({
      companyName: `Applicant: ${applicantName}`,
      contactPerson: applicantName,
      email: applicantEmail,
      phone: applicantPhone || '+91 9742969995',
      serviceCategory: 'Careers & Talent Acquisition',
      priority: 'Standard',
      requirements: `Applied for Position: ${selectedRole.title} (${selectedRole.department}, ${selectedRole.location}). Experience level matched: ${selectedRole.experience}.`,
      attachments: resumeFileName
        ? [{ name: resumeFileName, size: 1850000, type: 'application/pdf' }]
        : [{ name: `${applicantName.replace(/\s+/g, '_')}_Resume.pdf`, size: 1420000, type: 'application/pdf' }]
    });

    setApplicationSubmitted(true);
  };

  const handleCloseModal = () => {
    setSelectedRole(null);
    setApplicationSubmitted(false);
    setApplicantName('');
    setApplicantEmail('');
    setApplicantPhone('');
    setResumeFileName('');
  };

  return (
    <section id="careers-section" className="py-20 relative bg-slate-950/60 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span>Join Varaxis Global</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit']">
            Build the Future of Autonomous Enterprise Intelligence
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            We are hiring world-class ERP architects, AI process mining engineers, supply chain visionaries, and risk governance specialists at our Bangalore Tech Hub and global remote teams.
          </p>
        </div>

        {/* Culture & Value Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h4 className="text-white font-bold text-base font-['Outfit'] mb-1">
              Global Enterprise Scale
            </h4>
            <p className="text-xs text-slate-400">
              Architect solutions directly for Fortune 500 multinationals across North America, EMEA, and Asia-Pacific.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h4 className="text-white font-bold text-base font-['Outfit'] mb-1">
              AI-First Engineering Culture
            </h4>
            <p className="text-xs text-slate-400">
              Work with the latest generative AI, Celonis process mining, SAP BTP Cloud, and automated governance stacks.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h4 className="text-white font-bold text-base font-['Outfit'] mb-1">
              Hybrid Agility &amp; Growth
            </h4>
            <p className="text-xs text-slate-400">
              Modern headquarters at Tata New Haven, Bangalore with flexible hybrid workflows and rapid career progression.
            </p>
          </div>
        </div>

        {/* Positions List */}
        <div className="space-y-4">
          {CAREER_POSITIONS.map(pos => (
            <div
              key={pos.id}
              id={`career-card-${pos.id}`}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition duration-200 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {pos.department}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {pos.location}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    {pos.experience} • {pos.type}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit'] group-hover:text-cyan-300 transition">
                  {pos.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pos.summary}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  id={`apply-btn-${pos.id}`}
                  onClick={() => setSelectedRole(pos)}
                  className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-cyan-500 text-cyan-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition border border-slate-700 hover:border-cyan-500"
                >
                  <span>Apply Now</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Email for Careers */}
        <div className="mt-8 text-center text-xs text-slate-400">
          Looking for custom leadership roles or consulting partnerships? Email your CV directly to{' '}
          <a
            href="mailto:careers@varaxisglobal.com?subject=Strategic%20Career%20Application%20at%20Varaxis%20Global"
            className="text-cyan-400 hover:underline font-mono"
          >
            careers@varaxisglobal.com
          </a>
        </div>

      </div>

      {/* Apply Role Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 space-y-4 animate-in zoom-in-95">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {selectedRole.department}
                </span>
                <h4 className="text-xl font-bold text-white font-['Outfit'] mt-0.5">
                  Apply: {selectedRole.title}
                </h4>
                <p className="text-xs text-slate-400">{selectedRole.location} • {selectedRole.experience}</p>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {applicationSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h5 className="text-lg font-bold text-white font-['Outfit']">Application Received!</h5>
                <p className="text-xs text-slate-300">
                  Your profile has been forwarded to our Talent Acquisition desk and an in-portal notification was recorded.
                </p>
                <button
                  onClick={handleCloseModal}
                  className="px-5 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-medium hover:text-white"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={e => setApplicantName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={e => setApplicantEmail(e.target.value)}
                      placeholder="jane@domain.com"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={applicantPhone}
                      onChange={e => setApplicantPhone(e.target.value)}
                      placeholder="+91 9742969995"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Attach Resume / Portfolio (PDF or DOCX)
                  </label>
                  <label className="border-2 border-dashed border-slate-700 rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer hover:border-cyan-500 bg-slate-950/40">
                    <input
                      type="file"
                      className="hidden"
                      onChange={e => {
                        if (e.target.files && e.target.files[0]) {
                          setResumeFileName(e.target.files[0].name);
                        }
                      }}
                    />
                    <Upload className="w-5 h-5 text-cyan-400 mb-1" />
                    <span className="text-xs text-slate-300">
                      {resumeFileName || 'Click to select CV document'}
                    </span>
                  </label>
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold flex items-center gap-2 hover:opacity-95 shadow-md shadow-cyan-500/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
