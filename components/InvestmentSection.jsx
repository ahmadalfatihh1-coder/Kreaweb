'use client';

import { Search, Shield, Clock } from 'lucide-react';

const POINTS = [
  {
    id: '01',
    icon: Search,
    title: 'Buat Bisnis Lebih Mudah Ditemukan',
    description: 'Calon pelanggan lebih mudah menemukan bisnis Anda melalui mesin pencari.',
    examples: ['Alamat', 'Layanan', 'Produk', 'Kontak'],
  },
  {
    id: '02',
    icon: Shield,
    title: 'Bangun Kesan Profesional',
    description: 'Kesan profesional membuat calon pelanggan lebih yakin untuk membeli.',
  },
  {
    id: '03',
    icon: Clock,
    title: 'Bisnis Anda Tetap Online',
    description: 'Bisnis Anda tetap online 24/7, tanpa pelanggan harus menunggu admin.',
  },
];

export default function InvestmentSection() {
  return (
    <section className="bg-[#f8fafc] py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#3b82f6]">
              LEBIH DARI SEKADAR WEBSITE
            </span>
            <h2 className="mt-3 text-[26px] font-bold leading-[1.2] text-[#0f172a] sm:text-[32px] md:text-[38px]">
              Website yang bagus bukan sekadar pengeluaran.
              <br />
              <span className="text-[#3b82f6]">Ini adalah investasi</span> untuk brand Anda.
            </h2>
            <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-slate-500 md:text-[16px]">
              Website adalah tempat calon pelanggan mengenal bisnis Anda dan memutuskan apakah
              layak dipercaya.
            </p>

            {/* 3 Points */}
            <div className="mt-8 space-y-6">
              {POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.id} className="flex gap-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3b82f6] text-white shadow-[0_2px_8px_rgba(59,130,246,0.3)]">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-semibold text-[#0f172a]">
                        {point.title}
                      </h3>
                      <p className="mt-1 text-[14px] leading-relaxed text-slate-500">
                        {point.description}
                      </p>
                      {point.examples && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {point.examples.map((ex) => (
                            <span
                              key={ex}
                              className="rounded-full border border-slate-200 bg-white px-3 py-0.5 text-[12px] text-slate-500"
                            >
                              {ex}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Visual / Mockup */}
          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto max-w-[480px]">
              {/* Browser mockup */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-3 h-3 w-48 rounded bg-slate-200" />
                </div>
                <div className="space-y-3 p-5">
                  <div className="space-y-2 rounded-lg bg-[#f8fafc] p-4">
                    <div className="h-3 w-2/3 rounded bg-slate-200" />
                    <div className="h-2 w-full rounded bg-slate-100" />
                    <div className="h-2 w-5/6 rounded bg-slate-100" />
                  </div>
                  <div className="flex gap-3">
                    <div className="h-20 flex-1 rounded-lg border border-slate-100 bg-white p-3">
                      <div className="h-3 w-1/2 rounded bg-slate-100" />
                      <div className="mt-2 h-3 w-3/4 rounded bg-slate-200" />
                    </div>
                    <div className="h-20 flex-1 rounded-lg border border-slate-100 bg-white p-3">
                      <div className="h-3 w-1/2 rounded bg-slate-100" />
                      <div className="mt-2 h-3 w-3/4 rounded bg-slate-200" />
                    </div>
                  </div>
                  <div className="h-16 rounded-lg bg-[#f8fafc]" />
                </div>
              </div>

              {/* Floating small card */}
              <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.06)] md:block">
                <span className="text-[12px] font-medium text-slate-400">Online 24/7</span>
                <p className="text-[14px] font-semibold text-[#0f172a]">Selalu Dapat Diakses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}