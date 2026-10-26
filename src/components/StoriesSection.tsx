import React from 'react';
import { Story, STORIES_OF_HOPE } from '../data/foundationData';
import { ArrowRight, Quote, ShieldCheck, HeartHandshake } from 'lucide-react';

interface StoriesSectionProps {
  onSelectStory: (story: Story) => void;
  onOpenDonate: (presetNote?: string) => void;
}

export const StoriesSection: React.FC<StoriesSectionProps> = ({
  onSelectStory,
  onOpenDonate
}) => {
  return (
    <section id="stories" className="py-20 lg:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3E1024] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D9777F]" />
            <span>Voices of Resilience & Agency</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241E20] leading-tight text-balance">
            Stories of Hope: Courage in Every Step
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Every girl has a voice, a vision, and the capacity to lead. We share their journeys with dignity, preserving their privacy while celebrating their hard-won academic and personal triumphs.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORIES_OF_HOPE.map((story) => (
            <article
              key={story.id}
              className="group flex flex-col rounded-xl overflow-hidden bg-[#FAF7F2] border border-stone-200 hover:border-stone-300 transition-all shadow-xs hover:shadow-md"
            >
              {/* Photo Frame with Safeguarding Caption */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                <img
                  src={story.image}
                  alt={`${story.name} — ${story.role}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Name & Role overlay */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-serif text-xl font-bold">{story.name}</span>
                    <span className="text-white/80 text-xs">({story.age} yrs)</span>
                  </div>
                  <p className="text-xs text-white/90 font-light truncate">{story.role}</p>
                </div>

                {/* Consent & Pseudonym Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-medium text-stone-700 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#1B4332]" />
                  <span>Ethical Consent</span>
                </div>
              </div>

              {/* Story Excerpt */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Pull quote snippet */}
                  <div className="relative mb-4 pl-4 border-l-2 border-[#D9777F]/60">
                    <Quote className="w-4 h-4 text-[#D9777F] mb-1 opacity-70" />
                    <p className="font-serif text-sm italic text-stone-800 leading-snug">
                      “{story.quote}”
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {story.summary}
                  </p>
                </div>

                {/* Ethical notice & CTA button */}
                <div className="pt-4 border-t border-stone-200/80">
                  <p className="text-[10px] text-stone-600 mb-3 italic">
                    {story.pseudonymNote}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => onSelectStory(story)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#3E1024] hover:text-[#581834] transition-colors cursor-pointer group/link"
                    >
                      <span>Read Her Full Journey</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenDonate(`Sponsorship inspired by ${story.name}`)}
                      className="text-xs text-[#1B4332] font-semibold hover:underline cursor-pointer"
                    >
                      Sponsor Girls Like {story.name}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Child Safety and Respect Statement Banner */}
        <div className="mt-12 p-5 rounded-lg bg-[#FAF7F2] border border-stone-200 flex items-center gap-3 text-xs text-stone-600">
          <HeartHandshake className="w-5 h-5 text-[#3E1024] shrink-0" />
          <span>
            <strong>Our Dignity Pledge:</strong> We strictly avoid sensationalist or exploitative imagery. Beneficiary stories are compiled with explicit parental consent, supervised by licensed child advocates, and anonymised to guarantee long-term safety and privacy.
          </span>
        </div>

      </div>
    </section>
  );
};
