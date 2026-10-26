import React from 'react';
import { X, FileText, CheckCircle2, PieChart, ShieldCheck, Download, Award, Landmark } from 'lucide-react';

interface TransparencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TransparencyModal: React.FC<TransparencyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#1B4332] text-white p-6 sm:p-8 flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-white/10 text-[#E5C365] shrink-0 mt-1">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#E5C365] font-semibold">
                Governance & Accountability
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1">
                Transparency & Stewardship Report
              </h2>
              <p className="text-xs sm:text-sm text-stone-200 mt-1">
                Annual financial audits, governance structures, and direct-to-school monitoring protocols.
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
        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto space-y-6 text-stone-700 text-sm leading-relaxed">
          
          <div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
              Our Transparency Pledge
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Tobex Foundation believes that public trust is our most precious asset. We enforce rigorous financial accountability: donor gifts do not sit in speculative reserves; they are deployed directly to cover tuition fees, school meals, textbooks, and verified safeguarding interventions.
            </p>
          </div>

          {/* Allocation Breakdown */}
          <div className="p-5 rounded-xl bg-[#FAF7F2] border border-stone-200 space-y-3">
            <h4 className="font-bold text-stone-900 text-xs sm:text-sm flex items-center gap-2">
              <PieChart className="w-4 h-4 text-[#1B4332]" />
              Audited Fund Allocation Ratios
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-white rounded-lg border border-stone-200">
                <span className="text-2xl font-bold font-serif text-[#3E1024]">85%</span>
                <p className="font-semibold text-stone-800 mt-1">Direct Programmes</p>
                <p className="text-[11px] text-stone-500 mt-0.5">School fees, learning kits, uniforms, and student welfare.</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-stone-200">
                <span className="text-2xl font-bold font-serif text-[#1B4332]">10%</span>
                <p className="font-semibold text-stone-800 mt-1">Safeguarding & M&E</p>
                <p className="text-[11px] text-stone-500 mt-0.5">Field staff attendance verification and child protection audits.</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-stone-200">
                <span className="text-2xl font-bold font-serif text-[#C59B27]">5%</span>
                <p className="font-semibold text-stone-800 mt-1">Governance & Admin</p>
                <p className="text-[11px] text-stone-500 mt-0.5">Annual external audit, bank processing, and compliance filings.</p>
              </div>
            </div>
          </div>

          {/* Verification Pillars */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-stone-900">
              Governance Framework & Ethical Audits
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-stone-600">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                <span><strong>Independent Board Oversight:</strong> An independent board of trustees with expertise in education, child psychology, law, and non-profit finance oversees strategic direction.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                <span><strong>Direct-to-School Bursary Payments:</strong> All tuition bursaries are transferred directly to accredited partner educational institutions rather than disbursed as unmonitored cash.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                <span><strong>Statutory Filings Placeholder:</strong> Official regulatory documentation (CAC Incorporation & Annual Tax-Exempt Status) are maintained on file with national regulatory registries.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
          <span className="text-xs text-stone-500">
            Audit Period: 2024–2026 Fiscal Cycle
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-[#1B4332] hover:bg-[#255842] rounded-md transition-colors cursor-pointer"
          >
            Close Report
          </button>
        </div>

      </div>
    </div>
  );
};
