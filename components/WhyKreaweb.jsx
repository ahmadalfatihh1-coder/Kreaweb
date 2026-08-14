'use client';

import { useState } from 'react';
import { Pencil, Clock, Banknote, Link2, FileText, Smartphone } from 'lucide-react';

const BENEFITS = [
  {
    id: '01',
    icon: Pencil,
    title: 'Revisi Tak Terbatas',
    description: 'Revisi sampai desain dan website sesuai kebutuhan Anda.',
  },
  {
    id: '02',
    icon: Clock,
    title: 'Selesai Dalam 4–7 Hari',
    description: 'Website cepat selesai tanpa mengorbankan kualitas.',
  },
  {
    id: '03',
    icon: Banknote,
    title: 'Mulai Dari 1 Jutaan',
    description: 'Harga terjangkau, sudah termasuk domain, hosting, dan SEO dasar.',
  },
  {
    id: '04',
    icon: Link2,
    title: 'Terhubung Dengan Tools Anda',
    description: 'Terhubung dengan WhatsApp, Google Maps, Instagram, email, dan lainnya.',
  },
  {
    id: '05',
    icon: FileText,
    title: 'Bukan Sekadar Website Bagus',
    description: 'Copywriting dibuat sebaik mungkin agar mudah dipahami calon pelanggan.',
  },
  
];

export default function WhyKreaweb() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section id="keunggulan" className="bg-[#0f2a4a] py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        {/* Eyebrow + Headline */}
        <div className="mx-auto mb-10 max-w-[640px] text-center md:mb-14">
          <span className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#3b82f6]">
            KENAPA KREAWEB?
          </span>
          <h2 className="mt-3 text-[26px] font-bold leading-[1.2] text-white sm:text-[32px] md:text-[38px]">
            Website profesional tanpa proses yang ribet.
          </h2>
        </div>

        {/* Cards Grid — 2 cols mobile, 3 cols desktop */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            const isActive = activeId === benefit.id;

            return (
              <button
                key={benefit.id}
                type="button"
                onClick={() => setActiveId(isActive ? null : benefit.id)}
                aria-pressed={isActive}
                className={`group flex flex-col items-start gap-3 rounded-2xl border bg-[#0e2947] p-5 text-left transition-all duration-300 ease-out will-change-transform sm:p-6 ${
                  isActive
                    ? '-translate-y-1 border-[#3b82f6] shadow-[0_18px_35px_-12px_rgba(59,130,246,0.5)] ring-1 ring-[#3b82f6]/50'
                    : 'border-[#1e3a5f] hover:-translate-y-1 hover:border-[#25D366] hover:shadow-[0_18px_35px_-12px_rgba(37,211,102,0.35)] active:-translate-y-0.5'
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-300 ${
                      isActive ? 'bg-[#25D366] text-white' : 'bg-[#3b82f6]/15 text-[#60a5fa] group-hover:bg-[#25D366]/20 group-hover:text-[#4ade80]'
                    }`}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <span
                    className={`text-[13px] font-semibold transition-colors duration-300 ${
                      isActive ? 'text-[#3b82f6]' : 'text-[#3b82f6]/40 group-hover:text-[#25D366]'
                    }`}
                  >
                    {benefit.id}
                  </span>
                </div>

                <div>
                  <h3 className="text-[16px] font-semibold leading-snug text-white sm:text-[17px]">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-[#a8c3e0]">
                    {benefit.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}