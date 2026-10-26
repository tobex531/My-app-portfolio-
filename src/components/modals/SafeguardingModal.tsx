import React from 'react';
import { X, ShieldCheck, AlertCircle, Mail, Phone, Lock, FileText, CheckCircle2 } from 'lucide-react';

interface SafeguardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SafeguardingModal: React.FC<SafeguardingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#300C1A] text-white p-6 sm:p-8 flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#E5C365]/20 text-[#E5C365] shrink-0 mt-1">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#E5C365] font-semibold">
                Ethical Standard & Policy
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1">
                Child Safeguarding & Protection Charter
              </h2>
              <p className="text-xs sm:text-sm text-stone-200 mt-1">
                Our binding commitment to the safety, dignity, and bodily autonomy of every child.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-stone-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6 text-stone-700 text-sm leading-relaxed">
          
          <div className="p-4 rounded-lg bg-[#FAF7F2] border border-stone-200 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#3E1024] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-stone-800">
              <strong>Zero Tolerance Mandate:</strong> Tobex Foundation has absolute zero tolerance for child abuse, exploitation, corporal punishment, emotional intimidation, harassment, or neglect by staff, volunteers, mentors, contractors, or community partners.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1B4332]" />
              1. Rigorous Mentor & Staff Vetting
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Every prospective volunteer educator, staff member, and mentor undergoes rigorous identity checks, verifiable professional references, and formal criminal record vetting. No adult is ever permitted unmonitored or isolated physical or digital access to children.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1B4332]" />
              2. Dignified Representation & Photography Ethics
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              We never utilize exploitative, degrading, or pity-eliciting imagery. All photography of minors requires informed, written legal guardian consent. Public case studies use pseudonyms, remove geo-tags, and withhold identifying addresses to safeguard privacy and safety.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1B4332]" />
              3. Safe Space & Environmental Standards
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Community workshops and digital literacy labs must satisfy stringent hygiene and security standards: private, gender-segregated sanitation facilities, safe commuting protocols, well-lit group learning areas, and active female chaperones at all field gatherings.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1B4332]" />
              4. Confidential Whistleblowing & Immediate Escalation
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Any suspicion or disclosure of harm is treated with urgent seriousness. Reports trigger our rapid-response protocol within 2 hours, led by our Designated Safeguarding Officer in direct partnership with licensed child welfare services and pediatric medical officers.
            </p>
          </div>

          {/* Emergency Reporting Box */}
          <div className="p-5 rounded-xl bg-red-50/70 border border-red-200 space-y-2">
            <h4 className="font-bold text-red-950 text-xs sm:text-sm flex items-center gap-2">
              <Lock className="w-4 h-4 text-red-700" />
              Confidential Safeguarding Help Desk & Reporting Channel
            </h4>
            <p className="text-xs text-red-900">
              If you have any safety concerns regarding a beneficiary, volunteer, or partner associated with Tobex Foundation, reach our independent safeguarding team immediately:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2 text-xs font-semibold text-red-950">
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-red-700" />
                <span>safeguarding@tobexfoundation.org</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-red-700" />
                <span>+234 (0) 800-SAFE-GIRL (Toll-Free Helpline)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
          <span className="text-xs text-stone-500 font-mono">
            Document Ref: TF-SAFEGUARD-2026-REV3
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-[#3E1024] hover:bg-[#581834] rounded-md transition-colors cursor-pointer"
          >
            I Acknowledge & Understand
          </button>
        </div>

      </div>
    </div>
  );
};
