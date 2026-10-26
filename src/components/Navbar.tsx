import React, { useState } from 'react';
import { Menu, X, Heart, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenDonate: () => void;
  onOpenSafeguarding: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDonate, onOpenSafeguarding }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner: Child Safeguarding Commitment */}
      <div className="bg-[#300C1A] text-[#F5EFEB] text-xs py-2 px-4 border-b border-[#521B30]/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E5C365] shrink-0" />
            <span className="truncate">
              Child Safeguarding & Protection: Every girl in our care is protected by strict ethical standards.
            </span>
          </div>
          <button
            onClick={onOpenSafeguarding}
            className="hover:text-[#E5C365] underline transition-colors whitespace-nowrap shrink-0 text-xs font-medium cursor-pointer"
          >
            Read Our Charter
          </button>
        </div>
      </div>

      {/* Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark (single text element, no pill badges) */}
          <a
            href="/"
            className="font-serif text-2xl lg:text-3xl font-bold tracking-tight text-[#3E1024] hover:text-[#581834] transition-colors whitespace-nowrap shrink-0"
          >
            Tobex Foundation
          </a>

          {/* Zone 2: 4-5 clean single-line nav links with hover underlines */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-700">
            <button
              onClick={() => scrollTo('about')}
              className="hover:text-[#3E1024] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => scrollTo('programmes')}
              className="hover:text-[#3E1024] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Programmes
            </button>
            <button
              onClick={() => scrollTo('impact')}
              className="hover:text-[#3E1024] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Impact
            </button>
            <button
              onClick={() => scrollTo('stories')}
              className="hover:text-[#3E1024] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Stories
            </button>
            <button
              onClick={() => scrollTo('get-involved')}
              className="hover:text-[#3E1024] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Get Involved
            </button>
          </nav>

          {/* Zone 3: 1 primary action button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenDonate}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#3E1024] hover:bg-[#541632] rounded-md transition-colors shadow-sm cursor-pointer whitespace-nowrap shrink-0"
            >
              <Heart className="w-4 h-4 fill-[#E8A598] text-[#E8A598]" />
              Support Our Mission
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-700 hover:text-[#3E1024] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-b border-stone-200 px-6 py-6 shadow-lg">
            <div className="flex flex-col gap-4 text-base font-medium text-stone-800">
              <button
                onClick={() => scrollTo('about')}
                className="text-left py-2 hover:text-[#3E1024] transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollTo('programmes')}
                className="text-left py-2 hover:text-[#3E1024] transition-colors"
              >
                Programmes
              </button>
              <button
                onClick={() => scrollTo('impact')}
                className="text-left py-2 hover:text-[#3E1024] transition-colors"
              >
                Impact & Transparency
              </button>
              <button
                onClick={() => scrollTo('stories')}
                className="text-left py-2 hover:text-[#3E1024] transition-colors"
              >
                Stories of Hope
              </button>
              <button
                onClick={() => scrollTo('get-involved')}
                className="text-left py-2 hover:text-[#3E1024] transition-colors"
              >
                Get Involved & Volunteer
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSafeguarding();
                }}
                className="text-left py-2 text-xs text-stone-500 hover:text-[#3E1024] transition-colors"
              >
                Child Safeguarding Charter
              </button>
              <div className="pt-2 border-t border-stone-200">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDonate();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#3E1024] hover:bg-[#541632] rounded-md transition-colors"
                >
                  <Heart className="w-4 h-4 fill-[#E8A598] text-[#E8A598]" />
                  Support Our Mission
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
