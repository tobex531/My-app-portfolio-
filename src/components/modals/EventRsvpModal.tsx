import React, { useState } from 'react';
import { EventItem } from '../../data/foundationData';
import { X, Calendar, MapPin, CheckCircle2, Ticket, Users, ArrowRight } from 'lucide-react';

interface EventRsvpModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventRsvpModal: React.FC<EventRsvpModalProps> = ({ event, onClose }) => {
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');
  const [guestCount, setGuestCount] = useState('1');
  const [isSuccess, setIsSuccess] = useState(false);
  const [passNumber, setPassNumber] = useState('');

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pass = `TBX-PASS-${Math.floor(10000 + Math.random() * 90000)}`;
    setPassNumber(pass);
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg my-8 bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#3E1024] text-white p-6 flex items-start justify-between gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#E5C365] font-semibold">
              Event Registration
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold mt-1">
              {event.title}
            </h2>
            <div className="flex items-center gap-3 text-xs text-stone-200 mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#E8A598]" />
                {event.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 truncate">
                <MapPin className="w-3.5 h-3.5 text-[#E8A598]" />
                {event.location}
              </span>
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
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Registration Confirmed!
              </h3>
              <p className="text-xs text-stone-600 max-w-xs mx-auto">
                We look forward to welcoming you, <strong className="text-stone-900">{attendeeName}</strong>. Check your inbox ({attendeeEmail}) for full attendee logistical details.
              </p>

              {/* Admission Pass */}
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-stone-300 font-mono text-xs space-y-2 text-left">
                <div className="flex items-center justify-between border-b border-stone-200 pb-1.5">
                  <span className="text-stone-500 font-sans">Pass Reference:</span>
                  <span className="font-bold text-[#3E1024]">{passNumber}</span>
                </div>
                <div className="flex items-center justify-between border-b border-stone-200 pb-1.5">
                  <span className="text-stone-500 font-sans">Event:</span>
                  <span className="text-stone-900 truncate max-w-[200px]">{event.title}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500 font-sans">Attendees:</span>
                  <span className="text-stone-900">{guestCount} attendee(s)</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 text-xs font-bold text-white bg-[#3E1024] hover:bg-[#581834] rounded-md transition-colors cursor-pointer"
              >
                Close Pass
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-stone-600">
                Please provide your details to reserve your complimentary seat. Capacity is limited to ensure meaningful discussions and safe environments.
              </p>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Fatima Mohammed"
                  value={attendeeName}
                  onChange={e => setAttendeeName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white rounded-md border border-stone-300 focus:outline-none focus:border-[#3E1024]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="fatima@example.org"
                  value={attendeeEmail}
                  onChange={e => setAttendeeEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white rounded-md border border-stone-300 focus:outline-none focus:border-[#3E1024]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Number of Attendees
                </label>
                <select
                  value={guestCount}
                  onChange={e => setGuestCount(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white rounded-md border border-stone-300 focus:outline-none focus:border-[#3E1024]"
                >
                  <option value="1">1 Person (Just Me)</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="5+">Delegation (5+)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#3E1024] hover:bg-[#581834] rounded-md transition-colors shadow-xs cursor-pointer"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Confirm Free Reservation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
