import Link from 'next/link';
import { ArrowRight, Eye } from 'lucide-react';

const FEATURES = [
  'Multi-page (7 halaman)',
  'Menu & harga',
  'WhatsApp order',
  'Google Maps',
  'Responsive mobile',
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[680px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-brightsoft px-4 py-1.5 text-[13px] font-semibold text-accent">
            Hasil Website Kami
          </span>
          <h2 className="mt-4 text-[28px] font-extrabold leading-[1.2] tracking-tight text-[#0f172a] sm:text-[34px] md:text-[40px]">
            Lihat hasil nyata yang bisa kami buat untuk bisnis kamu.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-slate-500">
            Beberapa contoh konsep website dummy yang kami bangun untuk berbagai jenis usaha.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* ===== Card 1 — KULTARA (active) ===== */}
          <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_40px_-20px_rgba(15,42,74,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_50px_-20px_rgba(15,42,74,0.28)]">
            {/* Preview — Kultara dark mockup */}
            <div className="relative bg-[#0b0b0c] p-4">
              <div className="flex items-center gap-1.5 pb-3">
                <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
                <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
              </div>
              <div className="overflow-hidden rounded-lg border border-[#232326] bg-[#141416]">
                {/* mini navbar */}
                <div className="flex items-center justify-between border-b border-[#232326] px-3 py-2">
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px] font-semibold tracking-[0.18em] text-[#f4f1ec]">
                      KULTARA
                    </span>
                    <span className="mt-0.5 text-[5px] uppercase tracking-[0.3em] text-[#6e6b66]">
                      Kuliner Nusantara
                    </span>
                  </div>
                  <span className="rounded-full bg-[#a4161a] px-2 py-0.5 text-[6px] font-semibold text-white">
                    Pesan
                  </span>
                </div>
                {/* mini hero */}
                <div className="space-y-2 px-3 py-4">
                  <div className="h-1.5 w-1/3 rounded bg-[#a4161a]" />
                  <div className="h-3 w-4/5 rounded bg-[#f4f1ec]/90" />
                  <div className="h-3 w-3/5 rounded bg-[#f4f1ec]/90" />
                  <div className="h-1.5 w-full rounded bg-[#3a3936]" />
                  <div className="h-1.5 w-2/3 rounded bg-[#3a3936]" />
                  <div className="mt-2 flex gap-2">
                    <div className="h-5 w-16 rounded-full bg-[#a4161a]" />
                    <div className="h-5 w-16 rounded-full border border-[#232326]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-[20px] font-bold text-[#0f172a]">KULTARA</h3>
                <span className="rounded-full bg-[#fdecec] px-3 py-1 text-[11px] font-semibold text-[#a4161a]">
                  Restoran
                </span>
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
                Website restoran premium dengan tema hitam, putih, dan deep red yang
                sinematik. Menonjolkan menu, harga, lokasi, dan order via WhatsApp.
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full bg-slate-100 px-3 py-1 text-[12px] font-medium text-slate-600"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex-1" />
              <Link
                href="/kultara"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f172a] px-6 py-3 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Eye size={16} />
                Lihat Website
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </article>

          {/* ===== Card 2 — placeholder ===== */}
          {[
            { label: 'Segera Hadir', note: 'Konsep website berikutnya sedang disiapkan.' },
            { label: 'Segera Hadir', note: 'Konsep website berikutnya sedang disiapkan.' },
          ].map((item, index) => (
            <article
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-slate-50"
            >
              <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-slate-400">
                  <Eye size={22} />
                </div>
                <span className="text-[15px] font-semibold text-slate-500">{item.label}</span>
                <span className="text-center text-[13px] leading-relaxed text-slate-400">
                  {item.note}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}