/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProgrammesSection } from './components/ProgrammesSection';
import { ImpactSection } from './components/ImpactSection';
import { StoriesSection } from './components/StoriesSection';
import { DonationSection } from './components/DonationSection';
import { VolunteerSection } from './components/VolunteerSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EventsSection } from './components/EventsSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';

// Modals
import { SafeguardingModal } from './components/modals/SafeguardingModal';
import { ProgrammeModal } from './components/modals/ProgrammeModal';
import { StoryModal } from './components/modals/StoryModal';
import { CheckoutModal } from './components/modals/CheckoutModal';
import { TransparencyModal } from './components/modals/TransparencyModal';
import { EventRsvpModal } from './components/modals/EventRsvpModal';
import { PrivacyModal } from './components/modals/PrivacyModal';

import { Programme, Story, EventItem } from './data/foundationData';
import { Heart, ShieldCheck, X } from 'lucide-react';

export default function App() {
  // Modal states
  const [safeguardingOpen, setSafeguardingOpen] = useState(false);
  const [transparencyOpen, setTransparencyOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [selectedProgramme, setSelectedProgramme] = useState<Programme | null>(null);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // Donation Checkout state
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [donationDetails, setDonationDetails] = useState({
    tierTitle: 'Fund Comprehensive Learning & Dignity Kit',
    amount: 50,
    currency: 'USD',
    frequency: 'monthly' as 'one-time' | 'monthly' | 'annually',
    provider: 'paystack'
  });

  // Cookie and Safeguarding compliance notification
  const [cookieAccepted, setCookieAccepted] = useState(() => {
    return localStorage.getItem('tobex_safeguard_consent') === 'true';
  });

  const handleDismissCookie = () => {
    localStorage.setItem('tobex_safeguard_consent', 'true');
    setCookieAccepted(true);
  };

  const handleOpenDonate = (presetNote?: string) => {
    const el = document.getElementById('donate');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInitiateDonation = (details: typeof donationDetails) => {
    setDonationDetails(details);
    setCheckoutOpen(true);
  };

  const handleExploreImpact = () => {
    const el = document.getElementById('impact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSponsorProgramme = (programmeTitle: string) => {
    setDonationDetails({
      tierTitle: `Dedicated Sponsorship: ${programmeTitle}`,
      amount: 50,
      currency: 'USD',
      frequency: 'monthly',
      provider: 'paystack'
    });
    setCheckoutOpen(true);
  };

  const handleSponsorStory = (storyName: string) => {
    setDonationDetails({
      tierTitle: `Empower Girls Like ${storyName}`,
      amount: 25,
      currency: 'USD',
      frequency: 'monthly',
      provider: 'paystack'
    });
    setCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#241E20] font-sans flex flex-col selection:bg-[#E8A598]/30 selection:text-[#3E1024]">
      {/* Strict 3-zone Header Navigation */}
      <Navbar
        onOpenDonate={() => handleOpenDonate()}
        onOpenSafeguarding={() => setSafeguardingOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenDonate={() => handleOpenDonate()}
          onExploreImpact={handleExploreImpact}
          onOpenSafeguarding={() => setSafeguardingOpen(true)}
        />

        {/* 2. About Us Section */}
        <AboutSection
          onOpenSafeguarding={() => setSafeguardingOpen(true)}
          onOpenTransparency={() => setTransparencyOpen(true)}
        />

        {/* 3. Programmes & Areas of Impact */}
        <ProgrammesSection
          onSelectProgramme={(p) => setSelectedProgramme(p)}
          onOpenDonate={handleOpenDonate}
        />

        {/* 4. Impact & Rigorous Transparency */}
        <ImpactSection
          onOpenTransparency={() => setTransparencyOpen(true)}
          onOpenDonate={() => handleOpenDonate()}
        />

        {/* 5. Stories of Hope */}
        <StoriesSection
          onSelectStory={(s) => setSelectedStory(s)}
          onOpenDonate={handleOpenDonate}
        />

        {/* 6. Donation and Support Section */}
        <DonationSection
          onInitiateDonation={handleInitiateDonation}
        />

        {/* 7. Volunteer & Partnership Section */}
        <VolunteerSection />

        {/* 8. Community Voices & Testimonials */}
        <TestimonialsSection />

        {/* 9. Events & Field Updates */}
        <EventsSection
          onRegisterEvent={(e) => setSelectedEvent(e)}
        />

        {/* 10. Newsletter Subscription */}
        <NewsletterSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onOpenDonate={() => handleOpenDonate()}
        onOpenSafeguarding={() => setSafeguardingOpen(true)}
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTransparency={() => setTransparencyOpen(true)}
      />

      {/* Cookie & Ethical Safeguarding Notice */}
      {!cookieAccepted && (
        <aside
          aria-label="Privacy and Safeguarding Notice"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-[#300C1A] text-white p-4 rounded-xl border border-[#521B30] shadow-2xl animate-fade-in"
        >
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#E5C365] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs">
              <strong className="block text-stone-100 font-bold">
                Child Protection & Privacy Safeguards
              </strong>
              <p className="text-stone-300 leading-relaxed">
                Tobex Foundation uses essential cookies to ensure safe browsing and secure donor contributions. We maintain strict child privacy protections.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={handleDismissCookie}
                  className="px-3 py-1.5 bg-[#E5C365] hover:bg-[#d4af37] text-[#300C1A] font-bold rounded text-xs transition-colors cursor-pointer"
                >
                  Accept & Continue
                </button>
                <button
                  onClick={() => setPrivacyOpen(true)}
                  className="text-stone-300 hover:text-white underline text-xs cursor-pointer"
                >
                  Read Policy
                </button>
              </div>
            </div>
            <button
              onClick={handleDismissCookie}
              className="text-stone-400 hover:text-white p-1 cursor-pointer"
              aria-label="Dismiss cookie notice"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </aside>
      )}

      {/* Interactive Modals */}
      <SafeguardingModal
        isOpen={safeguardingOpen}
        onClose={() => setSafeguardingOpen(false)}
      />

      <ProgrammeModal
        programme={selectedProgramme}
        onClose={() => setSelectedProgramme(null)}
        onSponsor={handleSponsorProgramme}
      />

      <StoryModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
        onSponsor={handleSponsorStory}
      />

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        donationDetails={donationDetails}
      />

      <TransparencyModal
        isOpen={transparencyOpen}
        onClose={() => setTransparencyOpen(false)}
      />

      <EventRsvpModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <PrivacyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
    </div>
  );
}
