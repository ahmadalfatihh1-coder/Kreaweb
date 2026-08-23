'use client';

import { MessageCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/6282161175424', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="beranda" className="relative scroll-mt-24 overflow-hidden bg-white pt-[100px] md:pt-[140px] pb-16 md:pb-24 dark:bg-[#0b1220]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        <div className="flex flex-col items-start gap-12 md:gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* ========== Left: Text Content ========== */}
          <div className="w-full max-w-[640px] lg:w-1/2">
            {/* Headline */}
            <h1
              className="animate-fade-up text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#0f172a] sm:text-[40px] md:text-[48px] lg:text-[54px] xl:text-[60px] dark:text-white"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
            Jasa Pembuatan Website Profesional, Satset tanpa ribet!
            </h1>

            {/* Subheadline */}
            <p
              className="animate-fade-in mt-5 max-w-[580px] text-[16px] leading-[1.7] text-slate-500 sm:text-[17px] md:mt-6 md:text-[18px] dark:text-slate-400"
              style={{ animationDelay: '0.35s', opacity: 0 }}
            >
              Kami membantu bisnis membangun website modern, cepat, responsif, dan dirancang untuk meningkatkan kepercayaan pelanggan.
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
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-[15px] font-semibold text-slate-700 transition-all duration-200 hover:border-slate-400 hover:text-[#0f172a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-slate-700 dark:bg-[#0b1220] dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white"
              >
                Hasil Website Kami
                <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* ========== Right: Visual Mockup ========== */}
          <div
            className="animate-slide-right w-full lg:w-1/2"
            style={{ animationDelay: '0.6s', opacity: 0 }}
          >
            <div className="relative mx-auto flex h-[380px] w-[320px] items-center justify-center sm:h-[440px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
              {/* Card 1 — back left: developer coding at desk */}
              <div className="absolute left-0 top-6 z-10 w-[195px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_-18px_rgba(15,23,42,0.30)] sm:w-[235px] lg:w-[275px]">
                <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-1 text-[10px] font-medium text-slate-400">coding</span>
                </div>
                <div className="bg-[#f8fafc] p-3">
                  <svg viewBox="0 0 230 150" className="h-[160px] w-full" aria-hidden="true">
                    {/* person (right of monitor) */}
                    <circle cx="184" cy="42" r="13" fill="#0f172a" />
                    <rect x="164" y="56" width="40" height="22" rx="11" fill="#0f172a" />
                    {/* monitor stand & base */}
                    <rect x="80" y="114" width="12" height="12" rx="2" fill="#cbd5e1" />
                    <rect x="68" y="126" width="36" height="6" rx="3" fill="#cbd5e1" />
                    {/* monitor screen (light code editor) */}
                    <rect x="30" y="36" width="112" height="78" rx="7" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
                    <rect x="78" y="14" width="16" height="12" rx="2" fill="#cbd5e1" />
                    {/* code lines */}
                    <rect x="42" y="48" width="34" height="7" rx="3.5" fill="#25D366" />
                    <rect x="82" y="48" width="52" height="7" rx="3.5" fill="#cbd5e1" />
                    <rect x="42" y="62" width="18" height="7" rx="3.5" fill="#94a3b8" />
                    <rect x="66" y="62" width="68" height="7" rx="3.5" fill="#e2e8f0" />
                    <rect x="42" y="76" width="18" height="7" rx="3.5" fill="#94a3b8" />
                    <rect x="66" y="76" width="56" height="7" rx="3.5" fill="#e2e8f0" />
                    <rect x="42" y="90" width="40" height="7" rx="3.5" fill="#25D366" />
                    <rect x="88" y="90" width="44" height="7" rx="3.5" fill="#cbd5e1" />
                  </svg>
                </div>
              </div>

              {/* Card 2 — right middle: modern website preview */}
              <div className="absolute right-0 top-32 z-20 w-[195px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_-18px_rgba(15,23,42,0.35)] sm:w-[235px] lg:w-[275px]">
                <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-1 flex-1 truncate rounded bg-slate-200 px-2 py-0.5 text-[9px] text-slate-500">kreaweb.id</span>
                </div>
                <div className="bg-white p-3">
                  {/* mini navbar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="h-3.5 w-3.5 rounded bg-[#0f172a]" />
                      <span className="text-[10px] font-bold text-[#0f172a]">Kreaweb</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-6 rounded bg-slate-200" />
                      <span className="h-1.5 w-6 rounded bg-slate-200" />
                      <span className="h-4 w-10 rounded-full bg-[#25D366]" />
                    </div>
                  </div>
                  {/* hero text + CTA */}
                  <div className="mt-3">
                    <div className="h-2.5 w-3/4 rounded bg-[#0f172a]" />
                    <div className="mt-1 h-2.5 w-full rounded bg-[#0f172a]/90" />
                    <div className="mt-2 h-1.5 w-full rounded bg-slate-200" />
                    <div className="mt-1 h-1.5 w-2/3 rounded bg-slate-200" />
                    <div className="mt-3 flex gap-2">
                      <div className="h-6 w-16 rounded-full bg-[#25D366]" />
                      <div className="h-6 w-16 rounded-full border border-slate-200" />
                    </div>
                  </div>
                  {/* image placeholder */}
                  <div className="mt-3 flex gap-2">
                    <div className="h-14 flex-1 rounded-lg bg-slate-100" />
                    <div className="h-14 flex-1 rounded-lg bg-slate-100" />
                  </div>
                  <div className="mt-3 flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[#16a34a]">+94%</span>
                    <span className="text-[10px] text-slate-400">kepercayaan calon klien</span>
                  </div>
                </div>
              </div>

              {/* Card 3 — front center: 94% trust stat */}
              <div className="absolute bottom-0 left-1/2 z-30 w-[225px] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_60px_-25px_rgba(15,23,42,0.35)] sm:w-[265px] lg:w-[310px]">
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#16a34a]">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="3 17 9 11 13 15 21 7" />
                        <polyline points="15 7 21 7 21 13" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-[30px] font-extrabold leading-none text-[#0f172a]">94%</div>
                      <div className="mt-1 text-[11px] font-medium text-slate-500">Berdasarkan data website</div>
                    </div>
                  </div>
                  <p className="mt-4 text-[13px] leading-snug text-slate-600">
                    Website profesional dipercaya mampu meningkatkan{' '}
                    <span className="font-semibold text-[#0f172a]">kepercayaan calon klien</span>.
                  </p>
                  <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-[#25D366] to-[#16a34a]" />
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