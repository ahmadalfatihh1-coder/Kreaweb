'use client';

import { useState } from 'react';
import { Clock, Banknote, RefreshCw, Monitor, Search, Puzzle } from 'lucide-react';

const TRUST_ITEMS = [
  {
    id: 'hari',
    icon: Clock,
    value: '4–7 Hari',
    label: 'Pengerjaan Website',
  },
  {
    id: 'harga',
    icon: Banknote,
    value: '1 Jutaan',
    label: 'Harga Mulai',
  },
  {
    id: 'revisi',
    icon: RefreshCw,
    value: 'Unlimited',
    label: 'Revisi Selama Pengerjaan',
  },
  {
    id: 'responsive',
    icon: Monitor,
    value: 'Responsive',
    label: 'Mobile & Desktop',
  },
  {
    id: 'seo',
    icon: Search,
    value: 'SEO Dasar',
    label: 'Sudah Termasuk',
  },
  {
    id: 'integrasi',
    icon: Puzzle,
    value: 'Integrasi',
    label: 'WhatsApp, Maps, Social Media, Email',
  },
];

export default function TrustBar() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="border-y border-[#1e3a5f] bg-[#0f2a4a] py-8 md:py-10">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        {/* Grid: 2 cols on mobile, 3 on md, 6 on lg */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(isActive ? null : item.id)}
                aria-pressed={isActive}
                className={`group flex flex-col items-center gap-2 rounded-2xl border bg-[#0e2947] p-4 text-center transition-all duration-300 ease-out will-change-transform md:p-5 ${
                  isActive
                    ? '-translate-y-2 border-[#3b82f6] shadow-[0_18px_35px_-12px_rgba(59,130,246,0.5)] ring-1 ring-[#3b82f6]/50'
                    : 'border-[#1e3a5f] hover:-translate-y-2 hover:border-[#25D366] hover:shadow-[0_18px_35px_-12px_rgba(37,211,102,0.35)] active:-translate-y-1.5'
                }`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 ${
                    isActive ? 'bg-[#25D366] text-white' : 'bg-[#3b82f6]/15 text-[#60a5fa] group-hover:bg-[#25D366]/20 group-hover:text-[#4ade80]'
                  }`}
                >
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>

                <span className="text-[15px] font-semibold leading-tight text-white md:text-[16px]">
                  {item.value}
                </span>

                <span className="text-[12px] leading-snug text-[#a8c3e0] md:text-[13px]">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}