import React, { useState } from 'react';
import { Mail, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [frequency, setFrequency] = useState('quarterly');
  const [consent, setConsent] = useState(true);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('success');
  };

  return (
    <section className="py-20 bg-[#300C1A] text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-1/4 -z-0 w-96 h-96 bg-[#E8A598]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E5C365] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Quarterly Field Dispatch</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
            Stay Connected. Help Create Change.
          </h2>

          <p className="text-base sm:text-lg text-[#F5EFEB]/80 leading-relaxed max-w-xl mx-auto mb-8">
            Receive verified updates on girls’ academic milestones, annual audited impact dispatches, and emergency community support appeals. Zero spam.
          </p>

          {status === 'success' ? (
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 max-w-md mx-auto space-y-2">
              <CheckCircle2 className="w-8 h-8 text-[#E5C365] mx-auto" />
              <h3 className="font-serif text-lg font-bold text-white">You Are Subscribed</h3>
              <p className="text-xs text-stone-200">
                A confirmation note has been dispatched to <strong className="text-white">{email}</strong>. Thank you for walking alongside our girls.
              </p>
              <button
                onClick={() => {
                  setStatus('idle');
                  setEmail('');
                }}
                className="mt-3 text-xs text-[#E5C365] hover:underline cursor-pointer"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 text-sm rounded-md bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E5C365]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-bold text-[#3E1024] bg-[#E5C365] hover:bg-[#d4af37] rounded-md transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Consent and Privacy Assurance */}
              <div className="flex items-start justify-center gap-2 text-[11px] text-[#F5EFEB]/70">
                <ShieldCheck className="w-4 h-4 text-[#E5C365] shrink-0 mt-0.5" />
                <span>
                  We respect your privacy. In accordance with GDPR and child safety guidelines, your data is never traded or shared. Unsubscribe anytime.
                </span>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};
