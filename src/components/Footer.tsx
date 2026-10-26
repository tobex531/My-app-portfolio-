import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenDonate: () => void;
  onOpenSafeguarding: () => void;
  onOpenPrivacy: () => void;
  onOpenTransparency: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDonate,
  onOpenSafeguarding,
  onOpenPrivacy,
  onOpenTransparency
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#200711] text-[#F5EFEB] border-t border-[#3E1024]">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="/"
              className="font-serif text-2xl font-bold tracking-tight text-white hover:text-[#E8A598] transition-colors inline-block"
            >
              Tobex Foundation
            </a>
            <p className="text-xs uppercase tracking-widest text-[#E5C365] font-semibold">
              Every Girl Deserves a Future.
            </p>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pr-4">
              Dedicated to empowering girls, protecting their rights, promoting education, supporting vulnerable children, and creating lasting opportunities for the next generation to thrive in dignity and safety.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenDonate}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#3E1024] hover:bg-[#581834] rounded-md transition-colors cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 fill-[#E8A598] text-[#E8A598]" />
                <span>Support Our Work</span>
              </button>
            </div>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5C365]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('programmes')} className="hover:text-white transition-colors cursor-pointer">
                  Programmes
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('impact')} className="hover:text-white transition-colors cursor-pointer">
                  Impact & Audit
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('stories')} className="hover:text-white transition-colors cursor-pointer">
                  Stories of Hope
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('get-involved')} className="hover:text-white transition-colors cursor-pointer">
                  Get Involved
                </button>
              </li>
            </ul>
          </div>

          {/* Core Programmes (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5C365]">
              Core Initiatives
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
              <li>
                <button onClick={() => scrollTo('programmes')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Education for Every Girl
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('programmes')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Girl-Child Protection & Wellbeing
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('programmes')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Mentorship & Leadership Circles
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('programmes')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Health & Menstrual Dignity
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('programmes')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Digital Skills & STEM Pathways
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Field Locations (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5C365]">
              Contact & Inquiries
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#E8A598] shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@tobexfoundation.org" className="hover:text-white transition-colors block">
                    info@tobexfoundation.org
                  </a>
                  <a href="mailto:Tobex531@gmail.com" className="text-stone-400 hover:text-stone-200 block text-[11px]">
                    Tobex531@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#E8A598] shrink-0 mt-0.5" />
                <span>+234 (0) 803 000 0000 [Verified Inquiries Desk]</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E8A598] shrink-0 mt-0.5" />
                <span>
                  Lagos Field Office: Victoria Island / Yaba Hub, Lagos<br />
                  Abuja Advocacy Desk: Central Business District, Abuja, Nigeria
                </span>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E5C365] shrink-0" />
                <span className="text-[11px] text-stone-400">
                  Direct safeguarding reporting: <a href="mailto:safeguarding@tobexfoundation.org" className="text-stone-200 underline">safeguarding@tobexfoundation.org</a>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Back to Top */}
        <div className="mt-12 pt-8 border-t border-[#3E1024]/60 flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-stone-400">
            <span>Follow Our Work:</span>
            <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
            <span className="hover:text-white cursor-pointer transition-colors">Twitter / X</span>
            <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-white cursor-pointer transition-colors">YouTube</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-stone-300 hover:text-white cursor-pointer transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Sub-Footer: Legal & Safeguarding Bar */}
      <div className="bg-[#14030A] py-6 px-4 sm:px-6 lg:px-8 border-t border-[#300C1A] text-xs text-stone-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p>
              © {new Date().getFullYear()} Tobex Foundation. All rights reserved. Every Girl Deserves a Future.
            </p>
            <p className="text-[11px] text-stone-500 mt-0.5">
              [Official Non-Profit Registration Filings & Audited Financial Statements Available on File]
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs">
            <button
              onClick={onOpenSafeguarding}
              className="hover:text-white underline cursor-pointer"
            >
              Child Safeguarding Policy
            </button>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white underline cursor-pointer"
            >
              Privacy & Data Ethics
            </button>
            <button
              onClick={onOpenTransparency}
              className="hover:text-white underline cursor-pointer"
            >
              Transparency & Governance
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
