'use client';

import { MessageCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/6282161175424', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden bg-white pt-[100px] md:pt-[140px] pb-16 md:pb-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        <div className="flex flex-col items-start gap-12 md:gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* ========== Left: Text Content ========== */}
          <div className="w-full max-w-[640px] lg:w-1/2">
            {/* Headline */}
            <h1
              className="animate-fade-up text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#0f172a] sm:text-[40px] md:text-[48px] lg:text-[54px] xl:text-[60px]"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              Buat website untuk memperluas jangkauan produk atau jasa yang kamu tawarkan.
            </h1>

            {/* Subheadline */}
            <p
              className="animate-fade-in mt-5 max-w-[580px] text-[16px] leading-[1.7] text-slate-500 sm:text-[17px] md:mt-6 md:text-[18px]"
              style={{ animationDelay: '0.35s', opacity: 0 }}
            >
              Website profesional yang cepat, modern, dan siap membangun kepercayaan pelanggan.
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-in mt-7 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-9"
              style={{ animationDelay: '0.55s', opacity: 0 }}
            >
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-wa-green px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-wa-green-dark hover:shadow-[0_6px_22px_rgba(37,211,102,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wa-green active:scale-[0.98]"
              >
                <MessageCircle size={18} />
                Konsultasi Gratis
              </button>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-[15px] font-semibold text-slate-700 transition-all duration-200 hover:border-slate-400 hover:text-[#0f172a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Lihat Portfolio
                <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* ========== Right: Visual Mockup ========== */}
          <div
            className="animate-slide-right w-full lg:w-1/2"
            style={{ animationDelay: '0.6s', opacity: 0 }}
          >
            <div className="relative mx-auto flex h-[340px] w-[320px] items-center justify-center sm:h-[400px] sm:w-[380px] lg:h-[460px] lg:w-[460px]">
              {/* Card 1 — back left (dark blue website preview) */}
              <div className="absolute left-0 top-10 z-10 w-[190px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_-15px_rgba(15,42,74,0.35)] sm:w-[230px] lg:w-[260px]">
                <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                </div>
                <div className="space-y-2 bg-[#0f2a4a] p-3">
                  <div className="h-3 w-3/4 rounded bg-[#3b82f6]" />
                  <div className="h-2 w-full rounded bg-[#1e3a5f]" />
                  <div className="h-2 w-5/6 rounded bg-[#1e3a5f]" />
                  <div className="mt-1 flex gap-2">
                    <div className="h-6 w-14 rounded bg-[#25D366]" />
                    <div className="h-6 w-14 rounded bg-[#3b82f6]/30" />
                  </div>
                </div>
                <div className="space-y-2 p-3">
                  <div className="h-2 w-full rounded bg-slate-100" />
                  <div className="h-2 w-3/4 rounded bg-slate-100" />
                </div>
              </div>

              {/* Card 2 — right middle (light website preview) */}
              <div className="absolute right-0 top-24 z-20 w-[190px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_-15px_rgba(15,42,74,0.4)] sm:w-[230px] lg:w-[260px]">
                <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                </div>
                <div className="space-y-2.5 p-3">
                  <div className="h-3 w-1/2 rounded bg-[#3b82f6]" />
                  <div className="flex gap-2">
                    <div className="h-14 flex-1 rounded-lg bg-slate-100" />
                    <div className="h-14 flex-1 rounded-lg bg-slate-100" />
                  </div>
                  <div className="h-2 w-full rounded bg-slate-100" />
                  <div className="h-2 w-2/3 rounded bg-slate-100" />
                </div>
              </div>

              {/* Card 3 — front center (main website preview) */}
              <div className="absolute bottom-0 left-1/2 z-30 w-[220px] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_60px_-20px_rgba(15,42,74,0.5)] sm:w-[250px] lg:w-[285px]">
                <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
                  <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
                </div>
                <div className="space-y-3 p-4">
                  <div className="space-y-2 rounded-lg bg-[#f8fafc] p-3">
                    <div className="h-3 w-2/3 rounded bg-[#0f2a4a]" />
                    <div className="h-2 w-full rounded bg-slate-200" />
                    <div className="mt-1 h-7 w-24 rounded-full bg-[#25D366]" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-12 flex-1 rounded-lg bg-slate-100" />
                    <div className="h-12 flex-1 rounded-lg bg-slate-100" />
                    <div className="h-12 flex-1 rounded-lg bg-slate-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}