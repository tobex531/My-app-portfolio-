import React, { useState } from 'react';
import { CURRENCY_SYMBOLS } from '../../data/foundationData';
import { X, Lock, CheckCircle2, ShieldCheck, Copy, Download, Heart, ArrowRight, Building, Smartphone, CreditCard } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  donationDetails: {
    tierTitle: string;
    amount: number;
    currency: string;
    frequency: 'one-time' | 'monthly' | 'annually';
    provider: string;
  };
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  donationDetails
}) => {
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [receiptRef, setReceiptRef] = useState('');

  if (!isOpen) return null;

  const symbol = CURRENCY_SYMBOLS[donationDetails.currency] || '$';

  const handleCopyBank = () => {
    navigator.clipboard.writeText('0123456789 - Zenith Bank PLC (Tobex Foundation Operational Account)');
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  const handleCompletePayment = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `TBX-TXN-${Math.floor(10000000 + Math.random() * 90000000)}`;
    setReceiptRef(ref);
    setPaymentSuccess(true);
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl my-8 bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#3E1024] text-white p-6 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#E5C365] font-semibold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" />
              <span>Secure Donor Checkout</span>
            </div>
            <h2 className="font-serif text-2xl font-bold mt-1">
              Support Tobex Foundation
            </h2>
            <p className="text-xs text-stone-200 mt-0.5">
              {donationDetails.tierTitle} · {donationDetails.frequency}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-stone-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close checkout modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {paymentSuccess ? (
            /* Successful Receipt View */
            <div className="space-y-6">
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Thank You for Your Generosity!
                </h3>
                <p className="text-xs text-stone-600 mt-1 max-w-md mx-auto">
                  Your pledge directly empowers girls with education, safety, and mentorship. A formal tax receipt has been generated below.
                </p>
              </div>

              {/* Printable Receipt Card */}
              <div className="p-5 rounded-xl bg-[#FAF7F2] border border-stone-300 space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Official Receipt Ref:</span>
                  <span className="font-bold text-stone-900">{receiptRef}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Beneficiary Organisation:</span>
                  <span className="font-bold text-stone-900">Tobex Foundation</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Donor Name:</span>
                  <span className="font-bold text-stone-900">{anonymous ? 'Anonymous Benefactor' : donorName || 'Valued Donor'}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Donor Email:</span>
                  <span className="font-bold text-stone-900">{donorEmail || 'on-record'}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Giving Frequency:</span>
                  <span className="font-bold text-stone-900 capitalize">{donationDetails.frequency}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Amount Committed:</span>
                  <span className="font-bold text-base text-[#3E1024]">
                    {symbol}{donationDetails.amount.toLocaleString()} {donationDetails.currency}
                  </span>
                </div>
                <div className="pt-2 text-[11px] text-stone-500 space-y-1 font-sans">
                  <div className="flex justify-between">
                    <span>Direct School Tuition & Kit Aid (85%):</span>
                    <span className="font-bold text-stone-800">{symbol}{(donationDetails.amount * 0.85).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Child Safeguarding & Monitoring (10%):</span>
                    <span className="font-bold text-stone-800">{symbol}{(donationDetails.amount * 0.10).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Administrative & Regulatory Filing (5%):</span>
                    <span className="font-bold text-stone-800">{symbol}{(donationDetails.amount * 0.05).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrintReceipt}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-800 bg-white border border-stone-300 rounded-md hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download / Print Receipt</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2.5 text-xs font-bold text-white bg-[#3E1024] hover:bg-[#581834] rounded-md transition-colors cursor-pointer"
                >
                  Return to Foundation
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form View */
            <form onSubmit={handleCompletePayment} className="space-y-6">
              
              {/* Summary box */}
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-500 block">Total Contribution:</span>
                  <span className="font-serif text-2xl font-bold text-[#3E1024]">
                    {symbol}{donationDetails.amount.toLocaleString()} {donationDetails.currency}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs bg-white border border-stone-200 px-2 py-0.5 rounded font-semibold text-stone-700 capitalize">
                    {donationDetails.frequency}
                  </span>
                  <span className="block text-[11px] text-stone-500 mt-1 capitalize">
                    Via {donationDetails.provider}
                  </span>
                </div>
              </div>

              {/* Direct Bank Wire Instructions */}
              {donationDetails.provider === 'bank' ? (
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-900">
                    <Building className="w-4 h-4 text-[#3E1024]" />
                    <span>Official Bank Remittance Information</span>
                  </div>
                  <p className="text-xs text-stone-600">
                    To make a direct wire or transfer from your Nigerian or international banking app, please remit to our verified institutional account:
                  </p>

                  <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1.5 font-mono text-xs text-stone-800">
                    <div><strong>Bank:</strong> Zenith Bank PLC / Guaranty Trust Bank</div>
                    <div><strong>Account Name:</strong> Tobex Girl-Child Support Foundation</div>
                    <div><strong>NUBAN Account:</strong> 1012345678 (NGN) / 5012345678 (USD Domiciliary)</div>
                    <div><strong>Sort Code:</strong> 057150013</div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyBank}
                    className="inline-flex items-center gap-1.5 text-xs text-[#3E1024] font-semibold hover:underline cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedBank ? 'Account Details Copied!' : 'Copy Bank Account Details'}</span>
                  </button>
                </div>
              ) : (
                /* Card & Mobile Gateway Integration Simulator */
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Donor Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Adebayo Adeleke"
                        value={donorName}
                        onChange={e => setDonorName(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white rounded-md border border-stone-300 focus:outline-none focus:border-[#3E1024]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Receipt Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="donor@example.com"
                        value={donorEmail}
                        onChange={e => setDonorEmail(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white rounded-md border border-stone-300 focus:outline-none focus:border-[#3E1024]"
                      />
                    </div>

                    <div className="pt-1">
                      <label className="flex items-center gap-2 cursor-pointer text-xs text-stone-700">
                        <input
                          type="checkbox"
                          checked={anonymous}
                          onChange={e => setAnonymous(e.target.checked)}
                          className="rounded border-stone-300 text-[#3E1024]"
                        />
                        <span>Make my gift anonymous on public donor rolls</span>
                      </label>
                    </div>
                  </div>

                  {/* Channel Reassurance */}
                  <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-600 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-800">Secure Integration Protocol:</strong>
                      <p className="mt-0.5">
                        Transactions are routed via <strong>{donationDetails.provider.toUpperCase()}</strong> PCI-DSS Level 1 compliant gateway. Card tokens are never stored on foundation servers.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#3E1024] hover:bg-[#581834] rounded-md transition-colors shadow-sm cursor-pointer"
                >
                  <Lock className="w-4 h-4 text-[#E5C365]" />
                  <span>
                    Authorize {symbol}{donationDetails.amount.toLocaleString()} Contribution
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-[11px] text-stone-500">
                You will receive a tax-deductible confirmation and quarterly progress report on your sponsored cohort.
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
