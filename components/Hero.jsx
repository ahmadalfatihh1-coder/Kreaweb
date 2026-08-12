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
            <div className="relative mx-auto max-w-[520px]">
              {/* Browser mockup frame */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
                {/* Browser top bar */}
                <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                </div>

                {/* Mockup content */}
                <div className="space-y-4 p-5 md:p-6">
                  {/* Hero placeholder */}
                  <div className="space-y-2 rounded-lg bg-[#f8fafc] p-4 md:p-5">
                    <div className="h-4 w-2/3 rounded bg-slate-200" />
                    <div className="h-4 w-1/2 rounded bg-slate-100" />
                    <div className="mt-2 h-8 w-36 rounded-full bg-[#3b82f6]" />
                  </div>

                  {/* Section placeholder */}
                  <div className="space-y-2.5 rounded-lg border border-slate-100 bg-white p-4 md:p-5">
                    <div className="h-3 w-1/3 rounded bg-slate-200" />
                    <div className="flex gap-3">
                      <div className="h-16 flex-1 rounded-lg bg-slate-50" />
                      <div className="h-16 flex-1 rounded-lg bg-slate-50" />
                      <div className="h-16 flex-1 rounded-lg bg-slate-50" />
                    </div>
                  </div>

                  {/* Another placeholder */}
                  <div className="space-y-2 rounded-lg border border-slate-100 bg-white p-4 md:p-5">
                    <div className="h-3 w-1/4 rounded bg-slate-200" />
                    <div className="h-2 w-full rounded bg-slate-50" />
                    <div className="h-2 w-5/6 rounded bg-slate-50" />
                  </div>
                </div>
              </div>

              {/* Floating accent element — subtle */}
              <div
                className="animate-float absolute -right-3 -top-3 hidden h-14 w-14 items-center justify-center rounded-2xl bg-[#3b82f6] shadow-[0_8px_28px_rgba(59,130,246,0.35)] md:flex"
                aria-hidden="true"
              >
                <span className="text-lg font-bold text-white">✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}