import React, { useState } from 'react';
import { Programme, PROGRAMMES } from '../data/foundationData';
import { ArrowRight, CheckCircle2, Sparkles, BookOpen, Heart, Laptop, ShieldCheck, Users } from 'lucide-react';

interface ProgrammesSectionProps {
  onSelectProgramme: (programme: Programme) => void;
  onOpenDonate: (presetNote?: string) => void;
}

export const ProgrammesSection: React.FC<ProgrammesSectionProps> = ({
  onSelectProgramme,
  onOpenDonate
}) => {
  const [filter, setFilter] = useState<'all' | 'active' | 'proposed'>('all');

  const filteredProgrammes = PROGRAMMES.filter(p => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const getIconForProgramme = (id: string) => {
    switch (id) {
      case 'education-for-every-girl':
        return <BookOpen className="w-5 h-5 text-[#3E1024]" />;
      case 'girl-child-protection':
        return <ShieldCheck className="w-5 h-5 text-[#1B4332]" />;
      case 'mentorship-and-leadership':
        return <Users className="w-5 h-5 text-[#C59B27]" />;
      case 'health-and-wellbeing':
        return <Heart className="w-5 h-5 text-[#D9777F]" />;
      case 'skills-economic-empowerment':
        return <Laptop className="w-5 h-5 text-[#3E1024]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C59B27]" />;
    }
  };

  return (
    <section id="programmes" className="py-20 lg:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Segmented Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3E1024] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#3E1024]" />
              <span>Programmes & Areas of Impact</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241E20] leading-tight text-balance">
              Holistic Interventions for Sustainable Transformation
            </h2>
            <p className="mt-4 text-base text-stone-600 leading-relaxed">
              We address the interconnected challenges girls face — from tuition barriers and menstrual dignity to digital skills and child safeguarding.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented control) */}
          <div className="flex items-center p-1 bg-stone-100 rounded-lg border border-stone-200 self-start md:self-auto shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Programmes (6)
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'active'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Active Services (5)
            </button>
            <button
              onClick={() => setFilter('proposed')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'proposed'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Proposed Initiatives (1)
            </button>
          </div>
        </div>

        {/* Programme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProgrammes.map(prog => (
            <div
              key={prog.id}
              className="group flex flex-col rounded-xl overflow-hidden bg-[#FAF7F2] border border-stone-200 hover:border-stone-300 transition-all shadow-xs hover:shadow-md"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Status Indicator (Clean unboxed text in corner banner) */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-medium border border-stone-200/80 shadow-xs">
                  {prog.category === 'active' ? (
                    <span className="text-[#1B4332] flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-[#1B4332]" /> Active Service
                    </span>
                  ) : (
                    <span className="text-amber-800 flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600" /> Proposed Initiative
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-xs text-white px-2.5 py-0.5 rounded text-[11px] font-sans">
                  {prog.focusArea}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-md bg-white border border-stone-200">
                      {getIconForProgramme(prog.id)}
                    </div>
                    <span className="text-xs font-semibold text-stone-500 tracking-wide uppercase">
                      Pillar Initiative
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#3E1024] transition-colors mb-2">
                    {prog.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {prog.shortDesc}
                  </p>

                  <div className="p-2.5 rounded-md bg-white border border-stone-200/70 text-xs text-stone-700 mb-6">
                    <span className="font-semibold text-stone-900">Key Deliverables: </span>
                    <span>{prog.impactHighlight}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProgramme(prog)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3E1024] hover:text-[#581834] transition-colors cursor-pointer group/link"
                  >
                    <span>View Curriculum & Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenDonate(`Sponsorship for: ${prog.title}`)}
                    className="px-3 py-1.5 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Sponsor This
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proposed Initiatives Note */}
        <div className="mt-12 text-center text-xs text-stone-500">
          <span>Ethical Transparency Note: Active programmes reflect currently operational field services. Proposed initiatives are slated for community rollout subject to verified co-funding.</span>
        </div>

      </div>
    </section>
  );
};
