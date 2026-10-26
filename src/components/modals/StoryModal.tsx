import React from 'react';
import { Story } from '../../data/foundationData';
import { X, Quote, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

interface StoryModalProps {
  story: Story | null;
  onClose: () => void;
  onSponsor: (storyName: string) => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ story, onClose, onSponsor }) => {
  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden">
        
        {/* Header Photo */}
        <div className="relative h-60 sm:h-72 overflow-hidden bg-stone-200">
          <img
            src={story.image}
            alt={story.name}
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
            <span className="text-[10px] font-semibold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded backdrop-blur-xs inline-block mb-1">
              {story.location} · {story.role}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
              {story.name}’s Journey to Opportunity
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6 text-stone-700 text-sm leading-relaxed">
          
          {/* Quote */}
          <div className="p-5 rounded-xl bg-[#FAF7F2] border-l-4 border-[#3E1024] space-y-2">
            <Quote className="w-6 h-6 text-[#E8A598]" />
            <p className="font-serif text-base sm:text-lg italic text-stone-900 leading-snug">
              “{story.quote}”
            </p>
            <p className="text-xs text-stone-500 font-sans">
              — {story.name}, {story.age} years old
            </p>
          </div>

          {/* Full Narrative */}
          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            {story.fullStory.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Child Safeguarding Consent Callout */}
          <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-3 text-xs text-stone-600">
            <ShieldCheck className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-800">Child Privacy & Ethical Consent Note:</strong>
              <p className="mt-0.5">{story.safeguardingConsent}</p>
            </div>
          </div>

        </div>

        {/* Actions */}
        <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded-md hover:bg-stone-50 transition-colors cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onSponsor(story.name);
            }}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs font-bold text-white bg-[#3E1024] hover:bg-[#581834] rounded-md transition-colors cursor-pointer"
          >
            <Heart className="w-3.5 h-3.5 fill-[#E8A598] text-[#E8A598]" />
            <span>Support Girls Like {story.name}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
