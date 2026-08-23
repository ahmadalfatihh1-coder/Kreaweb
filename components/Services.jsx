'use client';

import { useState } from 'react';
import { Store, Building2, Briefcase, HeartHandshake, Rocket } from 'lucide-react';

const CATEGORIES = [
  {
    id: '01',
    icon: Store,
    label: 'WEBSITE UMKM',
    untuk: ['Toko', 'Restoran', 'Penyedia jasa', 'Toko Online/offline', 'Usaha Travel'],
    fitur: ['WhatsApp', 'Google Maps', 'Produk / layanan', 'Kontak'],
  },
  {
    id: '02',
    icon: Building2,
    label: 'COMPANY PROFILE',
    untuk: ['Perusahaan', 'Agency', 'Startup', 'Organisasi'],
    fitur: ['Tentang perusahaan', 'Layanan', 'Portfolio', 'Team', 'Contact'],
  },
  {
    id: '03',
    icon: Briefcase,
    label: 'PORTFOLIO',
    untuk: ['Freelancer', 'Kreator', 'Designer', 'Developer', 'Profesional'],
    fitur: ['Project', 'Skill', 'About', 'Contact', 'Social media'],
  },
  {
    id: '04',
    icon: HeartHandshake,
    label: 'YAYASAN / ORGANISASI',
    untuk: ['Yayasan', 'Komunitas', 'Organisasi'],
    fitur: ['Tentang', 'Program', 'Dokumentasi', 'Kontak', 'Donasi jika diperlukan'],
  },
  {
    id: '05',
    icon: Rocket,
    label: 'LANDING PAGE',
    untuk: ['Produk', 'Campaign', 'Event', 'Marketing'],
    fitur: ['Conversion', 'CTA', 'Copywriting', 'Product information'],
    highlight: true,
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section id="layanan" className="bg-white py-16 md:py-24 dark:bg-[#0b1220]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-[760px] text-center md:mb-14">
          <h2 className="text-[32px] font-bold leading-[1.2] text-[#0f172a] sm:text-[40px] md:text-[48px] dark:text-white">
            Website untuk berbagai kebutuhan bisnis.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-500 md:text-[16px] dark:text-slate-400">
            Desain dan fitur disesuaikan dengan kebutuhan bisnis Anda.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            const isActive = active === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => setActive(isActive ? null : cat.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActive(isActive ? null : cat.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                className={`group cursor-pointer rounded-2xl border p-5 transition-all duration-300 ${
                  isActive
                    ? 'border-[#3b82f6] bg-[#e0edff] shadow-[0_4px_20px_rgba(59,130,246,0.15)] ring-1 ring-[#3b82f6]/30'
                    : 'border-slate-200 bg-white hover:border-[#3b82f6] hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] hover:-translate-y-0.5 dark:border-slate-800 dark:bg-[#111a2e]'
                }`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {/* Header */}
                <div className="mb-3 flex items-start justify-between gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="text-[#3b82f6]">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>
                    <div>
                      <span
                        className={`text-[11px] font-semibold tracking-wider transition-colors ${
                          isActive ? 'text-[#3b82f6]' : 'text-[#3b82f6]/50'
                        }`}
                      >
                        {cat.id}
                      </span>
                      <p className="text-[14px] font-semibold leading-tight text-[#0f172a] dark:text-white">
                        {cat.label}
                      </p>
                    </div>
                  </div>
                  {i === 0 && (
                    <span className="text-[11px] font-medium text-[#3b82f6]">
                      Ketuk untuk detail
                    </span>
                  )}
                </div>

                {/* Content — always visible compact, expand on active */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isActive ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 sm:max-h-[120px] sm:opacity-100'
                  }`}
                >
                  <div className="space-y-3 pt-1">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Untuk:
                      </span>
                      <ul className="mt-1 flex flex-wrap gap-1">
                        {cat.untuk.map((u) => (
                          <li
                            key={u}
                            className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[11px] text-slate-500 dark:border-slate-700 dark:bg-[#1a2338] dark:text-slate-300"
                          >
                            {u}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Contoh fitur:
                      </span>
                      <ul className="mt-1 flex flex-wrap gap-1">
                        {cat.fitur.map((f) => (
                          <li
                            key={f}
                            className="rounded-full bg-slate-50 px-2.5 py-0.5 text-[11px] text-slate-600 dark:bg-[#1a2338] dark:text-slate-300"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Toggle indicator */}
                <button
                  className="mt-2 text-[12px] font-medium text-accent sm:hidden"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  {isActive ? 'Tutup' : 'Detail'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}