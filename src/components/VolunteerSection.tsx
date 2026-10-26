import React, { useState } from 'react';
import { CheckCircle2, HeartHandshake, ShieldCheck, Send, Sparkles, Building, UserCheck } from 'lucide-react';

export const VolunteerSection: React.FC = () => {
  const [role, setRole] = useState<'mentor' | 'volunteer' | 'partner' | 'sponsor' | 'advocate'>('mentor');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cityCountry: '',
    profession: '',
    hoursPerWeek: '2-4 hours',
    motivation: '',
    safeguardingAgreement: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.safeguardingAgreement) return;
    
    // Generate verified reference ID
    const ref = `TOBEX-VOL-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionId(ref);
    setIsSubmitted(true);
  };

  return (
    <section id="get-involved" className="py-20 lg:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3E1024] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
            <span>Community Partnership & Volunteering</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241E20] leading-tight text-balance">
            Lend Your Time, Skills, and Passion.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Financial support is vital, but lasting social impact also demands mentors, educators, corporate partners, and grassroots advocates who stand alongside our girls.
          </p>
        </div>

        {/* 2-Column Split: Opportunities vs Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 5 Involvement Tracks */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">
              Ways You Can Make a Difference
            </h3>

            <div
              onClick={() => setRole('mentor')}
              className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                role === 'mentor'
                  ? 'border-[#3E1024] bg-[#FAF7F2] shadow-xs'
                  : 'border-stone-200 hover:border-stone-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#3E1024]/10 text-[#3E1024] shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Become a Mentor</h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Provide bi-weekly guidance to an adolescent girl in STEM, academics, or leadership.
                  </p>
                </div>
              </div>
            </div>

            <div
              onClick={() => setRole('volunteer')}
              className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                role === 'volunteer'
                  ? 'border-[#3E1024] bg-[#FAF7F2] shadow-xs'
                  : 'border-stone-200 hover:border-stone-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#1B4332]/10 text-[#1B4332] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Volunteer Educator / Tutor</h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Lead literacy coaching, remedial STEM sessions, or life skills workshops.
                  </p>
                </div>
              </div>
            </div>

            <div
              onClick={() => setRole('partner')}
              className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                role === 'partner'
                  ? 'border-[#3E1024] bg-[#FAF7F2] shadow-xs'
                  : 'border-stone-200 hover:border-stone-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#C59B27]/10 text-[#C59B27] shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Corporate & Institutional Partner</h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Align your corporate CSR with accredited girls education initiatives and digital equipment donations.
                  </p>
                </div>
              </div>
            </div>

            <div
              onClick={() => setRole('sponsor')}
              className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                role === 'sponsor'
                  ? 'border-[#3E1024] bg-[#FAF7F2] shadow-xs'
                  : 'border-stone-200 hover:border-stone-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#D9777F]/10 text-[#D9777F] shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Sponsor an Entire School Cohort</h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Underwrite an annual cohort of 25–50 girls with complete tuition, uniforms, and books.
                  </p>
                </div>
              </div>
            </div>

            {/* Child Safeguarding Vetting Notice */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3 text-xs text-stone-600">
              <ShieldCheck className="w-5 h-5 text-[#1B4332] shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-800">Child Safeguarding Mandate:</strong>
                <p className="mt-0.5">
                  All volunteer mentors and tutors are required to submit identity verification, pass police character checks, and adhere to our zero-tolerance Child Safeguarding Code of Conduct.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Application Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-12 px-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Thank You for Stepping Forward!
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  We have received your application to join as a <span className="font-semibold text-stone-900 capitalize">{role}</span>. Our volunteer coordination team will review your submission and contact you within 3 business days for onboarding.
                </p>
                <div className="p-3 bg-white rounded-lg border border-stone-200 inline-block font-mono text-xs text-stone-700">
                  Application Reference: <strong className="text-[#3E1024]">{submissionId}</strong>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        cityCountry: '',
                        profession: '',
                        hoursPerWeek: '2-4 hours',
                        motivation: '',
                        safeguardingAgreement: false
                      });
                    }}
                    className="text-xs font-semibold text-[#3E1024] hover:underline cursor-pointer"
                  >
                    Submit Another Application / Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    Application / Partnership Inquiry
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Selected Track: <strong className="text-[#3E1024] capitalize">{role}</strong>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Ngozi Balogun"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-md border border-stone-300 focus:outline-none focus:border-[#3E1024] focus:ring-1 focus:ring-[#3E1024]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ngozi@example.org"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-md border border-stone-300 focus:outline-none focus:border-[#3E1024] focus:ring-1 focus:ring-[#3E1024]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-md border border-stone-300 focus:outline-none focus:border-[#3E1024] focus:ring-1 focus:ring-[#3E1024]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Location (City, Country) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lagos, Nigeria / London, UK"
                      value={formData.cityCountry}
                      onChange={e => setFormData({ ...formData, cityCountry: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-md border border-stone-300 focus:outline-none focus:border-[#3E1024] focus:ring-1 focus:ring-[#3E1024]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Profession / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Biochemical Researcher / Tech Lead"
                      value={formData.profession}
                      onChange={e => setFormData({ ...formData, profession: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-md border border-stone-300 focus:outline-none focus:border-[#3E1024] focus:ring-1 focus:ring-[#3E1024]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Weekly Time Availability
                    </label>
                    <select
                      value={formData.hoursPerWeek}
                      onChange={e => setFormData({ ...formData, hoursPerWeek: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-md border border-stone-300 focus:outline-none focus:border-[#3E1024] focus:ring-1 focus:ring-[#3E1024]"
                    >
                      <option value="1-2 hours">1–2 hours / week</option>
                      <option value="2-4 hours">2–4 hours / week</option>
                      <option value="5+ hours">5+ hours / week</option>
                      <option value="institutional">Institutional Partnership / CSR</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Motivation & Relevant Experience
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us briefly why you want to support our mission and how your background will benefit the girls..."
                    value={formData.motivation}
                    onChange={e => setFormData({ ...formData, motivation: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-md border border-stone-300 focus:outline-none focus:border-[#3E1024] focus:ring-1 focus:ring-[#3E1024]"
                  />
                </div>

                {/* Consent & Safeguarding checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-stone-700">
                    <input
                      type="checkbox"
                      required
                      checked={formData.safeguardingAgreement}
                      onChange={e => setFormData({ ...formData, safeguardingAgreement: e.target.checked })}
                      className="mt-0.5 rounded border-stone-300 text-[#3E1024] focus:ring-[#3E1024]"
                    />
                    <span>
                      I affirm my commitment to child safeguarding principles. I consent to undergo standard background checks and identity verification prior to working with children.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#3E1024] hover:bg-[#581834] rounded-md transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
