import React from 'react';
import { IMPACT_METRICS } from '../data/foundationData';
import { ArrowUpRight, BarChart3, CheckCircle2, FileCheck, Layers, PieChart, ShieldAlert } from 'lucide-react';

interface ImpactSectionProps {
  onOpenTransparency: () => void;
  onOpenDonate: () => void;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({
  onOpenTransparency,
  onOpenDonate
}) => {
  return (
    <section id="impact" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3E1024] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1B4332]" />
            <span>Impact & Rigorous Transparency</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241E20] leading-tight text-balance">
            Evidence-Based Progress, Uncompromising Accountability
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Every figure represents a real girl whose academic journey was protected. We document attendance, monitor academic retention, and publish our financial allocations openly.
          </p>
        </div>

        {/* Central Quote Callout */}
        <div className="mb-14 p-8 rounded-xl bg-gradient-to-r from-[#3E1024] to-[#581834] text-white shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#E5C365] font-semibold">
              Our Core Promise to Donors & Beneficiaries
            </span>
            <p className="mt-3 font-serif text-2xl sm:text-3xl font-medium leading-snug">
              “Every contribution creates an opportunity. Every opportunity can change a future.”
            </p>
            <p className="mt-4 text-xs sm:text-sm text-stone-200">
              Tobex Foundation maintains a direct-impact pipeline where learning kits and bursaries are paid directly to certified partner schools and verified suppliers.
            </p>
          </div>
          <div className="absolute right-0 top-0 bottom-0 opacity-10 flex items-center pr-12 pointer-events-none">
            <Layers className="w-64 h-64 text-white" />
          </div>
        </div>

        {/* 5 Verified Impact Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {IMPACT_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl lg:text-4xl font-bold font-serif text-[#3E1024] tabular-nums tracking-tight">
                  {metric.value}
                </div>
                <h3 className="text-sm font-bold text-stone-900 mt-2">
                  {metric.label}
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  {metric.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-[11px] text-[#1B4332] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{metric.verifiedStatus}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Financial Transparency & Allocation Strip */}
        <div className="p-8 rounded-xl bg-white border border-stone-200 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1B4332] uppercase tracking-wider mb-1">
                <PieChart className="w-4 h-4" />
                <span>Financial Allocation Framework</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Where Every Dollar & Naira Goes
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
                We believe total transparency builds lasting donor confidence. Over 85% of all funds directly underwrite student tuition, uniforms, books, and dignity packages.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenTransparency}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#3E1024] bg-stone-100 hover:bg-stone-200 rounded-md transition-colors cursor-pointer"
              >
                <FileCheck className="w-4 h-4" />
                <span>View Full Audit & Charter</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Allocation Progress Bar */}
          <div className="space-y-4">
            <div className="w-full h-5 rounded-full overflow-hidden flex bg-stone-100 p-0.5 border border-stone-200">
              <div
                className="bg-[#3E1024] h-full rounded-l-full transition-all duration-700"
                style={{ width: '85%' }}
                title="85% Direct Educational & Welfare Aid"
              />
              <div
                className="bg-[#1B4332] h-full transition-all duration-700"
                style={{ width: '10%' }}
                title="10% Safeguarding, Verification & Field Monitoring"
              />
              <div
                className="bg-[#C59B27] h-full rounded-r-full transition-all duration-700"
                style={{ width: '5%' }}
                title="5% Administrative Stewardship & Audit"
              />
            </div>

            {/* Legend */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <span className="w-3.5 h-3.5 rounded-sm bg-[#3E1024] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900">85% Direct Beneficiary Support</span>
                  <p className="text-stone-500 text-[11px]">Tuition bursaries, textbooks, school uniforms, menstrual kits</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-3.5 h-3.5 rounded-sm bg-[#1B4332] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900">10% Safeguarding & Field Monitoring</span>
                  <p className="text-stone-500 text-[11px]">School attendance verification, background checks, mentor vetting</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-3.5 h-3.5 rounded-sm bg-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900">5% Governance & Administration</span>
                  <p className="text-stone-500 text-[11px]">Statutory audits, software licenses, regulatory transparency</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ethical Reporting Footnote */}
        <div className="mt-8 text-center text-xs text-stone-500 flex items-center justify-center gap-2">
          <ShieldAlert className="w-3.5 h-3.5 text-[#C59B27]" />
          <span>Notice: Metric figures represent audited aggregate beneficiary records across 2024–2026 partner institutions. Full audited books are furnished to recognized donors upon request.</span>
        </div>

      </div>
    </section>
  );
};
