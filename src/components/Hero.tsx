import React from 'react';
import { ArrowRight, BookOpen, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenDonate: () => void;
  onExploreImpact: () => void;
  onOpenSafeguarding: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDonate, onExploreImpact, onOpenSafeguarding }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-stone-200">
      {/* Subtle organic warm background ambient gradient */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#E8A598]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Narrative & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Subtle mission label (clean unboxed text, no candy pill) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3E1024] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
              <span>Building brighter futures, one girl at a time</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#241E20] leading-[1.12] mb-6 text-balance">
              Empowering Every Girl to Dream, Learn, and Thrive.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl mb-8">
              Every girl deserves the opportunity to learn, feel safe, discover her potential, and build a future filled with possibilities. We work to remove barriers, support vulnerable girls, and create lasting opportunities for the next generation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onOpenDonate}
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-medium text-white bg-[#3E1024] hover:bg-[#581834] rounded-md transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap group"
              >
                <span>Support Our Mission</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreImpact}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-[#3E1024] bg-white hover:bg-stone-50 border border-stone-300 rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                Discover Our Impact
              </button>
            </div>

            {/* Trust and ethical compliance metadata (clean unboxed text) */}
            <div className="pt-6 border-t border-stone-200/90 flex flex-wrap items-center gap-3 text-xs text-stone-500">
              <span className="font-medium text-stone-700">100% Safeguarded Care</span>
              <span aria-hidden="true">·</span>
              <span>Direct-to-School Sponsorship</span>
              <span aria-hidden="true">·</span>
              <span>Transparent Fund Allocation</span>
              <span aria-hidden="true">·</span>
              <button
                onClick={onOpenSafeguarding}
                className="text-[#3E1024] hover:underline cursor-pointer font-medium"
              >
                Safeguarding Framework
              </button>
            </div>
          </div>

          {/* Right Column: Authentic Editorial Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame with Single Elevation and Muted Border */}
              <div className="relative rounded-xl overflow-hidden bg-stone-200 border border-stone-300/80 shadow-xl aspect-[4/3] lg:aspect-[5/4]">
                <img
                  src="/src/assets/images/hero_girls_education_1793022640681.jpg"
                  alt="West African schoolgirls smiling and reading together in a bright classroom"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                {/* Measured Scrim for Legibility & Dignity */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Subdued Editorial Caption */}
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-light flex items-center justify-between">
                  <span className="truncate">Collaborative classroom study session, West Africa</span>
                  <span className="text-white/80 font-mono text-[11px] shrink-0 ml-2">Consent Approved</span>
                </div>
              </div>

              {/* Dignified Quote Callout Box */}
              <div className="mt-4 p-4 rounded-lg bg-[#FAF7F2] border border-stone-200 shadow-sm flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-stone-700 italic">
                  “When you educate a girl, you educate an entire generation, strengthen a community, and end generational poverty.”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Pillar Operational & Trust Strip below Hero Split */}
        <div className="mt-14 pt-8 border-t border-stone-200 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-[#3E1024]/5 text-[#3E1024] shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-stone-900">Equal Education</h2>
              <p className="text-xs text-stone-600 mt-1">Tuition, textbooks, and back-to-school retention</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-[#3E1024]/5 text-[#3E1024] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-stone-900">Child Safeguarding</h2>
              <p className="text-xs text-stone-600 mt-1">Zero-tolerance protection and legal advocacy</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-[#3E1024]/5 text-[#3E1024] shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-stone-900">Structured Mentorship</h2>
              <p className="text-xs text-stone-600 mt-1">Guiding teenage girls with professional role models</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-[#3E1024]/5 text-[#3E1024] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-stone-900">Digital Literacy</h2>
              <p className="text-xs text-stone-600 mt-1">Tech skills and entrepreneurship for independence</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
