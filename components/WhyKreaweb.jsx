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
    description: 'Copywriting dan struktur disusun agar mudah dipahami calon pelanggan.',
  },
  {
    id: '06',
    icon: Smartphone,
    title: 'Nyaman di Semua Perangkat',
    description: 'Tampil profesional di HP, tablet, dan desktop.',
  },
];

export default function WhyKreaweb() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="keunggulan" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        {/* Eyebrow + Headline */}
        <div className="mx-auto mb-10 max-w-[640px] text-center md:mb-14">
          <span className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#3b82f6]">
            KENAPA KREAWEB?
          </span>
          <h2 className="mt-3 text-[26px] font-bold leading-[1.2] text-[#0f172a] sm:text-[32px] md:text-[38px]">
            Website profesional tanpa proses yang ribet.
          </h2>
        </div>

        {/* Cards Grid — 2 cols mobile, 3 cols desktop */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon;
            const isActive = activeCard === benefit.id;
            return (
              <div
                key={benefit.id}
                onClick={() => setActiveCard(isActive ? null : benefit.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveCard(isActive ? null : benefit.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                className={`group cursor-pointer rounded-2xl border p-5 transition-all duration-300 sm:p-6 ${
                  isActive
                    ? 'border-[#3b82f6] bg-[#e0edff] shadow-[0_4px_20px_rgba(59,130,246,0.18)] -translate-y-1'
                    : 'border-slate-200 bg-white hover:border-[#3b82f6] hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(59,130,246,0.12)]'
                }`}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="mb-3 flex items-start justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 ${
                      isActive ? 'bg-[#3b82f6] text-white' : 'bg-[#3b82f6]/10 text-[#3b82f6] group-hover:bg-[#25D366]/15 group-hover:text-[#25D366]'
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <span
                    className={`text-[13px] font-semibold transition-colors duration-300 ${
                      isActive ? 'text-[#3b82f6]' : 'text-[#3b82f6]/40 group-hover:text-[#25D366]'
                    }`}
                  >
                    {benefit.id}
                  </span>
                </div>

                <h3 className="mb-2 text-[16px] font-semibold leading-snug text-[#0f172a] sm:text-[17px]">
                  {benefit.title}
                </h3>

                <p
                  className={`text-[14px] leading-relaxed text-slate-500 transition-all duration-300 ${
                    isActive ? 'line-clamp-none' : 'line-clamp-3'
                  }`}
                >
                  {benefit.description}
                </p>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}