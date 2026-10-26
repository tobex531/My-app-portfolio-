import React from 'react';
import { EventItem, UPCOMING_EVENTS } from '../data/foundationData';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

interface EventsSectionProps {
  onRegisterEvent: (event: EventItem) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onRegisterEvent }) => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3E1024] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#1B4332]" />
              <span>Events & Field Updates</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241E20] leading-tight text-balance">
              Upcoming Initiatives & Gatherings
            </h2>
            <p className="mt-4 text-base text-stone-600 leading-relaxed">
              Participate in our educational workshops, community supply assembly drives, and public child protection town halls.
            </p>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((event) => (
            <div
              key={event.id}
              className="flex flex-col justify-between rounded-xl bg-[#FAF7F2] border border-stone-200 p-6 hover:border-stone-300 transition-all shadow-xs hover:shadow-md"
            >
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#3E1024] mb-2">
                  {event.type}
                </div>

                <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">
                  {event.title}
                </h3>

                <div className="space-y-2 text-xs text-stone-600 mb-4 pb-4 border-b border-stone-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-stone-500 shrink-0" />
                    <span className="font-medium text-stone-800">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-stone-500 shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-stone-500 shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-stone-500 shrink-0" />
                    <span>{event.openSpots} remaining spots</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {event.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <button
                  onClick={() => onRegisterEvent(event)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-[#3E1024] hover:bg-[#581834] rounded-md transition-colors cursor-pointer"
                >
                  <span>Register / RSVP Free</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
