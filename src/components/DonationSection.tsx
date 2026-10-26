import React, { useState } from 'react';
import { DONATION_TIERS, CURRENCY_SYMBOLS, CURRENCY_RATES } from '../data/foundationData';
import { Check, Heart, Lock, ShieldCheck, CreditCard, Building2, Smartphone, ArrowRight, Info } from 'lucide-react';

interface DonationSectionProps {
  onInitiateDonation: (details: {
    tierTitle: string;
    amount: number;
    currency: string;
    frequency: 'one-time' | 'monthly' | 'annually';
    provider: string;
  }) => void;
}

export const DonationSection: React.FC<DonationSectionProps> = ({ onInitiateDonation }) => {
  const [currency, setCurrency] = useState<'USD' | 'NGN' | 'GBP' | 'EUR'>('USD');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly' | 'annually'>('monthly');
  const [selectedTierId, setSelectedTierId] = useState<string>('tier-kit');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentProvider, setPaymentProvider] = useState<'paystack' | 'flutterwave' | 'card' | 'bank'>('paystack');

  // Compute selected amount
  const selectedTier = DONATION_TIERS.find(t => t.id === selectedTierId);
  const getTierAmount = (tier: typeof DONATION_TIERS[0]) => {
    switch (currency) {
      case 'NGN': return tier.amountNGN;
      case 'GBP': return tier.amountGBP;
      case 'EUR': return tier.amountEUR;
      default: return tier.amountUSD;
    }
  };

  const currentAmount = selectedTierId === 'custom'
    ? parseFloat(customAmount) || 0
    : selectedTier ? getTierAmount(selectedTier) : 0;

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedTierId === 'custom' && (!customAmount || parseFloat(customAmount) <= 0)) {
      return;
    }
    const tierTitle = selectedTierId === 'custom'
      ? 'Custom Supporter Contribution'
      : (selectedTier?.title || 'General Support');

    onInitiateDonation({
      tierTitle,
      amount: currentAmount,
      currency,
      frequency,
      provider: paymentProvider
    });
  };

  return (
    <section id="donate" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3E1024] mb-3">
            <Heart className="w-3.5 h-3.5 fill-[#E8A598] text-[#3E1024]" />
            <span>Investment in Human Potential</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241E20] leading-tight text-balance">
            Be Part of Her Brighter Future.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed text-balance">
            Your support can help create opportunities, strengthen communities, and open doors for girls who deserve the chance to thrive.
          </p>
        </div>

        {/* Donation Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-stone-200/90 shadow-md p-6 sm:p-10">
          
          <form onSubmit={handleDonateSubmit} className="space-y-8">
            
            {/* Currency & Frequency Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-stone-200">
              
              {/* Frequency Selector */}
              <div className="flex items-center p-1 bg-stone-100 rounded-lg w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  className={`flex-1 sm:flex-none px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    frequency === 'one-time'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  One-Time Gift
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`flex-1 sm:flex-none px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    frequency === 'monthly'
                      ? 'bg-[#3E1024] text-white shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Monthly Support (Recommended)
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('annually')}
                  className={`flex-1 sm:flex-none px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    frequency === 'annually'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Annually
                </button>
              </div>

              {/* Currency Selector */}
              <div className="flex items-center gap-1.5 self-end sm:self-auto">
                <span className="text-xs text-stone-500 font-medium">Currency:</span>
                <div className="flex items-center border border-stone-300 rounded-md overflow-hidden bg-stone-50 text-xs font-semibold">
                  {(['USD', 'NGN', 'GBP', 'EUR'] as const).map(curr => (
                    <button
                      key={curr}
                      type="button"
                      onClick={() => setCurrency(curr)}
                      className={`px-3 py-1.5 transition-colors cursor-pointer ${
                        currency === curr
                          ? 'bg-[#3E1024] text-white'
                          : 'text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Selectable Donation Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DONATION_TIERS.map(tier => {
                const amount = getTierAmount(tier);
                const isSelected = selectedTierId === tier.id;

                return (
                  <div
                    key={tier.id}
                    onClick={() => {
                      setSelectedTierId(tier.id);
                      setCustomAmount('');
                    }}
                    className={`p-5 rounded-xl border text-left cursor-pointer transition-all relative ${
                      isSelected
                        ? 'border-[#3E1024] bg-[#FAF7F2] ring-2 ring-[#3E1024]/20 shadow-xs'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    {tier.isPopular && (
                      <div className="absolute -top-2.5 right-4 bg-[#C59B27] text-white text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded shadow-xs">
                        Most High-Impact
                      </div>
                    )}

                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-sm font-bold text-stone-900">{tier.title}</span>
                      <span className="text-lg font-serif font-bold text-[#3E1024] shrink-0">
                        {CURRENCY_SYMBOLS[currency]}{amount.toLocaleString()}
                        <span className="text-xs font-normal text-stone-500">
                          {frequency === 'monthly' ? '/mo' : frequency === 'annually' ? '/yr' : ''}
                        </span>
                      </span>
                    </div>

                    <p className="text-xs text-stone-600 mb-3">{tier.description}</p>
                    
                    <div className="pt-2 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] font-medium text-[#1B4332]">
                      <Check className="w-3.5 h-3.5 shrink-0" />
                      <span>{tier.impact}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Custom Amount Option */}
            <div
              onClick={() => setSelectedTierId('custom')}
              className={`p-5 rounded-xl border cursor-pointer transition-all ${
                selectedTierId === 'custom'
                  ? 'border-[#3E1024] bg-[#FAF7F2] ring-2 ring-[#3E1024]/20 shadow-xs'
                  : 'border-stone-200 hover:border-stone-300 bg-white'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-sm font-bold text-stone-900">Make a Custom Donation</span>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Choose an amount that fits your giving capacity. Every contribution creates opportunities.
                  </p>
                </div>

                <div className="flex items-center gap-2 max-w-xs w-full sm:w-auto">
                  <span className="text-base font-bold text-stone-700 font-serif">
                    {CURRENCY_SYMBOLS[currency]}
                  </span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      setSelectedTierId('custom');
                      setCustomAmount(e.target.value);
                    }}
                    className="w-full sm:w-40 px-3 py-2 text-sm font-semibold rounded-md border border-stone-300 focus:outline-none focus:border-[#3E1024] focus:ring-1 focus:ring-[#3E1024] bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Payment Options Selection */}
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-3">
                Select Secure Payment Channel
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentProvider('paystack')}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-colors ${
                    paymentProvider === 'paystack'
                      ? 'border-[#3E1024] bg-[#FAF7F2] font-semibold text-[#3E1024]'
                      : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold mb-1">
                    <Smartphone className="w-4 h-4 text-[#00C3F7]" />
                    <span>Paystack</span>
                  </div>
                  <span className="text-[11px] text-stone-500 block leading-tight">Nigeria & West Africa (Card, USSD, Bank)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentProvider('flutterwave')}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-colors ${
                    paymentProvider === 'flutterwave'
                      ? 'border-[#3E1024] bg-[#FAF7F2] font-semibold text-[#3E1024]'
                      : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold mb-1">
                    <CreditCard className="w-4 h-4 text-[#FB9129]" />
                    <span>Flutterwave</span>
                  </div>
                  <span className="text-[11px] text-stone-500 block leading-tight">Pan-African & International</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentProvider('card')}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-colors ${
                    paymentProvider === 'card'
                      ? 'border-[#3E1024] bg-[#FAF7F2] font-semibold text-[#3E1024]'
                      : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold mb-1">
                    <CreditCard className="w-4 h-4 text-stone-700" />
                    <span>Global Card</span>
                  </div>
                  <span className="text-[11px] text-stone-500 block leading-tight">Visa, Mastercard, Amex</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentProvider('bank')}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-colors ${
                    paymentProvider === 'bank'
                      ? 'border-[#3E1024] bg-[#FAF7F2] font-semibold text-[#3E1024]'
                      : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold mb-1">
                    <Building2 className="w-4 h-4 text-stone-700" />
                    <span>Bank Transfer</span>
                  </div>
                  <span className="text-[11px] text-stone-500 block leading-tight">Direct institutional bank deposit</span>
                </button>
              </div>
            </div>

            {/* Donation Summary & CTA */}
            <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left w-full sm:w-auto">
                <span className="text-xs text-stone-500 block">Total Giving Commitment:</span>
                <div className="font-serif text-3xl font-bold text-[#3E1024] tabular-nums">
                  {CURRENCY_SYMBOLS[currency]}{currentAmount.toLocaleString()}
                  <span className="text-sm font-sans font-normal text-stone-600 ml-1.5">
                    {frequency === 'monthly' ? 'every month' : frequency === 'annually' ? 'per year' : 'one-time'}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={currentAmount <= 0}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#3E1024] hover:bg-[#581834] disabled:bg-stone-400 rounded-lg transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
              >
                <Lock className="w-4 h-4 text-[#E5C365]" />
                <span>Complete Secure Donation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Reassurance and Safeguarding Notice */}
            <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1B4332]" />
                <span>256-bit Bank-Grade Encryption & Audit-Certified Recipient Accounts</span>
              </div>
              <div className="flex items-center gap-1 text-[11px]">
                <Info className="w-3.5 h-3.5 text-stone-400" />
                <span>Simulated secure test sandbox enabled. No live charges without your final authorization.</span>
              </div>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
