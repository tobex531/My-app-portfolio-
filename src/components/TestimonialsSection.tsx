import React from 'react';
import { TESTIMONIALS } from '../data/foundationData';
import { Quote, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3E1024] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#3E1024]" />
            <span>Community Voices & Perspectives</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241E20] leading-tight text-balance">
            Trusted by Educators, Mentors, and Families
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            The true test of our impact is reflected in the voices of school principals, volunteer tutors, community elders, and parents who witness real change in their daughters’ lives.
          </p>
        </div>

        {/* 4 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-8 rounded-xl bg-white border border-stone-200/90 shadow-xs flex flex-col justify-between relative"
            >
              <div>
                <Quote className="w-8 h-8 text-[#E8A598]/60 mb-4" />
                <p className="font-serif text-base sm:text-lg text-stone-800 leading-relaxed italic">
                  “{test.quote}”
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-stone-100 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">{test.author}</h4>
                  <p className="text-xs text-stone-600">{test.role}</p>
                  <p className="text-[11px] text-stone-400">{test.organization} · {test.location}</p>
                </div>
                
                <div className="shrink-0 p-1.5 rounded-full bg-stone-50 text-stone-400" title="Permission-Approved Feedback">
                  <ShieldCheck className="w-4 h-4 text-[#1B4332]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Permission Disclosure */}
        <div className="mt-10 text-center text-xs text-stone-500">
          <span>Community feedback recorded with informed consent during participatory monitoring sessions.</span>
        </div>

      </div>
    </section>
  );
};
