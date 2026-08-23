'use client';

import { Search, Shield, Clock, TrendingUp, Globe, ShieldCheck } from 'lucide-react';

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

const FACTS = [
  {
    id: 'f1',
    stat: '75%',
    label: 'Konsumen menilai bisnis dari website',
    icon: TrendingUp,
  },
  {
    id: 'f2',
    stat: '24/7',
    label: 'Bisnis selalu online & bisa ditemukan',
    icon: Globe,
  },
  {
    id: 'f3',
    stat: '2×',
    label: 'Lebih dipercaya calon pembeli',
    icon: ShieldCheck,
  },
];

export default function InvestmentSection() {
  return (
    <section id="investasi" className="scroll-mt-24 bg-[#f8fafc] py-16 md:py-24 dark:bg-[#0b1220]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="mt-3 text-[32px] font-bold leading-[1.2] text-[#0f172a] sm:text-[40px] md:text-[48px] dark:text-white">
              Website yang bagus bukan sekadar pengeluaran.
              <br />
              <span className="text-[#3b82f6]">Ini adalah investasi</span> untuk brand Anda.
            </h2>
            <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-slate-500 md:text-[16px] dark:text-slate-400">
              Website adalah tempat calon pelanggan mengenal bisnis Anda dan memutuskan apakah
              layak dipercaya.
            </p>

            {/* 3 Points */}
            <div className="mt-8 space-y-6">
              {POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.id} className="flex gap-4">
                    <div className="mt-0.5 shrink-0 text-[#3b82f6]">
                      <Icon size={26} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-semibold text-[#0f172a] dark:text-white">
                        {point.title}
                      </h3>
                      <p className="mt-1 text-[14px] leading-relaxed text-slate-500 dark:text-slate-400">
                        {point.description}
                      </p>
                      {point.examples && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {point.examples.map((ex) => (
                            <span
                              key={ex}
                              className="rounded-full border border-slate-200 bg-white px-3 py-0.5 text-[12px] text-slate-500 dark:border-slate-700 dark:bg-[#1a2338] dark:text-slate-300"
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

          {/* Right: Fact bubbles */}
          <div className="w-full lg:w-1/2">
            {/* Fact bubbles — mobile first, besar memenuhi kotak */}
            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
              {FACTS.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={fact.id}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_30px_-16px_rgba(15,42,74,0.28)] sm:flex-col sm:items-start sm:gap-4 sm:p-5 dark:border-slate-800 dark:bg-[#111a2e]"
                  >
                    <span className="shrink-0 text-[#3b82f6]">
                      <Icon size={28} strokeWidth={1.8} />
                    </span>
                    <span className="leading-tight">
                      <span className="block text-[24px] font-extrabold leading-none text-[#0f172a] sm:text-[30px] dark:text-white">
                        {fact.stat}
                      </span>
                      <span className="mt-1 block text-[13px] font-medium text-slate-600 sm:text-[14px] dark:text-slate-400">
                        {fact.label}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}