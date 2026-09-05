'use client';

import { MessageCircle, Instagram, Music2 } from 'lucide-react';

export default function FinalCTA() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/6283891420388?text=${encodeURIComponent('Halo Kreaweb, saya mau tanya tanya dulu')}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="konsultasi" className="bg-white py-16 md:py-24 dark:bg-[#0b1220]">
      <div className="mx-auto max-w-[720px] px-5 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-[#0f172a] px-6 py-12 text-center md:px-12 md:py-16">
          <h2 className="text-[32px] font-bold leading-[1.2] text-white sm:text-[40px] md:text-[48px]">
            Mau mulai punya website profesional?
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-relaxed text-slate-300 md:text-[16px]">
            Ceritakan kebutuhan Anda, kami tentukan solusi website yang paling sesuai.
          </p>

          {/* CTA button */}
          <button
            onClick={handleWhatsApp}
            className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-wa-green px-8 py-4 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-wa-green-dark hover:shadow-[0_6px_24px_rgba(37,211,102,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wa-green active:scale-[0.98] md:text-[16px]"
          >
            <MessageCircle size={20} />
            Hubungi Admin
          </button>

          <p className="mt-4 text-[13px] text-slate-500">
            WhatsApp: <span className="text-slate-300">0838 9142 0388</span>
          </p>

          {/* Social links */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="https://www.tiktok.com/@kreawebjasabuatwebsite?_r=1&_t=ZS-99UBVndi3O6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Kreaweb"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors duration-200 hover:border-slate-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Music2 size={18} />
            </a>
            <a
              href="https://www.instagram.com/kreawebid?stkn=MTA5dngzZG9rbTlidg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Kreaweb"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors duration-200 hover:border-slate-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}