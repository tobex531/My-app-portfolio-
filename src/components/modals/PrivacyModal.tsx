import React from 'react';
import { X, Shield, Lock, EyeOff, CheckCircle2 } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#300C1A] text-white p-6 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/10 text-[#E5C365]">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#E5C365] font-semibold">
                Ethical Data Standard
              </span>
              <h2 className="font-serif text-2xl font-bold">
                Privacy, Data Ethics & Child Safeguarding
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-stone-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            At <strong>Tobex Foundation</strong>, protecting personal privacy—especially the confidential identities and dignity of vulnerable children—is our highest ethical duty.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-2.5">
              <EyeOff className="w-4 h-4 text-[#3E1024] shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900">Child Identity Protection:</strong>
                <p className="text-stone-600 mt-0.5">
                  We never disclose home addresses, legal surnames, or specific GPS geo-tags of minor beneficiaries. Photographs are published solely with verifiable written legal guardian authorization.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-[#3E1024] shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900">Donor Information Confidentiality:</strong>
                <p className="text-stone-600 mt-0.5">
                  Donor information, payment records, and email addresses are treated with bank-grade security. We never sell, lease, or distribute donor details to third-party marketing entities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#3E1024] shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900">Data Minimization:</strong>
                <p className="text-stone-600 mt-0.5">
                  Forms on this website collect only information necessary to process contributions, issue receipts, or vet prospective mentors in accordance with NDPR and international privacy standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-[#3E1024] hover:bg-[#581834] rounded-md transition-colors cursor-pointer"
          >
            Close Policy
          </button>
        </div>

      </div>
    </div>
  );
};
