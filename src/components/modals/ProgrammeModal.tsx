import React from 'react';
import { Programme } from '../../data/foundationData';
import { X, CheckCircle2, Heart, ArrowRight, Package, BookOpen } from 'lucide-react';

interface ProgrammeModalProps {
  programme: Programme | null;
  onClose: () => void;
  onSponsor: (programmeTitle: string) => void;
}

export const ProgrammeModal: React.FC<ProgrammeModalProps> = ({
  programme,
  onClose,
  onSponsor
}) => {
  if (!programme) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden">
        
        {/* Header Photo & Close Button */}
        <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-200">
          <img
            src={programme.image}
            alt={programme.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[11px] font-semibold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded backdrop-blur-xs inline-block mb-1">
              {programme.focusArea}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
              {programme.title}
            </h2>
            <div className="text-xs text-stone-200 mt-1 flex items-center gap-2">
              <span>{programme.category === 'active' ? 'Active Operational Service' : 'Proposed Initiative'}</span>
              <span>·</span>
              <span>{programme.impactHighlight}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6 text-stone-700 text-sm leading-relaxed">
          
          <div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
              Programme Overview & Challenge
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {programme.fullDesc}
            </p>
          </div>

          {/* Curriculum / Modules */}
          <div>
            <h3 className="font-serif text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#3E1024]" />
              Core Curriculum & Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {programme.curriculum.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#FAF7F2] border border-stone-200 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4332] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kit Supplies (if available) */}
          {programme.kitSupplies && programme.kitSupplies.length > 0 && (
            <div>
              <h3 className="font-serif text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
                <Package className="w-4 h-4 text-[#C59B27]" />
                Direct Distribution Kit Contents
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-xs text-stone-600">
                {programme.kitSupplies.map((kitItem, idx) => (
                  <li key={idx}>{kitItem}</li>
                ))}
              </ul>
            </div>
          )}

          {/* How to Help Box */}
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-stone-200 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3E1024] block">
              How You Can Help This Initiative
            </span>
            <p className="text-xs text-stone-700">
              {programme.howToHelp}
            </p>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-stone-500">
            Every sponsorship is direct-to-school & 100% receipted
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded-md hover:bg-stone-50 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onSponsor(programme.title);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-6 py-2.5 text-xs font-bold text-white bg-[#3E1024] hover:bg-[#581834] rounded-md transition-colors cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-[#E8A598] text-[#E8A598]" />
              <span>Sponsor This Programme</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
